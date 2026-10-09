import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { TOURS_DATA } from '../src/data/tours.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('=== STARTING AUTOMATED VALIDATION OF TOUR CATALOG ===');
console.log(`Validating ${TOURS_DATA.length} tours...\n`);

let errorsCount = 0;
let warningsCount = 0;

// 1. Check for Duplicate IDs
const idMap = new Map<string, string>();
TOURS_DATA.forEach(t => {
  if (idMap.has(t.id)) {
    console.error(`[ERROR] Duplicate ID detected: "${t.id}" in "${t.title}" and "${idMap.get(t.id)}"`);
    errorsCount++;
  } else {
    idMap.set(t.id, t.title);
  }
});

// 2. Check for Duplicate Slugs
const slugMap = new Map<string, string>();
TOURS_DATA.forEach(t => {
  const normSlug = t.slug.toLowerCase().trim();
  if (slugMap.has(normSlug)) {
    console.error(`[ERROR] Duplicate slug detected: "${t.slug}" in "${t.title}" and "${slugMap.get(normSlug)}"`);
    errorsCount++;
  } else {
    slugMap.set(normSlug, t.title);
  }
});

// 3. Check for Missing Required Fields
TOURS_DATA.forEach(t => {
  if (!t.title || t.title.trim().length === 0) {
    console.error(`[ERROR] Missing title for tour ID: ${t.id}`);
    errorsCount++;
  }
  if (!t.shortDescription || t.shortDescription.trim().length === 0) {
    console.error(`[ERROR] Missing short description for tour: ${t.title} (${t.id})`);
    errorsCount++;
  }
  if (!t.overview || t.overview.trim().length === 0) {
    console.error(`[ERROR] Missing overview for tour: ${t.title} (${t.id})`);
    errorsCount++;
  }
  if (!t.mainImage || t.mainImage.trim().length === 0) {
    console.error(`[ERROR] Missing main image for tour: ${t.title} (${t.id})`);
    errorsCount++;
  }
  if (!t.category || t.category.trim().length === 0) {
    console.error(`[ERROR] Missing category for tour: ${t.title} (${t.id})`);
    errorsCount++;
  }
  if (!t.destination || t.destination.trim().length === 0) {
    console.error(`[ERROR] Missing destination for tour: ${t.title} (${t.id})`);
    errorsCount++;
  }
  if (!t.itinerary || t.itinerary.length === 0) {
    console.error(`[ERROR] Missing itinerary for tour: ${t.title} (${t.id})`);
    errorsCount++;
  }
  if (!t.inclusions || t.inclusions.length === 0) {
    console.error(`[ERROR] Missing inclusions for tour: ${t.title} (${t.id})`);
    errorsCount++;
  }
  if (!t.exclusions || t.exclusions.length === 0) {
    console.error(`[ERROR] Missing exclusions for tour: ${t.title} (${t.id})`);
    errorsCount++;
  }
});

// 4. Check for self-referencing related tours and broken slugs
TOURS_DATA.forEach(t => {
  if (t.relatedSlugs.includes(t.slug)) {
    console.error(`[ERROR] Tour recommends itself in relatedSlugs: ${t.slug}`);
    errorsCount++;
  }
  t.relatedSlugs.forEach(rSlug => {
    if (!slugMap.has(rSlug.toLowerCase().trim())) {
      console.error(`[ERROR] Broken related slug reference: "${rSlug}" in tour "${t.title}"`);
      errorsCount++;
    }
  });
});

// 5. Verify all Image assets actually exist on disk in public/
let checkedImagesCount = 0;
TOURS_DATA.forEach(t => {
  const allImages = [t.mainImage, ...(t.images || [])];
  allImages.forEach(imgPath => {
    checkedImagesCount++;
    const diskPath = path.join(rootDir, 'public', imgPath.replace(/^\//, ''));
    if (!fs.existsSync(diskPath)) {
      console.error(`[ERROR] Missing disk image asset: "${imgPath}" referenced in "${t.title}"`);
      errorsCount++;
    }
  });
});

// 6. Verify Absence of Unsupported Blanket Claims
TOURS_DATA.forEach(t => {
  const isTransfer = t.category === 'Private Transfers' || t.title.toLowerCase().includes('transfer');
  const isBalloonOnly = (t.category === 'Hot Air Balloon' || t.title.toLowerCase().includes('balloon')) &&
    !t.title.toLowerCase().includes('guided tour') && !t.title.toLowerCase().includes('full day');
  const isSeaOnly = (t.category.includes('Hurghada') || t.category.includes('Sharm') || t.category.includes('Marsa') || t.category.includes('Dahab')) &&
    !t.title.toLowerCase().includes('luxor') && !t.title.toLowerCase().includes('cairo');

  const incJoined = (t.inclusions || []).join(' ');

  if (isTransfer && incJoined.includes('Egyptologist')) {
    console.error(`[ERROR] Transfer tour claims Egyptologist guide: "${t.title}"`);
    errorsCount++;
  }
  if (isBalloonOnly && incJoined.includes('Egyptologist')) {
    console.error(`[ERROR] Pure hot air balloon ride claims Egyptologist guide: "${t.title}"`);
    errorsCount++;
  }
  if (isSeaOnly && incJoined.includes('Egyptologist')) {
    console.error(`[ERROR] Pure marine/safari trip claims Egyptologist guide: "${t.title}"`);
    errorsCount++;
  }
});

console.log(`========================================`);
console.log(`VALIDATION SUMMARY:`);
console.log(`Total Tours Validated: ${TOURS_DATA.length}`);
console.log(`Unique IDs: ${idMap.size}`);
console.log(`Unique Slugs: ${slugMap.size}`);
console.log(`Total Image Asset References Checked: ${checkedImagesCount}`);
console.log(`Total Errors: ${errorsCount}`);
console.log(`Total Warnings: ${warningsCount}`);

if (errorsCount === 0) {
  console.log(`✓ ALL STRICT EVIDENCE & INTEGRITY CHECKS PASSED PERFECTLY!`);
  process.exit(0);
} else {
  console.error(`✗ VALIDATION FAILED WITH ${errorsCount} ERRORS!`);
  process.exit(1);
}
