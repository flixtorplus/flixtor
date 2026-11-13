// app/[movieSlug]/layout.tsx
import { fetchMovieDetails } from "@/lib/tmdb";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ movieSlug: string }>;
};

const SITE_URL = "https://flixtor.plus";

// Generate dynamic metadata from API
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { movieSlug } = await params;
  const id = movieSlug.split("-").pop();

  if (!id) {
    return {
      title: "Movie Not Found | FlixTor",
      description: "The requested movie could not be found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  try {
    const movie = await fetchMovieDetails(id);

    if (!movie) {
      return {
        title: "Movie Not Found | FlixTor",
        description: "The requested movie could not be found",
        robots: {
          index: false,
          follow: false,
        },
      };
    }

    const canonicalUrl = `${SITE_URL}/${movieSlug}`;

    const ratingValue = movie.vote_average || 0;
    const ratingCount = movie.vote_count || 0;
    const releaseYear = movie.release_date?.split("-")[0] || "";
    const runtimeMinutes = movie.runtime || 0;

    let director = "";
    if (movie.id) {
      try {
        const { fetchMovieCrew } = await import("@/lib/tmdb");
        const crew = await fetchMovieCrew(id);
        const directorObj = crew.find((c: any) => c.job === "Director");
        if (directorObj) director = directorObj.name;
      } catch (error) {
        // Silent fail - director not critical for SEO
      }
    }

    const seoTitle = releaseYear
      ? `Watch ${movie.title} (${releaseYear})`
      : `Watch ${movie.title}`;
    const fullTitle = `${seoTitle} | FlixTor`;

    const genres = movie.genres?.map((g) => g.name).join(", ") || "";
    const description = movie.overview
      ? `${movie.overview.slice(0, 150)}...`
      : `Watch ${movie.title} (${releaseYear}) online free. ${genres} film with ${ratingValue.toFixed(1)}/10 rating. Stream in HD now on FlixTor.`;

    return {
      metadataBase: new URL(SITE_URL),
      title: fullTitle,
      description: description,
      keywords: [
        `watch ${movie.title} free online`,
        `${movie.title} full movie`,
        `${movie.title} ${releaseYear}`,
        `${movie.title} streaming`,
        `${movie.title} FlixTor`,
        ...(movie.genres?.map((g) => `${g.name.toLowerCase()} movie`) || []),
        "watch movies online free",
        "free movie streaming",
        "HD movies",
        "FlixTor",
      ],

      alternates: {
        canonical: canonicalUrl,
      },

      openGraph: {
        title: fullTitle,
        description: description,
        url: canonicalUrl,
        siteName: "FlixTor",
        images: movie.poster_path
          ? [
              {
                url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                width: 500,
                height: 750,
                alt: `${movie.title} poster`,
              },
            ]
          : [],
        locale: "en_US",
        type: "video.movie",
        ...(movie.release_date && { "movie:release_date": movie.release_date }),
        ...(runtimeMinutes && { "movie:runtime": runtimeMinutes }),
        ...(director && { "movie:director": director }),
      },

      twitter: {
        card: "summary_large_image",
        title: fullTitle,
        description:
          movie.overview?.slice(0, 160) ||
          `Watch ${movie.title} online free in HD on FlixTor.`,
        images: movie.poster_path
          ? [`https://image.tmdb.org/t/p/w500${movie.poster_path}`]
          : [],
        site: "@flixtor",
        creator: "@flixtor",
      },

      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },

      verification: {
        google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "",
      },

      category: "entertainment",
      classification: "Movie Database",
      authors: [{ name: "FlixTor", url: SITE_URL }],
      creator: "FlixTor",
      publisher: "FlixTor",

      appleWebApp: {
        title: `${movie.title} - FlixTor`,
        statusBarStyle: "black-translucent",
        capable: true,
      },

      other: {
        "rating:value": ratingValue.toString(),
        "rating:count": ratingCount.toString(),
        "rating:best": "10",
        "rating:worst": "0",
        "release:date": movie.release_date || "",
        "content:language": movie.original_language || "en",
        ...(movie.status && { "movie:status": movie.status }),
        ...(movie.original_title &&
          movie.original_title !== movie.title && {
            "original:title": movie.original_title,
          }),
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Movie | FlixTor",
      description: "Watch movies online with ratings and reviews",
      robots: {
        index: true,
        follow: true,
      },
    };
  }
}

export default function MovieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}