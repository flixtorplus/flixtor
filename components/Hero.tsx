"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, Info, Clock, Calendar, ChevronRight, ChevronLeft, Star } from "lucide-react";

// Expanded types to support the deep data fetching
export interface HeroMovie {
  id: number;
  title?: string;
  name?: string;
  backdrop_path?: string;
  poster_path?: string;
  overview?: string;
  vote_average?: number;
  vote_count?: number;
  release_date?: string;
  first_air_date?: string;
  runtime?: number;
  episode_run_time?: number[];
  genres?: { id: number; name: string }[];
  genre_ids?: number[];
  media_type?: string;
  credits?: {
    cast?: { id: number; name: string; profile_path: string | null; character: string }[];
  };
}

export interface HeroProps {
  movies?: HeroMovie[];
  heroMovie?: HeroMovie | null;
  onOpenFilters: () => void;
  activeFiltersCount?: number;
}

function slugFor(m: HeroMovie): string {
  if (!m) return "/";
  const t = (m.title || m.name || "").toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return `/${t}-${m.id}`;
}

export function Hero({ movies = [], heroMovie, onOpenFilters }: HeroProps) {
  const slides = movies.length > 0 ? movies : heroMovie ? [heroMovie] : [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  // State to hold the deep-fetched details (runtime, cast, genres)
  const [detailedData, setDetailedData] = useState<Record<number, any>>({});
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);

  // 1. Auto-Slide Timer (Every 6 seconds)
  useEffect(() => {
    if (slides.length <= 1 || isHovered) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = setInterval(() => {
      if (typeof document !== "undefined" && document.hidden) return;
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length, isHovered]);

  // 2. Deep Fetch Details (Cast, Runtime, Genres) for the current movie
  useEffect(() => {
    if (slides.length === 0) return;
    const current = slides[currentIndex];
    if (!current || detailedData[current.id]) return; // Skip if already fetched

    const fetchDetails = async () => {
      setIsLoadingDetails(true);
      try {
        // We use the public TMDB key for this client-side fetch
        const type = current.media_type === "tv" || !current.title ? "tv" : "movie";
        const res = await fetch(
          `https://api.themoviedb.org/3/${type}/${current.id}?api_key=ab7ec4451ddd6ddd90cfa65ba80478f5&append_to_response=credits&language=en-US`
        );
        if (res.ok) {
          const data = await res.json();
          setDetailedData((prev) => ({ ...prev, [current.id]: data }));
        }
      } catch (err) {
        console.error("Failed to fetch hero details", err);
      } finally {
        setIsLoadingDetails(false);
      }
    };

    fetchDetails();
  }, [currentIndex, slides, detailedData]);

  if (slides.length === 0) return null;

  const current = slides[currentIndex];
  const details = detailedData[current.id] || {}; // The deep-fetched data
  
  const isTV = current.media_type === "tv" || !current.title;
  const dateStr = current.release_date || current.first_air_date;
  const year = dateStr ? new Date(dateStr).getFullYear() : "";
  
  // Runtime logic (handles both movies and TV shows)
  const runtimeMins = details.runtime || (details.episode_run_time && details.episode_run_time[0]) || current.runtime;
  const formatRuntime = (mins?: number) => {
    if (!mins) return null;
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return h > 0 ? `${h}h ${m}m` : `${m}m`;
  };
  const runtime = formatRuntime(runtimeMins);

  const rating = current.vote_average ? current.vote_average.toFixed(1) : "NR";
  const ratingPercent = current.vote_average ? Math.round(current.vote_average * 10) : 0;
  
  // Get genres (prefer deep-fetched, fallback to basic)
  const genres = details.genres || current.genres || [];
  
  // Get cast
  const topCast = details.credits?.cast?.slice(0, 5) || current.credits?.cast?.slice(0, 5) || [];

  return (
    <section 
      className="relative w-full min-h-[95vh] bg-[#06080C] overflow-hidden flex flex-col justify-end pb-12 md:pb-24 group/hero"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      {/* --- BACKGROUND SLIDER --- */}
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? "opacity-100 z-10" : "opacity-0 pointer-events-none"
          }`}
        >
          {slide.backdrop_path && (
            <>
              <Image
                src={`https://image.tmdb.org/t/p/original${slide.backdrop_path}`}
                alt=""
                fill
                sizes="100vw"
                className={`object-cover object-top transition-transform duration-[10000ms] ease-linear ${
                  idx === currentIndex ? "scale-125" : "scale-100"
                }`}
                priority={idx === 0}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#06080C] via-[#06080C]/60 to-transparent w-full lg:w-4/5" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06080C] via-[#06080C]/30 to-transparent" />
            </>
          )}
        </div>
      ))}

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-20 mx-auto w-full max-w-[1600px] px-5 pt-32 sm:px-10 md:px-16 lg:px-20">
        
        <div 
          key={current.id} 
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out"
        >
          {/* LEFT SIDE: Text, Title, Genres, Buttons */}
          <div className="max-w-3xl flex-1">
            
            {/* Tags */}
            <div className="mb-4 flex items-center gap-3">
              <span className="flex items-center gap-1.5 rounded-full bg-[#01FAFD]/10 px-3 py-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#01FAFD] ring-1 ring-[#01FAFD]/30 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[#01FAFD] animate-pulse" />
                FlixTor Exclusive
              </span>
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-gray-300">
                {isTV ? "TV SERIES" : "MOVIE"}
              </span>
            </div>

            {/* Title */}
            <h2 className="mb-5 text-5xl font-black uppercase leading-[1.05] tracking-tighter text-white drop-shadow-2xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem]">
              {current.title || current.name}
            </h2>

            {/* GENRES (Moved up below title for modern layout) */}
            <div className="mb-6 flex flex-wrap gap-2">
              {genres.slice(0, 3).map((g: any) => (
                <span key={g.id || g.name} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-semibold text-gray-200 backdrop-blur-sm">
                  {g.name}
                </span>
              ))}
            </div>

            {/* METADATA BAR (Circular Rating, Duration, Year) */}
            <div className="mb-8 flex flex-wrap items-center gap-5 sm:gap-6">
              
              {/* Circular Rating */}
              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-black/40 backdrop-blur-md ring-1 ring-white/10">
                <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-white/10"
                    strokeWidth="3"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-[#01FAFD] transition-all duration-1000 ease-out"
                    strokeDasharray={`${ratingPercent}, 100`}
                    strokeWidth="3"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="flex flex-col items-center">
                  <span className="text-sm font-black text-white">{rating}</span>
                </div>
              </div>

              <div className="h-8 w-[1px] bg-white/20 hidden sm:block" />

              {/* Date & Runtime */}
              <div className="flex flex-col gap-1.5 text-sm font-medium text-gray-300">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-[#01FAFD]" />
                  {year}
                </div>
                {runtime && (
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-[#01FAFD]" />
                    {runtime}
                  </div>
                )}
              </div>
            </div>

            {/* Overview */}
            <p className="mb-8 line-clamp-3 max-w-2xl text-sm leading-relaxed text-gray-300/90 drop-shadow-md sm:text-base">
              {current.overview || "Watch this title now in stunning HD on FlixTor. No sign-up required, just press play and enjoy the show."}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href={slugFor(current)}
                className="group flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-black transition-all hover:scale-105 hover:bg-[#01FAFD] shadow-[0_0_25px_rgba(255,255,255,0.15)] hover:shadow-[0_0_35px_rgba(1,250,253,0.5)] md:px-8 md:py-4 md:text-base"
              >
                <Play className="h-5 w-5 fill-black group-hover:fill-black transition-colors" />
                Play Now
              </Link>
              
              <Link
                href={slugFor(current)}
                className="flex items-center gap-2.5 rounded-full bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/20 hover:text-[#01FAFD] ring-1 ring-white/20 md:px-8 md:py-4 md:text-base"
              >
                <Info className="h-5 w-5" />
                More Info
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE: Cast Circles */}
          {topCast.length > 0 && (
            <div className="hidden lg:flex flex-col gap-4 rounded-2xl bg-black/30 p-5 backdrop-blur-md ring-1 ring-white/5">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Starring</p>
              <div className="flex items-center gap-4">
                {topCast.map((actor: any) => (
                  <div key={actor.id} className="group/actor flex flex-col items-center gap-2">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-white/10 transition-colors group-hover/actor:border-[#01FAFD]">
                      {actor.profile_path ? (
                        <Image
                          src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                          alt={actor.name}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-white/10 text-xl font-bold text-white">
                          {actor.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <span className="w-16 text-center text-[11px] font-medium leading-tight text-gray-300 line-clamp-2">
                      {actor.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* SLIDER CONTROLS (Bottom Right) */}
      {slides.length > 1 && (
        <div className="absolute bottom-8 right-6 z-30 hidden items-center gap-4 md:flex md:right-12 lg:right-20">
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === currentIndex ? "w-8 bg-[#01FAFD]" : "w-3 bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => setCurrentIndex((p) => (p - 1 + slides.length) % slides.length)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition hover:bg-[#01FAFD] hover:text-black ring-1 ring-white/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={() => setCurrentIndex((p) => (p + 1) % slides.length)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition hover:bg-[#01FAFD] hover:text-black ring-1 ring-white/10"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}

      {/* Decorative Glow */}
      <div className="pointer-events-none absolute -bottom-40 right-0 z-10 h-[500px] w-[500px] rounded-full bg-[#01FAFD]/10 blur-[150px]" />
    </section>
  );
}

export default Hero;