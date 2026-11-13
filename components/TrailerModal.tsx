'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, X } from "lucide-react";
import { Video } from "@/lib/tmdb";

export function TrailerModal({ videos }: { videos: Video[] }) {
  const [isOpen, setIsOpen] = useState(false);

  const trailer =
    videos.find((v) => v.type === "Trailer" && v.site === "YouTube") ||
    videos.find((v) => v.site === "YouTube");

  // Lock body scroll while modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = 'var(--removed-body-scroll-bar-size, 0px)';
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen]);

  if (!trailer) return null;

  return (
    <>
      {/* Watch Trailer Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-6 py-3 rounded-full font-bold uppercase tracking-wider text-sm transition-all shadow-xl bg-[#01FAFD] text-[#06080C] hover:bg-[#3FF9FB] border border-[#01FAFD] hover:border-[#3FF9FB] group shrink-0 shadow-[#01FAFD]/20"
      >
        <Play className="w-5 h-5 fill-current" />
        Watch Trailer
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 w-screen h-screen z-[99999] flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-md overflow-hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(1,250,253,0.4),0_0_100px_rgba(0,0,0,0.8)] border border-[#01FAFD]/40"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-[100000] w-11 h-11 bg-black/70 hover:bg-[#01FAFD] text-white hover:text-[#06080C] rounded-full flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-[#01FAFD] backdrop-blur-sm shadow-xl group/btn"
                aria-label="Close Trailer"
              >
                <X className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
              </button>

              {/* Video Player */}
              <iframe
                src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&rel=0&showinfo=0&modestbranding=1`}
                title={trailer.name}
                className="w-full h-full border-none absolute inset-0 bg-black"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}