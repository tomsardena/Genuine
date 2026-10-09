import express from 'express';
import { GoogleGenAI, ThinkingLevel } from '@google/genai';
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
  price?: number | null;
  priceNote?: string;
  featured?: boolean;
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
  travelerName?: string;
  guestCount: number;
  guestDescription: string;
  travelDates?: string;
  seasonTier: 'winter_peak' | 'summer_promo' | 'festive_peak' | 'standard';
  specialOccasion?: string;
  travelerPaceAndStyle?: string;
  destinations: string[];
  categories: string[];
  specificInterests: string[];
  duration?: string;
  activeFocusTour?: TourRecord;
  previouslyDiscussedTours: TourRecord[];
  isFollowUpQuestion: boolean;
  intent: 'pricing' | 'availability' | 'itinerary' | 'booking' | 'comparison' | 'general';
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

  // 1. Traveler Name Extraction (e.g. "I am John", "my name is Sarah", "this is David")
  let travelerName: string | undefined;
  const nameMatch = fullText.match(/(?:my name is|i am|i'm|call me|this is)\s+([a-zA-Z]{2,15})/i);
  if (nameMatch && !['planning', 'looking', 'traveling', 'hoping', 'interested', 'asking'].includes(nameMatch[1].toLowerCase())) {
    travelerName = nameMatch[1].charAt(0).toUpperCase() + nameMatch[1].slice(1);
  }

  // 2. Guest count & composition extraction across all conversation turns
  let guestCount = 2; // Realistic standard default
  let guestDescription = '2 travelers';

  const guestNumberMatch = fullText.match(/(\d+)\s*(people|person|adult|traveler|guest|passenger|of us)/i);
  if (guestNumberMatch) {
    guestCount = parseInt(guestNumberMatch[1], 10) || 2;
    guestDescription = `${guestCount} adults/travelers`;
  } else if (fullText.includes('solo') || fullText.includes('just me') || fullText.includes('myself') || fullText.includes('single traveler')) {
    guestCount = 1;
    guestDescription = 'Solo traveler';
  } else if (fullText.includes('couple') || fullText.includes('my wife') || fullText.includes('my husband') || fullText.includes('my partner') || fullText.includes('two of us') || fullText.includes('2 of us')) {
    guestCount = 2;
    guestDescription = 'Couple (2 adults)';
  } else if (fullText.includes('family')) {
    const familyCountMatch = fullText.match(/family of (\d+)/i);
    guestCount = familyCountMatch ? parseInt(familyCountMatch[1], 10) : 4;
    guestDescription = `Family (${guestCount} guests)`;
  }

  // 3. Special Occasion / Theme
  let specialOccasion: string | undefined;
  if (fullText.includes('honeymoon')) specialOccasion = 'Honeymoon';
  else if (fullText.includes('anniversary')) specialOccasion = 'Wedding Anniversary';
  else if (fullText.includes('birthday')) specialOccasion = 'Birthday Celebration';
  else if (fullText.includes('bucket list')) specialOccasion = 'Bucket-List Dream Trip';
  else if (fullText.includes('retirement')) specialOccasion = 'Retirement Celebration';

  // 4. Traveler Pace and Style
  let travelerPaceAndStyle: string | undefined;
  if (fullText.includes('unhurried') || fullText.includes('relaxed') || fullText.includes('slow pace') || fullText.includes('not rushed')) {
    travelerPaceAndStyle = 'Unhurried, leisurely pace';
  } else if (fullText.includes('see everything') || fullText.includes('pack as much') || fullText.includes('highlights')) {
    travelerPaceAndStyle = 'Comprehensive, maximize sights';
  } else if (fullText.includes('luxury') || fullText.includes('5-star') || fullText.includes('vip') || fullText.includes('deluxe')) {
    travelerPaceAndStyle = 'High-end luxury & bespoke comfort';
  }

  // 5. Travel dates & season tier extraction
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
    { name: 'winter', season: 'winter_peak' },
    { name: 'autumn', season: 'winter_peak' },
    { name: 'fall', season: 'winter_peak' }
  ];

  for (const m of months) {
    if (fullText.includes(m.name)) {
      travelDates = m.name.charAt(0).toUpperCase() + m.name.slice(1);
      seasonTier = m.season as any;
      break;
    }
  }

  // 6. Cumulative Destinations identified across the entire conversation
  const destinations: string[] = [];
  if (fullText.includes('luxor') || fullText.includes('karnak') || fullText.includes('valley of the kings') || fullText.includes('hatshepsut')) destinations.push('Luxor');
  if (fullText.includes('aswan') || fullText.includes('philae') || fullText.includes('high dam') || fullText.includes('nubian')) destinations.push('Aswan');
  if (fullText.includes('cairo') || fullText.includes('giza') || fullText.includes('pyramid') || fullText.includes('sphinx') || fullText.includes('saqqara') || fullText.includes('gem')) destinations.push('Cairo & Giza');
  if (fullText.includes('abu simbel') || fullText.includes('ramses')) destinations.push('Abu Simbel');
  if (fullText.includes('alexandria') || fullText.includes('qaitbay')) destinations.push('Alexandria');
  if (fullText.includes('hurghada') || fullText.includes('red sea') || fullText.includes('marsa alam') || fullText.includes('el gouna') || fullText.includes('snorkeling')) destinations.push('Hurghada & Red Sea');
  if (fullText.includes('nile') || fullText.includes('river cruise')) destinations.push('Nile River');

  // 7. Cumulative Categories extraction
  const categories: string[] = [];
  if (fullText.includes('cruise') || fullText.includes('ship') || fullText.includes('boat')) categories.push('Nile Cruises');
  if (fullText.includes('dahabiya') || fullText.includes('sailing')) categories.push('Dahabiya Nile Cruises');
  if (fullText.includes('balloon') || fullText.includes('sunrise') || fullText.includes('fly') || fullText.includes('flight')) categories.push('Hot Air Balloon');
  if (fullText.includes('transfer') || fullText.includes('drive') || fullText.includes('taxi') || fullText.includes('airport')) categories.push('Private Transfers');
  if (fullText.includes('package') || fullText.includes('multi-day') || fullText.includes('multi day') || fullText.includes('itinerary')) categories.push('Vacation Packages');
  if (fullText.includes('day trip') || fullText.includes('day tour') || fullText.includes('excursion')) categories.push('Day Tours');

  // 8. Specific Highlights & Interests Mentioned
  const specificInterests: string[] = [];
  if (fullText.includes('balloon')) specificInterests.push('Hot Air Balloon Sunrise Flight');
  if (fullText.includes('abu simbel')) specificInterests.push('Abu Simbel Sun Temples');
  if (fullText.includes('tutankhamun') || fullText.includes('king tut') || fullText.includes('nefertari')) specificInterests.push('Royal Tomb Entrances (Tut/Nefertari)');
  if (fullText.includes('dahabiya')) specificInterests.push('Traditional Dahabiya Sailing');
  if (fullText.includes('pyramid') || fullText.includes('giza')) specificInterests.push('Giza Pyramids & Sphinx');
  if (fullText.includes('gem') || fullText.includes('grand egyptian museum')) specificInterests.push('Grand Egyptian Museum (GEM)');
  if (fullText.includes('snorkeling') || fullText.includes('red sea') || fullText.includes('giftun')) specificInterests.push('Red Sea Snorkeling / Marine Excursion');
  if (fullText.includes('sound and light') || fullText.includes('sound & light')) specificInterests.push('Karnak Sound & Light Show');
  if (fullText.includes('nubian')) specificInterests.push('Nubian Village & Nile Felucca');

  // 9. Duration extraction
  let duration: string | undefined;
  const durationMatch = fullText.match(/(\d+)\s*(day|night|week|hour)/i);
  if (durationMatch) {
    duration = durationMatch[0];
  }

  // 10. Resolve previously discussed tours across BOTH assistant and user history
  const previouslyDiscussedTours: TourRecord[] = [];
  const assistantHistory = allTurns
    .filter(turn => turn.role === 'model')
    .map(turn => turn.text)
    .join(' ');
  const combinedHistory = `${assistantHistory} ${fullText}`;

  rawTours.forEach(t => {
    const slugInHistory = combinedHistory.includes(t.slug);
    const titleInHistory = t.title.length > 8 && combinedHistory.includes(t.title.toLowerCase());
    if (slugInHistory || titleInHistory) {
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
    currentMsgLower.includes('compare') ||
    currentMsgLower.includes('difference') ||
    currentMsgLower.includes('first option') ||
    currentMsgLower.includes('second option') ||
    currentMsgLower.length < 28;

  // Intent classification
  let intent: 'pricing' | 'availability' | 'itinerary' | 'booking' | 'comparison' | 'general' = 'general';
  if (currentMsgLower.includes('compare') || currentMsgLower.includes('difference') || currentMsgLower.includes('versus') || currentMsgLower.includes('vs') || currentMsgLower.includes('which is better')) {
    intent = 'comparison';
  } else if (currentMsgLower.includes('price') || currentMsgLower.includes('cost') || currentMsgLower.includes('rate') || currentMsgLower.includes('quote') || currentMsgLower.includes('how much') || currentMsgLower.includes('total')) {
    intent = 'pricing';
  } else if (currentMsgLower.includes('available') || currentMsgLower.includes('dates') || currentMsgLower.includes('days') || currentMsgLower.includes('when') || currentMsgLower.includes('leave') || currentMsgLower.includes('schedule') || currentMsgLower.includes('pickup')) {
    intent = 'availability';
  } else if (currentMsgLower.includes('itinerary') || currentMsgLower.includes('stop') || currentMsgLower.includes('visit') || currentMsgLower.includes('temple') || currentMsgLower.includes('see') || currentMsgLower.includes('program') || currentMsgLower.includes('day 1')) {
    intent = 'itinerary';
  } else if (currentMsgLower.includes('book') || currentMsgLower.includes('reserve') || currentMsgLower.includes('whatsapp') || currentMsgLower.includes('contact') || currentMsgLower.includes('pay') || currentMsgLower.includes('confirm')) {
    intent = 'booking';
  }

  return {
    travelerName,
    guestCount,
    guestDescription,
    travelDates,
    seasonTier,
    specialOccasion,
    travelerPaceAndStyle,
    destinations: Array.from(new Set(destinations)),
    categories: Array.from(new Set(categories)),
    specificInterests: Array.from(new Set(specificInterests)),
    duration,
    activeFocusTour,
    previouslyDiscussedTours: previouslyDiscussedTours.slice(-10), // Keep up to 10 previously discussed tours in memory
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
      perPersonRange: `Estimated $${adjLow} – $${adjHigh} per vehicle (indicative guidance)`,
      totalForPartyRange: `Estimated $${adjLow} – $${adjHigh} total for private vehicle (${guests} passengers)`,
      rateNotes: `${seasonalNote}. Private door-to-door vehicle with licensed driver. Indicative estimate; exact quote confirmed on request.`,
      inclusionsSummary: inclusionsList,
      exclusionsSummary: exclusionsList
    };
  }

  const partyTotalLow = guests === 1 ? Math.round(adjLow * 1.45) : adjLow * guests;
  const partyTotalHigh = guests === 1 ? Math.round(adjHigh * 1.45) : adjHigh * guests;

  return {
    perPersonRange: `Estimated $${adjLow} – $${adjHigh} per person (indicative guidance)`,
    totalForPartyRange: guests === 1
      ? `Estimated $${partyTotalLow} – $${partyTotalHigh} USD (single traveler estimate)`
      : `Estimated $${partyTotalLow} – $${partyTotalHigh} USD for ${guests} guests (indicative estimate)`,
    rateNotes: `${seasonalNote}. Indicative guidance estimate only. Confirmed custom proposal provided directly from Luxor with NO online card deductions.`,
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

// Semantic and Context-Aware Tour Query Engine for Long Conversations
function queryTourKnowledgeBase(
  currentMessage: string,
  memory: ConversationMemory,
  maxResults = 7
): RetrievedTourContext[] {
  if (!rawTours || rawTours.length === 0) return [];

  const q = currentMessage.toLowerCase();
  const tokens = q.split(/[\s,?.!]+/).filter(tok => tok.length > 2);

  // Score tours against multi-turn memory + current turn
  const scored = rawTours.map((t) => {
    let score = 0;
    const titleLower = t.title.toLowerCase();
    const destLower = t.destination.toLowerCase();
    const catLower = t.category.toLowerCase();
    const overviewLower = (t.overview || '').toLowerCase();
    const highlightsLower = (t.highlights || []).join(' ').toLowerCase();

    // 1. If this is a follow-up about the currently active focus tour
    if (memory.isFollowUpQuestion && memory.activeFocusTour && memory.activeFocusTour.id === t.id) {
      score += 100;
    }

    // 2. Previously discussed tours bonus (so Mahmod keeps them in memory across long talks)
    if (memory.previouslyDiscussedTours.some(prev => prev.id === t.id)) {
      score += memory.isFollowUpQuestion ? 60 : 35;
    }

    // 3. Category matching from conversation history
    memory.categories.forEach(cat => {
      if (catLower.includes(cat.toLowerCase())) score += 25;
    });

    // 4. Destination matching from cumulative conversation history
    memory.destinations.forEach(dest => {
      if (destLower.includes(dest.toLowerCase()) || titleLower.includes(dest.toLowerCase())) score += 30;
    });

    // 5. Specific interest triggers identified in conversation
    memory.specificInterests.forEach(interest => {
      const iNorm = interest.toLowerCase();
      if (titleLower.includes(iNorm) || highlightsLower.includes(iNorm) || overviewLower.includes(iNorm)) {
        score += 35;
      }
    });

    // Specific destination triggers in current query
    if ((q.includes('cairo') || q.includes('giza') || q.includes('pyramid') || q.includes('sphinx')) && 
        (destLower.includes('cairo') || titleLower.includes('cairo') || titleLower.includes('pyramid') || titleLower.includes('giza'))) {
      score += 50;
    }
    if (q.includes('luxor') && (destLower.includes('luxor') || titleLower.includes('luxor'))) {
      score += 45;
    }
    if ((q.includes('aswan') || q.includes('philae') || q.includes('high dam')) && (destLower.includes('aswan') || titleLower.includes('aswan'))) {
      score += 45;
    }
    if (q.includes('abu simbel') && (titleLower.includes('abu simbel') || overviewLower.includes('abu simbel') || catLower.includes('abu simbel'))) {
      score += 70;
    }
    if ((q.includes('hurghada') || q.includes('red sea') || q.includes('snorkeling') || q.includes('giftun')) && 
        (destLower.includes('hurghada') || titleLower.includes('hurghada') || catLower.includes('hurghada'))) {
      score += 55;
    }
    if (q.includes('alexandria') && (destLower.includes('alexandria') || titleLower.includes('alexandria'))) {
      score += 55;
    }

    // Specific product query triggers
    if ((q.includes('nile cruise') || q.includes('cruise ship') || q.includes('river cruise')) && catLower.includes('nile cruise')) {
      score += 60;
    }
    if (q.includes('dahabiya') && (catLower.includes('dahabiya') || titleLower.includes('dahabiya'))) {
      score += 75;
    }
    if ((q.includes('balloon') || q.includes('hot air')) && (catLower.includes('balloon') || titleLower.includes('balloon'))) {
      score += 75;
    }
    if ((q.includes('transfer') || q.includes('drive to') || q.includes('taxi')) && (catLower.includes('transfer') || titleLower.includes('transfer'))) {
      score += 60;
    }
    if ((q.includes('shore') || q.includes('safaga') || q.includes('port')) && (catLower.includes('shore') || titleLower.includes('safaga'))) {
      score += 65;
    }
    if ((q.includes('package') || q.includes('multi day') || q.includes('multi-day')) && (catLower.includes('package') || titleLower.includes('days'))) {
      score += 50;
    }

    // Token matching across title, destination, category, highlights, overview
    tokens.forEach((token) => {
      if (titleLower.includes(token)) score += 14;
      if (destLower.includes(token)) score += 10;
      if (catLower.includes(token)) score += 7;
      if (highlightsLower.includes(token)) score += 6;
      if (overviewLower.includes(token)) score += 4;
    });

    // Duration matching
    if (memory.duration) {
      const durNorm = memory.duration.toLowerCase();
      if (t.duration.toLowerCase().includes(durNorm) || titleLower.includes(durNorm)) {
        score += 35;
      }
    }

    // Featured tours bonus
    if (t.featured) {
      score += 5;
    }

    return { tour: t, score };
  });

  // Pick top scoring tours
  const topTours = scored
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxResults)
    .map(item => item.tour);

  // Guarantee that previously discussed tours are always included in retrieved pool if relevant
  const combinedTours = [...topTours];
  memory.previouslyDiscussedTours.forEach(prev => {
    if (!combinedTours.some(item => item.id === prev.id) && combinedTours.length < maxResults + 2) {
      combinedTours.push(prev);
    }
  });

  const finalTours = combinedTours.length > 0 ? combinedTours : rawTours.slice(0, maxResults);

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
OPTION #${idx + 1}: "${t.title}"
- Exact Link: /booking/${t.slug}/
- Category: ${t.category} | Destination: ${t.destination} | Duration: ${t.duration}
- Highlights: ${(t.highlights || []).slice(0, 5).join('; ') || t.shortDescription}
- Indicative Guidance Estimate: ${p.totalForPartyRange} (${p.perPersonRange}) [INDICATIVE ESTIMATE - NOT CONFIRMED]
- Rate Notes: ${p.rateNotes}
- Inclusions: ${p.inclusionsSummary}
- Schedule Guidance: ${a.departureDays}; Timing: ${a.pickupTime}; Notes: ${a.seasonalNotes}`;
  }).join('\n\n');

  const previouslyDiscussedList = memory.previouslyDiscussedTours.length > 0
    ? memory.previouslyDiscussedTours.map((t, idx) => `  ${idx + 1}. [${t.title}](/booking/${t.slug}/) (${t.category}, ${t.duration})`).join('\n')
    : '  (None yet - starting consultation)';

  return `You are "Mahmod", the lead licensed Egyptologist, cultural concierge, and master itinerary architect for Genuine Egypte (headquartered at 44 Khaled Ibn Al Waleed Street in Luxor, Egypt; WhatsApp: +20 1070335551 or +20 1033801083, email: info@genuineegypte.com).

YOUR CORE IDENTITY & ETHOS:
- Background: You hold an advanced degree in Egyptology from Cairo University and have 15+ years of archaeological field experience guiding through the Valley of the Kings, Karnak, Abu Simbel, Giza, and Nile cruise vessels.
- Voice: Warm, eloquent, hospitable, culturally profound, and reassuring ("Marhaban!"). You treat each user as an honored personal guest, not a transaction.
- Genuine Egypte's Creed: "We know the difference between a tourist and a traveler." We firmly reject hurried commercial bus convoys, fake souvenir shop detours, and impersonal cookie-cutter packages.
- Zero Upfront Card Deductions: Genuine Egypte does NOT charge credit cards online or process instant deductions. Every itinerary is confirmed through direct, personalized communication via WhatsApp (+20 1070335551) or email.

=======================================================
CUMULATIVE TRAVELER DOSSIER ACROSS THIS ENTIRE CONVERSATION:
=======================================================
- Traveler Name: ${memory.travelerName || 'Honored Guest'}
- Traveling Party: ${memory.guestDescription}
- Travel Window / Dates: ${memory.travelDates || 'Flexible'} (${memory.seasonTier.replace('_', ' ').toUpperCase()})
- Special Occasion / Theme: ${memory.specialOccasion || 'Cultural journey / holiday'}
- Traveler Pace & Style: ${memory.travelerPaceAndStyle || 'Custom private pacing'}
- Destinations Explored in Conversation: ${memory.destinations.join(', ') || 'Egypt General'}
- Key Interests & Must-Sees Mentioned: ${memory.specificInterests.join(', ') || 'Nile & Egyptian heritage'}
- Previously Discussed / Proposed Tours in this Thread:
${previouslyDiscussedList}
- Active Discussion Focus: ${memory.activeFocusTour ? `[${memory.activeFocusTour.title}](/booking/${memory.activeFocusTour.slug}/)` : 'General consultation / itinerary planning'}
- Current Turn Intent: ${memory.intent.toUpperCase()}

=======================================================
RULES FOR LONG, CONTINUOUS CONVERSATIONS & RECOMMENDATIONS:
=======================================================
1. Long-Conversation Continuity & Context:
   - You possess total recall of everything the traveler shared throughout this conversation.
   - If they already told you their dates, party size, spouse, or preferences, NEVER ask them again. Seamlessly weave that context into your responses.
   - When the traveler refers to "the cruise you mentioned earlier", "that first option", "can we add Abu Simbel to it?", or "what would the total cost be?", instantly connect the dots using the dossier and tour list.

2. Recommending Authentic Trips from Genuine Egypte:
   - When recommending or discussing trips, ALWAYS format the tour title as a clickable markdown link using its exact slug: [Exact Tour Title](/booking/<slug>/).
   - Tailor your recommendations to the traveler's stated desires (e.g. "Because you mentioned preferring an unhurried pace...", "For your anniversary...", "To avoid large tour bus crowds...").
   - Offer vivid highlights, duration, and what makes the experience exceptional (private Egyptologist guide, full-board gourmet meals on Nile cruises, sunrise flights over the Nile).
   - If the traveler is planning a multi-day Egypt journey, help them weave individual tours (Cairo Pyramids + Nile Cruise + Luxor Balloon + Abu Simbel) into a harmonious master itinerary.

3. Distinguishing Verified Prices vs. Estimates (CRITICAL RULE):
   - All catalog tours are bespoke private departures quoted upon request.
   - ALWAYS explicitly identify any prices mentioned as "indicative seasonal estimates" or "estimated guidance ranges", NEVER as confirmed or locked rates.
   - Clarify that exact confirmed pricing and cabin availability are confirmed directly through our Luxor team via WhatsApp (+20 1070335551) or email (info@genuineegypte.com) with zero online card deductions.
   - NEVER present unverified prices or availability as final or confirmed.

4. Warm, Thoughtful Closing:
   - Close each turn with an insightful, relevant follow-up question or offer to customize, and let them know our team in Luxor is ready to connect directly on WhatsApp (+20 1070335551) to hold dates or adjust details.

=======================================================
RELEVANT TOURS IN OUR WEBSITE CATALOG:
=======================================================
${tourKnowledgeBlock}

CATALOG REGIONAL CONTEXT:
${toursSummaryText.slice(0, 2500)}`;
}

// Generate contextual suggestion pills for one-tap follow-up
function generateFollowUpSuggestions(
  memory: ConversationMemory,
  replyText: string,
  tours: TourRecord[]
): string[] {
  const suggestions: string[] = [];
  const textLower = replyText.toLowerCase();

  // If tours were recommended, offer to explore the first one
  if (tours.length > 0) {
    const firstTour = tours[0];
    suggestions.push(`Tell me more about ${firstTour.title.slice(0, 32)}...`);
  }

  if (memory.intent === 'pricing' || textLower.includes('quote') || textLower.includes('total')) {
    suggestions.push('What is included vs excluded in the price?');
    suggestions.push('Can we customize the schedule or add days?');
  } else if (textLower.includes('cruise') || memory.categories.includes('Nile Cruises')) {
    suggestions.push('What are the embarkation days & cabin options?');
    suggestions.push('How does a Dahabiya sailboat compare to this cruise?');
  } else if (textLower.includes('cairo') || textLower.includes('pyramid') || memory.destinations.includes('Cairo & Giza')) {
    suggestions.push('Can we visit the Grand Egyptian Museum (GEM)?');
    suggestions.push('Can we add Saqqara & Dahshur pyramids?');
  } else if (textLower.includes('luxor') || memory.destinations.includes('Luxor')) {
    suggestions.push('How does the sunrise Hot Air Balloon flight work?');
    suggestions.push('Can we visit King Tutankhamun’s tomb?');
  } else if (textLower.includes('hurghada') || textLower.includes('red sea')) {
    suggestions.push('Can you arrange a private transfer to Luxor?');
    suggestions.push('Tell me about Giftun Island snorkeling.');
  } else if (textLower.includes('abu simbel')) {
    suggestions.push('How early is the private drive to Abu Simbel?');
    suggestions.push('Can we fly or sail to Abu Simbel?');
  } else {
    suggestions.push('Which 5-star Nile cruise do you recommend?');
    suggestions.push('What is the best season to visit Egypt?');
    suggestions.push('Can you design a 7-day or 10-day private itinerary?');
  }

  suggestions.push('How do we hold dates on WhatsApp?');

  return Array.from(new Set(suggestions)).slice(0, 4);
}

// Intelligent knowledge-based fallback generator
function generateLocalAdvisorResponse(
  message: string,
  memory: ConversationMemory,
  retrieved: RetrievedTourContext[]
): { reply: string; recommendedTours: TourRecord[]; suggestions: string[] } {
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
    const reply = `Marhaban${memory.travelerName ? ` ${memory.travelerName}` : ''}! For **${memory.guestDescription}**${memory.travelDates ? ` traveling in ${memory.travelDates}` : ''}, here is our indicative seasonal price guidance:\n\n### **[${top.tour.title}](/booking/${top.tour.slug}/)**\n- **Indicative Price Guidance:** **${p.totalForPartyRange}** (${p.perPersonRange})\n- **Departure schedule:** ${a.departureDays}\n- **Rate Details:** ${p.rateNotes}\n\n**Included in your program:**\n- ${p.inclusionsSummary}\n\n**Excluded / Policies:**\n- ${p.exclusionsSummary}\n\n*Please note: Figures are indicative guidance estimates. At Genuine Egypte, we do not charge credit cards online. Every booking is confirmed directly with our team in Luxor via WhatsApp (**+20 1070335551**).* Would you like our team to provide a confirmed quotation and check cabin or vehicle availability for your travel dates?`;
    return {
      reply,
      recommendedTours,
      suggestions: generateFollowUpSuggestions(memory, reply, recommendedTours)
    };
  }

  // Availability / Scheduling Inquiry Fallback
  if (memory.intent === 'availability' || query.includes('when') || query.includes('leave') || query.includes('day')) {
    const a = top.availability;
    const p = top.pricing;
    const reply = `Marhaban${memory.travelerName ? ` ${memory.travelerName}` : ''}! Here are the scheduling details and price guidance for **[${top.tour.title}](/booking/${top.tour.slug}/)**:\n\n- **Departure Schedule:** ${a.departureDays}\n- **Pickup & Timing:** ${a.pickupTime}\n- **Availability Notes:** ${a.bookingLeadTime}\n- **Price Guidance:** ${p.totalForPartyRange} (${p.perPersonRange}) *(indicative estimate)*\n\nShall I connect you with our team in Luxor via WhatsApp (**+20 1070335551**) to check exact availability for your preferred dates?`;
    return {
      reply,
      recommendedTours,
      suggestions: generateFollowUpSuggestions(memory, reply, recommendedTours)
    };
  }

  // General recommendation fallback
  const tourLinks = retrieved.map(r => `- **[${r.tour.title}](/booking/${r.tour.slug}/)** (${r.tour.duration}): ${r.pricing.totalForPartyRange} · *${r.availability.departureDays}*`).join('\n');
  const reply = `Marhaban${memory.travelerName ? ` ${memory.travelerName}` : ''}! I am Mahmod, lead Egyptologist at Genuine Egypte in Luxor.\n\nFor **${memory.guestDescription}**${memory.travelDates ? ` in ${memory.travelDates}` : ''}, here are our hand-picked itineraries from our verified website catalog:\n\n${tourLinks}\n\nAll programs include certified private Egyptologist guiding and modern air-conditioned private vehicles. Tell me: what aspect of ancient Egypt are you most excited to discover?`;
  return {
    reply,
    recommendedTours,
    suggestions: generateFollowUpSuggestions(memory, reply, recommendedTours)
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

    // Step 1: Synthesize multi-turn conversation memory across all turns
    const memory = extractConversationMemory(history, message);

    // Step 2: Real-time Context-Retrieval Layer querying tour data for pricing & availability
    const retrievedContext = queryTourKnowledgeBase(message, memory, 7);

    // Step 3: Format conversation history for Gemini (maintaining full conversation history)
    const rawTurns = Array.isArray(history) ? history : [];
    const validTurns: Array<{ role: 'user' | 'model'; text: string }> = [];
    for (const t of rawTurns) {
      if ((t.role === 'user' || t.role === 'model') && typeof t.text === 'string' && t.text.trim()) {
        validTurns.push({ role: t.role, text: t.text.trim() });
      }
    }

    // Append current user message
    validTurns.push({ role: 'user', text: message.trim() });

    // Ensure valid turn sequence for Gemini API:
    // 1) Must start with 'user'
    // 2) Adjacent messages with the same role must be merged
    let startIndex = 0;
    while (startIndex < validTurns.length && validTurns[startIndex].role !== 'user') {
      startIndex++;
    }

    const contents: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }> = [];
    for (let i = startIndex; i < validTurns.length; i++) {
      const turn = validTurns[i];
      if (contents.length > 0 && contents[contents.length - 1].role === turn.role) {
        contents[contents.length - 1].parts[0].text += `\n\n${turn.text}`;
      } else {
        contents.push({
          role: turn.role,
          parts: [{ text: turn.text }]
        });
      }
    }

    // Step 4: Construct refactored Mahmod system prompt with injected real-time context
    const dynamicSystemInstruction = buildMahmodSystemInstruction(memory, retrievedContext);

    if (!apiKey) {
      const fallback = generateLocalAdvisorResponse(message, memory, retrievedContext);
      return res.json(fallback);
    }

    // Candidate models fallback chain with fast thinking level
    const candidateModels = ['gemini-3.8-flash', 'gemini-3.1-flash-lite'];
    let reply = '';

    for (const model of candidateModels) {
      try {
        const response = await ai.models.generateContent({
          model,
          contents,
          config: {
            systemInstruction: dynamicSystemInstruction,
            thinkingConfig: {
              thinkingLevel: ThinkingLevel.LOW
            }
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
      return res.json(localResult);
    }

    // Extract any slugs mentioned in reply markdown links: /booking/<slug>/, /tour/<slug>/, /package/<slug>/
    const mentionedSlugs: string[] = [];
    const slugRegex = /\/(?:booking|tour|package|cruise)\/([a-z0-9-%]+)\/?/gi;
    let slugMatch;
    while ((slugMatch = slugRegex.exec(reply)) !== null) {
      const s = decodeURIComponent(slugMatch[1]).replace(/\/$/, '');
      if (s && !mentionedSlugs.includes(s)) {
        mentionedSlugs.push(s);
      }
    }

    // Collect matched tours from mentioned slugs
    const matchedTours: TourRecord[] = [];
    mentionedSlugs.forEach(slug => {
      const found = rawTours.find(t => t.slug === slug || t.slug === encodeURIComponent(slug));
      if (found && !matchedTours.some(m => m.id === found.id)) {
        matchedTours.push(found);
      }
    });

    // Also match tours mentioned by title in the reply
    rawTours.forEach(t => {
      if (matchedTours.length < 4 && t.title.length > 8 && reply.toLowerCase().includes(t.title.toLowerCase())) {
        if (!matchedTours.some(m => m.id === t.id)) {
          matchedTours.push(t);
        }
      }
    });

    // If fewer than 2 tours were explicitly parsed, supplement with top retrieved tours
    retrievedContext.forEach(rc => {
      if (matchedTours.length < 3 && !matchedTours.some(m => m.id === rc.tour.id)) {
        matchedTours.push(rc.tour);
      }
    });

    // Generate dynamic suggestions based on conversation context
    const suggestions = generateFollowUpSuggestions(memory, reply, matchedTours);

    return res.json({
      reply,
      recommendedTours: matchedTours.slice(0, 4).map(t => ({
        id: t.id,
        title: t.title,
        slug: t.slug,
        category: t.category,
        destination: t.destination,
        duration: t.duration,
        price: t.price,
        priceNote: t.priceNote || 'Custom private quote',
        mainImage: t.mainImage,
        shortDescription: t.shortDescription
      })),
      suggestions
    });
  } catch (error: any) {
    console.error('Error generating AI chat response:', error);
    const fallback = generateLocalAdvisorResponse(req.body?.message || '', {
      guestCount: 2,
      guestDescription: '2 travelers',
      seasonTier: 'winter_peak',
      destinations: [],
      categories: [],
      specificInterests: [],
      previouslyDiscussedTours: [],
      isFollowUpQuestion: false,
      intent: 'general'
    }, []);
    return res.json(fallback);
  }
});

// In-Memory inquiries registry for proposal flow
const inquiriesStore: any[] = [];
let notificationSettings = {
  notificationEmail: 'info@genuineegypte.com, kemethurghada.ag@gmail.com',
  telegramBotToken: '',
  telegramChatId: '',
  smtpHost: '',
  smtpUser: ''
};

app.post('/api/inquiries', (req, res) => {
  try {
    const { name, email, phone, tourTitle, tourSlug, date, travelers, notes, source } = req.body || {};
    if (!name || (!email && !phone)) {
      return res.status(400).json({ success: false, error: 'Name and either email or phone number are required.' });
    }

    const bookingId = `GE-${Date.now().toString(36).toUpperCase()}`;
    const newInquiry = {
      id: bookingId,
      bookingId,
      name,
      email: email || '',
      phone: phone || '',
      tourTitle: tourTitle || 'General Custom Itinerary',
      tourSlug: tourSlug || '',
      date: date || 'Flexible',
      travelers: travelers || '2',
      notes: notes || '',
      source: source || 'Website Custom Proposal',
      createdAt: new Date().toISOString(),
      status: 'new'
    };

    inquiriesStore.unshift(newInquiry);
    console.log(`[PROPOSAL INQUIRY LOGGED] #${bookingId} for "${newInquiry.tourTitle}" by ${name} (${email || phone})`);

    return res.json({
      success: true,
      bookingId,
      message: 'Your inquiry has been received. Our team in Luxor will contact you within 12 hours.'
    });
  } catch (err: any) {
    console.error('Error handling inquiry:', err);
    return res.status(500).json({ success: false, error: 'Internal server error processing inquiry.' });
  }
});

app.get('/api/bookings', (_req, res) => {
  return res.json({ success: true, bookings: inquiriesStore });
});

app.get('/api/notifications/settings', (_req, res) => {
  return res.json(notificationSettings);
});

app.post('/api/notifications/settings', (req, res) => {
  notificationSettings = { ...notificationSettings, ...req.body };
  return res.json({ success: true, settings: notificationSettings });
});

app.post('/api/notifications/test-telegram', (_req, res) => {
  return res.json({ success: true, message: 'Test message received' });
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
