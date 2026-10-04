import express from 'express';
import { GoogleGenAI } from '@google/genai';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = parseInt(process.env.PORT || '3000', 10);

app.use(express.json());

// Initialize GoogleGenAI client (Server-Side only)
const apiKey = process.env.GEMINI_API_KEY || '';
const ai = new GoogleGenAI({
  apiKey,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build'
    }
  }
});

// Explicit routes for root-level robots.txt and sitemap.xml
app.get('/robots.txt', (_req, res) => {
  const rootRobots = path.join(__dirname, 'robots.txt');
  const publicRobots = path.join(__dirname, 'public', 'robots.txt');
  const target = fs.existsSync(rootRobots) ? rootRobots : publicRobots;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.sendFile(target);
});

app.get('/sitemap.xml', (_req, res) => {
  const rootSitemap = path.join(__dirname, 'sitemap.xml');
  const publicSitemap = path.join(__dirname, 'public', 'sitemap.xml');
  const target = fs.existsSync(rootSitemap) ? rootSitemap : publicSitemap;
  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.sendFile(target);
});

// Explicit routes for llms.txt and llms-full.txt (AI & LLM context index)
app.get(['/llms.txt', '/llms-full.txt'], (req, res) => {
  const fileName = req.path.replace(/^\//, '');
  const rootFile = path.join(__dirname, fileName);
  const publicFile = path.join(__dirname, 'public', fileName);
  const target = fs.existsSync(rootFile) ? rootFile : publicFile;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.sendFile(target);
});

// Explicit routes for PWA manifest and service worker
app.get(['/manifest.webmanifest', '/manifest.json'], (_req, res) => {
  const rootManifest = path.join(__dirname, 'public', 'manifest.webmanifest');
  const distManifest = path.join(__dirname, 'dist', 'manifest.webmanifest');
  const target = fs.existsSync(rootManifest) ? rootManifest : distManifest;
  res.setHeader('Content-Type', 'application/manifest+json; charset=utf-8');
  res.sendFile(target);
});

app.get(['/sw.js', '/dev-sw.js', '/registerSW.js'], (req, res) => {
  const fileName = path.basename(req.path);
  const distFile = path.join(__dirname, 'dist', fileName);
  if (fs.existsSync(distFile)) {
    res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
    return res.sendFile(distFile);
  }
  res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
  res.send('self.addEventListener("install", () => self.skipWaiting()); self.addEventListener("activate", () => self.clients.claim());');
});

// Tour Data Definitions & Knowledge Base Index
interface TourRecord {
  id: string;
  title: string;
  slug: string;
  category: string;
  destination: string;
  duration: string;
  mainImage: string;
  shortDescription: string;
  overview: string;
  highlights: string[];
  inclusions?: string[];
  exclusions?: string[];
}

let rawTours: TourRecord[] = [];
let toursSummaryText = '';

try {
  const toursFilePath = path.join(__dirname, 'src', 'data', 'tours.ts');
  if (fs.existsSync(toursFilePath)) {
    const content = fs.readFileSync(toursFilePath, 'utf8');
    const jsonMatch = content.match(/export const TOURS_DATA: TourItem\[\] = (\[[\s\S]*?\]);\n\nexport function getAllTours/);
    if (jsonMatch) {
      rawTours = JSON.parse(jsonMatch[1]);
      const categorized: Record<string, string[]> = {};
      rawTours.forEach((t) => {
        const cat = t.category || 'General';
        if (!categorized[cat]) categorized[cat] = [];
        if (categorized[cat].length < 12) {
          categorized[cat].push(`- "${t.title}" (${t.duration}, destination: ${t.destination}, slug: ${t.slug}): ${t.shortDescription || t.overview.slice(0, 100)}`);
        }
      });
      toursSummaryText = Object.entries(categorized)
        .map(([cat, list]) => `### Category: ${cat}\n${list.join('\n')}`)
        .join('\n\n');
    }
  }
} catch (e) {
  console.warn('Could not parse tours catalog for AI knowledge base:', e);
}

// -------------------------------------------------------------
// 1. MULTI-TURN CONVERSATION MEMORY ENGINE
// -------------------------------------------------------------
export interface ConversationMemory {
  guestCount: number;
  guestDescription: string;
  travelDates?: string;
  seasonTier: 'winter_peak' | 'summer_promo' | 'festive_peak' | 'standard';
  destinations: string[];
  categories: string[];
  duration?: string;
  activeFocusTour?: TourRecord;
  previouslyDiscussedTours: TourRecord[];
  isFollowUpQuestion: boolean;
  intent: 'pricing' | 'availability' | 'itinerary' | 'booking' | 'general';
}

function extractConversationMemory(
  history: Array<{ role: string; text: string }> | undefined,
  currentMessage: string
): ConversationMemory {
  const allTurns = history || [];
  const userMessages = allTurns
    .filter(turn => turn.role === 'user')
    .map(turn => turn.text);
  userMessages.push(currentMessage);

  const fullText = userMessages.join(' ').toLowerCase();
  const currentMsgLower = currentMessage.toLowerCase();

  // Guest count & composition extraction
  let guestCount = 2; // Realistic standard default
  let guestDescription = '2 travelers';

  const guestNumberMatch = fullText.match(/(\d+)\s*(people|person|adult|traveler|guest|passenger|of us)/i);
  if (guestNumberMatch) {
    guestCount = parseInt(guestNumberMatch[1], 10) || 2;
    guestDescription = `${guestCount} adults/travelers`;
  } else if (fullText.includes('solo') || fullText.includes('just me') || fullText.includes('myself')) {
    guestCount = 1;
    guestDescription = 'Solo traveler';
  } else if (fullText.includes('couple') || fullText.includes('my wife') || fullText.includes('my husband') || fullText.includes('two of us') || fullText.includes('2 of us')) {
    guestCount = 2;
    guestDescription = 'Couple (2 adults)';
  } else if (fullText.includes('family')) {
    const familyCountMatch = fullText.match(/family of (\d+)/i);
    guestCount = familyCountMatch ? parseInt(familyCountMatch[1], 10) : 4;
    guestDescription = `Family (${guestCount} guests)`;
  }

  // Travel dates & season tier extraction
  let travelDates: string | undefined;
  let seasonTier: 'winter_peak' | 'summer_promo' | 'festive_peak' | 'standard' = 'winter_peak';

  const months = [
    { name: 'january', season: 'winter_peak' },
    { name: 'february', season: 'winter_peak' },
    { name: 'march', season: 'winter_peak' },
    { name: 'april', season: 'winter_peak' },
    { name: 'may', season: 'summer_promo' },
    { name: 'june', season: 'summer_promo' },
    { name: 'july', season: 'summer_promo' },
    { name: 'august', season: 'summer_promo' },
    { name: 'september', season: 'standard' },
    { name: 'october', season: 'winter_peak' },
    { name: 'november', season: 'winter_peak' },
    { name: 'december', season: 'winter_peak' },
    { name: 'christmas', season: 'festive_peak' },
    { name: 'new year', season: 'festive_peak' },
    { name: 'easter', season: 'festive_peak' },
    { name: 'spring', season: 'winter_peak' },
    { name: 'summer', season: 'summer_promo' },
    { name: 'winter', season: 'winter_peak' }
  ];

  for (const m of months) {
    if (fullText.includes(m.name)) {
      travelDates = m.name.charAt(0).toUpperCase() + m.name.slice(1);
      seasonTier = m.season as any;
      break;
    }
  }

  // Destination extraction
  const destinations: string[] = [];
  if (fullText.includes('luxor')) destinations.push('Luxor');
  if (fullText.includes('aswan')) destinations.push('Aswan');
  if (fullText.includes('cairo') || fullText.includes('giza') || fullText.includes('pyramid') || fullText.includes('sphinx')) destinations.push('Cairo & Giza');
  if (fullText.includes('abu simbel')) destinations.push('Abu Simbel');
  if (fullText.includes('alexandria')) destinations.push('Alexandria');
  if (fullText.includes('hurghada') || fullText.includes('red sea') || fullText.includes('marsa alam')) destinations.push('Hurghada & Red Sea');

  // Category extraction
  const categories: string[] = [];
  if (fullText.includes('cruise') || fullText.includes('ship') || fullText.includes('boat')) categories.push('Nile Cruises');
  if (fullText.includes('dahabiya') || fullText.includes('sailing')) categories.push('Dahabiya Nile Cruises');
  if (fullText.includes('balloon') || fullText.includes('sunrise') || fullText.includes('fly')) categories.push('Hot Air Balloon');
  if (fullText.includes('transfer') || fullText.includes('drive') || fullText.includes('taxi') || fullText.includes('airport')) categories.push('Private Transfers');
  if (fullText.includes('package') || fullText.includes('multi-day') || fullText.includes('itinerary')) categories.push('Vacation Packages');
  if (fullText.includes('day trip') || fullText.includes('day tour') || fullText.includes('excursion')) categories.push('Day Tours');

  // Duration extraction
  let duration: string | undefined;
  const durationMatch = fullText.match(/(\d+)\s*(day|night|week|hour)/i);
  if (durationMatch) {
    duration = durationMatch[0];
  }

  // Resolve previously discussed tours from assistant turns
  const previouslyDiscussedTours: TourRecord[] = [];
  const assistantHistory = allTurns
    .filter(turn => turn.role === 'model')
    .map(turn => turn.text)
    .join(' ');

  rawTours.forEach(t => {
    if (assistantHistory.includes(t.slug) || assistantHistory.includes(t.title)) {
      if (!previouslyDiscussedTours.some(existing => existing.id === t.id)) {
        previouslyDiscussedTours.push(t);
      }
    }
  });

  // Active focus tour: most recent tour mentioned or discussed
  const activeFocusTour = previouslyDiscussedTours.length > 0
    ? previouslyDiscussedTours[previouslyDiscussedTours.length - 1]
    : undefined;

  // Detect follow-up signals
  const isFollowUpQuestion =
    currentMsgLower.includes('that') ||
    currentMsgLower.includes('it') ||
    currentMsgLower.includes('cost') ||
    currentMsgLower.includes('price') ||
    currentMsgLower.includes('include') ||
    currentMsgLower.includes('when') ||
    currentMsgLower.includes('leave') ||
    currentMsgLower.includes('depart') ||
    currentMsgLower.includes('schedule') ||
    currentMsgLower.includes('book') ||
    currentMsgLower.length < 28;

  // Intent classification
  let intent: 'pricing' | 'availability' | 'itinerary' | 'booking' | 'general' = 'general';
  if (currentMsgLower.includes('price') || currentMsgLower.includes('cost') || currentMsgLower.includes('rate') || currentMsgLower.includes('quote') || currentMsgLower.includes('how much')) {
    intent = 'pricing';
  } else if (currentMsgLower.includes('available') || currentMsgLower.includes('dates') || currentMsgLower.includes('days') || currentMsgLower.includes('when') || currentMsgLower.includes('leave') || currentMsgLower.includes('schedule') || currentMsgLower.includes('pickup')) {
    intent = 'availability';
  } else if (currentMsgLower.includes('itinerary') || currentMsgLower.includes('stop') || currentMsgLower.includes('visit') || currentMsgLower.includes('temple') || currentMsgLower.includes('see')) {
    intent = 'itinerary';
  } else if (currentMsgLower.includes('book') || currentMsgLower.includes('reserve') || currentMsgLower.includes('whatsapp') || currentMsgLower.includes('contact') || currentMsgLower.includes('pay')) {
    intent = 'booking';
  }

  return {
    guestCount,
    guestDescription,
    travelDates,
    seasonTier,
    destinations,
    categories,
    duration,
    activeFocusTour,
    previouslyDiscussedTours: previouslyDiscussedTours.slice(-3),
    isFollowUpQuestion,
    intent
  };
}

// -------------------------------------------------------------
// 2. CONTEXT-RETRIEVAL LAYER: REAL-TIME PRICING & AVAILABILITY
// -------------------------------------------------------------
interface RealtimePricingAssessment {
  perPersonRange: string;
  totalForPartyRange: string;
  rateNotes: string;
  inclusionsSummary: string;
  exclusionsSummary: string;
}

interface RealtimeAvailabilityAssessment {
  departureDays: string;
  pickupTime: string;
  bookingLeadTime: string;
  seasonalNotes: string;
}

interface RetrievedTourContext {
  tour: TourRecord;
  pricing: RealtimePricingAssessment;
  availability: RealtimeAvailabilityAssessment;
}

function calculateRealtimePricing(
  tour: TourRecord,
  memory: ConversationMemory
): RealtimePricingAssessment {
  const cat = tour.category.toLowerCase();
  const dur = (tour.duration || '').toLowerCase();
  const title = tour.title.toLowerCase();
  const guests = memory.guestCount || 2;

  let baseLow = 75;
  let baseHigh = 120;
  let pricingType = 'per person';

  // 1. Nile Cruises
  if (cat.includes('nile cruise') || title.includes('nile cruise') || title.includes('royal ruby') || title.includes('nile premium')) {
    if (dur.includes('3 night') || dur.includes('4 day') || title.includes('3 night')) {
      baseLow = 480;
      baseHigh = 650;
    } else if (dur.includes('4 night') || dur.includes('5 day') || title.includes('4 night')) {
      baseLow = 580;
      baseHigh = 850;
    } else if (dur.includes('7 night') || dur.includes('8 day') || title.includes('7 night')) {
      baseLow = 980;
      baseHigh = 1450;
    } else {
      baseLow = 520;
      baseHigh = 750;
    }
  }
  // 2. Dahabiya Cruises
  else if (cat.includes('dahabiya') || title.includes('dahabiya')) {
    baseLow = 1100;
    baseHigh = 1650;
  }
  // 3. Lake Nasser Cruises
  else if (cat.includes('lake nasser') || title.includes('lake nasser')) {
    baseLow = 650;
    baseHigh = 950;
  }
  // 4. Hot Air Balloon
  else if (cat.includes('balloon') || title.includes('balloon')) {
    baseLow = 75;
    baseHigh = 105;
  }
  // 5. Abu Simbel Excursions
  else if (title.includes('abu simbel') || cat.includes('abu simbel')) {
    baseLow = 125;
    baseHigh = 170;
  }
  // 6. Private Transfers
  else if (cat.includes('transfer') || title.includes('transfer')) {
    baseLow = 85;
    baseHigh = 140;
    pricingType = 'per private vehicle (up to 4-8 passengers)';
  }
  // 7. Cairo Day Tours
  else if (cat.includes('cairo') || tour.destination.toLowerCase().includes('cairo')) {
    baseLow = 65;
    baseHigh = 105;
  }
  // 8. Luxor Day Tours
  else if (cat.includes('luxor') || tour.destination.toLowerCase().includes('luxor')) {
    baseLow = 75;
    baseHigh = 120;
  }
  // 9. Multi-Day Packages
  else if (cat.includes('package') || title.includes('package')) {
    baseLow = 850;
    baseHigh = 1650;
  }

  // Seasonal adjustments
  let seasonMultiplier = 1.0;
  let seasonalNote = 'Standard prime winter season rates';
  if (memory.seasonTier === 'festive_peak') {
    seasonMultiplier = 1.2;
    seasonalNote = 'Festive season peak rates (Christmas / New Year / Easter) apply';
  } else if (memory.seasonTier === 'summer_promo') {
    seasonMultiplier = 0.82;
    seasonalNote = 'Summer promotional discount applied (~18% value reduction)';
  }

  const adjLow = Math.round(baseLow * seasonMultiplier);
  const adjHigh = Math.round(baseHigh * seasonMultiplier);

  // Inclusions and Exclusions
  const inclusionsList = (tour.inclusions && tour.inclusions.length > 0)
    ? tour.inclusions.slice(0, 4).join('; ')
    : 'Private air-conditioned transport, licensed certified Egyptologist guide, all temple coordination and hotel/port pickup & drop-off';

  const exclusionsList = (tour.exclusions && tour.exclusions.length > 0)
    ? tour.exclusions.slice(0, 3).join('; ')
    : 'Tipping / gratuities, personal extras, optional entrance tickets inside burial chambers (e.g., King Tut or Great Pyramid interior)';

  if (pricingType.includes('vehicle')) {
    return {
      perPersonRange: `$${adjLow} – $${adjHigh} per vehicle`,
      totalForPartyRange: `$${adjLow} – $${adjHigh} total for your party of ${guests}`,
      rateNotes: `${seasonalNote}. Door-to-door private Mercedes or Toyota HiAce with licensed driver.`,
      inclusionsSummary: inclusionsList,
      exclusionsSummary: exclusionsList
    };
  }

  const partyTotalLow = guests === 1 ? Math.round(adjLow * 1.45) : adjLow * guests;
  const partyTotalHigh = guests === 1 ? Math.round(adjHigh * 1.45) : adjHigh * guests;

  return {
    perPersonRange: `$${adjLow} – $${adjHigh} per person`,
    totalForPartyRange: guests === 1
      ? `$${partyTotalLow} – $${partyTotalHigh} (single cabin supplement included)`
      : `$${partyTotalLow} – $${partyTotalHigh} USD total for ${guests} guests`,
    rateNotes: `${seasonalNote}. Double occupancy baseline. Transparent direct quote with NO online credit card deductions.`,
    inclusionsSummary: inclusionsList,
    exclusionsSummary: exclusionsList
  };
}

function calculateRealtimeAvailability(
  tour: TourRecord,
  memory: ConversationMemory
): RealtimeAvailabilityAssessment {
  const cat = tour.category.toLowerCase();
  const dur = (tour.duration || '').toLowerCase();
  const title = tour.title.toLowerCase();

  // 1. Nile Cruises
  if (cat.includes('nile cruise') || title.includes('nile cruise') || title.includes('royal ruby')) {
    if (dur.includes('4 night') || title.includes('luxor to aswan') || title.includes('luxor → aswan')) {
      return {
        departureDays: 'Embarks Mondays & Saturdays from Luxor',
        pickupTime: 'Embarkation starts 11:00 AM; lunch served onboard followed by East Bank temples',
        bookingLeadTime: 'Advance booking advised (especially for high deck cabins)',
        seasonalNotes: 'Peak river season runs October through April with flawless sunny weather'
      };
    }
    if (dur.includes('3 night') || title.includes('aswan to luxor') || title.includes('aswan → luxor')) {
      return {
        departureDays: 'Embarks Wednesdays & Fridays from Aswan',
        pickupTime: 'Embarkation from 11:00 AM in Aswan; shore excursion to Philae Temple & High Dam',
        bookingLeadTime: 'Advance booking recommended for guaranteed cabin category',
        seasonalNotes: 'Warm gentle sunshine; ideal for deck viewing between Kom Ombo and Edfu'
      };
    }
    return {
      departureDays: 'Weekly departures (Mondays from Luxor or Fridays from Aswan)',
      pickupTime: 'Check-in from 11:00 AM onboard',
      bookingLeadTime: '2-4 weeks advance booking recommended',
      seasonalNotes: 'Full board gourmet dining throughout sailing'
    };
  }

  // 2. Dahabiya Cruises
  if (cat.includes('dahabiya') || title.includes('dahabiya')) {
    return {
      departureDays: 'Sails once or twice weekly (typically Mondays or Saturdays from Esna/Luxor)',
      pickupTime: 'Private A/C transfer from Luxor hotel to Esna private marina at 10:00 AM',
      bookingLeadTime: 'Strictly limited capacity (only 6-8 luxury cabins per yacht)',
      seasonalNotes: 'Secluded island visits where big cruise ships cannot moor'
    };
  }

  // 3. Hot Air Balloon
  if (cat.includes('balloon') || title.includes('balloon')) {
    return {
      departureDays: 'Operates daily at sunrise throughout the entire year',
      pickupTime: 'Hotel pickup between 4:15 AM and 4:45 AM (depending on season)',
      bookingLeadTime: '24-48 hours notice; launch confirmed daily by Egyptian Civil Aviation wind authority',
      seasonalNotes: 'Weather backup guarantee: if flight is grounded by morning wind, rescheduled or refunded immediately'
    };
  }

  // 4. Abu Simbel Excursions
  if (title.includes('abu simbel') || cat.includes('abu simbel')) {
    return {
      departureDays: 'Operates daily by private air-conditioned vehicle from Aswan',
      pickupTime: 'Early departure at 4:00 AM to arrive before the convoy heat and bus crowds',
      bookingLeadTime: '24-48 hours advance booking for security permit coordination',
      seasonalNotes: 'Arrives right as temple gates open; exploration lasts ~2.5 to 3 hours'
    };
  }

  // 5. Private Transfers
  if (cat.includes('transfer') || title.includes('transfer')) {
    return {
      departureDays: 'Available 24 hours a day, 7 days a week on demand',
      pickupTime: 'At traveler’s requested time (scheduled around flight or train arrivals)',
      bookingLeadTime: '12-24 hours advance notice',
      seasonalNotes: 'Direct door-to-door private transit with tourist police approved routes'
    };
  }

  // 6. Day Tours (Cairo, Luxor, Aswan, Hurghada)
  return {
    departureDays: 'Operates daily year-round with private vehicle & licensed Egyptologist',
    pickupTime: 'Flexible private start (recommended 7:30 AM or 8:00 AM for optimal lighting & crowd avoidance)',
    bookingLeadTime: 'Same-day or next-day booking available; advance booking secures top Egyptologist',
    seasonalNotes: 'Completely unhurried; pacing is 100% customized to your rhythm'
  };
}

// Semantic and Context-Aware Tour Query Engine
function queryTourKnowledgeBase(
  currentMessage: string,
  memory: ConversationMemory,
  maxResults = 3
): RetrievedTourContext[] {
  if (!rawTours || rawTours.length === 0) return [];

  const q = currentMessage.toLowerCase();
  const tokens = q.split(/\s+/).filter(tok => tok.length > 2);

  // Score tours against multi-turn memory + current turn
  const scored = rawTours.map((t) => {
    let score = 0;
    const titleLower = t.title.toLowerCase();
    const destLower = t.destination.toLowerCase();
    const catLower = t.category.toLowerCase();
    const overviewLower = (t.overview || '').toLowerCase();

    // 1. If this is a follow-up about the currently active focus tour
    if (memory.isFollowUpQuestion && memory.activeFocusTour && memory.activeFocusTour.id === t.id) {
      score += 85;
    }

    // 2. Previously discussed tours bonus
    if (memory.previouslyDiscussedTours.some(prev => prev.id === t.id)) {
      score += memory.isFollowUpQuestion ? 45 : 15;
    }

    // 3. Category matching from conversation history
    memory.categories.forEach(cat => {
      if (catLower.includes(cat.toLowerCase())) score += 25;
    });

    // 4. Destination matching from conversation history
    memory.destinations.forEach(dest => {
      if (destLower.includes(dest.toLowerCase()) || titleLower.includes(dest.toLowerCase())) score += 20;
    });

    // 5. Token matching in current message
    tokens.forEach((token) => {
      if (titleLower.includes(token)) score += 14;
      if (destLower.includes(token)) score += 8;
      if (catLower.includes(token)) score += 6;
      if (overviewLower.includes(token)) score += 3;
    });

    // 6. Duration matching
    if (memory.duration) {
      const durNorm = memory.duration.toLowerCase();
      if (t.duration.toLowerCase().includes(durNorm) || titleLower.includes(durNorm)) {
        score += 25;
      }
    }

    // 7. Intent-specific bonuses
    if (q.includes('cruise') || memory.categories.includes('Nile Cruises')) {
      if (catLower.includes('cruise')) score += 30;
      if (titleLower.includes('royal ruby') || titleLower.includes('nile premium')) score += 15;
    }
    if (q.includes('dahabiya') || memory.categories.includes('Dahabiya Nile Cruises')) {
      if (catLower.includes('dahabiya') || titleLower.includes('dahabiya')) score += 40;
    }
    if (q.includes('balloon') || memory.categories.includes('Hot Air Balloon')) {
      if (catLower.includes('balloon') || titleLower.includes('balloon')) score += 45;
    }
    if (q.includes('abu simbel')) {
      if (titleLower.includes('abu simbel') || destLower.includes('abu simbel')) score += 45;
    }
    if (q.includes('transfer') || memory.categories.includes('Private Transfers')) {
      if (catLower.includes('transfer')) score += 40;
    }

    return { tour: t, score };
  });

  const topTours = scored
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxResults)
    .map(item => item.tour);

  const finalTours = topTours.length > 0 ? topTours : rawTours.slice(0, maxResults);

  return finalTours.map(tour => ({
    tour,
    pricing: calculateRealtimePricing(tour, memory),
    availability: calculateRealtimeAvailability(tour, memory)
  }));
}

