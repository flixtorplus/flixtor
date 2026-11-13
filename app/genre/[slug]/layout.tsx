import { Metadata } from 'next';
import { getGenres } from '@/lib/tmdb';

const SITE_URL = "https://flixtor.plus";

interface GenrePageProps {
  params: Promise<{ genreId: string }>;
}

export async function generateMetadata({ params }: GenrePageProps): Promise<Metadata> {
  const { genreId } = await params;

  let genreName = 'Movies';

  try {
    const genres = await getGenres();
    const genre = genres.find(g => g.id.toString() === genreId);
    genreName = genre?.name || 'Movies';
  } catch (error) {
    genreName = 'Movies';
  }

  const title = `Watch Best ${genreName} Movies - Online Free HD | FlixTor`;
  const description = `Explore the best ${genreName} Movies & TV Shows on FlixTor. Discover top-rated, popular, and latest ${genreName} films. Find your next favorite ${genreName.toLowerCase()} movie to watch tonight.`;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords: [
      `${genreName} movies`,
      `${genreName} films`,
      `best ${genreName} movies`,
      `top ${genreName} films`,
      `${genreName} genre`,
      `${genreName} flixtor`,
      'movie database',
      'film discovery',
      'FlixTor',
    ],
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/genre/${genreId}`,
      siteName: 'FlixTor',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: '/img/logo.png',
          width: 1200,
          height: 630,
          alt: `${genreName} Movies - Watch on FlixTor`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/img/logo.png'],
      creator: '@flixtor',
      site: '@flixtor',
    },
    alternates: {
      canonical: `${SITE_URL}/genre/${genreId}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function GenreLayout({ children }: { children: React.ReactNode }) {
  return children;
}