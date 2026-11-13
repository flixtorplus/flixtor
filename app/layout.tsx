import type { Metadata, Viewport } from "next";
import { Inter, Montserrat, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Loading from "@/components/Loading";
import AdsterraPopunder from "@/components/AdsterraPopunder";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const SITE_URL = "https://flixtor.plus";

/* ------------------------------------------------------------------
   SHARED SOCIAL IMAGE
   Used for:
     - Open Graph (Telegram, Facebook, WhatsApp, Discord, Slack, iMessage, LinkedIn)
     - Twitter Card
     - Google search results thumbnail (Google reads og:image)
   Requirements for Google to actually display it:
     * absolute URL, publicly reachable
     * recommended 1200x630 (min 300x200)
     * not blocked by robots.txt
------------------------------------------------------------------ */
const SOCIAL_IMAGE = `${SITE_URL}/img/og-image.png`;
const SOCIAL_IMAGE_WIDTH = 1200;
const SOCIAL_IMAGE_HEIGHT = 630;
const SOCIAL_IMAGE_ALT = "FlixTor — Watch Free Movies & Popular TV Shows in Full HD";

export const viewport: Viewport = {
  themeColor: "#06080C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "FlixTor - Watch Free Movies & Popular TV Shows Full HD",
    template: "%s | FlixTor",
  },

  description:
    "Watch free movies and TV shows in Full HD on FlixTor. Stream the latest titles online, no cost, no limits.",

  keywords: [
    // PRIMARY BRAND
    "FlixTor",
    "flixtor.plus",
    "FlixTor movies",
    "FlixTor TV shows",

    // SECONDARY
    "popular TV shows",
    "Full HD movies",
    "free movie streaming",
    "watch movies online free",

    // TERTIARY
    "free movies Full HD",
    "watch TV shows Full HD",
    "HD streaming",
    "free entertainment",
  ],

  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-US": SITE_URL,
      "x-default": SITE_URL,
    },
  },

  authors: [{ name: "FlixTor Team" }],
  creator: "FlixTor",
  publisher: "FlixTor",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large", // <-- REQUIRED for Google to show big thumbnail in results
      "max-snippet": -1,
    },
  },

  /* ---------------- OPEN GRAPH (Telegram, FB, WhatsApp, Discord, etc.) ---------------- */
  openGraph: {
    title: "FlixTor - Watch Free Movies & Popular TV Shows Full HD",
    description:
      "FlixTor is a free streaming platform to watch movies and TV shows in Full HD. Stream the latest FlixTor content online with no sign-up required.",
    url: SITE_URL,
    siteName: "FlixTor",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: SOCIAL_IMAGE,
        secureUrl: SOCIAL_IMAGE,
        width: SOCIAL_IMAGE_WIDTH,
        height: SOCIAL_IMAGE_HEIGHT,
        alt: SOCIAL_IMAGE_ALT,
        type: "image/jpeg",
      },
    ],
  },

  /* ---------------- TWITTER / X CARD ---------------- */
  twitter: {
    card: "summary_large_image",
    title: "FlixTor - Watch Free Movies & Popular TV Shows Full HD",
    description:
      "FlixTor is the best platform for free movies and TV shows in Full HD. No sign-up required.",
    images: [SOCIAL_IMAGE],
    creator: "@flixtor",
    site: "@flixtor",
  },

  /* ---------------- GOOGLE SEARCH THUMBNAIL ----------------
     Google also accepts a secondary image via "other" — safe to add
     even though og:image is the primary source.
  ----------------------------------------------------------- */
  other: {
    "og:image:secure_url": SOCIAL_IMAGE,
    "og:image:type": "image/jpeg",
    "og:image:width": String(SOCIAL_IMAGE_WIDTH),
    "og:image:height": String(SOCIAL_IMAGE_HEIGHT),
    "og:image:alt": SOCIAL_IMAGE_ALT,
  },

  icons: {
    icon: [
      { url: "/img/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/img/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/img/favicons/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/img/favicons/favicon-64x64.png", sizes: "64x64", type: "image/png" },
      { url: "/img/favicons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/img/favicons/favicon-128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/img/favicons/favicon-256x256.png", sizes: "256x256", type: "image/png" },
      { url: "/img/favicons/android-chrome-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/img/favicons/android-chrome-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/img/favicons/android-chrome-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/img/favicons/android-chrome-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/img/favicons/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/img/favicons/android-chrome-256x256.png", sizes: "256x256", type: "image/png" },
      { url: "/img/favicons/android-chrome-384x384.png", sizes: "384x384", type: "image/png" },
      { url: "/img/favicons/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/img/favicons/apple-touch-icon-57x57.png", sizes: "57x57", type: "image/png" },
      { url: "/img/favicons/apple-touch-icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/img/favicons/apple-touch-icon-114x114.png", sizes: "114x114", type: "image/png" },
      { url: "/img/favicons/apple-touch-icon-120x120.png", sizes: "120x120", type: "image/png" },
      { url: "/img/favicons/apple-touch-icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/img/favicons/apple-touch-icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/img/favicons/apple-touch-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/img/favicons/safari-pinned-tab.svg" },
      { rel: "shortcut icon", url: "/img/favicons/favicon.ico" },
    ],
  },

  manifest: "/img/favicons/site.webmanifest",
  verification: {
    google: "your-google-verification-code",
  },

  category: "entertainment",
  appleWebApp: {
    title: "FlixTor - Full HD Movies & TV",
    statusBarStyle: "black-translucent",
    capable: true,
  },
  applicationName: "FlixTor",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "FlixTor - Free Movies & Popular TV Shows Full HD",
    alternateName: "FlixTor Movies | Best Full HD Streaming Site",
    url: SITE_URL,
    description:
      "FlixTor is a free streaming platform to watch movies and TV shows in Full HD. Stream the latest FlixTor content online with no sign-up required.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    sameAs: [
      "https://twitter.com/flixtor",
      "https://instagram.com/flixtor",
      "https://facebook.com/flixtor",
      "https://tiktok.com/@flixtor",
      "https://youtube.com/@flixtor",
    ],
    inLanguage: "en-US",
    copyrightYear: currentYear,
    copyrightHolder: {
      "@type": "Organization",
      name: "FlixTor",
      url: SITE_URL,
    },
  };

  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FlixTor - Free Full HD Movies & TV Shows",
    alternateName: "FlixTor",
    url: SITE_URL,
    logo: `${SITE_URL}/img/og-image.png`,
    image: SOCIAL_IMAGE,
    description:
      "FlixTor is the best free streaming platform for movies and popular TV shows in Full HD.",
    sameAs: [
      "https://twitter.com/flixtor",
      "https://instagram.com/flixtor",
      "https://facebook.com/flixtor",
      "https://tiktok.com/@flixtor",
      "https://youtube.com/@flixtor",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "contact@flixtor.plus",
      contactType: "customer service",
      availableLanguage: ["English"],
    },
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} ${dmSans.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://image.tmdb.org" />
        <link rel="preconnect" href="https://api.themoviedb.org" />
        <link rel="dns-prefetch" href="https://image.tmdb.org" />
        <link rel="dns-prefetch" href="https://api.themoviedb.org" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        <link
          rel="alternate"
          type="application/rss+xml"
          title="FlixTor RSS Feed"
          href="/feed.xml"
        />
        <link rel="preload" as="image" href="/img/og-image.png" fetchPriority="high" />

        {/* Preload the OG / Google results image so it's cached everywhere */}
        <link
          rel="preload"
          as="image"
          href="/img/og-image.png"
          fetchPriority="low"
        />

        <meta name="msapplication-TileColor" content="#01FAFD" />
        <meta name="msapplication-TileImage" content="/img/favicons/mstile-144x144.png" />
        <meta name="msapplication-config" content="/img/favicons/browserconfig.xml" />

        <meta
          httpEquiv="Strict-Transport-Security"
          content="max-age=63072000; includeSubDomains; preload"
        />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
      </head>
      <body className="font-sans antialiased bg-[#06080C] text-white">
        <Script
          src="https://www.googletagmanager.com/gtm.js?id=GTM-MVBTKVLW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GMXNZNXN2X');
          `}
        </Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />

        {/* Fullscreen overlay — sits ON TOP of real page content */}
        <Loading />

        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[250] focus:px-4 focus:py-2 focus:bg-[#01FAFD] focus:text-[#06080C] focus:rounded-lg focus:font-bold"
        >
          Skip to content
        </a>
        <Navbar />

        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <AdsterraPopunder />
        <Footer />
      </body>
    </html>
  );
}