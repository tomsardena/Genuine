import React, { useState, useMemo } from 'react';
import { TOURS_DATA, TourCategory, TourItem } from '../data/tours';
import { TourCard } from '../components/TourCard';
import { Breadcrumbs, BreadcrumbItem } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';
import { Link } from '../utils/router';
import { OptimizedImage } from '../components/OptimizedImage';
import { ArrowRight, MapPin, Ship, Sparkles, Anchor, ChevronRight } from 'lucide-react';

interface CategoryPageProps {
  category: TourCategory | string;
  subCategory?: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage?: string;
  canonicalPath: string;
  customFilter?: (tour: TourItem) => boolean;
}

interface CruiseSubCategoryMeta {
  id: string;
  subCategoryName: string;
  name: string;
  badge: string;
  tagline: string;
  featuredShips: string;
  href: string;
  image: string;
}

const NILE_CRUISE_SUBCATEGORIES_CONFIG: CruiseSubCategoryMeta[] = [
  {
    id: 'standard',
    subCategoryName: 'Standard Nile Cruises',
    name: 'Standard Nile Cruises',
    badge: '★ Comfort & Value',
    tagline: 'Classic 5-star river cruisers with private Egyptologist guiding, full-board dining, and unhurried temple visits.',
    featuredShips: 'Royale Ruby · Radamis · Princess Sarah',
    href: '/nile-cruises/standard',
    image: '/images/tours/standard-nile-cruises.webp'
  },
  {
    id: 'deluxe',
    subCategoryName: 'Deluxe Nile Cruises',
    name: 'Deluxe Nile Cruises',
    badge: '★ Modern Elegance & Balconies',
    tagline: 'Upgraded 5-star vessels featuring spacious cabins, French balconies, gourmet international dining, and premier sun decks.',
    featuredShips: 'Nile Premium · Steigenberger · Jaz Fleets',
    href: '/nile-cruises/deluxe',
    image: '/images/tours/deluxe-nile-cruises.webp'
  },
  {
    id: 'luxury',
    subCategoryName: 'Luxury Nile Cruises',
    name: 'Luxury Nile Cruises',
    badge: '★ Ultra-Luxury Boutique',
    tagline: 'Opulent floating boutique suites with bespoke dining, private butler attention, and exclusive Egyptologist shore tours.',
    featuredShips: 'Sonesta St. George I · Sun Goddess · Oberoi Zahra',
    href: '/nile-cruises/luxury',
    image: '/images/tours/luxury-nile-cruise.webp'
  }
];

