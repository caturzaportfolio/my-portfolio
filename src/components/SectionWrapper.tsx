import { ReactNode } from "react";

export interface SectionWrapperProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  sectionIndex?: number; // to light up pagination dots
}

export default function SectionWrapper({
  id,
  title = "",
  subtitle = "",
  children,
  className = "",
  sectionIndex = 0,
}: SectionWrapperProps) {
  // Parse section number and name, e.g., "01. About Me" -> ["01.", "About Me"]
  const match = title.match(/^(\d+\.)\s*(.*)$/);
  const number = match ? match[1] : "";
  const name = match ? match[2] : title;

  return (
    <section
      id={id}
      className={`w-full py-16 md:py-28 bg-pure-white border-b border-light-gray last:border-b-0 ${className}`}
    >
      <div className="w-full max-w-6xl mx-auto px-6">
        {/* Asymmetric 12-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Vertical Header & Motif (Desktop only) */}
          <div className="hidden md:flex md:col-span-3 flex-col items-center justify-between min-h-[300px] border-r border-light-gray/60 pr-8 select-none sticky top-28">
            {/* Rotated Title Panel */}
            <div className="flex flex-col items-center space-y-4">
              {number && (
                <span className="font-mono text-xs font-bold text-slate-gray tracking-wider">
                  {number}
                </span>
              )}
              {/* Vertical Text Label */}
              <h2 
                style={{ writingMode: 'vertical-rl' }}
                className="font-display font-black text-3xl lg:text-4xl tracking-tighter text-ink-black uppercase rotate-180 my-4 text-center"
              >
                {name}
              </h2>
            </div>

            {/* Pagination Dots Motif (recurring UI motif) */}
            <div className="flex flex-col items-center space-y-2 mt-8">
              <span className="font-sans text-[9px] font-bold text-slate-gray uppercase tracking-widest">
                INDEX
              </span>
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span
                    key={i}
                    className={`h-1.5 w-1.5 transition-all duration-300 rounded-none border ${
                      sectionIndex === i
                        ? "bg-ink-black border-ink-black scale-125"
                        : "bg-transparent border-light-gray"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Main Content */}
          <div className="col-span-1 md:col-span-9 space-y-8">
            {/* Mobile-only Header */}
            <div className="md:hidden space-y-2 pb-4 border-b border-light-gray/60">
              <div className="flex items-center gap-2">
                {number && (
                  <span className="font-mono text-xs font-bold text-slate-gray">
                    {number}
                  </span>
                )}
                <h2 className="font-display font-black text-2xl text-ink-black uppercase tracking-tighter">
                  {name}
                </h2>
              </div>
              {subtitle && (
                <p className="font-sans text-xs text-slate-gray leading-relaxed">
                  {subtitle}
                </p>
              )}
            </div>

            {/* Desktop Subtitle Info Strip (thin horizontal dividers) */}
            {subtitle && (
              <div className="hidden md:block border-b border-light-gray pb-4">
                <p className="font-sans text-[11px] font-semibold text-slate-gray uppercase tracking-wider">
                  {subtitle}
                </p>
              </div>
            )}

            {/* Content Slot */}
            <div className="animate-fade-in">
              {children}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
