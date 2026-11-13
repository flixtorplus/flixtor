'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from "next/image";
import Link from "next/link";
import { SlidersHorizontal, X, Tv, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TMDB_API_KEY } from "@/lib/tmdb";

const sortOptions = [
  { id: 'popularity.desc', name: 'Popularity' },
  { id: 'vote_average.desc', name: 'Top Rated' },
  { id: 'first_air_date.desc', name: 'Newest First' },
  { id: 'first_air_date.asc', name: 'Oldest First' },
];

const tvGenres = [
  { id: 10759, name: 'Action & Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 10762, name: 'Kids' },
  { id: 9648, name: 'Mystery' },
  { id: 10763, name: 'News' },
  { id: 10764, name: 'Reality' },
  { id: 10765, name: 'Sci-Fi & Fantasy' },
  { id: 10766, name: 'Soap' },
  { id: 10767, name: 'Talk' },
  { id: 10768, name: 'War & Politics' },
  { id: 37, name: 'Western' },
];

const currentYear = new Date().getFullYear();
const yearOptions = Array.from({ length: 30 }, (_, i) => (currentYear - i).toString());

const languages = [
  { code: 'en', name: 'English' }, { code: 'es', name: 'Spanish' }, { code: 'fr', name: 'French' },
  { code: 'ja', name: 'Japanese' }, { code: 'ko', name: 'Korean' }, { code: 'it', name: 'Italian' },
  { code: 'de', name: 'German' }, { code: 'zh', name: 'Chinese' }, { code: 'hi', name: 'Hindi' },
];

const ITEMS_PER_PAGE = 20;

export default function TVPage() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const [tempSortBy, setTempSortBy] = useState('popularity.desc');
  const [tempSelectedGenre, setTempSelectedGenre] = useState('');
  const [tempSelectedYear, setTempSelectedYear] = useState('');
  const [tempSelectedLanguage, setTempSelectedLanguage] = useState('');

  const [activeSortBy, setActiveSortBy] = useState('popularity.desc');
  const [activeSelectedGenre, setActiveSelectedGenre] = useState('');
  const [activeSelectedYear, setActiveSelectedYear] = useState('');
  const [activeSelectedLanguage, setActiveSelectedLanguage] = useState('');

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  const fetchPage = useCallback(async (pageNum: number) => {
    setLoading(true);
    try {
      let url = `https://api.themoviedb.org/3/discover/tv?api_key=${TMDB_API_KEY}&sort_by=${activeSortBy}&page=${pageNum}&include_adult=false`;
      if (activeSelectedGenre) url += `&with_genres=${activeSelectedGenre}`;
      if (activeSelectedYear) url += `&first_air_date_year=${activeSelectedYear}`;
      if (activeSelectedLanguage) url += `&with_original_language=${activeSelectedLanguage}`;

      const res = await fetch(url);
      const data = await res.json();
      const filtered = (data.results || []).filter((t: any) => t.poster_path && t.backdrop_path);

      setItems(filtered);
      setTotalResults(data.total_results || filtered.length);
      setTotalPages(Math.min(data.total_pages || 1, 500));
      setCurrentPage(pageNum);
    } catch (error) {
      console.error('Error fetching TV shows:', error);
      setItems([]);
    } finally {
      setLoading(false);
    }
  }, [activeSortBy, activeSelectedGenre, activeSelectedYear, activeSelectedLanguage]);

  useEffect(() => {
    fetchPage(1);
  }, [fetchPage]);

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage || loading) return;
    fetchPage(page);
    setTimeout(() => {
      gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  const applyFilters = () => {
    setActiveSortBy(tempSortBy);
    setActiveSelectedGenre(tempSelectedGenre);
    setActiveSelectedYear(tempSelectedYear);
    setActiveSelectedLanguage(tempSelectedLanguage);
    setIsFilterOpen(false);
  };

  const resetFilters = () => {
    setTempSortBy('popularity.desc');
    setTempSelectedGenre('');
    setTempSelectedYear('');
    setTempSelectedLanguage('');
    setActiveSortBy('popularity.desc');
    setActiveSelectedGenre('');
    setActiveSelectedYear('');
    setActiveSelectedLanguage('');
    setIsFilterOpen(false);
  };

  const openFilterPanel = () => {
    setTempSortBy(activeSortBy);
    setTempSelectedGenre(activeSelectedGenre);
    setTempSelectedYear(activeSelectedYear);
    setTempSelectedLanguage(activeSelectedLanguage);
    setIsFilterOpen(true);
  };

  const activeFiltersCount = [
    activeSelectedGenre,
    activeSelectedYear,
    activeSelectedLanguage,
    activeSortBy !== 'popularity.desc' ? 'sort' : null,
  ].filter(Boolean).length;

  const getPageNumbers = (): (number | '...')[] => {
    const pages: (number | '...')[] = [];
    const maxVisible = 7;
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push('...');
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (currentPage < totalPages - 2) pages.push('...');
      pages.push(totalPages);
    }
    return pages;
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE + 1;
  const endIndex = Math.min(currentPage * ITEMS_PER_PAGE, totalResults);

  return (
    <main className="min-h-screen bg-[#06080C] text-white selection:bg-[#01FAFD] selection:text-[#06080C] pb-24">

      {/* ───── SIMPLE, CLEAR HERO ───── */}
      <section className="w-full pt-28 md:pt-32 pb-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
          {/* Breadcrumb */}
          <div className="mb-6 text-sm text-gray-400">
            <Link href="/" className="hover:text-[#01FAFD] transition">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">TV Shows</span>
          </div>

          {/* Title + Filters button */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                TV Shows
              </h1>
              <p className="text-gray-400 text-sm md:text-base mt-2">
                {totalResults > 0
                  ? `${totalResults.toLocaleString()} series in the FlixTor catalog`
                  : 'Browse the FlixTor TV catalog'}
              </p>
            </div>

            <button
              onClick={openFilterPanel}
              className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-colors ${
                activeFiltersCount > 0 || isFilterOpen
                  ? 'bg-[#01FAFD] text-[#06080C] hover:bg-[#3FF9FB]'
                  : 'bg-[#10151D] text-white border border-white/10 hover:border-white/20 hover:bg-[#161C26]'
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters</span>
              {activeFiltersCount > 0 && (
                <span className="flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-bold bg-[#06080C] text-[#01FAFD]">
                  {activeFiltersCount}
                </span>
              )}
            </button>
          </div>

          {/* Quick filter chips */}
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              { id: 10759, name: 'Action & Adventure' },
              { id: 35, name: 'Comedy' },
              { id: 18, name: 'Drama' },
              { id: 9648, name: 'Mystery' },
              { id: 10765, name: 'Sci-Fi & Fantasy' },
              { id: 10764, name: 'Reality' },
              { id: 16, name: 'Animation' },
            ].map(g => (
              <button
                key={g.id}
                onClick={() => {
                  const isActive = activeSelectedGenre === g.id.toString();
                  setActiveSelectedGenre(isActive ? '' : g.id.toString());
                  setTempSelectedGenre(isActive ? '' : g.id.toString());
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeSelectedGenre === g.id.toString()
                    ? 'bg-[#01FAFD] text-[#06080C]'
                    : 'bg-[#10151D] text-gray-300 border border-white/10 hover:text-white hover:border-white/20'
                }`}
              >
                {g.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ───── FILTER DRAWER ───── */}
      <AnimatePresence>
        {isFilterOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="w-full overflow-hidden border-b border-white/5 bg-[#080B11]"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-6 sm:py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Sort */}
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Sort By</h4>
                  <div className="space-y-1">
                    {sortOptions.map(opt => (
                      <button
                        key={opt.id}
                        onClick={() => setTempSortBy(opt.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          tempSortBy === opt.id
                            ? 'bg-[#01FAFD] text-[#06080C]'
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
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Genre</h4>
                    {tempSelectedGenre && (
                      <button onClick={() => setTempSelectedGenre('')} className="text-xs text-[#01FAFD] hover:text-white transition">Clear</button>
                    )}
                  </div>
                  <div className="space-y-1 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                    {tvGenres.map(g => (
                      <button
                        key={g.id}
                        onClick={() => setTempSelectedGenre(g.id.toString())}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          tempSelectedGenre === g.id.toString()
                            ? 'bg-[#01FAFD] text-[#06080C]'
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
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">First Air Year</h4>
                    {tempSelectedYear && (
                      <button onClick={() => setTempSelectedYear('')} className="text-xs text-[#01FAFD] hover:text-white transition">Clear</button>
                    )}
                  </div>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 gap-1 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                    {yearOptions.map(y => (
                      <button
                        key={y}
                        onClick={() => setTempSelectedYear(y)}
                        className={`px-2 py-2 rounded-lg text-xs text-center transition-colors ${
                          tempSelectedYear === y
                            ? 'bg-[#01FAFD] text-[#06080C]'
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
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Language</h4>
                    {tempSelectedLanguage && (
                      <button onClick={() => setTempSelectedLanguage('')} className="text-xs text-[#01FAFD] hover:text-white transition">Clear</button>
                    )}
                  </div>
                  <div className="space-y-1 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                    {languages.map(lang => (
                      <button
                        key={lang.code}
                        onClick={() => setTempSelectedLanguage(lang.code)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          tempSelectedLanguage === lang.code
                            ? 'bg-[#01FAFD] text-[#06080C]'
                            : 'text-gray-400 hover:bg-[#10151D] hover:text-white'
                        }`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-4 border-t border-white/5">
                <button
                  onClick={applyFilters}
                  className="flex-1 px-4 py-3 rounded-lg bg-[#01FAFD] text-[#06080C] text-sm font-bold transition-colors hover:bg-[#3FF9FB]"
                >
                  Apply Filters
                </button>
                <button
                  onClick={resetFilters}
                  className="px-4 py-3 rounded-lg border border-white/10 text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Reset All
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ───── RESULTS ───── */}
      <section ref={gridRef} className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 mt-8 scroll-mt-24">
        {/* Active filter chips + result count */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-white/5">
          <div className="flex flex-wrap gap-2">
            {activeSelectedGenre && (
              <span className="px-3 py-1.5 rounded-full bg-[#01FAFD] text-[#06080C] text-xs font-bold flex items-center gap-1">
                {tvGenres.find(g => g.id.toString() === activeSelectedGenre)?.name}
                <X
                  className="w-3 h-3 cursor-pointer hover:opacity-70"
                  onClick={() => { setActiveSelectedGenre(''); setTempSelectedGenre(''); }}
                />
              </span>
            )}
            {activeSelectedYear && (
              <span className="px-3 py-1.5 rounded-full bg-[#01FAFD] text-[#06080C] text-xs font-bold flex items-center gap-1">
                {activeSelectedYear}
                <X
                  className="w-3 h-3 cursor-pointer hover:opacity-70"
                  onClick={() => { setActiveSelectedYear(''); setTempSelectedYear(''); }}
                />
              </span>
            )}
            {activeSelectedLanguage && (
              <span className="px-3 py-1.5 rounded-full bg-[#01FAFD] text-[#06080C] text-xs font-bold flex items-center gap-1">
                {languages.find(l => l.code === activeSelectedLanguage)?.name}
                <X
                  className="w-3 h-3 cursor-pointer hover:opacity-70"
                  onClick={() => { setActiveSelectedLanguage(''); setTempSelectedLanguage(''); }}
                />
              </span>
            )}
            {activeSortBy !== 'popularity.desc' && (
              <span className="px-3 py-1.5 rounded-full bg-[#01FAFD] text-[#06080C] text-xs font-bold flex items-center gap-1">
                {sortOptions.find(opt => opt.id === activeSortBy)?.name}
                <X
                  className="w-3 h-3 cursor-pointer hover:opacity-70"
                  onClick={() => { setActiveSortBy('popularity.desc'); setTempSortBy('popularity.desc'); }}
                />
              </span>
            )}
          </div>
          <span className="text-xs text-gray-500">
            {totalResults > 0
              ? <>Showing <span className="text-white font-bold">{startIndex}–{endIndex}</span> of {totalResults.toLocaleString()}</>
              : 'No TV shows'}
          </span>
        </div>

        {/* Grid / loading / empty */}
        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="aspect-[2/3] rounded-xl bg-[#10151D] animate-pulse" />
            ))}
          </div>
        ) : items.length > 0 ? (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
              {items.map((show) => {
                const title = show.name || show.title || "Untitled";
                const slug = `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${show.id}`;
                const year = show.first_air_date?.split('-')[0] || 'N/A';
                const rating = show.vote_average || 0;

                return (
                  <Link
                    key={show.id}
                    href={`/tv/${slug}`}
                    className="group relative block aspect-[2/3] shrink-0 rounded-xl overflow-hidden transition-all duration-500 will-change-transform hover:scale-105 hover:shadow-[0_10px_30px_rgba(1,250,253,0.2)] hover:ring-1 hover:ring-[#01FAFD]/50 shadow-md bg-[#10151D]"
                  >
                    <Image
                      src={`https://image.tmdb.org/t/p/w342${show.poster_path}`}
                      alt={title}
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                      className="object-cover transition-all duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />

                    <div className="absolute top-2 left-2 z-20">
                      <div className="flex items-center gap-1 bg-blue-600 px-2 py-0.5 rounded-md shadow-lg">
                        <Tv className="w-3 h-3 text-white" />
                        <span className="text-[8px] md:text-[9px] font-bold text-white uppercase tracking-wider">
                          TV Show
                        </span>
                      </div>
                    </div>

                    <div className="absolute top-2 right-2 z-20 flex items-center gap-1 bg-black/70 backdrop-blur-md border border-white/10 px-2 py-0.5 rounded-full shadow-md">
                      <span className="text-[#01FAFD] text-[10px] md:text-xs">★</span>
                      <span className="text-white font-bold text-[9px] md:text-[11px]">
                        {rating ? rating.toFixed(1) : "N/A"}
                      </span>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-[#06080C]/95 via-[#06080C]/40 to-transparent opacity-0 transition-opacity duration-500 flex flex-col justify-end p-3 group-hover:opacity-100 z-10">
                      <span className="text-gray-400 text-[11px] font-medium mb-0.5">{year}</span>
                      <h3 className="text-white font-bold text-xs md:text-sm leading-tight line-clamp-2">
                        {title}
                      </h3>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex flex-col items-center gap-4">
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`flex items-center gap-1 px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                      currentPage === 1
                        ? 'bg-[#10151D] text-gray-600 cursor-not-allowed'
                        : 'bg-[#10151D] text-gray-300 hover:bg-[#161C26] hover:text-white'
                    }`}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span className="hidden sm:inline">Prev</span>
                  </button>

                  {getPageNumbers().map((page, idx) =>
                    page === '...' ? (
                      <span key={`ellipsis-${idx}`} className="px-2 text-gray-500 select-none">…</span>
                    ) : (
                      <button
                        key={page}
                        onClick={() => goToPage(page)}
                        disabled={loading}
                        className={`min-w-[42px] px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                          page === currentPage
                            ? 'bg-[#01FAFD] text-[#06080C]'
                            : 'bg-[#10151D] text-gray-300 hover:bg-[#161C26] hover:text-white'
                        }`}
                      >
                        {page}
                      </button>
                    )
                  )}

                  <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`flex items-center gap-1 px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                      currentPage === totalPages
                        ? 'bg-[#10151D] text-gray-600 cursor-not-allowed'
                        : 'bg-[#10151D] text-gray-300 hover:bg-[#161C26] hover:text-white'
                    }`}
                  >
                    <span className="hidden sm:inline">Next</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="text-xs text-gray-500 font-mono">
                  Page <span className="text-white font-bold">{currentPage}</span> of {totalPages.toLocaleString()}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-24">
            <Tv className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400 text-lg font-semibold">No TV shows found.</p>
            <p className="text-gray-500 text-sm mt-2 mb-6">
              Try adjusting your filters or reset to see everything.
            </p>
            <button
              onClick={resetFilters}
              className="px-6 py-3 rounded-lg bg-[#01FAFD] text-[#06080C] text-sm font-bold hover:bg-[#3FF9FB] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #10151D; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #01FAFD; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #3FF9FB; }
      `}</style>
    </main>
  );
}