import React, { useState, useRef } from 'react';
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
  ChevronDown,
  X,
  MapPin,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export interface QuickAccessSubCategory {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  href: string;
  image: string;
  alt: string;
  count: string;
  highlights?: string[];
  featuredNote?: string;
  isCustomAction?: boolean;
}

export interface QuickAccessCategory {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  href: string;
  image: string;
  alt: string;
  count: string;
  durationInfo: string;
  featureNote: string;
  icon: React.ComponentType<{ className?: string }>;
  subcategoriesTitle: string;
  subcategoriesSubtitle: string;
  subcategories: QuickAccessSubCategory[];
}

const CATEGORIES_DATA: QuickAccessCategory[] = [
  {
    id: 'day-tours',
    title: 'Day tours',
    badge: '★ 4 Destinations',
    tagline: 'Private guided excursions across Cairo, Luxor, Aswan & Hurghada with certified Egyptologists',
    href: '/day-tours',
    image: '/images/tours/Luxor-Private-Tour-4.webp',
    alt: 'Private day tour in Egypt with licensed Egyptologist guide',
    count: 'Cairo · Luxor · Aswan · Hurghada',
    durationInfo: 'Half & Full Day',
    featureNote: 'Tickets Included',
    icon: Compass,
    subcategoriesTitle: 'Select Day Tour Destination',
    subcategoriesSubtitle: 'Private day excursions led by licensed Egyptologists with monument entry tickets fully included:',
    subcategories: [
      {
        id: 'cairo',
        name: 'Cairo & Giza Day Tours',
        badge: '★ Pyramids & Museums',
        tagline: 'Giza Pyramids, Great Sphinx, Saqqara, NMEC & the Grand Egyptian Museum',
        href: '/cairo-giza-tours',
        image: '/images/tours/15974105260camels-at-the-site-of-pyramids-2445852.jpg',
        alt: 'Giza Pyramids and Sphinx in Cairo',
        count: '25+ Private Tours',
        highlights: ['Giza Plateau & Sphinx', 'Saqqara Step Pyramid', 'Egyptian Museum & NMEC']
      },
      {
        id: 'luxor',
        name: 'Luxor Day Tours',
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
        name: 'Aswan & Abu Simbel',
        badge: '★ Nubia & Temples',
        tagline: 'Philae Temple of Isis, Abu Simbel Sun Temples, High Dam & Nubian Villages',
        href: '/aswan-tours',
        image: '/images/tours/ABU-SIMBEL-1-1.webp',
        alt: 'Abu Simbel Sun Temple of Ramesses II in Aswan',
        count: '18+ Private Tours',
        highlights: ['Abu Simbel private excursion', 'Philae Island Temple of Isis', 'Authentic Nubian village']
      },
      {
        id: 'hurghada',
        name: 'Hurghada & Red Sea',
        badge: '★ Red Sea & Desert',
        tagline: 'Giftun Island boat trips, coral snorkeling, quad bike desert safari & day trips to Luxor',
        href: '/hurghada-tours',
        image: '/images/tours/11-21.webp',
        alt: 'Hurghada Red Sea boat excursion and coastline',
        count: '14+ Private Tours',
        highlights: ['Giftun Island private boat', 'Quad bike & Bedouin dinner', 'Hurghada to Luxor day tour']
      }
    ]
  },
  {
    id: 'nile-cruises',
    title: 'Nile cruises',
    badge: '★ 3 Categories',
    tagline: 'Standard, Deluxe, and Luxury five-star cruise vessels with full board and guided shore excursions',
    href: '/nile-cruises',
    image: '/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg',
    alt: 'Royal Ruby 5-star Nile cruise ship on the River Nile',
    count: 'Standard · Deluxe · Luxury',
    durationInfo: '3, 4 & 7 Nights',
    featureNote: 'All Shore Excursions',
    icon: Ship,
    subcategoriesTitle: 'Select Nile Cruise Experience Tier',
    subcategoriesSubtitle: 'Sail between Luxor & Aswan with full board dining and private Egyptologist excursions:',
    subcategories: [
      {
        id: 'standard',
        name: 'Standard Nile Cruises',
        badge: '★ Comfort & Value',
        tagline: 'Classic 5-star cruisers with private Egyptologist guiding, full board and daily excursions.',
        href: '/nile-cruises/standard',
        image: '/images/tours/standard-nile-cruises.webp',
        alt: 'Standard 5-star Nile cruise vessel in Egypt',
        count: '22 Cruise Ships',
        featuredNote: 'Royal Ruby · Radamis · Princess Sarah',
        highlights: ['Full board included', 'Daily guided temple excursions', 'Swimming pool & sun deck']
      },
      {
        id: 'deluxe',
        name: 'Deluxe Nile Cruises',
        badge: '★ Modern Elegance',
        tagline: 'Upgraded 5-star vessels featuring spacious cabins, panoramic French balconies & gourmet dining.',
        href: '/nile-cruises/deluxe',
        image: '/images/tours/deluxe-nile-cruises.webp',
        alt: 'Deluxe 5-star Nile cruise ship with balconies',
        count: '61 Cruise Ships',
        featuredNote: 'Nile Premium · Steigenberger · Jaz Fleets',
        highlights: ['Panoramic Nile view cabins', 'Gourmet buffet & à la carte', 'Evening folkloric entertainment']
      },
      {
        id: 'luxury',
        name: 'Luxury Nile Cruises',
        badge: '★ Ultra-Luxury Boutique',
        tagline: 'Opulent floating boutique suites with bespoke dining, spa amenities & private butler attention.',
        href: '/nile-cruises/luxury',
        image: '/images/tours/luxury-nile-cruise.webp',
        alt: 'Luxury boutique 5-star Nile cruise ship',
        count: '25 Cruise Ships',
        featuredNote: 'Sonesta St. George I · Sun Goddess · Oberoi',
        highlights: ['Spa & wellness facilities', 'Private butler service', 'Exclusive private docking']
      }
    ]
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
    featureNote: 'Seamless Logistics',
    icon: Map,
    subcategoriesTitle: 'Select Egypt Travel Package Style',
    subcategoriesSubtitle: 'Complete multi-day holiday packages with domestic flights, handpicked hotels & private transfers:',
    subcategories: [
      {
        id: 'classic-cultural',
        name: 'Classic Cultural Highlights',
        badge: '★ Pyramids & Nile',
        tagline: 'Iconic combinations of Cairo’s ancient monuments and 4-night luxury Nile river cruising.',
        href: '/egypt-packages',
        image: '/images/tours/great-pyramid-khufu-giza-sun.webp',
        alt: 'Great Pyramid of Giza under clear Egyptian skies',
        count: '20+ Packages',
        highlights: ['Giza Pyramids & Museum', '4-Night 5★ Nile Cruise', 'Domestic flights included']
      },
      {
        id: 'cairo-nile-combo',
        name: 'Nile Cruise & Cairo Combos',
        badge: '★ Complete Egypt',
        tagline: 'Handcrafted itineraries uniting Cairo, Luxor, Edfu, Kom Ombo and Aswan seamlessly.',
        href: '/egypt-packages',
        image: '/images/tours/flexible-nile-cruise-sunset-aswan.webp',
        alt: 'Nile cruise sailing past golden banks at sunset',
        count: '18+ Packages',
        highlights: ['Private Egyptologist guiding', 'All airport transfers', 'Flexible arrival dates']
      },
      {
        id: 'red-sea-culture',
        name: 'Culture & Red Sea Holidays',
        badge: '★ Temples & Beach',
        tagline: 'Ancient pharaonic wonders paired with relaxing all-inclusive beach resort stays in Hurghada.',
        href: '/egypt-packages',
        image: '/images/tours/15-day-cairo-alexandria-hurghada-nile-cruise-and-abu-simbel.webp',
        alt: 'Egypt multi-day itinerary with Red Sea beach stay',
        count: '12+ Packages',
        highlights: ['Pharaonic temples tour', 'Red Sea coral reef relax', 'All transportation covered']
      },
      {
        id: 'grand-expeditions',
        name: 'Grand Egypt Expeditions',
        badge: '★ 10 to 15 Days',
        tagline: 'Deep immersive travels covering Alexandria, Cairo, Luxor, Aswan, Abu Simbel and Sinai.',
        href: '/egypt-packages',
        image: '/images/tours/12-days-pyramids-nile-and-sinai.webp',
        alt: 'Grand Egypt expedition landscape and temples',
        count: '15+ Packages',
        highlights: ['Abu Simbel excursion included', 'Alexandria day journey', 'VIP chauffeur fleet']
      }
    ]
  },
  {
    id: 'transfers',
    title: 'Transfers',
    badge: '★ Door-to-Door VIP',
    tagline: 'Private airport and intercity transfers between Luxor, Hurghada, Aswan & Cairo in modern vehicles',
    href: '/private-transfers',
    image: '/images/tours/New-Project-2026-01-27T143452.563-600x540.webp',
    alt: 'Private luxury transportation vehicle in Egypt',
    count: '10 Fixed Routes',
    durationInfo: 'Private A/C Fleet',
    featureNote: 'Fixed Per-Vehicle Rates',
    icon: Car,
    subcategoriesTitle: 'Select Private Transfer Route & Region',
    subcategoriesSubtitle: 'Transparent fixed rates per vehicle (one-way). Chauffeur, fuel, tolls and meet & assist included:',
    subcategories: [
      {
        id: 'luxor-transfers',
        name: 'Luxor Airport & Intercity',
        badge: '★ From $15 USD / Vehicle',
        tagline: 'Private transfers from Luxor Airport to hotels, or intercity journeys to Aswan and Hurghada.',
        href: '/private-transfers',
        image: '/images/tours/Luxor-Private-Tour-4.webp',
        alt: 'Private vehicle in Luxor',
        count: '4 Fleet Classes',
        highlights: ['Airport ↔ Hotel from $15', 'Luxor ↔ Aswan from $80', 'Sedan, Van & Minibus']
      },
      {
        id: 'aswan-transfers',
        name: 'Aswan Airport & Intercity',
        badge: '★ From $18 USD / Vehicle',
        tagline: 'Airport meet & assist in Aswan, transfers to Nile cruise docks, or private transit to Luxor.',
        href: '/private-transfers',
        image: '/images/tours/abu-simbel-ramesses-temple-facade.webp',
        alt: 'Private transfer services in Aswan',
        count: 'Sedan & Minivan',
        highlights: ['Aswan Airport from $18', 'Aswan ↔ Luxor transfer', 'Private A/C vehicles']
      },
      {
        id: 'hurghada-transfers',
        name: 'Hurghada Airport & Resorts',
        badge: '★ From $14 USD / Vehicle',
        tagline: 'Door-to-door private transfers to El Gouna, Makadi Bay, Soma Bay, Safaga, or intercity to Luxor.',
        href: '/private-transfers',
        image: '/images/tours/hurghada-aswan-private-travel-route.webp',
        alt: 'Private resort transfer along the Red Sea',
        count: 'Sedan, Minivan & Van',
        highlights: ['Hurghada Airport from $14', 'Red Sea resort transfers', 'Hurghada ↔ Luxor from $85']
      }
    ]
  },
  {
    id: 'tailor-made-tours',
    title: 'Tailor made tours',
    badge: '★ 100% Bespoke',
    tagline: 'Custom private Egyptian journeys planned around your specific dates, pace, and interests',
    href: '/contact',
    image: '/images/tours/New-Project-2025-06-24T153559.658-1.webp',
    alt: 'Sunrise Hot Air Balloon floating above Luxor West Bank',
    count: 'Tailored Proposal',
    durationInfo: 'Your Exact Pace',
    featureNote: 'Direct Luxor Concierge',
    icon: Sparkles,
    subcategoriesTitle: 'Bespoke Tailor-Made Egyptian Travel',
    subcategoriesSubtitle: 'Tell us your dream Egyptian holiday, and our local Egyptologists will craft your exact itinerary:',
    subcategories: [
      {
        id: 'custom-private',
        name: 'Custom Private Itinerary',
        badge: '★ Built From Scratch',
        tagline: 'Private Egyptologist guide and dedicated chauffeur tailored around your flight dates and interests.',
        href: '/contact',
        image: '/images/tours/New-Project-2025-06-24T153559.658-1.webp',
        alt: 'Custom bespoke Egyptian travel',
        count: 'Bespoke Quote',
        isCustomAction: true,
        highlights: ['Personalized pace', 'Any destinations combined', 'Direct WhatsApp consultation']
      },
      {
        id: 'honeymoon',
        name: 'Honeymoon & Romantic Escapes',
        badge: '★ Romance & Privacy',
        tagline: 'Intimate sunset feluccas on the Nile, private candlelit dining & luxury boutique cruise suites.',
        href: '/contact',
        image: '/images/tours/three-pyramids-dahabiya-nile-cruise.webp',
        alt: 'Romantic private Nile cruise in Egypt',
        count: 'Exclusive Perks',
        isCustomAction: true,
        highlights: ['Romantic Nile sunset sail', 'Luxury 5-star honeymoon suites', 'Complimentary special surprises']
      },
      {
        id: 'family-group',
        name: 'Family & Small Group Expeditions',
        badge: '★ Family Friendly',
        tagline: 'Spacious private vehicles, child-friendly Egyptologist storytellers, and flexible rest breaks.',
        href: '/contact',
        image: '/images/gallery/IMG-20261001-WA0027.jpg',
        alt: 'Family and small group travel in Egypt',
        count: 'Tailored for You',
        isCustomAction: true,
        highlights: ['Kid-engaging history guides', 'Comfortable family minivans', 'Private group pricing']
      }
    ]
  }
];

