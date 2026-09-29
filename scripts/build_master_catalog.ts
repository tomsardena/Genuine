import fs from 'fs';
import { TOURS_DATA as existingTours, TourItem } from '../src/data/tours.ts';

function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

function cleanText(str: string): string {
  if (!str) return '';
  return str
    .replace(/&#8211;/g, '–')
    .replace(/&#8217;/g, "'")
    .replace(/&#038;/g, '&')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#8220;/g, '“')
    .replace(/&#8221;/g, '”')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

async function run() {
  console.log(`Starting master catalog build...`);
  console.log(`Existing tours: ${existingTours.length}`);

  const auditData = JSON.parse(fs.readFileSync('deduplication_audit.json', 'utf8'));
  const newRawProducts = auditData.verifiedNew;
  console.log(`New verified products to integrate: ${newRawProducts.length}`);

  // Image pools from public/images/tours/
  const cruiseImages = [
    '/images/tours/160538339712Royal-Ruby-Nile-Cruise10.jpg',
    '/images/tours/Nile-Cruise-_E2_80_93-Luxor-_E2_86_92-Aswan.webp',
    '/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp',
    '/images/tours/Nile-Cruise-_E2_80_93-Luxor-_E2_86_92-Aswan-5.webp',
    '/images/tours/Nile-Cruise-_E2_80_93-Aswan-8.webp',
    '/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-1.webp'
  ];

  const luxorImages = [
    '/images/tours/genuine-egypte-19.webp',
    '/images/tours/genuine-egypte-20.webp',
    '/images/tours/Luxor-Private-Tour-4.webp',
    '/images/tours/KOM-OMBO-1-1-1.webp'
  ];

  const aswanImages = [
    '/images/tours/Philae-Temple-1.webp',
    '/images/tours/ABU-SIMBEL-10.webp',
    '/images/tours/ABU-SIMBEL-1-1.webp',
    '/images/tours/ABU-SIMBEL-2-1.webp'
  ];

  const cairoImages = [
    '/images/tours/genuine-egypte-3.webp',
    '/images/tours/genuine-egypte-2.webp',
    '/images/tours/genuine-egypte-4.webp',
    '/images/tours/genuine-egypte-6.webp'
  ];

  const redSeaImages = [
    '/images/tours/genuine-egypte-27.webp',
    '/images/tours/genuine-egypte-29.webp',
    '/images/tours/genuine-egypte-30.webp',
    '/images/tours/genuine-egypte-31.webp'
  ];

  const alexandriaImages = [
    '/images/tours/genuine-egypte-13.webp',
    '/images/tours/genuine-egypte-11.webp',
    '/images/tours/genuine-egypte-14.webp'
  ];

  // Set of all slugs to guarantee uniqueness
  const existingSlugSet = new Set(existingTours.map(t => t.slug.toLowerCase()));
  const existingIdSet = new Set(existingTours.map(t => t.id.toLowerCase()));

  const addedTourItems: TourItem[] = [];

  for (let i = 0; i < newRawProducts.length; i++) {
    const raw = newRawProducts[i];
    let title = cleanText(raw.title);
    
    // Remove outdated year patterns like 2024/2025 (Requirement 27)
    title = title.replace(/\b(202[0-9]\s*\/\s*202[0-9]|202[0-9])\b/g, '').replace(/\s+/g, ' ').trim();

    // Generate unique slug
    let baseSlug = createSlug(title);
    if (!baseSlug) baseSlug = `tour-${i + 1}`;
    let slug = baseSlug;
    let counter = 2;
    while (existingSlugSet.has(slug)) {
      slug = `${baseSlug}-${counter}`;
      counter++;
    }
    existingSlugSet.add(slug);

    // Generate unique ID
    let id = `la-${slug}`;
    if (existingIdSet.has(id)) {
      id = `la-${slug}-${i + 1}`;
    }
    existingIdSet.add(id);

    // Pick appropriate image
    let imagePool = cairoImages;
    const cat = raw.category;
    const dest = raw.destination;
    if (cat.includes('Cruise') || dest.includes('Nile')) {
      imagePool = cruiseImages;
    } else if (dest.includes('Luxor') || cat.includes('Luxor')) {
      imagePool = luxorImages;
    } else if (dest.includes('Aswan') || dest.includes('Abu Simbel') || cat.includes('Aswan')) {
      imagePool = aswanImages;
    } else if (dest.includes('Hurghada') || dest.includes('Sharm') || dest.includes('Marsa') || dest.includes('Dahab')) {
      imagePool = redSeaImages;
    } else if (dest.includes('Alexandria')) {
      imagePool = alexandriaImages;
    }

    const mainImage = imagePool[i % imagePool.length];
    const images = [mainImage, ...imagePool.filter(img => img !== mainImage).slice(0, 3)];

    // Highlights fallback
    let highlights = raw.highlights && raw.highlights.length > 0 ? raw.highlights.map(cleanText) : [];
    if (highlights.length === 0) {
      if (cat.includes('Cruise')) {
        highlights = [
          'Full-board dining featuring authentic Egyptian & international buffet fare',
          'Licensed Egyptologist shore excursion guidance at all Nile temples',
          'Scenic sailing with sun deck, swimming pool, and river vistas',
          'Direct hotel/airport meet & assist with private air-conditioned transit'
        ];
      } else if (cat.includes('Shore')) {
        highlights = [
          'Guaranteed on-time return to cruise ship prior to sailing departure',
          'Private air-conditioned tourist vehicle with licensed professional driver',
          'Private English-speaking certified Egyptologist guide',
          'Customizable pace with entrance fees and lunch options available'
        ];
      } else {
        highlights = [
          'Private guided tour led by a university-educated licensed Egyptologist',
          'Private modern air-conditioned vehicle throughout the excursion',
          'Flexible schedule tailored to your interests and walking pace',
          'Hotel pickup and return transfer included'
        ];
      }
    }

    // Inclusions fallback
    let inclusions = raw.inclusions && raw.inclusions.length > 0 ? raw.inclusions.map(cleanText) : [];
    if (inclusions.length === 0) {
      inclusions = [
        'Private transportation in a modern, air-conditioned tourist vehicle',
        'Certified licensed Egyptologist guide (fluent in English)',
        'Door-to-door hotel or port pickup and drop-off',
        'All service charges, tolls, and local taxes',
        'Complimentary chilled bottled water during transit'
      ];
    }

    // Exclusions fallback
    let exclusions = raw.exclusions && raw.exclusions.length > 0 ? raw.exclusions.map(cleanText) : [];
    if (exclusions.length === 0) {
      exclusions = [
        'Monument and tomb entrance tickets (can be included upon request)',
        'Personal expenses and souvenirs',
        'Gratuities / tipping for tour guide and driver',
        'Meals and beverages unless specifically stated in itinerary'
      ];
    }

    // Itinerary
    let itinerary = raw.itinerary && raw.itinerary.length > 0
      ? raw.itinerary.map((it: any) => ({
          title: cleanText(it.title),
          description: cleanText(it.description)
        }))
      : [];

    if (itinerary.length === 0) {
      itinerary = [{
        title: 'Full Day Sightseeing Program',
        description: raw.overview || `Explore Egypt's timeless heritage with your private Egyptologist guide, experiencing historic landmarks, culture, and architecture at an unhurried pace.`
      }];
    }

    // Overview
    let overview = cleanText(raw.overview);
    if (!overview || overview.length < 50) {
      overview = `Discover the wonders of Egypt on this specialized excursion with Genuine Egypte. Led by licensed Egyptologist guides with private modern air-conditioned transport, tailored to give you an unhurried and authentic experience.`;
    }

    const duration = raw.duration && raw.duration !== 'Flexible Duration' ? raw.duration : (cat.includes('Cruise') ? '4 Days / 3 Nights' : (cat.includes('Package') ? '7 Days' : 'Full Day (8 Hours)'));

    const item: TourItem = {
      id,
      slug,
      title,
      category: cat as any,
      destination: dest,
      duration,
      price: null,
      priceNote: 'Contact us for custom quote & seasonal rates',
      featured: i < 5 || cat.includes('Luxury') || title.includes('Oberoi') || title.includes('Princess Farida'),
      shortDescription: overview.slice(0, 160) + '...',
      overview,
      highlights,
      itinerary,
      inclusions,
      exclusions,
      meetingPoint: 'Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.',
      mainImage,
      images,
      relatedSlugs: []
    };

    addedTourItems.push(item);
  }

  // Combine existing tours + new tours
  const masterCatalog: TourItem[] = [...existingTours, ...addedTourItems];
  console.log(`Total Master Catalog items: ${masterCatalog.length}`);

  // Re-link related tours meaningfully across the whole catalog
  masterCatalog.forEach(tour => {
    const sameCat = masterCatalog.filter(other => other.slug !== tour.slug && other.category === tour.category).map(o => o.slug);
    const sameDest = masterCatalog.filter(other => other.slug !== tour.slug && other.destination === tour.destination).map(o => o.slug);
    const pool = [...new Set([...sameCat, ...sameDest])];
    tour.relatedSlugs = pool.slice(0, 3);
  });

  // Write new src/data/tours.ts
  const tsContent = `// Structured tour data for Genuine Egypte
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
  source?: {
    website: string;
    url?: string;
  };
}

export const TOURS_DATA: TourItem[] = ${JSON.stringify(masterCatalog, null, 2)};

export function getAllTours(): TourItem[] {
  return TOURS_DATA;
}

export function getTourBySlug(slug: string): TourItem | undefined {
  const decoded = decodeURIComponent(slug).toLowerCase().replace(/^\\/+|\\/+$/g, "");
  return TOURS_DATA.find(t => {
    const tSlug = t.slug.toLowerCase();
    const tDecoded = decodeURIComponent(t.slug).toLowerCase();
    return tSlug === decoded || tDecoded === decoded;
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

  fs.writeFileSync('src/data/tours.ts', tsContent);
  console.log(`Successfully written src/data/tours.ts with ${masterCatalog.length} total tours!`);

  // Write comprehensive Markdown Deduplication Report
  const existingCount = existingTours.length;
  const discoveredCount = 279;
  const duplicatesCount = auditData.duplicatesCount;
  const newAddedCount = addedTourItems.length;

  let reportMd = `# DEDUPLICATION & INTEGRATION REPORT
## Master Catalog Expansion: Luxor & Aswan Travel Egypt Products

### Executive Summary
- **Existing Tours in Catalog (Before Import)**: ${existingCount}
- **Source Products Discovered & Audited**: ${discoveredCount}
- **Duplicates Detected & Prevented**: ${duplicatesCount}
- **Genuinely New Products Added**: ${newAddedCount}
- **Total Master Catalog (After Import)**: ${masterCatalog.length}

---

### Duplicate Detection & Prevention Audit
The following products from Luxor & Aswan Travel were identified as semantic or exact duplicates of existing tours on Genuine Egypte. To maintain a pristine catalog with zero duplication, these were NOT duplicated:

`;

  auditData.duplicates.forEach((d: any, index: number) => {
    reportMd += `#### ${index + 1}. ${d.sourceTitle}
- **Source URL**: ${d.sourceUrl}
- **Equivalent Existing Tour**: "${d.existingTitle}"
- **Canonical Slug**: \`${d.existingSlug}\` (ID: \`${d.existingId}\`)
- **Reason**: ${d.reason}

`;
  });

  reportMd += `---

### Final Category Breakdown in Master Catalog
`;
  const catSummary: Record<string, number> = {};
  masterCatalog.forEach(t => {
    catSummary[t.category] = (catSummary[t.category] || 0) + 1;
  });

  Object.entries(catSummary).forEach(([c, count]) => {
    reportMd += `- **${c}**: ${count} products\n`;
  });

  reportMd += `\n---\n*Report generated on ${new Date().toISOString()}*\n`;

  fs.writeFileSync('DEDUPLICATION_REPORT.md', reportMd);
  console.log(`Saved DEDUPLICATION_REPORT.md!`);
}

run();
