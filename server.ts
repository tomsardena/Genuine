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

// Load full catalog for Mahmod knowledge base & smart search
interface TourSnippet {
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
}

let rawTours: TourSnippet[] = [];
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
        if (categorized[cat].length < 15) {
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

// Multi-turn context analyzer
interface ConversationContext {
  combinedQuery: string;
  destinations: string[];
  categories: string[];
  partySize?: string;
  travelMonth?: string;
  duration?: string;
  lastDiscussedTours: TourSnippet[];
}

function analyzeConversationContext(
  history: Array<{ role: string; text: string }> | undefined,
  currentMessage: string
): ConversationContext {
  const userMessages = (history || [])
    .filter(turn => turn.role === 'user')
    .map(turn => turn.text);
  userMessages.push(currentMessage);

  const fullText = userMessages.join(' ').toLowerCase();

  // Extract destinations
  const destinations: string[] = [];
  if (fullText.includes('luxor')) destinations.push('Luxor');
  if (fullText.includes('aswan')) destinations.push('Aswan');
  if (fullText.includes('cairo') || fullText.includes('giza') || fullText.includes('pyramid')) destinations.push('Cairo & Giza');
  if (fullText.includes('alexandria')) destinations.push('Alexandria');
  if (fullText.includes('abu simbel')) destinations.push('Abu Simbel');
  if (fullText.includes('hurghada') || fullText.includes('red sea') || fullText.includes('marsa alam')) destinations.push('Red Sea / Hurghada');

  // Extract categories
  const categories: string[] = [];
  if (fullText.includes('cruise') || fullText.includes('ship') || fullText.includes('boat')) categories.push('Nile Cruises');
  if (fullText.includes('dahabiya') || fullText.includes('sailing')) categories.push('Dahabiya Nile Cruises');
  if (fullText.includes('balloon') || fullText.includes('sunrise') || fullText.includes('fly')) categories.push('Hot Air Balloon');
  if (fullText.includes('transfer') || fullText.includes('drive') || fullText.includes('taxi') || fullText.includes('airport')) categories.push('Private Transfers');
  if (fullText.includes('package') || fullText.includes('multi-day') || fullText.includes('itinerary')) categories.push('Vacation Packages');
  if (fullText.includes('day trip') || fullText.includes('day tour') || fullText.includes('excursion')) categories.push('Day Tours');

  // Extract party size
  let partySize: string | undefined;
  const partyMatch = fullText.match(/(\d+)\s*(people|person|adult|traveler|guest|passenger|of us|family)/i) ||
                     fullText.match(/(solo|couple|two of us|two people|family of \d+)/i);
  if (partyMatch) {
    partySize = partyMatch[0];
  }

  // Extract travel month / timeframe
  let travelMonth: string | undefined;
  const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december', 'christmas', 'new year', 'easter', 'spring', 'summer', 'winter', 'autumn', 'next month', 'next week'];
  for (const m of months) {
    if (fullText.includes(m)) {
      travelMonth = m.charAt(0).toUpperCase() + m.slice(1);
      break;
    }
  }

  // Extract duration
  let duration: string | undefined;
  const durationMatch = fullText.match(/(\d+)\s*(day|night|week|hour)/i);
  if (durationMatch) {
    duration = durationMatch[0];
  }

  // Identify any tours previously mentioned in assistant history
  const lastDiscussedTours: TourSnippet[] = [];
  if (history && history.length > 0) {
    const assistantHistory = history
      .filter(turn => turn.role === 'model')
      .map(turn => turn.text)
      .join(' ');

    rawTours.forEach(t => {
      if (assistantHistory.includes(t.slug) || assistantHistory.includes(t.title)) {
        if (!lastDiscussedTours.some(existing => existing.id === t.id)) {
          lastDiscussedTours.push(t);
        }
      }
    });
  }

  // Build high-affinity search query weighting recent turns
  const combinedQuery = `${currentMessage} ${destinations.join(' ')} ${categories.join(' ')} ${duration || ''}`.trim();

  return {
    combinedQuery,
    destinations,
    categories,
    partySize,
    travelMonth,
    duration,
    lastDiscussedTours: lastDiscussedTours.slice(-3)
  };
}

// Semantic & keyword search with Context-Aware scoring across the 297 catalog tours
function findRelevantToursWithContext(
  currentMessage: string,
  context: ConversationContext,
  maxResults = 3
): TourSnippet[] {
  if (!rawTours || rawTours.length === 0) return [];

  const q = currentMessage.toLowerCase();
  const contextQ = context.combinedQuery.toLowerCase();
  const tokens = q.split(/\s+/).filter(tok => tok.length > 2);

  // If the user's current message is a follow up referencing previously discussed tours
  // (e.g. "How much is that?", "What is included?", "Can we book that cruise?")
  const isFollowUp = q.includes('price') || q.includes('cost') || q.includes('included') ||
                     q.includes('book') || q.includes('itinerary') || q.includes('schedule') ||
                     q.includes('that') || q.includes('it') || q.length < 25;

  const scored = rawTours.map((t) => {
    let score = 0;
    const titleLower = t.title.toLowerCase();
    const destLower = t.destination.toLowerCase();
    const catLower = t.category.toLowerCase();
    const overviewLower = (t.overview || '').toLowerCase();

    // Prioritize previously discussed tour if this is a follow-up
    if (isFollowUp && context.lastDiscussedTours.some(last => last.id === t.id)) {
      score += 60;
    }

    // Category matching
    context.categories.forEach(cat => {
      if (catLower.includes(cat.toLowerCase())) score += 25;
    });

    // Destination matching
    context.destinations.forEach(dest => {
      if (destLower.includes(dest.toLowerCase()) || titleLower.includes(dest.toLowerCase())) score += 20;
    });

    // Direct token matching in current message
    tokens.forEach((token) => {
      if (titleLower.includes(token)) score += 12;
      if (destLower.includes(token)) score += 8;
      if (catLower.includes(token)) score += 6;
      if (overviewLower.includes(token)) score += 3;
    });

    // Duration matching (e.g. 3 nights, 4 nights, 7 days)
    if (context.duration && (t.duration.toLowerCase().includes(context.duration.toLowerCase()) || titleLower.includes(context.duration.toLowerCase()))) {
      score += 20;
    }

    // Specific intent bonuses
    if (contextQ.includes('cruise')) {
      if (catLower.includes('cruise')) score += 25;
      if (titleLower.includes('royal ruby') || titleLower.includes('nile premium')) score += 10;
    }
    if (contextQ.includes('dahabiya')) {
      if (catLower.includes('dahabiya') || titleLower.includes('dahabiya')) score += 35;
    }
    if (contextQ.includes('balloon')) {
      if (catLower.includes('balloon') || titleLower.includes('balloon')) score += 40;
    }
    if (contextQ.includes('abu simbel')) {
      if (titleLower.includes('abu simbel') || destLower.includes('abu simbel')) score += 40;
    }
    if (contextQ.includes('transfer')) {
      if (catLower.includes('transfer')) score += 35;
    }

    return { tour: t, score };
  });

  return scored
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxResults)
    .map(item => item.tour);
}

