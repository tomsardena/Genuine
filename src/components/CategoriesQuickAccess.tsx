import React, { useState } from 'react';
import { Link } from '../utils/router';
import { OptimizedImage } from './OptimizedImage';
import {
  Compass,
  Ship,
  Map,
  Car,
  Sparkles,
  ArrowRight,
  Clock,
  CheckCircle2,
  ChevronRight,
  X,
  MapPin,
  ChevronDown
} from 'lucide-react';

interface QuickAccessCategory {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  href?: string;
  isDayToursAction?: boolean;
  isCustomAction?: boolean;
  image: string;
  alt: string;
  count: string;
  durationInfo: string;
  featureNote: string;
  icon: React.ComponentType<{ className?: string }>;
}

const QUICK_CATEGORIES: QuickAccessCategory[] = [
  {
    id: 'day-tours',
    title: 'Day tours',
    badge: '★ 4 Destinations',
    tagline: 'Private guided excursions across Cairo, Luxor, Aswan & Hurghada with certified Egyptologists',
    href: '/day-tours',
    isDayToursAction: true,
    image: '/images/tours/Luxor-Private-Tour-4.webp',
    alt: 'Private day tour in Egypt with licensed Egyptologist guide',
    count: 'Cairo, Luxor, Aswan, Hurghada',
    durationInfo: 'Half & Full Day',
    featureNote: 'Select Destination',
    icon: Compass
  },
  {
    id: 'nile-cruises',
    title: 'Nile cruises',
    badge: '★ Luxor ↔ Aswan',
    tagline: '5-star luxury cruise vessels and traditional Dahabiyas on full board with shore excursions',
    href: '/nile-cruises',
    image: '/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg',
    alt: 'Royal Ruby 5-star Nile cruise ship on the River Nile',
    count: '100+ Itineraries',
    durationInfo: '3, 4 & 7 Nights',
    featureNote: 'Full Board & Shore Tours',
    icon: Ship
  },
  {
    id: 'packages',
    title: 'Packages',
    badge: '★ Multi-City Journeys',
    tagline: 'Comprehensive multi-day itineraries combining Cairo pyramids, Nile cruises & the Red Sea',
    href: '/egypt-packages',
    image: '/images/tours/KOM-OMBO-1-1-1.webp',
    alt: 'Ancient Egyptian temple complex at Kom Ombo',
    count: '50+ Itineraries',
    durationInfo: '4 to 15 Days',
    featureNote: 'All-Inclusive Excursions',
    icon: Map
  },
  {
    id: 'transfers',
    title: 'Transfers',
    badge: '★ Door-to-Door VIP',
    tagline: 'Private airport and intercity transfers between Luxor, Hurghada, Aswan & Cairo in modern vehicles',
    href: '/private-transfers',
    image: '/images/tours/New-Project-2026-01-27T143452.563-600x540.webp',
    alt: 'Private luxury transportation vehicle in Egypt',
    count: '10 Routes',
    durationInfo: 'Private A/C Fleet',
    featureNote: 'Fixed Per-Vehicle Rates',
    icon: Car
  },
  {
    id: 'tailor-made-tours',
    title: 'Tailor made tours',
    badge: '★ 100% Bespoke',
    tagline: 'Custom private Egyptian journeys planned around your specific dates, pace, and interests',
    href: '/contact',
    isCustomAction: true,
    image: '/images/tours/New-Project-2025-06-24T153559.658-1.webp',
    alt: 'Sunrise Hot Air Balloon floating above Luxor West Bank',
    count: 'Tailored Proposal',
    durationInfo: 'Your Exact Pace',
    featureNote: 'Direct Luxor Concierge',
    icon: Sparkles
  }
];

interface DayTourDestination {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  href: string;
  image: string;
  alt: string;
  count: string;
  highlights: string[];
}

