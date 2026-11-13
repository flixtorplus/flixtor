"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Movie, slugify, TMDB_API_KEY } from "@/lib/tmdb";
import { ChevronLeft, ChevronRight, Film, Tv } from "lucide-react";

const TMDB_GENRES: Record<number, string> = {
  28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy",
  80: "Crime", 99: "Documentary", 18: "Drama", 10751: "Family",
  14: "Fantasy", 36: "History", 27: "Horror", 10402: "Music",
  9648: "Mystery", 10749: "Romance", 878: "Sci-Fi", 10770: "TV Movie",
  53: "Thriller", 10752: "War", 37: "Western",
};

interface InfiniteMovieRowsProps {
  movies?: Movie[];
  tvShows?: Movie[];
}

type PopupSide = "left" | "right";

// ==================== HOVER POPUP ====================
function HoverPopup({
  item,
  type,
  position,
  side,
}: {
  item: Movie;
  type: string;
  position: { x: number; y: number; width: number };
  side: PopupSide;
}) {
  const title = item.title || (item as any).name || "Untitled";
  const rating = item.vote_average || 0;
  const year =
    item.release_date?.split("-")[0] ||
    (item as any).first_air_date?.split("-")[0] ||
    "N/A";
  const trailerKey =
    (item as any).videos?.results?.find(
      (video: any) =>
        video.site === "YouTube" &&
        (video.type === "Trailer" || video.type === "Teaser")
    )?.key || null;
  const coverPath = item.backdrop_path || item.poster_path;
  const posterPath = item.poster_path || item.backdrop_path;
  const topGenres: string[] =
    item.genres && item.genres.length > 0
      ? item.genres.slice(0, 3).map((g: any) => (typeof g === "string" ? g : g.name))
      : item.genre_ids
          ?.slice(0, 3)
          .map((id: number) => TMDB_GENRES[id])
          .filter(Boolean) || [];
  const cast =
    (item as any).credits?.cast
      ?.slice(0, 5)
      .map((person: any) => person.name)
      .join(", ") || "";
  const director =
    (item as any).credits?.crew?.find((person: any) =>
      ["Director", "Creator"].includes(person.job)
    )?.name || "";

  // PERF: Show trailer iframe only after a short dwell, so rapid hover
  // across a row never spins up multiple YouTube players.
  const [showTrailer, setShowTrailer] = useState(false);
  useEffect(() => {
    if (!trailerKey) return;
    const t = setTimeout(() => setShowTrailer(true), 500);
    return () => {
      clearTimeout(t);
      setShowTrailer(false);
    };
  }, [trailerKey]);

  return (
    <div
      className="fixed z-[200] rounded-2xl bg-[#0A0E14] border border-[#01FAFD]/50 shadow-[0_0_70px_rgba(0,0,0,0.9)] overflow-visible pointer-events-none hidden md:block"
      style={{
        top: position.y,
        left: position.x,
        width: position.width,
        maxHeight: "calc(100vh - 24px)",
        // PERF: isolate paint work for the popup.
        contain: "layout paint",
      }}
      aria-hidden="true"
    >
      <div
        className={`absolute top-1/2 -translate-y-1/2 w-0 h-0 ${
          side === "right"
            ? "-left-[18px] border-y-[18px] border-y-transparent border-r-[18px] border-r-[#01FAFD]/50"
            : "-right-[18px] border-y-[18px] border-y-transparent border-l-[18px] border-l-[#01FAFD]/50"
        }`}
      />
      <div
        className={`absolute top-1/2 -translate-y-1/2 w-0 h-0 ${
          side === "right"
            ? "-left-[16px] border-y-[16px] border-y-transparent border-r-[16px] border-r-[#0A0E14]"
            : "-right-[16px] border-y-[16px] border-y-transparent border-l-[16px] border-l-[#0A0E14]"
        }`}
      />
      <div className="overflow-hidden rounded-2xl max-h-[calc(100vh-24px)]">
        <div className="relative h-40 sm:h-48 w-full bg-black">
          {/* PERF: Only mount iframe after dwell; otherwise show the cover
              image. Visually identical once 500ms pass. */}
          {trailerKey && showTrailer ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${trailerKey}?autoplay=1&mute=1&loop=1&playlist=${trailerKey}&rel=0&controls=0&modestbranding=1&playsinline=1&disablekb=1&fs=0&iv_load_policy=3&showinfo=0`}
              title={`${title} Trailer`}
              className="absolute inset-0 w-full h-full border-none pointer-events-none"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : coverPath ? (
            <Image
              src={`https://image.tmdb.org/t/p/w780${coverPath}`}
              alt={title}
              fill
              sizes="430px"
              className="object-cover"
            />
          ) : null}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E14] via-black/20 to-black/10" />
        </div>
        <div className="p-4 bg-[#0A0E14]">
          <div className="flex gap-4">
            <div className="relative h-28 w-20 sm:h-32 sm:w-24 shrink-0 overflow-hidden rounded-xl border border-[#01FAFD]/40 bg-black shadow-xl">
              {posterPath && (
                <Image
                  src={`https://image.tmdb.org/t/p/w300${posterPath}`}
                  alt={title}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              )}
            </div>
            <div className="min-w-0 flex-1">
              <p className="line-clamp-2 text-lg sm:text-xl font-black text-white">
                {title}
              </p>
              <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-gray-300">
                <span>{year}</span>
                <span>•</span>
                <span className="font-bold text-[#01FAFD]">
                  ★ {rating.toFixed(1)}/10
                </span>
                {type === "tv" && (
                  <span className="rounded bg-[#01FAFD]/15 px-2 py-0.5 text-[10px] font-bold uppercase text-[#01FAFD]">
                    TV Series
                  </span>
                )}
              </div>
              {topGenres.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {topGenres.map((genre, idx) => (
                    <span
                      key={idx}
                      className="rounded-full bg-white/10 px-2 py-1 text-[10px] text-gray-200"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              )}
              <p className="mt-3 line-clamp-3 text-xs leading-relaxed text-gray-300">
                {item.overview || "No description available."}
              </p>
            </div>
          </div>
          {(director || cast) && (
            <div className="mt-4 border-t border-[#01FAFD]/30 pt-3 text-[11px] text-gray-400">
              {director && (
                <p className="line-clamp-1">
                  <span className="font-bold text-white">Director:</span>{" "}
                  {director}
                </p>
              )}
              {cast && (
                <p className="mt-1 line-clamp-1">
                  <span className="font-bold text-white">Cast:</span> {cast}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ==================== TRAILER CACHE & FETCHER ====================
const trailerCache = new Map<number, string | null>();
const inflightTrailers = new Map<number, Promise<string | null>>();

async function fetchTrailerForItem(item: Movie, type: string): Promise<string | null> {
  const id = item.id;
  if (trailerCache.has(id)) return trailerCache.get(id) || null;
  if (inflightTrailers.has(id)) return inflightTrailers.get(id)!;

  const promise = (async () => {
    try {
      const endpoint = type === "tv" ? "tv" : "movie";
      const res = await fetch(
        `https://api.themoviedb.org/3/${endpoint}/${id}/videos?api_key=${TMDB_API_KEY}&language=en-US`
      );
      if (!res.ok) {
        trailerCache.set(id, null);
        return null;
      }
      const data = await res.json();
      const videos = data.results || [];
      const trailer =
        videos.find((v: any) => v.type === "Trailer" && v.site === "YouTube") ||
        videos.find((v: any) => v.site === "YouTube");
      const key = trailer?.key || null;
      trailerCache.set(id, key);
      return key;
    } catch {
      trailerCache.set(id, null);
      return null;
    } finally {
      inflightTrailers.delete(id);
    }
  })();

  inflightTrailers.set(id, promise);
  return promise;
}

// ==================== PLAY BUTTON ====================
function PlayButton({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizeClasses = { sm: "w-12 h-12", md: "w-14 h-14", lg: "w-16 h-16" };
  const iconSizes = { sm: "w-6 h-6", md: "w-7 h-7", lg: "w-8 h-8" };

  return (
    <div
      className={`${sizeClasses[size]} rounded-full bg-[#01FAFD] shadow-[0_0_30px_rgba(1,250,253,0.6)] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(1,250,253,0.8)]`}
    >
      <svg
        className={`${iconSizes[size]} text-[#06080C] ml-1`}
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M8 5v14l11-7z" />
      </svg>
    </div>
  );
}

// ==================== ROW HEADER (With Smooth Controls) ====================
function RowHeader({
  title,
  scrollRef,
}: {
  title: string;
  scrollRef: React.RefObject<HTMLDivElement | null>;
}) {
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = current.clientWidth * 0.75;
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 mb-4 flex items-center justify-between">
      <div className="inline-flex items-center gap-3">
        <div className="w-1.5 h-8 bg-gradient-to-b from-[#01FAFD] to-[#01D4D7] rounded-full" />
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white">
          {title}
        </h2>
      </div>

      {/* Manual Slide Buttons */}
      <div className="hidden sm:flex gap-2">
        <button
          onClick={() => scroll("left")}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white hover:bg-[#01FAFD] hover:text-[#06080C] transition-colors ring-1 ring-white/10"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white hover:bg-[#01FAFD] hover:text-[#06080C] transition-colors ring-1 ring-white/10"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

// ==================== TOP 10 ROW ====================
// PERF: This row now scrolls manually (buttons) instead of auto-animating
// 20 cards forever. Visual layout, rank badges, hover zoom, and gradients
// are identical to before.
function Top10Row({
  items,
  onCardHover,
  onCardLeave,
}: {
  items: Movie[];
  onCardHover: (e: React.MouseEvent, item: Movie, type: string) => void;
  onCardLeave: () => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const top10Items = items.slice(0, 10);

  const getSlug = (item: Movie) => slugify(item.title || (item as any).name, item.id);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const { current } = scrollRef;
    current.scrollBy({
      left: (direction === "left" ? -1 : 1) * current.clientWidth * 0.75,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 mb-5 flex items-center justify-between">
        <div className="inline-flex items-center gap-3">
          <div className="w-1.5 h-8 bg-gradient-to-b from-[#01FAFD] to-[#01D4D7] rounded-full" />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white">
            TOP 10 Today
          </h2>
        </div>
        <div className="hidden sm:flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white hover:bg-[#01FAFD] hover:text-[#06080C] transition-colors ring-1 ring-white/10"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white hover:bg-[#01FAFD] hover:text-[#06080C] transition-colors ring-1 ring-white/10"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-3 sm:gap-4 overflow-x-auto px-4 sm:px-8 pb-4 scrollbar-hide snap-x snap-proximity scroll-smooth"
        >
          {top10Items.map((item, idx) => {
            const title = item.title || (item as any).name || "Untitled";
            const year =
              item.release_date?.split("-")[0] ||
              (item as any).first_air_date?.split("-")[0] ||
              "N/A";
            const rating = item.vote_average || 0;
            const rank = idx + 1;
            const rankFormatted = rank.toString().padStart(2, "0");
            const slug = getSlug(item);

            return (
              <Link
                href={`/${slug}`}
                key={item.id}
                className="group relative shrink-0 cursor-pointer block snap-start"
                style={{ width: "clamp(140px, 18vw, 220px)" }}
                onMouseEnter={(e) => onCardHover(e, item, "movie")}
                onMouseLeave={onCardLeave}
              >
                <div className="relative rounded-xl overflow-hidden bg-[#10151D] aspect-[2/3] shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)] group-hover:z-20">
                  {/* Rank Badge */}
                  <div className="absolute top-0 left-0 z-20">
                    <div className="bg-gradient-to-r from-[#01FAFD] to-[#01D4D7] text-[#06080C] px-2 py-1 rounded-br-lg shadow-lg">
                      <div className="flex flex-col items-center leading-none">
                        <span className="text-[8px] font-bold uppercase tracking-wider">TOP</span>
                        <span className="text-lg font-black leading-none">{rankFormatted}</span>
                      </div>
                    </div>
                  </div>

                  {/* MOVIE Badge */}
                  <div className="absolute top-2 right-2 z-20 flex items-center gap-1 bg-gradient-to-r from-[#01FAFD] to-[#01D4D7] px-2 py-0.5 rounded-md shadow-lg">
                    <Film className="w-3 h-3 text-[#06080C]" />
                    <span className="text-[9px] font-bold text-[#06080C] uppercase tracking-wider">Movie</span>
                  </div>

                  {item.poster_path && (
                    <Image
                      src={`https://image.tmdb.org/t/p/w342${item.poster_path}`}
                      alt={title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      sizes="(max-width: 768px) 140px, 220px"
                    />
                  )}

                  <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <PlayButton size="md" />
                  </div>
                </div>

                <div className="mt-2 sm:mt-3">
                  <h3 className="text-xs sm:text-sm font-bold text-white truncate group-hover:text-[#01FAFD] transition-colors">
                    {title}
                  </h3>
                  <h4 className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-400 mt-0.5">
                    <span className="text-[#01FAFD] font-bold">★ {rating.toFixed(1)}</span>
                    <span>•</span>
                    <span>{year}</span>
                  </h4>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ==================== COVER ROW ====================
// PERF: Was auto-scrolling forever (40 huge backdrop images animating at 60fps).
// Now scrolls manually with header buttons, like PosterRow. Visual layout,
// badges, gradients, hover zoom, and even the on-hover YouTube trailer preview
// (but debounced & only for the card actually under the cursor) are preserved.
function CoverRow({
  title,
  items,
  type,
}: {
  title: string;
  items: Movie[];
  type: string;
  // Kept for API-compat but no longer used to auto-scroll.
  animationDirection?: "left" | "right";
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [trailerKeys, setTrailerKeys] = useState<Record<number, string | null>>({});

  const displayItems = useMemo(() => items.slice(0, 20), [items]);

  const getSlug = (item: Movie) => slugify(item.title || (item as any).name, item.id);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const { current } = scrollRef;
    current.scrollBy({
      left: (direction === "left" ? -1 : 1) * current.clientWidth * 0.75,
      behavior: "smooth",
    });
  };

  // PERF: debounce hover-fetch so sweeping the mouse doesn't fire N requests.
  useEffect(() => {
    if (hoveredIndex === null) return;
    const item = displayItems[hoveredIndex];
    if (!item || trailerKeys[item.id] !== undefined) return;

    let cancelled = false;
    const t = setTimeout(() => {
      fetchTrailerForItem(item, type).then((key) => {
        if (cancelled) return;
        setTrailerKeys((prev) => ({ ...prev, [item.id]: key }));
      });
    }, 250);

    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, [hoveredIndex, type, displayItems, trailerKeys]);

  return (
    <div className="relative w-full">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 mb-5 flex items-center justify-between">
        <div className="inline-flex items-center gap-3">
          <div className="w-1.5 h-8 bg-gradient-to-b from-[#01FAFD] to-[#01D4D7] rounded-full" />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white">
            {title}
          </h2>
        </div>
        <div className="hidden sm:flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white hover:bg-[#01FAFD] hover:text-[#06080C] transition-colors ring-1 ring-white/10"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white hover:bg-[#01FAFD] hover:text-[#06080C] transition-colors ring-1 ring-white/10"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="relative w-full overflow-visible">
        <div
          ref={scrollRef}
          className="flex gap-3 sm:gap-4 overflow-x-auto px-4 sm:px-8 py-4 scrollbar-hide snap-x snap-proximity scroll-smooth"
        >
          {displayItems.map((item, idx) => {
            const titleText = item.title || (item as any).name || "Untitled";
            const year =
              item.release_date?.split("-")[0] ||
              (item as any).first_air_date?.split("-")[0] ||
              "N/A";
            const rating = item.vote_average || 0;
            const isMovie = type === "movie";
            const isHoveredCard = hoveredIndex === idx;
            const trailerKey = trailerKeys[item.id] || null;
            const slug = getSlug(item);
            const href = isMovie ? `/${slug}` : `/tv/${slug}`;

            return (
              <div
                key={item.id}
                className="group relative shrink-0 cursor-pointer py-4 snap-start"
                style={{ width: "clamp(260px, 30vw, 400px)" }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Link
                  href={href}
                  className="relative block rounded-2xl overflow-hidden bg-[#10151D] aspect-[16/9] transition-all duration-500 ease-out"
                  style={{
                    transform: isHoveredCard ? "scale(1.1)" : "scale(1)",
                    zIndex: isHoveredCard ? 50 : 1,
                    boxShadow: isHoveredCard
                      ? "0 25px 50px -12px rgba(0,0,0,0.9), 0 0 60px rgba(1,250,253,0.2)"
                      : "0 10px 15px -3px rgba(0,0,0,0.5)",
                    // PERF: hint the browser this element will transform.
                    willChange: isHoveredCard ? "transform" : undefined,
                  }}
                >
                  {isHoveredCard && trailerKey ? (
                    <>
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${trailerKey}?autoplay=1&mute=1&loop=1&playlist=${trailerKey}&rel=0&controls=0&modestbranding=1&playsinline=1&disablekb=1&fs=0&iv_load_policy=3&showinfo=0`}
                        title={`${titleText} Trailer`}
                        className="absolute inset-0 w-full h-full border-none pointer-events-none"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                      <div className="absolute inset-0 z-10 pointer-events-none" />
                    </>
                  ) : (
                    <Image
                      src={`https://image.tmdb.org/t/p/w780${item.backdrop_path || item.poster_path}`}
                      alt={titleText}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      sizes="(max-width: 768px) 260px, 400px"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

                  {/* Genre/Type Badge */}
                  <div className="absolute top-3 left-3 z-10 pointer-events-none">
                    <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md shadow-lg ${
                      isMovie ? "bg-gradient-to-r from-[#01FAFD] to-[#01D4D7] text-[#06080C]" : "bg-blue-600 text-white"
                    }`}>
                      {isMovie ? <Film className="w-3 h-3" /> : <Tv className="w-3 h-3" />}
                      <span className="text-[10px] font-bold uppercase tracking-wider">
                        {isMovie ? "Movie" : "TV Show"}
                      </span>
                    </div>
                  </div>

                  <div className="absolute top-3 right-3 z-10 pointer-events-none bg-black/70 backdrop-blur-md px-2 py-1 rounded-md ring-1 ring-white/10">
                    <div className="flex items-center gap-1">
                      <span className="text-[#01FAFD] text-sm">★</span>
                      <span className="text-white font-bold text-sm">{rating.toFixed(1)}</span>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 z-10 pointer-events-none">
                    <h3 className="text-base sm:text-lg font-bold text-white truncate drop-shadow-lg group-hover:text-[#01FAFD] transition-colors">
                      {titleText}
                    </h3>
                    <h4 className="flex items-center gap-2 text-xs text-gray-300 mt-1">
                      <span>{year}</span>
                      <span>•</span>
                      <span className="truncate max-w-[200px]">
                        {item.genre_ids?.map(id => TMDB_GENRES[id]).filter(Boolean).slice(0,2).join(", ") || "Trending"}
                      </span>
                    </h4>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ==================== FLUID POSTER ROW ====================
function PosterRow({
  title,
  items,
  type,
  onCardHover,
  onCardLeave,
}: {
  title: string;
  items: Movie[];
  type: string;
  onCardHover: (e: React.MouseEvent, item: Movie, type: string) => void;
  onCardLeave: () => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const getSlug = (item: Movie) => slugify(item.title || (item as any).name, item.id);

  return (
    <div className="relative w-full py-4">
      <RowHeader title={title} scrollRef={scrollRef} />

      <div className="relative w-full overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-3 sm:gap-4 overflow-x-auto px-4 sm:px-8 pb-10 pt-2 scrollbar-hide snap-x snap-proximity scroll-smooth"
        >
          {items.map((item) => {
            const slug = getSlug(item);
            const posterPath = `https://image.tmdb.org/t/p/w342${item.poster_path}`;
            const rating = item.vote_average || 0;
            const isMovie = type === "movie";
            const displayTitle = item.title || (item as any).name || "Untitled";
            const year =
              item.release_date?.split("-")[0] ||
              (item as any).first_air_date?.split("-")[0] ||
              "N/A";

            if (!item.poster_path) return null;

            return (
              <Link
                href={isMovie ? `/${slug}` : `/tv/${slug}`}
                key={item.id}
                className="group/card relative block w-[130px] sm:w-40 md:w-48 aspect-[2/3] shrink-0 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:z-30 cursor-pointer snap-start"
                onMouseEnter={(e) => onCardHover(e, item, type)}
                onMouseLeave={onCardLeave}
              >
                <Image
                  src={posterPath}
                  alt={displayTitle}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 130px, (max-width: 1024px) 160px, 192px"
                  className="object-cover transition-all duration-500 group-hover/card:scale-110"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm opacity-0 group-hover/card:opacity-100 transition-all duration-300">
                  <PlayButton size="sm" />
                </div>

                {/* TYPE BADGE: Movie or TV Show */}
                <div className="absolute top-2 left-2 z-10">
                  <div className={`flex items-center gap-1 px-2 py-0.5 rounded-md shadow-lg ${
                    isMovie
                      ? "bg-gradient-to-r from-[#01FAFD] to-[#01D4D7] text-[#06080C]"
                      : "bg-blue-600 text-white"
                  }`}>
                    {isMovie ? <Film className="w-3 h-3" /> : <Tv className="w-3 h-3" />}
                    <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-wider">
                      {isMovie ? "Movie" : "TV Show"}
                    </span>
                  </div>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-2 right-2 z-10 bg-black/80 backdrop-blur-md px-1.5 py-0.5 rounded-md ring-1 ring-white/10">
                  <div className="flex items-center gap-0.5">
                    <span className="text-[#01FAFD] text-[10px]">★</span>
                    <span className="text-white font-bold text-[9px] md:text-[10px]">
                      {rating.toFixed(1)}
                    </span>
                  </div>
                </div>

                {/* Hover Info */}
                <div className="absolute bottom-0 left-0 right-0 p-2 z-10 pointer-events-none opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/95 via-black/50 to-transparent">
                  <h3 className="text-[11px] font-bold text-white truncate">
                    {displayTitle}
                  </h3>
                  <h4 className="flex items-center gap-1.5 text-[9px] text-gray-400 mt-0.5">
                    <span>{year}</span>
                    <span>•</span>
                    <span>{isMovie ? "Movie" : "TV Show"}</span>
                  </h4>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ==================== MAIN COMPONENT ====================
export function InfiniteMovieRows({
  movies = [],
  tvShows = [],
}: InfiniteMovieRowsProps) {
  const [popup, setPopup] = useState<{
    show: boolean;
    item: Movie | null;
    type: string;
    x: number;
    y: number;
    width: number;
    side: PopupSide;
  }>({
    show: false,
    item: null,
    type: "movie",
    x: 0,
    y: 0,
    width: 430,
    side: "right",
  });

  // PERF: debounce popup open so fast mouse sweeps don't thrash React.
  const popupTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const hasMovies = movies && movies.length > 0;
  const hasTvShows = tvShows && tvShows.length > 0;

  const ITEMS_PER_ROW = 20;

  const trendingMovies = hasMovies ? movies.slice(0, ITEMS_PER_ROW) : [];
  const popularMovies = hasMovies ? movies.slice(ITEMS_PER_ROW, ITEMS_PER_ROW * 2) : [];
  const topRatedMovies = hasMovies ? movies.slice(ITEMS_PER_ROW * 2, ITEMS_PER_ROW * 3) : [];

  const trendingTV = hasTvShows ? tvShows.slice(0, ITEMS_PER_ROW) : [];
  const popularTV = hasTvShows ? tvShows.slice(ITEMS_PER_ROW, ITEMS_PER_ROW * 2) : [];
  const topRatedTV = hasTvShows ? tvShows.slice(ITEMS_PER_ROW * 2, ITEMS_PER_ROW * 3) : [];

  // Genre Rows
  const romanceMovies = hasMovies ? movies.filter((m) => m.genre_ids?.includes(10749)).slice(0, 15) : [];
  const actionMovies = hasMovies ? movies.filter((m) => m.genre_ids?.includes(28)).slice(0, 15) : [];
  const comedyMovies = hasMovies ? movies.filter((m) => m.genre_ids?.includes(35)).slice(0, 15) : [];

  const handleCardMouseEnter = useCallback(
    (e: React.MouseEvent, item: Movie, type: string) => {
      // cancel any pending hide
      if (hideTimer.current) {
        clearTimeout(hideTimer.current);
        hideTimer.current = null;
      }
      if (popupTimer.current) clearTimeout(popupTimer.current);

      const target = e.currentTarget as HTMLElement;
      // read rect once (avoid re-measuring on every mousemove)
      const rect = target.getBoundingClientRect();

      popupTimer.current = setTimeout(() => {
        const padding = 12;
        const gap = 18;
        const popupWidth = Math.min(430, window.innerWidth - padding * 2);
        const popupHeight = Math.min(500, window.innerHeight - padding * 2);
        const spaceRight = window.innerWidth - rect.right;
        const spaceLeft = rect.left;

        const side: PopupSide =
          spaceRight >= popupWidth + gap || spaceRight >= spaceLeft ? "right" : "left";

        let x = side === "right" ? rect.right + gap : rect.left - popupWidth - gap;
        let y = rect.top + rect.height / 2 - popupHeight / 2;

        x = Math.max(padding, Math.min(x, window.innerWidth - popupWidth - padding));
        y = Math.max(padding, Math.min(y, window.innerHeight - popupHeight - padding));

        setPopup({ show: true, item, type, x, y, width: popupWidth, side });
      }, 140);
    },
    []
  );

  const handleCardMouseLeave = useCallback(() => {
    if (popupTimer.current) {
      clearTimeout(popupTimer.current);
      popupTimer.current = null;
    }
    hideTimer.current = setTimeout(() => {
      setPopup((p) =>
        p.show
          ? {
              show: false,
              item: null,
              type: "movie",
              x: 0,
              y: 0,
              width: 430,
              side: "right",
            }
          : p
      );
    }, 120);
  }, []);

  // PERF: clear timers on unmount.
  useEffect(() => {
    return () => {
      if (popupTimer.current) clearTimeout(popupTimer.current);
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, []);

  return (
    <div className="w-full relative z-20 pb-20 overflow-hidden min-h-screen flex flex-col justify-center gap-6 md:gap-10">
      {hasMovies && (
        <Top10Row
          items={trendingMovies}
          onCardHover={handleCardMouseEnter}
          onCardLeave={handleCardMouseLeave}
        />
      )}

      {hasMovies && (
        <CoverRow title="Trending Today" items={trendingMovies} type="movie" />
      )}

      {hasMovies && (
        <PosterRow
          title="Popular Movies"
          items={popularMovies}
          type="movie"
          onCardHover={handleCardMouseEnter}
          onCardLeave={handleCardMouseLeave}
        />
      )}

      {hasMovies && (
        <PosterRow
          title="Top Rated Movies"
          items={topRatedMovies}
          type="movie"
          onCardHover={handleCardMouseEnter}
          onCardLeave={handleCardMouseLeave}
        />
      )}

      {actionMovies.length > 0 && (
        <PosterRow
          title="Action & Adventure"
          items={actionMovies}
          type="movie"
          onCardHover={handleCardMouseEnter}
          onCardLeave={handleCardMouseLeave}
        />
      )}

      {comedyMovies.length > 0 && (
        <PosterRow
          title="Comedy"
          items={comedyMovies}
          type="movie"
          onCardHover={handleCardMouseEnter}
          onCardLeave={handleCardMouseLeave}
        />
      )}

      {romanceMovies.length > 0 && (
        <PosterRow
          title="Romance"
          items={romanceMovies}
          type="movie"
          onCardHover={handleCardMouseEnter}
          onCardLeave={handleCardMouseLeave}
        />
      )}

      {hasTvShows && (
        <CoverRow title="Trending TV Shows" items={trendingTV} type="tv" />
      )}

      {hasTvShows && (
        <PosterRow
          title="Popular TV Shows"
          items={popularTV}
          type="tv"
          onCardHover={handleCardMouseEnter}
          onCardLeave={handleCardMouseLeave}
        />
      )}

      {hasTvShows && (
        <CoverRow title="Top Rated TV Shows" items={topRatedTV} type="tv" />
      )}

      {popup.show && popup.item && (
        <HoverPopup
          item={popup.item}
          type={popup.type}
          position={{ x: popup.x, y: popup.y, width: popup.width }}
          side={popup.side}
        />
      )}

      <style jsx global>{`
        /* PERF: keep scrollbar-hide. Auto-scroll keyframes removed. */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}