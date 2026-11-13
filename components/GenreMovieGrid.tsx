'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Settings2, X, Check, Film } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Movie, slugify, TMDB_API_KEY } from '@/lib/tmdb';
import { Breadcrumbs } from '@/components/Breadcrumbs';

interface GenreMovieGridProps {
  initialMovies: Movie[];
  genreId: string;
  genreName: string;
  initialSortBy: string;
  breadcrumbPrefix?: { label: string; href: string };
}

const TMDB_GENRES: Record<number, string> = {
  28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy",
  80: "Crime", 99: "Documentary", 18: "Drama", 10751: "Family",
  14: "Fantasy", 36: "History", 27: "Horror", 10402: "Music",
  9648: "Mystery", 10749: "Romance", 878: "Sci-Fi", 10770: "TV Movie",
  53: "Thriller", 10752: "War", 37: "Western"
};

export function GenreMovieGrid({ initialMovies, genreId, genreName, initialSortBy, breadcrumbPrefix = { label: 'Genres', href: '/finder' } }: GenreMovieGridProps) {
  const [movies, setMovies] = useState<Movie[]>(initialMovies);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState(initialSortBy);
  const [releaseYear, setReleaseYear] = useState<string>('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const sortOptions = [
    { id: 'popularity.desc', name: 'Popularity' },
    { id: 'vote_average.desc', name: 'Highest Rated' },
    { id: 'vote_average.asc', name: 'Lowest Rated' },
    { id: 'primary_release_date.desc', name: 'Newest Releases' },
    { id: 'primary_release_date.asc', name: 'Oldest Releases' },
  ];
  
  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from({ length: 30 }, (_, i) => (currentYear - i).toString());

  const fetchMovies = async (pageNum: number, sort: string, year: string) => {
    try {
      setLoading(true);
      let url = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=${genreId}&sort_by=${sort}&page=${pageNum}`;
      if (year) {
        url += `&primary_release_year=${year}`;
      }
      const res = await fetch(url);
      const data = await res.json();
      const newMovies = data.results?.filter((m: Movie) => m.poster_path && m.backdrop_path) || [];
      
      if (newMovies.length === 0 || pageNum >= data.total_pages) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }
      
      if (pageNum === 1) {
        setMovies(newMovies);
      } else {
        setMovies(prev => [...prev, ...newMovies].filter((v, i, a) => a.findIndex(t => t.id === v.id) === i));
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (page > 1) {
      fetchMovies(page, sortBy, releaseYear);
    }
  }, [page]);

  const handleSortSelect = (sort: string) => {
    setSortBy(sort);
    setPage(1);
    fetchMovies(1, sort, releaseYear);
  };
  
  const handleYearSelect = (year: string) => {
    const newYear = releaseYear === year ? '' : year;
    setReleaseYear(newYear);
    setPage(1);
    fetchMovies(1, sortBy, newYear);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !loading && hasMore) {
          setPage(p => p + 1);
        }
      },
      { threshold: 1.0 }
    );
    
    const trigger = document.getElementById('load-more-trigger');
    if (trigger) observer.observe(trigger);
    
    return () => observer.disconnect();
  }, [loading]);

  const currentSortName = sortOptions.find(o => o.id === sortBy)?.name || 'Filters';

  useEffect(() => {
    if (isFilterOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isFilterOpen]);

  return (
    <>
      <div className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8 pt-32 px-6 md:px-16 lg:px-24">
        <div>
          <Breadcrumbs items={[breadcrumbPrefix, { label: genreName }]} />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white uppercase drop-shadow-xl mt-2">
            {genreName} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3FF9FB] to-[#01FAFD]">Movies</span>
          </h1>
          <p className="mt-4 text-gray-400 font-mono tracking-widest uppercase text-sm flex items-center gap-2">
            Sorted by: <span className="text-[#01FAFD] font-bold">{currentSortName}</span>
          </p>
        </div>

        <button
          onClick={() => setIsFilterOpen(true)}
          className="flex items-center gap-3 px-6 py-3 rounded-full bg-[#0A0E14] border border-white/10 hover:border-[#01FAFD]/50 text-white hover:text-[#01FAFD] transition-all font-bold uppercase tracking-wider text-sm shadow-xl"
        >
          <Settings2 className="w-5 h-5" />
          Filter & Sort
        </button>
      </div>

      <AnimatePresence>
        {isFilterOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex justify-end bg-black/80 backdrop-blur-md"
            onClick={() => setIsFilterOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-full md:w-96 bg-[#06080C] border-l border-white/10 shadow-2xl h-full overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="p-6 border-b border-white/5 flex items-center justify-between sticky top-0 bg-[#06080C]/95 backdrop-blur-sm z-10">
                <h3 className="text-xl font-bold uppercase tracking-widest flex items-center gap-2">
                  <Settings2 className="w-6 h-6 text-[#01FAFD]" /> Filters
                </h3>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6 space-y-8">
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Sort By</h4>
                  <div className="space-y-2">
                    {sortOptions.map(option => (
                      <button
                        key={option.id}
                        onClick={() => handleSortSelect(option.id)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg border transition-all ${
                          sortBy === option.id 
                            ? 'bg-[#01FAFD]/10 border-[#01FAFD] text-[#01FAFD]' 
                            : 'bg-[#0A0E14] border-white/5 text-white hover:border-white/20'
                        }`}
                      >
                        <span className="font-bold">{option.name}</span>
                        {sortBy === option.id && <Check className="w-5 h-5" />}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Release Year</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {yearOptions.map(year => (
                      <button
                        key={year}
                        onClick={() => handleYearSelect(year)}
                        className={`px-2 py-2 text-sm font-bold rounded-lg border transition-all ${
                          releaseYear === year 
                            ? 'bg-[#01FAFD] border-[#01FAFD] text-[#06080C]' 
                            : 'bg-[#0A0E14] border-white/5 text-gray-400 hover:border-white/20 hover:text-white'
                        }`}
                      >
                        {year}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6 pb-24">
        {movies.map((movie, idx) => {
          const slug = slugify(movie.title, movie.id);

          let topGenres: string[] = [];
          if (movie.genres && movie.genres.length > 0) {
            topGenres = movie.genres.slice(0, 2).map((g: any) => typeof g === 'string' ? g : g.name);
          } else if ((movie as any).genre_ids && (movie as any).genre_ids.length > 0) {
            topGenres = (movie as any).genre_ids
              .slice(0, 2)
              .map((id: number) => TMDB_GENRES[id])
              .filter(Boolean);
          }

          return (
            <Link
              href={`/${slug}`}
              key={`${movie.id}-${idx}`}
              className="group/card relative block w-full aspect-[2/3] shrink-0 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(1,250,253,0.2)] hover:ring-1 hover:ring-[#01FAFD]/50 bg-[#10151D]"
            >
              <Image
                src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                alt={movie.title}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                className="object-cover transition-all duration-500 group-hover/card:scale-110"
                referrerPolicy="no-referrer"
              />

              {/* MOVIE BADGE */}
              <div className="absolute top-2 left-2 z-20 flex items-center gap-1 bg-gradient-to-r from-[#01FAFD] to-[#01D4D7] px-1.5 py-0.5 rounded-md shadow-lg">
                <Film className="w-2.5 h-2.5 text-[#06080C]" />
                <span className="text-[8px] font-bold text-[#06080C] uppercase tracking-wider">Movie</span>
              </div>

              {/* RATING BADGE */}
              <div className="absolute top-2 right-2 z-20 flex items-center gap-1 bg-black/70 backdrop-blur-md border border-white/10 px-2 py-0.5 rounded-full shadow-md">
                <span className="text-[#01FAFD] text-[10px] md:text-xs">★</span>
                <span className="text-white font-bold text-[9px] md:text-[11px]">
                  {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
                </span>
              </div>

              {/* HOVER OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#06080C]/95 via-[#06080C]/40 to-transparent opacity-0 transition-opacity duration-500 flex flex-col justify-end p-3 md:p-4 group-hover/card:opacity-100 z-10">
                <span className="text-gray-400 text-[10px] md:text-[11px] font-medium mb-0.5">
                  {movie.release_date?.split("-")[0] || "N/A"}
                </span>
                <h3 className="text-white font-bold text-xs md:text-sm leading-tight mb-2 line-clamp-2">
                  {movie.title}
                </h3>
                {topGenres.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {topGenres.map((genreName, gIdx) => (
                      <span 
                        key={gIdx} 
                        className="text-[8px] md:text-[9px] px-1.5 md:px-2 py-0.5 rounded-md border border-[#01FAFD]/30 bg-[#01FAFD]/10 text-[#01FAFD] backdrop-blur-xs font-semibold uppercase tracking-wider"
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
      
      <div id="load-more-trigger" className="w-full h-24 flex items-center justify-center">
        {loading && (
          <div className="w-8 h-8 border-4 border-[#10151D] border-t-[#01FAFD] rounded-full animate-spin"></div>
        )}
      </div>
    </>
  );
}