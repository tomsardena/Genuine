import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { TOURS_DATA, TourItem, TourCategory, TourItineraryItem } from '../src/data/tours.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log(`Starting comprehensive tour catalog generation...`);
console.log(`Loaded ${TOURS_DATA.length} tours from src/data/tours.ts`);

// -------------------------------------------------------------
// VERIFIED ASSET POOLS (Every single file checked to exist on disk)
// -------------------------------------------------------------
const ASSETS = {
  cairo: [
    '/images/tours/15974105260camels-at-the-site-of-pyramids-2445852.jpg',
    '/images/tours/15974099720Saqqara.jpeg',
    '/images/tours/15974198080cairo.jpg',
    '/images/tours/15972630031Khan-El-Khalili-Bazaar-Cairo-Egypt-1.jpg',
    '/images/tours/15974092780The_River_Nile__Cairo__Egypt.jpg',
    '/images/gallery/IMG-20261001-WA0037.jpg',
    '/images/gallery/IMG-20261001-WA0038.jpg',
    '/images/gallery/IMG-20261001-WA0039.jpg'
  ],
  alexandria: [
    '/images/tours/15972424051citadel-of-qaitbay-fortress-alexandria.jpg',
    '/images/tours/15972426061Alexandria-Library-Egypt-2.jpg',
    '/images/tours/15974079580alex2255.jpg',
    '/images/tours/15974110730alex2255.jpg'
  ],
  luxor: [
    '/images/tours/15971782201Luxor-Temple.jpg',
    '/images/tours/15971787680Valley_of_the_Kings_banner.jpg',
    '/images/tours/153191330951396874059karnak-temple-morning.jpg',
    '/images/tours/Luxor-Private-Tour-4.webp',
    '/images/gallery/IMG-20261001-WA0011.jpg',
    '/images/gallery/IMG-20261001-WA0014.jpg',
    '/images/gallery/IMG-20261001-WA0015.jpg',
    '/images/gallery/IMG-20261001-WA0024.jpg',
    '/images/gallery/IMG-20261001-WA0025.jpg'
  ],
  balloon: [
    '/images/gallery/IMG-20261001-WA0020.jpg',
    '/images/gallery/IMG-20261001-WA0021.jpg',
    '/images/gallery/IMG-20261001-WA0022.jpg',
    '/images/tours/15971787680Valley_of_the_Kings_banner.jpg'
  ],
  aswan: [
    '/images/tours/15319133090Nile-cruise-Aswan-stay-3-.jpg',
    '/images/tours/1531913309432123675724_c014cef855_b.jpg',
    '/images/gallery/IMG-20261001-WA0013.jpg',
    '/images/gallery/IMG-20261001-WA0026.jpg',
    '/images/gallery/IMG-20261001-WA0027.jpg',
    '/images/gallery/IMG-20261001-WA0028.jpg'
  ],
  abuSimbel: [
    '/images/tours/ABU-SIMBEL-10.webp',
    '/images/tours/ABU-SIMBEL-1-1.webp',
    '/images/tours/ABU-SIMBEL-2-1.webp',
    '/images/tours/ABU-SIMBEL-3-1.webp',
    '/images/tours/15971856511Abu-Simbel-for-Facebook.jpg.optimal.jpg',
    '/images/tours/ABU-SIMBEL.webp'
  ],
  komOmboEdfu: [
    '/images/tours/KOM-OMBO-1-1-1.webp',
    '/images/tours/15971880891edfu.jpg',
    '/images/tours/11-21.webp'
  ],
  nileCruise: [
    '/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg',
    '/images/tours/160538339711Royal-Ruby-Nile-Cruise13-600x540.jpg',
    '/images/tours/160538339710Royal-Ruby-Nile-Cruise12-600x540.jpg',
    '/images/tours/16053833979Royal-Ruby-Nile-Cruise11-600x540.jpg',
    '/images/tours/16053833978Royal-Ruby-Nile-Cruise9-600x540.jpg',
    '/images/tours/16053833977Royal-Ruby-Nile-Cruise8-600x540.jpg',
    '/images/tours/160539070213Nile-Premium-Nile-cruise14-600x540.jpg',
    '/images/tours/160539070214Nile-Premium-Nile-cruise15-600x540.jpg',
    '/images/tours/160539070215Nile-Premium-Nile-cruise18-600x540.jpg',
    '/images/tours/160539070216Nile-Premium-Nile-cruise21-600x540.jpg',
    '/images/tours/160539070217Nile-Premium-Nile-cruise23-600x540.jpg',
    '/images/tours/160539070218Nile-Premium-Nile-cruise22-600x540.jpg',
    '/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp',
    '/images/tours/Nile-Cruise-_E2_80_93-Luxor-_E2_86_92-Aswan-10.webp',
    '/images/gallery/IMG-20261001-WA0012.jpg',
    '/images/gallery/IMG-20261001-WA0016.jpg',
    '/images/gallery/IMG-20261001-WA0032.jpg'
  ],
  dahabiya: [
    '/images/tours/15974204940boat.jpg',
    '/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor.webp',
    '/images/gallery/IMG-20261001-WA0018.jpg',
    '/images/gallery/IMG-20261001-WA0023.jpg',
    '/images/gallery/IMG-20261001-WA0031.jpg',
    '/images/gallery/IMG-20261001-WA0034.jpg'
  ],
  lakeNasser: [
    '/images/tours/ABU-SIMBEL-3-1.webp',
    '/images/tours/ABU-SIMBEL-10.webp',
    '/images/tours/ABU-SIMBEL-2-1.webp',
    '/images/tours/15974204940boat.jpg'
  ],
  redSea: [
    '/images/tours/15974204940boat.jpg',
    '/images/tours/15974070330pexels-marcel-winger-2445852.jpg',
    '/images/gallery/IMG-20261001-WA0035.jpg',
    '/images/gallery/IMG-20261001-WA0036.jpg',
    '/images/gallery/IMG-20261001-WA0040.jpg',
    '/images/gallery/IMG-20261001-WA0041.jpg'
  ],
  shore: [
    '/images/tours/15956335080safaga-shore-excursions2.jpg',
    '/images/tours/Luxor-Private-Tour-4.webp',
    '/images/tours/15971787680Valley_of_the_Kings_banner.jpg',
    '/images/tours/153191330951396874059karnak-temple-morning.jpg'
  ],
  transfers: [
    '/images/tours/15974096720PGNW-egypt-hotel-banner.jpg',
    '/images/tours/Luxor-Private-Tour-4.webp',
    '/images/gallery/IMG-20261001-WA0012.jpg'
  ]
};

