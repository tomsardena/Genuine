import fs from 'fs';
import path from 'path';
import { TOURS_DATA } from '../src/data/tours.ts';
import { DESTINATIONS_DATA } from '../src/data/destinations.ts';

const DOMAIN = 'https://genuineegypte.com';
const TODAY = new Date().toISOString().split('T')[0];

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'daily' | 'weekly' | 'monthly';
  priority: string;
  images?: Array<{ loc: string; title: string }>;
}

// 1. All Static Pages
const staticPages: Array<{ path: string; priority: string; changefreq: 'daily' | 'weekly' | 'monthly' }> = [
  { path: '', priority: '1.0', changefreq: 'daily' },
  { path: 'tours', priority: '0.9', changefreq: 'daily' },
  { path: 'about', priority: '0.7', changefreq: 'monthly' },
  { path: 'contact', priority: '0.8', changefreq: 'monthly' },
  { path: 'faqs', priority: '0.7', changefreq: 'monthly' },
  { path: 'terms-conditions', priority: '0.5', changefreq: 'monthly' },
  { path: 'privacy-policy', priority: '0.5', changefreq: 'monthly' },
  { path: 'destinations', priority: '0.8', changefreq: 'weekly' }
];

// 2. All Category Hubs & Key Service Areas
const categoryPages: Array<{ path: string; priority: string; changefreq: 'daily' | 'weekly' | 'monthly' }> = [
  { path: 'nile-cruises', priority: '0.9', changefreq: 'weekly' },
  { path: 'dahabiya-cruises', priority: '0.9', changefreq: 'weekly' },
  { path: 'lake-nasser-cruises', priority: '0.8', changefreq: 'weekly' },
  { path: 'cairo-giza-tours', priority: '0.9', changefreq: 'weekly' },
  { path: 'luxor-upper-egypt', priority: '0.9', changefreq: 'weekly' },
  { path: 'aswan-tours', priority: '0.8', changefreq: 'weekly' },
  { path: 'abu-simbel', priority: '0.8', changefreq: 'weekly' },
  { path: 'hot-air-balloon', priority: '0.8', changefreq: 'weekly' },
  { path: 'private-transfers', priority: '0.8', changefreq: 'weekly' },
  { path: 'shore-excursions', priority: '0.8', changefreq: 'weekly' },
  { path: 'day-tours', priority: '0.9', changefreq: 'weekly' },
  { path: 'egypt-packages', priority: '0.9', changefreq: 'weekly' },
  { path: 'hurghada-tours', priority: '0.8', changefreq: 'weekly' }
];

const urls: SitemapUrl[] = [];

// Add Static Pages
staticPages.forEach(p => {
  const loc = p.path ? `${DOMAIN}/${p.path}/` : `${DOMAIN}/`;
  urls.push({
    loc,
    lastmod: TODAY,
    changefreq: p.changefreq,
    priority: p.priority
  });
});

// Add Category Hubs
categoryPages.forEach(c => {
  urls.push({
    loc: `${DOMAIN}/${c.path}/`,
    lastmod: TODAY,
    changefreq: c.changefreq,
    priority: c.priority
  });
});

// Add Destination Guides
DESTINATIONS_DATA.forEach(d => {
  urls.push({
    loc: `${DOMAIN}/destinations/${d.slug}/`,
    lastmod: TODAY,
    changefreq: 'weekly',
    priority: '0.8',
    images: d.image ? [{ loc: `${DOMAIN}${d.image}`, title: `${d.name} Travel Guide – Genuine Egypte` }] : undefined
  });
});

// Add All 297 Tours with Gallery Images
TOURS_DATA.forEach(t => {
  const images: Array<{ loc: string; title: string }> = [];
  if (t.mainImage) {
    images.push({
      loc: t.mainImage.startsWith('http') ? t.mainImage : `${DOMAIN}${t.mainImage}`,
      title: `${t.title} – Genuine Egypte`
    });
  }
  if (t.images && t.images.length > 0) {
    t.images.slice(0, 3).forEach(img => {
      const fullUrl = img.startsWith('http') ? img : `${DOMAIN}${img}`;
      if (!images.some(existing => existing.loc === fullUrl)) {
        images.push({
          loc: fullUrl,
          title: `${t.title} Photo – Genuine Egypte`
        });
      }
    });
  }

  urls.push({
    loc: `${DOMAIN}/booking/${t.slug}/`,
    lastmod: TODAY,
    changefreq: 'weekly',
    priority: '0.9',
    images: images.length > 0 ? images : undefined
  });
});

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// Generate Sitemap XML String
let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;

urls.forEach(u => {
  sitemapXml += `  <url>\n`;
  sitemapXml += `    <loc>${escapeXml(u.loc)}</loc>\n`;
  sitemapXml += `    <lastmod>${u.lastmod}</lastmod>\n`;
  sitemapXml += `    <changefreq>${u.changefreq}</changefreq>\n`;
  sitemapXml += `    <priority>${u.priority}</priority>\n`;

  if (u.images && u.images.length > 0) {
    u.images.forEach(img => {
      sitemapXml += `    <image:image>\n`;
      sitemapXml += `      <image:loc>${escapeXml(img.loc)}</image:loc>\n`;
      sitemapXml += `      <image:title>${escapeXml(img.title)}</image:title>\n`;
      sitemapXml += `    </image:image>\n`;
    });
  }

  sitemapXml += `  </url>\n`;
});

sitemapXml += `</urlset>\n`;

// Generate Robots.txt String
const robotsTxt = `# Genuine Egypte - Licensed Egyptian Tour Operator & Nile Cruise Specialist
# Official Website: https://genuineegypte.com
# Headquarters: 44 Khaled Ibn Al Waleed St, Luxor, Egypt

User-agent: *
Allow: /
Allow: /images/
Allow: /assets/
Disallow: /api/

# Sitemap & Host Specification
Sitemap: ${DOMAIN}/sitemap.xml
Host: ${DOMAIN}
`;

// Write to Root Level AND Public Folder
const rootDir = process.cwd();
const publicDir = path.join(rootDir, 'public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// 1. Root Level
fs.writeFileSync(path.join(rootDir, 'robots.txt'), robotsTxt, 'utf8');
fs.writeFileSync(path.join(rootDir, 'sitemap.xml'), sitemapXml, 'utf8');

// 2. Public Directory (for Vite dev/production bundle)
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt, 'utf8');
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf8');

console.log(`✓ Generated robots.txt at root (${path.join(rootDir, 'robots.txt')}) and public/`);
console.log(`✓ Generated sitemap.xml at root (${path.join(rootDir, 'sitemap.xml')}) and public/ with ${urls.length} URLs and comprehensive images!`);
