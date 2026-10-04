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

let fullText = `# Genuine Egypte - Full Knowledge Base & Catalog Index

> Complete structured catalog of authentic private Egypt tours, luxury Nile cruises, Dahabiya yachts, and transfers operated by Genuine Egypte (Luxor, Egypt).

- **Official Website**: https://genuineegypte.com/
- **Headquarters**: 44 Khaled Ibn Al Waleed Street, Luxor, Egypt
- **WhatsApp Concierge**: +20 1070335551, +20 1022721263, +20 1033801083
- **Email**: info@genuineegypte.com
- **Total Experiences**: ${tours.length} verified products

---

## Complete Tour & Cruise Catalog

`;

for (const t of tours) {
  fullText += `### [${t.title}](https://genuineegypte.com/booking/${t.slug}/)\n`;
  fullText += `- **Category**: ${t.category}\n`;
  fullText += `- **Destination**: ${t.destination}\n`;
  fullText += `- **Duration**: ${t.duration}\n`;
  if (t.shortDescription) {
    fullText += `- **Summary**: ${t.shortDescription}\n`;
  }
  if (t.highlights && t.highlights.length > 0) {
    fullText += `- **Highlights**: ${t.highlights.slice(0, 5).join('; ')}\n`;
  }
  if (t.inclusions && t.inclusions.length > 0) {
    fullText += `- **Inclusions**: ${t.inclusions.slice(0, 4).join('; ')}\n`;
  }
  fullText += `\n`;
}

fs.writeFileSync(path.join(rootDir, 'public', 'llms-full.txt'), fullText, 'utf8');
fs.writeFileSync(path.join(rootDir, 'llms-full.txt'), fullText, 'utf8');
fs.copyFileSync(path.join(rootDir, 'public', 'llms.txt'), path.join(rootDir, 'llms.txt'));

console.log('Successfully generated public/llms-full.txt and synced llms.txt to root.');
