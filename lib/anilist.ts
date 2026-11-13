// lib/anilist.ts
// FlixTor — AniList client
// All original export names and signatures preserved.
// Fixes applied: release-date integrity, HTML entity decoding, trailer URL,
// relation filtering, recommendation null-safety, 429 retry, consistent fields.

const ANILIST_API_URL = "https://graphql.anilist.co";

// ============================================
// Types (unchanged)
// ============================================

export interface Anime {
  id: number;
  title: string;
  original_title?: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  vote_count?: number;
  release_date: string;
  genres: string[];
  episodes?: number;
  duration?: number;
  status?: string;
  season?: string;
  studios?: string[];
  trailer?: string;
  media_type: "anime";
}

export interface AnimeCharacter {
  id: number;
  name: string;
  role: string;
  image: string;
}

export interface AnimeStudio {
  id: number;
  name: string;
}

export interface AnimeRecommendation {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

// ============================================
// GraphQL helper — retry on 429, never throws
// ============================================

async function anilistFetch<T = any>(
  query: string,
  variables: Record<string, unknown> = {},
  revalidate: number = 3600,
): Promise<T | null> {
  try {
    const res = await fetch(ANILIST_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ query, variables }),
      next: { revalidate },
    });

    // Rate limited — retry once with backoff
    if (res.status === 429) {
      const retryAfter = Number(res.headers.get("retry-after") ?? "2");
      await new Promise((r) => setTimeout(r, Math.min(retryAfter, 10) * 1000));
      return anilistFetch<T>(query, variables, revalidate);
    }

    if (!res.ok) {
      console.warn(`[anilist] HTTP ${res.status}`);
      return null;
    }

    const json = await res.json();
    if (json.errors) {
      console.warn("[anilist]", json.errors[0]?.message ?? "unknown error");
      return null;
    }
    return (json.data ?? null) as T | null;
  } catch (err) {
    console.error("[anilist] fetch failed", err);
    return null;
  }
}

// ============================================
// Shared GraphQL field fragment
// One field set used by every list query, so returned data
// has identical shape no matter which function produced it.
// ============================================

const MEDIA_FIELDS = `
  id
  title { romaji english native }
  description
  coverImage { large extraLarge }
  bannerImage
  averageScore
  popularity
  genres
  episodes
  duration
  status
  season
  seasonYear
  startDate { year month day }
  trailer { id site }
  studios(isMain: true) { nodes { id name } }
`;

const LIST_QUERY = `
  query (
    $page: Int
    $perPage: Int
    $sort: [MediaSort]
    $status: MediaStatus
    $season: MediaSeason
    $year: Int
    $search: String
    $genre: String
  ) {
    Page(page: $page, perPage: $perPage) {
      pageInfo { total currentPage hasNextPage }
      media(
        type: ANIME
        sort: $sort
        status: $status
        season: $season
        seasonYear: $year
        search: $search
        genre: $genre
        isAdult: false
      ) {
        ${MEDIA_FIELDS}
      }
    }
  }
`;

const HOMEPAGE_QUERY = `
  query ($season: MediaSeason, $year: Int) {
    trending: Page(page: 1, perPage: 20) {
      media(type: ANIME, sort: TRENDING_DESC, isAdult: false) { ${MEDIA_FIELDS} }
    }
    popular: Page(page: 1, perPage: 20) {
      media(type: ANIME, sort: POPULARITY_DESC, isAdult: false) { ${MEDIA_FIELDS} }
    }
    topRated: Page(page: 1, perPage: 20) {
      media(type: ANIME, sort: SCORE_DESC, isAdult: false) { ${MEDIA_FIELDS} }
    }
    seasonal: Page(page: 1, perPage: 20) {
      media(type: ANIME, season: $season, seasonYear: $year, sort: POPULARITY_DESC, isAdult: false) { ${MEDIA_FIELDS} }
    }
    upcoming: Page(page: 1, perPage: 20) {
      media(type: ANIME, status: NOT_YET_RELEASED, sort: POPULARITY_DESC, isAdult: false) { ${MEDIA_FIELDS} }
    }
    recent: Page(page: 1, perPage: 20) {
      media(type: ANIME, sort: ID_DESC, isAdult: false) { ${MEDIA_FIELDS} }
    }
  }
`;

const DETAILS_QUERY = `
  query ($id: Int) {
    Media(id: $id, type: ANIME) {
      ${MEDIA_FIELDS}
      endDate { year month day }
      trailer { id site thumbnail }
      characters(sort: ROLE, perPage: 10) {
        nodes { id name { full } image { large } }
      }
      recommendations(sort: RATING_DESC, perPage: 10) {
        nodes {
          mediaRecommendation {
            id
            title { romaji english }
            coverImage { large }
            averageScore
          }
        }
      }
      relations {
        nodes {
          id
          title { romaji english }
          coverImage { large }
          averageScore
          relationType
        }
      }
    }
  }
`;

