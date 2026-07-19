import { useState, useEffect } from "react";
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
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  // Initialize and track active theme state
  useTheme();

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleLocationChange);
    
    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;

    window.history.pushState = function (data: any, unused: string, url?: string | null) {
      originalPushState.apply(this, [data, unused, url]);
      handleLocationChange();
    };

    window.history.replaceState = function (data: any, unused: string, url?: string | null) {
      originalReplaceState.apply(this, [data, unused, url]);
      handleLocationChange();
    };

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (href: string) => {
    if (currentPath !== "/" && currentPath !== "") {
      window.history.pushState({}, "", "/");
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

  const isDesignTokensRoute = currentPath === "/internal/design-tokens";

  return (
    <div className="min-h-screen bg-pure-white flex flex-col justify-between selection:bg-ink-black selection:text-pure-white" id="monochrome-app-root">
      
      {/* Conditional Rendering Based on Route Path */}
      {!isDesignTokensRoute ? (
        <div className="flex flex-col flex-grow animate-fade-in" id="portfolio-view-container">
          {/* Main Portfolio Nav */}
          <Navbar logo="Jayr" onLinkClick={handleLinkClick} />

          <main className="flex-grow bg-pure-white pt-16" id="portfolio-main-content">
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
            email="caturzajr4@gmail.com"
            onBackToTop={scrollToTop}
          />
        </div>
      ) : (
        <div className="flex flex-col flex-grow animate-fade-in" id="spec-view-container">
          {/* Design System Header Spec */}
          <Header />

          <main className="flex-grow bg-off-white py-8" id="spec-main-content">
            <div className="max-w-6xl mx-auto px-6 mb-6">
              <button
                onClick={() => window.history.pushState({}, "", "/")}
                className="font-mono text-xs font-bold text-ink-black hover:opacity-70 transition-opacity uppercase tracking-tight flex items-center gap-1.5 cursor-pointer"
              >
                ← Back to Live Portfolio
              </button>
            </div>
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