const DAY_TOUR_DESTINATIONS: DayTourDestination[] = [
  {
    id: 'cairo',
    name: 'Cairo',
    badge: '★ Pyramids & Museums',
    tagline: 'Giza Pyramids, Great Sphinx, Saqqara, NMEC & the Grand Egyptian Museum',
    href: '/cairo-giza-tours',
    image: '/images/tours/15974105260camels-at-the-site-of-pyramids-2445852.jpg',
    alt: 'Giza Pyramids and Sphinx in Cairo',
    count: '25+ Private Tours',
    highlights: ['Giza Plateau & Sphinx', 'Saqqara Step Pyramid', 'National Museum of Egyptian Civilization']
  },
  {
    id: 'luxor',
    name: 'Luxor',
    badge: '★ Ancient Thebes',
    tagline: 'Valley of the Kings, Karnak Temple, Luxor Temple, Hatshepsut & sunrise ballooning',
    href: '/luxor-upper-egypt',
    image: '/images/tours/15971782201Luxor-Temple.jpg',
    alt: 'Luxor Temple columns and statues',
    count: '30+ Private Tours',
    highlights: ['Valley of the Kings tombs', 'Karnak & Luxor Temples', 'Queen Hatshepsut Temple']
  },
  {
    id: 'aswan',
    name: 'Aswan',
    badge: '★ Nubia & Abu Simbel',
    tagline: 'Philae Temple of Isis, Abu Simbel Sun Temples, High Dam & Nubian Villages',
    href: '/aswan-tours',
    image: '/images/tours/ABU-SIMBEL-1-1.webp',
    alt: 'Abu Simbel Sun Temple of Ramesses II in Aswan',
    count: '18+ Private Tours',
    highlights: ['Abu Simbel private excursion', 'Philae Island Temple of Isis', 'Authentic Nubian village visit']
  },
  {
    id: 'hurghada',
    name: 'Hurghada',
    badge: '★ Red Sea & Desert',
    tagline: 'Giftun Island boat trips, coral snorkeling, quad bike desert safari & day trips to Luxor',
    href: '/hurghada-tours',
    image: '/images/tours/11-21.webp',
    alt: 'Hurghada Red Sea boat excursion and coastline',
    count: '14+ Private Tours',
    highlights: ['Giftun Island private boat', 'Quad bike & Bedouin dinner', 'Safaga / Hurghada to Luxor day trip']
  }
];

interface CategoriesQuickAccessProps {
  onOpenCustomInquiry?: () => void;
}

