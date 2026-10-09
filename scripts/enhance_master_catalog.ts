import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { TOURS_DATA, TourItem, TourCategory } from '../src/data/tours.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log(`=== STARTING FULL CATALOG ENHANCEMENT ENGINE ===`);
console.log(`Loaded ${TOURS_DATA.length} tours from src/data/tours.ts`);

// -------------------------------------------------------------
// 1. IMAGE ASSET POOLS (100% verified files existing on disk)
// -------------------------------------------------------------
const ASSETS = {
  cairoGiza: [
    '/images/tours/camels-at-the-site-of-pyramids-2445852.jpg',
    '/images/tours/Saqqara.jpeg',
    '/images/tours/cairo.jpg',
    '/images/tours/Khan-El-Khalili-Bazaar-Cairo-Egypt-1.jpg',
    '/images/tours/The_River_Nile__Cairo__Egypt.jpg'
  ],
  alexandria: [
    '/images/tours/citadel-of-qaitbay-fortress-alexandria.jpg',
    '/images/tours/Alexandria-Library-Egypt-2.jpg',
    '/images/tours/alex2255.jpg'
  ],
  luxorEastWest: [
    '/images/tours/Valley_of_the_Kings_banner.jpg',
    '/images/tours/Luxor-Temple.jpg',
    '/images/tours/153191330951396874059karnak-temple-morning.jpg',
    '/images/tours/Luxor-Private-Tour-4.webp',
    '/images/gallery/IMG-20261001-WA0011.jpg',
    '/images/gallery/IMG-20261001-WA0014.jpg',
    '/images/gallery/IMG-20261001-WA0015.jpg',
    '/images/gallery/IMG-20261001-WA0024.jpg'
  ],
  balloon: [
    '/images/gallery/IMG-20261001-WA0020.jpg',
    '/images/gallery/IMG-20261001-WA0021.jpg',
    '/images/gallery/IMG-20261001-WA0022.jpg',
    '/images/tours/Valley_of_the_Kings_banner.jpg'
  ],
  aswanPhilae: [
    '/images/tours/Philae-Temple-1.webp',
    '/images/tours/Nile-cruise-Aswan-stay-3-.jpg',
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
    '/images/tours/Abu-Simbel-for-Facebook.jpg.optimal.jpg'
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
    '/images/tours/160539070213Nile-Premium-Nile-cruise14-600x540.jpg',
    '/images/tours/160539070215Nile-Premium-Nile-cruise18-600x540.jpg',
    '/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp',
    '/images/tours/Nile-Cruise-_E2_80_93-Luxor-_E2_86_92-Aswan-10.webp',
    '/images/gallery/IMG-20261001-WA0012.jpg',
    '/images/gallery/IMG-20261001-WA0016.jpg'
  ],
  dahabiya: [
    '/images/tours/boat.jpg',
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
    '/images/tours/boat.jpg'
  ],
  redSeaSinai: [
    '/images/tours/boat.jpg',
    '/images/gallery/IMG-20261001-WA0035.jpg',
    '/images/gallery/IMG-20261001-WA0036.jpg',
    '/images/gallery/IMG-20261001-WA0040.jpg',
    '/images/gallery/IMG-20261001-WA0041.jpg'
  ],
  shoreSafaga: [
    '/images/tours/15956335080safaga-shore-excursions2.jpg',
    '/images/tours/Luxor-Private-Tour-4.webp',
    '/images/tours/Valley_of_the_Kings_banner.jpg',
    '/images/tours/153191330951396874059karnak-temple-morning.jpg'
  ],
  transfers: [
    '/images/tours/PGNW-egypt-hotel-banner.jpg',
    '/images/tours/Luxor-Private-Tour-4.webp',
    '/images/gallery/IMG-20261001-WA0012.jpg'
  ]
};

