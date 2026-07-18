import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Reliability from "./sections/Reliability";
import Contact from "./sections/Contact";
import SwatchTest from "./sections/SwatchTest";
import Header from "./sections/Header";

type ViewMode = "portfolio" | "spec";

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>("portfolio");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (href: string) => {
    if (viewMode !== "portfolio") {
      setViewMode("portfolio");
      // Wait for rendering to complete before scrolling
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-pure-white flex flex-col justify-between selection:bg-ink-black selection:text-pure-white" id="monochrome-app-root">
      
      {/* Top Controller Bar */}
      <div className="bg-ink-black text-pure-white text-[10px] sm:text-xs font-mono py-3 px-6 flex flex-col sm:flex-row justify-between items-center gap-2 border-b border-light-gray/15 sticky top-0 z-[60]" id="system-mode-toggle-banner">
        <span className="tracking-widest opacity-80 uppercase">MONOCHROME ENGINE // v1.0.0</span>
        <div className="flex items-center gap-6">
          <button
            onClick={() => setViewMode("portfolio")}
            className={`cursor-pointer hover:text-light-gray transition-colors font-bold uppercase tracking-wider ${
              viewMode === "portfolio" ? "border-b border-pure-white pb-0.5" : "opacity-60"
            }`}
            id="toggle-mode-portfolio"
          >
            LIVE_PORTFOLIO
          </button>
          <span className="opacity-30">|</span>
          <button
            onClick={() => setViewMode("spec")}
            className={`cursor-pointer hover:text-light-gray transition-colors font-bold uppercase tracking-wider ${
              viewMode === "spec" ? "border-b border-pure-white pb-0.5" : "opacity-60"
            }`}
            id="toggle-mode-spec"
          >
            DESIGN_TOKENS_SPEC
          </button>
        </div>
      </div>

      {/* Conditional Rendering Based on Mode */}
      {viewMode === "portfolio" ? (
        <div className="flex flex-col flex-grow animate-fade-in" id="portfolio-view-container">
          {/* Main Portfolio Nav */}
          <Navbar logo="Jayr" onLinkClick={handleLinkClick} />

          <main className="flex-grow bg-pure-white" id="portfolio-main-content">
            {/* Hero Section */}
            <Hero />

            {/* About Section */}
            <About />

            {/* Skills Section */}
            <Skills />

            {/* Projects Section */}
            <Projects />

            {/* Reliability Section */}
            <Reliability />

            {/* Contact Section */}
            <Contact />
          </main>

          {/* Minimal Footer */}
          <Footer
            email="jayr@operator.net"
            onBackToTop={scrollToTop}
          />
        </div>
      ) : (
        <div className="flex flex-col flex-grow animate-fade-in" id="spec-view-container">
          {/* Design System Header Spec */}
          <Header />

          <main className="flex-grow bg-off-white py-8" id="spec-main-content">
            <SwatchTest />
          </main>

          {/* Fallback footer for design system view */}
          <Footer
            email="design-system@monochrome.net"
            onBackToTop={scrollToTop}
          />
        </div>
      )}
    </div>
  );
}
