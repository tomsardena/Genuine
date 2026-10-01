import React, { useState, useRef } from 'react';
import { Link } from '../utils/router';
import { OptimizedImage } from './OptimizedImage';
import {
  Ship,
  Compass,
  Landmark,
  Wind,
  Sun,
  Flame,
  Car,
  Map,
  ArrowRight,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  SlidersHorizontal,
  Clock,
  CheckCircle2,
  Phone
} from 'lucide-react';

interface CategoryItem {
  id: string;
  group: 'all' | 'nile' | 'cultural' | 'vip';
  title: string;
  badge: string;
  tagline: string;
  href: string;
  image: string;
  alt: string;
  count: string;
  durationInfo: string;
  priceEstimate: string;
  icon: React.ComponentType<{ className?: string }>;
}

const CATEGORIES: CategoryItem[] = [
  {
    id: 'nile-cruises',
    group: 'nile',
    title: '5-Star Nile Cruises',
    badge: '★ Premier River Fleet',
    tagline: 'Royal Ruby & Nile Premium luxury ships sailing between Luxor & Aswan',
    href: '/nile-cruises',
    image: '/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg',
    alt: 'Royal Ruby 5-star Nile cruise ship on the River Nile',
    count: '107 Itineraries',
    durationInfo: '3, 4 & 7 Nights',
    priceEstimate: 'Full Board & Guiding',
    icon: Ship
  },
  {
    id: 'cairo-giza',
    group: 'cultural',
    title: 'Cairo & Pyramids Tours',
    badge: '★ Must-See Icon',
    tagline: 'Giza Pyramids, Sphinx, ancient Saqqara, NMEC & Grand Egyptian Museum',
    href: '/cairo-giza-tours',
    image: '/images/tours/15974105260camels-at-the-site-of-pyramids-2445852.jpg',
    alt: 'Giza Pyramids and Sphinx in Cairo',
    count: '75 Itineraries',
    durationInfo: 'Half & Full Day',
    priceEstimate: 'Private A/C & Guide',
    icon: Landmark
  },
  {
    id: 'private-transfers',
    group: 'vip',
    title: 'Private VIP Transfers',
    badge: '★ 100% Private Fleet',
    tagline: 'Door-to-door Mercedes & HiAce transfers between Luxor, Hurghada, Aswan & Cairo',
    href: '/private-transfers',
    image: '/images/tours/New-Project-2026-01-27T143452.563-600x540.webp',
    alt: 'Private luxury transportation vehicle in Egypt',
    count: '10 Routes',
    durationInfo: 'Door-to-Door VIP',
    priceEstimate: 'Fixed Per-Vehicle Rate',
    icon: Car
  },
  {
    id: 'luxor-thebes',
    group: 'cultural',
    title: 'Luxor & Valley of Kings',
    badge: '★ UNESCO World Heritage',
    tagline: 'Karnak Temple, Luxor Temple, Hatshepsut & royal West Bank tombs',
    href: '/luxor-upper-egypt',
    image: '/images/tours/15971782201Luxor-Temple.jpg',
    alt: 'Luxor Temple columns and statues',
    count: '177 Itineraries',
    durationInfo: 'Full Day (8–9h)',
    priceEstimate: 'Certified Egyptologist',
    icon: Compass
  },
  {
    id: 'dahabiya-cruises',
    group: 'nile',
    title: 'Dahabiya Nile Sailing',
    badge: '★ Boutique Heritage',
    tagline: 'Unhurried traditional twin-sail river yachts visiting secluded riverbanks',
    href: '/dahabiya-cruises',
    image: '/images/tours/15319133090Nile-cruise-Aswan-stay-3-.jpg',
    alt: 'Traditional Dahabiya sailing yacht on the Nile at sunset',
    count: '17 Itineraries',
    durationInfo: '4 & 5 Nights',
    priceEstimate: 'Max 12–14 Guests',
    icon: Wind
  },
  {
    id: 'abu-simbel',
    group: 'cultural',
    title: 'Abu Simbel & Nubia',
    badge: '★ Colossal Sun Temples',
    tagline: 'Sun Temples of Ramesses II & Queen Nefertari by private sunrise convoy',
    href: '/abu-simbel',
    image: '/images/tours/ABU-SIMBEL-1-1.webp',
    alt: 'Abu Simbel Sun Temple of Ramesses II',
    count: '22 Itineraries',
    durationInfo: 'Early Morning Excursion',
    priceEstimate: 'Private Convoy Transport',
    icon: Sun
  },
  {
    id: 'hot-air-balloon',
    group: 'vip',
    title: 'Sunrise Hot Air Balloon',
    badge: '★ Signature Dawn Flight',
    tagline: 'Drift above the Valley of the Kings and Hatshepsut Temple at sunrise',
    href: '/hot-air-balloon',
    image: '/images/tours/New-Project-2025-06-24T153559.658-1.webp',
    alt: 'Sunrise Hot Air Balloon over Luxor West Bank',
    count: 'Daily Sunrise Flight',
    durationInfo: '45–60 Min Flight',
    priceEstimate: 'Includes Motorboat Transfer',
    icon: Flame
  },
  {
    id: 'vacation-packages',
    group: 'vip',
    title: 'Multi-City Packages',
    badge: '★ Comprehensive Journeys',
    tagline: 'All-inclusive multi-day itineraries combining Cairo, Nile Cruises & Red Sea',
    href: '/egypt-packages',
    image: '/images/tours/KOM-OMBO-1-1-1.webp',
    alt: 'Ancient Egyptian temple complex at Kom Ombo',
    count: '66 Itineraries',
    durationInfo: '4 to 15 Days',
    priceEstimate: 'Bespoke Private Itinerary',
    icon: Map
  }
];

