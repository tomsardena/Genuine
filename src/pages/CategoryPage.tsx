import React from 'react';
import { TOURS_DATA, TourCategory } from '../data/tours';
import { TourCard } from '../components/TourCard';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';
import { Link } from '../utils/router';
import { OptimizedImage } from '../components/OptimizedImage';

interface CategoryPageProps {
  category: TourCategory;
  title: string;
  subtitle: string;
  description: string;
  heroImage?: string;
  canonicalPath: string;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({
  category,
  title,
  subtitle,
  description,
  heroImage,
  canonicalPath
}) => {
  const tours = TOURS_DATA.filter(t => t.category.toLowerCase() === category.toLowerCase());

  return (
    <>
      <SEOHead
        title={`${title} – Genuine Egypte`}
        description={description}
        canonicalPath={canonicalPath}
        ogImage={heroImage || (tours[0]?.mainImage)}
      />

      <div className="bg-[#FAF8F5] dark:bg-[#121110] min-h-screen py-8 text-stone-800 dark:text-stone-100 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
          <Breadcrumbs
            items={[
              { label: 'Tours & Excursions', href: '/tours' },
              { label: title }
            ]}
          />

          {/* Header Banner */}
          <div className="relative rounded-xl overflow-hidden bg-stone-900 text-white p-8 sm:p-12 shadow-sm border border-stone-200 dark:border-stone-800">
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

            <div className="relative z-10 max-w-2xl space-y-3">
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest font-serif block">
                {subtitle}
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                {title}
              </h1>
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-light">
                {description}
              </p>
            </div>
          </div>

          {/* Tours Count and Catalog Grid */}
          <div className="space-y-6">
            <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 border-b border-stone-200 dark:border-stone-800 pb-3">
              <span>Showing <strong>{tours.length}</strong> authentic programs</span>
              <Link to="/tours" className="text-amber-800 dark:text-amber-400 hover:underline font-medium">
                View all categories &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
