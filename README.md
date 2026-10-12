# Genuine Egypte

> **Official Website & Digital Platform for Genuine Egypte**  
> Authentic private cultural journeys, Nile cruises, Dahabiya yachts, and door-to-door private transfers operated by licensed local Egyptologists based in Luxor, Egypt.

---

## 🏛️ About Genuine Egypte

**Genuine Egypte** is a premier local tour operator founded and directed by licensed Egyptian Egyptologists and tourism quality managers. Headquartered at 44 Khaled Ibn Al Waleed Street, Luxor, the agency delivers unhurried, private, and culturally immersive travel experiences throughout Egypt—free from commercial tourist traps, mandatory shopping bazaars, and intermediary commissions.

- **Website**: [https://genuineegypte.com/](https://genuineegypte.com/)
- **Live Deployment**: [https://genuine-tau.vercel.app/](https://genuine-tau.vercel.app/)
- **Headquarters**: 44 Khaled Ibn Al Waleed Street, Luxor, Egypt
- **Direct Concierge WhatsApp**: +20 1070335551 · +20 1022721263 · +20 1033801083
- **Inquiry Desk**: `info@genuineegypte.com` · `sales@genuineegypte.com`

---

## ✨ Features & Architecture

- **297 Curated Tours & Experiences**: Comprehensive master catalogue encompassing private day tours in Cairo, Giza, Luxor, and Aswan; 3- to 7-night luxury 5-star Nile cruises; Dahabiya sailing yachts; Red Sea excursions; and intercity transfers.
- **Strict Transparent Pricing Model**:
  - Starting prices per adult in USD for verified day tours.
  - Zero hidden booking deductions or unexpected on-arrival fees.
  - Transparent quotation request system for bespoke itineraries and seasonal transfers (never displaying confusing `$0` placeholders).
- **Progressive Web App (PWA)**: Offline browsing capability, service worker caching, and app-like installation across desktop and mobile devices.
- **High-Performance Static / Jamstack Build**: Powered by Vite and React 19, delivering sub-second load times, responsive typographic layouts, and optimized image delivery with zero runtime database dependencies.
- **Advanced Technical SEO & Structured Data**:
  - Full OpenGraph and Twitter card integration (`SEOHead.tsx`).
  - Google-compliant Schema.org JSON-LD structured data (`TouristTrip`, `Product`, `Offer`, `BreadcrumbList`, and `Organization`).
  - Dynamic XML sitemap generator with 300+ canonical routes (`sitemap.xml`).
  - Machine-readable LLM search indices (`llms.txt` and `llms-full.txt`).
- **Direct Concierge Integration**: One-click WhatsApp prefilled reservation inquiries and instant contact routing with local guides.

---

## 📂 Repository Structure

```text
├── public/                 # Static assets, Web App Manifest, icons, sitemap.xml, llms.txt
├── scripts/
│   ├── generate_seo_files.ts  # Generates dynamic sitemap.xml and robots.txt
│   ├── validate_tours.ts      # Automated catalogue data integrity test suite
│   ├── build-llms-full.mjs    # Generates llms.txt and llms-full.txt knowledge indices
│   └── build_master_catalog.ts# Master catalogue compiler & deduplicator
├── src/
│   ├── components/         # Reusable UI components (Navbar, Footer, TourCard, SEOHead, etc.)
│   ├── data/
│   │   ├── tours.ts        # Master 297-tour structured catalog (TOURS_DATA)
│   │   ├── destinations.ts # Destination metadata & editorial guides
│   │   ├── navigation.ts   # Navigation bar & footer hierarchy
│   │   ├── reviews.ts      # Verified TripAdvisor & Google traveler reviews
│   │   └── siteSettings.ts # Organization profile, contacts, and social links
│   ├── pages/              # Routed pages (Home, Tours Catalog, Detail, FAQ, About, etc.)
│   └── utils/
│       ├── pricing.ts      # Price formatting, display rules, and unit resolution
│       ├── router.ts       # Zero-dependency client-side SPA routing
│       └── analytics.ts    # Privacy-conscious event coordination
├── server.ts               # Express development and SSR/API proxy server
├── vite.config.ts          # Vite build pipeline & PWA configuration
└── package.json            # Scripts and dependencies
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- `npm` or `bun`

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/tomsardena/Genuine.git
cd Genuine
npm install
```

### Development Server

Run the development server on port 3000:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ Build, Lint & Validation Scripts

| Command | Description |
|---|---|
| `npm run lint` | Type-checks the entire TypeScript codebase (`tsc --noEmit`). |
| `npm run validate:tours` | Validates catalogue integrity: uniqueness of all 297 IDs and slugs, disk image asset existence, pricing rules, and exclusion of unsupported blanket claims. |
| `npm run build` | Compiles the production application bundle and generates PWA service workers via Vite. |
| `npm run preview` | Previews the compiled production build locally. |
| `npm run sitemap` | Regenerates `sitemap.xml` and `robots.txt` from the current tour and destination data. |
| `node scripts/build-llms-full.mjs` | Builds the complete `llms-full.txt` knowledge base file for AI discovery. |

---

## 🏷️ Pricing Policy & Rules

1. **Starting Prices**: Advertised tour prices are starting rates per adult in USD for private tours based on typical party configurations.
2. **Missing or Seasonal Rates**: Unpriced tours or customized private transfers deliberately store `price: null`. The UI gracefully displays **"Custom Seasonal Rate"** or **"Quote on Request"**—never `$0`.
3. **No Hidden Costs**: Local entrance fees, private A/C transport, and certified guides are explicitly outlined per tour itinerary.
4. **Direct Booking**: Payments and reservations are coordinated directly with the local Luxor office, ensuring travelers receive genuine local rates without aggregator surcharges.

---

## 📄 License

&copy; Genuine Egypte. All rights reserved. Commercial tour descriptions, brand marks, and itinerary layouts are proprietary.