const FILTER_TABS = [
  { id: 'all', label: 'All Services (8)' },
  { id: 'nile', label: 'Nile & Waterways' },
  { id: 'cultural', label: 'Pyramids & Ancient Thebes' },
  { id: 'vip', label: 'VIP Transfers & Flight' }
];

export const CategoriesQuickAccess: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'nile' | 'cultural' | 'vip'>('all');
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');
  const carouselRef = useRef<HTMLDivElement>(null);

  const filteredCategories = activeTab === 'all'
    ? CATEGORIES
    : CATEGORIES.filter(c => c.group === activeTab);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const cardWidth = 320;
    const scrollAmount = direction === 'left' ? -cardWidth * 1.5 : cardWidth * 1.5;
    carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section
      aria-labelledby="categories-quick-access-heading"
      className="py-14 sm:py-20 bg-stone-50/80 dark:bg-[#151311] border-b border-stone-200 dark:border-stone-800 transition-colors relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-stone-200 dark:border-stone-800">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-amber-100/80 dark:bg-amber-950/60 border border-amber-300/40 dark:border-amber-700/40 text-amber-900 dark:text-amber-300 text-xs font-semibold uppercase tracking-wider font-serif">
              <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>Key Service Areas & Quick Access</span>
            </div>
            <h2
              id="categories-quick-access-heading"
              className="font-serif text-2xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100 tracking-tight"
            >
              Explore Egypt by Travel Style
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
              Quick access to our premier travel services: 5-star Nile River cruises, Cairo & Giza pyramids discovery, and private VIP intercity transfers across Egypt.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-end">
            {/* View Mode Switcher */}
            <div className="hidden sm:flex items-center p-1 bg-white dark:bg-stone-800 rounded-lg border border-stone-200 dark:border-stone-700 shadow-2xs">
              <button
                onClick={() => setViewMode('carousel')}
                title="Carousel View"
                className={`p-1.5 rounded-md text-xs font-medium transition-colors flex items-center gap-1.5 ${
                  viewMode === 'carousel'
                    ? 'bg-amber-500 text-stone-950 shadow-xs'
                    : 'text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white'
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span className="hidden lg:inline text-[11px]">Carousel</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                title="Grid View"
                className={`p-1.5 rounded-md text-xs font-medium transition-colors flex items-center gap-1.5 ${
                  viewMode === 'grid'
                    ? 'bg-amber-500 text-stone-950 shadow-xs'
                    : 'text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden lg:inline text-[11px]">Grid</span>
              </button>
            </div>

            {/* Carousel Arrow Controls */}
            {viewMode === 'carousel' && (
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => scrollCarousel('left')}
                  aria-label="Previous service category"
                  className="p-2 rounded-lg bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 hover:border-amber-500 text-stone-700 dark:text-stone-200 transition-colors shadow-2xs hover:bg-stone-50"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollCarousel('right')}
                  aria-label="Next service category"
                  className="p-2 rounded-lg bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 hover:border-amber-500 text-stone-700 dark:text-stone-200 transition-colors shadow-2xs hover:bg-stone-50"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-stone-900 dark:bg-amber-500 text-white dark:text-stone-950 shadow-xs font-semibold'
                  : 'bg-white dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:border-amber-500 dark:hover:border-amber-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Categories Display: Responsive Carousel or Multi-Column Grid */}
        {viewMode === 'carousel' ? (
          <div
            ref={carouselRef}
            tabIndex={0}
            aria-label="Service categories carousel"
            className="flex items-stretch gap-5 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-stone-300 dark:scrollbar-thumb-stone-700 -mx-4 px-4 sm:mx-0 sm:px-0 focus:outline-none"
          >
            {filteredCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.id}
                  className="w-[280px] sm:w-[320px] lg:w-[340px] shrink-0 snap-start flex flex-col"
                >
                  <div className="group relative rounded-2xl overflow-hidden bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-amber-500/80 dark:hover:border-amber-400/80 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between min-h-[380px] h-full focus-within:ring-2 focus-within:ring-amber-500">
                    {/* Background Photography with Zoom Effect */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                      <OptimizedImage
                        src={cat.image}
                        alt={cat.alt}
                        sizes="340px"
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
                          <span>{cat.count}</span>
                        </div>

                        <h3 className="font-serif text-xl font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors">
                          <Link to={cat.href}>{cat.title}</Link>
                        </h3>

                        <p className="text-xs text-stone-300 font-light leading-relaxed line-clamp-2">
                          {cat.tagline}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-stone-700/60 flex items-center justify-between text-xs">
                        <span className="text-[11px] text-stone-300 font-sans flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>{cat.priceEstimate}</span>
                        </span>

                        <Link
                          to={cat.href}
                          className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs inline-flex items-center gap-1 transition-all shadow-xs"
                        >
                          <span>Explore</span>
                          <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Grid View */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.id}
                  className="group relative rounded-2xl overflow-hidden bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-amber-500/80 dark:hover:border-amber-400/80 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between min-h-[360px] focus-within:ring-2 focus-within:ring-amber-500"
                >
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <OptimizedImage
                      src={cat.image}
                      alt={cat.alt}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="w-full h-full object-cover object-center filter brightness-90 group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/75 to-stone-950/30 group-hover:via-stone-950/85 transition-colors" />
                  </div>

                  <div className="relative z-10 p-4 flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-stone-950/85 backdrop-blur-md border border-amber-500/30 text-amber-300 text-[11px] font-semibold tracking-wide shadow-xs">
                      {cat.badge}
                    </span>

                    <div className="w-9 h-9 rounded-xl bg-amber-500/90 text-stone-950 flex items-center justify-center shadow-md">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="relative z-10 p-5 space-y-3 text-white">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-[11px] text-amber-300 font-medium">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-amber-400" />
                          <span>{cat.durationInfo}</span>
                        </span>
                        <span>·</span>
                        <span>{cat.count}</span>
                      </div>

                      <h3 className="font-serif text-lg font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors">
                        <Link to={cat.href}>{cat.title}</Link>
                      </h3>

                      <p className="text-xs text-stone-300 font-light leading-relaxed line-clamp-2">
                        {cat.tagline}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-stone-700/60 flex items-center justify-between text-xs">
                      <span className="text-[11px] text-stone-300 font-sans flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{cat.priceEstimate}</span>
                      </span>

                      <Link
                        to={cat.href}
                        className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs inline-flex items-center gap-1 transition-all shadow-xs"
                      >
                        <span>Explore</span>
                        <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Footer Quick Links Bar */}
        <div className="pt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-600 dark:text-stone-400 border-t border-stone-200 dark:border-stone-800">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>All 297 itineraries verified by licensed Egyptologist guides</span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/tours"
              className="text-stone-900 dark:text-stone-200 font-semibold hover:text-amber-700 dark:hover:text-amber-400 transition-colors inline-flex items-center gap-1"
            >
              <span>View Full 297-Tour Catalog</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