interface CategoriesQuickAccessProps {
  onOpenCustomInquiry?: () => void;
}

export const CategoriesQuickAccess: React.FC<CategoriesQuickAccessProps> = ({
  onOpenCustomInquiry
}) => {
  // Active category state: defaults to 'day-tours' or null
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const subcategoryRef = useRef<HTMLDivElement>(null);

  const activeCategory = CATEGORIES_DATA.find((c) => c.id === activeCategoryId);

  const handleCategoryClick = (categoryId: string) => {
    if (activeCategoryId === categoryId) {
      // If already open, smoothly scroll down into the subcategories view
      subcategoryRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
      return;
    }

    setActiveCategoryId(categoryId);

    // Smooth animated scroll to reveal the subcategories cleanly in the user's viewport
    setTimeout(() => {
      subcategoryRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }, 60);
  };

  const handleCloseSubcategories = () => {
    setActiveCategoryId(null);
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
              Click any category below to immediately open and explore its specialized sub-services, private destinations, or experience tiers.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-end">
            <Link
              to="/tours"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-300 transition-colors group pb-1"
            >
              <span>Browse All 298 Tours</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* High-Impact 5-Card Main Grid with Active Highlight & Smooth Interactive Motion */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-5 gap-4 sm:gap-5">
          {CATEGORIES_DATA.map((cat, idx) => {
            const Icon = cat.icon;
            const isActive = activeCategoryId === cat.id;

            // Responsive span calculation:
            // Mobile (<640px): 1 col (100%)
            // Small tablet (640-768px): 2 cols -> card 5 spans 2 cols
            // Medium tablet (768-1024px): 6 cols -> first 3 cards span 2 (1/3), last 2 cards span 3 (1/2)
            // Desktop (1024px+): 5 cols -> all span 1 (1/5)
            const responsiveSpan = 
              idx === 4 
                ? 'sm:col-span-2 md:col-span-3 lg:col-span-1' 
                : idx === 3 
                ? 'sm:col-span-1 md:col-span-3 lg:col-span-1'
                : 'sm:col-span-1 md:col-span-2 lg:col-span-1';

            return (
              <div
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                role="button"
                tabIndex={0}
                aria-expanded={isActive}
                aria-controls={`subcategories-panel-${cat.id}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCategoryClick(cat.id);
                  }
                }}
                className={`group relative rounded-2xl overflow-hidden bg-stone-900 border transition-all duration-300 shadow-sm flex flex-col justify-between min-h-[300px] sm:min-h-[340px] lg:min-h-[370px] h-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500 text-left select-none ${responsiveSpan} ${
                  isActive
                    ? 'border-amber-500 ring-4 ring-amber-500/40 shadow-2xl -translate-y-1.5'
                    : 'border-stone-200 dark:border-stone-800 hover:border-amber-500/80 dark:hover:border-amber-400/80 hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                {/* Background Photography with Zoom Effect */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <OptimizedImage
                    src={cat.image}
                    alt={cat.alt}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    className={`w-full h-full object-cover object-center filter group-hover:scale-110 transition-transform duration-700 ease-out ${
                      isActive ? 'brightness-75 scale-105' : 'brightness-90'
                    }`}
                  />
                  {/* Gradient Scrim */}
                  <div
                    className={`absolute inset-0 transition-colors ${
                      isActive
                        ? 'bg-gradient-to-t from-stone-950 via-stone-950/80 to-amber-950/30'
                        : 'bg-gradient-to-t from-stone-950 via-stone-950/75 to-stone-950/30 group-hover:via-stone-950/85'
                    }`}
                  />
                </div>

                {/* Top Row: Illustrative Badge & Category Icon */}
                <div className="relative z-10 p-4 flex items-center justify-between gap-2">
                  <span
                    className={`px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide shadow-xs transition-colors ${
                      isActive
                        ? 'bg-amber-500 text-stone-950 font-bold'
                        : 'bg-stone-950/85 backdrop-blur-md border border-amber-500/30 text-amber-300'
                    }`}
                  >
                    {cat.badge}
                  </span>

                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shadow-md transition-all ${
                      isActive
                        ? 'bg-amber-400 text-stone-950 scale-110 shadow-amber-500/50'
                        : 'bg-amber-500/90 text-stone-950 group-hover:bg-amber-400'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Area: Title, Metadata, Tagline & Direct Interactive Motion Cue */}
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

                    <h3 className="font-serif text-xl font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors capitalize flex items-center justify-between">
                      <span>{cat.title}</span>
                      {isActive && (
                        <span className="text-[10px] font-sans font-bold px-2 py-0.5 rounded-full bg-amber-500 text-stone-950 uppercase tracking-wider animate-pulse">
                          Active
                        </span>
                      )}
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

                    <span
                      className={`px-3 py-1.5 rounded-lg font-bold text-xs inline-flex items-center gap-1.5 transition-all shadow-xs min-h-[36px] ${
                        isActive
                          ? 'bg-amber-400 text-stone-950 ring-2 ring-amber-300'
                          : 'bg-amber-500 text-stone-950 group-hover:bg-amber-400'
                      }`}
                    >
                      <span>{isActive ? 'Hide Subcategories' : 'Subcategories'}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transform transition-transform duration-300 ${
                          isActive ? 'rotate-180' : 'group-hover:translate-y-0.5'
                        }`}
                      />
                    </span>
                  </div>
                </div>

                {/* Subtle downward indicator caret when active */}
                {isActive && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 z-20 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-amber-500 animate-indicator-bounce" />
                )}
              </div>
            );
          })}
        </div>

        {/* Smooth Animated Subcategory Drawer & Showcase Container */}
        {activeCategory && (
          <div
            ref={subcategoryRef}
            id={`subcategories-panel-${activeCategory.id}`}
            className="scroll-mt-20 pt-2"
          >
            <div className="relative rounded-2xl bg-amber-950/10 dark:bg-stone-900/95 border-2 border-amber-500/70 p-4 sm:p-7 space-y-5 sm:space-y-6 shadow-2xl animate-subcategory-slide-down">
              {/* Drawer Header with Title, Actions & Close Button */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 pb-4 border-b border-stone-200/80 dark:border-stone-800">
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-amber-500 text-stone-950 text-xs font-bold tracking-wide uppercase">
                    <activeCategory.icon className="w-3.5 h-3.5" />
                    <span>{activeCategory.subcategoriesTitle}</span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-2xl font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                    <span>{activeCategory.title} Sub-Services & Destinations</span>
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 max-w-3xl leading-relaxed">
                    {activeCategory.subcategoriesSubtitle}
                  </p>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                  <Link
                    to={activeCategory.href}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 hover:bg-stone-200 dark:hover:bg-stone-700 text-xs font-semibold transition-colors border border-stone-300/60 dark:border-stone-700 min-h-[44px] sm:min-h-[38px]"
                  >
                    <span>Browse All</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={handleCloseSubcategories}
                    className="p-2.5 rounded-lg bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-300 dark:hover:bg-stone-700 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
                    title="Close subcategories"
                    aria-label="Close subcategories view"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Subcategories Cards Grid with Staggered Entrance Animation */}
              <div
                className={`grid gap-4 ${
                  activeCategory.subcategories.length === 3
                    ? 'grid-cols-1 md:grid-cols-3'
                    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
                }`}
              >
                {activeCategory.subcategories.map((sub, idx) => {
                  const cardAnimationDelay = `${idx * 60}ms`;

                  const handleSubClick = (e?: React.MouseEvent) => {
                    if (sub.isCustomAction && onOpenCustomInquiry) {
                      e?.preventDefault();
                      onOpenCustomInquiry();
                    }
                  };

                  return (
                    <Link
                      key={sub.id}
                      to={sub.href}
                      onClick={handleSubClick}
                      style={{ animationDelay: cardAnimationDelay }}
                      className="group relative rounded-xl overflow-hidden bg-stone-900 border border-stone-200 dark:border-stone-700 hover:border-amber-400 transition-all duration-300 shadow-md hover:shadow-2xl hover:-translate-y-1.5 flex flex-col justify-between min-h-[310px] text-white animate-subcategory-card-pop focus:outline-none focus:ring-2 focus:ring-amber-400"
                    >
                      {/* Background Photo */}
                      <div className="absolute inset-0 z-0 overflow-hidden">
                        <OptimizedImage
                          src={sub.image}
                          alt={sub.alt}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="w-full h-full object-cover object-center filter brightness-85 group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-stone-950/20 group-hover:via-stone-950/80 transition-colors" />
                      </div>

                      {/* Top Badge & Count */}
                      <div className="relative z-10 p-3.5 flex items-center justify-between gap-2">
                        <span className="px-2 py-0.5 rounded-md bg-stone-950/85 backdrop-blur-md border border-amber-500/40 text-amber-300 text-[10px] font-bold tracking-wide">
                          {sub.badge}
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-amber-500 text-stone-950 text-[10px] font-bold">
                          {sub.count}
                        </span>
                      </div>

                      {/* Bottom Content */}
                      <div className="relative z-10 p-4 space-y-2">
                        {sub.featuredNote && (
                          <div className="text-[11px] text-amber-300 font-mono tracking-wide line-clamp-1">
                            {sub.featuredNote}
                          </div>
                        )}

                        <h4 className="font-serif text-xl font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors">
                          {sub.name}
                        </h4>

                        <p className="text-xs text-stone-300 font-light leading-snug line-clamp-2">
                          {sub.tagline}
                        </p>

                        {sub.highlights && (
                          <div className="pt-2 border-t border-stone-700/60 flex flex-wrap gap-1.5">
                            {sub.highlights.slice(0, 2).map((hl, hIdx) => (
                              <span
                                key={hIdx}
                                className="text-[10px] text-stone-300 bg-stone-950/60 px-2 py-0.5 rounded border border-stone-700/40"
                              >
                                {hl}
                              </span>
                            ))}
                          </div>
                        )}

                        <div className="pt-2 flex items-center justify-between text-xs text-amber-300 font-semibold group-hover:text-amber-200">
                          <span>
                            {sub.isCustomAction ? 'Open Tailor-Made Request' : `Explore ${sub.name}`}
                          </span>
                          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* Direct Link to all items in category */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-stone-200/80 dark:border-stone-800 text-xs">
                <span className="text-stone-600 dark:text-stone-300">
                  Looking for the complete list of {activeCategory.title.toLowerCase()}?
                </span>
                <Link
                  to={activeCategory.href}
                  className="font-bold text-amber-900 dark:text-amber-400 hover:underline inline-flex items-center gap-1.5"
                >
                  <span>View All {activeCategory.title} ({activeCategory.count})</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Footer Quick Trust Note */}
        <div className="pt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-600 dark:text-stone-400 border-t border-stone-200 dark:border-stone-800">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>All private day tours include official monument entrance tickets as standard</span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/private-transfers"
              className="text-stone-900 dark:text-stone-200 font-semibold hover:text-amber-700 dark:hover:text-amber-400 transition-colors inline-flex items-center gap-1"
            >
              <span>Fixed Rate Private Transfers</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