// ============================================
// Transforms
// ============================================

/**
 * AniList descriptions contain <br>, <i>, <a>, and HTML entities.
 * Strip tags AND decode entities, and preserve word boundaries.
 */
function stripHtml(input?: string | null): string {
  if (!input) return "";
  return input
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<\/(p|div|li|h[1-6])>/gi, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/&quot;/g, '"')
    .replace(/&#0*39;|&apos;/g, "'")
    .replace(/&#0*39;|&#x27;/gi, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Builds an ISO date from AniList's startDate. If only the year is known
 * (very common for airing/upcoming anime), return just "YYYY" — never
 * a fabricated "YYYY-01-01".
 */
function buildReleaseDate(media: any): string {
  const sd = media?.startDate;
  if (sd?.year && sd?.month && sd?.day) {
    return `${sd.year}-${String(sd.month).padStart(2, "0")}-${String(sd.day).padStart(2, "0")}`;
  }
  if (sd?.year) return String(sd.year);
  if (media?.seasonYear) return String(media.seasonYear);
  return "";
}

/**
 * AniList trailers can be YouTube OR Dailymotion. Build the right URL.
 */
function buildTrailerUrl(trailer: any): string | undefined {
  if (!trailer?.id || !trailer?.site) return undefined;
  const site = String(trailer.site).toLowerCase();
  if (site === "youtube") return `https://www.youtube.com/watch?v=${trailer.id}`;
  if (site === "dailymotion") return `https://www.dailymotion.com/video/${trailer.id}`;
  return undefined;
}

/**
 * Convert an AniList Media node into the flattened Anime shape.
 * Safe against null/missing fields — used everywhere.
 */
function transformAnime(media: any): Anime {
  const title =
    media?.title?.english ||
    media?.title?.romaji ||
    media?.title?.native ||
    "Unknown";

  const extraLarge = media?.coverImage?.extraLarge;
  const large = media?.coverImage?.large;
  const banner = media?.bannerImage;

  return {
    id: media?.id ?? 0,
    title,
    original_title: media?.title?.romaji || media?.title?.native || undefined,
    overview: stripHtml(media?.description) || "No description available.",
    poster_path: extraLarge || large || "",
    backdrop_path: banner || extraLarge || "",
    vote_average: media?.averageScore ? media.averageScore / 10 : 0,
    vote_count: media?.popularity ?? 0,
    release_date: buildReleaseDate(media),
    genres: Array.isArray(media?.genres) ? media.genres : [],
    episodes: media?.episodes ?? undefined,
    duration: media?.duration ?? undefined,
    status: media?.status ?? undefined,
    season: media?.season ?? undefined,
    studios: Array.isArray(media?.studios?.nodes)
      ? media.studios.nodes.map((s: any) => s?.name).filter(Boolean)
      : [],
    trailer: buildTrailerUrl(media?.trailer),
    media_type: "anime",
  };
}

/**
 * Only these relation types point to actual anime. Others
 * (CHARACTER, ADAPTATION, OTHER) may be manga or characters and
 * would produce broken cards if transformed as anime.
 */
const ANIME_RELATION_TYPES = new Set([
  "SEQUEL",
  "PREQUEL",
  "SIDE_STORY",
  "SPIN_OFF",
  "ALTERNATIVE",
  "PARENT",
  "SUMMARY",
]);

// ============================================
// List functions — one shared query
// ============================================

async function fetchAnimeList(
  variables: Record<string, unknown>,
  revalidate?: number,
): Promise<Anime[]> {
  const data = await anilistFetch<{ Page: { media: any[] } }>(
    LIST_QUERY,
    variables,
    revalidate,
  );
  return (data?.Page?.media ?? []).filter(Boolean).map(transformAnime);
}

export async function fetchTrendingAnime(page: number = 1, perPage: number = 20): Promise<Anime[]> {
  return fetchAnimeList({ page, perPage, sort: ["TRENDING_DESC"] });
}

export async function fetchPopularAnime(page: number = 1, perPage: number = 20): Promise<Anime[]> {
  return fetchAnimeList({ page, perPage, sort: ["POPULARITY_DESC"] });
}

export async function fetchTopRatedAnime(page: number = 1, perPage: number = 20): Promise<Anime[]> {
  return fetchAnimeList({ page, perPage, sort: ["SCORE_DESC"] });
}

export async function fetchSeasonalAnime(
  season: string,
  year: number,
  page: number = 1,
  perPage: number = 20,
): Promise<Anime[]> {
  return fetchAnimeList({ page, perPage, season, year, sort: ["POPULARITY_DESC"] });
}

export async function fetchUpcomingAnime(page: number = 1, perPage: number = 20): Promise<Anime[]> {
  return fetchAnimeList({
    page,
    perPage,
    status: "NOT_YET_RELEASED",
    sort: ["POPULARITY_DESC"],
  });
}

export async function fetchRecentlyAddedAnime(page: number = 1, perPage: number = 20): Promise<Anime[]> {
  return fetchAnimeList({ page, perPage, sort: ["ID_DESC"] });
}

export async function searchAnime(query: string, page: number = 1, perPage: number = 20): Promise<Anime[]> {
  return fetchAnimeList({ search: query, page, perPage });
}

export async function fetchAnimeByGenre(genre: string, page: number = 1, perPage: number = 20): Promise<Anime[]> {
  return fetchAnimeList({ genre, page, perPage, sort: ["POPULARITY_DESC"] });
}

export async function fetchAnimeBySeason(
  season: string,
  year: number,
  page: number = 1,
  perPage: number = 20,
): Promise<Anime[]> {
  return fetchSeasonalAnime(season, year, page, perPage);
}

// ============================================
// Detail bundle — one query shared by all four wrappers
// ============================================

interface AnimeBundle {
  anime: Anime;
  characters: AnimeCharacter[];
  recommendations: Anime[];
  related: Anime[];
}

async function fetchAnimeBundle(id: string): Promise<AnimeBundle | null> {
  const numericId = Number(id);
  if (!Number.isFinite(numericId)) return null;

  const data = await anilistFetch<{ Media: any }>(DETAILS_QUERY, { id: numericId });
  const media = data?.Media;
  if (!media) return null;

  // Characters — safe map
  const characters: AnimeCharacter[] = Array.isArray(media.characters?.nodes)
    ? media.characters.nodes
        .filter((c: any) => c && c.id)
        .map((c: any) => ({
          id: c.id,
          name: c.name?.full || "Unknown",
          role: "Character",
          image: c.image?.large || "",
        }))
    : [];

  // Recommendations — filter nulls BEFORE transform
  const recommendations: Anime[] = Array.isArray(media.recommendations?.nodes)
    ? media.recommendations.nodes
        .map((rec: any) => rec?.mediaRecommendation)
        .filter(Boolean)
        .map(transformAnime)
    : [];

  // Relations — only real anime, by relationType
  const related: Anime[] = Array.isArray(media.relations?.nodes)
    ? media.relations.nodes
        .filter((n: any) => n && ANIME_RELATION_TYPES.has(n.relationType))
        .map(transformAnime)
    : [];

  return {
    anime: transformAnime(media),
    characters,
    recommendations,
    related,
  };
}

export async function fetchAnimeDetails(id: string): Promise<Anime | null> {
  const bundle = await fetchAnimeBundle(id);
  return bundle?.anime ?? null;
}

export async function fetchAnimeCharacters(id: string): Promise<AnimeCharacter[]> {
  const bundle = await fetchAnimeBundle(id);
  return bundle?.characters ?? [];
}

export async function fetchAnimeRecommendations(id: string): Promise<Anime[]> {
  const bundle = await fetchAnimeBundle(id);
  return bundle?.recommendations ?? [];
}

export async function fetchRelatedAnime(id: string): Promise<Anime[]> {
  const bundle = await fetchAnimeBundle(id);
  return bundle?.related ?? [];
}

// ============================================
// Season helpers (unchanged signature)
// ============================================

export function getCurrentSeason(): string {
  const month = new Date().getMonth();
  if (month >= 2 && month <= 4) return "SPRING";
  if (month >= 5 && month <= 7) return "SUMMER";
  if (month >= 8 && month <= 10) return "FALL";
  return "WINTER";
}

// ============================================
// Homepage — one aliased query, same return shape
// ============================================

export async function fetchAllAnimeSections(): Promise<{
  trending: Anime[];
  popular: Anime[];
  topRated: Anime[];
  seasonal: Anime[];
  upcoming: Anime[];
  recentlyAdded: Anime[];
}> {
  const currentSeason = getCurrentSeason();
  const currentYear = new Date().getFullYear();

  const data = await anilistFetch<Record<string, { media: any[] }>>(
    HOMEPAGE_QUERY,
    { season: currentSeason, year: currentYear },
  );

  const pick = (key: string): Anime[] =>
    (data?.[key]?.media ?? []).filter(Boolean).map(transformAnime);

  return {
    trending: pick("trending"),
    popular: pick("popular"),
    topRated: pick("topRated"),
    seasonal: pick("seasonal"),
    upcoming: pick("upcoming"),
    recentlyAdded: pick("recent"),
  };
}

// ============================================
// Slug (unchanged)
// ============================================

export function slugifyAnime(title: string, id: number): string {
  return `${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${id}`;
}