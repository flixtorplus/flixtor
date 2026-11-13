import { Metadata } from 'next';

const SITE_URL = "https://flixtor.plus";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'My Library | Watchlist, Favorites & History',
  description: 'Manage your personal watchlist, favorite titles, and recently watched tracking history all in one secure destination.',
  keywords: [
    'watchlist',
    'favorites',
    'recently watched',
    'movie library',
    'personal collection',
    'saved movies',
    'FlixTor',
  ],
  openGraph: {
    title: 'My Library | FlixTor',
    description: 'Manage your watchlist, favorites, and recently watched movies. Your personal movie collection all in one place.',
    url: `${SITE_URL}/library`,
    siteName: 'FlixTor',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Library | FlixTor',
    description: 'Manage your watchlist, favorites, and recently watched movies.',
    creator: '@flixtor',
    site: '@flixtor',
  },
  alternates: {
    canonical: `${SITE_URL}/library`,
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function LibraryLayout({ children }: { children: React.ReactNode }) {
  return children;
}