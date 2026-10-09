import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { TOURS_DATA, TourItem, TourCategory } from '../src/data/tours.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log(`Loaded ${TOURS_DATA.length} tours from src/data/tours.ts`);

// -------------------------------------------------------------
// VERIFIED ASSET DICTIONARY (All files exist on disk)
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
    '/images/tours/Philae-Temple-1.webp',
    '/images/tours/15319133090Nile-cruise-Aswan-stay-3-.jpg',
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

// Verify all files on disk
let missingCount = 0;
Object.entries(ASSETS).forEach(([key, list]) => {
  list.forEach(p => {
    const full = path.join(rootDir, 'public', p.replace(/^\//, ''));
    if (!fs.existsSync(full)) {
      console.error(`Missing asset in pool ${key}: ${full}`);
      missingCount++;
    }
  });
});

if (missingCount > 0) {
  console.error(`Fatal: ${missingCount} assets missing.`);
  process.exit(1);
} else {
  console.log('✓ All 100% of asset pool entries verified to exist on disk.');
}
