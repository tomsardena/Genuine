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

const staticRoutes: Array<{ path: string; priority: string; changefreq: 'daily' | 'weekly' | 'monthly' }> = [
  { path: '', priority: '1.0', changefreq: 'daily' },
  { path: 'tours', priority: '0.9', changefreq: 'daily' },
  { path: 'nile-cruises', priority: '0.9', changefreq: 'weekly' },
  { path: 'dahabiya-cruises', priority: '0.9', changefreq: 'weekly' },
  { path: 'lake-nasser-cruises', priority: '0.8', changefreq: 'weekly' },
  { path: 'cairo-giza-tours', priority: '0.9', changefreq: 'weekly' },
  { path: 'luxor-upper-egypt', priority: '0.9', changefreq: 'weekly' },
  { path: 'shore-excursions', priority: '0.8', changefreq: 'weekly' },
  { path: 'day-tours', priority: '0.9', changefreq: 'weekly' },
  { path: 'vacation-packages', priority: '0.9', changefreq: 'weekly' },
  { path: 'private-transfers', priority: '0.8', changefreq: 'weekly' },
  { path: 'hot-air-balloon', priority: '0.8', changefreq: 'weekly' },
  { path: 'destinations', priority: '0.8', changefreq: 'weekly' },
  { path: 'about', priority: '0.7', changefreq: 'monthly' },
  { path: 'contact', priority: '0.8', changefreq: 'monthly' },
  { path: 'faqs', priority: '0.7', changefreq: 'monthly' },
  { path: 'terms-conditions', priority: '0.5', changefreq: 'monthly' },
  { path: 'privacy-policy', priority: '0.5', changefreq: 'monthly' }
];

const urls: SitemapUrl[] = [];

// 1. Static Pages
staticRoutes.forEach(r => {
  const loc = r.path ? `${DOMAIN}/${r.path}/` : `${DOMAIN}/`;
  urls.push({
    loc,
    lastmod: TODAY,
    changefreq: r.changefreq,
    priority: r.priority
  });
});

// 2. Destination Pages
DESTINATIONS_DATA.forEach(d => {
  urls.push({
    loc: `${DOMAIN}/destinations/${d.slug}/`,
    lastmod: TODAY,
    changefreq: 'weekly',
    priority: '0.8',
    images: d.image ? [{ loc: `${DOMAIN}${d.image}`, title: `${d.name} Travel Guide – Genuine Egypte` }] : undefined
  });
});

// 3. All 297 Tours with Images
TOURS_DATA.forEach(t => {
  const images: Array<{ loc: string; title: string }> = [];
  if (t.mainImage) {
    images.push({
      loc: t.mainImage.startsWith('http') ? t.mainImage : `${DOMAIN}${t.mainImage}`,
      title: `${t.title} – ${t.destination}`
    });
  }
  if (t.images && t.images.length > 0) {
    t.images.slice(0, 3).forEach(img => {
      const fullUrl = img.startsWith('http') ? img : `${DOMAIN}${img}`;
      if (!images.some(existing => existing.loc === fullUrl)) {
        images.push({
          loc: fullUrl,
          title: `${t.title} Gallery – Genuine Egypte`
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

// Build XML
function escapeXml(unsafe: string): string {
  return unsafe
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

urls.forEach(u => {
  xml += `  <url>\n`;
  xml += `    <loc>${escapeXml(u.loc)}</loc>\n`;
  xml += `    <lastmod>${u.lastmod}</lastmod>\n`;
  xml += `    <changefreq>${u.changefreq}</changefreq>\n`;
  xml += `    <priority>${u.priority}</priority>\n`;

  if (u.images && u.images.length > 0) {
    u.images.forEach(img => {
      xml += `    <image:image>\n`;
      xml += `      <image:loc>${escapeXml(img.loc)}</image:loc>\n`;
      xml += `      <image:title>${escapeXml(img.title)}</image:title>\n`;
      xml += `    </image:image>\n`;
    });
  }

  xml += `  </url>\n`;
});

xml += `</urlset>\n`;

const outPath = path.join(process.cwd(), 'public', 'sitemap.xml');
fs.writeFileSync(outPath, xml, 'utf8');
console.log(`✓ Successfully generated ${outPath} with ${urls.length} URLs!`);
