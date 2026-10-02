import React, { useState, useMemo } from 'react';
import { TOURS_DATA } from '../data/tours';
import { TourCard } from '../components/TourCard';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';
import { Search, RotateCcw, Filter, ChevronDown } from 'lucide-react';

interface ToursCatalogProps {
  initialCategory?: string;
  initialDestination?: string;
  pageTitle?: string;
  pageDescription?: string;
}

const ITEMS_PER_PAGE = 18;

export const ToursCatalogPage: React.FC<ToursCatalogProps> = ({
  initialCategory,
  initialDestination,
  pageTitle = 'All Tours, Nile Cruises & Excursions in Egypt',
  pageDescription = 'Browse all authentic private tours, luxury Nile cruises, Dahabiyas, day trips, vacation packages, and transfers across Egypt curated by Genuine Egypte.'
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'ALL');
  const [selectedDestination, setSelectedDestination] = useState<string>(initialDestination || 'ALL');
  const [sortBy, setSortBy] = useState<'featured' | 'title-asc' | 'duration'>('featured');
  const [visibleCount, setVisibleCount] = useState<number>(ITEMS_PER_PAGE);

  const categories = [
    { label: 'All Experiences', value: 'ALL' },
    { label: 'Nile Cruises', value: 'Nile Cruises' },
    { label: 'Dahabiya Cruises', value: 'Dahabiya Nile Cruises' },
    { label: 'Lake Nasser Cruises', value: 'Lake Nasser Cruises' },
    { label: 'Vacation Packages', value: 'Egypt Vacation Packages' },
    { label: 'Luxor & Upper Egypt', value: 'Luxor' },
    { label: 'Aswan Tours', value: 'Aswan' },
    { label: 'Cairo & Giza', value: 'Cairo' },
    { label: 'Shore Excursions', value: 'Shore Excursions' },
    { label: 'Red Sea & Resorts', value: 'Red Sea' },
    { label: 'Private Transfers', value: 'Private Transfers' }
  ];

  const destinations = [
    { label: 'All Destinations', value: 'ALL' },
    { label: 'Luxor & The Nile Valley', value: 'Luxor' },
    { label: 'Aswan & Abu Simbel', value: 'Aswan' },
    { label: 'Cairo & Giza Plateau', value: 'Cairo' },
    { label: 'Alexandria', value: 'Alexandria' },
    { label: 'Hurghada & Red Sea', value: 'Hurghada' },
    { label: 'Sharm El Sheikh', value: 'Sharm' },
    { label: 'Marsa Alam', value: 'Marsa Alam' },
    { label: 'Dahab & Sinai', value: 'Dahab' },
    { label: 'Cruise Ports (Safaga, Alex, Said, Sokhna)', value: 'Port' }
  ];

  const filteredTours = useMemo(() => {
    let result = [...TOURS_DATA];

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(t =>
        t.title.toLowerCase().includes(q) ||
        t.shortDescription.toLowerCase().includes(q) ||
        t.destination.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q)
      );
    }

    // Filter by category
    if (selectedCategory !== 'ALL') {
      const cat = selectedCategory.toLowerCase();
      result = result.filter(t => {
        const tCat = t.category.toLowerCase();
        if (cat === 'luxor') return tCat.includes('luxor');
        if (cat === 'aswan') return tCat.includes('aswan');
        if (cat === 'cairo') return tCat.includes('cairo');
        if (cat === 'red sea') return tCat.includes('hurghada') || tCat.includes('sharm') || tCat.includes('marsa') || tCat.includes('dahab');
        return tCat === cat;
      });
    }

    // Filter by destination
    if (selectedDestination !== 'ALL') {
      const dest = selectedDestination.toLowerCase();
      result = result.filter(t =>
        t.destination.toLowerCase().includes(dest) ||
        t.category.toLowerCase().includes(dest)
      );
    }

    // Sorting
    if (sortBy === 'title-asc') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'featured') {
      result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }, [searchQuery, selectedCategory, selectedDestination, sortBy]);

  const handleReset = () => {
    setSearchQuery('');
    setSelectedCategory('ALL');
    setSelectedDestination('ALL');
    setSortBy('featured');
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const hasActiveFilters = searchQuery !== '' || selectedCategory !== 'ALL' || selectedDestination !== 'ALL';

  const visibleTours = filteredTours.slice(0, visibleCount);
  const hasMore = visibleCount < filteredTours.length;

  const catalogKeywords = [
    'Egypt private tours',
    'Nile river cruises',
    'Luxor day trips',
    'Aswan excursions',
    'Cairo Pyramids tours',
    'Dahabiya sailing Egypt',
    'Abu Simbel tours',
    'certified Egyptologist guides',
    'Genuine Egypte'
  ].join(', ');

  const catalogJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': 'https://genuineegypte.com/tours#catalog',
        name: pageTitle,
        description: pageDescription,
        url: 'https://genuineegypte.com/tours',
        isPartOf: {
          '@type': 'WebSite',
          name: 'Genuine Egypte',
          url: 'https://genuineegypte.com'
        },
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: filteredTours.length,
          itemListElement: visibleTours.slice(0, 20).map((t, idx) => ({
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
        '@id': 'https://genuineegypte.com/tours#breadcrumbs',
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
            name: 'All Tours & Cruises',
            item: 'https://genuineegypte.com/tours'
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        canonicalPath="/tours"
        keywords={catalogKeywords}
        ogImage="/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg"
        ogImageAlt="Genuine Egypte luxury tours and Nile cruise catalog"
        ogType="website"
        jsonLd={catalogJsonLd}
      />

      <div className="bg-[#FAF8F5] dark:bg-[#121110] min-h-screen py-8 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
          {/* Header & Breadcrumbs */}
          <div className="space-y-3">
            <Breadcrumbs items={[{ label: 'Our Tours & Excursions' }]} />
            <div className="border-b border-stone-200 dark:border-stone-800 pb-6">
              <span className="text-xs font-semibold text-amber-800 dark:text-amber-400 uppercase tracking-widest font-serif block">
                Genuine Egypte Catalog ({TOURS_DATA.length} Verified Products)
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100 tracking-tight mt-1">
                {pageTitle}
              </h1>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 max-w-2xl mt-2 leading-relaxed">
                {pageDescription}
              </p>
            </div>
          </div>

          {/* Interactive Filters Bar */}
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-4 sm:p-5 space-y-4 shadow-xs">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(ITEMS_PER_PAGE);
                }}
                placeholder="Search by monument name, cruise ship (e.g. Oberoi, Dahabiya, Farida, Pyramids, Karnak, Abu Simbel, Hurghada)..."
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm border border-stone-200 dark:border-stone-700 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 bg-stone-50/50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500"
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setVisibleCount(ITEMS_PER_PAGE);
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700 dark:hover:text-stone-200"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Segmented Category Buttons with smooth horizontal swipe on mobile */}
            <div className="space-y-1.5">
              <span className="text-[11px] font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider block">
                Category
              </span>
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 sm:pb-0 scrollbar-none sm:flex-wrap touch-pan-x">
                {categories.map((cat) => {
                  const isActive = selectedCategory === cat.value;
                  return (
                    <button
                      key={cat.value}
                      onClick={() => {
                        setSelectedCategory(cat.value);
                        setVisibleCount(ITEMS_PER_PAGE);
                      }}
                      className={`px-3.5 py-2 sm:py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap min-h-[36px] flex items-center ${
                        isActive
                          ? 'bg-stone-900 dark:bg-amber-600 text-white shadow-xs'
                          : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
                      }`}
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Secondary Filters Row: Destination & Sort */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 pt-3 border-t border-stone-100 dark:border-stone-800">
              <div className="flex flex-col xs:flex-row xs:items-center gap-3 w-full sm:w-auto">
                <div className="flex items-center gap-2 w-full xs:w-auto">
                  <Filter className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                  <label htmlFor="filter-destination" className="text-xs text-stone-600 dark:text-stone-300 font-medium shrink-0">
                    Destination:
                  </label>
                  <select
                    id="filter-destination"
                    value={selectedDestination}
                    onChange={(e) => {
                      setSelectedDestination(e.target.value);
                      setVisibleCount(ITEMS_PER_PAGE);
                    }}
                    className="flex-1 xs:flex-initial text-xs px-3 py-2 sm:py-1.5 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg text-stone-700 dark:text-stone-200 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  >
                    {destinations.map((d) => (
                      <option key={d.value} value={d.value}>
                        {d.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center gap-2 w-full xs:w-auto">
                  <label htmlFor="sort-tours" className="text-xs text-stone-600 dark:text-stone-300 font-medium shrink-0">
                    Sort:
                  </label>
                  <select
                    id="sort-tours"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="flex-1 xs:flex-initial text-xs px-3 py-2 sm:py-1.5 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg text-stone-700 dark:text-stone-200 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  >
                    <option value="featured">Featured & Curated</option>
                    <option value="title-asc">Alphabetical (A–Z)</option>
                  </select>
                </div>
              </div>

              {hasActiveFilters && (
                <button
                  onClick={handleReset}
                  className="self-start sm:self-auto inline-flex items-center gap-1.5 text-xs text-amber-800 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-300 font-medium py-1.5 px-2.5 rounded-lg hover:bg-amber-50 dark:hover:bg-amber-950/40 transition-colors"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset All Filters</span>
                </button>
              )}
            </div>
          </div>

          {/* Results Counter */}
          <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400">
            <span>
              Showing <strong className="text-stone-800 dark:text-stone-200">{visibleTours.length}</strong> of <strong className="text-stone-800 dark:text-stone-200">{filteredTours.length}</strong> available experiences
            </span>
            {hasActiveFilters && (
              <span className="text-amber-800 dark:text-amber-400 font-medium">Filtered Results</span>
            )}
          </div>

          {/* Tours Grid */}
          {filteredTours.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {visibleTours.map((tour, index) => (
                  <TourCard key={tour.id} tour={tour} priority={index < 3} />
                ))}
              </div>

              {/* Load More Button */}
              {hasMore && (
                <div className="text-center pt-8">
                  <button
                    onClick={() => setVisibleCount(prev => prev + ITEMS_PER_PAGE)}
                    className="px-6 py-3 bg-stone-900 dark:bg-amber-600 hover:bg-stone-800 dark:hover:bg-amber-500 text-white font-medium text-xs rounded-lg transition-colors shadow-xs inline-flex items-center gap-2"
                  >
                    <span>Load More Experiences ({filteredTours.length - visibleCount} remaining)</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-12 text-center space-y-4">
              <span className="font-serif text-2xl text-stone-400 dark:text-stone-500 block">No matching experiences found</span>
              <p className="text-xs text-stone-500 dark:text-stone-400 max-w-md mx-auto">
                We could not find any tours matching &ldquo;{searchQuery}&rdquo; in the selected criteria. Try adjusting your search term or clearing the filters.
              </p>
              <button
                onClick={handleReset}
                className="px-4 py-2 text-xs font-semibold text-white bg-stone-900 dark:bg-amber-600 hover:bg-stone-800 dark:hover:bg-amber-500 rounded-md transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
