"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { RefreshCw, Home } from "lucide-react";

/**
 * Fullscreen page overlay.
 *
 * - ALWAYS mounted in the DOM (rendered from RootLayout). Real page content
 *   is rendered underneath it from SSR, so "View Source" shows the real page
 *   markup — this overlay is just a visual layer on top.
 * - Stays visible until:
 *     1. `window.load` fires (all images/scripts done),
 *     2. `document.fonts.ready` resolves (fonts loaded),
 *     3. a small minimum time (avoid flash on very fast loads).
 * - Falls back to the recovery panel if loading takes too long.
 */
export default function Loading() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [isLazy, setIsLazy] = useState(false); // recovery mode

  useEffect(() => {
    // Lock scroll while overlay is visible.
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    let finished = false;

    const MIN_MS = 700;          // don't flash on very fast loads
    const RECOVERY_MS = 8000;    // show recovery panel after this long
    const HARD_STOP_MS = 15000;  // absolute max wait

    const start = Date.now();

    const finish = () => {
      if (finished) return;
      finished = true;

      // Fade out, then unmount visually (content underneath is unaffected).
      setIsFading(true);
      window.setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow = prevOverflow || "";
      }, 500);
    };

    const waitMinThenFinish = () => {
      const elapsed = Date.now() - start;
      const wait = Math.max(0, MIN_MS - elapsed);
      window.setTimeout(finish, wait);
    };

    const whenReady = async () => {
      // 1) Fonts
      try {
        if ((document as any).fonts?.ready) {
          await (document as any).fonts.ready;
        }
      } catch {
        /* ignore */
      }

      // 2) window load (images, CSS, etc.)
      if (document.readyState === "complete") {
        waitMinThenFinish();
      } else {
        const onLoad = () => {
          window.removeEventListener("load", onLoad);
          waitMinThenFinish();
        };
        window.addEventListener("load", onLoad, { once: true });
      }
    };

    whenReady();

    // Recovery panel after 8s if still loading.
    const recoveryTimer = window.setTimeout(() => setIsLazy(true), RECOVERY_MS);

    // Hard stop — never trap the user.
    const hardStop = window.setTimeout(finish, HARD_STOP_MS);

    return () => {
      window.clearTimeout(recoveryTimer);
      window.clearTimeout(hardStop);
      document.body.style.overflow = prevOverflow || "";
    };
  }, []);

  // Fully unmount once faded out (content underneath stays untouched).
  if (!isVisible) return null;

  return (
    <div
      data-page-loader="true"
      aria-hidden="true"
      className={`fixed inset-0 z-[99999] bg-[#06080C] w-screen h-screen flex flex-col items-center justify-center m-0 p-0 overflow-hidden select-none left-0 top-0 transition-opacity duration-500 ease-out ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes netflixExpand {
          0% { transform: scaleX(0); opacity: 0.2; }
          40% { transform: scaleX(0.6); opacity: 1; }
          100% { transform: scaleX(1); opacity: 0.1; }
        }
        @keyframes subtleLogoPulse {
          0%, 100% { transform: scale(0.97); opacity: 0.9; }
          50% { transform: scale(1.03); opacity: 1; filter: drop-shadow(0 0 25px rgba(1,250,253,0.3)); }
        }
        @keyframes flareGlow {
          0%, 100% { opacity: 0.15; transform: scale(1) translate(-50%, -50%); }
          50% { opacity: 0.35; transform: scale(1.05) translate(-50%, -50%); }
        }
        .animate-netflix-line {
          animation: netflixExpand 1.8s cubic-bezier(0.5, 0, 0.1, 1) infinite;
        }
        .animate-brand-pulse {
          animation: subtleLogoPulse 2s ease-in-out infinite;
        }
        .animate-ambient-flare {
          animation: flareGlow 4s ease-in-out infinite;
        }
      `}} />

      {/* Atmospheric Cyan Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(1,250,253,0.15),rgba(1,250,253,0.01)_55%,transparent_75%)] pointer-events-none filter blur-[55px] animate-ambient-flare" />

      {/* Main Wrapper */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full max-w-xs px-4">
        {!isLazy ? (
          <div className="flex flex-col items-center w-full">
            {/* Logo */}
            <div className="relative w-32 h-32 flex items-center justify-center mb-5 overflow-visible">
              <div className="relative w-24 h-24 z-10 animate-brand-pulse">
                <Image
                  src="/img/load.png"
                  alt="FlixTor"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 120px) 100vw, 96px"
                />
              </div>
            </div>

            {/* Expanding track line (Cyan) */}
            <div className="w-36 h-[3px] bg-zinc-900/80 rounded-full relative overflow-hidden mb-5 border border-zinc-950">
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-transparent via-[#01FAFD] to-transparent rounded-full shadow-[0_0_10px_#01FAFD] origin-center animate-netflix-line" />
            </div>

            <span className="text-[11px] font-mono font-bold tracking-[0.35em] text-zinc-400 uppercase mr-[-0.35em] animate-pulse">
              Loading Data.
            </span>
          </div>
        ) : (
          /* Recovery Panel */
          <div className="flex flex-col items-center animate-fade-in duration-300">
            <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-4 text-zinc-400 shadow-md">
              <RefreshCw className="w-4 h-4 animate-spin text-[#01FAFD]" />
            </div>

            <h4 className="text-xs font-bold font-mono text-white uppercase tracking-wider mb-1">
              Stream Intercept
            </h4>
            <p className="text-[11px] text-zinc-500 leading-relaxed mb-5">
              The layout data thread is taking too long to load. Restoring view session...
            </p>

            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[10px] font-mono font-semibold text-zinc-400 hover:text-white border border-zinc-800 bg-zinc-900/40 px-3.5 py-1.5 rounded-lg transition-all hover:border-[#01FAFD]/50 active:scale-95"
            >
              <Home className="w-3 h-3 text-[#01FAFD]" /> Return Home
            </Link>
          </div>
        )}
      </div>

      {/* Frame Overlays */}
      <div className="absolute bottom-6 left-8 font-mono text-[8px] text-zinc-800 tracking-[0.2em] hidden sm:block">DATA_FEED_ACTIVE</div>
      <div className="absolute bottom-6 right-8 font-mono text-[8px] text-zinc-800 tracking-[0.2em] hidden sm:block">FLIXTOR_CORE</div>
    </div>
  );
}