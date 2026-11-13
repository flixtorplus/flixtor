import type { Metadata, Viewport } from "next";
import Script from 'next/script';

const SITE_URL = "https://flixtor.plus";

// Global Layout Viewport configurations for mobile responsiveness
export const viewport: Viewport = {
  themeColor: "#06080C",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// Enhanced SEO Metadata optimized for Movie Reviews, TV Shows & Entertainment News
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Movie Reviews & TV Show News",
    template: "%s | FlixTor",
  },
  description: "Read expert movie reviews, TV show breakdowns, and the latest entertainment news. Discover what to watch next with our in-depth film analysis and streaming guides.",
  keywords: [
    "movie reviews",
    "tv show reviews",
    "film critiques",
    "entertainment news",
    "series breakdowns",
    "what to watch",
    "streaming guides",
    "cinema analysis",
    "film recommendations",
    "best movies",
    "tv series reviews",
    "movie news",
    "hollywood updates",
    "film industry",
    "flixtor blog",
    "FlixTor",
  ],
  alternates: {
    canonical: `${SITE_URL}/blog`,
    languages: {
      "en-US": `${SITE_URL}/blog`,
      "x-default": `${SITE_URL}/blog`,
    },
  },
  openGraph: {
    title: "Movie Reviews & TV Show News",
    description: "Expert movie reviews, TV show breakdowns, and entertainment news. Find your next favorite film or series with our in-depth analysis.",
    url: `${SITE_URL}/blog`,
    siteName: "FlixTor Blog",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/img/cover.webp",
        width: 1200,
        height: 630,
        alt: "Movie Reviews and TV Show News - FlixTor Blog",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Movie Reviews & TV Show News",
    description: "Expert movie reviews, TV show breakdowns, and entertainment news. Discover what to watch next with our film analysis.",
    images: ["/img/cover.webp"],
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
  classification: "Movie Reviews, TV Show Reviews, Entertainment News, Film Analysis",
  authors: [{ name: "FlixTor Editorial Team" }],
  creator: "FlixTor",
  publisher: "FlixTor",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

// Breadcrumb structured data
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
      "name": "Blog",
      "item": `${SITE_URL}/blog`,
    },
  ],
};

// Blog Schema for Movie Reviews, TV Shows & Entertainment
const blogSeriesJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${SITE_URL}/blog`,
  name: "FlixTor Blog - Movie Reviews & TV Show News",
  url: `${SITE_URL}/blog`,
  description: "Read expert movie reviews, TV show breakdowns, and the latest entertainment news. Discover what to watch next with our in-depth film analysis and streaming guides.",
  about: {
    "@type": "Thing",
    name: "Movie and TV Show Reviews",
    description: "Comprehensive movie reviews, TV show breakdowns, and entertainment news coverage",
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
      url: "/img/cover.webp",
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
};

// Website schema
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "FlixTor - Movie Reviews & TV Show News",
  description: "Expert movie reviews, TV show breakdowns, and entertainment news. Find your next favorite film or series.",
  publisher: {
    "@type": "Organization",
    name: "FlixTor",
    logo: {
      "@type": "ImageObject",
      url: "/img/cover.webp",
    },
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

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        id="blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSeriesJsonLd) }}
        strategy="afterInteractive"
      />

      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        strategy="afterInteractive"
      />

      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      <link rel="alternate" type="application/rss+xml" title="FlixTor Blog RSS Feed" href="/blog/feed.xml" />
      <link rel="preconnect" href="https://image.tmdb.org" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://image.tmdb.org" />

      <div>
        {children}
      </div>
    </>
  );
}