const SYSTEM_INSTRUCTION = `You are "Mahmod", the lead licensed Egyptologist, cultural concierge, and master travel advisor for Genuine Egypte (headquartered at 44 Khaled Ibn Al Waleed Street in Luxor, Egypt; WhatsApp: +20 1033801083, email: info@genuineegypte.com).

Core Identity & Voice:
- Warm, polite, hospitable, deeply knowledgeable, passionate about Egyptian antiquities, honest, and reassuring.
- You speak as a real resident of Luxor with over 15 years of field experience guiding travelers through the Valley of the Kings, Karnak, Abu Simbel, and Nile cruises.
- Genuine Egypte's motto is: "We know the difference between a tourist and a traveler." We reject rushed commercial bus herds in favor of private, unhurried, authentic cultural discovery.
- Transparent Direct Pricing: We do not charge credit cards online or process instant automated deductions. All tours are quoted directly based on traveler dates, group size, and preferred cabin/guide language.

Multi-Turn Conversation & Context Awareness Rules:
1. Seamless Continuity: Maintain full awareness of previously mentioned details (travel dates, number of guests, budget, previously recommended tours). Never ask "How many people?" or "When are you traveling?" if the traveler already shared that earlier in the conversation!
2. Answer Direct Follow-Ups: If the traveler asks a follow-up ("How much does it cost?", "What is included?", "Can we do it in 4 days?"), answer directly with respect to the specific tour discussed in the immediately preceding turn.
3. Realistic Pricing & Availability Guidelines:
   - 3-Nights / 4-Days 5-Star Nile Cruise (Aswan → Luxor): ~$450 - $650 per person on full board (breakfast, lunch, dinner buffets), guided shore excursions (Kom Ombo, Edfu, Philae, Karnak, Luxor Temple, Valley of the Kings) with private licensed Egyptologist.
   - 4-Nights / 5-Days 5-Star Nile Cruise (Luxor → Aswan): ~$550 - $850 per person full board.
   - 7-Nights Roundtrip Nile Cruise: ~$950 - $1,450 per person.
   - Dahabiya Traditional Sailing (4–5 Nights): ~$950 - $1,600 per person boutique luxury (only 10-14 passengers per yacht, unhurried access to secluded riverbanks).
   - Luxor East & West Bank Full Day Tour: ~$85 - $130 per person (private A/C vehicle, certified Egyptologist, temple entrance coordination).
   - Cairo Pyramids & Sphinx Half/Full Day: ~$65 - $110 per person.
   - Sunrise Hot Air Balloon in Luxor: ~$75 - $110 per person (daily sunrise launch ~4:30 AM with hotel pickup, motorboat crossing, flight certificate).
   - Abu Simbel Private Day Trip from Aswan: ~$120 - $170 per person (private A/C vehicle departing ~4:00 AM to arrive before the convoy heat).
   - Private VIP Transfers (e.g. Luxor ↔ Hurghada ~4h, Luxor ↔ Aswan): ~$85 - $140 per private vehicle.
   - Seasonal Note: Winter (Oct–Apr) is peak prime weather; Summer (May–Sep) has special promotional discounts (15–25% off) with cooler early morning visits.
4. Format: When recommending tours, ALWAYS provide markdown links using the format [Tour Title](/booking/slug/) so the traveler can click and view the full itinerary. Keep responses concise, engaging, formatting recommendations with clear bullet points.`;