// Verify all asset paths exist
Object.entries(ASSETS).forEach(([key, list]) => {
  list.forEach(p => {
    const full = path.join(rootDir, 'public', p.replace(/^\//, ''));
    if (!fs.existsSync(full)) {
      console.error(`[FATAL] Missing asset in pool ${key}: ${full}`);
      process.exit(1);
    }
  });
});
console.log('✓ All asset pools verified against filesystem.');

// -------------------------------------------------------------
// 2. DURATION NORMALIZER
// -------------------------------------------------------------
function normalizeDuration(t: TourItem): string {
  const title = t.title;
  const dur = t.duration || '';

  // Extract from title first if duration is seasonal placeholder ("May to August") or generic
  const dayMatch = title.match(/(\d+)\s*[-–]?\s*days?/i);
  const nightMatch = title.match(/(\d+)\s*nights?/i);

  if (/may to august/i.test(dur) || dur.trim() === '' || dur.toLowerCase() === 'flexible' || dur.toLowerCase() === 'full day' && dayMatch) {
    if (dayMatch && nightMatch) {
      return `${dayMatch[1]} Days / ${nightMatch[1]} Nights`;
    }
    if (dayMatch) {
      const d = parseInt(dayMatch[1], 10);
      return d === 1 ? 'Full Day (Approx. 8 Hours)' : `${d} Days / ${d - 1} Nights`;
    }
    if (nightMatch) {
      const n = parseInt(nightMatch[1], 10);
      return `${n} Nights / ${n + 1} Days`;
    }
    if (/overnight/i.test(title)) {
      return '2 Days / 1 Night';
    }
  }

  // Handle specific standard strings
  if (/1001 nights/i.test(dur)) return 'Approx. 3–4 Hours (Evening Show)';
  if (/^half\s*day/i.test(dur)) return 'Half Day (Approx. 4–5 Hours)';
  if (/^full\s*day/i.test(dur)) return 'Full Day (Approx. 7–9 Hours)';
  if (/^3\s*hour/i.test(dur)) return 'Approx. 3 Hours';
  if (/^4\s*hour/i.test(dur)) return 'Approx. 4 Hours';
  if (/^5\s*hour/i.test(dur)) return 'Approx. 5 Hours';
  if (/^6\s*hour/i.test(dur)) return 'Approx. 6 Hours';
  if (/^7\s*hour/i.test(dur)) return 'Approx. 7 Hours';
  if (/^8\s*hour/i.test(dur)) return 'Approx. 8 Hours';
  if (/^12\s*hour/i.test(dur)) return 'Approx. 12 Hours (Full Day)';
  if (/^14\s*hour|^15\s*hour|^16\s*hour/i.test(dur)) return 'Full Day Excursion (Approx. 14–16 Hours)';

  if (title.toLowerCase().includes('hot-air balloon') || title.toLowerCase().includes('hot air balloon')) {
    return 'Approx. 3 Hours (45–60 Min Sunrise Flight)';
  }

  if (title.toLowerCase().includes('abu simbel') && (dur.toLowerCase() === 'flexible' || dur.toLowerCase() === '1 day')) {
    return 'Approx. 8–9 Hours (Full Day by Private Car)';
  }

  if (dur.toLowerCase() === 'flexible') {
    return 'Flexible Private Pacing (Approx. 4–8 Hours)';
  }

  return dur;
}

// -------------------------------------------------------------
// 3. THEMATIC CLASSIFIER FOR ASSET SELECTION
// -------------------------------------------------------------
function selectImagePool(t: TourItem): string[] {
  const title = t.title.toLowerCase();
  const cat = t.category.toLowerCase();
  const dest = t.destination.toLowerCase();

  if (title.includes('balloon') || cat.includes('balloon')) {
    return ASSETS.balloon;
  }
  if (cat.includes('transfer') || title.includes('transfer service') || title.includes('airport private transfer')) {
    return ASSETS.transfers;
  }
  if (cat.includes('shore') || dest.includes('safaga') || dest.includes('port')) {
    return ASSETS.shoreSafaga;
  }
  if (title.includes('dahabiya') || cat.includes('dahabiya')) {
    return ASSETS.dahabiya;
  }
  if (title.includes('lake nasser') || cat.includes('lake nasser')) {
    return ASSETS.lakeNasser;
  }
  if (title.includes('abu simbel') || cat.includes('abu simbel')) {
    return ASSETS.abuSimbel;
  }
  if (cat.includes('nile cruise') || title.includes('nile cruise') || title.includes('cruise')) {
    return ASSETS.nileCruise;
  }
  if (dest.includes('alexandria') || title.includes('alexandria')) {
    return ASSETS.alexandria;
  }
  if (dest.includes('hurghada') || dest.includes('sharm') || dest.includes('marsa') || dest.includes('dahab') || title.includes('snorkeling') || title.includes('diving') || title.includes('sinai')) {
    return ASSETS.redSeaSinai;
  }
  if (dest.includes('cairo') || title.includes('cairo') || title.includes('pyramid') || title.includes('saqqara') || title.includes('sphinx')) {
    return ASSETS.cairoGiza;
  }
  if (dest.includes('aswan') || title.includes('aswan') || title.includes('philae')) {
    return ASSETS.aswanPhilae;
  }
  if (dest.includes('luxor') || title.includes('luxor') || title.includes('karnak') || title.includes('kings') || title.includes('dendera') || title.includes('edfu')) {
    return ASSETS.luxorEastWest;
  }

  return ASSETS.luxorEastWest;
}

// Export functions for next steps
export { normalizeDuration, selectImagePool };