export const CategoriesQuickAccess: React.FC<CategoriesQuickAccessProps> = ({
  onOpenCustomInquiry
}) => {
  const [showDestinationSelector, setShowDestinationSelector] = useState(false);

  const handleDayToursClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowDestinationSelector(true);
  };

  return (
    <section
      aria-labelledby="quick-access-categories-heading"
      className="py-14 sm:py-20 bg-stone-50/80 dark:bg-[#151311] border-b border-stone-200 dark:border-stone-800 transition-colors relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-stone-200 dark:border-stone-800">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-amber-100/80 dark:bg-amber-950/60 border border-amber-300/40 dark:border-amber-700/40 text-amber-900 dark:text-amber-300 text-xs font-semibold uppercase tracking-wider font-serif">
              <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>Quick Access Categories</span>
            </div>
            <h2
              id="quick-access-categories-heading"
              className="font-serif text-2xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100 tracking-tight"
            >
              Explore Egypt by Service
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
              Quick access to our 5 primary service areas: private day tours, 5-star Nile cruises, multi-day vacation packages, private door-to-door transfers, and bespoke tailor-made itineraries.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-end">
            <Link
              to="/tours"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-300 transition-colors group pb-1"
            >
              <span>Browse All 297 Tours</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Quick-Jump Ribbon for the 5 Categories */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
          {QUICK_CATEGORIES.map((cat) => {
            const Icon = cat.icon;

            // Day tours trigger
            if (cat.isDayToursAction) {
              return (
                <button
                  key={`pill-${cat.id}`}
                  onClick={() => setShowDestinationSelector(true)}
                  className={`flex items-center sm:flex-col sm:justify-center text-left sm:text-center gap-2 px-3 py-2.5 rounded-xl border transition-all shadow-2xs group cursor-pointer ${
                    showDestinationSelector
                      ? 'bg-amber-500 text-stone-950 border-amber-500 font-semibold'
                      : 'bg-white dark:bg-stone-800/80 border-stone-200 dark:border-stone-700 hover:border-amber-500 text-stone-800 dark:text-stone-200'
                  }`}
                >
                  <div className={`p-1.5 rounded-lg transition-colors shrink-0 ${
                    showDestinationSelector
                      ? 'bg-stone-950 text-amber-400'
                      : 'bg-amber-500/15 text-amber-700 dark:text-amber-400 group-hover:bg-amber-500 group-hover:text-stone-950'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-semibold tracking-tight capitalize">
                      {cat.title}
                    </span>
                    <ChevronDown className="w-3 h-3 opacity-70" />
                  </div>
                </button>
              );
            }

            // Tailor made tours trigger
            if (cat.isCustomAction && onOpenCustomInquiry) {
              return (
                <button
                  key={`pill-${cat.id}`}
                  onClick={onOpenCustomInquiry}
                  className="flex items-center sm:flex-col sm:justify-center text-left sm:text-center gap-2 px-3 py-2.5 rounded-xl bg-white dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 hover:border-amber-500 text-stone-800 dark:text-stone-200 transition-all shadow-2xs group cursor-pointer"
                >
                  <div className="p-1.5 rounded-lg bg-amber-500/15 text-amber-700 dark:text-amber-400 group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold tracking-tight capitalize">
                    {cat.title}
                  </span>
                </button>
              );
            }

            return (
              <Link
                key={`pill-${cat.id}`}
                to={cat.href || '/tours'}
                className="flex items-center sm:flex-col sm:justify-center text-left sm:text-center gap-2 px-3 py-2.5 rounded-xl bg-white dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 hover:border-amber-500 text-stone-800 dark:text-stone-200 transition-all shadow-2xs group"
              >
                <div className="p-1.5 rounded-lg bg-amber-500/15 text-amber-700 dark:text-amber-400 group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold tracking-tight capitalize">
                  {cat.title}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Interactive Destination Cards Drawer / Selector for Day Tours */}
        {showDestinationSelector && (
          <div className="relative rounded-2xl bg-amber-950/10 dark:bg-stone-900/90 border-2 border-amber-500/60 p-5 sm:p-7 space-y-6 shadow-xl animate-in fade-in slide-in-from-top-3 duration-300">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-amber-500 text-stone-950 text-[11px] font-bold tracking-wide uppercase">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Select Day Tour Destination</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100">
                  Where would you like to take your private day tour?
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300">
                  Click any destination card below to explore its specific private day excursions led by licensed Egyptologists:
                </p>
              </div>

              <button
                onClick={() => setShowDestinationSelector(false)}
                className="p-1.5 rounded-lg bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-300 dark:hover:bg-stone-700 transition-colors"
                title="Close destination picker"
                aria-label="Close destination picker"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* 4 Destination Cards (Cairo, Luxor, Aswan, Hurghada) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {DAY_TOUR_DESTINATIONS.map((dest) => (
                <Link
                  key={dest.id}
                  to={dest.href}
                  className="group relative rounded-xl overflow-hidden bg-stone-900 border border-stone-200 dark:border-stone-700 hover:border-amber-400 transition-all duration-300 shadow-md hover:shadow-2xl hover:-translate-y-1 flex flex-col justify-between min-h-[300px] text-white"
                >
                  {/* Background Photo */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <OptimizedImage
                      src={dest.image}
                      alt={dest.alt}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="w-full h-full object-cover object-center filter brightness-85 group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-stone-950/20 group-hover:via-stone-950/80 transition-colors" />
                  </div>

                  {/* Top Badge & Count */}
                  <div className="relative z-10 p-3.5 flex items-center justify-between gap-2">
                    <span className="px-2 py-0.5 rounded-md bg-stone-950/85 backdrop-blur-md border border-amber-500/40 text-amber-300 text-[10px] font-bold tracking-wide">
                      {dest.badge}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-amber-500 text-stone-950 text-[10px] font-bold">
                      {dest.count}
                    </span>
                  </div>

                  {/* Bottom Content */}
                  <div className="relative z-10 p-4 space-y-2">
                    <h4 className="font-serif text-2xl font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors">
                      {dest.name} Day Tours
                    </h4>

                    <p className="text-xs text-stone-300 font-light leading-snug line-clamp-2">
                      {dest.tagline}
                    </p>

                    <div className="pt-2 border-t border-stone-700/60 flex items-center justify-between text-xs text-amber-300 font-semibold">
                      <span>View {dest.name} Tours</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Direct Link to all day tours */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs">
              <span className="text-stone-600 dark:text-stone-300">
                Want to browse all cities combined?
              </span>
              <Link
                to="/day-tours"
                className="font-bold text-amber-900 dark:text-amber-400 hover:underline inline-flex items-center gap-1"
              >
                <span>View All 80+ Egypt Day Tours Catalog</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}

        {/* High-Impact 5-Card Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {QUICK_CATEGORIES.map((cat) => {
            const Icon = cat.icon;

            const CardContent = (
              <div className="group relative rounded-2xl overflow-hidden bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-amber-500/80 dark:hover:border-amber-400/80 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between min-h-[380px] h-full focus-within:ring-2 focus-within:ring-amber-500 cursor-pointer">
                {/* Background Photography with Zoom Effect */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <OptimizedImage
                    src={cat.image}
                    alt={cat.alt}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    className="w-full h-full object-cover object-center filter brightness-90 group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/75 to-stone-950/30 group-hover:via-stone-950/85 transition-colors" />
                </div>

                {/* Top Row: Illustrative Badge & Category Icon */}
                <div className="relative z-10 p-4 flex items-center justify-between gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-stone-950/85 backdrop-blur-md border border-amber-500/30 text-amber-300 text-[11px] font-semibold tracking-wide shadow-xs">
                    {cat.badge}
                  </span>

                  <div className="w-9 h-9 rounded-xl bg-amber-500/90 text-stone-950 flex items-center justify-center shadow-md">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Area: Title, Metadata, Tagline & Direct CTA */}
                <div className="relative z-10 p-5 space-y-3 text-white">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[11px] text-amber-300 font-medium">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-amber-400" />
                        <span>{cat.durationInfo}</span>
                      </span>
                      <span>·</span>
                      <span className="line-clamp-1">{cat.count}</span>
                    </div>

                    <h3 className="font-serif text-xl font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors capitalize">
                      {cat.title}
                    </h3>

                    <p className="text-xs text-stone-300 font-light leading-relaxed line-clamp-2">
                      {cat.tagline}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-stone-700/60 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-stone-300 font-sans flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{cat.featureNote}</span>
                    </span>

                    <span className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs inline-flex items-center gap-1 transition-all shadow-xs">
                      <span>{cat.isDayToursAction ? 'Destinations' : cat.isCustomAction ? 'Request' : 'Explore'}</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            );

            // Day tours opens destination cards
            if (cat.isDayToursAction) {
              return (
                <div
                  key={cat.id}
                  onClick={handleDayToursClick}
                  className="flex flex-col"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setShowDestinationSelector(true);
                    }
                  }}
                >
                  {CardContent}
                </div>
              );
            }

            // Custom inquiry action
            if (cat.isCustomAction && onOpenCustomInquiry) {
              return (
                <div
                  key={cat.id}
                  onClick={onOpenCustomInquiry}
                  className="flex flex-col"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      onOpenCustomInquiry();
                    }
                  }}
                >
                  {CardContent}
                </div>
              );
            }

            return (
              <Link
                key={cat.id}
                to={cat.href || '/tours'}
                className="flex flex-col focus:outline-none"
              >
                {CardContent}
              </Link>
            );
          })}
        </div>

        {/* Footer Quick Note */}
        <div className="pt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-600 dark:text-stone-400 border-t border-stone-200 dark:border-stone-800">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Private day excursions available daily in Cairo, Luxor, Aswan & Hurghada</span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/destinations"
              className="text-stone-900 dark:text-stone-200 font-semibold hover:text-amber-700 dark:hover:text-amber-400 transition-colors inline-flex items-center gap-1"
            >
              <span>Explore Destination Guides</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