// Intelligent knowledge-based fallback generator
function generateLocalAdvisorResponse(
  message: string,
  context: ConversationContext,
  relevantTours: TourSnippet[]
): { reply: string; recommendedTours: TourSnippet[] } {
  const query = message.toLowerCase();
  const partyNote = context.partySize ? ` for your party (${context.partySize})` : '';
  const monthNote = context.travelMonth ? ` in ${context.travelMonth}` : '';

  if (query.includes('cruise') || query.includes('nile') || query.includes('ship') || query.includes('boat')) {
    const cruises = relevantTours.length > 0 ? relevantTours : rawTours.filter(t => t.category === 'Nile Cruises').slice(0, 3);
    const cruiseLinks = cruises.map(c => `- **[${c.title}](/booking/${c.slug}/)** (${c.duration}): ${c.shortDescription}`).join('\n');
    return {
      reply: `Marhaban! For sailing the River Nile${monthNote}${partyNote}, I always recommend our 5-star river voyages between Luxor and Aswan.\n\nHere are our top rated cruise programs:\n${cruiseLinks}\n\n**Included in our cruise programs:**\n- Full board accommodation (breakfast, lunch, dinner buffets)\n- Shore excursions to Karnak, Luxor Temple, Valley of the Kings, Edfu, and Kom Ombo\n- Private licensed Egyptologist guiding\n\nWould you prefer starting from Luxor or Aswan, and what are your planned travel dates?`,
      recommendedTours: cruises
    };
  }

  if (query.includes('abu simbel') || query.includes('lake nasser')) {
    const abuSimbel = relevantTours[0] || rawTours.find(t => t.slug.includes('abu-simbel')) || rawTours[15];
    return {
      reply: `The Sun Temples of Ramesses II and Queen Nefertari at **Abu Simbel** are one of Egypt’s greatest archaeological triumphs!\n\nWe operate private early morning tours by private air-conditioned vehicle from Aswan${partyNote}:\n- **[${abuSimbel.title}](/booking/${abuSimbel.slug}/)** (${abuSimbel.duration})\n\n**Mahmod's Expert Tip:** We depart at sunrise (~4:00 AM) to ensure you explore the colossal temple halls before the heat and large bus groups arrive.\n\nWould you like seasonal availability and pricing details?`,
      recommendedTours: [abuSimbel]
    };
  }

  if (query.includes('balloon') || query.includes('sunrise') || query.includes('sky')) {
    const balloon = relevantTours[0] || rawTours.find(t => t.slug.includes('balloon')) || rawTours[10];
    return {
      reply: `Nothing matches the magic of floating over Luxor’s West Bank at dawn!\n\nOur program:\n- **[${balloon.title}](/booking/${balloon.slug}/)** (${balloon.duration})\n\nYou will see the Colossi of Memnon, Hatshepsut Temple, and the Valley of the Kings bathed in golden morning light. Hotel pickup, Nile motorboat crossing, and tea/coffee are included.\n\nShall I check launch availability for your dates?`,
      recommendedTours: [balloon]
    };
  }

  if (query.includes('cairo') || query.includes('pyramid') || query.includes('giza') || query.includes('sphinx')) {
    const cairoTours = relevantTours.length > 0 ? relevantTours : rawTours.filter(t => t.category.includes('Cairo') || t.destination.includes('Cairo')).slice(0, 2);
    const links = cairoTours.map(c => `- **[${c.title}](/booking/${c.slug}/)** (${c.duration}): ${c.shortDescription}`).join('\n');
    return {
      reply: `Welcome to Cairo, the City of a Thousand Minarets!\n\nOur signature private excursions in the capital include:\n${links}\n\nAll our Cairo tours include private A/C transport and a certified Egyptologist who guides you inside the complexes without rushed shopping detours.\n\nAre you looking for a half-day or a full-day discovery?`,
      recommendedTours: cairoTours
    };
  }

  if (query.includes('price') || query.includes('cost') || query.includes('book') || query.includes('quote') || query.includes('payment') || query.includes('pay')) {
    const sampleTours = relevantTours.length > 0 ? relevantTours : (context.lastDiscussedTours.length > 0 ? context.lastDiscussedTours : rawTours.slice(0, 3));
    return {
      reply: `At Genuine Egypte, we prioritize **transparency and trust**${partyNote}${monthNote}:\n\n- **No upfront online card deductions** on this website.\n- **5-Star Nile Cruises (3–4 Nights):** Typically $450 – $750 per person on full board with all temple excursions & Egyptologist included.\n- **Private Day Tours in Luxor/Cairo:** Typically $65 – $120 per person including private transport and guiding.\n- **Sunrise Balloon Flights:** Typically $75 – $110 per person.\n\nEvery final proposal is custom-calculated based on your specific travel dates and group size. You communicate directly with our team in Luxor via WhatsApp (**+20 1033801083**) or email (**info@genuineegypte.com**).\n\nLet me know your group size and travel month for a swift quote!`,
      recommendedTours: sampleTours
    };
  }

  const defaultTours = relevantTours.length > 0 ? relevantTours : rawTours.slice(0, 3);
  const defaultLinks = defaultTours.map(t => `- **[${t.title}](/booking/${t.slug}/)**: ${t.shortDescription}`).join('\n');
  return {
    reply: `Marhaban! I am Mahmod, lead Egyptologist at Genuine Egypte in Luxor.\n\nWe offer over **297 private tours and Nile cruises** tailored to your pace. Based on your request${monthNote}${partyNote}, here are outstanding recommendations:\n${defaultLinks}\n\nTell me: what regions of Egypt are you hoping to visit, and what are your approximate travel dates?`,
    recommendedTours: defaultTours
  };
}

