import { useState } from "react";
import { Menu, X } from "lucide-react";

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

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (onLinkClick) {
      onLinkClick(href);
    } else {
      // Standard smooth scrolling or callback behavior
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="w-full bg-pure-white border-b border-light-gray sticky top-0 z-50 backdrop-blur-md bg-pure-white/95" id="portfolio-navbar">
      <div className="w-full max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <button
          onClick={() => handleNavClick("#top")}
          className="font-display font-black text-xl tracking-tighter text-ink-black uppercase leading-none hover:opacity-85 cursor-pointer"
          id="navbar-logo-btn"
        >
          {logo}
        </button>

        {/* Right: Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="font-mono text-xs font-bold uppercase text-slate-gray hover:text-ink-black tracking-wider transition-colors cursor-pointer"
              id={`nav-link-desktop-${link.label.toLowerCase()}`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile: Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-ink-black p-2 hover:bg-off-white transition-colors cursor-pointer border border-light-gray"
          aria-label="Toggle navigation menu"
          id="navbar-toggle-btn"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Drawer/Dropdown Panel */}
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
