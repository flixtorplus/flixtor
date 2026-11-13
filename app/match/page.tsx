import { Metadata } from 'next';
import { MovieMatchClient } from '@/components/MovieMatchClient';

const SITE_URL = "https://flixtor.plus";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Movie Match - Find Your Perfect Movie Tonight | FlixTor',
  description: 'Answer a few quick questions and let our intelligent algorithm find the perfect movie to watch tonight. Personalized recommendations based on your mood, genre preferences, and viewing habits.',
  keywords: [
    'movie match',
    'find movie to watch',
    'movie recommendation',
    'what to watch tonight',
    'movie quiz',
    'personalized movie suggestions',
    'AI movie finder',
    'film discovery',
    'cinema matcher',
    'movie decision helper',
    'FlixTor',
  ],
  openGraph: {
    title: 'Movie Match | Find Your Perfect Movie Tonight',
    description: 'Answer 5-9 quick questions and let our intelligent algorithm find the perfect movie for your mood. Personalized recommendations in seconds.',
    url: `${SITE_URL}/match`,
    siteName: 'FlixTor',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/img/logo.png',
        width: 1200,
        height: 630,
        alt: 'FlixTor Movie Match - Find Your Perfect Film',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Movie Match | Find Your Perfect Movie Tonight',
    description: 'Answer a few questions and get personalized movie recommendations instantly.',
    images: ['/img/logo.png'],
    creator: '@flixtor',
    site: '@flixtor',
  },
  alternates: {
    canonical: `${SITE_URL}/match`,
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
  applicationName: 'FlixTor',
  category: 'entertainment',
};

export default function MatchPage() {
  return <MovieMatchClient />;
}