// Double-check that every file exists
Object.entries(ASSETS).forEach(([k, list]) => {
  list.forEach(p => {
    const full = path.join(rootDir, 'public', p.replace(/^\//, ''));
    if (!fs.existsSync(full)) {
      throw new Error(`File does not exist: ${full}`);
    }
  });
});
console.log('✓ All asset pool entries strictly verified against disk.');

// -------------------------------------------------------------
// HELPER: Extract verified duration
// -------------------------------------------------------------
function resolveDuration(title: string, currentDur: string, category: string): string {
  const tLower = title.toLowerCase();
  const dLower = (currentDur || '').toLowerCase();

  // Multi-day pattern e.g. "12 Days", "4 Days", "8 Days"
  const daysMatch = title.match(/(\d+)\s*[-–]?\s*days?/i);
  const nightsMatch = title.match(/(\d+)\s*nights?/i);

  if (dLower.includes('may to august') || dLower.includes('flexible') || dLower.includes('1001 nights') || dLower === '' || dLower === 'full day' && daysMatch) {
    if (daysMatch && nightsMatch) {
      return `${daysMatch[1]} Days / ${nightsMatch[1]} Nights`;
    }
    if (daysMatch) {
      const d = parseInt(daysMatch[1], 10);
      return d === 1 ? 'Full Day (Approx. 8 Hours)' : `${d} Days / ${d - 1} Nights`;
    }
    if (nightsMatch) {
      const n = parseInt(nightsMatch[1], 10);
      return `${n} Nights / ${n + 1} Days`;
    }
    if (tLower.includes('overnight')) {
      return '2 Days / 1 Night';
    }
    if (tLower.includes('balloon')) {
      return 'Approx. 3 Hours (45–60 Min Flight)';
    }
    if (tLower.includes('transfer')) {
      return 'Approx. 1–4 Hours (Door-to-Door)';
    }
    if (tLower.includes('layover') || tLower.includes('city break')) {
      return 'Flexible (4–8 Hours Custom Pacing)';
    }
    if (category.includes('Cruise')) {
      return '4 Days / 3 Nights';
    }
    return 'Full Day (Approx. 7–8 Hours)';
  }

  // Refine common strings
  if (/^half\s*day/i.test(currentDur)) return 'Half Day (Approx. 4–5 Hours)';
  if (/^full\s*day/i.test(currentDur)) return 'Full Day (Approx. 7–9 Hours)';
  if (/^3\s*hour/i.test(currentDur)) return 'Approx. 3 Hours';
  if (/^4\s*hour/i.test(currentDur)) return 'Approx. 4 Hours';
  if (/^5\s*hour/i.test(currentDur)) return 'Approx. 5 Hours';
  if (/^6\s*hour/i.test(currentDur)) return 'Approx. 6 Hours';
  if (/^7\s*hour/i.test(currentDur)) return 'Approx. 7 Hours';
  if (/^8\s*hour/i.test(currentDur)) return 'Approx. 8 Hours';
  if (/^12\s*hour/i.test(currentDur)) return 'Full Day Excursion (Approx. 12 Hours)';
  if (/^14\s*hour|^15\s*hour|^16\s*hour/i.test(currentDur)) return 'Full Day Excursion (Approx. 14–16 Hours)';

  return currentDur;
}

// -------------------------------------------------------------
// HELPER: Select image pool
// -------------------------------------------------------------
function getPool(t: TourItem): string[] {
  const title = t.title.toLowerCase();
  const cat = t.category.toLowerCase();
  const dest = t.destination.toLowerCase();

  if (title.includes('balloon') || cat.includes('balloon')) return ASSETS.balloon;
  if (title.includes('transfer') || cat.includes('transfer')) return ASSETS.transfers;
  if (cat.includes('shore') || dest.includes('safaga') || dest.includes('port')) return ASSETS.shore;
  if (title.includes('dahabiya') || cat.includes('dahabiya')) return ASSETS.dahabiya;
  if (title.includes('lake nasser') || cat.includes('lake nasser')) return ASSETS.lakeNasser;
  if (title.includes('abu simbel') || cat.includes('abu simbel')) return ASSETS.abuSimbel;
  if (cat.includes('nile cruise') || title.includes('nile cruise')) return ASSETS.nileCruise;
  if (dest.includes('alexandria') || title.includes('alexandria')) return ASSETS.alexandria;
  if (dest.includes('hurghada') || dest.includes('sharm') || dest.includes('marsa') || dest.includes('dahab') || title.includes('snorkeling') || title.includes('diving')) return ASSETS.redSea;
  if (dest.includes('cairo') || title.includes('cairo') || title.includes('pyramid') || title.includes('saqqara')) return ASSETS.cairo;
  if (dest.includes('aswan') || title.includes('aswan') || title.includes('philae')) return ASSETS.aswan;
  if (title.includes('edfu') || title.includes('kom ombo')) return ASSETS.komOmboEdfu;
  return ASSETS.luxor;
}

// -------------------------------------------------------------
// HELPER: Extract Core Attractions Mentioned
// -------------------------------------------------------------
function extractAttractions(title: string, destination: string): string[] {
  const attractions: string[] = [];
  const t = title.toLowerCase();

  if (t.includes('pyramid') || t.includes('giza') || t.includes('sphinx')) attractions.push('the Giza Plateau, the Great Pyramids, and the Sphinx');
  if (t.includes('saqqara') || t.includes('sakkara') || t.includes('step pyramid')) attractions.push('the Step Pyramid of Djoser at Saqqara');
  if (t.includes('memphis')) attractions.push('the ancient capital of Memphis');
  if (t.includes('dahshur')) attractions.push('the Bent and Red Pyramids at Dahshur');
  if (t.includes('museum') || t.includes('gem')) attractions.push('the Egyptian Museum and world-renowned antiquities');
  if (t.includes('khalili') || t.includes('bazaar')) attractions.push('the historic Khan el-Khalili bazaar');
  if (t.includes('coptic') || t.includes('hanging church')) attractions.push('Old Coptic Cairo and the Hanging Church');
  if (t.includes('citadel')) attractions.push('the Saladin Citadel and Mosque of Muhammad Ali');
  if (t.includes('garbage city') || t.includes('cave church')) attractions.push('Saint Simon Cave Church at Mokattam');

  if (t.includes('karnak')) attractions.push('Karnak Temple Complex');
  if (t.includes('luxor temple')) attractions.push('Luxor Temple on the Nile Corniche');
  if (t.includes('valley of the kings') || t.includes('kings')) attractions.push('the royal rock-cut tombs of the Valley of the Kings');
  if (t.includes('hatshepsut')) attractions.push('the terraced Mortuary Temple of Queen Hatshepsut');
  if (t.includes('colossi') || t.includes('memnon')) attractions.push('the towering Colossi of Memnon');
  if (t.includes('dendera') || t.includes('abydos')) attractions.push('the astronomical sanctuaries of Dendera and Abydos');
  if (t.includes('balloon')) attractions.push('a sunrise hot air balloon flight drifting over ancient Thebes');

  if (t.includes('philae') || t.includes('isis')) attractions.push('the island temple complex of Philae');
  if (t.includes('high dam')) attractions.push('the monumental Aswan High Dam');
  if (t.includes('unfinished obelisk') || t.includes('obelisk')) attractions.push('the ancient granite quarries and Unfinished Obelisk');
  if (t.includes('nubian')) attractions.push('a colorful Nubian village on the West Bank');
  if (t.includes('abu simbel')) attractions.push('the colossal Sun Temples of Ramses II and Nefertari at Abu Simbel');

  if (t.includes('edfu')) attractions.push('the Temple of Horus at Edfu');
  if (t.includes('kom ombo') || t.includes('komombo')) attractions.push('the riverside double temple of Kom Ombo');

  if (t.includes('alexandria') || t.includes('qaitbay')) attractions.push('the Mediterranean coastline, Citadel of Qaitbay, and the Bibliotheca Alexandrina');
  if (t.includes('giftun') || t.includes('mahmya') || t.includes('snorkeling')) attractions.push('vibrant coral reefs and marine life of the Red Sea');
  if (t.includes('st. catherine') || t.includes('st.catherine') || t.includes('monastery') || t.includes('mount sinai')) attractions.push('Saint Catherine Monastery and the holy peaks of Sinai');

  if (attractions.length === 0) {
    if (destination.includes('Luxor')) attractions.push('the ancient Theban necropolis, Karnak, and Luxor Temple');
    else if (destination.includes('Cairo')) attractions.push('the legendary Giza Pyramids and Cairo cultural landmarks');
    else if (destination.includes('Aswan')) attractions.push('Philae Island, the High Dam, and Nile felucca sailing');
    else if (destination.includes('Alexandria')) attractions.push('historic Greco-Roman monuments along the Mediterranean coast');
    else attractions.push('curated archaeological monuments and cultural highlights');
  }

  return attractions;
}

// -------------------------------------------------------------
// GENERATE PROFESSIONAL, UNIQUE OVERVIEW AND SHORT DESCRIPTION
// -------------------------------------------------------------
function buildOverviewAndShortDesc(t: TourItem, dur: string): { overview: string; shortDescription: string } {
  const title = t.title;
  const dest = t.destination;
  const cat = t.category;
  const attractions = extractAttractions(title, dest);
  const attractionText = attractions.join(', as well as ');

  let p1 = '';
  let p2 = '';
  let p3 = '';
  let shortDesc = '';

  if (cat === 'Nile Cruises') {
    p1 = `Embark on an unforgettable river voyage aboard ${title}, sailing along the legendary waters of the Nile between ${dest}. This cruise blends timeless river navigation with deep archaeological immersion, bringing you directly to world-renowned sanctuaries including ${attractionText}.`;
    p2 = `Aboard your cruise vessel, experience deluxe full-board hospitality with gourmet Egyptian and international buffet dining, spacious air-conditioned river-view cabins, a panoramic sun deck with swimming pool, and nightly cultural entertainment. Every shore excursion is conducted with a licensed private Egyptologist guide, ensuring in-depth historical insight into pharaonic architecture and hieroglyphic inscriptions.`;
    p3 = `Enjoy effortless travel between Luxor and Aswan with all shore transfers, port coordination, and luggage assistance handled smoothly by Genuine Egypte. Our unhurried pacing ensures you explore iconic temples during optimal morning hours while enjoying peaceful sailing afternoons as the Nile riverbanks drift gently by.`;
    shortDesc = `Sail between ${dest} on the ${title} with private Egyptologist shore guiding, full-board gourmet dining, and unhurried visits to ${attractions[0] || 'ancient Nile temples'}.`;
  } else if (cat === 'Dahabiya Nile Cruises') {
    p1 = `Step into the golden age of Nile exploration aboard the ${title}. Dahabiyas represent the traditional, motor-free twin-masted sailing vessels favored by travelers in the 19th century, offering an intimate and serene journey along the river between ${dest}. You will visit iconic landmarks such as ${attractionText}, alongside secluded riverbank ruins that giant cruise ships simply cannot reach.`;
    p2 = `With only an exclusive selection of luxury cabins, your Dahabiya experience offers peace, personalized service, and farm-to-table cuisine prepared daily by a dedicated onboard chef. Guided visits are accompanied by your private Egyptologist, giving you the luxury of private time at ancient quarries like Gebel el-Silsila and quiet island moorings under star-filled Egyptian skies.`;
    p3 = `Unlike large passenger vessels, our Dahabiya itineraries emphasize gentle river breezes, private shore moorings, and deeply authentic local encounters. Genuine Egypte handles every logistical detail from arrival meet-and-greet to departure, guaranteeing a serene, premium pharaonic voyage.`;
    shortDesc = `Experience intimate boutique river sailing aboard ${title} between ${dest}, with private chef dining, secluded island stops, and private Egyptologist guiding.`;
  } else if (cat === 'Lake Nasser Cruises') {
    p1 = `Discover the pristine, less-traveled waters of southern Upper Egypt aboard the ${title}. Cruising Lake Nasser provides an extraordinary journey through ancient Nubia, carrying you across vast desert vistas to monumental relocated temples, highlighted by ${attractionText}.`;
    p2 = `Experience peaceful sailing aboard a 5-star lake vessel featuring spacious lake-view staterooms, refined dining, and sweeping sun decks overlooking the Nubian desert. Guided shore excursions unlock remote archaeological gems including Amada, Wadi El Seboua, and Kasr Ibrim, all interpreted with scholarly clarity by your licensed guide.`;
    p3 = `With direct transfers and comprehensive shipboard coordination provided by Genuine Egypte, this cruise delivers an unhurried, awe-inspiring perspective on Egypt's monumental UNESCO preservation triumph at Abu Simbel and Lake Nasser.`;
    shortDesc = `Cruise Lake Nasser aboard ${title} to explore ancient Nubian temples, desert panoramas, and the monumental sun temples of Abu Simbel in luxury.`;
  } else if (cat === 'Hot Air Balloon') {
    p1 = `Take to the dawn skies on the ${title}, greeting the rising sun as it illuminates the ancient pharaonic capital of Thebes. As your balloon ascends peacefully over Luxor's West Bank, gaze down upon ${attractionText}, the emerald agricultural strip of the Nile valley, and the dramatic limestone cliffs of the Libyan Desert.`;
    p2 = `Operated under strict Egyptian Civil Aviation authority safety standards, this flight is conducted by seasoned, licensed hot air balloon captains. Your morning begins with a seamless hotel pickup and private motorboat transfer across the Nile, complete with morning refreshments and a thorough safety briefing prior to gentle liftoff.`;
    p3 = `Floating silently at sunrise provides an unmatched aerial vantage point of the Valley of the Kings, the Ramesseum, and Queen Hatshepsut's terraced colonnades before tour buses arrive. Smooth touchdown is followed by personal flight certificates and comfortable return transfer to your accommodation.`;
    shortDesc = `Drift over Luxor's West Bank at sunrise on the ${title}, marveling at the Valley of the Kings, Hatshepsut Temple, and the Nile from the dawn sky.`;
  } else if (cat === 'Cairo & Giza Tours' || cat === 'Cairo Tours') {
    p1 = `Immerse yourself in Egypt's vibrant capital and monumental royal necropolises on the ${title}. This carefully planned private excursion guides you through ${attractionText}, presenting millennia of history from the Fourth Dynasty pyramid builders through the vibrant Islamic and Coptic eras.`;
    p2 = `Traverse Cairo in the quiet comfort of a private, modern air-conditioned vehicle with a professional driver. Your private university-educated Egyptologist brings ancient monuments to life, unraveling the construction techniques of the Old Kingdom pyramids and decoding priceless golden antiquities while tailoring the walking pace entirely to your preferences.`;
    p3 = `Genuine Egypte strictly avoids commercial tourist bazaars and rushed tour group queues, focusing instead on authentic exploration, excellent photography opportunities, and memorable local cultural encounters. Door-to-door hotel pickup and return ensure a relaxed, seamless journey.`;
    shortDesc = `Discover ${attractions[0] || 'the Giza Pyramids and Cairo'} with a private licensed Egyptologist guide and door-to-door climate-controlled transport.`;
  } else if (cat === 'Luxor & Upper Egypt' || cat === 'Luxor Tours') {
    p1 = `Step into the world's greatest open-air museum on the ${title}. Centered in ancient Thebes, this private tour explores ${attractionText}, leading you through ceremonial processional avenues, colossal hypostyle halls, and brightly painted royal tombs that have survived for over three thousand years.`;
    p2 = `Travel in a private air-conditioned vehicle accompanied throughout by your licensed local Egyptologist. You will receive vivid explanations of ancient religious rituals, architectural masterworks, and royal burial customs, while enjoying the flexibility to linger at your favorite vantage points and explore at your personal pace.`;
    p3 = `Genuine Egypte takes pride in providing unhurried, bespoke itineraries designed around optimal morning light and reduced crowds. From doorstep hotel or cruise pickup in Luxor to comfortable drop-off, your excursion is delivered with genuine warmth and absolute transparency.`;
    shortDesc = `Explore ${attractions[0] || "Luxor's West and East Banks"} with your private licensed Egyptologist, door-to-door transport, and customized unhurried pacing.`;
  } else if (cat === 'Aswan Tours' || cat === 'Abu Simbel Excursions') {
    p1 = `Experience the timeless tranquility and monumental pharaonic legacy of southern Egypt on the ${title}. This private journey takes you through ${attractionText}, celebrating the unique Nubian culture and enduring engineering feats that define this sun-drenched region of the Nile.`;
    p2 = `Your private excursion is conducted with a licensed English-speaking Egyptologist and modern air-conditioned transport. Whether admiring the island sanctuary of Philae, tracing the chisel marks on the Unfinished Obelisk, or standing before the colossal seated statues of Ramses II at Abu Simbel, you will enjoy deeply engaging commentary and personalized pacing.`;
    p3 = `Genuine Egypte guarantees prompt hotel or Nile cruise pickups, pre-arranged road travel coordination, and an unhurried, respectful visit away from crowded convoys. Relax and let our team manage all the logistics while you absorb the majesty of southern Egypt.`;
    shortDesc = `Discover ${attractions[0] || 'Philae Temple and Aswan highlights'} on a private tour with licensed Egyptologist guidance and door-to-door vehicle transfers.`;
  } else if (cat === 'Alexandria Tours') {
    p1 = `Journey to the legendary Pearl of the Mediterranean on the ${title}. Founded by Alexander the Great in 331 BC, Alexandria is a vibrant cultural crossroads where Greco-Roman history meets the sea, showcasing iconic landmarks including ${attractionText}.`;
    p2 = `Travel comfortably along the desert highway in a private air-conditioned vehicle with a certified Egyptologist. Descend into the subterranean multi-level tombs of Kom El Shoqafa, admire the seaside fortress of Qaitbay standing where the ancient Pharos Lighthouse once guided ships, and tour the modern architectural marvel of the Bibliotheca Alexandrina.`;
    p3 = `Enjoy fresh sea breezes, delicious Mediterranean seafood dining options, and customized stops suited to your interests. Genuine Egypte ensures complete comfort with seamless door-to-door transit from your hotel or cruise terminal.`;
    shortDesc = `Tour the Mediterranean city of Alexandria to explore the Citadel of Qaitbay, Catacombs of Kom El Shoqafa, and Bibliotheca Alexandrina in private comfort.`;
  } else if (cat === 'Shore Excursions') {
    p1 = `Maximize your time ashore with the ${title}, specially architected for cruise ship passengers docking in Egypt. This excursion delivers an efficient, private, and secure transfer to iconic wonders including ${attractionText}, ensuring you experience Egypt's greatest highlights during your port call.`;
    p2 = `Meet your private guide and professional driver directly at the port passenger terminal upon docking. Traveling in a comfortable, modern air-conditioned vehicle, your private Egyptologist will guide you through monumental temples and burial grounds, providing insightful context while keeping careful track of your shore timetable.`;
    p3 = `We provide an absolute On-Time Ship Return Guarantee, coordinating all tourist police travel permits and highway clearances in advance. Experience Egypt's treasures with peace of mind and return safely to your ship well before embarkation.`;
    shortDesc = `Private cruise passenger shore excursion to ${attractions[0] || 'historic Egyptian temples'} with guaranteed on-time port return and licensed Egyptologist guiding.`;
  } else if (cat === 'Private Transfers') {
    p1 = `Travel with complete peace of mind across Egypt on the ${title}. Designed for discerning travelers seeking comfort and reliability, this service provides direct, door-to-door transportation between ${dest} without the stress of public transit or unmetered taxis.`;
    p2 = `Relax in a modern, spotless, air-conditioned vehicle driven by a licensed, vetted professional driver. Whether heading to an airport flight, railway terminal, hotel, or cruise dock, you will enjoy punctual service, chilled bottled water, luggage assistance, and approved highway travel routes.`;
    p3 = `Genuine Egypte provides upfront fixed rates with zero hidden fees, toll surcharges, or baggage extras. Our operations team monitors incoming flight and train schedules in real time to ensure seamless pickups every time.`;
    shortDesc = `Reliable private door-to-door transfer in ${dest} with modern air-conditioned vehicles, professional licensed drivers, and fixed transparent rates.`;
  } else if (cat.includes('Hurghada') || cat.includes('Sharm') || cat.includes('Marsa') || cat.includes('Dahab')) {
    p1 = `Immerse yourself in the extraordinary marine and coastal wonders of the Red Sea on the ${title}. Renowned worldwide for crystal-clear turquoise waters and thriving coral gardens, this excursion showcases ${attractionText}.`;
    p2 = `Enjoy pristine private coordination, modern sea vessels or safari 4x4 vehicles, and safety-certified professional crew members. Whether snorkeling among exotic marine life, diving world-class reefs, or venturing into desert canyons under desert stars, you will receive personalized attention and quality gear.`;
    p3 = `Genuine Egypte takes care of hotel transfers, marine park permissions, and timing, allowing you to relax and soak up the coastal warmth of the Red Sea in true comfort and safety.`;
    shortDesc = `Experience the beauty of the Red Sea on the ${title}, featuring ${attractions[0] || 'pristine coral reefs and marine life'} with private hotel transfers.`;
  } else {
    // Egypt Vacation Packages
    p1 = `Embark on the ultimate Egyptian journey with the ${title}. Over the course of ${dur}, this comprehensive travel package weaves together the finest cultural, historical, and scenic destinations across Egypt, bringing you to ${attractionText}.`;
    p2 = `Every segment of your journey is coordinated with private Egyptologist guides, private air-conditioned vehicles, and handpicked premium accommodations or luxury Nile cruise ships. Experience ancient royal tombs, colossal temples, and vibrant street life with personalized pacing and thoughtful attention to detail.`;
    p3 = `Genuine Egypte handles all domestic flight bookings, cruise check-ins, entrance permits, and road transit with 24/7 on-the-ground support from our Luxor headquarters, delivering an unhurried, authentic Egyptian holiday of a lifetime.`;
    shortDesc = `Comprehensive ${dur} private Egyptian journey exploring ${attractions[0] || 'Cairo, the Nile, and Upper Egypt'} with private Egyptologists and 24/7 coordination.`;
  }

  // Ensure shortDesc is between 120 and 165 characters and doesn't end with ...
  if (shortDesc.length > 165) {
    shortDesc = shortDesc.slice(0, 162).replace(/[\s,–]+[^\s]*$/, '') + '.';
  }

  const overview = `${p1}\n\n${p2}\n\n${p3}`;
  return { overview, shortDescription: shortDesc };
}

// -------------------------------------------------------------
// GENERATE STRUCTURED, CLEAR ITINERARY STOPS
// -------------------------------------------------------------
function buildItinerary(t: TourItem, dur: string): TourItineraryItem[] {
  const title = t.title;
  const dest = t.destination;
  const cat = t.category;
  const tLower = title.toLowerCase();

  // If tour is a multi-day cruise or vacation package
  const daysMatch = dur.match(/(\d+)\s*days?/i) || title.match(/(\d+)\s*days?/i);
  const nightsMatch = dur.match(/(\d+)\s*nights?/i) || title.match(/(\d+)\s*nights?/i);
  const totalDays = daysMatch ? parseInt(daysMatch[1], 10) : (nightsMatch ? parseInt(nightsMatch[1], 10) + 1 : 1);

  if (cat.includes('Cruise') || (cat.includes('Package') && totalDays > 1)) {
    const items: TourItineraryItem[] = [];

    if (cat.includes('Nile Cruise') || cat.includes('Dahabiya')) {
      if (totalDays <= 4) {
        items.push({
          title: 'Day 1: Arrival & East Bank Temples in Luxor',
          description: `Meet your Genuine Egypte representative upon arrival in Luxor (airport or railway station) and transfer directly to your cruise ship for embarkation and check-in before 12:00 PM. Enjoy an introductory buffet lunch onboard. In the afternoon, accompany your licensed Egyptologist to the East Bank to explore the monumental Karnak Temple Complex—the largest religious sanctuary in the ancient world—and the majestic Luxor Temple connected by the Avenue of Sphinxes. Dinner onboard; evening at leisure.`
        });
        items.push({
          title: 'Day 2: West Bank Theban Necropolis & Sailing to Edfu',
          description: `After breakfast onboard, cross to the West Bank of the Nile to explore the legendary Valley of the Kings, stepping inside rock-cut royal burial chambers with vibrant original hieroglyphs. Continue to the dramatic cliffside Mortuary Temple of Queen Hatshepsut at Deir el-Bahari and pause at the Colossi of Memnon. Return to the ship for lunch as your vessel sets sail upriver toward Esna Lock. Pass through the historic lock and cruise gracefully south to Edfu. Dinner and relaxing evening on the sun deck.`
        });
        items.push({
          title: 'Day 3: Edfu Temple of Horus & Kom Ombo Riverside Sanctuary',
          description: `Following breakfast, take a traditional horse carriage ride through Edfu to visit the remarkably preserved Temple of Horus, one of the best-preserved classical sanctuaries in Egypt. Return to the ship as it sails toward Kom Ombo. In the afternoon, tour the unique riverside Double Temple dedicated to the falcon god Haroeris and the crocodile god Sobek, featuring ancient surgical reliefs and the mummified crocodile museum. Continue sailing to Aswan; dinner and evening Nubian folkloric show onboard.`
        });
        items.push({
          title: 'Day 4: Aswan High Dam, Philae Island & Disembarkation',
          description: `Enjoy breakfast onboard before completing disembarkation. Tour the grand modern engineering marvel of the Aswan High Dam, followed by a scenic motorboat ride across Lake Nasser to the romantic island Temple of Philae, dedicated to the goddess Isis. Visit the northern granite quarries to witness the mammoth Unfinished Obelisk. Conclude with a peaceful traditional felucca sailboat ride on the Nile before transfer to Aswan Airport or railway station for your onward travel.`
        });
      } else {
        // 5 to 7+ days cruise itinerary
        for (let d = 1; d <= totalDays; d++) {
          if (d === 1) {
            items.push({
              title: `Day 1: Embarkation & Welcome to Upper Egypt`,
              description: `Warm meet-and-assist service upon arrival in Luxor or Aswan. Private transfer to your luxury vessel, check-in, and welcome lunch onboard. Begin your pharaonic exploration with afternoon temple visits accompanied by your private licensed Egyptologist. Dinner onboard and evening under Nile stars.`
            });
          } else if (d === 2) {
            items.push({
              title: `Day 2: Ancient Thebes & Royal West Bank Monuments`,
              description: `Cross the river at dawn (with optional sunrise hot air balloon flight available). Explore the royal tombs of the Valley of the Kings, the terraced temple of Queen Hatshepsut, and the Colossi of Memnon. Return to the ship for lunch and leisurely sailing through the scenic Esna lock.`
            });
          } else if (d === 3) {
            items.push({
              title: `Day 3: Temple of Horus at Edfu & Riverside Kom Ombo`,
              description: `Morning visit to the magnificent sandstone Temple of Horus at Edfu. Enjoy afternoon river sailing with lunch on the sun deck, followed by a sunset visit to the double temple of Kom Ombo dedicated to Sobek and Haroeris. Sail onward into Aswan.`
            });
          } else if (d === 4) {
            items.push({
              title: `Day 4: Island of Philae, High Dam & Nubian River Life`,
              description: `Explore the island sanctuary of Philae by local motorboat, learning the story of its dramatic UNESCO rescue. Tour the High Dam and Unfinished Obelisk. Afternoon felucca sailing around Elephantine Island. Optional: Early morning private road excursion to Abu Simbel.`
            });
          } else if (d === totalDays) {
            items.push({
              title: `Day ${d}: Breakfast & Final Disembarkation`,
              description: `Enjoy a final breakfast onboard overlooking the Nile riverbanks. Complete disembarkation with assistance from our team and transfer privately to the airport or train station for your onward journey.`
            });
          } else {
            items.push({
              title: `Day ${d}: Cultural Exploration & Leisurely River Sailing`,
              description: `Engage in unhurried cultural immersion along the Nile valley. Enjoy private excursions to historic riverbank settlements, local markets, and archaeological sites with your guide, accompanied by full-board gourmet dining and sun deck relaxation onboard.`
            });
          }
        }
      }
      return items;
    }

    // Vacation package multi-day
    for (let d = 1; d <= Math.min(totalDays, 12); d++) {
      if (d === 1) {
        items.push({
          title: `Day 1: Arrival in Egypt & VIP Meet-and-Assist`,
          description: `Upon arrival at Cairo International Airport, you will be met by our Genuine Egypte airport coordinator inside the arrival terminal. Enjoy private transfer by air-conditioned executive vehicle to your luxury hotel. Evening at leisure to rest and acclimate.`
        });
      } else if (d === 2) {
        items.push({
          title: `Day 2: Giza Plateau Pyramids, Sphinx & Historic Saqqara`,
          description: `Begin your adventure at the Giza Plateau alongside your private Egyptologist. Marvel at the Great Pyramids of Khufu, Khafre, and Menkaure, and gaze upon the enigmatic Great Sphinx. Savor a traditional Egyptian lunch, then journey to Saqqara to witness Djoser's Step Pyramid—the oldest monumental stone structure in history.`
        });
      } else if (d === 3) {
        items.push({
          title: `Day 3: Egyptian Museum, Old Cairo & Khan el-Khalili Bazaar`,
          description: `Explore the world-famous Egyptian Museum in Tahrir or the National Museum of Egyptian Civilization (NMEC). Continue to historic Old Coptic Cairo to visit the Hanging Church and Abu Serga, concluding with a guided stroll through the vibrant lanes of the 14th-century Khan el-Khalili bazaar.`
        });
      } else if (d === totalDays) {
        items.push({
          title: `Day ${d}: Departure & Private Airport Transfer`,
          description: `Enjoy a relaxed breakfast at your hotel. Your private driver and representative will assist with check-out and transfer you smoothly to the airport for your international flight home.`
        });
      } else {
        items.push({
          title: `Day ${d}: Private Sightseeing & Guided Cultural Discovery`,
          description: `Continue your tailored exploration with private guided touring of premier temples, historic monuments, and scenic waterways. Pacing is completely unhurried with comfortable private transfers and licensed Egyptologist commentary throughout.`
        });
      }
    }
    return items;
  }

  // Single-Day Excursions: Break into 3-4 structured, descriptive stops
  if (tLower.includes('balloon')) {
    return [
      {
        title: 'Stop 1: Pre-Dawn Hotel Pickup & Nile Motorboat Crossing',
        description: 'Prompt pickup from your Luxor hotel or Nile cruise ship between 4:15 AM and 4:45 AM in a climate-controlled vehicle. Board a private motorboat crossing the Nile to the West Bank, enjoying hot tea, coffee, and morning refreshments on the water.'
      },
      {
        title: 'Stop 2: Pilot Safety Briefing & Sunrise Balloon Liftoff',
        description: 'Arrive at the official Civil Aviation launch field on the West Bank. Meet your certified commercial hot air balloon pilot and watch the ground crew inflate the mammoth envelope before stepping into the sturdy passenger basket.'
      },
      {
        title: 'Stop 3: 45–60 Minute Sunrise Flight over Ancient Thebes',
        description: 'Ascend smoothly into the golden morning sky. Glide over the Valley of the Kings, Queen Hatshepsut’s Temple, Medinet Habu, and the Colossi of Memnon while admiring the stark contrast between fertile green Nile farmland and rugged desert mountains.'
      },
      {
        title: 'Stop 4: Gentle Touchdown, Flight Certificates & Return Transfer',
        description: 'Enjoy a gentle landing assisted by the skilled ground retrieval team. Receive your personal flight certificate from the pilot and relax on your private transfer back to your hotel or cruise ship in time for morning breakfast.'
      }
    ];
  }

  if (tLower.includes('pyramid') || tLower.includes('giza') || (dest.includes('Cairo') && tLower.includes('half day'))) {
    return [
      {
        title: 'Stop 1: Morning Hotel Pickup & Scenic Drive to Giza Plateau',
        description: 'Meet your private licensed Egyptologist guide and driver at your Cairo or Giza hotel lobby in a private, air-conditioned vehicle. Enjoy a scenic morning drive directly to the Giza Plateau.'
      },
      {
        title: 'Stop 2: The Great Pyramids of Khufu, Khafre & Menkaure',
        description: 'Stand at the foot of the Great Pyramid of King Khufu—the sole surviving wonder of the ancient world. Walk around the monumental pyramid complex while your Egyptologist explains the Fourth Dynasty engineering genius. Optional: Purchase tickets on-site to enter the interior burial chamber.'
      },
      {
        title: 'Stop 3: Panoramic Plateau Lookout & Camel Ride (Optional)',
        description: 'Drive up to the elevated panoramic viewpoint for spectacular sweeping views of all three major pyramids rising out of the Sahara sands. Great spot for photography. Optional: 20-30 minute camel ride across the desert dunes.'
      },
      {
        title: 'Stop 4: The Great Sphinx & Valley Temple of Khafre',
        description: 'Descend to the foot of the plateau to inspect the monolithic Valley Temple where King Khafre was mummified. Walk up to the paws of the Great Sphinx, the colossal limestone guardian with the body of a lion and the head of a pharaoh, before your return transfer.'
      }
    ];
  }

  if (tLower.includes('abu simbel')) {
    return [
      {
        title: 'Stop 1: Early Morning Private Departure from Aswan',
        description: 'Early morning pickup from your hotel or Nile cruise ship in Aswan in a private, modern air-conditioned vehicle. Travel across the peaceful Nubian desert highway with verified security clearance.'
      },
      {
        title: 'Stop 2: Arrival at Lake Nasser & The Great Temple of Ramses II',
        description: 'Arrive at the UNESCO World Heritage sanctuary of Abu Simbel. Stand in awe before the 66-foot-tall colossal seated statues of King Ramses II carved directly into the mountain cliff, and step inside the great hypostyle hall adorned with battle reliefs.'
      },
      {
        title: 'Stop 3: The Temple of Hathor and Queen Nefertari',
        description: 'Explore the companion temple dedicated to Ramses’ beloved royal wife, Queen Nefertari, and the goddess Hathor. Gaze upon the facade where the queen’s statues stand at equal height to the king—an extraordinary tribute in pharaonic art.'
      },
      {
        title: 'Stop 4: UNESCO Salvage Exhibition & Return Drive to Aswan',
        description: 'Learn the remarkable modern engineering story of how UNESCO disassembled and reassembled both temples 65 meters higher to save them from Lake Nasser’s rising waters. Relax on your private drive back to Aswan.'
      }
    ];
  }

  if (dest.includes('Luxor') && (tLower.includes('west bank') || tLower.includes('kings'))) {
    return [
      {
        title: 'Stop 1: Morning Hotel / Cruise Pickup & West Bank Crossing',
        description: 'Meet your private Egyptologist at your Luxor accommodation and travel in a climate-controlled vehicle across the Nile bridge to the ancient Theban necropolis.'
      },
      {
        title: 'Stop 2: The Royal Valley of the Kings',
        description: 'Descend into three selected pharaonic burial chambers deeply carved into the limestone hills. Admire the astonishingly vivid astronomical and funerary wall reliefs that have survived for over 3,000 years. Optional: King Tutankhamun’s burial chamber.'
      },
      {
        title: 'Stop 3: Mortuary Temple of Queen Hatshepsut at Deir el-Bahari',
        description: 'Visit the magnificent three-tiered terraced temple dedicated to Egypt’s greatest female pharaoh, built seamlessly against the towering cliffs of Deir el-Bahari, featuring the famous Punt trading expedition reliefs.'
      },
      {
        title: 'Stop 4: The Colossi of Memnon & Return Transfer',
        description: 'Pause before the two mammoth 18-meter-tall quartzite statues of Amenhotep III known since antiquity as the Singing Colossi of Memnon. Conclude with a relaxed private transfer back to your hotel or cruise ship.'
      }
    ];
  }

  if (tLower.includes('transfer')) {
    return [
      {
        title: 'Stop 1: Punctual Meet-and-Greet at Origin',
        description: 'Your professional, licensed driver meets you directly at your hotel lobby, cruise ship dock, or airport terminal holding a clear Genuine Egypte name board. Receive courteous luggage assistance.'
      },
      {
        title: 'Stop 2: Direct Highway Transit in Modern Climate-Controlled Vehicle',
        description: 'Relax in a clean, sanitized, modern private vehicle with air conditioning, complimentary chilled bottled water, and verified tourist police road permits along the approved route.'
      },
      {
        title: 'Stop 3: Smooth Door-to-Door Arrival at Destination',
        description: 'Direct arrival at your designated hotel, airport terminal, or Nile cruise vessel. The driver assists with all baggage and ensures you are comfortably checked in.'
      }
    ];
  }

  // Default rich 3-stop structure
  return [
    {
      title: 'Stop 1: Private Hotel Pickup & Journey Briefing',
      description: `Your licensed private Egyptologist guide and driver greet you at your accommodation in ${dest}. Board your modern air-conditioned vehicle for a comfortable departure and overview of the day’s archaeological highlights.`
    },
    {
      title: 'Stop 2: In-Depth Exploration of Core Monuments',
      description: `Arrive at the featured historical landmarks. Your Egyptologist provides detailed historical context, decoding royal cartouches and architectural elements while tailoring the walking pace to your group's comfort.`
    },
    {
      title: 'Stop 3: Cultural Discovery, Photo Stops & Return Transfer',
      description: `Enjoy dedicated time for photography, local cultural interaction, and relaxed exploration at your own pace before a seamless private drive back to your hotel or Nile cruise ship in ${dest}.`
    }
  ];
}

// -------------------------------------------------------------
// AUDIT INCLUSIONS, EXCLUSIONS & OPTIONAL EXTRAS (No Blanket Claims)
// -------------------------------------------------------------
function buildInclusionsExclusions(t: TourItem): { inclusions: string[]; exclusions: string[]; optionalExtras: string[] } {
  const cat = t.category;
  const dest = t.destination;
  const tLower = t.title.toLowerCase();

  const isTransfer = cat === 'Private Transfers' || tLower.includes('transfer');
  const isBalloonOnly = (cat === 'Hot Air Balloon' || tLower.includes('balloon')) && !tLower.includes('guided tour') && !tLower.includes('full day');
  const isBalloonTour = (cat === 'Hot Air Balloon' || tLower.includes('balloon')) && (tLower.includes('guided tour') || tLower.includes('full day'));
  const isSeaActivity = (cat.includes('Hurghada') || cat.includes('Sharm') || cat.includes('Marsa') || cat.includes('Dahab')) && !tLower.includes('luxor') && !tLower.includes('cairo');
  const isCruise = cat.includes('Cruise') || cat.includes('Dahabiya');
  const isPackage = cat === 'Egypt Vacation Packages';

  let inclusions: string[] = [];
  let exclusions: string[] = [];
  let optionalExtras: string[] = [];

  if (isTransfer) {
    inclusions = [
      'Private air-conditioned vehicle for your party',
      'Professional licensed driver',
      `Door-to-door transfer between specified pickup and drop-off points in ${dest}`,
      'Luggage assistance upon pickup and arrival',
      'Vehicle fuel, parking fees, and road tolls'
    ];
    exclusions = [
      'Egyptologist tour guide (driver-only service)',
      'Monument entrance tickets to any sites along route',
      'Meals, snacks, and beverages',
      'Driver gratuity / tips (customary in Egypt)'
    ];
    optionalExtras = [
      'Sightseeing stop en route (e.g., Dendera, Kom Ombo, or Edfu) [Requires advance quote]',
      'Licensed Egyptologist guide for en route sightseeing stops [Requires confirmation]',
      'Child safety seat (subject to advance request)'
    ];
  } else if (isBalloonOnly) {
    inclusions = [
      '45–60 minute sunrise hot air balloon flight over Luxor West Bank',
      'Commercially licensed balloon captain operating under Civil Aviation standards',
      'Round-trip hotel / Nile cruise transfers to launch field in Luxor',
      'Motorboat crossing of the Nile with pre-flight tea and coffee',
      'Personal flight certificate signed by the captain'
    ];
    exclusions = [
      'Egyptologist archaeological guide (flight captain gives aviation commentary only)',
      'Entrance tickets to West Bank monuments on the ground',
      'Gratuities for balloon pilot and ground retrieval crew',
      'Personal photo/video packages produced by ground camera team'
    ];
    optionalExtras = [
      'Private guided ground tour of Valley of the Kings following landing [Requires confirmation]',
      'Upgrade to private charter balloon basket for couples or families'
    ];
  } else if (isBalloonTour) {
    inclusions = [
      '45–60 minute sunrise hot air balloon flight with certified commercial pilot',
      'Licensed university-educated Egyptologist guide for West Bank archaeological visits',
      'Private air-conditioned ground transportation for all tour stages',
      'Round-trip hotel or Nile cruise pickup and return in Luxor',
      'Complimentary chilled bottled water in vehicle'
    ];
    exclusions = [
      'Monument entrance tickets: [UNRESOLVED POLICY] General admission tickets to Valley of the Kings and Hatshepsut are marked for confirmation whether bundled or paid at site electronic gates',
      'Special interior royal tomb tickets (King Tutankhamun, Nefertari)',
      'Gratuities for balloon pilot, Egyptologist guide, and vehicle driver',
      'Personal souvenir photos or purchases'
    ];
    optionalExtras = [
      'Pre-bundled monument entrance ticket pass [Requires confirmation]',
      'Interior entry ticket for King Tutankhamun tomb',
      'Traditional Egyptian lunch at a local West Bank restaurant'
    ];
  } else if (isSeaActivity) {
    inclusions = [
      `Hotel pickup and return transfer in ${dest} in air-conditioned vehicle`,
      'Boat cruise or desert safari transport as detailed in itinerary',
      'Activity equipment (snorkeling mask and fins for sea trips / quad bike for safari)',
      'Professional boat crew or certified safari desert guide',
      'Lunch buffet and soft drinks (on full-day marine trips)'
    ];
    exclusions = [
      'Egyptologist tour guide (marine and desert activities are led by crew/safari guides)',
      'National park environmental preservation fees (if applicable at marina)',
      'Water sports extras (e.g. banana boat, parasailing) unless specified',
      'Crew and driver gratuities'
    ];
    optionalExtras = [
      'Introductory scuba dive with PADI certified instructor',
      'Professional photography / underwater video package'
    ];
  } else if (isCruise) {
    inclusions = [
      'Full-board accommodation onboard (buffet breakfast, lunch, and dinner)',
      'Cabin accommodation with private en-suite bathroom and air conditioning',
      'Scheduled shore excursions accompanied by a licensed English-speaking Egyptologist',
      'Local transportation for scheduled temple shore visits',
      'Luggage handling and port meet-and-assist upon embarkation and disembarkation'
    ];
    exclusions = [
      'Onboard beverages (bottled water, soft drinks, wine, and alcohol)',
      'Monument entrance tickets: [UNRESOLVED POLICY] Temple admissions (Karnak, Luxor, Edfu, Kom Ombo, Philae) are marked for confirmation whether bundled into the package or purchased at official ticket kiosks',
      'Optional excursions (Abu Simbel road/air trip, Luxor sunrise balloon, Sound & Light shows)',
      'Onboard crew tipping pool and personal guide gratuities',
      'Personal laundry, telephone calls, and spa services'
    ];
    optionalExtras = [
      'Sunrise Hot Air Balloon flight in Luxor',
      'Early-morning private road excursion to Abu Simbel Sun Temples from Aswan',
      'Sound & Light evening show at Karnak Temple or Philae Island',
      'All-inclusive monument entrance ticket bundle [Requires confirmation]'
    ];
  } else if (isPackage) {
    inclusions = [
      'Hotel and cruise accommodation according to selected itinerary tier',
      'Licensed English-speaking Egyptologist guide for all listed sightseeing visits',
      'Private air-conditioned vehicles for all transfers and excursions',
      'Domestic airport meet-and-assist and luggage coordination',
      'Daily breakfast at hotels; full-board meals during Nile cruise segments'
    ];
    exclusions = [
      'International flights to and from Egypt',
      'Egypt entry tourist visa',
      'Monument entrance tickets: [UNRESOLVED POLICY] Marked for confirmation whether itinerary is quoted all-inclusive of site admissions or tickets are paid at site gates',
      'Beverages during hotel meals and cruise dining',
      'Gratuities for Egyptologist guides, drivers, and cruise crew',
      'Optional excursions and personal expenses'
    ];
    optionalExtras = [
      'Pre-purchased all-inclusive monument admissions pass',
      'Sunrise Luxor Hot Air Balloon flight',
      'Private excursion to Abu Simbel Sun Temples',
      'Sound & Light evening show in Cairo or Luxor'
    ];
  } else {
    // Day tours (Cairo, Luxor, Aswan, Alexandria, Shore Excursions)
    const isShore = cat === 'Shore Excursions';
    inclusions = [
      'Licensed university-educated Egyptologist tour guide (English-speaking)',
      'Private transportation in a modern, air-conditioned vehicle with dedicated driver',
      isShore
        ? `Direct port passenger terminal pickup and return with verified port security clearances and on-time ship return guarantee`
        : `Door-to-door pickup and return from your hotel, private residence, or Nile cruise ship in ${dest}`,
      'Complimentary chilled bottled water in the vehicle during transit',
      'All road tolls, fuel, parking charges, and driver expenses'
    ];
    exclusions = [
      'Monument entrance tickets: [UNRESOLVED POLICY] Site admissions (e.g. Giza Pyramids, Valley of the Kings, Karnak, Egyptian Museum) are marked for confirmation whether to include in quote or purchase on site at official card-only ticket gates',
      'Special interior burial chamber tickets (e.g., King Tutankhamun, Great Pyramid interior)',
      'Meals and beverages unless explicitly confirmed as a full-day package with lunch',
      'Gratuities for your Egyptologist guide and vehicle driver (customary in Egypt)',
      'Personal shopping, camera permits, and personal extras'
    ];
    optionalExtras = [
      'Pre-arranged monument entrance ticket pass [Requires confirmation]',
      'Traditional Egyptian lunch at a handpicked local restaurant',
      'Camel ride on the Giza desert plateau or felucca sail on the Nile',
      'Sunrise Hot Air Balloon flight (for Luxor day tours)'
    ];
  }

  return { inclusions, exclusions, optionalExtras };
}

// -------------------------------------------------------------
// GENERATE RELEVANT HIGHLIGHTS (Accurate to Tour Type)
// -------------------------------------------------------------
function buildHighlights(t: TourItem, dur: string): string[] {
  const cat = t.category;
  const dest = t.destination;
  const tLower = t.title.toLowerCase();
  const attractions = extractAttractions(t.title, dest);

  const h: string[] = [];

  if (cat.includes('Cruise')) {
    h.push(`Deluxe full-board accommodation sailing the historic Nile between ${dest}`);
    h.push(`Private licensed Egyptologist guidance for all scheduled shore excursions`);
    h.push(`Iconic visits to ${attractions.slice(0, 2).join(' and ') || 'Karnak, Luxor, Edfu, and Kom Ombo temples'}`);
    h.push(`Panoramic sun deck relaxation with swimming pool and gentle riverbank vistas`);
    h.push(`Zero hidden booking fees with personalized WhatsApp coordination from Luxor`);
  } else if (cat === 'Hot Air Balloon') {
    h.push(`Breathtaking sunrise flight floating 1,500 feet over ancient Thebes and the Nile`);
    h.push(`Panoramic bird’s-eye views of the Valley of the Kings and Hatshepsut Temple`);
    h.push(`Experienced commercially licensed pilots operating under Egyptian Civil Aviation standards`);
    h.push(`Convenient pre-dawn hotel pickup, Nile motorboat crossing, and return transfer`);
  } else if (cat === 'Private Transfers') {
    h.push(`Punctual door-to-door private transfer in ${dest}`);
    h.push(`Clean, air-conditioned vehicle with professional licensed driver`);
    h.push(`Direct non-stop service with verified tourist police road permits`);
    h.push(`Luggage assistance and transparent fixed quotation with zero hidden fees`);
  } else if (cat.includes('Hurghada') || cat.includes('Sharm') || cat.includes('Marsa') || cat.includes('Dahab')) {
    if (!tLower.includes('luxor') && !tLower.includes('cairo')) {
      h.push(`Scenic Red Sea excursion exploring ${attractions.slice(0, 2).join(' and ') || 'vibrant marine life'}`);
      h.push(`Professional certified boat crew and snorkeling guidance`);
      h.push(`Round-trip hotel transfers included in ${dest}`);
      h.push(`Quality gear provided with safety-first briefing`);
    } else {
      h.push(`100% private day excursion from Red Sea to ${attractions.slice(0, 2).join(' and ')}`);
      h.push(`Licensed university Egyptologist guidance throughout monument visits`);
      h.push(`Private air-conditioned highway transit`);
    }
  } else {
    h.push(`100% private excursion customized entirely to your group’s preferred walking pace`);
    h.push(`Expert commentary from a licensed, university-educated Egyptologist guide`);
    h.push(`Detailed exploration of ${attractions.slice(0, 2).join(' and ')}`);
    h.push(`Direct door-to-door transit in modern, climate-controlled private vehicles`);
    h.push(`Transparent booking with zero commercial souvenir detours or rushed convoys`);
  }

  return h.slice(0, 5);
}

// -------------------------------------------------------------
// SELECT ACCURATE IMAGES FROM VERIFIED POOL
// -------------------------------------------------------------
function buildImages(t: TourItem, index: number): { mainImage: string; images: string[] } {
  const pool = getPool(t);
  const mainImage = pool[index % pool.length];
  const gallery = pool.filter(img => img !== mainImage).slice(0, 4);
  const images = [mainImage, ...gallery];
  return { mainImage, images };
}

// -------------------------------------------------------------
// BUILD CONTEXTUAL RELATED TOURS (Never self-referencing)
// -------------------------------------------------------------
function buildRelatedSlugs(t: TourItem, all: TourItem[]): string[] {
  const dest = t.destination.toLowerCase();
  const cat = t.category.toLowerCase();

  // Find same destination or sister category
  const candidates = all.filter(other => {
    if (other.slug === t.slug) return false;
    const oDest = other.destination.toLowerCase();
    const oCat = other.category.toLowerCase();
    return oDest === dest || oCat === cat;
  });

  const selected = candidates.slice(0, 3).map(c => c.slug);
  if (selected.length < 3) {
    all.forEach(other => {
      if (selected.length < 3 && other.slug !== t.slug && !selected.includes(other.slug)) {
        selected.push(other.slug);
      }
    });
  }
  return selected;
}

// -------------------------------------------------------------
// BUILD UNIFIED MEETING POINT TEXT
// -------------------------------------------------------------
function buildMeetingPoint(t: TourItem): string {
  const cat = t.category;
  const dest = t.destination;

  if (cat.includes('Cruise')) {
    return `Complimentary VIP meet-and-assist at Luxor or Aswan airport, railway station, or local hotel with direct private transfer to your cruise ship embarkation dock.`;
  }
  if (cat === 'Shore Excursions') {
    return `Direct meet-and-assist at the passenger arrival terminal dock of ${dest} with your private guide and driver holding a personalized Genuine Egypte sign.`;
  }
  if (cat === 'Hot Air Balloon') {
    return `Early morning pickup directly from your hotel lobby or Nile cruise ship reception in Luxor. Please confirm your accommodation name when booking.`;
  }
  if (cat === 'Private Transfers') {
    return `Personalized meet-and-greet at airport arrival hall (outside luggage exit) or hotel lobby with a custom paging board and luggage assistance.`;
  }
  return `Door-to-door pickup and return included from any hotel, private residence, or Nile cruise ship in ${dest}. Flexible pickup time arranged upon booking.`;
}

// -------------------------------------------------------------
// MAIN TRANSFORMER RUN
// -------------------------------------------------------------
const enhancedCatalog: TourItem[] = [];

TOURS_DATA.forEach((tour, idx) => {
  const duration = resolveDuration(tour.title, tour.duration, tour.category);
  const { overview, shortDescription } = buildOverviewAndShortDesc(tour, duration);
  const itinerary = buildItinerary(tour, duration);
  const { inclusions, exclusions, optionalExtras } = buildInclusionsExclusions(tour);
  const highlights = buildHighlights(tour, duration);
  const { mainImage, images } = buildImages(tour, idx);
  const meetingPoint = buildMeetingPoint(tour);
  const relatedSlugs = buildRelatedSlugs(tour, TOURS_DATA);

  // Normalize category if misclassified
  let category = tour.category;
  if (tour.title.toLowerCase().includes('hot-air balloon') || tour.title.toLowerCase().includes('hot air balloon')) {
    if (tour.category === 'Private Transfers') {
      category = 'Hot Air Balloon';
    }
  }

  const enhancedItem: TourItem = {
    ...tour,
    category,
    duration,
    price: null, // Keep null as strictly requested
    priceNote: 'Custom private quote based on travel dates & party size · Zero online booking deductions',
    shortDescription,
    overview,
    highlights,
    itinerary,
    inclusions,
    exclusions,
    meetingPoint,
    mainImage,
    images,
    relatedSlugs,
    optionalExtras
  };

  enhancedCatalog.push(enhancedItem);
});

console.log(`Successfully generated ${enhancedCatalog.length} improved tour records.`);

// Verify zero duplicate IDs or Slugs
const idCheck = new Set();
const slugCheck = new Set();
enhancedCatalog.forEach(t => {
  if (idCheck.has(t.id)) throw new Error(`Duplicate ID: ${t.id}`);
  if (slugCheck.has(t.slug)) throw new Error(`Duplicate slug: ${t.slug}`);
  idCheck.add(t.id);
  slugCheck.add(t.slug);
});

// Format the code output for src/data/tours.ts
const toursFileContent = `// Structured tour data for Genuine Egypte
// Master catalog combining existing verified tours and comprehensive Luxor & Aswan Travel Egypt products.
// STRICT STATIC ARCHITECTURE - No database, no backend API, no CMS.

export interface TourItineraryItem {
  title: string;
  description: string;
}

export type TourCategory = 
  | 'Nile Cruises'
  | 'Dahabiya Nile Cruises'
  | 'Lake Nasser Cruises'
  | 'Egypt Vacation Packages'
  | 'Cairo & Giza Tours'
  | 'Cairo Tours'
  | 'Luxor & Upper Egypt'
  | 'Luxor Tours'
  | 'Aswan Tours'
  | 'Hurghada Tours'
  | 'Sharm El Sheikh Tours'
  | 'Marsa Alam Tours'
  | 'Dahab Tours'
  | 'Alexandria Tours'
  | 'Abu Simbel Excursions'
  | 'Shore Excursions'
  | 'Private Transfers'
  | 'Hot Air Balloon'
  | 'Day Tours'
  | 'Egypt Tours';

export interface TourItem {
  id: string;
  slug: string;
  title: string;
  category: TourCategory;
  destination: string;
  duration: string;
  price: number | null;
  priceNote: string;
  featured: boolean;
  shortDescription: string;
  overview: string;
  highlights: string[];
  itinerary: TourItineraryItem[];
  inclusions: string[];
  exclusions: string[];
  meetingPoint: string;
  mainImage: string;
  images: string[];
  relatedSlugs: string[];
  optionalExtras?: string[];
  source?: {
    website: string;
    url?: string;
  };
}

export const TOURS_DATA: TourItem[] = ${JSON.stringify(enhancedCatalog, null, 2)};

export function getAllTours(): TourItem[] {
  return TOURS_DATA;
}

export function getTourBySlug(slug: string): TourItem | undefined {
  const norm = slug.toLowerCase().trim().replace(/^\\/+|\\/+$/g, '');
  return TOURS_DATA.find(t => {
    const tourSlug = t.slug.toLowerCase().trim().replace(/^\\/+|\\/+$/g, '');
    return tourSlug === norm || encodeURIComponent(tourSlug) === norm;
  });
}

export function getToursByCategory(category: string): TourItem[] {
  return TOURS_DATA.filter(t => t.category.toLowerCase() === category.toLowerCase());
}

export function getToursByDestination(destination: string): TourItem[] {
  return TOURS_DATA.filter(t => t.destination.toLowerCase().includes(destination.toLowerCase()));
}

export function getFeaturedTours(): TourItem[] {
  return TOURS_DATA.filter(t => t.featured);
}
`;

const targetPath = path.join(rootDir, 'src', 'data', 'tours.ts');
fs.writeFileSync(targetPath, toursFileContent, 'utf8');
console.log(`✓ Successfully updated ${targetPath} with ${enhancedCatalog.length} improved tours!`);
