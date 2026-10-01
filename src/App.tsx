import React from 'react';
import { RouterProvider, useRouter } from './utils/router';
import { ThemeProvider } from './utils/theme';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MahmodChatbot } from './components/MahmodChatbot';

import { HomePage } from './pages/HomePage';
import { ToursCatalogPage } from './pages/ToursCatalogPage';
import { TourDetailPage } from './pages/TourDetailPage';
import { CategoryPage } from './pages/CategoryPage';
import { DestinationsPage } from './pages/DestinationsPage';
import { DestinationDetailPage } from './pages/DestinationDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { FaqsPage } from './pages/FaqsPage';
import { GalleryPage } from './pages/GalleryPage';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { getTourBySlug } from './data/tours';

function AppContent() {
  const { currentPath } = useRouter();

  // Normalize path by stripping trailing slashes and decoding
  const cleanPath = decodeURIComponent(currentPath).replace(/\/+$/, '') || '/';

  // 1. Home
  if (cleanPath === '' || cleanPath === '/') {
    return <HomePage />;
  }

  // 2. All Tours Catalog
  if (cleanPath === '/tours' || cleanPath === '/our-tours' || cleanPath === '/all-items' || cleanPath === '/search-result' || cleanPath === '/ba_search_results') {
    return <ToursCatalogPage />;
  }

  // 3. Tour detail URLs: /booking/:slug, /tour/:slug, /package/:slug, /cruise/:slug
  if (cleanPath.startsWith('/booking/')) {
    const slug = cleanPath.replace('/booking/', '');
    return <TourDetailPage slug={slug} />;
  }

  if (cleanPath.startsWith('/tour/')) {
    const slug = cleanPath.replace('/tour/', '');
    return <TourDetailPage slug={slug} />;
  }

  if (cleanPath.startsWith('/package/')) {
    const slug = cleanPath.replace('/package/', '');
    return <TourDetailPage slug={slug} />;
  }

  if (cleanPath.startsWith('/cruise/')) {
    const slug = cleanPath.replace('/cruise/', '');
    return <TourDetailPage slug={slug} />;
  }

  // 4. Dedicated Category Pages
  if (cleanPath === '/nile-cruises' || cleanPath === '/categories/nile-cruises') {
    return (
      <CategoryPage
        category="Nile Cruises"
        title="Luxury Nile River Cruises"
        subtitle="Upper Egypt River Expeditions"
        description="Explore pharaonic temples between Luxor and Aswan aboard five-star cruise vessels including the Royal Ruby, Nile Premium, Oberoi, and Sonesta ships. Full-board dining, private Egyptologist shore guides, and panoramic river vistas."
        heroImage="/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg"
        canonicalPath="/nile-cruises"
      />
    );
  }

  if (cleanPath === '/dahabiya-cruises' || cleanPath === '/categories/dahabiya-cruises') {
    return (
      <CategoryPage
        category="Dahabiya Nile Cruises"
        title="Private Dahabiya Nile Cruises"
        subtitle="Exclusive Traditional Sailboats"
        description="Experience the magic of the River Nile on a traditional twin-sailed Dahabiya (Princess Farida, Three Pyramids, Sonesta Amirat, etc.). Small private groups, access to secluded riverbanks, and authentic gourmet dining."
        heroImage="/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg"
        canonicalPath="/dahabiya-cruises"
      />
    );
  }

  if (cleanPath === '/lake-nasser-cruises' || cleanPath === '/categories/lake-nasser-cruises') {
    return (
      <CategoryPage
        category="Lake Nasser Cruises"
        title="Lake Nasser Cruises & Abu Simbel"
        subtitle="The Nubian Desert Waterway"
        description="Sail the tranquil waters of Lake Nasser from Aswan to Abu Simbel aboard Steigenberger Omar El Khayam or Movenpick Prince Abbas. Discover Kalabsha, Wadi El Seboua, Amada, and the colossal Sun Temples."
        heroImage="/images/tours/ABU-SIMBEL-10.webp"
        canonicalPath="/lake-nasser-cruises"
      />
    );
  }

  if (cleanPath === '/egypt-packages' || cleanPath === '/travel-packages' || cleanPath === '/categories/travel-pakages') {
    return (
      <CategoryPage
        category="Egypt Vacation Packages"
        title="Egypt Vacation Packages & Multi-Day Tours"
        subtitle="Curated Multi-City Journeys"
        description="Comprehensive 4-day to 15-day multi-city Egyptian itineraries combining Cairo & Giza pyramids, five-star Nile cruises, and Red Sea relaxation with private licensed Egyptologist guides."
        heroImage="/images/tours/Luxor-Private-Tour-4.webp"
        canonicalPath="/egypt-packages"
      />
    );
  }

  if (cleanPath === '/day-tours' || cleanPath === '/categories/day-tours') {
    return (
      <CategoryPage
        category="Day Tours"
        title="Egypt Private Day Tours"
        subtitle="Cairo, Luxor, Aswan, Abu Simbel & Beyond"
        description="Private guided day trips and temple excursions across Cairo, Luxor, Aswan, Abu Simbel, and Alexandria with certified licensed Egyptologists and modern private air-conditioned vehicles."
        heroImage="/images/tours/Luxor-Private-Tour-4.webp"
        canonicalPath="/day-tours"
        customFilter={(t) =>
          t.category.includes('Tours') ||
          t.category.includes('Excursion') ||
          t.category === 'Hot Air Balloon'
        }
      />
    );
  }

  if (cleanPath === '/cairo-giza-tours' || cleanPath === '/categories/cairo-giza-tours') {
    return (
      <CategoryPage
        category="Cairo Tours"
        title="Cairo & Giza Excursions"
        subtitle="The Pyramids & The Historic Capital"
        description="Experience the Pyramids of Giza, the Great Sphinx, ancient Saqqara and Dahshur, the Grand Egyptian Museum, Saint Samaan Cave Church, and private layover tours in Cairo with certified Egyptologists."
        heroImage="/images/tours/Luxor-Private-Tour-4.webp"
        canonicalPath="/cairo-giza-tours"
      />
    );
  }

  if (cleanPath === '/luxor-upper-egypt' || cleanPath === '/categories/luxor-upper-egypt' || cleanPath === '/luxor-tours') {
    return (
      <CategoryPage
        category="Luxor & Upper Egypt"
        title="Luxor & Upper Egypt Tours"
        subtitle="The Ancient Thebes Necropolis"
        description="Guided private excursions to the Valley of the Kings, Karnak Temple, Luxor Temple, Temple of Hatshepsut, Dendera & Abydos, Luxor Museum, Edfu, and Kom Ombo."
        heroImage="/images/tours/KOM-OMBO-1-1-1.webp"
        canonicalPath="/luxor-upper-egypt"
      />
    );
  }

  if (cleanPath === '/aswan-tours' || cleanPath === '/categories/aswan-day-tours') {
    return (
      <CategoryPage
        category="Aswan Tours"
        title="Aswan & Nubia Excursions"
        subtitle="Egypt’s Southern Frontier"
        description="Explore Philae Temple of Isis, the Aswan High Dam, the Unfinished Obelisk, and authentic Nubian villages along the Nile with licensed Egyptologists."
        heroImage="/images/tours/ABU-SIMBEL-1-1.webp"
        canonicalPath="/aswan-tours"
      />
    );
  }

  if (cleanPath === '/hurghada-tours' || cleanPath === '/categories/hurghada-tours' || cleanPath === '/categories/hurghada-day-tours') {
    return (
      <CategoryPage
        category="Hurghada Tours"
        title="Hurghada & Red Sea Excursions"
        subtitle="Desert Safaris, Coral Reefs & Marine Adventures"
        description="Experience the beauty of the Red Sea with private Hurghada boat trips, snorkeling at Giftun Island, desert quad bike safaris, and day trips to Luxor from Hurghada."
        heroImage="/images/tours/11-21.webp"
        canonicalPath="/hurghada-tours"
        customFilter={(t) =>
          t.destination.toLowerCase().includes('hurghada') ||
          t.destination.toLowerCase().includes('red sea') ||
          t.category.toLowerCase().includes('hurghada')
        }
      />
    );
  }

  if (cleanPath === '/shore-excursions' || cleanPath === '/categories/shore-excursions') {
    return (
      <CategoryPage
        category="Shore Excursions"
        title="Egypt Shore Excursions"
        subtitle="Private Shore Trips with Guaranteed Ship Return"
        description="Customized private day excursions from Safaga Port (to Luxor), Alexandria Port (to Cairo & Giza), Port Said, and Ein El Sokhna with guaranteed on-time return to your cruise vessel."
        heroImage="/images/tours/11-21.webp"
        canonicalPath="/shore-excursions"
      />
    );
  }

  if (cleanPath === '/private-transfers' || cleanPath === '/categories/transportation') {
    return (
      <CategoryPage
        category="Private Transfers"
        title="Private Intercity & Airport Transfers"
        subtitle="Comfortable Overland Travel in Egypt"
        description="Door-to-door private transfers between Luxor, Aswan, Hurghada, and international airports in modern air-conditioned vehicles with professional licensed tourist drivers."
        heroImage="/images/tours/New-Project-2026-01-27T143452.563-600x540.webp"
        canonicalPath="/private-transfers"
      />
    );
  }

  if (cleanPath === '/hot-air-balloon' || cleanPath === '/categories/hot-air-balloon') {
    return (
      <CategoryPage
        category="Hot Air Balloon"
        title="Sunrise Hot Air Balloon Flights"
        subtitle="Drift Above Ancient Thebes"
        description="Experience the magic of sunrise over Luxor's West Bank, drifting above the Valley of the Kings and Hatshepsut Temple in a certified commercial hot air balloon."
        heroImage="/images/tours/New-Project-2025-06-24T153559.658-1.webp"
        canonicalPath="/hot-air-balloon"
      />
    );
  }

  if (cleanPath === '/abu-simbel') {
    return (
      <CategoryPage
        category="Abu Simbel Excursions"
        title="Abu Simbel UNESCO Excursions"
        subtitle="The Colossal Sun Temples of Ramesses II"
        description="Private guided trips from Aswan across the Nubian desert to marvel at the Great Temple of Ramesses II and the Temple of Hathor and Nefertari on the shores of Lake Nasser."
        heroImage="/images/tours/ABU-SIMBEL-10.webp"
        canonicalPath="/abu-simbel"
      />
    );
  }

  // 5. Destinations
  if (cleanPath === '/destinations' || cleanPath === '/destination' || cleanPath === '/destination-02') {
    return <DestinationsPage />;
  }

  if (cleanPath.startsWith('/destinations/')) {
    const destSlug = cleanPath.replace('/destinations/', '');
    return <DestinationDetailPage slug={destSlug} />;
  }

  if (cleanPath.startsWith('/destination/')) {
    const destSlug = cleanPath.replace('/destination/', '');
    return <DestinationDetailPage slug={destSlug} />;
  }

  // 6. About
  if (cleanPath === '/about' || cleanPath === '/about-me') {
    return <AboutPage />;
  }

  // 7. Contact
  if (cleanPath === '/contact') {
    return <ContactPage />;
  }

  // 8. FAQs
  if (cleanPath === '/faqs' || cleanPath === '/faq') {
    return <FaqsPage />;
  }

  // 9. Photo Gallery
  if (cleanPath === '/gallery' || cleanPath === '/photos' || cleanPath === '/photo-gallery') {
    return <GalleryPage />;
  }

  // 10. Legal & Policies
  if (cleanPath === '/terms-conditions' || cleanPath === '/terms' || cleanPath === '/terms-and-conditions' || cleanPath === '/terms-conditions-2') {
    return <TermsPage />;
  }

  if (cleanPath === '/privacy-policy' || cleanPath === '/privacy') {
    return <PrivacyPage />;
  }

  // Direct tour slug fallback (e.g. if someone links to /royal-ruby-nile-cruise-3-nights-4-days or /nebu-nile-cruise directly)
  const directSlug = cleanPath.replace(/^\//, '');
  if (getTourBySlug(directSlug)) {
    return <TourDetailPage slug={directSlug} />;
  }

  // 404 Fallback
  return <NotFoundPage />;
}

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider>
        <div className="min-h-screen flex flex-col bg-[#FAF8F5] dark:bg-[#121110] text-stone-800 dark:text-stone-100 font-sans selection:bg-amber-200 selection:text-amber-900 dark:selection:bg-amber-900/60 dark:selection:text-amber-200 transition-colors duration-200">
          <Navbar />
          <main className="flex-1">
            <AppContent />
          </main>
          <Footer />
          <MahmodChatbot />
        </div>
      </RouterProvider>
    </ThemeProvider>
  );
}
