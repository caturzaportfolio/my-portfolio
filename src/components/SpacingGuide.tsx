export default function SpacingGuide() {
  const spacers = [
    { name: "xs", rem: "0.25rem", px: "4px", tailwind: "h-1 w-full" },
    { name: "sm", rem: "0.5rem", px: "8px", tailwind: "h-2 w-full" },
    { name: "md", rem: "1rem", px: "16px", tailwind: "h-4 w-full" },
    { name: "lg", rem: "1.5rem", px: "24px", tailwind: "h-6 w-full" },
    { name: "xl", rem: "2rem", px: "32px", tailwind: "h-8 w-full" },
    { name: "2xl", rem: "3rem", px: "48px", tailwind: "h-12 w-full" },
    { name: "3xl", rem: "4rem", px: "64px", tailwind: "h-16 w-full" },
    { name: "4xl", rem: "6rem", px: "96px", tailwind: "h-24 w-full" },
  ];

  return (
    <div className="space-y-12" id="spacing-guide">
      {/* Intro */}
      <div className="border-b border-light-gray pb-4">
        <h3 className="font-display font-bold text-lg text-ink-black tracking-tight">Spacing & Layout Scales</h3>
        <p className="text-sm text-slate-gray mt-1">Our visual grid utilizes standard geometric multiples to maintain consistent padding, margins, and vertical flow.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Visual Scale representation */}
        <div className="space-y-6" id="spacing-scale-visual">
          <h4 className="text-xs font-mono font-bold tracking-wider text-slate-gray uppercase">Spacing Scale (Height Blocks)</h4>
          <div className="space-y-4 bg-off-white border border-light-gray p-6">
            {spacers.map((spacer) => (
              <div key={spacer.name} className="flex items-center gap-4" id={`spacer-bar-${spacer.name}`}>
                <div className="w-16 font-mono text-xs text-ink-black font-semibold uppercase">{spacer.name}</div>
                <div className="flex-grow bg-light-gray relative">
                  <div className={`bg-ink-black ${spacer.tailwind}`} />
                </div>
                <div className="w-24 text-right font-mono text-xs text-slate-gray">
                  <span>{spacer.px}</span>
                  <span className="opacity-50 mx-1">/</span>
                  <span className="opacity-70">{spacer.rem}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Padding and Layout Conventions */}
        <div className="space-y-6" id="spacing-layout-rules">
          <h4 className="text-xs font-mono font-bold tracking-wider text-slate-gray uppercase">Layout Conventions</h4>

          <div className="space-y-4">
            <div className="border border-light-gray bg-pure-white p-5">
              <div className="font-mono text-xs text-slate-gray uppercase tracking-wider mb-2">01. Max-Width Container</div>
              <h5 className="font-display font-bold text-base text-ink-black">Content Bound</h5>
              <p className="text-sm text-slate-gray mt-1">
                All primary content is wrapped inside a maximum width container of <code className="bg-off-white px-1 py-0.5 rounded border border-light-gray font-mono text-xs text-ink-black">max-w-5xl (1024px)</code> with responsive side margins <code className="bg-off-white px-1 py-0.5 rounded border border-light-gray font-mono text-xs text-ink-black">mx-auto px-6</code>.
              </p>
            </div>

            <div className="border border-light-gray bg-pure-white p-5">
              <div className="font-mono text-xs text-slate-gray uppercase tracking-wider mb-2">02. Section Margins</div>
              <h5 className="font-display font-bold text-base text-ink-black">Vertical Rhythm</h5>
              <p className="text-sm text-slate-gray mt-1">
                Sections are separated by consistent vertical spacing of <code className="bg-off-white px-1 py-0.5 rounded border border-light-gray font-mono text-xs text-ink-black">py-16 md:py-24</code> to encourage breathing space.
              </p>
            </div>

            <div className="border border-light-gray bg-pure-white p-5">
              <div className="font-mono text-xs text-slate-gray uppercase tracking-wider mb-2">03. High-Contrast Borders</div>
              <h5 className="font-display font-bold text-base text-ink-black">Structural Outlines</h5>
              <p className="text-sm text-slate-gray mt-1">
                Visual panels use tight structural margins, exact borders of <code className="bg-off-white px-1 py-0.5 rounded border border-light-gray font-mono text-xs text-ink-black">border border-light-gray</code>, and minimalist sharp square corners (<code className="bg-off-white px-1 py-0.5 rounded border border-light-gray font-mono text-xs text-ink-black">rounded-none</code>).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
