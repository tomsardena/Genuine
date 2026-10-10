import React, { useMemo } from 'react';
import { Link, useRouter } from '../utils/router';
import { ChevronRight, Home, ArrowLeft } from 'lucide-react';
import { getTourBySlug } from '../data/tours';
import { DESTINATIONS_DATA } from '../data/destinations';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  title?: string;
  badge?: string;
}

export interface BreadcrumbsProps {
  /** Optional custom breadcrumb items. If not provided, items are dynamically derived from current location in site hierarchy. */
  items?: BreadcrumbItem[];
  /** Label for root home item (defaults to 'Home') */
  homeLabel?: string;
  /** Custom classes for outer nav container */
  className?: string;
  /** Whether to inject Schema.org BreadcrumbList JSON-LD (defaults to true) */
  enableSchema?: boolean;
  /** Whether to show a quick "Back" button preceding the breadcrumbs (defaults to false) */
  showBackButton?: boolean;
  /** Custom label for back button (defaults to 'Back') */
  backButtonLabel?: string;
  /** Fallback URL or action for back button */
  backButtonHref?: string;
  /** Include destination link if on a tour detail page (defaults to true) */
  includeDestination?: boolean;
  /** Visual presentation style */
  variant?: 'default' | 'card' | 'minimal';
}

/**
 * Resolves destination slug & label for any tour destination string,
 * mapping to one of the canonical destination pages.
 */
export function getDestinationRouteForTour(destination: string): { label: string; href: string } | null {
  if (!destination) return null;
  const d = destination.toLowerCase().trim();

  if (d.includes('luxor') || d.includes('thebes') || d.includes('karnak') || d.includes('dendera') || d.includes('abydos')) {
    return { label: 'Luxor & Valley', href: '/destinations/luxor' };
  }
  if (d.includes('cairo') || d.includes('giza') || d.includes('saqqara') || d.includes('dahshur')) {
    return { label: 'Cairo & Giza', href: '/destinations/cairo-giza' };
  }
  if (d.includes('aswan') || d.includes('abu simbel') || d.includes('philae') || d.includes('nubia') || d.includes('lake nasser')) {
    return { label: 'Aswan & Abu Simbel', href: '/destinations/aswan-abu-simbel' };
  }
  if (d.includes('hurghada') || d.includes('red sea') || d.includes('safaga') || d.includes('sharm') || d.includes('marsa alam') || d.includes('dahab')) {
    return { label: 'Hurghada & Red Sea', href: '/destinations/hurghada' };
  }
  if (d.includes('alexandria') || d.includes('mediterranean')) {
    return { label: 'Alexandria', href: '/destinations/alexandria' };
  }
  if (d.includes('nile') || d.includes('kom ombo') || d.includes('edfu') || d.includes('esna')) {
    return { label: 'The River Nile', href: '/destinations/nile-river' };
  }

  return { label: destination, href: `/tours?destination=${encodeURIComponent(destination)}` };
}

/**
 * Resolves the dedicated category page route for any tour category.
 */
export function getCategoryRouteForTour(category: string): { label: string; href: string } {
  const c = (category || '').toLowerCase().trim();

  if (c === 'nile cruises' || (c.includes('nile') && c.includes('cruise') && !c.includes('dahabiya') && !c.includes('lake'))) {
    return { label: 'Nile Cruises', href: '/nile-cruises' };
  }
  if (c.includes('dahabiya')) {
    return { label: 'Dahabiya Cruises', href: '/dahabiya-cruises' };
  }
  if (c.includes('lake nasser')) {
    return { label: 'Lake Nasser Cruises', href: '/lake-nasser-cruises' };
  }
  if (c.includes('package') || c.includes('vacation')) {
    return { label: 'Vacation Packages', href: '/egypt-packages' };
  }
  if (c.includes('cairo') || c.includes('giza')) {
    return { label: 'Cairo & Giza Tours', href: '/cairo-giza-tours' };
  }
  if (c.includes('luxor')) {
    return { label: 'Luxor & Upper Egypt', href: '/luxor-upper-egypt' };
  }
  if (c.includes('aswan')) {
    return { label: 'Aswan Tours', href: '/aswan-tours' };
  }
  if (c.includes('hurghada') || c.includes('sharm') || c.includes('marsa alam') || c.includes('dahab')) {
    return { label: 'Hurghada & Red Sea', href: '/hurghada-tours' };
  }
  if (c.includes('shore')) {
    return { label: 'Shore Excursions', href: '/shore-excursions' };
  }
  if (c.includes('transfer')) {
    return { label: 'Private Transfers', href: '/private-transfers' };
  }
  if (c.includes('balloon')) {
    return { label: 'Hot Air Balloon', href: '/hot-air-balloon' };
  }
  if (c.includes('abu simbel')) {
    return { label: 'Abu Simbel Excursions', href: '/abu-simbel' };
  }
  if (c.includes('day')) {
    return { label: 'Day Tours', href: '/day-tours' };
  }

  return { label: category || 'Tours & Excursions', href: '/tours' };
}

