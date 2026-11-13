import { Metadata } from 'next';
import { Film, Flame, Heart, Clapperboard, Tv, Sparkles, Radio, Eye } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Story | FlixTor',
  description: 'Built by cinema lovers for cinema lovers. The raw, unfiltered story of why we created FlixTor to rescue the true art of filmmaking from the corporate algorithms.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: 'https://flixtor.plus/about',
  },
};

export default function AboutPage() {
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

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(circle_at_50%_0%,rgba(1,250,253,0.12),rgba(1,250,253,0.02)_45%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#01FAFD]/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#01FAFD]/5 rounded-full filter blur-[120px] pointer-events-none" />

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

        <div className="px-6 sm:px-12 py-16 relative z-10 space-y-28">
          
          {/* EXPOSURE UNIT // 01 */}
          <div className="relative border-b border-white/5 pb-16">
            <div className="absolute -top-8 left-0 text-[10px] font-mono text-gray-600 tracking-[0.2em] font-bold">FRAME // 001</div>
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#01FAFD]/20 bg-[#01FAFD]/10 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(1,250,253,0.1)]">
              <Heart className="w-3.5 h-3.5 text-[#01FAFD] animate-pulse" />
              <span className="text-[10px] font-mono text-[#01FAFD] uppercase tracking-widest font-bold">Unfiltered Passion</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight uppercase mb-8 text-white leading-none">
              WE ARE DRIVEN BY <br />
              <span className="bg-clip-text bg-gradient-to-r from-white via-[#01FAFD] to-[#01FAFD] drop-shadow-[0_2px_10px_rgba(1,250,253,0.2)] text-transparent">
                PURE OBSESSION.
              </span>
            </h1>
            
            <div className="space-y-6 text-gray-300 font-normal text-sm sm:text-base leading-relaxed tracking-wide">
              <p>
                Let&apos;s skip the sterile corporate definitions. We didn&apos;t build <span className="text-white font-semibold">FlixTor</span> because we detected an unexploited market gap, nor did we build it to package and trade your preferences. We built it because we are entirely, unapologetically captivated by the power of the frame.
              </p>
              <p>
                We live for the sharp snap of a clapperboard, the intoxicating rhythm of a flawless match-cut, the grain of authentic celluloid, and the heavy silence of a theater right before the projector throws its first beam of light across the room. For us, cinema isn&apos;t passive noise meant to kill time while you scroll through social media feeds.
              </p>
              <p className="border-l-2 border-[#01FAFD] pl-4 text-gray-400 italic bg-gradient-to-r from-[#01FAFD]/5 to-transparent py-2">
                It is the ultimate medium of human empathy. A single two-hour masterpiece has the power to permanently re-wire your perspective, transport you into unmapped worlds, and articulate the exact human emotions that regular language fails to capture.
              </p>
            </div>
          </div>

          {/* EXPOSURE UNIT // 02 */}
          <div className="relative border-b border-white/5 pb-16">
            <div className="absolute -top-8 left-0 text-[10px] font-mono text-gray-600 tracking-[0.2em] font-bold">FRAME // 002</div>
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-[#10151D] backdrop-blur-md mb-8">
              <Flame className="w-3.5 h-3.5 text-[#01FAFD]" />
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest font-bold">The Rebellion</span>
            </div>

            <h2 className="text-3xl font-black uppercase text-white mb-6 tracking-tight leading-tight">
              RESCUING THE ART FROM THE ALGORITHMS
            </h2>
            
            <p className="text-gray-300 font-normal text-sm sm:text-base leading-relaxed tracking-wide mb-8">
              Modern streaming has turned discovering a great film into an exhausting chore. Corporate platforms deliberately bury breathtaking independent cinema, legendary vintage pieces, and foreign masterpieces underneath clinical, engagement-maximizing carousels designed solely to push whatever content fits their quarterly metrics. We got tired of watching the soul of cinema get strangled by analytics. FlixTor is our counter-attack—an architecture that surrenders control back to the curator.
            </p>

            <div className="grid grid-cols-1 gap-4">
              
              <div className="group bg-[#10151D] border border-white/5 hover:border-[#01FAFD]/50 p-6 rounded-xl flex gap-4 items-start transition-all duration-300 shadow-md hover:shadow-[0_4px_20px_rgba(1,250,253,0.05)]">
                <div className="p-2.5 rounded-lg bg-[#0A0E14] border border-white/5 group-hover:border-[#01FAFD]/50 transition-colors">
                  <Clapperboard className="w-5 h-5 text-[#01FAFD] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="text-zinc-100 font-bold uppercase text-xs tracking-wider mb-1.5 group-hover:text-[#01FAFD] transition-colors">
                    Deep Narrative Exploration
                  </h3>
                  <p className="text-xs text-gray-400 font-normal leading-relaxed">
                    We transcend basic genre tags. Our exploration layer tracks raw creative lines, intricate screenplays, directorship roots, and cinematographic heritages to surface films based on artistic character rather than statistical traps.
                  </p>
                </div>
              </div>

              <div className="group bg-[#10151D] border border-white/5 hover:border-[#01FAFD]/50 p-6 rounded-xl flex gap-4 items-start transition-all duration-300 shadow-md hover:shadow-[0_4px_20px_rgba(1,250,253,0.05)]">
                <div className="p-2.5 rounded-lg bg-[#0A0E14] border border-white/5 group-hover:border-[#01FAFD]/50 transition-colors">
                  <Eye className="w-5 h-5 text-[#01FAFD] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="text-zinc-100 font-bold uppercase text-xs tracking-wider mb-1.5 group-hover:text-[#01FAFD] transition-colors">
                    Zero Predictive Isolation
                  </h3>
                  <p className="text-xs text-gray-400 font-normal leading-relaxed">
                    No predictive tracking models operate behind the scenes to filter out your tastes. You manage your discovery streams deliberately, cataloging, evaluating, and controlling your personal media vaults entirely on your own terms.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* EXPOSURE UNIT // 03 */}
          <div className="relative border-b border-white/5 pb-16">
            <div className="absolute -top-8 left-0 text-[10px] font-mono text-gray-600 tracking-[0.2em] font-bold">FRAME // 003</div>
            
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-white mb-6 tracking-tight flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-[#01FAFD]" />
              THE CURATOR&apos;S SANCTUARY
            </h2>
            
            <div className="space-y-6 text-gray-300 font-normal text-sm sm:text-base leading-relaxed tracking-wide">
              <p>
                FlixTor is an open haven engineered exclusively for creators, film collectors, midnight directors, and anyone who fundamentally believes that magnificent stories save lives. We are dedicated to keeping your interaction with the medium pure, immediate, and inspiring.
              </p>
              <p>
                Our core promise is simple: we keep this space clean. No tracking cookies trading your activity, no intrusive commercial blockades interrupting your lists, and no artificial bias. Thank you for stepping outside the predictable streaming cycles with us.
              </p>
              <p className="text-white font-medium tracking-wide">
                Kill the lights. Turn up the sound. Let&apos;s look at the screen and fall in love with filmmaking all over again.
              </p>
            </div>
          </div>

          {/* OUTRO */}
          <div className="text-center relative pt-4">
            <div className="absolute -top-6 left-0 text-[10px] font-mono text-gray-800 tracking-widest font-bold">EOF // ROLL_REEL_01</div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-[0.25em] text-[#01FAFD] font-black mb-3">
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              <span>[ PROJECTOR STEADY ]</span>
            </div>
            <p className="text-2xl font-black text-white uppercase tracking-tighter drop-shadow-[0_4px_12px_rgba(255,255,255,0.05)]">
              FLIXTOR <span className="text-gray-600">—</span> FOR THE CINEMA LOVERS.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}