'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from "next/link";
import Image from "next/image";
import { Search, X, SlidersHorizontal, Film, Tv } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { InfiniteMovieRows } from "@/components/InfiniteMovieRows";
import { fetchInfiniteMovies, fetchInfiniteTV, TMDB_API_KEY } from "@/lib/tmdb";
import { AdsterraAd } from "@/components/AdsterraAd";
import HeroTrailerStage from "@/components/HeroTrailerStage";
import { Hero } from "@/components/Hero";

// Ad keys
const ADS = {
  BANNER_468x60: '745e2712b632a7e90737a12711a26228',
  BANNER_320x50: '544daa93088c3c86f28ec10f4046a519',
  BANNER_728x90: '60584ead4a4b3bc902dd117145425ef6',
  BANNER_300x250: '8162f7b8c34974f34a974b6e7ecfc56c',
};

// Sort options for Movies
const movieSortOptions = [
  { id: 'popularity.desc', name: 'Popularity' },
  { id: 'vote_average.desc', name: 'Top Rated' },
  { id: 'revenue.desc', name: 'Highest Revenue' },
  { id: 'primary_release_date.desc', name: 'Newest First' },
  { id: 'primary_release_date.asc', name: 'Oldest First' },
];

// Sort options for TV Shows
const tvSortOptions = [
  { id: 'popularity.desc', name: 'Popularity' },
  { id: 'vote_average.desc', name: 'Top Rated' },
  { id: 'first_air_date.desc', name: 'Newest First' },
  { id: 'first_air_date.asc', name: 'Oldest First' },
];

// Movie Genres
const movieGenres = [
  { id: 28, name: 'Action' }, { id: 12, name: 'Adventure' }, { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' }, { id: 80, name: 'Crime' }, { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' }, { id: 10751, name: 'Family' }, { id: 14, name: 'Fantasy' },
  { id: 36, name: 'History' }, { id: 27, name: 'Horror' }, { id: 10402, name: 'Music' },
  { id: 9648, name: 'Mystery' }, { id: 10749, name: 'Romance' }, { id: 878, name: 'Sci-Fi' },
  { id: 10770, name: 'TV Movie' }, { id: 53, name: 'Thriller' }, { id: 10752, name: 'War' },
  { id: 37, name: 'Western' }
];

// TV Genres
const tvGenres = [
  { id: 10759, name: 'Action & Adventure' }, { id: 16, name: 'Animation' }, { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' }, { id: 99, name: 'Documentary' }, { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' }, { id: 10762, name: 'Kids' }, { id: 9648, name: 'Mystery' },
  { id: 10763, name: 'News' }, { id: 10764, name: 'Reality' }, { id: 10765, name: 'Sci-Fi & Fantasy' },
  { id: 10766, name: 'Soap' }, { id: 10767, name: 'Talk' }, { id: 10768, name: 'War & Politics' },
  { id: 37, name: 'Western' }
];

const currentYear = new Date().getFullYear();
const yearOptions = Array.from({ length: 30 }, (_, i) => (currentYear - i).toString());

const languages = [
  { code: 'en', name: 'English' }, { code: 'es', name: 'Spanish' }, { code: 'fr', name: 'French' },
  { code: 'ja', name: 'Japanese' }, { code: 'ko', name: 'Korean' }, { code: 'it', name: 'Italian' },
  { code: 'de', name: 'German' }, { code: 'zh', name: 'Chinese' }, { code: 'hi', name: 'Hindi' },
];

// ========== RESPONSIVE BANNER AD ==========
function RectangleAd() {
  return (
    <div className="w-full my-6 py-4">
      <div className="flex justify-center px-4">
        <div className="bg-gradient-to-r from-[#0A0E14] to-[#06080C] rounded-xl border border-[#1a2230] p-3">
          <AdsterraAd adKey={ADS.BANNER_300x250} width={300} height={250} />
        </div>
      </div>
    </div>
  );
}

