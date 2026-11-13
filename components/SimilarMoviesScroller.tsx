"use client";

import { Movie, slugify } from "@/lib/tmdb";
import Image from "next/image";
import Link from "next/link";
import { Film } from "lucide-react";

export function SimilarMoviesScroller({ movies }: { movies: Movie[] }) {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="w-full max-w-7xl mx-auto flex gap-4 overflow-x-auto pb-8 pt-2 snap-x snap-mandatory scrollbar-hide px-4 sm:px-6 md:px-8">
      {movies.map((movie) => {
        const slug = slugify(movie.title, movie.id);
        const topGenres = movie.genres?.slice(0, 2) || [];
        const rating = movie.vote_average || 0;

        return (
          <Link
            href={`/${slug}`}
            key={movie.id}
            className="relative block w-32 sm:w-40 md:w-44 aspect-[2/3] shrink-0 rounded-xl overflow-hidden transition-all duration-300 group hover:scale-105 hover:shadow-[0_10px_30px_rgba(1,250,253,0.2)] hover:ring-1 hover:ring-[#01FAFD]/50 snap-start bg-[#10151D]"
          >
            <Image
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt={movie.title}
              fill
              loading="lazy"
              sizes="(max-width: 768px) 128px, 176px"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />

            {/* Movie Badge */}
            <div className="absolute top-2 left-2 z-10">
              <div className="flex items-center gap-1 bg-gradient-to-r from-[#01FAFD] to-[#01D4D7] px-1.5 py-0.5 rounded-md shadow-lg">
                <Film className="w-2.5 h-2.5 text-[#06080C]" />
                <span className="text-[8px] font-bold text-[#06080C] uppercase tracking-wider">
                  Movie
                </span>
              </div>
            </div>

            {/* Rating Badge (Always Visible) */}
            <div className="absolute top-2 right-2 z-10 bg-black/80 backdrop-blur-md px-1.5 py-0.5 rounded-md ring-1 ring-white/10">
              <div className="flex items-center gap-0.5">
                <span className="text-[#01FAFD] text-[10px]">★</span>
                <span className="text-white font-bold text-[9px] md:text-[10px]">
                  {rating ? rating.toFixed(1) : "N/A"}
                </span>
              </div>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
              <h3 className="text-white font-bold text-xs leading-tight line-clamp-2 mb-1">
                {movie.title}
              </h3>

              {topGenres.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-0.5">
                  {topGenres.map((genre: any, index) => (
                    <span 
                      key={index} 
                      className="text-[9px] bg-[#01FAFD]/20 text-[#01FAFD] px-1.5 py-0.5 rounded-sm font-medium border border-[#01FAFD]/30"
                    >
                      {typeof genre === 'string' ? genre : genre.name}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Link>
        );
      })}

      {/* Inline style for scrollbar-hide (in case it's not in your global css) */}
      <style jsx>{`
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