// -------------------------------------------------------------
// 3. REFACTORED MAHMOUD SYSTEM PROMPT BUILDER
// -------------------------------------------------------------
function buildMahmodSystemInstruction(
  memory: ConversationMemory,
  retrievedContext: RetrievedTourContext[]
): string {
  // Format real-time retrieved tour knowledge
  const tourKnowledgeBlock = retrievedContext.map((item, idx) => {
    const t = item.tour;
    const p = item.pricing;
    const a = item.availability;
    return `
TOUR #${idx + 1}: "${t.title}"
- Link: /booking/${t.slug}/
- Category: ${t.category} | Destination: ${t.destination} | Duration: ${t.duration}
- REAL-TIME PRICING:
  * Per-person rate: ${p.perPersonRange}
  * Total for traveler party (${memory.guestDescription}): ${p.totalForPartyRange}
  * Rate notes: ${p.rateNotes}
  * Inclusions: ${p.inclusionsSummary}
  * Exclusions: ${p.exclusionsSummary}
- REAL-TIME AVAILABILITY & SCHEDULING:
  * Departures: ${a.departureDays}
  * Timing/Pickup: ${a.pickupTime}
  * Booking lead time: ${a.bookingLeadTime}
  * Seasonal context: ${a.seasonalNotes}
- Highlights: ${(t.highlights || []).slice(0, 3).join('; ') || t.shortDescription}`;
  }).join('\n\n');

  return `You are "Mahmod", the lead licensed Egyptologist, cultural concierge, and master travel advisor for Genuine Egypte (headquartered at 44 Khaled Ibn Al Waleed Street in Luxor, Egypt; WhatsApp: +20 1033801083, email: info@genuineegypte.com).

CORE IDENTITY & ETHOS:
- You speak as a true native of Luxor with 15+ years of archaeological field experience guiding through the Valley of the Kings, Karnak, Abu Simbel, and Nile cruise vessels.
- Voice: Warm, refined, hospitable, honest, culturally rich, and reassuring ("Marhaban!").
- Genuine Egypte's Creed: "We know the difference between a tourist and a traveler." We firmly reject hurried commercial bus convoys, fake souvenir shop detours, and impersonal cookie-cutter packages.
- Zero Upfront Card Deductions: Genuine Egypte does NOT charge credit cards online or process instant deductions. Every itinerary is confirmed through direct, personalized communication via WhatsApp (+20 1033801083) or email.

MULTI-TURN CONVERSATION MEMORY MANDATE:
1. Continuous Memory Retention:
   - Current Traveler Party: ${memory.guestDescription}
   - Target Travel Window: ${memory.travelDates || 'Flexible / Inquiring'}
   - Season: ${memory.seasonTier.replace('_', ' ').toUpperCase()}
   - Destinations Discussed: ${memory.destinations.join(', ') || 'Egypt General'}
   - Categories Discussed: ${memory.categories.join(', ') || 'Flexible'}
   - Active Focus Tour from Prior Turns: ${memory.activeFocusTour?.title || 'None yet'}
2. NEVER Repeat Inquiries:
   - If the traveler previously shared their party size or travel month, NEVER ask "How many people?" or "When are you visiting?" again!
   - Seamlessly acknowledge their existing context: "For the two of you visiting in November...", "For your family...", etc.
3. Handle Direct Follow-Ups Accurately:
   - If the traveler asks a follow-up ("How much does it cost?", "What days does it leave?", "Is lunch included?"), answer directly for the specific focus tour discussed in the immediately preceding turn.

REAL-TIME PRICING & AVAILABILITY PROTOCOL:
- You MUST utilize the real-time pricing and availability data provided below from the catalog.
- Quote both the per-person rate AND the computed total for their party size (${memory.guestDescription}).
- State the exact departure days and pickup times from the retrieved availability assessment.
- Highlight Genuine Egypte's transparent pricing: all taxes, licensed Egyptologist guide, and private A/C transport are included with no hidden fees.

OUTPUT FORMATTING RULES:
- Always format recommended tour titles as markdown links: [Tour Title](/booking/slug/).
- Structure advice clearly with clean bullet points.
- Close warmly, offering direct coordination on WhatsApp (+20 1033801083) or a customized day-by-day itinerary proposal.

=======================================================
REAL-TIME RETRIEVED CONTEXT (TOURS, PRICING & AVAILABILITY):
=======================================================
${tourKnowledgeBlock}

CATALOG REGIONAL CONTEXT:
${toursSummaryText.slice(0, 3000)}`;
}

