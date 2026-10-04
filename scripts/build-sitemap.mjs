import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const toursContent = fs.readFileSync(path.join(rootDir, 'src', 'data', 'tours.ts'), 'utf8');
const match = toursContent.match(/export const TOURS_DATA: TourItem\[\] = (\[[\s\S]*?\]);\s*export/);

if (!match) {
  console.error('Could not find TOURS_DATA in src/data/tours.ts');
  process.exit(1);
}

const tours = JSON.parse(match[1]);
console.log(`Loaded ${tours.length} tours for sitemap generation.`);

const today = new Date().toISOString().split('T')[0];

const staticPages = [
  { url: 'https://genuineegypte.com/', priority: '1.0', changefreq: 'daily' },
  { url: 'https://genuineegypte.com/tours/', priority: '0.9', changefreq: 'daily' },
  { url: 'https://genuineegypte.com/nile-cruises/', priority: '0.9', changefreq: 'daily' },
  { url: 'https://genuineegypte.com/dahabiya-cruises/', priority: '0.9', changefreq: 'daily' },
  { url: 'https://genuineegypte.com/lake-nasser-cruises/', priority: '0.85', changefreq: 'weekly' },
  { url: 'https://genuineegypte.com/egypt-packages/', priority: '0.9', changefreq: 'daily' },
  { url: 'https://genuineegypte.com/day-tours/', priority: '0.85', changefreq: 'daily' },
  { url: 'https://genuineegypte.com/cairo-giza-tours/', priority: '0.85', changefreq: 'daily' },
  { url: 'https://genuineegypte.com/luxor-upper-egypt/', priority: '0.85', changefreq: 'daily' },
  { url: 'https://genuineegypte.com/aswan-tours/', priority: '0.85', changefreq: 'daily' },
  { url: 'https://genuineegypte.com/hurghada-tours/', priority: '0.85', changefreq: 'daily' },
  { url: 'https://genuineegypte.com/shore-excursions/', priority: '0.8', changefreq: 'weekly' },
  { url: 'https://genuineegypte.com/private-transfers/', priority: '0.8', changefreq: 'weekly' },
  { url: 'https://genuineegypte.com/hot-air-balloon/', priority: '0.85', changefreq: 'daily' },
  { url: 'https://genuineegypte.com/abu-simbel/', priority: '0.85', changefreq: 'weekly' },
  { url: 'https://genuineegypte.com/destinations/', priority: '0.8', changefreq: 'weekly' },
  { url: 'https://genuineegypte.com/destinations/luxor/', priority: '0.8', changefreq: 'weekly' },
  { url: 'https://genuineegypte.com/destinations/nile-river/', priority: '0.8', changefreq: 'weekly' },
  { url: 'https://genuineegypte.com/destinations/cairo-giza/', priority: '0.8', changefreq: 'weekly' },
  { url: 'https://genuineegypte.com/destinations/aswan-abu-simbel/', priority: '0.8', changefreq: 'weekly' },
  { url: 'https://genuineegypte.com/destinations/red-sea-hurghada/', priority: '0.8', changefreq: 'weekly' },
  { url: 'https://genuineegypte.com/destinations/alexandria/', priority: '0.8', changefreq: 'weekly' },
  { url: 'https://genuineegypte.com/about/', priority: '0.7', changefreq: 'monthly' },
  { url: 'https://genuineegypte.com/contact/', priority: '0.8', changefreq: 'monthly' },
  { url: 'https://genuineegypte.com/faqs/', priority: '0.7', changefreq: 'monthly' },
  { url: 'https://genuineegypte.com/gallery/', priority: '0.6', changefreq: 'monthly' },
  { url: 'https://genuineegypte.com/terms-conditions/', priority: '0.5', changefreq: 'monthly' },
  { url: 'https://genuineegypte.com/privacy-policy/', priority: '0.5', changefreq: 'monthly' },
];

function escapeXml(unsafe) {
  return String(unsafe)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;

// Add static pages
for (const p of staticPages) {
  xml += `  <url>
    <loc>${p.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>
`;
}

// Add all 297 tours with Google Image Sitemap metadata
for (const tour of tours) {
  const tourUrl = `https://genuineegypte.com/booking/${tour.slug}/`;
  const cleanImg = tour.mainImage.startsWith('http')
    ? tour.mainImage
    : `https://genuineegypte.com${tour.mainImage.startsWith('/') ? tour.mainImage : `/${tour.mainImage}`}`;
  
  xml += `  <url>
    <loc>${tourUrl}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>${escapeXml(cleanImg)}</image:loc>
      <image:title>${escapeXml(tour.title)}</image:title>
      <image:caption>${escapeXml(tour.shortDescription || `${tour.title} private guided tour in ${tour.destination}, Egypt`)}</image:caption>
    </image:image>
  </url>
`;
}

xml += `</urlset>\n`;

fs.writeFileSync(path.join(rootDir, 'public', 'sitemap.xml'), xml, 'utf8');
fs.writeFileSync(path.join(rootDir, 'sitemap.xml'), xml, 'utf8');
console.log(`Successfully generated public/sitemap.xml and sitemap.xml with ${staticPages.length + tours.length} URLs.`);
