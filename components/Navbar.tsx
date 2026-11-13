'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, Home, Compass, BookOpen, Film, Search, ListVideo, Tv, Bookmark } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsSearchModalOpen(false);
    setSearchQuery('');
  }, [pathname]);

  useEffect(() => {
    if (isSearchModalOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [isSearchModalOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSearchModalOpen) {
        setIsSearchModalOpen(false);
        setSearchQuery('');
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isSearchModalOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearchModalOpen(false);
      router.push(`/search/${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const openSearchModal = () => setIsSearchModalOpen(true);
  const closeSearchModal = () => {
    setIsSearchModalOpen(false);
    setSearchQuery('');
  };

  const navLinks = [
    { name: 'Home', href: '/', icon: Home, match: (p: string) => p === '/' },
    { name: 'Movies', href: '/movies', icon: Film, match: (p: string) => p === '/movies' || p.startsWith('/movie/') },
    { name: 'TV Shows', href: '/tv', icon: Tv, match: (p: string) => p === '/tv' || p.startsWith('/tv/') },
    { name: 'Match', href: '/match', icon: Compass, match: (p: string) => p === '/match' },
    { name: 'Lists', href: '/list', icon: ListVideo, match: (p: string) => p === '/list' || p.startsWith('/list/') },
    { name: 'Blog', href: '/blog', icon: BookOpen, match: (p: string) => p === '/blog' || p.startsWith('/blog/') },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ease-out ${
          isScrolled
            ? 'bg-[#06080C]/95 backdrop-blur-xl border-b border-white/5 py-2'
            : 'bg-gradient-to-b from-[#06080C]/90 via-[#06080C]/40 to-transparent py-4'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 flex items-center justify-between h-14 w-full gap-4">
          {/* ── Left: Logo ── */}
          <div className="flex items-center shrink-0">
            <Link href="/" className="z-[110] flex items-center group" aria-label="FlixTor home">
              <div
                className={`relative transition-all duration-300 origin-left ${
                  isScrolled ? 'w-28 h-9 md:w-32 md:h-10' : 'w-32 h-10 md:w-40 md:h-12'
                }`}
              >
                <Image
                  src="/img/header-logo.png"
                  alt="FlixTor"
                  fill
                  className="object-contain object-left drop-shadow-[0_0_8px_rgba(1,250,253,0.3)] group-hover:drop-shadow-[0_0_15px_rgba(1,250,253,0.6)] transition-all duration-300"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* ── Center: Bordered Nav Pill ── */}
          <div className="hidden lg:flex flex-1 items-center justify-center">
            <div className="flex items-center gap-1 px-1.5 py-1.5 rounded-full bg-[#0A0E14]/70 border border-white/10 backdrop-blur-md shadow-lg shadow-black/20">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = link.match(pathname || '');
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative flex items-center gap-2 px-3.5 xl:px-4 py-2 rounded-full text-[11px] xl:text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                      isActive
                        ? 'text-[#06080C] bg-[#01FAFD] shadow-[0_0_15px_rgba(1,250,253,0.4)]'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span className="hidden xl:inline">{link.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* ── Right: Actions ── */}
          <div className="flex items-center justify-end gap-1 sm:gap-2 shrink-0">
            {/* My Watchlist (desktop) */}
            <Link
              href="/library"
              className="hidden lg:flex items-center gap-2 px-3 xl:px-4 h-10 rounded-full text-gray-300 hover:text-[#01FAFD] border border-white/10 hover:border-[#01FAFD]/50 bg-[#0A0E14]/70 backdrop-blur-md transition-all"
              aria-label="My Watchlist"
              title="My Watchlist"
            >
              <Bookmark className="w-4 h-4" />
              <span className="hidden xl:inline text-[11px] font-bold tracking-widest uppercase">
                My Watchlist
              </span>
            </Link>

            {/* Search (desktop) */}
            <button
              onClick={openSearchModal}
              className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full text-gray-300 hover:text-[#01FAFD] hover:bg-white/5 transition-all"
              aria-label="Open search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Search (mobile) */}
            <button
              onClick={openSearchModal}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full text-gray-300 hover:text-[#01FAFD] hover:bg-white/5 transition-all"
              aria-label="Open search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full text-white hover:bg-white/5 transition-all"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Search Modal ── */}
      <AnimatePresence>
        {isSearchModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-xl flex items-start justify-center pt-32 p-4"
            onClick={closeSearchModal}
          >
            <motion.div
              initial={{ scale: 0.95, y: -20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <form onSubmit={handleSearch} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#01FAFD]/20 to-[#01D4D7]/20 rounded-2xl blur-xl transition-opacity opacity-0 group-focus-within:opacity-100" />
                <div className="relative flex items-center">
                  <Search className="absolute left-6 w-6 h-6 text-gray-400" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search movies, TV shows, genres..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-16 pr-16 py-5 md:py-6 bg-[#0A0E14] border border-white/10 rounded-2xl text-white text-lg md:text-xl font-medium tracking-wide focus:outline-none focus:border-[#01FAFD] transition-all placeholder-gray-500 shadow-2xl"
                    autoComplete="off"
                  />
                  <button
                    type="submit"
                    className="absolute right-4 p-2 bg-[#01FAFD] text-[#06080C] rounded-xl hover:bg-[#3FF9FB] transition-colors"
                    aria-label="Submit search"
                  >
                    <Search className="w-5 h-5 md:w-6 md:h-6 font-bold" />
                  </button>
                </div>
              </form>
              <div className="flex justify-center gap-4 mt-6 text-xs text-gray-500 font-medium">
                <span className="flex items-center gap-1">
                  <kbd className="bg-white/10 px-1.5 py-0.5 rounded text-white">Enter</kbd> to search
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="bg-white/10 px-1.5 py-0.5 rounded text-white">Esc</kbd> to close
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-[#06080C]/95 backdrop-blur-xl flex flex-col items-center justify-center pt-20 pb-10 overflow-y-auto"
          >
            <div className="flex flex-col gap-3 text-center px-6 w-full max-w-sm">
              {navLinks.map((link, i) => {
                const Icon = link.icon;
                const isActive = link.match(pathname || '');
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-4 text-lg font-bold tracking-widest uppercase transition-all p-4 rounded-xl border ${
                        isActive
                          ? 'bg-[#01FAFD]/10 text-[#01FAFD] border-[#01FAFD]/30'
                          : 'text-gray-400 border-transparent hover:border-white/10 hover:bg-white/5'
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${isActive ? 'text-[#01FAFD]' : 'text-gray-500'}`} />
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}

              {/* My Watchlist inside mobile drawer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 + 0.1 }}
              >
                <Link
                  href="/library"
                  className={`flex items-center gap-4 text-lg font-bold tracking-widest uppercase transition-all p-4 rounded-xl border ${
                    pathname === '/library'
                      ? 'bg-[#01FAFD]/10 text-[#01FAFD] border-[#01FAFD]/30'
                      : 'text-gray-400 border-transparent hover:border-white/10 hover:bg-white/5'
                  }`}
                >
                  <Bookmark className={`w-5 h-5 ${pathname === '/library' ? 'text-[#01FAFD]' : 'text-gray-500'}`} />
                  My Watchlist
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}