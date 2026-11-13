import { Metadata } from "next";
import { fetchPersonDetails, fetchPersonCredits } from "@/lib/tmdb";
import PersonDetail from "@/components/PersonDetail";
import { notFound } from "next/navigation";

const SITE_URL = "https://flixtor.plus";

// ========== GENERATE METADATA WITH FULL SEO ==========
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const id = slug.split("-").pop();
  if (!id) return {};

  const person = await fetchPersonDetails(id);
  if (!person) return {};

  const name = person.name || "Editor";
  const role = "Editor";

  let knownFor = "";
  let recentCredits = "";

  try {
    const credits = await fetchPersonCredits(id);
    if (credits && credits.cast) {
      const cast = credits.cast || [];
      const sortedCast = [...cast].sort(
        (a, b) => (b.popularity || 0) - (a.popularity || 0)
      );
      const topCredits = sortedCast.slice(0, 3);
      knownFor = topCredits
        .map((item: any) => item.title || item.name)
        .join(", ");

      const recentCast = sortedCast.slice(0, 5);
      recentCredits = recentCast
        .map((item: any) => item.title || item.name)
        .join(", ");
    }
  } catch (error) {
    console.error("Error fetching credits for SEO:", error);
  }

  const description = person.biography
    ? person.biography.substring(0, 160)
    : `Discover movies and TV shows edited by ${name}. View the complete filmography, biography, and latest projects of editor ${name} on FlixTor.`;

  const keywords = [
    name,
    `${name} movies`,
    `${name} TV shows`,
    `${name} editor`,
    `${name} filmography`,
    `${name} biography`,
    `${name} FlixTor`,
    ...(knownFor ? knownFor.split(", ") : []),
    ...(recentCredits ? recentCredits.split(", ") : []),
    "editor",
    "editing",
    "movies",
    "TV shows",
    "filmography",
    "streaming",
    "FlixTor",
  ];

  const image = person.profile_path
    ? `https://image.tmdb.org/t/p/original${person.profile_path}`
    : `${SITE_URL}/img/og-image.jpg`;

  return {
    metadataBase: new URL(SITE_URL),
    title: `${name} - Editor | Movies & TV Shows | FlixTor`,
    description: description,
    keywords: keywords,
    authors: [{ name: "FlixTor" }],
    creator: "FlixTor",
    publisher: "FlixTor",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `${SITE_URL}/editor/${slug}`,
    },
    openGraph: {
      title: `${name} - Editor | Movies & TV Shows | FlixTor`,
      description: description,
      url: `${SITE_URL}/editor/${slug}`,
      siteName: "FlixTor",
      type: "profile",
      images: [
        {
          url: image,
          width: 780,
          height: 780,
          alt: `${name} - Editor profile photo`,
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${name} - Editor | Movies & TV Shows | FlixTor`,
      description: description,
      images: [image],
      site: "@flixtor",
      creator: "@flixtor",
    },
    other: {
      "person:name": name,
      "person:role": role,
      "person:known_for": knownFor,
    },
  };
}

// ========== MAIN EDITOR PAGE ==========
export default async function EditorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const id = slug.split("-").pop();
  if (!id) return notFound();

  const person = await fetchPersonDetails(id);
  if (!person) return notFound();

  return <PersonDetail />;
}