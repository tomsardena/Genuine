import React from 'react';
import { TOURS_DATA, TourCategory, TourItem } from '../data/tours';
import { TourCard } from '../components/TourCard';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';
import { Link } from '../utils/router';
import { OptimizedImage } from '../components/OptimizedImage';
import { ArrowRight, MapPin } from 'lucide-react';

interface CategoryPageProps {
  category: TourCategory | string;
  title: string;
  subtitle: string;
  description: string;
  heroImage?: string;
  canonicalPath: string;
  customFilter?: (tour: TourItem) => boolean;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({
  category,
  title,
  subtitle,
  description,
  heroImage,
  canonicalPath,
  customFilter
}) => {
  const tours = customFilter
    ? TOURS_DATA.filter(customFilter)
    : TOURS_DATA.filter(t => t.category.toLowerCase() === category.toLowerCase());

  // Category specific keywords for search indexing
  const categoryKeywords = [
    title,
    subtitle,
    category,
    'private Egypt tours',
    'certified Egyptologist guide',
    'Egypt travel packages',
    'Luxor and Nile cruises',
    'Genuine Egypte'
  ].join(', ');

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
          name: category
        },
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: tours.length,
          itemListElement: tours.slice(0, 24).map((t, idx) => ({
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
          {
            '@type': 'ListItem',
            position: 3,
            name: title,
            item: `https://genuineegypte.com${canonicalPath}`
          }
        ]
      }
    ]
  };

  const effectiveOgImage = heroImage || tours[0]?.mainImage || '/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg';

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

          {/* If on Day Tours, show destination quick access cards */}
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
            <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 border-b border-stone-200 dark:border-stone-800 pb-3">
              <span>Showing <strong>{tours.length}</strong> authentic programs</span>
              <Link to="/tours" className="text-amber-800 dark:text-amber-400 hover:underline font-medium">
                View all categories &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tours.map((tour, idx) => (
                <TourCard key={tour.id} tour={tour} priority={idx < 3} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
