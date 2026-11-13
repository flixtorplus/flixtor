"use client";

import { useState, useEffect } from "react";
import { Movie } from "@/lib/tmdb";
import { Heart, BookmarkPlus, Share2, Check } from "lucide-react";

export function ActionButtons({ movie }: { movie: Movie }) {
  const [isCopied, setIsCopied] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatchlisted, setIsWatchlisted] = useState(false);

  useEffect(() => {
    const loadState = () => {
      const favs = JSON.parse(localStorage.getItem("wtw_favorites") || "[]");
      const watchlist = JSON.parse(localStorage.getItem("wtw_watchlist") || "[]");

      setIsFavorite(favs.some((m: Movie) => m.id === movie.id));
      setIsWatchlisted(watchlist.some((m: Movie) => m.id === movie.id));

      const recent = JSON.parse(localStorage.getItem("wtw_recent") || "[]");
      const filteredRecent = recent.filter((m: Movie) => m.id !== movie.id);
      filteredRecent.unshift(movie);
      localStorage.setItem(
        "wtw_recent",
        JSON.stringify(filteredRecent.slice(0, 20)),
      );
    };

    loadState();
  }, [movie]);

  const toggleFavorite = () => {
    const favs = JSON.parse(localStorage.getItem("wtw_favorites") || "[]");
    if (isFavorite) {
      localStorage.setItem(
        "wtw_favorites",
        JSON.stringify(favs.filter((m: Movie) => m.id !== movie.id)),
      );
      setIsFavorite(false);
    } else {
      localStorage.setItem("wtw_favorites", JSON.stringify([...favs, movie]));
      setIsFavorite(true);
    }
  };

  const toggleWatchlist = () => {
    const watchlist = JSON.parse(localStorage.getItem("wtw_watchlist") || "[]");
    if (isWatchlisted) {
      localStorage.setItem(
        "wtw_watchlist",
        JSON.stringify(watchlist.filter((m: Movie) => m.id !== movie.id)),
      );
      setIsWatchlisted(false);
    } else {
      localStorage.setItem(
        "wtw_watchlist",
        JSON.stringify([...watchlist, movie]),
      );
      setIsWatchlisted(true);
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="flex flex-wrap items-center gap-4">
      <button
        onClick={toggleWatchlist}
        className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold uppercase tracking-wider text-sm transition-all shadow-xl
          ${
            isWatchlisted
              ? "bg-white text-black border border-white/20"
              : "bg-[#10151D] text-white hover:bg-[#161C26] hover:text-[#01FAFD] border border-white/10 hover:border-[#01FAFD]/50"
          }`}
      >
        <BookmarkPlus className="w-5 h-5" />
        {isWatchlisted ? "In Watchlist" : "Add to Watchlist"}
      </button>

      <button
        onClick={toggleFavorite}
        className={`w-12 h-12 rounded-full flex items-center justify-center bg-[#10151D] border transition-all ${
          isFavorite
            ? "border-[#01FAFD]/60 text-[#01FAFD] shadow-[0_0_20px_rgba(1,250,253,0.3)]"
            : "border-white/10 text-white hover:bg-[#01FAFD]/10 hover:border-[#01FAFD]/50 hover:shadow-[0_0_20px_rgba(1,250,253,0.3)]"
        }`}
        aria-label="Add to Favorites"
      >
        <Heart
          className="w-5 h-5"
          fill={isFavorite ? "currentColor" : "none"}
        />
      </button>

      <button
        onClick={copyLink}
        className="w-12 h-12 rounded-full flex items-center justify-center bg-[#10151D] border border-white/10 text-gray-400 hover:text-[#01FAFD] hover:border-[#01FAFD]/50 transition-all"
        aria-label="Copy Link"
      >
        {isCopied ? (
          <Check className="w-5 h-5 text-green-500" />
        ) : (
          <Share2 className="w-5 h-5" />
        )}
      </button>
    </div>
  );
}