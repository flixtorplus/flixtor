'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Movie, slugify } from "@/lib/tmdb";

function getDisplayName(item: any): string {
  return item.title || item.name || "Unknown";
}

function getRating(item: any): number {
  return item.vote_average || 0;
}

function getPosterPath(item: any): string {
  return item.poster_path;
}

function getYear(item: any): string {
  const date = item.release_date || item.first_air_date;
  return date ? new Date(date).getFullYear().toString() : "";
}

function getSlug(item: any): string {
  const name = getDisplayName(item);
  const id = item.id;
  return slugify(name, id);
}

function getHref(item: any): string {
  const slug = getSlug(item);
  if (item.name) {
    return `/tv/${slug}`;
  }
  return `/${slug}`;
}

function isTVShow(item: any): boolean {
  return !!item.name;
}

export default function LibraryPage() {
  const [activeTab, setActiveTab] = useState<
    "watchlist" | "favorites" | "recent"
  >("watchlist");
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const key = `wtw_${activeTab}`;
    const data = JSON.parse(localStorage.getItem(key) || "[]");
    const validItems = data.filter((item: any) => {
      const name = getDisplayName(item);
      const poster = getPosterPath(item);
      return name && name !== "Unknown" && poster;
    });
    setItems(validItems);
  }, [activeTab]);

  const getTabTitle = () => {
    switch (activeTab) {
      case "watchlist":
        return "Watchlist";
      case "favorites":
        return "Favorites";
      case "recent":
        return "Recently Viewed";
      default:
        return "Library";
    }
  };

  const getEmptyMessage = () => {
    switch (activeTab) {
      case "watchlist":
        return "Your watchlist is empty. Start adding movies and TV shows you want to watch!";
      case "favorites":
        return "No favorites yet. Heart the content you love!";
      case "recent":
        return "No recently viewed items. Start exploring!";
      default:
        return "Nothing here yet.";
    }
  };

  return (
    <main className="w-full min-h-screen bg-[#06080C] text-[#F3F4F6] selection:bg-[#01FAFD] selection:text-[#06080C] pt-24 md:pt-32 pb-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase mb-8 md:mb-12 drop-shadow-lg">
          Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3FF9FB] via-[#01FAFD] to-[#01D4D7]">
            Library
          </span>
        </h1>

        <div className="flex flex-wrap border-b border-white/5 mb-8 md:mb-12">
          {["watchlist", "favorites", "recent"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-6 md:px-8 py-3 md:py-4 uppercase font-bold tracking-widest text-xs md:text-sm whitespace-nowrap transition-all border-b-2 ${
                activeTab === tab
                  ? "border-[#01FAFD] text-white bg-[#01FAFD]/5"
                  : "border-transparent text-gray-500 hover:text-gray-300"
              }`}
            >
              {tab === "recent" ? "History" : tab}
            </button>
          ))}
        </div>

        {items.length === 0 ? (
          <div className="w-full py-16 md:py-24 text-center">
            <p className="text-gray-500 text-sm md:text-lg font-mono uppercase tracking-widest mb-2">
              {getTabTitle()} is empty
            </p>
            <p className="text-gray-600 text-xs md:text-sm max-w-md mx-auto">
              {getEmptyMessage()}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
            {items.map((item) => {
              const displayName = getDisplayName(item);
              const rating = getRating(item);
              const posterPath = getPosterPath(item);
              const year = getYear(item);
              const href = getHref(item);
              const isTV = isTVShow(item);

              return (
                <Link
                  href={href}
                  key={item.id}
                  className="relative block w-full aspect-[2/3] shrink-0 rounded-xl overflow-hidden transition-all duration-300 group hover:scale-105 hover:shadow-[0_10px_30px_rgba(1,250,253,0.2)] hover:ring-1 hover:ring-[#01FAFD]/50 bg-[#10151D]"
                >
                  <Image
                    src={`https://image.tmdb.org/t/p/w342${posterPath}`}
                    alt={displayName}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                    className="object-cover transition-all duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />

                  {/* Media Type Badge */}
                  <div className={`absolute top-2 left-2 z-10 backdrop-blur-md px-1.5 py-0.5 rounded-md text-[8px] font-bold uppercase tracking-wider shadow-lg ${
                    isTV
                      ? 'bg-blue-600 text-white'
                      : 'bg-gradient-to-r from-[#01FAFD] to-[#01D4D7] text-[#06080C]'
                  }`}>
                    {isTV ? 'TV SHOW' : 'MOVIE'}
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-[#06080C] via-[#06080C]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 md:p-4">
                    <h3 className="text-white font-bold text-xs md:text-sm leading-tight mb-1 line-clamp-2">
                      {displayName}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-[#01FAFD] font-bold text-[10px] md:text-xs tracking-wider">
                        ★ {rating.toFixed(1)}
                      </span>
                      {year && (
                        <span className="text-gray-400 text-[10px] md:text-xs">
                          {year}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}