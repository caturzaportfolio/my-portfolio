import { ArrowRight } from "lucide-react";

export default function Hero() {
  const handleScrollToAbout = () => {
    const el = document.querySelector("#about");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="w-full min-h-[80vh] flex flex-col justify-between py-16 md:py-24 bg-pure-white border-b border-light-gray"
    >
      {/* Top Spacer */}
      <div className="hidden md:block h-6" />

      {/* Main Asymmetric Grid */}
      <div className="w-full max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
        {/* Left Column: Generous Whitespace / Tiny System Index */}
        <div className="md:col-span-4 space-y-2 select-none">
          <div className="font-mono text-[10px] text-slate-gray uppercase tracking-widest">
            [ PORTFOLIO_INDEX_2026 ]
          </div>
          <div className="font-mono text-[9px] text-slate-gray/70">
            LOC: 0.0.0.0 // STATE: ACTIVE
          </div>
        </div>

        {/* Right Column: Asymmetric Editorial Text Block */}
        <div className="md:col-span-8 space-y-12">
          {/* Main Statement with Bold Treatment exactly matching the reference */}
          <div className="space-y-6">
            <h1 className="font-sans font-light text-3xl md:text-5xl lg:text-6xl tracking-tight text-ink-black leading-[1.15] md:leading-[1.12]">
              Hello, I am <strong className="font-extrabold text-ink-black">jayr</strong>.
              <br />
              Engineering <strong className="font-bold text-ink-black">reliable</strong> frontend architectures — and growing into robust <strong className="font-bold text-ink-black">full-stack</strong> systems.
            </h1>
          </div>

          {/* Understated Contact / Info */}
          <div className="pt-6 border-t border-light-gray/60 max-w-lg space-y-6">
            <div className="space-y-1">
              <span className="font-mono text-[9px] text-slate-gray uppercase tracking-wider block">Direct Line</span>
              <a
                href="mailto:jayr@operator.net"
                className="font-mono text-sm font-bold text-ink-black hover:opacity-70 transition-opacity uppercase tracking-tight block"
              >
                jayr@operator.net
              </a>
            </div>

            {/* Micro-Action */}
            <button
              onClick={handleScrollToAbout}
              className="group flex items-center gap-2 font-mono text-[11px] font-bold text-ink-black uppercase tracking-wider hover:opacity-75 transition-all cursor-pointer"
            >
              <span>Explore full specifications</span>
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Understated bottom margin with pagination Motif */}
      <div className="w-full max-w-6xl mx-auto px-6 pt-16 flex justify-between items-center select-none text-slate-gray">
        <span className="font-mono text-[9px] tracking-widest uppercase">
          [ ARCHITECTURE_PORTFOLIO ]
        </span>
        
        {/* Minimal indicator */}
        <div className="flex items-center gap-4">
          <span className="font-mono text-[9px] uppercase tracking-wider">Scroll Down</span>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <span
                key={i}
                className={`h-1 w-1 rounded-none ${
                  i === 1 ? "bg-ink-black" : "bg-light-gray"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

