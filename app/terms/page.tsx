import { Metadata } from 'next';
import { Scale, ShieldCheck, HelpCircle, Terminal, AlertCircle, Ban, Radio, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | FlixTor',
  description: 'The operating rules of our cinematic sanctuary. Respect the art, respect the platform, and protect the community.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: 'https://flixtor.plus/terms',
  },
};

export default function TermsPage() {
  const sprocketHoles = Array.from({ length: 40 });

  return (
    <div className="min-h-screen bg-[#06080C] pt-32 pb-24 px-4 relative overflow-hidden selection:bg-[#01FAFD] selection:text-[#06080C]">
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scrollDown {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scrollUp {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .animate-film-down {
          animation: scrollDown 18s linear infinite;
        }
        .animate-film-up {
          animation: scrollUp 18s linear infinite;
        }
      `}} />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(circle_at_50%_0%,rgba(1,250,253,0.10),rgba(1,250,253,0.01)_45%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-[#01FAFD]/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-2xl mx-auto relative border-x border-white/5 bg-[#0A0E14]/80 backdrop-blur-md shadow-[0_0_50px_rgba(0,0,0,0.8)] rounded-xl">
        
        {/* LEFT FILM TRACK */}
        <div className="hidden sm:block absolute -left-[30px] top-4 bottom-4 w-3 overflow-hidden pointer-events-none opacity-40 [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]">
          <div className="flex flex-col gap-5 py-2 animate-film-down h-[200%]">
            {sprocketHoles.map((_, i) => (
              <div key={`left-1-${i}`} className="w-2.5 h-4 border border-white/10 rounded-[3px] bg-[#10151D] shrink-0 relative">
                <div className="absolute inset-0.5 bg-black/40 rounded-[1px]" />
              </div>
            ))}
            {sprocketHoles.map((_, i) => (
              <div key={`left-2-${i}`} className="w-2.5 h-4 border border-white/10 rounded-[3px] bg-[#10151D] shrink-0 relative">
                <div className="absolute inset-0.5 bg-black/40 rounded-[1px]" />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT FILM TRACK */}
        <div className="hidden sm:block absolute -right-[30px] top-4 bottom-4 w-3 overflow-hidden pointer-events-none opacity-40 [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]">
          <div className="flex flex-col gap-5 py-2 animate-film-up h-[200%]">
            {sprocketHoles.map((_, i) => (
              <div key={`right-1-${i}`} className="w-2.5 h-4 border border-white/10 rounded-[3px] bg-[#10151D] shrink-0 relative">
                <div className="absolute inset-0.5 bg-black/40 rounded-[1px]" />
              </div>
            ))}
            {sprocketHoles.map((_, i) => (
              <div key={`right-2-${i}`} className="w-2.5 h-4 border border-white/10 rounded-[3px] bg-[#10151D] shrink-0 relative">
                <div className="absolute inset-0.5 bg-black/40 rounded-[1px]" />
              </div>
            ))}
          </div>
        </div>

        {/* CONTENT */}
        <div className="px-6 sm:px-12 py-16 relative z-10 space-y-24">
          
          <div className="relative border-b border-white/5 pb-12">
            <div className="absolute -top-8 left-0 text-[10px] font-mono text-gray-600 tracking-[0.2em] font-bold">DOC // TERMS_01</div>
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#01FAFD]/20 bg-[#01FAFD]/10 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(1,250,253,0.1)]">
              <Scale className="w-3.5 h-3.5 text-[#01FAFD]" />
              <span className="text-[10px] font-mono text-[#01FAFD] uppercase tracking-widest font-bold">The Framework Pact</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight uppercase mb-6 text-white leading-none">
              TERMS OF THE <br />
              <span className="bg-clip-text bg-gradient-to-r from-white via-[#01FAFD] to-[#01FAFD] drop-shadow-[0_2px_10px_rgba(1,250,253,0.2)] text-transparent">
                ALLIANCE.
              </span>
            </h1>
            
            <p className="text-gray-400 font-mono text-xs tracking-wider uppercase">
              Operational Code Cycle: 2025 // Active Framework
            </p>
          </div>

          <div className="space-y-6 text-gray-300 font-normal text-sm sm:text-base leading-relaxed tracking-wide">
            <p>
              By accessing <span className="text-white font-medium">FlixTor</span>, you enter a mutual alliance to respect the pure, unfiltered spirit of art and exploration. This isn&apos;t a corporate trap designed to strip your user rights—it is a functional operating manual to ensure our interface remains stable, clean, and uncorrupted.
            </p>
            <p>
              Stepping inside this environment means you explicitly acknowledge and agree to respect the following foundational protocols.
            </p>
          </div>

          <div className="space-y-16">
            
            {/* CLAUSE 1 */}
            <div className="relative group">
              <div className="flex gap-4 items-start">
                <div className="p-2 rounded-lg bg-[#10151D] border border-white/5 text-[#01FAFD] shrink-0">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-lg font-bold uppercase text-white tracking-wide mb-3 group-hover:text-[#01FAFD] transition-colors">
                    01. Creative Workspace License
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    FlixTor grants you a non-exclusive, immediate personal access pathway to curate lists, explore film meta-structures, and organize your media pools. You agree not to map, harvest, or extract data arrays from our site architecture via malicious automated bots, scraper frameworks, or heavy stress vectors.
                  </p>
                </div>
              </div>
            </div>

            {/* CLAUSE 2 */}
            <div className="relative group">
              <div className="flex gap-4 items-start">
                <div className="p-2 rounded-lg bg-[#10151D] border border-white/5 text-[#01FAFD] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-lg font-bold uppercase text-white tracking-wide mb-3 group-hover:text-[#01FAFD] transition-colors">
                    02. Sanctuary Integrity & Conduct
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">
                    As a curator, you are entirely responsible for protecting your credentials and the reviews, ratings, and logs you anchor to your profile. 
                  </p>
                  <p className="text-gray-500 text-xs italic border-l border-white/10 pl-3">
                    Any user attempting to inject destructive code arrays, exploit search input queries, distribute spam loops, or mock up abusive material within community modules will face an immediate, permanent terminal ban.
                  </p>
                </div>
              </div>
            </div>

            {/* CLAUSE 3 */}
            <div className="relative group">
              <div className="flex gap-4 items-start">
                <div className="p-2 rounded-lg bg-[#10151D] border border-white/5 text-[#01FAFD] shrink-0">
                  <AlertCircle className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-lg font-bold uppercase text-white tracking-wide mb-3 group-hover:text-[#01FAFD] transition-colors">
                    03. External Data Credits (TMDB)
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    FlixTor functions as a high-fidelity rendering pipeline. Our catalogs are generated seamlessly via metadata sets provided directly by The Movie Database (TMDB). We do not officially claim ownership of copyrighted promotional banners, film logs, or cast poster graphics rendered through their open API streams.
                  </p>
                </div>
              </div>
            </div>

            {/* CLAUSE 4 */}
            <div className="relative group">
              <div className="flex gap-4 items-start">
                <div className="p-2 rounded-lg bg-[#10151D] border border-white/5 text-[#01FAFD] shrink-0">
                  <Ban className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-lg font-bold uppercase text-white tracking-wide mb-3 group-hover:text-[#01FAFD] transition-colors">
                    04. Refusal of Warranties
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    This platform is maintained and served &quot;as is&quot; and &quot;as available,&quot; completely clear of commercial performance tracking or guaranteed continuous operating uptimes. We hold no liability for structural modifications, database adjustments, or accidental disruptions to your synchronized libraries.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* AGREEMENT BLOCK */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-[#0A0E14] to-[#06080C] border border-white/5 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#01FAFD]/40 to-transparent" />
            <FileCheck className="w-5 h-5 text-[#01FAFD] mx-auto mb-3" />
            <p className="text-xs text-gray-400 leading-relaxed max-w-md mx-auto">
              We reserve the right to upgrade these core protocols to maintain alignment with updated security standards. Continued utilization of <span className="text-white font-medium">flixtor.plus</span> establishes full consent to this pact.
            </p>
          </div>

          {/* OUTRO */}
          <div className="text-center relative pt-4">
            <div className="absolute -top-6 left-0 text-[10px] font-mono text-gray-800 tracking-widest font-bold">EOF // TERMS_END</div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-[0.25em] text-[#01FAFD] font-black mb-3">
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              <span>[ SYSTEMS ONLINE ]</span>
            </div>
            <p className="text-2xl font-black text-white uppercase tracking-tighter drop-shadow-[0_4px_12px_rgba(255,255,255,0.05)]">
              HONOR THE CINEMA.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}