import { ReactNode } from "react";

export interface SectionWrapperProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export default function SectionWrapper({ id, title, subtitle, children, className = "" }: SectionWrapperProps) {
  return (
    <section id={id} className={`w-full py-16 md:py-24 bg-pure-white border-b border-light-gray last:border-b-0 ${className}`}>
      <div className="w-full max-w-5xl mx-auto px-6">
        {(title || subtitle) && (
          <div className="mb-12 border-l-4 border-ink-black pl-6 py-1">
            {title && (
              <h2 className="font-display font-extrabold text-2xl md:text-3xl lg:text-4xl tracking-tighter text-ink-black uppercase">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="font-sans text-sm text-slate-gray mt-2 max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
