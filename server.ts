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

// Semantic & keyword search across the 297 catalog tours
function findRelevantTours(query: string, maxResults = 3): TourSnippet[] {
  if (!rawTours || rawTours.length === 0) return [];

  const q = query.toLowerCase();
  const tokens = q.split(/\s+/).filter(tok => tok.length > 2);

  const scored = rawTours.map((t) => {
    let score = 0;
    const titleLower = t.title.toLowerCase();
    const destLower = t.destination.toLowerCase();
    const catLower = t.category.toLowerCase();
    const overviewLower = (t.overview || '').toLowerCase();

    // Specific intent scoring
    if (q.includes('cruise') || q.includes('ship') || q.includes('boat')) {
      if (catLower.includes('cruise')) score += 20;
      if (titleLower.includes('royal ruby') || titleLower.includes('nile premium')) score += 10;
    }
    if (q.includes('dahabiya') || q.includes('sailing')) {
      if (catLower.includes('dahabiya') || titleLower.includes('dahabiya')) score += 30;
    }
    if (q.includes('balloon') || q.includes('sunrise') || q.includes('fly')) {
      if (catLower.includes('balloon') || titleLower.includes('balloon')) score += 30;
    }
    if (q.includes('abu simbel')) {
      if (titleLower.includes('abu simbel') || destLower.includes('abu simbel')) score += 35;
    }
    if (q.includes('cairo') || q.includes('pyramid') || q.includes('giza')) {
      if (destLower.includes('cairo') || catLower.includes('cairo') || titleLower.includes('pyramid')) score += 20;
    }
    if (q.includes('luxor') || q.includes('karnak') || q.includes('kings')) {
      if (destLower.includes('luxor') || titleLower.includes('luxor') || titleLower.includes('karnak')) score += 20;
    }
    if (q.includes('transfer') || q.includes('airport') || q.includes('drive')) {
      if (catLower.includes('transfer')) score += 30;
    }

    // Token matching
    tokens.forEach((token) => {
      if (titleLower.includes(token)) score += 8;
      if (destLower.includes(token)) score += 6;
      if (catLower.includes(token)) score += 4;
      if (overviewLower.includes(token)) score += 2;
    });

    return { tour: t, score };
  });

  return scored
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxResults)
    .map(item => item.tour);
}

const SYSTEM_INSTRUCTION = `You are "Mahmod", the lead licensed Egyptologist, cultural concierge, and master travel advisor for Genuine Egypte (headquartered at 44 Khaled Ibn Al Waleed Street in Luxor, Egypt; WhatsApp: +20 1033801083, email: info@genuineegypte.com).

Core Personality & Voice:
- Warm, polite, hospitable, deeply knowledgeable, passionate about Egyptian antiquities, honest, and reassuring.
- You speak as a real resident of Luxor with over 15 years of field experience guiding travelers through the Valley of the Kings, Karnak, Abu Simbel, and Nile cruises.
- Genuine Egypte's motto is: "We know the difference between a tourist and a traveler." We reject rushed commercial bus herds in favor of private, unhurried, authentic cultural discovery.
- Transparent Direct Pricing: We do not charge credit cards online or process instant automated deductions. All tours are quoted directly based on traveler dates, group size, and preferred cabin/guide language.
- When travelers ask for budget or prices:
  * 3-Nights / 4-Days 5-Star Nile Cruise: approximately $450 - $650 per person (full board, private Egyptologist guide, all temple entrance coordination).
  * 4-Nights / 5-Days 5-Star Nile Cruise: approximately $550 - $850 per person.
  * Private Day Tours in Luxor (East & West Bank): approximately $70 - $120 per person (private A/C van, Egyptologist).
  * Giza Pyramids & Sphinx Half Day: approximately $60 - $95 per person.
  * Sunrise Hot Air Balloon in Luxor: approximately $75 - $110 per person.
  * Abu Simbel Day Trip from Aswan: approximately $110 - $160 per person.
  * Note that festive seasons (Christmas/New Year and Easter) have peak surcharges, while summer features lower promotional rates.
- Always provide helpful, practical advice (e.g. early morning visits to avoid crowds, packing sunscreen, combining Cairo pyramids with a 3-night or 4-night Luxor to Aswan cruise).
- When recommending tours, ALWAYS provide markdown links using the format [Tour Title](/booking/slug/) so the traveler can click and view the full itinerary. Keep responses concise, engaging, and beautifully structured with bullet points.`;

