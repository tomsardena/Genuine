import { TOURS_DATA } from '../src/data/tours.ts';

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

// 3. Check for Missing Titles, Descriptions, Images
TOURS_DATA.forEach(t => {
  if (!t.title || t.title.trim().length === 0) {
    console.error(`[ERROR] Missing title for tour ID: ${t.id}`);
    errorsCount++;
  }
  if (!t.shortDescription || t.shortDescription.trim().length === 0) {
    console.error(`[ERROR] Missing short description for tour: ${t.title} (${t.id})`);
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
});

// 4. Check for self-referencing related tours
TOURS_DATA.forEach(t => {
  if (t.relatedSlugs.includes(t.slug)) {
    console.error(`[ERROR] Tour recommends itself in relatedSlugs: ${t.slug}`);
    errorsCount++;
  }
});

console.log(`\n========================================`);
console.log(`VALIDATION SUMMARY:`);
console.log(`Total Tours Validated: ${TOURS_DATA.length}`);
console.log(`Unique IDs: ${idMap.size}`);
console.log(`Unique Slugs: ${slugMap.size}`);
console.log(`Total Errors: ${errorsCount}`);
console.log(`Total Warnings: ${warningsCount}`);

if (errorsCount === 0) {
  console.log(`✓ ALL VALIDATION CHECKS PASSED PERFECTLY!`);
  process.exit(0);
} else {
  console.error(`✗ VALIDATION FAILED WITH ${errorsCount} ERRORS!`);
  process.exit(1);
}
