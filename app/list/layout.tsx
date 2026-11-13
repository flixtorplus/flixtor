import type { Metadata, Viewport } from "next";
import Script from 'next/script';

const SITE_URL = "https://flixtor.plus";

export const viewport: Viewport = {
  themeColor: "#06080C",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// Enhanced SEO Metadata optimized for Movie & TV Show Lists
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "FlixTor Lists | Curated Movie & TV Show Collections",
    template: "%s | FlixTor Lists",
  },
  description: "Explore expertly curated movie and TV show lists on FlixTor. From mind-bending thrillers to heartwarming dramas, discover your next favorite film or series collection.",
  keywords: [
    "movie lists",
    "TV show lists",
    "curated collections",
    "FlixTor lists",
    "best films",
    "movie recommendations",
    "TV series collections",
    "movie collections",
    "curated movie lists",
    "must-watch movies",
    "film collections",
    "streaming guides",
    "movie categories",
    "TV show recommendations",
    "cinematic collections",
    "FlixTor",
  ],
  alternates: {
    canonical: `${SITE_URL}/list`,
  },
  openGraph: {
    title: "FlixTor Lists | Curated Movie & TV Show Collections",
    description: "Explore expertly curated movie and TV show collections. Find your next favorite film or series with our handpicked lists.",
    url: `${SITE_URL}/list`,
    siteName: "FlixTor Lists",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/img/lists-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FlixTor Lists - Curated Movie & TV Show Collections",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FlixTor Lists | Curated Movie & TV Show Collections",
    description: "Explore expertly curated movie and TV show collections. Find your next favorite film or series.",
    images: ["/img/lists-og-image.jpg"],
    creator: "@flixtor",
    site: "@flixtor",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "entertainment",
  classification: "Movie Lists, TV Show Collections, Curated Entertainment",
  authors: [{ name: "FlixTor Editorial Team" }],
  creator: "FlixTor",
  publisher: "FlixTor",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

// Breadcrumb structured data for the lists index
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": `${SITE_URL}/`,
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Lists",
      "item": `${SITE_URL}/list`,
    },
  ],
};

// Lists Schema with detailed organization and site navigation
const listsSeriesJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${SITE_URL}/list`,
  name: "FlixTor Lists",
  url: `${SITE_URL}/list`,
  description: "Expertly curated movie and TV show collections. Discover handpicked lists of the best films, series, and cinematic experiences.",
  about: {
    "@type": "Thing",
    name: "Movie and TV Show Collections",
    description: "Curated collections of the best movies and TV shows across all genres and eras",
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [],
  },
  publisher: {
    "@type": "Organization",
    name: "FlixTor",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/img/logo.png`,
      width: 200,
      height: 60,
    },
    sameAs: [
      "https://twitter.com/flixtor",
      "https://facebook.com/flixtor",
      "https://instagram.com/flixtor",
    ],
  },
  inLanguage: "en-US",
  isAccessibleForFree: true,
  copyrightHolder: {
    "@type": "Organization",
    name: "FlixTor",
  },
  copyrightYear: new Date().getFullYear(),
  lastReviewed: new Date().toISOString().split("T")[0],
  reviewedBy: {
    "@type": "Organization",
    name: "FlixTor Editorial Team",
  },
  significantLink: `${SITE_URL}/list`,
  significantLinks: [
    SITE_URL,
    `${SITE_URL}/blog`,
    `${SITE_URL}/library`,
  ],
};

// Website schema for better indexing
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "FlixTor",
  description: "Watch free movies and popular TV shows in HD. Expert reviews, curated lists, and streaming guides.",
  publisher: {
    "@type": "Organization",
    name: "FlixTor",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/search/{search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

// List Item Schema - Will be populated dynamically
const listItemJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "FlixTor Movie and TV Show Lists",
  description: "Curated collections of the best entertainment content",
  itemListElement: [],
};

export default function ListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        strategy="afterInteractive"
      />

      <Script
        id="lists-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listsSeriesJsonLd) }}
        strategy="afterInteractive"
      />

      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        strategy="afterInteractive"
      />

      <Script
        id="list-item-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listItemJsonLd) }}
        strategy="afterInteractive"
      />

      {/* Sitemap hint for search engines */}
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

      {/* Preconnect to external resources for faster loading */}
      <link rel="preconnect" href="https://image.tmdb.org" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://image.tmdb.org" />

      {/* Section Content Rendering Target Layer */}
      <div className="min-h-screen bg-[#06080C]">
        {children}
      </div>
    </>
  );
}