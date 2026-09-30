import React from 'react';
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
  ChevronRight
} from 'lucide-react';

interface CategoryItem {
  id: string;
  title: string;
  tagline: string;
  href: string;
  image: string;
  alt: string;
  count: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
}

const CATEGORIES: CategoryItem[] = [
  {
    id: 'nile-cruises',
    title: '5-Star Nile Cruises',
    tagline: 'Royal Ruby & Nile Premium luxury ships between Luxor & Aswan',
    href: '/nile-cruises',
    image: '/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg',
    alt: 'Royal Ruby 5-star Nile cruise ship on the Nile River',
    count: '107 Itineraries',
    icon: Ship,
    accentColor: 'from-amber-600/90 to-amber-900/90'
  },
  {
    id: 'cairo-giza',
    title: 'Cairo & Pyramids',
    tagline: 'Giza Pyramids, Sphinx, Saqqara, NMEC & Old Cairo',
    href: '/cairo-giza-tours',
    image: '/images/tours/15974105260camels-at-the-site-of-pyramids-2445852.jpg',
    alt: 'Giza Pyramids and Sphinx in Cairo',
    count: '75 Itineraries',
    icon: Landmark,
    accentColor: 'from-yellow-700/90 to-stone-900/90'
  },
  {
    id: 'luxor-thebes',
    title: 'Luxor & Valley of Kings',
    tagline: 'Karnak, Luxor Temple, Hatshepsut & ancient royal tombs',
    href: '/luxor-upper-egypt',
    image: '/images/tours/15971782201Luxor-Temple.jpg',
    alt: 'Luxor Temple columns and statues',
    count: '177 Itineraries',
    icon: Compass,
    accentColor: 'from-amber-700/90 to-stone-900/90'
  },
  {
    id: 'dahabiya-cruises',
    title: 'Dahabiya Nile Sailing',
    tagline: 'Unhurried traditional twin-sail boutique river journeys',
    href: '/dahabiya-cruises',
    image: '/images/tours/15319133090Nile-cruise-Aswan-stay-3-.jpg',
    alt: 'Traditional Nile river boat sailing at sunset',
    count: '17 Itineraries',
    icon: Wind,
    accentColor: 'from-cyan-800/90 to-blue-950/90'
  },
  {
    id: 'abu-simbel',
    title: 'Abu Simbel & Nubia',
    tagline: 'Colossal Sun Temples of Ramesses II & Lake Nasser',
    href: '/abu-simbel',
    image: '/images/tours/ABU-SIMBEL-1-1.webp',
    alt: 'Abu Simbel Sun Temple of Ramesses II',
    count: '22 Itineraries',
    icon: Sun,
    accentColor: 'from-orange-700/90 to-stone-900/90'
  },
  {
    id: 'hot-air-balloon',
    title: 'Sunrise Hot Air Balloon',
    tagline: 'Dawn flights drifting over ancient Thebes necropolis',
    href: '/hot-air-balloon',
    image: '/images/tours/New-Project-2025-06-24T153559.658-1.webp',
    alt: 'Sunrise Hot Air Balloon over Luxor West Bank',
    count: 'Signature Flight',
    icon: Flame,
    accentColor: 'from-rose-700/90 to-amber-950/90'
  },
  {
    id: 'private-transfers',
    title: 'Private VIP Transfers',
    tagline: 'Door-to-door Mercedes & HiAce private intercity travel',
    href: '/private-transfers',
    image: '/images/tours/New-Project-2026-01-27T143452.563-600x540.webp',
    alt: 'Private luxury transportation vehicle in Egypt',
    count: '10 Routes',
    icon: Car,
    accentColor: 'from-emerald-800/90 to-stone-950/90'
  },
  {
    id: 'vacation-packages',
    title: 'Multi-Day Vacation Packages',
    tagline: 'Comprehensive multi-city Egyptian journeys & shore trips',
    href: '/egypt-packages',
    image: '/images/tours/KOM-OMBO-1-1-1.webp',
    alt: 'Ancient Egyptian temple complex at Kom Ombo',
    count: '66 Itineraries',
    icon: Map,
    accentColor: 'from-indigo-800/90 to-stone-950/90'
  }
];

export const CategoriesQuickAccess: React.FC = () => {
  return (
    <section
      aria-labelledby="categories-quick-access-heading"
      className="py-14 sm:py-20 bg-white dark:bg-[#161412] border-b border-stone-200 dark:border-stone-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-stone-200/80 dark:border-stone-800">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600 dark:bg-amber-400" />
              <span className="text-xs font-semibold text-amber-800 dark:text-amber-400 uppercase tracking-widest font-serif block">
                Explore Egypt by Travel Style
              </span>
            </div>
            <h2
              id="categories-quick-access-heading"
              className="font-serif text-2xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100 tracking-tight"
            >
              Categories & Quick Access
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
              Find your ideal Egyptian journey. From 5-star Nile river cruises and boutique Dahabiya sailings to private pyramid excursions, choose your preferred travel style.
            </p>
          </div>

          <Link
            to="/tours"
            className="inline-flex items-center gap-2 text-xs font-bold text-amber-800 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-300 transition-colors self-start md:self-end group pb-1"
          >
            <span>Browse All 297 Tours & Cruises</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Quick-Jump Horizontal Pills / Category Selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none sm:grid sm:grid-cols-4 lg:grid-cols-8 sm:gap-2 sm:overflow-visible">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={`pill-${cat.id}`}
                to={cat.href}
                className="whitespace-nowrap sm:whitespace-normal flex items-center sm:flex-col sm:text-center gap-2 px-3 py-2 sm:py-2.5 rounded-lg bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800 hover:border-amber-500 dark:hover:border-amber-500/80 text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white transition-all shadow-2xs group"
              >
                <div className="p-1.5 rounded-md bg-amber-100/70 dark:bg-amber-950/60 text-amber-800 dark:text-amber-400 group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors shrink-0">
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] font-semibold tracking-tight">
                  {cat.title}
                </span>
              </Link>
            );
          })}
        </div>

        {/* 8 Premium Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.id}
                to={cat.href}
                className="group relative rounded-xl overflow-hidden bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-amber-500/80 dark:hover:border-amber-400/80 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col justify-end min-h-[260px] sm:min-h-[290px] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                {/* Background Image with Zoom on Hover */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <OptimizedImage
                    src={cat.image}
                    alt={cat.alt}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="w-full h-full object-cover object-center filter brightness-85 group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle Multi-Stop Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-stone-950/20 group-hover:via-stone-950/80 transition-colors" />
                </div>

                {/* Top Corner Badge with Category Icon */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-stone-950/80 backdrop-blur-md border border-stone-700/60 text-amber-300 text-[11px] font-medium tracking-wide">
                    <Icon className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{cat.count}</span>
                  </div>
                </div>

                {/* Card Content at Bottom */}
                <div className="relative z-10 p-5 space-y-2 text-white">
                  <h3 className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors flex items-center justify-between">
                    <span>{cat.title}</span>
                    <ChevronRight className="w-4 h-4 text-amber-400 transform group-hover:translate-x-1 transition-transform shrink-0" />
                  </h3>

                  <p className="text-xs text-stone-300 font-light leading-snug line-clamp-2">
                    {cat.tagline}
                  </p>

                  <div className="pt-2 border-t border-stone-700/50 flex items-center justify-between text-[11px] font-semibold text-amber-300">
                    <span className="uppercase tracking-wider font-sans text-[10px]">Explore Category</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