// Chat API Route
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required' });
    }

    // 1. Analyze multi-turn conversation context
    const context = analyzeConversationContext(history, message);

    // 2. Retrieve relevant tours using context-aware scoring
    const relevantTours = findRelevantToursWithContext(message, context, 3);
    const relevantToursPrompt = relevantTours
      .map(t => `Top Match: "${t.title}" (${t.duration}, destination: ${t.destination}, category: ${t.category}, link: /booking/${t.slug}/). Highlights: ${(t.highlights || []).slice(0, 3).join('; ')}. Overview: ${t.overview.slice(0, 160)}`)
      .join('\n');

    // 3. Build contents array for GoogleGenAI with multi-turn history
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

    if (!apiKey) {
      const fallback = generateLocalAdvisorResponse(message, context, relevantTours);
      return res.json(fallback);
    }

    // 4. Synthesize context profile block for the model
    const contextProfilePrompt = `
ACTIVE TRAVELER CONTEXT FROM RECENT TURNS:
- Detected Destinations of Interest: ${context.destinations.join(', ') || 'Egypt General'}
- Preferred Category / Style: ${context.categories.join(', ') || 'Flexible'}
- Stated Party Size: ${context.partySize || 'Not yet specified (do not press repeatedly if traveler has specific tour questions)'}
- Stated Timeframe / Season: ${context.travelMonth || 'Flexible / Inquiring'}
- Preferred Duration: ${context.duration || 'Not specified'}
- Previously Discussed Itineraries: ${context.lastDiscussedTours.map(t => t.title).join(', ') || 'None'}`;

    // Model fallback chain: gemini-3.8-flash -> gemini-3.1-flash-lite
    const candidateModels = ['gemini-3.8-flash', 'gemini-3.1-flash-lite'];
    let reply = '';

    for (const model of candidateModels) {
      try {
        const response = await ai.models.generateContent({
          model,
          contents,
          config: {
            systemInstruction: `${SYSTEM_INSTRUCTION}\n\n${contextProfilePrompt}\n\nPRIORITIZED MATCHED TOURS FROM 297-CATALOG:\n${relevantToursPrompt}\n\nCATALOG SUMMARY SNAPSHOT:\n${toursSummaryText.slice(0, 5000)}`
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
      const localResult = generateLocalAdvisorResponse(message, context, relevantTours);
      reply = localResult.reply;
    }

    return res.json({
      reply,
      recommendedTours: relevantTours.map(t => ({
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
      combinedQuery: '',
      destinations: [],
      categories: [],
      lastDiscussedTours: []
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