/**
 * Dynamically resolves breadcrumb items from the active URL path,
 * mapping all site hierarchy levels: Home > Category/Destination > Tour.
 */
export function resolveBreadcrumbsFromPath(
  pathname: string,
  options: { includeDestination?: boolean } = {}
): BreadcrumbItem[] {
  const { includeDestination = true } = options;
  const cleanPath = decodeURIComponent(pathname).split('?')[0].split('#')[0].replace(/\/+$/, '') || '/';

  // 1. Root Homepage -> no breadcrumbs needed
  if (cleanPath === '' || cleanPath === '/') {
    return [];
  }

  // 2. Main Catalog
  if (
    cleanPath === '/tours' ||
    cleanPath === '/our-tours' ||
    cleanPath === '/all-items' ||
    cleanPath === '/search-result' ||
    cleanPath === '/ba_search_results'
  ) {
    return [{ label: 'Our Tours & Excursions' }];
  }

  // 3. Tour Detail Pages: /booking/:slug, /tour/:slug, /package/:slug, /cruise/:slug or direct /:slug
  let tourSlug: string | null = null;
  if (cleanPath.startsWith('/booking/')) tourSlug = cleanPath.replace('/booking/', '');
  else if (cleanPath.startsWith('/tour/')) tourSlug = cleanPath.replace('/tour/', '');
  else if (cleanPath.startsWith('/package/')) tourSlug = cleanPath.replace('/package/', '');
  else if (cleanPath.startsWith('/cruise/')) tourSlug = cleanPath.replace('/cruise/', '');
  else {
    const directSlug = cleanPath.replace(/^\//, '');
    if (getTourBySlug(directSlug)) {
      tourSlug = directSlug;
    }
  }

  if (tourSlug) {
    const tour = getTourBySlug(tourSlug);
    if (tour) {
      const items: BreadcrumbItem[] = [
        { label: 'Tours & Cruises', href: '/tours' }
      ];

      // Add Category link
      const catRoute = getCategoryRouteForTour(tour.category);
      items.push({
        label: catRoute.label,
        href: catRoute.href
      });

      // Add Destination link if enabled and available
      if (includeDestination && tour.destination) {
        const destRoute = getDestinationRouteForTour(tour.destination);
        if (destRoute && destRoute.href !== catRoute.href) {
          items.push({
            label: destRoute.label,
            href: destRoute.href
          });
        }
      }

      // Terminal item: Tour title
      items.push({
        label: tour.title,
        title: tour.title
      });

      return items;
    }
  }

  // 4. Dedicated Category Pages
  const categoryMap: Record<string, { label: string; categoryTitle: string }> = {
    '/nile-cruises': { label: 'Tours & Cruises', categoryTitle: 'Luxury Nile Cruises' },
    '/categories/nile-cruises': { label: 'Tours & Cruises', categoryTitle: 'Luxury Nile Cruises' },
    '/dahabiya-cruises': { label: 'Tours & Cruises', categoryTitle: 'Dahabiya Nile Cruises' },
    '/categories/dahabiya-cruises': { label: 'Tours & Cruises', categoryTitle: 'Dahabiya Nile Cruises' },
    '/lake-nasser-cruises': { label: 'Tours & Cruises', categoryTitle: 'Lake Nasser Cruises' },
    '/categories/lake-nasser-cruises': { label: 'Tours & Cruises', categoryTitle: 'Lake Nasser Cruises' },
    '/egypt-packages': { label: 'Tours & Cruises', categoryTitle: 'Egypt Vacation Packages' },
    '/travel-packages': { label: 'Tours & Cruises', categoryTitle: 'Egypt Vacation Packages' },
    '/categories/travel-pakages': { label: 'Tours & Cruises', categoryTitle: 'Egypt Vacation Packages' },
    '/day-tours': { label: 'Tours & Cruises', categoryTitle: 'Egypt Day Tours' },
    '/categories/day-tours': { label: 'Tours & Cruises', categoryTitle: 'Egypt Day Tours' },
    '/cairo-giza-tours': { label: 'Tours & Cruises', categoryTitle: 'Cairo & Giza Tours' },
    '/categories/cairo-giza-tours': { label: 'Tours & Cruises', categoryTitle: 'Cairo & Giza Tours' },
    '/luxor-upper-egypt': { label: 'Tours & Cruises', categoryTitle: 'Luxor & Upper Egypt' },
    '/luxor-tours': { label: 'Tours & Cruises', categoryTitle: 'Luxor & Upper Egypt' },
    '/categories/luxor-upper-egypt': { label: 'Tours & Cruises', categoryTitle: 'Luxor & Upper Egypt' },
    '/aswan-tours': { label: 'Tours & Cruises', categoryTitle: 'Aswan & Nubia Tours' },
    '/categories/aswan-day-tours': { label: 'Tours & Cruises', categoryTitle: 'Aswan & Nubia Tours' },
    '/hurghada-tours': { label: 'Tours & Cruises', categoryTitle: 'Hurghada & Red Sea' },
    '/categories/hurghada-tours': { label: 'Tours & Cruises', categoryTitle: 'Hurghada & Red Sea' },
    '/categories/hurghada-day-tours': { label: 'Tours & Cruises', categoryTitle: 'Hurghada & Red Sea' },
    '/shore-excursions': { label: 'Tours & Cruises', categoryTitle: 'Egypt Shore Excursions' },
    '/categories/shore-excursions': { label: 'Tours & Cruises', categoryTitle: 'Egypt Shore Excursions' },
    '/private-transfers': { label: 'Tours & Cruises', categoryTitle: 'Private Transfers' },
    '/categories/transportation': { label: 'Tours & Cruises', categoryTitle: 'Private Transfers' },
    '/hot-air-balloon': { label: 'Tours & Cruises', categoryTitle: 'Hot Air Balloon Flights' },
    '/categories/hot-air-balloon': { label: 'Tours & Cruises', categoryTitle: 'Hot Air Balloon Flights' },
    '/abu-simbel': { label: 'Tours & Cruises', categoryTitle: 'Abu Simbel Excursions' }
  };

  if (categoryMap[cleanPath]) {
    const info = categoryMap[cleanPath];
    return [
      { label: info.label, href: '/tours' },
      { label: info.categoryTitle }
    ];
  }

  // 5. Destination Pages
  if (cleanPath === '/destinations' || cleanPath === '/destination' || cleanPath === '/destination-02') {
    return [{ label: 'Destinations' }];
  }

  if (cleanPath.startsWith('/destinations/') || cleanPath.startsWith('/destination/')) {
    const destSlug = cleanPath.replace(/^\/(destinations|destination)\//, '');
    const dest = DESTINATIONS_DATA.find(d => d.slug === destSlug || d.id === destSlug);
    const destName = dest ? dest.name : destSlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

    return [
      { label: 'Destinations', href: '/destinations' },
      { label: destName }
    ];
  }

  // 6. Static Informational & Company Pages
  if (cleanPath === '/about' || cleanPath === '/about-me') {
    return [{ label: 'About Genuine Egypte' }];
  }
  if (cleanPath === '/contact') {
    return [{ label: 'Contact Us' }];
  }
  if (cleanPath === '/faqs' || cleanPath === '/faq') {
    return [{ label: 'Travel FAQs' }];
  }
  if (cleanPath === '/gallery' || cleanPath === '/photos' || cleanPath === '/photo-gallery') {
    return [{ label: 'Photo Gallery' }];
  }
  if (cleanPath === '/terms-conditions' || cleanPath === '/terms' || cleanPath === '/terms-and-conditions' || cleanPath === '/terms-conditions-2') {
    return [{ label: 'Terms & Conditions' }];
  }
  if (cleanPath === '/privacy-policy' || cleanPath === '/privacy') {
    return [{ label: 'Privacy Policy' }];
  }

  // 7. Generic Segment Fallback for any other custom subpaths
  const segments = cleanPath.replace(/^\/+/, '').split('/').filter(Boolean);
  if (segments.length === 0) return [];

  let accumulatedPath = '';
  return segments.map((seg, idx) => {
    accumulatedPath += `/${seg}`;
    const isLast = idx === segments.length - 1;
    const humanLabel = seg
      .replace(/-/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase());

    return {
      label: humanLabel,
      ...(isLast ? {} : { href: accumulatedPath })
    };
  });
}

/**
 * Hook to inspect the active breadcrumb trail dynamically.
 */
export function useBreadcrumbs(overrideItems?: BreadcrumbItem[], options?: { includeDestination?: boolean }) {
  const { currentPath } = useRouter();

  const items = useMemo(() => {
    if (overrideItems && overrideItems.length > 0) {
      return overrideItems;
    }
    return resolveBreadcrumbsFromPath(currentPath, options);
  }, [overrideItems, currentPath, options?.includeDestination]);

  const parentPage = items.length > 1 ? items[items.length - 2] : items[0] || null;
  const currentPage = items.length > 0 ? items[items.length - 1] : null;

  return {
    items,
    parentPage,
    currentPage,
    currentPath
  };
}

/**
 * Dynamic Breadcrumb Navigation Component.
 * Automatically mirrors the user's location in the site hierarchy,
 * giving instant 1-click trace back navigation to Home, Categories,
 * Destinations, or Catalogs.
 */
export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items: explicitItems,
  homeLabel = 'Home',
  className = '',
  enableSchema = true,
  showBackButton = false,
  backButtonLabel = 'Back',
  backButtonHref,
  includeDestination = true,
  variant = 'default'
}) => {
  const { currentPath, navigate } = useRouter();

  // Dynamically derive items if not explicitly provided
  const items = useMemo(() => {
    if (explicitItems && explicitItems.length > 0) {
      return explicitItems;
    }
    return resolveBreadcrumbsFromPath(currentPath, { includeDestination });
  }, [explicitItems, currentPath, includeDestination]);

  // Do not render breadcrumbs on homepage or if no items exist
  if (!items || items.length === 0) {
    return null;
  }

  // Parent item for Back button action
  const parentItem = items.length > 1 ? items[items.length - 2] : { label: homeLabel, href: '/' };

  const handleBack = () => {
    if (backButtonHref) {
      navigate(backButtonHref);
    } else if (parentItem && parentItem.href) {
      navigate(parentItem.href);
    } else if (typeof window !== 'undefined' && window.history.length > 1) {
      window.history.back();
    } else {
      navigate('/');
    }
  };

  // Construct JSON-LD breadcrumb schema
  const schemaData = enableSchema
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: homeLabel,
            item: 'https://genuineegypte.com/'
          },
          ...items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 2,
            name: item.label,
            ...(item.href
              ? { item: `https://genuineegypte.com${item.href.startsWith('/') ? item.href : `/${item.href}`}` }
              : {})
          }))
        ]
      }
    : null;

  const containerClasses =
    variant === 'card'
      ? 'bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg px-4 py-2.5 shadow-xs'
      : variant === 'minimal'
      ? 'py-1'
      : 'py-2.5';

  return (
    <>
      {schemaData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      )}

      <nav
        aria-label="Breadcrumb"
        className={`text-xs text-stone-500 dark:text-stone-400 overflow-x-auto scrollbar-none flex items-center gap-3 ${containerClasses} ${className}`}
      >
        {/* Optional Quick Back Button */}
        {showBackButton && (
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-stone-700 dark:text-stone-300 hover:text-amber-800 dark:hover:text-amber-400 bg-stone-100 hover:bg-stone-200 dark:bg-stone-800/80 dark:hover:bg-stone-800 font-medium text-xs transition-colors shrink-0 focus:outline-none focus:ring-1 focus:ring-amber-500"
            title={`Return to ${parentItem.label || 'previous page'}`}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{backButtonLabel}</span>
          </button>
        )}

        <ol
          itemScope
          itemType="https://schema.org/BreadcrumbList"
          className="flex items-center flex-wrap gap-1.5 list-none p-0 m-0 whitespace-nowrap min-w-0"
        >
          {/* Home Link */}
          <li
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
            className="flex items-center shrink-0"
          >
            <Link
              to="/"
              itemProp="item"
              className="inline-flex items-center gap-1.5 text-stone-600 dark:text-stone-400 hover:text-amber-800 dark:hover:text-amber-400 transition-colors focus:outline-none focus:underline"
              title="Return to Genuine Egypte Homepage"
            >
              <Home className="w-3.5 h-3.5 text-stone-400 dark:text-stone-500 shrink-0" />
              <span itemProp="name" className="font-medium">{homeLabel}</span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>

          {/* Subsequent Hierarchy Levels */}
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            const position = index + 2;

            return (
              <React.Fragment key={`${item.label}-${index}`}>
                <li
                  aria-hidden="true"
                  className="text-stone-300 dark:text-stone-700 select-none flex items-center shrink-0"
                >
                  <ChevronRight className="w-3.5 h-3.5 shrink-0 text-stone-400 dark:text-stone-600" />
                </li>

                <li
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/ListItem"
                  className="flex items-center min-w-0"
                >
                  {isLast || !item.href ? (
                    <span
                      itemProp="name"
                      className="text-stone-900 dark:text-stone-100 font-semibold truncate max-w-[170px] sm:max-w-xs md:max-w-md lg:max-w-xl inline-block"
                      aria-current="page"
                      title={item.title || item.label}
                    >
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      to={item.href}
                      itemProp="item"
                      className="text-stone-600 dark:text-stone-400 hover:text-amber-800 dark:hover:text-amber-400 transition-colors truncate max-w-[150px] sm:max-w-xs inline-block focus:outline-none focus:underline font-normal"
                      title={item.title || item.label}
                    >
                      <span itemProp="name">{item.label}</span>
                    </Link>
                  )}
                  <meta itemProp="position" content={String(position)} />
                </li>
              </React.Fragment>
            );
          })}
        </ol>
      </nav>
    </>
  );
};
