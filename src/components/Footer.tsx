import { Mail, Github, Linkedin, ArrowUp } from "lucide-react";

export interface FooterProps {
  email?: string;
  github?: string;
  linkedin?: string;
  onBackToTop?: () => void;
}

export default function Footer({
  email = "jayr@operator.net",
  github = "https://github.com",
  linkedin = "https://linkedin.com",
  onBackToTop,
}: FooterProps) {
  const handleScrollTop = () => {
    if (onBackToTop) {
      onBackToTop();
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-off-white border-t border-light-gray py-12 md:py-16" id="portfolio-footer">
      <div className="w-full max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Branding & Tiny Pitch */}
        <div className="space-y-2">
          <h4 className="font-sans font-extrabold text-sm text-ink-black tracking-widest uppercase">
            Jayr Portfolio
          </h4>
          <p className="font-sans text-xs text-slate-gray max-w-xs leading-relaxed">
            Architectural layouts, minimal footprint, maximum accessibility. Engineered in black, gray, and white.
          </p>
        </div>

        {/* Contact Links & Return Button */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 font-mono text-xs">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-1.5 text-slate-gray hover:text-ink-black transition-colors"
              id="footer-email-link"
            >
              <Mail size={14} />
              <span>{email.toUpperCase()}</span>
            </a>

            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-slate-gray hover:text-ink-black transition-colors"
              id="footer-github-link"
            >
              <Github size={14} />
              <span>GITHUB</span>
            </a>

            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-slate-gray hover:text-ink-black transition-colors"
              id="footer-linkedin-link"
            >
              <Linkedin size={14} />
              <span>LINKEDIN</span>
            </a>
          </div>

          <button
            onClick={handleScrollTop}
            className="flex items-center gap-1.5 font-sans text-xs font-semibold text-slate-gray hover:text-ink-black transition-colors border border-light-gray/60 px-2.5 py-1.5 bg-pure-white hover:border-ink-black cursor-pointer uppercase tracking-wider"
            id="footer-scroll-top-btn"
          >
            <ArrowUp size={12} />
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
