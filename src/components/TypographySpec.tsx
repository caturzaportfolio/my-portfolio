export default function TypographySpec() {
  const headings = [
    {
      tag: "H1",
      classes: "font-display font-extrabold text-5xl md:text-6xl tracking-tighter text-ink-black",
      preview: "THE BOLD ARCHITECTURE",
      description: "font-display font-extrabold text-5xl md:text-6xl tracking-tighter"
    },
    {
      tag: "H2",
      classes: "font-display font-bold text-3xl md:text-4xl tracking-tight text-ink-black",
      preview: "Minimalist Geometry & Spatial Rhythm",
      description: "font-display font-bold text-3xl md:text-4xl tracking-tight"
    },
    {
      tag: "H3",
      classes: "font-display font-semibold text-2xl tracking-tight text-ink-black",
      preview: "Establishing Structural Boundaries",
      description: "font-display font-semibold text-2xl tracking-tight"
    },
    {
      tag: "H4",
      classes: "font-display font-medium text-xl tracking-tight text-charcoal",
      preview: "Subtle Section Headers and Labels",
      description: "font-display font-medium text-xl tracking-tight"
    }
  ];

  const bodyTexts = [
    {
      label: "Body Large / Lead",
      classes: "font-sans text-lg md:text-xl text-charcoal leading-relaxed",
      preview: "A strict monochrome system is not about what you remove, but what you highlight. By stripping away hue, we emphasize contrast, pure geometry, and semantic layout precision.",
      description: "font-sans text-lg md:text-xl text-charcoal leading-relaxed"
    },
    {
      label: "Body Standard",
      classes: "font-sans text-base text-charcoal leading-relaxed",
      preview: "This design system is built specifically for projects demanding extreme visual polish, layout discipline, and timeless Swiss typography. The primary sans-serif face (Inter) provides exceptional readability, rendering cleanly even at very small scales, while the display face (Outfit) provides a robust, tight, structural heading look.",
      description: "font-sans text-base text-charcoal leading-relaxed"
    },
    {
      label: "Caption / Muted",
      classes: "font-sans text-sm text-slate-gray",
      preview: "Last compiled: July 2026. Design Spec v1.0. All dimensions in pixels/rems.",
      description: "font-sans text-sm text-slate-gray"
    }
  ];

  const monoTexts = [
    {
      label: "Monospace Code Block",
      classes: "font-mono text-xs bg-off-white border border-light-gray p-4 rounded-none overflow-x-auto text-ink-black",
      preview: `const monochromeTheme = {
  colors: {
    inkBlack: "#09090b",
    charcoal: "#27272a",
    slateGray: "#71717a",
    lightGray: "#e4e4e7",
    offWhite: "#fafafa"
  },
  fonts: {
    display: "Outfit",
    body: "Inter"
  }
};`,
      description: "font-mono text-xs text-ink-black"
    },
    {
      label: "Monospace Inline Specimen",
      classes: "font-mono text-xs text-slate-gray bg-off-white border border-light-gray/60 px-1.5 py-0.5 rounded",
      preview: "GET /api/v1/tokens --auth=monochrome",
      description: "font-mono text-xs"
    }
  ];

  return (
    <div className="space-y-16" id="typography-spec">
      {/* Headings Spec */}
      <div className="space-y-8" id="typography-headings">
        <div className="border-b border-light-gray pb-4">
          <h3 className="font-display font-bold text-lg text-ink-black tracking-tight">Display Headings (Outfit)</h3>
          <p className="text-sm text-slate-gray mt-1">Highly structured, tight letter spacing, and optimized for display purposes.</p>
        </div>

        <div className="space-y-8">
          {headings.map((h) => (
            <div key={h.tag} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start" id={`heading-spec-${h.tag}`}>
              <div className="font-mono text-xs text-slate-gray pt-1">
                <span className="font-bold text-ink-black block">{h.tag}</span>
                <span className="block mt-1 truncate max-w-full" title={h.description}>
                  {h.description}
                </span>
              </div>
              <div className="md:col-span-3">
                <p className={h.classes}>{h.preview}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Body Spec */}
      <div className="space-y-8" id="typography-body">
        <div className="border-b border-light-gray pb-4">
          <h3 className="font-display font-bold text-lg text-ink-black tracking-tight">Body Text (Inter)</h3>
          <p className="text-sm text-slate-gray mt-1">Neutral, clean, and highly legible for continuous reading.</p>
        </div>

        <div className="space-y-8">
          {bodyTexts.map((b) => (
            <div key={b.label} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start" id={`body-spec-${b.label.toLowerCase().replace(/\s+/g, "-")}`}>
              <div className="font-mono text-xs text-slate-gray pt-1">
                <span className="font-bold text-ink-black block">{b.label}</span>
                <span className="block mt-1 truncate max-w-full" title={b.description}>
                  {b.description}
                </span>
              </div>
              <div className="md:col-span-3">
                <p className={b.classes}>{b.preview}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Monospace Spec */}
      <div className="space-y-8" id="typography-mono">
        <div className="border-b border-light-gray pb-4">
          <h3 className="font-display font-bold text-lg text-ink-black tracking-tight">Technical & Monospace (JetBrains Mono)</h3>
          <p className="text-sm text-slate-gray mt-1">Excellent character differentiation, ideal for technical readings, figures, metrics, and keys.</p>
        </div>

        <div className="space-y-8">
          {monoTexts.map((m) => (
            <div key={m.label} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start" id={`mono-spec-${m.label.toLowerCase().replace(/\s+/g, "-")}`}>
              <div className="font-mono text-xs text-slate-gray pt-1">
                <span className="font-bold text-ink-black block">{m.label}</span>
                <span className="block mt-1 truncate max-w-full" title={m.description}>
                  {m.description}
                </span>
              </div>
              <div className="md:col-span-3">
                {m.label.includes("Code") ? (
                  <pre className={m.classes}><code>{m.preview}</code></pre>
                ) : (
                  <span className={m.classes}>{m.preview}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
