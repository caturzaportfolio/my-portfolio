import { useState, FormEvent } from "react";
import { Menu, X, Search, Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export interface NavLink {
  label: string;
  href: string;
}

export interface NavbarProps {
  logo?: string;
  links?: NavLink[];
  onLinkClick?: (href: string) => void;
}

export default function Navbar({
  logo = "Jayr",
  links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Reliability", href: "#reliability" },
    { label: "Contact", href: "#contact" },
  ],
  onLinkClick,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { theme, toggleTheme } = useTheme();

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (onLinkClick) {
      onLinkClick(href);
    } else {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching portfolio for: "${searchQuery}" (Simulated local index lookup)`);
      setSearchQuery("");
      setIsSearchOpen(false);
    }
  };

  return (
    <nav className="w-full bg-pure-white border-b border-light-gray sticky top-12 z-50 backdrop-blur-md bg-pure-white/95" id="portfolio-navbar">
      <div className="w-full max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Left: Brand Logo */}
        <button
          onClick={() => handleNavClick("#hero")}
          className="font-display font-black text-xl tracking-tighter text-ink-black uppercase leading-none hover:opacity-85 cursor-pointer"
          id="navbar-logo-btn"
        >
          {logo}
        </button>

        {/* Center-Right: Navigation & Action Cluster */}
        <div className="flex items-center gap-6 lg:gap-8">
          
          {/* Desktop Links (spaced out in center-right) */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="font-mono text-[11px] font-bold uppercase text-slate-gray hover:text-ink-black tracking-wider transition-colors cursor-pointer"
                id={`nav-link-desktop-${link.label.toLowerCase()}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Thin Vertical line separation */}
          <span className="hidden md:inline h-4 w-[1px] bg-light-gray" />

          {/* Far Right Action Icons: Search & Theme Toggle */}
          <div className="flex items-center gap-4">
            
            {/* Inline Interactive Search Button */}
            <div className="relative flex items-center">
              {isSearchOpen ? (
                <form onSubmit={handleSearchSubmit} className="flex items-center animate-fade-in">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search spec..."
                    autoFocus
                    className="w-28 sm:w-36 bg-off-white border border-light-gray px-2 py-1 text-xs font-mono text-ink-black focus:outline-none focus:border-ink-black rounded-none"
                    id="nav-search-input"
                  />
                  <button
                    type="button"
                    onClick={() => setIsSearchOpen(false)}
                    className="p-1 text-slate-gray hover:text-ink-black cursor-pointer"
                    aria-label="Close search"
                  >
                    <X size={14} />
                  </button>
                </form>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-1.5 text-slate-gray hover:text-ink-black transition-colors hover:bg-off-white border border-transparent hover:border-light-gray cursor-pointer"
                  aria-label="Search portfolio"
                  id="navbar-search-trigger"
                >
                  <Search size={14} />
                </button>
              )}
            </div>

            {/* Light/Dark Theme Switcher */}
            <button
              onClick={toggleTheme}
              className="p-1.5 text-slate-gray hover:text-ink-black transition-colors hover:bg-off-white border border-transparent hover:border-light-gray cursor-pointer"
              aria-label="Toggle visual theme"
              id="navbar-theme-toggle"
            >
              {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-ink-black p-1.5 hover:bg-off-white transition-colors cursor-pointer border border-light-gray"
              aria-label="Toggle navigation menu"
              id="navbar-toggle-btn"
            >
              {isOpen ? <X size={14} /> : <Menu size={14} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Panel */}
      {isOpen && (
        <div className="md:hidden border-b border-light-gray bg-pure-white animate-fade-in" id="navbar-mobile-drawer">
          <div className="px-6 py-6 space-y-4 flex flex-col">
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left font-mono text-xs font-bold uppercase text-slate-gray hover:text-ink-black tracking-wider py-2 border-b border-light-gray/40 last:border-0 cursor-pointer"
                id={`nav-link-mobile-${link.label.toLowerCase()}`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
