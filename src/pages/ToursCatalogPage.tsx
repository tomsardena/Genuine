import React, { useState, useMemo } from 'react';
import { TOURS_DATA, TourCategory } from '../data/tours';
import { TourCard } from '../components/TourCard';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';
import { Search, RotateCcw, Filter } from 'lucide-react';

interface ToursCatalogProps {
  initialCategory?: string;
  initialDestination?: string;
  pageTitle?: string;
  pageDescription?: string;
}

export const ToursCatalogPage: React.FC<ToursCatalogProps> = ({
  initialCategory,
  initialDestination,
  pageTitle = 'All Tours, Nile Cruises & Excursions in Egypt',
  pageDescription = 'Browse all 38 authentic private tours, luxury Nile cruises, day trips, and transfers curated by Genuine Egypte.'
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'ALL');
  const [selectedDestination, setSelectedDestination] = useState<string>(initialDestination || 'ALL');
  const [sortBy, setSortBy] = useState<'featured' | 'title-asc' | 'duration'>('featured');

  const categories = [
    { label: 'All Experiences', value: 'ALL' },
    { label: 'Nile Cruises', value: 'Nile Cruises' },
    { label: 'Cairo & Giza', value: 'Cairo & Giza Tours' },
    { label: 'Luxor & Upper Egypt', value: 'Luxor & Upper Egypt' },
    { label: 'Private Transfers', value: 'Private Transfers' },
    { label: 'Hot Air Balloon', value: 'Hot Air Balloon' },
    { label: 'Abu Simbel', value: 'Abu Simbel Excursions' }
  ];

  const destinations = [
    { label: 'All Destinations', value: 'ALL' },
    { label: 'Luxor & Upper Egypt', value: 'Luxor' },
    { label: 'Nile River & Valley', value: 'Nile' },
    { label: 'Cairo & Giza', value: 'Cairo' },
    { label: 'Aswan & Abu Simbel', value: 'Aswan' },
    { label: 'Alexandria', value: 'Alexandria' },
    { label: 'Hurghada & Red Sea', value: 'Hurghada' }
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
      result = result.filter(t => t.category.toLowerCase() === selectedCategory.toLowerCase());
    }

    // Filter by destination
    if (selectedDestination !== 'ALL') {
      result = result.filter(t => t.destination.toLowerCase().includes(selectedDestination.toLowerCase()));
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
  };

  const hasActiveFilters = searchQuery !== '' || selectedCategory !== 'ALL' || selectedDestination !== 'ALL';

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        canonicalPath="/tours"
      />

      <div className="bg-[#FAF8F5] min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
          {/* Header & Breadcrumbs */}
          <div className="space-y-3">
            <Breadcrumbs items={[{ label: 'Our Tours & Excursions' }]} />
            <div className="border-b border-stone-200 pb-6">
              <span className="text-xs font-semibold text-amber-800 uppercase tracking-widest font-serif block">
                Genuine Egypte Catalog
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mt-1">
                {pageTitle}
              </h1>
              <p className="text-xs sm:text-sm text-stone-600 max-w-2xl mt-2 leading-relaxed">
                {pageDescription}
              </p>
            </div>
          </div>

          {/* Interactive Filters Bar */}
          <div className="bg-white border border-stone-200 rounded-lg p-4 sm:p-5 space-y-4 shadow-xs">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by monument name, cruise ship, city (e.g. Royal Ruby, Pyramids, Karnak, Aswan)..."
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm border border-stone-200 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 bg-stone-50/50"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Segmented Category Buttons */}
            <div className="space-y-1.5">
              <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block">
                Category
              </span>
              <div className="flex flex-wrap gap-1.5">
                {categories.map((cat) => {
                  const isActive = selectedCategory === cat.value;
                  return (
                    <button
                      key={cat.value}
                      onClick={() => setSelectedCategory(cat.value)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                        isActive
                          ? 'bg-stone-900 text-white shadow-xs'
                          : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                      }`}
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Secondary Filters Row: Destination & Sort */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-stone-100">
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2">
                  <Filter className="w-3.5 h-3.5 text-stone-400" />
                  <label htmlFor="filter-destination" className="text-xs text-stone-600 font-medium">
                    Destination:
                  </label>
                  <select
                    id="filter-destination"
                    value={selectedDestination}
                    onChange={(e) => setSelectedDestination(e.target.value)}
                    className="text-xs px-2.5 py-1.5 bg-stone-50 border border-stone-200 rounded-md text-stone-700 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  >
                    {destinations.map((d) => (
                      <option key={d.value} value={d.value}>
                        {d.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <label htmlFor="sort-tours" className="text-xs text-stone-600 font-medium">
                    Sort:
                  </label>
                  <select
                    id="sort-tours"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="text-xs px-2.5 py-1.5 bg-stone-50 border border-stone-200 rounded-md text-stone-700 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  >
                    <option value="featured">Featured & Curated</option>
                    <option value="title-asc">Alphabetical (A–Z)</option>
                  </select>
                </div>
              </div>

              {hasActiveFilters && (
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs text-amber-800 hover:text-amber-900 font-medium py-1 px-2 rounded-md hover:bg-amber-50 transition-colors"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset All Filters</span>
                </button>
              )}
            </div>
          </div>

          {/* Results Counter */}
          <div className="flex items-center justify-between text-xs text-stone-500">
            <span>
              Showing <strong className="text-stone-800">{filteredTours.length}</strong> available experiences
            </span>
            {hasActiveFilters && (
              <span className="text-amber-800 font-medium">Filtered Results</span>
            )}
          </div>

          {/* Tours Grid */}
          {filteredTours.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          ) : (
            <div className="bg-white border border-stone-200 rounded-lg p-12 text-center space-y-4">
              <span className="font-serif text-2xl text-stone-400 block">No matching experiences found</span>
              <p className="text-xs text-stone-500 max-w-md mx-auto">
                We could not find any tours matching &ldquo;{searchQuery}&rdquo; in the selected criteria. Try adjusting your search term or clearing the filters.
              </p>
              <button
                onClick={handleReset}
                className="px-4 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-md transition-colors"
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