// ========== FILTER POPUP - MODERN & RESPONSIVE ==========
function FilterPopup({
  isOpen,
  onClose,
  mediaType,
  setMediaType,
  sortBy,
  setSortBy,
  selectedGenre,
  setSelectedGenre,
  selectedYear,
  setSelectedYear,
  selectedLanguage,
  setSelectedLanguage,
  applyFilters,
  currentGenres,
  currentSortOptions,
  activeFiltersCount
}: {
  isOpen: boolean;
  onClose: () => void;
  mediaType: 'movie' | 'tv';
  setMediaType: (type: 'movie' | 'tv') => void;
  sortBy: string;
  setSortBy: (value: string) => void;
  selectedGenre: string;
  setSelectedGenre: (value: string) => void;
  selectedYear: string;
  setSelectedYear: (value: string) => void;
  selectedLanguage: string;
  setSelectedLanguage: (value: string) => void;
  applyFilters: () => void;
  currentGenres: any[];
  currentSortOptions: any[];
  activeFiltersCount: number;
}) {
  const [tempSortBy, setTempSortBy] = useState(sortBy);
  const [tempGenre, setTempGenre] = useState(selectedGenre);
  const [tempYear, setTempYear] = useState(selectedYear);
  const [tempLanguage, setTempLanguage] = useState(selectedLanguage);
  const [tempMediaType, setTempMediaType] = useState<'movie' | 'tv'>(mediaType);

  useEffect(() => {
    if (isOpen) {
      setTempSortBy(sortBy);
      setTempGenre(selectedGenre);
      setTempYear(selectedYear);
      setTempLanguage(selectedLanguage);
      setTempMediaType(mediaType);
    }
  }, [isOpen, sortBy, selectedGenre, selectedYear, selectedLanguage, mediaType]);

  const handleApply = () => {
    setMediaType(tempMediaType);
    setSortBy(tempSortBy);
    setSelectedGenre(tempGenre);
    setSelectedYear(tempYear);
    setSelectedLanguage(tempLanguage);
    applyFilters();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-6 md:p-8 overflow-hidden"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl md:rounded-3xl border border-[#01FAFD]/30 bg-[#0A0E14] shadow-[0_0_80px_rgba(1,250,253,0.15)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 z-20 border-b border-[#01FAFD]/20 bg-[#0A0E14]/95 p-4 sm:p-5 md:p-6 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#01FAFD]/10">
                    <SlidersHorizontal className="w-5 h-5 text-[#01FAFD]" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-black text-white">Filter Options</h2>
                  {activeFiltersCount > 0 && (
                    <span className="ml-1 bg-[#01FAFD] text-[#06080C] rounded-full w-6 h-6 text-xs flex items-center justify-center font-bold">
                      {activeFiltersCount}
                    </span>
                  )}
                </div>
                <button
                  onClick={onClose}
                  className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white transition-all hover:border-[#01FAFD] hover:bg-[#01FAFD] hover:text-[#06080C]"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-80px)] p-4 sm:p-6 md:p-8 custom-scrollbar">
              {/* Media Type Toggle */}
              <div className="mb-6">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Content Type</h3>
                <div className="flex gap-3">
                  <button
                    onClick={() => setTempMediaType('movie')}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-sm transition-all ${
                      tempMediaType === 'movie'
                        ? 'bg-gradient-to-r from-[#01D4D7] to-[#01FAFD] text-[#06080C] shadow-lg shadow-[#01FAFD]/20'
                        : 'bg-[#10151D] text-gray-400 hover:text-white hover:bg-[#161C26] border border-white/5'
                    }`}
                  >
                    <Film className="w-4 h-4" />
                    Movies
                  </button>
                  <button
                    onClick={() => setTempMediaType('tv')}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-sm transition-all ${
                      tempMediaType === 'tv'
                        ? 'bg-gradient-to-r from-[#01D4D7] to-[#01FAFD] text-[#06080C] shadow-lg shadow-[#01FAFD]/20'
                        : 'bg-[#10151D] text-gray-400 hover:text-white hover:bg-[#161C26] border border-white/5'
                    }`}
                  >
                    <Tv className="w-4 h-4" />
                    TV Shows
                  </button>
                </div>
              </div>

              {/* Filter Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {/* Sort By */}
                <div>
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Sort By</h3>
                  <div className="flex flex-col gap-1.5">
                    {currentSortOptions.map(opt => (
                      <button
                        key={opt.id}
                        onClick={() => setTempSortBy(opt.id)}
                        className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                          tempSortBy === opt.id
                            ? 'bg-[#01FAFD] text-[#06080C] shadow-lg shadow-[#01FAFD]/20'
                            : 'text-gray-400 hover:bg-[#10151D] hover:text-white'
                        }`}
                      >
                        {opt.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Genre */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Genre</h3>
                    {tempGenre && (
                      <button onClick={() => setTempGenre('')} className="text-xs text-[#01FAFD] hover:text-white transition">
                        Clear
                      </button>
                    )}
                  </div>
                  <div className="flex flex-col gap-1.5 max-h-48 overflow-y-auto custom-scrollbar pr-1">
                    {currentGenres.map(g => (
                      <button
                        key={g.id}
                        onClick={() => setTempGenre(g.id.toString())}
                        className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                          tempGenre === g.id.toString()
                            ? 'bg-[#01FAFD] text-[#06080C] shadow-lg shadow-[#01FAFD]/20'
                            : 'text-gray-400 hover:bg-[#10151D] hover:text-white'
                        }`}
                      >
                        {g.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Year */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Year</h3>
                    {tempYear && (
                      <button onClick={() => setTempYear('')} className="text-xs text-[#01FAFD] hover:text-white transition">
                        Clear
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 max-h-48 overflow-y-auto custom-scrollbar pr-1">
                    {yearOptions.map(y => (
                      <button
                        key={y}
                        onClick={() => setTempYear(y)}
                        className={`px-2 py-2.5 rounded-lg text-xs font-medium text-center transition-all ${
                          tempYear === y
                            ? 'bg-[#01FAFD] text-[#06080C] shadow-lg shadow-[#01FAFD]/20'
                            : 'bg-[#10151D] text-gray-400 hover:bg-[#161C26] hover:text-white'
                        }`}
                      >
                        {y}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Language */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Language</h3>
                    {tempLanguage && (
                      <button onClick={() => setTempLanguage('')} className="text-xs text-[#01FAFD] hover:text-white transition">
                        Clear
                      </button>
                    )}
                  </div>
                  <div className="flex flex-col gap-1.5 max-h-48 overflow-y-auto custom-scrollbar pr-1">
                    {languages.map(lang => (
                      <button
                        key={lang.code}
                        onClick={() => setTempLanguage(lang.code)}
                        className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                          tempLanguage === lang.code
                            ? 'bg-[#01FAFD] text-[#06080C] shadow-lg shadow-[#01FAFD]/20'
                            : 'text-gray-400 hover:bg-[#10151D] hover:text-white'
                        }`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t border-white/5">
                <button
                  onClick={handleApply}
                  className="flex-1 py-3.5 bg-gradient-to-r from-[#01FAFD] to-[#01D4D7] hover:from-[#3FF9FB] hover:to-[#01FAFD] text-[#06080C] font-bold rounded-xl transition-all duration-300 shadow-lg shadow-[#01FAFD]/20 hover:shadow-xl"
                >
                  Apply Filters
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 py-3.5 rounded-xl border border-white/10 text-gray-400 hover:text-[#01FAFD] hover:border-[#01FAFD] transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

// ========== RESULTS POPUP ==========
function ResultsPopup({
  isOpen,
  onClose,
  results,
  totalResults,
  mediaType,
  title,
  loading,
  hasMore,
  observerTarget
}: {
  isOpen: boolean;
  onClose: () => void;
  results: any[];
  totalResults: number;
  mediaType: 'movie' | 'tv';
  title: string;
  loading: boolean;
  hasMore: boolean;
  observerTarget: React.RefObject<HTMLDivElement | null>;
}) {
  const currentGenres = mediaType === 'movie' ? movieGenres : tvGenres;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[99998] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-6 md:p-8 overflow-hidden"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-7xl max-h-[90vh] overflow-hidden rounded-2xl md:rounded-3xl border border-[#01FAFD]/30 bg-[#0A0E14] shadow-[0_0_80px_rgba(1,250,253,0.15)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 z-20 border-b border-[#01FAFD]/20 bg-[#0A0E14]/95 p-4 sm:p-5 md:p-6 backdrop-blur-xl">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#01FAFD]/10">
                    {mediaType === 'movie' ? (
                      <Film className="w-5 h-5 text-[#01FAFD]" />
                    ) : (
                      <Tv className="w-5 h-5 text-[#01FAFD]" />
                    )}
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-black text-white">{title}</h2>
                    <p className="text-sm text-gray-400">
                      Found <span className="text-white font-semibold">{totalResults}</span> {mediaType === 'movie' ? 'movies' : 'TV shows'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white transition-all hover:border-[#01FAFD] hover:bg-[#01FAFD] hover:text-[#06080C]"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            {/* Results Grid */}
            <div className="overflow-y-auto max-h-[calc(90vh-80px)] p-4 sm:p-6 md:p-8 custom-scrollbar">
              {loading && results.length === 0 ? (
                <div className="flex items-center justify-center py-20">
                  <div className="w-8 h-8 border-4 border-[#10151D] border-t-[#01FAFD] rounded-full animate-spin"></div>
                </div>
              ) : results.length > 0 ? (
                <>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
                    {results.map((item, idx) => {
                      const title = item.title || item.name;
                      const slug = `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${item.id}`;
                      const year = mediaType === 'movie'
                        ? (item.release_date ? new Date(item.release_date).getFullYear() : '')
                        : (item.first_air_date ? new Date(item.first_air_date).getFullYear() : '');
                      const href = mediaType === 'movie' ? `/${slug}` : `/tv/${slug}`;
                      const isTV = mediaType === 'tv';
                      const rating = item.vote_average || 0;

                      const topGenres = item.genre_ids
                        ?.slice(0, 2)
                        .map((id: number) => currentGenres.find(g => g.id === id)?.name)
                        .filter(Boolean) || [];

                      return (
                        <Link
                          key={`${item.id}-${idx}`}
                          href={href}
                          className="group/card relative block aspect-[2/3] shrink-0 rounded-lg overflow-hidden transition-all duration-500 will-change-transform
                                     hover:scale-105 hover:shadow-[0_10px_30px_rgba(1,250,253,0.25)] hover:ring-1 hover:ring-[#01FAFD]/50 shadow-md"
                        >
                          <Image
                            src={`https://image.tmdb.org/t/p/w342${item.poster_path}`}
                            alt={title}
                            fill
                            loading="lazy"
                            sizes="(max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
                            className="object-cover transition-all duration-500"
                            referrerPolicy="no-referrer"
                          />

                          {/* TV Show / Movie Badge */}
                          {isTV ? (
                            <div className="absolute top-2 left-2 z-20">
                              <div className="flex items-center gap-1 bg-gradient-to-r from-[#01D4D7] to-[#01FAFD] px-2 py-0.5 rounded-md shadow-lg">
                                <Tv className="w-3 h-3 text-[#06080C]" />
                                <span className="text-[8px] md:text-[9px] font-bold text-[#06080C] uppercase tracking-wider">
                                  TV Show
                                </span>
                              </div>
                            </div>
                          ) : (
                            <div className="absolute top-2 left-2 z-20">
                              <div className="flex items-center gap-1 bg-gradient-to-r from-[#01FAFD] to-[#3FF9FB] px-2 py-0.5 rounded-md shadow-lg">
                                <Film className="w-3 h-3 text-[#06080C]" />
                                <span className="text-[8px] md:text-[9px] font-bold text-[#06080C] uppercase tracking-wider">
                                  Movie
                                </span>
                              </div>
                            </div>
                          )}

                          {/* Rating Badge */}
                          <div className="absolute top-2 right-2 z-20 flex items-center gap-1 bg-black/70 backdrop-blur-md border border-white/10 px-2 py-0.5 rounded-full shadow-md">
                            <span className="text-yellow-400 text-[10px] md:text-xs">★</span>
                            <span className="text-white font-bold text-[9px] md:text-[11px]">
                              {rating ? rating.toFixed(1) : "N/A"}
                            </span>
                          </div>

                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E14]/95 via-[#0A0E14]/40 to-transparent opacity-0 transition-opacity duration-500 flex flex-col justify-end p-4 group-hover/card:opacity-100 z-10">
                            <span className="text-gray-400 text-[11px] font-medium mb-0.5">
                              {year}
                            </span>
                            <h3 className="text-white font-bold text-xs md:text-sm leading-tight mb-2 line-clamp-2">
                              {title}
                            </h3>
                            {topGenres.length > 0 && (
                              <div className="flex flex-wrap gap-1">
                                {topGenres.map((genreName: string, gIdx: number) => (
                                  <span
                                    key={gIdx}
                                    className="text-[9px] md:text-[10px] px-2 py-0.5 rounded-md bg-[#01FAFD]/90 text-[#06080C] font-semibold uppercase tracking-wider"
                                  >
                                    {genreName}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  <div
                    ref={observerTarget as React.RefObject<HTMLDivElement>}
                    className="w-full flex items-center justify-center py-8"
                  >
                    {loading && results.length > 0 && (
                      <div className="w-8 h-8 border-4 border-[#10151D] border-t-[#01FAFD] rounded-full animate-spin"></div>
                    )}
                    {!hasMore && results.length > 0 && (
                      <p className="text-gray-500 text-sm">End of results — {totalResults} {mediaType === 'movie' ? 'movies' : 'TV shows'} found</p>
                    )}
                  </div>
                </>
              ) : (
                <div className="text-center py-20">
                  <p className="text-gray-400 text-lg">No {mediaType === 'movie' ? 'movies' : 'TV shows'} found.</p>
                  <p className="text-gray-500 text-sm mt-2">Try adjusting your filters or search.</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default function Home() {
  const [movies, setMovies] = useState<any[]>([]);
  const [tvShows, setTvShows] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [loading, setLoading] = useState(false);
  const [heroMovie, setHeroMovie] = useState<any>(null);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [isResultsPopupOpen, setIsResultsPopupOpen] = useState(false);
  const observerTarget = useRef<HTMLDivElement>(null);

  const [activeSlideIdx, setActiveSlideIdx] = useState(0);
  const [slidingArray, setSlidingArray] = useState<any[]>([]);

  useEffect(() => {
    if (movies && movies.length > 0) {
      setSlidingArray(movies.slice(0, 8));
    } else if (heroMovie) {
      setSlidingArray([heroMovie, heroMovie, heroMovie]);
    }
  }, [movies, heroMovie]);

  useEffect(() => {
    if (slidingArray.length <= 1) return;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const slideTimer = setInterval(() => {
      if (typeof document !== 'undefined' && document.hidden) return;
      setActiveSlideIdx((prevIdx) => (prevIdx + 1) % slidingArray.length);
    }, 5000);
    return () => clearInterval(slideTimer);
  }, [slidingArray]);

  const getLeftCardItem = () => {
    if (slidingArray.length === 0) return null;
    return slidingArray[(activeSlideIdx - 1 + slidingArray.length) % slidingArray.length];
  };

  const getCenterCardItem = () => {
    if (slidingArray.length === 0) return null;
    return slidingArray[activeSlideIdx];
  };

  const getRightCardItem = () => {
    if (slidingArray.length === 0) return null;
    return slidingArray[(activeSlideIdx + 1) % slidingArray.length];
  };

  const leftMediaItem = getLeftCardItem();
  const centerMediaItem = getCenterCardItem();
  const rightMediaItem = getRightCardItem();

  const [mediaType, setMediaType] = useState<'movie' | 'tv'>('movie');
  const [sortBy, setSortBy] = useState('popularity.desc');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const activeFiltersCount = [selectedGenre, selectedYear, selectedLanguage].filter(Boolean).length;

  // Load initial data
  useEffect(() => {
    async function loadInitialData() {
      setError(null);

      try {
        const [moviesData, tvShowsData] = await Promise.all([
          fetchInfiniteMovies(),
          fetchInfiniteTV(),
        ]);

        setMovies(moviesData || []);
        setTvShows(tvShowsData || []);

        try {
          const trendingRes = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${TMDB_API_KEY}`);
          const trendingData = await trendingRes.json();
          const trending = trendingData.results?.filter((m: any) => m.backdrop_path) || [];
          if (trending.length > 0) {
            const randomIndex = Math.floor(Math.random() * trending.length);
            setHeroMovie(trending[randomIndex]);
          }
        } catch {
          if (moviesData && moviesData.length > 0) {
            setHeroMovie(moviesData[0]);
          }
        }
      } catch (error) {
        console.error('Error loading initial data:', error);
        setError('Failed to load content. Please refresh the page.');
      }
    }

    loadInitialData();
  }, []);

  const fetchSearchResults = useCallback(async (pageNum: number, reset: boolean = false) => {
    setLoading(true);

    try {
      let url = '';

      if (mediaType === 'movie') {
        if (searchQuery.trim()) {
          url = `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(searchQuery)}&page=${pageNum}`;
        } else {
          url = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&sort_by=${sortBy}&page=${pageNum}`;
          if (selectedGenre) url += `&with_genres=${selectedGenre}`;
          if (selectedYear) url += `&primary_release_year=${selectedYear}`;
          if (selectedLanguage) url += `&with_original_language=${selectedLanguage}`;
        }
      } else {
        if (searchQuery.trim()) {
          url = `https://api.themoviedb.org/3/search/tv?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(searchQuery)}&page=${pageNum}`;
        } else {
          url = `https://api.themoviedb.org/3/discover/tv?api_key=${TMDB_API_KEY}&sort_by=${sortBy}&page=${pageNum}`;
          if (selectedGenre) url += `&with_genres=${selectedGenre}`;
          if (selectedYear) url += `&first_air_date_year=${selectedYear}`;
          if (selectedLanguage) url += `&with_original_language=${selectedLanguage}`;
        }
      }

      const res = await fetch(url);
      const data = await res.json();

      let itemsData = [];
      if (mediaType === 'movie') {
        itemsData = data.results?.filter((m: any) => m.poster_path) || [];
      } else {
        itemsData = data.results?.filter((tv: any) => tv.poster_path) || [];
      }

      if (reset) {
        setTotalResults(data.total_results || 0);
        setSearchResults(itemsData);
      } else {
        setSearchResults(prev => [...prev, ...itemsData]);
      }

      setHasMore(pageNum < data.total_pages);
      setCurrentPage(pageNum);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setLoading(false);
    }
  }, [searchQuery, sortBy, selectedGenre, selectedYear, selectedLanguage, mediaType]);

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    setIsSearchModalOpen(false);
    setIsSearching(true);
    setCurrentPage(1);
    setSearchResults([]);
    await fetchSearchResults(1, true);
    setIsResultsPopupOpen(true);
  };

  const applyFilters = async () => {
    setIsFilterOpen(false);
    setIsSearching(true);
    setCurrentPage(1);
    setSearchResults([]);
    await fetchSearchResults(1, true);
    setIsResultsPopupOpen(true);
  };

  const closeResultsPopup = () => {
    setIsResultsPopupOpen(false);
    setIsSearching(false);
    setSearchResults([]);
    setTotalResults(0);
    setCurrentPage(1);
    setHasMore(false);
  };

  useEffect(() => {
    if (!isSearching || loading || !hasMore) return;

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !loading && hasMore) {
          fetchSearchResults(currentPage + 1, false);
        }
      },
      { threshold: 0.1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [isSearching, loading, hasMore, currentPage, fetchSearchResults]);

  const currentGenres = mediaType === 'movie' ? movieGenres : tvGenres;
  const currentSortOptions = mediaType === 'movie' ? movieSortOptions : tvSortOptions;

  const getResultTitle = () => {
    const typeLabel = mediaType === 'movie' ? 'Movies' : 'TV Shows';
    if (searchQuery) {
      return `Results for "${searchQuery}"`;
    }
    let titleParts = [];
    if (selectedGenre) titleParts.push(currentGenres.find(g => g.id.toString() === selectedGenre)?.name);
    if (selectedYear) titleParts.push(selectedYear);
    if (selectedLanguage) titleParts.push(languages.find(l => l.code === selectedLanguage)?.name);
    if (titleParts.length > 0) return titleParts.join(' ') + ' ' + typeLabel;
    return `Filtered ${typeLabel}`;
  };


  if (error) {
    return (
      <main className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#01FAFD] text-lg">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-6 py-2 bg-[#01FAFD] text-[#06080C] rounded-lg font-bold"
          >
            Retry
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="w-full min-h-screen bg-[#06080C] relative overflow-x-hidden flex flex-col items-center justify-start selection:bg-[#01FAFD] selection:text-[#06080C]">

      {/* Pattern Squares Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(1, 250, 253, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(1, 250, 253, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>


      {/* ============================================= */}
      {/* Hero */}
      {/* ============================================= */}
      <Hero movies={movies.slice(0, 5)} onOpenFilters={() => setIsFilterOpen(true)} />


      {/* ============================================= */}
      {/* FILTER POPUP */}
      {/* ============================================= */}
      <FilterPopup
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        mediaType={mediaType}
        setMediaType={setMediaType}
        sortBy={sortBy}
        setSortBy={setSortBy}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
        applyFilters={applyFilters}
        currentGenres={currentGenres}
        currentSortOptions={currentSortOptions}
        activeFiltersCount={activeFiltersCount}
      />

      {/* ============================================= */}
      {/* RESULTS POPUP */}
      {/* ============================================= */}
      <ResultsPopup
        isOpen={isResultsPopupOpen}
        onClose={closeResultsPopup}
        results={searchResults}
        totalResults={totalResults}
        mediaType={mediaType}
        title={getResultTitle()}
        loading={loading}
        hasMore={hasMore}
        observerTarget={observerTarget}
      />

      {/* ============================================= */}
      {/* INFINITE MOVIE ROWS - Only show when not searching */}
      {/* ============================================= */}
      {!isSearching && !isResultsPopupOpen && movies.length > 0 && tvShows.length > 0 && (
        <section className="relative z-20 bg-transparent pb-16 w-full">
          <InfiniteMovieRows
            movies={movies}
            tvShows={tvShows}
          />
        </section>
      )}

      {/* ============================================= */}
      {/* HERO TRAILER STAGE */}
      {/* ============================================= */}
      {!isSearching && !isResultsPopupOpen && (
        <HeroTrailerStage
          movies={movies}
          heroMovie={heroMovie}
          isSearching={isSearching}
        />
      )}

      <RectangleAd />

      {/* Search Modal */}
      <AnimatePresence>
        {isSearchModalOpen && (
          <div className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-md flex items-center justify-center p-4" onClick={() => setIsSearchModalOpen(false)}>
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gradient-to-br from-[#0A0E14] to-[#06080C] rounded-2xl border border-[#1a2230] p-6 md:p-8 shadow-2xl">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl md:text-2xl font-bold text-white">Search FlixTor</h2>
                  <button onClick={() => setIsSearchModalOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-500" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search movies or popular TV shows..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    className="w-full pl-12 pr-4 py-3 md:py-4 bg-[#10151D] border border-[#1a2230] rounded-xl text-white text-base md:text-lg focus:outline-none focus:border-[#01FAFD] transition-colors"
                    autoFocus
                  />
                </div>

                <div className="flex gap-3 mt-4">
                  <button
                    onClick={() => setMediaType('movie')}
                    className={`flex-1 py-2 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                      mediaType === 'movie' ? 'bg-[#01FAFD] text-[#06080C]' : 'bg-[#10151D] text-gray-400'
                    }`}
                  >
                    <Film className="w-4 h-4" />
                    Movies
                  </button>
                  <button
                    onClick={() => setMediaType('tv')}
                    className={`flex-1 py-2 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                      mediaType === 'tv' ? 'bg-[#01FAFD] text-[#06080C]' : 'bg-[#10151D] text-gray-400'
                    }`}
                  >
                    <Tv className="w-4 h-4" />
                    Popular TV Shows
                  </button>
                </div>

                <button
                  onClick={handleSearch}
                  className="w-full mt-6 py-3 md:py-4 bg-gradient-to-r from-[#01FAFD] to-[#01D4D7] hover:from-[#3FF9FB] hover:to-[#01FAFD] text-[#06080C] font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Search on FlixTor
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ============================================= */}
      {/* BOTTOM 3-CARD CAROUSEL */}
      {/* ============================================= */}
      {!isSearching && !isResultsPopupOpen && centerMediaItem && (
        <section className="relative w-full min-h-screen xl:min-h-[90vh] flex items-center overflow-hidden pt-28 pb-16 lg:py-0">
          <div className="absolute inset-y-0 left-0 w-32 z-[15] pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 z-[15] pointer-events-none" />

          <div className="absolute inset-0 z-0 transition-all duration-1000 ease-in-out">
            <Image
              src={`https://image.tmdb.org/t/p/w1280${centerMediaItem.backdrop_path}`}
              alt="Cinematic Backdrop"
              fill
              sizes="100vw"
              className="object-cover scale-105 opacity-25 filter blur-[1px] transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden hidden md:block">
            <div className="absolute top-12 left-1/4 w-[500px] h-[500px] bg-[#01FAFD]/10 rounded-full blur-[140px] motion-safe:animate-pulse" />
            <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#01D4D7]/10 rounded-full blur-[120px] motion-safe:animate-pulse" />
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-16 lg:px-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
              <h2 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-black tracking-tight text-white uppercase leading-[1.05] md:leading-[0.95] drop-shadow-2xl mb-6">
                FlixTor Movies <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3FF9FB] via-[#01FAFD] to-[#01D4D7]">
                  Free Streaming
                </span>
              </h2>

              <div className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed font-normal normal-case space-y-5">
                <p className="text-gray-300 leading-relaxed mb-4">
                  Everyone&apos;s talking about <strong className="text-white font-semibold">FlixTor</strong> and for good reason. It&apos;s the free streaming platform where you can watch the latest <strong className="text-white font-semibold">FlixTor movies</strong> and binge the most <strong className="text-white font-semibold">popular TV shows</strong> in HD. No catch, no fees, no limits. Just thousands of titles at your fingertips. Stop scrolling and start watching — your next favorite show is one click away.
                </p>
                <p className="text-xs sm:text-sm md:text-base text-gray-400 border-l-2 border-[#01FAFD] pl-4 italic">
                  Built for speed: FlixTor streams in HD on any connection, works on every device, and never asks you to create an account.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 pt-6 border-t border-[#1a2230]/60 text-gray-500 font-mono text-[10px] uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#01FAFD]" /> Zero Subscriptions
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#01FAFD]" /> No Account Required
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#01FAFD]" /> HD Playback
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex items-center justify-center order-1 lg:order-2 w-full h-[450px] md:h-[500px] relative overflow-hidden px-4 select-none">
              <div className="relative w-full h-full flex items-center justify-center">
                {leftMediaItem && (
                  <div className="absolute left-0 w-[45%] aspect-[2/3] rounded-2xl overflow-hidden opacity-25 filter blur-[1px] transform -translate-x-[20%] scale-85 bg-[#0A0E14] border border-white/5 shadow-2xl transition-all duration-1000 z-10 pointer-events-none hidden sm:block">
                    <Image
                      src={`https://image.tmdb.org/t/p/w342${leftMediaItem.poster_path}`}
                      alt="Previous Slide"
                      fill
                      sizes="200px"
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}

                {centerMediaItem && (
                  <div className="absolute w-[85%] sm:w-[75%] sm:left-6 lg:left-8 aspect-[2/3] rounded-2xl bg-gradient-to-b from-[#161C26] to-[#0A0E14] p-[1px] shadow-2xl shadow-black/95 transition-all duration-1000 z-30">
                    <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#1a2230] via-transparent to-[#01FAFD]/30 rounded-2xl opacity-70" />
                    <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden group">
                      <Image
                        src={`https://image.tmdb.org/t/p/w500${centerMediaItem.poster_path}`}
                        alt={centerMediaItem.title || centerMediaItem.name || "Trending on FlixTor"}
                        fill
                        sizes="(max-width: 1024px) 60vw, 380px"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        priority
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />
                      <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-[10px] font-bold text-white uppercase tracking-wider shadow-lg">
                        <span className="w-2 h-2 rounded-full bg-[#01FAFD] motion-safe:animate-ping" />
                        Now Trending
                      </div>
                      <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-white text-lg sm:text-xl font-black uppercase tracking-tight line-clamp-2 drop-shadow-md mb-2">
                          {centerMediaItem.title || centerMediaItem.name}
                        </h3>
                        <div className="flex items-center gap-4 text-[10px] font-mono text-gray-400">
                          <span className="flex items-center gap-1 text-[#01FAFD] font-bold">
                            ★ {centerMediaItem.vote_average?.toFixed(1) || '8.4'}
                          </span>
                          {(centerMediaItem.release_date || centerMediaItem.first_air_date) && (
                            <span>{new Date(centerMediaItem.release_date || centerMediaItem.first_air_date).getFullYear()}</span>
                          )}
                          <span className="px-1.5 py-0.5 rounded bg-white/10 text-white font-bold uppercase tracking-wider text-[8px]">
                            HD
                          </span>
                        </div>
                        <p className="text-gray-400 text-[11px] line-clamp-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed">
                          {centerMediaItem.overview || "Stream this title free right now on FlixTor."}
                        </p>
                        <Link
                          href={`/${(centerMediaItem.title || centerMediaItem.name || '').toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${centerMediaItem.id}`}
                          className="mt-4 w-full py-2.5 text-center bg-[#01FAFD] text-[#06080C] font-bold uppercase tracking-wider text-xs rounded-lg hover:bg-[#3FF9FB] transition-colors duration-200 shadow-xl opacity-0 group-hover:opacity-100"
                        >
                          Watch Stream
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {rightMediaItem && (
                  <div className="absolute right-0 w-[45%] aspect-[2/3] rounded-2xl overflow-hidden opacity-25 filter blur-[1px] transform translate-x-[20%] scale-85 bg-[#0A0E14] border border-white/5 shadow-2xl transition-all duration-1000 z-10 pointer-events-none hidden sm:block">
                    <Image
                      src={`https://image.tmdb.org/t/p/w342${rightMediaItem.poster_path}`}
                      alt="Next Slide"
                      fill
                      sizes="200px"
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}



    {/* ============================================= */}
    {/* VISIBLE SEO CONTENT & FAQ */}
    {/* ============================================= */}
    <section className="relative z-20 w-full px-4 sm:px-6 md:px-12 lg:px-16 py-20 border-t border-white/5 bg-[#06080C]">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4 leading-tight">
            Watch Free Movies & TV Shows Online on <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3FF9FB] to-[#01D4D7]">FlixTor</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            FlixTor is the ultimate free streaming destination for movie lovers. Watch Hollywood blockbusters, trending TV series, and anime in stunning HD quality — completely free, with no sign-up and no subscription required.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="rounded-2xl bg-white/[0.02] border border-white/5 p-6 hover:border-[#01FAFD]/30 transition-colors">
            <h3 className="text-[#01FAFD] font-bold text-lg mb-2">Zero Cost</h3>
            <p className="text-gray-400 text-sm leading-relaxed">No hidden fees, no credit cards, no premium tiers. Just press play and enjoy the show.</p>
          </div>
          <div className="rounded-2xl bg-white/[0.02] border border-white/5 p-6 hover:border-[#01FAFD]/30 transition-colors">
            <h3 className="text-[#01FAFD] font-bold text-lg mb-2">Lightning Fast</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Optimized for every connection. Loads in seconds on mobile, tablet, desktop, and smart TV.</p>
          </div>
          <div className="rounded-2xl bg-white/[0.02] border border-white/5 p-6 hover:border-[#01FAFD]/30 transition-colors">
            <h3 className="text-[#01FAFD] font-bold text-lg mb-2">Updated Daily</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Fresh titles added every single day across every genre. Never run out of things to watch.</p>
          </div>
        </div>

        {/* Genre Links */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-white mb-5">Explore by Genre on FlixTor</h3>
          <div className="flex flex-wrap gap-3">
            {[
              ["Action", "/genre/action"], ["Comedy", "/genre/comedy"], ["Horror", "/genre/horror"],
              ["Drama", "/genre/drama"], ["Romance", "/genre/romance"], ["Sci-Fi", "/genre/sci-fi"],
              ["Thriller", "/genre/thriller"], ["Animation", "/genre/animation"], ["Documentary", "/genre/documentary"],
            ].map(([label, href]) => (
              <Link 
                key={href} 
                href={href} 
                className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-gray-300 transition-all hover:scale-105 hover:border-[#01FAFD]/50 hover:bg-[#01FAFD]/10 hover:text-[#01FAFD]"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Interactive SEO FAQ Accordion */}
        <div className="border-t border-white/10 pt-12 max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
            Frequently Asked Questions about <span className="text-[#01FAFD]">FlixTor</span>
          </h2>
          
          <div className="flex flex-col gap-3">
            {[
              {
                q: "Is FlixTor really free, or is there a hidden catch?",
                a: "FlixTor is 100% free. There are no hidden fees, no premium subscriptions, and no mandatory account creation. You can browse and stream our entire library of movies and TV shows without paying anything."
              },
              {
                q: "Do I need to sign up or create an account to watch?",
                a: "No. We believe in instant access. Just visit the site, search for a movie or TV show, and click Play. No email, no password, and no registration required."
              },
              {
                q: "What video quality does FlixTor offer?",
                a: "We stream in Full HD (1080p) by default. The player also uses adaptive bitrate streaming, meaning it will automatically adjust to the best quality your internet connection can handle without buffering."
              },
              {
                q: "Can I watch FlixTor on my phone, tablet, or Smart TV?",
                a: "Yes. FlixTor is built with a mobile-first, responsive design. It works flawlessly on iOS, Android, tablets, laptops, and Smart TVs via your web browser. No app download needed."
              },
              {
                q: "What kind of content is available on FlixTor?",
                a: "You can watch a massive variety of content including trending Hollywood movies, classic films, popular TV series, and anime. Our library spans genres like Action, Comedy, Romance, Horror, Sci-Fi, Drama, and more."
              },
              {
                q: "Does FlixTor have subtitles?",
                a: "Yes, we provide subtitle support for many of our titles to ensure a great viewing experience for users around the world. You can toggle them directly from the video player."
              },
              {
                q: "Is there an official FlixTor app for Android or iOS?",
                a: "Currently, FlixTor is a web-based platform. There is no official app in the App Store or Play Store. We recommend accessing FlixTor directly through your mobile browser for the best, most up-to-date experience."
              },
              {
                q: "How often is new content added to FlixTor?",
                a: "Our library is updated daily. New trending movies and new TV episodes are added constantly, so there is always something fresh to watch when you visit."
              }
            ].map((item, index) => (
              <details 
                key={index}
                className="group rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden transition-all duration-300 open:bg-white/[0.04] open:border-[#01FAFD]/30"
              >
                <summary className="flex cursor-pointer items-center justify-between p-5 text-white font-semibold hover:text-[#01FAFD] transition-colors [&::-webkit-details-marker]:hidden">
                  <span className="pr-4">{item.q}</span>
                  {/* Custom Plus/Minus Icon using CSS rotation */}
                  <span className="relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/5 group-open:bg-[#01FAFD]/20">
                    <span className="absolute h-3 w-0.5 bg-white group-open:bg-[#01FAFD] transition-transform group-open:rotate-90 group-open:opacity-0" />
                    <span className="absolute w-3 h-0.5 bg-white group-open:bg-[#01FAFD]" />
                  </span>
                </summary>
                <div className="px-5 pb-5 pt-0 text-sm text-gray-400 leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>

      </div>
    </section>




      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #10151D;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #01D4D7;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #01FAFD;
        }
      `}</style>
    </main>
  );
}