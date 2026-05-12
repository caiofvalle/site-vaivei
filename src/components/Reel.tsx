import { Play } from "lucide-react";

export default function Reel() {
  return (
    <section id="reel" className="relative py-10 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px w-8 bg-white/20" />
          <span className="text-t4 text-[10px] tracking-[0.4em] uppercase">Showreel 2024</span>
        </div>

        {/* Video container — cinema 21:9 */}
        <div className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden video-placeholder group cursor-pointer">
          {/* Placeholder bg */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-white/[0.02]" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-white/10 scale-150 group-hover:scale-[2] transition-transform duration-700 opacity-0 group-hover:opacity-100" />
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full glass flex items-center justify-center border border-white/20 group-hover:border-white/40 transition-all duration-300">
                <Play size={24} className="text-white ml-1" fill="white" />
              </div>
            </div>
          </div>

          {/* Bottom info */}
          <div className="absolute bottom-6 left-8 right-8 flex items-end justify-between">
            <div>
              <p className="text-white/80 text-sm font-semibold tracking-wide">Vaivei Studio</p>
              <p className="text-white/40 text-xs tracking-widest uppercase">Showreel · 2024</p>
            </div>
            <div className="glass px-3 py-1.5 rounded-full">
              <span className="text-white/60 text-xs tracking-widest">2:47</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
