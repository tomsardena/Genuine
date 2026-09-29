const fs = require('fs');

const tours = JSON.parse(fs.readFileSync('all_tours_detailed.json', 'utf8'));

const staticPages = [
  '',
  'tours',
  'nile-cruises',
  'cairo-giza-tours',
  'luxor-upper-egypt',
  'private-transfers',
  'hot-air-balloon',
  'destinations',
  'destinations/luxor',
  'destinations/nile-river',
  'destinations/cairo-giza',
  'destinations/aswan-abu-simbel',
  'destinations/alexandria',
  'destinations/hurghada',
  'about',
  'contact',
  'faqs',
  'terms-conditions',
  'privacy-policy'
];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

// Static pages
staticPages.forEach(p => {
  xml += `  <url>
    <loc>https://genuineegypte.com/${p ? p + '/' : ''}</loc>
    <changefreq>weekly</changefreq>
    <priority>${p === '' ? '1.0' : '0.8'}</priority>
  </url>
`;
});

// All 38 tour booking URLs
tours.forEach(t => {
  xml += `  <url>
    <loc>https://genuineegypte.com/booking/${t.slug}/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
`;
});

xml += `</urlset>`;

fs.writeFileSync('public/sitemap.xml', xml);
console.log(`Generated public/sitemap.xml with ${staticPages.length + tours.length} URLs!`);