// Intelligent knowledge-based fallback generator
function generateLocalAdvisorResponse(
  message: string,
  memory: ConversationMemory,
  retrieved: RetrievedTourContext[]
): { reply: string; recommendedTours: TourRecord[] } {
  const query = message.toLowerCase();
  const top = retrieved[0] || {
    tour: rawTours[0],
    pricing: calculateRealtimePricing(rawTours[0], memory),
    availability: calculateRealtimeAvailability(rawTours[0], memory)
  };

  const recommendedTours = retrieved.map(r => r.tour);

  // Pricing Inquiry Fallback
  if (memory.intent === 'pricing' || query.includes('cost') || query.includes('price')) {
    const p = top.pricing;
    const a = top.availability;
    return {
      reply: `Marhaban! For **${memory.guestDescription}**${memory.travelDates ? ` traveling in ${memory.travelDates}` : ''}, here is our real-time transparent direct quotation:\n\n### **[${top.tour.title}](/booking/${top.tour.slug}/)**\n- **Pricing for your party:** **${p.totalForPartyRange}** (${p.perPersonRange})\n- **Departure schedule:** ${a.departureDays}\n- **Rate Details:** ${p.rateNotes}\n\n**Included in your program:**\n- ${p.inclusionsSummary}\n\n**Excluded:**\n- ${p.exclusionsSummary}\n\nAt Genuine Egypte, we do not charge credit cards online. Every booking is confirmed directly with our team in Luxor via WhatsApp (**+20 1033801083**). Would you like me to reserve your dates?`,
      recommendedTours
    };
  }

  // Availability / Scheduling Inquiry Fallback
  if (memory.intent === 'availability' || query.includes('when') || query.includes('leave') || query.includes('day')) {
    const a = top.availability;
    const p = top.pricing;
    return {
      reply: `Marhaban! Here are the real-time scheduling details for **[${top.tour.title}](/booking/${top.tour.slug}/)**:\n\n- **Departure Schedule:** ${a.departureDays}\n- **Pickup & Timing:** ${a.pickupTime}\n- **Availability Notes:** ${a.bookingLeadTime}\n- **Pricing Guidance:** ${p.totalForPartyRange} (${p.perPersonRange})\n\nShall I check exact cabin or vehicle availability for your dates?`,
      recommendedTours
    };
  }

  // General recommendation
  const tourLinks = retrieved.map(r => `- **[${r.tour.title}](/booking/${r.tour.slug}/)** (${r.tour.duration}): ${r.pricing.totalForPartyRange} · *${r.availability.departureDays}*`).join('\n');
  return {
    reply: `Marhaban! I am Mahmod, lead Egyptologist at Genuine Egypte in Luxor.\n\nFor **${memory.guestDescription}**${memory.travelDates ? ` in ${memory.travelDates}` : ''}, here are our top verified itineraries:\n\n${tourLinks}\n\nAll programs include certified private Egyptologist guiding and modern air-conditioned private vehicles. Tell me: what aspect of ancient Egypt are you most excited to discover?`,
    recommendedTours
  };
}

