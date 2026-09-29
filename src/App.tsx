import React from 'react';
import { RouterProvider, useRouter } from './utils/router';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

import { HomePage } from './pages/HomePage';
import { ToursCatalogPage } from './pages/ToursCatalogPage';
import { TourDetailPage } from './pages/TourDetailPage';
import { CategoryPage } from './pages/CategoryPage';
import { DestinationsPage } from './pages/DestinationsPage';
import { DestinationDetailPage } from './pages/DestinationDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { FaqsPage } from './pages/FaqsPage';
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

  // 3. Original Booking URLs: /booking/:slug
  if (cleanPath.startsWith('/booking/')) {
    const slug = cleanPath.replace('/booking/', '');
    return <TourDetailPage slug={slug} />;
  }

  // 4. Tour detail alternative: /tour/:slug or /tours/:slug
  if (cleanPath.startsWith('/tour/')) {
    const slug = cleanPath.replace('/tour/', '');
    return <TourDetailPage slug={slug} />;
  }

  // 5. Dedicated Category Pages
  if (cleanPath === '/nile-cruises' || cleanPath === '/categories/nile-cruises') {
    return (
      <CategoryPage
        category="Nile Cruises"
        title="Luxury Nile River Cruises"
        subtitle="Upper Egypt River Expeditions"
        description="Explore pharaonic temples between Luxor and Aswan aboard five-star cruise vessels including the Royal Ruby and Nile Premium. Full-board dining, private Egyptologist shore guides, and panoramic river vistas."
        heroImage="/images/tours/160538339712Royal-Ruby-Nile-Cruise10.jpg"
        canonicalPath="/nile-cruises"
      />
    );
  }

  if (cleanPath === '/cairo-giza-tours' || cleanPath === '/categories/cairo-giza-tours' || cleanPath === '/categories/day-tours') {
    return (
      <CategoryPage
        category="Cairo & Giza Tours"
        title="Cairo & Giza Excursions"
        subtitle="The Pyramids & The Historic Capital"
        description="Experience the Pyramids of Giza, the Great Sphinx, ancient Saqqara and Dahshur, Saint Samaan Cave Church, and private layover tours in Cairo with certified Egyptologists."
        heroImage="/images/tours/genuine-egypte-3.webp"
        canonicalPath="/cairo-giza-tours"
      />
    );
  }

  if (cleanPath === '/luxor-upper-egypt' || cleanPath === '/categories/luxor-upper-egypt') {
    return (
      <CategoryPage
        category="Luxor & Upper Egypt"
        title="Luxor & Upper Egypt Tours"
        subtitle="The Ancient Thebes Necropolis"
        description="Guided private excursions to the Valley of the Kings, Karnak Temple, Luxor Temple, Temple of Hatshepsut, Dendera & Abydos, Edfu, and Kom Ombo."
        heroImage="/images/tours/genuine-egypte-19.webp"
        canonicalPath="/luxor-upper-egypt"
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
        heroImage="/images/tours/genuine-egypte-27.webp"
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
        heroImage="/images/tours/genuine-egypte-21.webp"
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

  // 6. Destinations
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

  // 7. About
  if (cleanPath === '/about' || cleanPath === '/about-me') {
    return <AboutPage />;
  }

  // 8. Contact
  if (cleanPath === '/contact') {
    return <ContactPage />;
  }

  // 9. FAQs
  if (cleanPath === '/faqs' || cleanPath === '/faq') {
    return <FaqsPage />;
  }

  // 10. Legal & Policies
  if (cleanPath === '/terms-conditions' || cleanPath === '/terms' || cleanPath === '/terms-and-conditions' || cleanPath === '/terms-conditions-2') {
    return <TermsPage />;
  }

  if (cleanPath === '/privacy-policy' || cleanPath === '/privacy') {
    return <PrivacyPage />;
  }

  // Direct tour slug fallback (e.g. if someone links to /royal-ruby-nile-cruise-3-nights-4-days directly)
  const directSlug = cleanPath.replace(/^\//, '');
  if (getTourBySlug(directSlug)) {
    return <TourDetailPage slug={directSlug} />;
  }

  // 404 Fallback
  return <NotFoundPage />;
}

export default function App() {
  return (
    <RouterProvider>
      <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-800 font-sans selection:bg-amber-200 selection:text-amber-900">
        <Navbar />
        <main className="flex-1">
          <AppContent />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </RouterProvider>
  );
}