export const CategoryPage: React.FC<CategoryPageProps> = ({
  category,
  subCategory,
  title,
  subtitle,
  description,
  heroImage,
  canonicalPath,
  customFilter
}) => {
  const isNileCruisesRoot = canonicalPath === '/nile-cruises' || canonicalPath === '/categories/nile-cruises';
  const isNileCruisesSection = category === 'Nile Cruises' || canonicalPath.includes('nile-cruises');

  // In-page filter state for Nile Cruises main view
  const [activeTierFilter, setActiveTierFilter] = useState<string>('ALL');

  // Dynamic counts for Nile Cruise subcategories
  const subCategoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      'Standard Nile Cruises': 0,
      'Deluxe Nile Cruises': 0,
      'Luxury Nile Cruises': 0,
      'ALL': 0
    };
    TOURS_DATA.forEach(t => {
      if (t.category === 'Nile Cruises') {
        counts['ALL']++;
        if (t.subCategory && counts[t.subCategory] !== undefined) {
          counts[t.subCategory]++;
        }
      }
    });
    return counts;
  }, []);

  // Compute base tours matching category/filter
  const baseTours = useMemo(() => {
    if (customFilter) {
      return TOURS_DATA.filter(customFilter);
    }
    if (subCategory) {
      return TOURS_DATA.filter(t => t.category === 'Nile Cruises' && t.subCategory === subCategory);
    }
    return TOURS_DATA.filter(t => t.category.toLowerCase() === category.toLowerCase());
  }, [category, subCategory, customFilter]);

  // Apply in-page tier filter if on main Nile cruises page
  const displayedTours = useMemo(() => {
    if (isNileCruisesRoot && activeTierFilter !== 'ALL') {
      return baseTours.filter(t => t.subCategory === activeTierFilter);
    }
    return baseTours;
  }, [baseTours, isNileCruisesRoot, activeTierFilter]);

  // Category specific keywords for search indexing
  const categoryKeywords = [
    title,
    subtitle,
    category,
    subCategory,
    'private Egypt tours',
    'certified Egyptologist guide',
    'Egypt travel packages',
    'Luxor and Nile cruises',
    'Genuine Egypte'
  ].filter(Boolean).join(', ');

  // Breadcrumbs definition
  const breadcrumbItems = useMemo<BreadcrumbItem[]>(() => {
    const items: BreadcrumbItem[] = [{ label: 'Tours & Excursions', href: '/tours' }];
    if (subCategory && isNileCruisesSection) {
      items.push({ label: 'Nile Cruises', href: '/nile-cruises' });
      items.push({ label: title });
    } else {
      items.push({ label: title });
    }
    return items;
  }, [subCategory, isNileCruisesSection, title]);

  // Schema.org CollectionPage & ItemList Structured Data
  const categoryJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `https://genuineegypte.com${canonicalPath}#webpage`,
        name: `${title} | Genuine Egypte`,
        description,
        url: `https://genuineegypte.com${canonicalPath}`,
        isPartOf: {
          '@type': 'WebSite',
          name: 'Genuine Egypte',
          url: 'https://genuineegypte.com'
        },
        about: {
          '@type': 'Thing',
          name: subCategory || category
        },
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: displayedTours.length,
          itemListElement: displayedTours.slice(0, 24).map((t, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            name: t.title,
            url: `https://genuineegypte.com/booking/${t.slug}/`,
            image: t.mainImage.startsWith('http') ? t.mainImage : `https://genuineegypte.com${t.mainImage}`,
            description: t.shortDescription
          }))
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `https://genuineegypte.com${canonicalPath}#breadcrumbs`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://genuineegypte.com/'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Tours & Excursions',
            item: 'https://genuineegypte.com/tours'
          },
          ...(subCategory && isNileCruisesSection ? [
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Nile Cruises',
              item: 'https://genuineegypte.com/nile-cruises'
            },
            {
              '@type': 'ListItem',
              position: 4,
              name: title,
              item: `https://genuineegypte.com${canonicalPath}`
            }
          ] : [
            {
              '@type': 'ListItem',
              position: 3,
              name: title,
              item: `https://genuineegypte.com${canonicalPath}`
            }
          ])
        ]
      }
    ]
  };

  const effectiveOgImage = heroImage || displayedTours[0]?.mainImage || '/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg';

  return (
    <>
      <SEOHead
        title={`${title} – Genuine Egypte`}
        description={description}
        canonicalPath={canonicalPath}
        ogImage={effectiveOgImage}
        ogImageAlt={`${title} – ${subtitle}`}
        ogType="website"
        keywords={categoryKeywords}
        jsonLd={categoryJsonLd}
      />

      <div className="bg-[#FAF8F5] dark:bg-[#121110] min-h-screen py-8 text-stone-800 dark:text-stone-100 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
          <Breadcrumbs
            showBackButton={true}
            items={breadcrumbItems}
          />

          {/* Header Banner */}
          <div className="relative rounded-xl overflow-hidden bg-stone-900 text-white p-6 sm:p-10 lg:p-12 shadow-sm border border-stone-200 dark:border-stone-800">
            {heroImage && (
              <>
                <OptimizedImage
                  src={heroImage}
                  alt={`${title} – ${subtitle}`}
                  priority={true}
                  sizes="100vw"
                  className="absolute inset-0 w-full h-full object-cover filter brightness-50"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-900/80 to-stone-900/40" />
              </>
            )}

            <div className="relative z-10 max-w-2xl space-y-2.5 sm:space-y-3">
              <span className="text-[11px] sm:text-xs font-semibold text-amber-400 uppercase tracking-widest font-serif block">
                {subtitle}
              </span>
              <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                {title}
              </h1>
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-light">
                {description}
              </p>
            </div>
          </div>

          {/* Subcategory Navigation Switcher (Displayed on Nile Cruise pages) */}
          {isNileCruisesSection && (
            <div className="p-3 bg-white dark:bg-stone-900/90 rounded-xl border border-stone-200 dark:border-stone-800 shadow-xs space-y-2">
              <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 pb-1">
                <span className="font-medium flex items-center gap-1.5">
                  <Ship className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                  <span>Nile Cruise Service Categories</span>
                </span>
                <span className="text-[11px] text-stone-400 dark:text-stone-500">
                  {subCategoryCounts['ALL']} Total Cruise Programs
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <Link
                  to="/nile-cruises"
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                    isNileCruisesRoot && activeTierFilter === 'ALL'
                      ? 'bg-stone-900 text-white dark:bg-amber-500 dark:text-stone-950 shadow-xs'
                      : 'bg-stone-100 dark:bg-stone-800/80 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-800'
                  }`}
                  onClick={() => setActiveTierFilter('ALL')}
                >
                  All Nile Cruises ({subCategoryCounts['ALL']})
                </Link>

                {NILE_CRUISE_SUBCATEGORIES_CONFIG.map((sub) => {
                  const isCurrentSubcategoryPage = canonicalPath === sub.href;
                  const isFilteredInPage = isNileCruisesRoot && activeTierFilter === sub.subCategoryName;
                  const isActive = isCurrentSubcategoryPage || isFilteredInPage;

                  return (
                    <Link
                      key={sub.id}
                      to={sub.href}
                      className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors inline-flex items-center gap-1.5 ${
                        isActive
                          ? 'bg-amber-600 text-white font-semibold shadow-xs'
                          : 'bg-stone-100 dark:bg-stone-800/80 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-800 hover:text-amber-700 dark:hover:text-amber-400'
                      }`}
                    >
                      <span>{sub.name}</span>
                      <span className="opacity-80 text-[11px]">({subCategoryCounts[sub.subCategoryName] || 0})</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* Prominent 3 Subcategory Cards Grid (Rendered on main Nile Cruises catalog) */}
          {isNileCruisesRoot && (
            <div className="space-y-4 pt-2">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-amber-700 dark:text-amber-400 text-xs font-bold uppercase tracking-wider font-serif">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Explore by Experience Tier</span>
                  </div>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100">
                    Nile Cruise Subcategories
                  </h2>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-400 max-w-md">
                  Choose from affordable classic cruisers, modern vessels with panoramic balconies, or ultra-luxury boutique river ships.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {NILE_CRUISE_SUBCATEGORIES_CONFIG.map((sub) => (
                  <Link
                    key={sub.id}
                    to={sub.href}
                    className="group relative rounded-xl overflow-hidden bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-amber-500 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 min-h-[320px] flex flex-col justify-between text-white p-5"
                  >
                    {/* Background Photography with Zoom Effect */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                      <OptimizedImage
                        src={sub.image}
                        alt={sub.name}
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="w-full h-full object-cover filter brightness-85 group-hover:scale-108 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-stone-950/20 group-hover:via-stone-950/80 transition-colors" />
                    </div>

                    {/* Top Row: Badge & Cruise Count */}
                    <div className="relative z-10 flex items-center justify-between gap-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-stone-950/85 backdrop-blur-md border border-amber-500/40 text-amber-300 text-[10px] font-bold tracking-wide">
                        {sub.badge}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-amber-500 text-stone-950 text-[10px] font-bold">
                        {subCategoryCounts[sub.subCategoryName] || 0} Cruises
                      </span>
                    </div>

                    {/* Bottom Content Area */}
                    <div className="relative z-10 space-y-2">
                      <div className="text-[11px] text-amber-300 font-mono tracking-wide line-clamp-1">
                        {sub.featuredShips}
                      </div>

                      <h3 className="font-serif text-2xl font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors">
                        {sub.name}
                      </h3>

                      <p className="text-xs text-stone-300 font-light leading-snug line-clamp-2">
                        {sub.tagline}
                      </p>

                      <div className="pt-2 border-t border-stone-700/60 flex items-center justify-between text-xs text-amber-300 font-semibold">
                        <span>Browse {sub.name}</span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Day Tours Quick Destination Cards */}
          {canonicalPath === '/day-tours' && (
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <h2 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
                  Select Day Tour Destination
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    name: 'Cairo',
                    tagline: 'Pyramids, Sphinx, Saqqara & NMEC Museum',
                    href: '/cairo-giza-tours',
                    image: '/images/tours/15974105260camels-at-the-site-of-pyramids-2445852.jpg',
                    count: '25+ Tours'
                  },
                  {
                    name: 'Luxor',
                    tagline: 'Valley of Kings, Karnak, Luxor Temple & Balloon',
                    href: '/luxor-upper-egypt',
                    image: '/images/tours/15971782201Luxor-Temple.jpg',
                    count: '30+ Tours'
                  },
                  {
                    name: 'Aswan',
                    tagline: 'Philae Temple, Abu Simbel & Nubian Villages',
                    href: '/aswan-tours',
                    image: '/images/tours/ABU-SIMBEL-1-1.webp',
                    count: '18+ Tours'
                  },
                  {
                    name: 'Hurghada',
                    tagline: 'Red Sea boat trips, coral snorkeling & desert safaris',
                    href: '/hurghada-tours',
                    image: '/images/tours/11-21.webp',
                    count: '14+ Tours'
                  }
                ].map((d) => (
                  <Link
                    key={d.name}
                    to={d.href}
                    className="group relative rounded-xl overflow-hidden bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-amber-500 transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1 p-4 min-h-[170px] flex flex-col justify-end text-white"
                  >
                    <div className="absolute inset-0 z-0 overflow-hidden">
                      <OptimizedImage
                        src={d.image}
                        alt={d.name}
                        sizes="25vw"
                        className="w-full h-full object-cover filter brightness-70 group-hover:scale-108 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />
                    </div>
                    <div className="relative z-10 space-y-1">
                      <div className="flex items-center justify-between text-[11px] text-amber-300 font-semibold">
                        <span>{d.count}</span>
                        <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                      <h3 className="font-serif text-xl font-bold">{d.name} Day Tours</h3>
                      <p className="text-[11px] text-stone-300 font-light line-clamp-1">{d.tagline}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Tours Count and Catalog Grid */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-stone-500 dark:text-stone-400 border-b border-stone-200 dark:border-stone-800 pb-3">
              <div className="flex items-center gap-2">
                <span>
                  Showing <strong>{displayedTours.length}</strong> {subCategory || category} programs
                </span>
                {isNileCruisesRoot && activeTierFilter !== 'ALL' && (
                  <button
                    onClick={() => setActiveTierFilter('ALL')}
                    className="text-amber-700 dark:text-amber-400 underline font-medium hover:text-amber-800"
                  >
                    Clear filter (show all {baseTours.length})
                  </button>
                )}
              </div>

              <div className="flex items-center gap-4">
                {subCategory && (
                  <Link to="/nile-cruises" className="text-amber-800 dark:text-amber-400 hover:underline font-medium">
                    ← All Nile Cruise categories
                  </Link>
                )}
                <Link to="/tours" className="text-amber-800 dark:text-amber-400 hover:underline font-medium">
                  View all 297 tours &rarr;
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedTours.map((tour, idx) => (
                <TourCard key={tour.id} tour={tour} priority={idx < 3} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
