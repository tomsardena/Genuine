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

// Load catalog for Mahmod knowledge base & smart fallback matching
let rawTours: any[] = [];
let toursSummaryText = '';

try {
  const toursFilePath = path.join(__dirname, 'src', 'data', 'tours.ts');
  if (fs.existsSync(toursFilePath)) {
    const content = fs.readFileSync(toursFilePath, 'utf8');
    const jsonMatch = content.match(/export const TOURS_DATA: TourItem\[\] = (\[[\s\S]*?\]);\n\nexport function getAllTours/);
    if (jsonMatch) {
      rawTours = JSON.parse(jsonMatch[1]);
      const categorized: Record<string, string[]> = {};
      rawTours.slice(0, 150).forEach((t: any) => {
        const cat = t.category || 'General';
        if (!categorized[cat]) categorized[cat] = [];
        categorized[cat].push(`- "${t.title}" (${t.duration}, destination: ${t.destination}, link: /booking/${t.slug}/): ${t.shortDescription || t.overview.slice(0, 120)}`);
      });
      toursSummaryText = Object.entries(categorized)
        .map(([cat, list]) => `### Category: ${cat}\n${list.slice(0, 15).join('\n')}`)
        .join('\n\n');
    }
  }
} catch (e) {
  console.warn('Could not parse tours catalog for AI knowledge base:', e);
}

const SYSTEM_INSTRUCTION = `You are "Mahmod", the lead licensed Egyptologist, cultural concierge, and master travel advisor for Genuine Egypte (headquartered at 44 Khaled Ibn Al Waleed Street in Luxor, Egypt; WhatsApp: +20 1033801083, email: info@genuineegypte.com).

Core Personality & Voice:
- Warm, polite, hospitable, deeply knowledgeable, passionate about Egyptian antiquities, honest, and reassuring.
- You speak as a real resident of Luxor with over 15 years of field experience guiding travelers through the Valley of the Kings, Karnak, Abu Simbel, and Nile cruises.
- Genuine Egypte's motto is: "We know the difference between a tourist and a traveler." We reject rushed commercial bus herds in favor of private, unhurried, authentic cultural discovery.
- Transparent Direct Pricing: We do not charge credit cards online or process instant automated deductions. All tours are quoted directly based on traveler dates, group size, and preferred cabin/guide language.
- Always provide helpful, practical advice (e.g. early morning visits to avoid crowds, packing sunscreen, combining Cairo pyramids with a 3-night or 4-night Luxor to Aswan cruise).
- When recommending tours, ALWAYS provide markdown links using the format [Tour Title](/booking/slug/) so the traveler can click and view the full itinerary.

Key Tour Catalog Knowledge:
- Nile Cruises (3 nights Aswan→Luxor, 4 nights Luxor→Aswan, 7 nights round-trip): ships include Royal Ruby Nile Cruise, Nile Premium, MS Semramis, MS Radamis, Sanctuary Sun Boats, Oberoi Philae & Zahra.
- Dahabiya Nile Cruises: Traditional unhurried sailing ships (e.g. Judi Dahabiya, Merit Dahabiya) between Esna/Luxor and Aswan.
- Lake Nasser Cruises: 3-4 nights sailing to Abu Simbel, Amada, Wadi El Seboua.
- Cairo & Giza: Giza Pyramids, Sphinx, Saqqara Step Pyramid, Dahshur, Saint Samaan Cave Church & Garbage City, Coptic Cairo, Egyptian Museum / NMEC.
- Luxor Highlights: West Bank (Valley of the Kings, Hatshepsut, Colossi of Memnon), East Bank (Karnak Temple, Luxor Temple), Sunrise Hot Air Balloon rides.
- Day Excursions: Dendera & Abydos Temples, Edfu & Kom Ombo, Abu Simbel from Aswan by private A/C vehicle.
- Private Transfers: Door-to-door between Luxor, Hurghada, Aswan, Marsa Alam, and Cairo.

If the user asks how to book or inquire, guide them to use WhatsApp (+20 1033801083), click the "Inquire via WhatsApp" / "Request Custom Proposal" buttons on any tour page, or write to info@genuineegypte.com. Keep responses concise, engaging, formatting key recommendations with bullet points and clear tour links.`;

