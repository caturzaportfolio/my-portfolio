import { ArrowDown, Terminal } from "lucide-react";
import Button from "../components/Button";

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
      className="w-full min-h-[85vh] flex flex-col justify-between py-12 md:py-20 bg-pure-white border-b border-light-gray"
    >
      {/* Top Margin Spacer */}
      <div className="hidden md:block h-8" />

      {/* Hero Visual Anchor & Copy */}
      <div className="w-full max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-8 space-y-6">
          {/* Tagline / Subtitle */}
          <div className="flex items-center gap-2 font-mono text-xs text-slate-gray uppercase tracking-widest">
            <Terminal size={14} className="text-ink-black animate-pulse" />
            <span>OPERATING_STATE // ACTIVE</span>
          </div>

          {/* Big Typography Headings */}
          <div className="space-y-3">
            <h1 className="font-display font-black text-6xl md:text-7xl lg:text-8xl tracking-tighter text-ink-black uppercase leading-[0.9]">
              JAYR
            </h1>
            <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl tracking-tight text-charcoal">
              Frontend Engineer | Aspiring Full-Stack Developer
            </h2>
          </div>

          {/* One-line Value Statement */}
          <p className="font-sans text-base md:text-lg text-slate-gray max-w-2xl leading-relaxed">
            Engineering robust, high-contrast digital interfaces with a focus on strict layout discipline, predictable codebases, and predictable developer workflows.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Button variant="primary" onClick={handleScrollToAbout}>
              Explore Spec
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Floating Architectural Data Box */}
        <div className="md:col-span-4 border border-light-gray p-6 bg-off-white/40 hidden md:block">
          <div className="space-y-4">
            <div className="border-b border-light-gray pb-3">
              <span className="font-mono text-[9px] text-slate-gray uppercase block">SYSTEM INFO</span>
              <span className="font-sans text-xs text-charcoal font-bold">BS Information Systems (3rd Year)</span>
            </div>
            <div className="border-b border-light-gray pb-3">
              <span className="font-mono text-[9px] text-slate-gray uppercase block">PRIMARY STACK</span>
              <span className="font-sans text-xs text-charcoal font-bold">React • TypeScript • Tailwind</span>
            </div>
            <div>
              <span className="font-mono text-[9px] text-slate-gray uppercase block">WORKFLOW STATE</span>
              <span className="font-sans text-xs text-charcoal font-bold">Git Branching • Strict PR Review</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="w-full max-w-5xl mx-auto px-6 pt-12 flex justify-between items-center text-slate-gray">
        <span className="font-mono text-[9px] tracking-widest uppercase">
          [ SCROLL_DOWN_TO_SPEC ]
        </span>
        <button
          onClick={handleScrollToAbout}
          className="p-2 border border-light-gray hover:border-ink-black hover:text-ink-black transition-colors rounded-none cursor-pointer"
          aria-label="Scroll to About section"
        >
          <ArrowDown size={14} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
}