// Intelligent knowledge-based fallback generator
function generateLocalAdvisorResponse(message: string, relevantTours: TourSnippet[]): { reply: string; recommendedTours: TourSnippet[] } {
  const query = message.toLowerCase();

  if (query.includes('cruise') || query.includes('nile') || query.includes('ship') || query.includes('boat')) {
    const cruises = relevantTours.length > 0 ? relevantTours : rawTours.filter(t => t.category === 'Nile Cruises').slice(0, 3);
    const cruiseLinks = cruises.map(c => `- **[${c.title}](/booking/${c.slug}/)** (${c.duration}): ${c.shortDescription}`).join('\n');
    return {
      reply: `Marhaban! For sailing the River Nile, I always recommend our 5-star river voyages between Luxor and Aswan.\n\nHere are our top rated cruise programs:\n${cruiseLinks}\n\n**Included in our cruise programs:**\n- Full board accommodation (breakfast, lunch, dinner buffets)\n- Shore excursions to Karnak, Luxor Temple, Valley of the Kings, Edfu, and Kom Ombo\n- Private licensed Egyptologist guiding\n\nWould you prefer starting from Luxor or Aswan, and what are your planned travel dates?`,
      recommendedTours: cruises
    };
  }

  if (query.includes('abu simbel') || query.includes('lake nasser')) {
    const abuSimbel = relevantTours[0] || rawTours.find(t => t.slug.includes('abu-simbel')) || rawTours[15];
    return {
      reply: `The Sun Temples of Ramesses II and Queen Nefertari at **Abu Simbel** are one of Egypt’s greatest archaeological triumphs!\n\nWe operate private early morning tours by private air-conditioned vehicle from Aswan:\n- **[${abuSimbel.title}](/booking/${abuSimbel.slug}/)** (${abuSimbel.duration})\n\n**Mahmod's Expert Tip:** We depart at sunrise to ensure you explore the colossal temple halls before the heat and large bus groups arrive.\n\nWould you like seasonal availability and pricing details?`,
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
    const sampleTours = relevantTours.length > 0 ? relevantTours : rawTours.slice(0, 3);
    return {
      reply: `At Genuine Egypte, we prioritize **transparency and trust**:\n\n- **No upfront online card deductions** on this website.\n- **5-Star Nile Cruises (3–4 Nights):** Typically $450 – $750 per person on full board with all temple excursions & Egyptologist included.\n- **Private Day Tours in Luxor/Cairo:** Typically $65 – $120 per person including private transport and guiding.\n- **Sunrise Balloon Flights:** Typically $75 – $110 per person.\n\nEvery final proposal is custom-calculated based on your specific travel dates and group size. You communicate directly with our team in Luxor via WhatsApp (**+20 1033801083**) or email (**info@genuineegypte.com**).\n\nLet me know your group size and travel month for a swift quote!`,
      recommendedTours: sampleTours
    };
  }

  const defaultTours = relevantTours.length > 0 ? relevantTours : rawTours.slice(0, 3);
  const defaultLinks = defaultTours.map(t => `- **[${t.title}](/booking/${t.slug}/)**: ${t.shortDescription}`).join('\n');
  return {
    reply: `Marhaban! I am Mahmod, lead Egyptologist at Genuine Egypte in Luxor.\n\nWe offer over **297 private tours and Nile cruises** tailored to your pace. Based on your request, here are outstanding recommendations:\n${defaultLinks}\n\nTell me: what regions of Egypt are you hoping to visit, and what are your approximate travel dates?`,
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

    // 1. Retrieve the most relevant tours from the 297-tour catalog
    const relevantTours = findRelevantTours(message, 3);
    const relevantToursPrompt = relevantTours
      .map(t => `Top Match: "${t.title}" (${t.duration}, destination: ${t.destination}, category: ${t.category}, link: /booking/${t.slug}/). Overview: ${t.overview.slice(0, 180)}`)
      .join('\n');

    // 2. Build contents array for GoogleGenAI
    const contents: any[] = [];

    if (Array.isArray(history)) {
      for (const turn of history.slice(-6)) {
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
      const fallback = generateLocalAdvisorResponse(message, relevantTours);
      return res.json(fallback);
    }

    // Model fallback chain: gemini-3.8-flash -> gemini-3.1-flash-lite
    const candidateModels = ['gemini-3.8-flash', 'gemini-3.1-flash-lite'];
    let reply = '';

    for (const model of candidateModels) {
      try {
        const response = await ai.models.generateContent({
          model,
          contents,
          config: {
            systemInstruction: `${SYSTEM_INSTRUCTION}\n\nPinpoint Relevant Tours from Catalog for this query:\n${relevantToursPrompt}\n\nCatalog Summary Snapshot:\n${toursSummaryText.slice(0, 6000)}`
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
      const localResult = generateLocalAdvisorResponse(message, relevantTours);
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
    const fallback = generateLocalAdvisorResponse(req.body?.message || '', []);
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