// Intelligent knowledge-based fallback generator
function generateLocalAdvisorResponse(message: string): string {
  const query = message.toLowerCase();

  if (query.includes('cruise') || query.includes('nile') || query.includes('ship') || query.includes('boat')) {
    const cruises = rawTours.filter(t => t.category === 'Nile Cruises').slice(0, 3);
    const cruiseLinks = cruises.map(c => `- **[${c.title}](/booking/${c.slug}/)** (${c.duration}): ${c.shortDescription}`).join('\n');
    return `Marhaban! For sailing the River Nile, I always recommend our 5-star river voyages between Luxor and Aswan.\n\nHere are our top rated cruise programs:\n${cruiseLinks}\n\n**Included in our cruise programs:**\n- Full board accommodation (breakfast, lunch, dinner buffets)\n- Shore excursions to Karnak, Luxor Temple, Valley of the Kings, Edfu, and Kom Ombo\n- Private licensed Egyptologist guiding\n\nWould you prefer starting from Luxor or Aswan, and what are your planned travel dates?`;
  }

  if (query.includes('abu simbel') || query.includes('lake nasser')) {
    const abuSimbel = rawTours.find(t => t.slug.includes('abu-simbel')) || rawTours[15];
    return `The Sun Temples of Ramesses II and Queen Nefertari at **Abu Simbel** are one of Egypt’s greatest archaeological triumphs!\n\nWe operate private early morning tours by private air-conditioned vehicle from Aswan:\n- **[${abuSimbel.title}](/booking/${abuSimbel.slug}/)** (${abuSimbel.duration})\n\n**Mahmod's Expert Tip:** We depart at sunrise to ensure you explore the colossal temple halls before the heat and large bus groups arrive.\n\nWould you like seasonal availability and pricing details?`;
  }

  if (query.includes('balloon') || query.includes('sunrise') || query.includes('sky')) {
    const balloon = rawTours.find(t => t.slug.includes('balloon')) || rawTours[10];
    return `Nothing matches the magic of floating over Luxor’s West Bank at dawn!\n\nOur program:\n- **[${balloon.title}](/booking/${balloon.slug}/)** (${balloon.duration})\n\nYou will see the Colossi of Memnon, Hatshepsut Temple, and the Valley of the Kings bathed in golden morning light. Hotel pickup, Nile motorboat crossing, and tea/coffee are included.\n\nShall I check launch availability for your dates?`;
  }

  if (query.includes('cairo') || query.includes('pyramid') || query.includes('giza') || query.includes('sphinx')) {
    const cairoTours = rawTours.filter(t => t.category.includes('Cairo') || t.destination.includes('Cairo')).slice(0, 2);
    const links = cairoTours.map(c => `- **[${c.title}](/booking/${c.slug}/)** (${c.duration}): ${c.shortDescription}`).join('\n');
    return `Welcome to Cairo, the City of a Thousand Minarets!\n\nOur signature private excursions in the capital include:\n${links}\n\nAll our Cairo tours include private A/C transport and a certified Egyptologist who guides you inside the complexes without rushed shopping detours.\n\nAre you looking for a half-day or a full-day discovery?`;
  }

  if (query.includes('price') || query.includes('cost') || query.includes('book') || query.includes('quote') || query.includes('payment') || query.includes('pay')) {
    return `At Genuine Egypte, we prioritize **transparency and trust**:\n\n- **No upfront online card deductions** on this website.\n- Every quote is directly calculated based on your group size, travel dates, and vehicle/cabin preferences.\n- You communicate directly with our team in Luxor via WhatsApp (**+20 1033801083**) or email (**info@genuineegypte.com**).\n\nIf you have a particular tour in mind, let me know the travel date and number of guests, and I can give you an immediate estimate!`;
  }

  if (query.includes('luxor') || query.includes('karnak') || query.includes('kings')) {
    const luxorTours = rawTours.filter(t => t.destination.includes('Luxor') && !t.category.includes('Cruise')).slice(0, 2);
    const links = luxorTours.map(c => `- **[${c.title}](/booking/${c.slug}/)**: ${c.shortDescription}`).join('\n');
    return `Luxor is my home city and the greatest open-air museum in the world!\n\nHere are our top private day programs:\n${links}\n\nWe cover both the East Bank (Karnak & Luxor Temples) and the West Bank (Valley of the Kings & Hatshepsut) at an unhurried, comfortable pace.\n\nWould you like recommendations on the finest tombs to enter in the Valley of the Kings?`;
  }

  return `Marhaban! I am Mahmod, lead Egyptologist at Genuine Egypte in Luxor.\n\nWe offer over **297 private tours and Nile cruises** tailored to your pace. Our most popular options include:\n- **[3 Nights / 4 Days Nile Cruise – Luxor → Aswan](/booking/3-nights-4-days-nile-cruise-luxor-%e2%86%92-aswan/)**\n- **[Luxor's West & East Side Highlights](/booking/luxors-west-east-side-highlights-full-day-tour-in-egypt/)**\n- **[Day Trip to Abu Simbel from Aswan](/booking/day-trip-to-abu-simbel-unesco-world-heritage-site-from-aswan/)**\n\nTell me: what regions of Egypt are you hoping to visit, and what are your approximate travel dates?`;
}

// Chat API Route
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Build contents array for GoogleGenAI
    const contents: any[] = [];

    // Add prior conversation turns if provided
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

    // Add current user message
    contents.push({
      role: 'user',
      parts: [{ text: message }]
    });

    if (!apiKey) {
      return res.json({ reply: generateLocalAdvisorResponse(message) });
    }

    // Model fallback chain: try gemini-3.8-flash -> gemini-3.1-flash-lite -> local advisor fallback
    const candidateModels = ['gemini-3.8-flash', 'gemini-3.1-flash-lite'];
    let reply = '';

    for (const model of candidateModels) {
      try {
        const response = await ai.models.generateContent({
          model,
          contents,
          config: {
            systemInstruction: `${SYSTEM_INSTRUCTION}\n\nCatalog snapshot:\n${toursSummaryText.slice(0, 10000)}`
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
      reply = generateLocalAdvisorResponse(message);
    }

    return res.json({ reply });
  } catch (error: any) {
    console.error('Error generating AI chat response:', error);
    const fallback = generateLocalAdvisorResponse(req.body?.message || '');
    return res.json({ reply: fallback });
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
