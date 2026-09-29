import React from 'react';
import { Link } from '../utils/router';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  homeLabel?: string;
  className?: string;
  enableSchema?: boolean;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  homeLabel = 'Home',
  className = '',
  enableSchema = true
}) => {
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
        className={`text-xs text-stone-500 dark:text-stone-400 py-2.5 overflow-x-auto scrollbar-none ${className}`}
      >
        <ol
          itemScope
          itemType="https://schema.org/BreadcrumbList"
          className="flex items-center flex-wrap gap-1.5 list-none p-0 m-0 whitespace-nowrap"
        >
          {/* Home Link */}
          <li
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
            className="flex items-center"
          >
            <Link
              to="/"
              itemProp="item"
              className="inline-flex items-center gap-1 text-stone-600 dark:text-stone-400 hover:text-amber-800 dark:hover:text-amber-400 transition-colors focus:outline-none focus:underline"
            >
              <Home className="w-3.5 h-3.5 text-stone-400 dark:text-stone-500 shrink-0" />
              <span itemProp="name">{homeLabel}</span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>

          {/* Subsequent Breadcrumb Items */}
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            const position = index + 2;

            return (
              <React.Fragment key={index}>
                <li
                  aria-hidden="true"
                  className="text-stone-300 dark:text-stone-700 select-none flex items-center"
                >
                  <ChevronRight className="w-3.5 h-3.5 shrink-0" />
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
                      className="text-stone-900 dark:text-stone-100 font-semibold truncate max-w-[220px] sm:max-w-md lg:max-w-xl inline-block"
                      aria-current="page"
                      title={item.label}
                    >
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      to={item.href}
                      itemProp="item"
                      className="text-stone-600 dark:text-stone-400 hover:text-amber-800 dark:hover:text-amber-400 transition-colors truncate max-w-[180px] sm:max-w-xs inline-block focus:outline-none focus:underline"
                      title={item.label}
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
