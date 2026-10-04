import React, { useEffect } from 'react';

export interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogType?: 'website' | 'article' | 'product';
  keywords?: string;
  robots?: string;
  author?: string;
  productData?: {
    price?: string;
    currency?: string;
    availability?: string;
  };
  jsonLd?: Record<string, any> | Array<Record<string, any>>;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalPath = '',
  ogImage = '/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg',
  ogImageAlt,
  ogType = 'website',
  keywords,
  robots = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  author = 'Genuine Egypte (Licensed Egyptologist Guides & Nile Cruises)',
  productData,
  jsonLd
}) => {
  useEffect(() => {
    // 1. Page Title
    const formattedTitle = title.includes('Genuine Egypte') ? title : `${title} | Genuine Egypte`;
    document.title = formattedTitle;

    // Helper to get or create a <meta> tag
    const setMetaTag = (attributeName: string, attributeValue: string, content: string | undefined) => {
      if (!content) return;
      let meta = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attributeName, attributeValue);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // 2. Standard Meta Description & Indexing Directives (Ensuring full indexing & rich snippets)
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'robots', robots);
    setMetaTag('name', 'googlebot', robots);
    setMetaTag('name', 'bingbot', robots);
    setMetaTag('name', 'author', author);
    if (keywords) {
      setMetaTag('name', 'keywords', keywords);
    }

    // 3. Canonical URL
    const normalizedPath = canonicalPath 
      ? (canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`)
      : (window.location.pathname || '/');
    const fullUrl = `https://genuineegypte.com${normalizedPath}`;
    
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);

    // 4. Open Graph Tags
    const fullOgImage = ogImage.startsWith('http') ? ogImage : `https://genuineegypte.com${ogImage.startsWith('/') ? ogImage : `/${ogImage}`}`;
    setMetaTag('property', 'og:title', formattedTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', fullUrl);
    setMetaTag('property', 'og:image', fullOgImage);
    setMetaTag('property', 'og:image:alt', ogImageAlt || title);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:site_name', 'Genuine Egypte');
    setMetaTag('property', 'og:locale', 'en_US');

    // Product-specific OpenGraph tags if applicable
    if (ogType === 'product' && productData) {
      setMetaTag('property', 'product:price:amount', productData.price || '95');
      setMetaTag('property', 'product:price:currency', productData.currency || 'USD');
      setMetaTag('property', 'product:availability', productData.availability || 'in stock');
    }

    // 5. Twitter / X Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', formattedTitle);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', fullOgImage);
    setMetaTag('name', 'twitter:image:alt', ogImageAlt || title);
    setMetaTag('name', 'twitter:site', '@genuineegypte');

    // 6. Schema.org JSON-LD Script Injection in document.head
    if (jsonLd) {
      let script = document.getElementById('seo-structured-data') as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement('script');
        script.id = 'seo-structured-data';
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    }
  }, [title, description, canonicalPath, ogImage, ogImageAlt, ogType, keywords, robots, author, productData, jsonLd]);

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </>
  );
};