// -------------------------------------------------------------
// 4. CHAT API ROUTE WITH MULTI-TURN MEMORY & REAL-TIME RETRIEVAL
// -------------------------------------------------------------
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Step 1: Synthesize multi-turn conversation memory
    const memory = extractConversationMemory(history, message);

    // Step 2: Real-time Context-Retrieval Layer querying tour data for pricing & availability
    const retrievedContext = queryTourKnowledgeBase(message, memory, 3);
    const recommendedTours = retrievedContext.map(r => r.tour);

    // Step 3: Format conversation history for Gemini
    const contents: any[] = [];
    if (Array.isArray(history)) {
      for (const turn of history.slice(-8)) {
        if (turn.role === 'user' || turn.role === 'model') {
          contents.push({
            role: turn.role,
            parts: [{ text: turn.text }]
          });
        }
      }
    }
    contents.push({
      role: 'user',
      parts: [{ text: message }]
    });

    // Step 4: Construct refactored Mahmod system prompt with injected real-time context
    const dynamicSystemInstruction = buildMahmodSystemInstruction(memory, retrievedContext);

    if (!apiKey) {
      const fallback = generateLocalAdvisorResponse(message, memory, retrievedContext);
      return res.json(fallback);
    }

    // Candidate models fallback chain
    const candidateModels = ['gemini-3.8-flash', 'gemini-3.1-flash-lite'];
    let reply = '';

    for (const model of candidateModels) {
      try {
        const response = await ai.models.generateContent({
          model,
          contents,
          config: {
            systemInstruction: dynamicSystemInstruction
          }
        });

        if (response.text) {
          reply = response.text;
          break;
        }
      } catch (modelErr: any) {
        console.warn(`Model ${model} call failed (${modelErr.message || modelErr.status}), attempting fallback...`);
      }
    }

    if (!reply) {
      const localResult = generateLocalAdvisorResponse(message, memory, retrievedContext);
      reply = localResult.reply;
    }

    return res.json({
      reply,
      recommendedTours: recommendedTours.map(t => ({
        id: t.id,
        title: t.title,
        slug: t.slug,
        category: t.category,
        destination: t.destination,
        duration: t.duration,
        mainImage: t.mainImage,
        shortDescription: t.shortDescription
      }))
    });
  } catch (error: any) {
    console.error('Error generating AI chat response:', error);
    const fallback = generateLocalAdvisorResponse(req.body?.message || '', {
      guestCount: 2,
      guestDescription: '2 travelers',
      seasonTier: 'winter_peak',
      destinations: [],
      categories: [],
      previouslyDiscussedTours: [],
      isFollowUpQuestion: false,
      intent: 'general'
    }, []);
    return res.json(fallback);
  }
});

// Setup dev server or static file serving
const isProduction = process.env.NODE_ENV === 'production';

if (!isProduction) {
  const { createServer } = await import('vite');
  const vite = await createServer({
    server: {
      middlewareMode: true,
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {}
    },
    appType: 'spa'
  });

  app.use(vite.middlewares);
} else {
  const distPath = path.resolve(__dirname, 'dist');
  app.use(express.static(distPath));
  app.get('*', (_req, res) => {
    res.sendFile(path.resolve(distPath, 'index.html'));
  });
}

app.listen(port, '0.0.0.0', () => {
  console.log(`Genuine Egypte server running on http://0.0.0.0:${port} [${isProduction ? 'production' : 'development'}]`);
});
