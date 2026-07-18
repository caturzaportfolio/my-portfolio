import { Layers, HelpCircle, FileText } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b border-light-gray bg-pure-white sticky top-0 z-50 backdrop-blur-md bg-pure-white/90" id="design-system-header">
      <div className="w-full max-w-5xl mx-auto px-6 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Branding & Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-ink-black text-pure-white p-2.5 flex items-center justify-center border border-ink-black">
            <Layers size={20} className="stroke-[2.5]" />
          </div>
          <div>
            <h1 className="font-display font-extrabold text-xl tracking-tight text-ink-black uppercase leading-none">
              MONOCHROME
            </h1>
            <p className="font-mono text-[10px] tracking-widest text-slate-gray uppercase mt-1">
              Design System Spec // v1.0.0
            </p>
          </div>
        </div>

        {/* Navigation & Metadata */}
        <div className="flex items-center gap-6 text-sm">
          <div className="hidden md:flex items-center gap-2">
            <span className="h-2 w-2 bg-ink-black rounded-full animate-pulse" />
            <span className="font-mono text-xs text-charcoal font-semibold uppercase tracking-wider">
              System Active
            </span>
          </div>
          
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 font-mono text-xs text-slate-gray hover:text-ink-black transition-colors"
          >
            <FileText size={14} />
            <span>SPEC.MD</span>
          </a>
          
          <div className="h-4 w-px bg-light-gray hidden sm:block" />

          <div className="flex items-center gap-1.5 font-mono text-xs text-slate-gray">
            <HelpCircle size={14} />
            <span>2026-07-18</span>
          </div>
        </div>
      </div>
    </header>
  );
}
