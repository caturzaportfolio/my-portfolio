import Header from "./sections/Header";
import SwatchTest from "./sections/SwatchTest";
import { ArrowUp, Github } from "lucide-react";

export default function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-off-white flex flex-col justify-between selection:bg-ink-black selection:text-pure-white" id="monochrome-app-root">
      {/* Design System Header */}
      <Header />

      {/* Main Spec Showcase Content */}
      <main className="flex-grow bg-off-white" id="monochrome-main-content">
        <SwatchTest />
      </main>

      {/* Aesthetic Architectural Footer */}
      <footer className="border-t border-light-gray bg-off-white py-12 md:py-16" id="design-system-footer">
        <div className="w-full max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Copyright/Info */}
          <div className="space-y-2">
            <h5 className="font-display font-extrabold text-sm text-ink-black tracking-wider uppercase">
              Monochrome Foundation
            </h5>
            <p className="text-xs text-slate-gray leading-relaxed max-w-md">
              A meticulously balanced, dark-and-light neutral framework crafted in React + TypeScript + Vite with Tailwind CSS v4.
            </p>
            <p className="font-mono text-[9px] text-slate-gray/60 uppercase">
              © 2026 Monochrome System. Built with absolute intent.
            </p>
          </div>

          {/* Interactive footer links & action */}
          <div className="flex flex-wrap items-center gap-6" id="footer-actions">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-slate-gray hover:text-ink-black transition-colors"
            >
              <Github size={14} />
              <span>GITHUB</span>
            </a>
            
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 font-mono text-xs text-slate-gray hover:text-ink-black transition-colors"
              title="Scroll to Top"
            >
              <ArrowUp size={14} />
              <span>RETURN_TOP</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

