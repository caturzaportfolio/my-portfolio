import { useState } from "react";
import { Paintbrush, Type, Grid, Layout, ArrowRight, ExternalLink, Briefcase } from "lucide-react";
import ColorSwatch from "../components/ColorSwatch";
import TypographySpec from "../components/TypographySpec";
import SpacingGuide from "../components/SpacingGuide";

// Import reusable portfolio components
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import SectionWrapper from "../components/SectionWrapper";
import SkillBadge from "../components/SkillBadge";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";

type TabType = "colors" | "typography" | "spacing" | "mockups" | "portfolio";

export default function SwatchTest() {
  const [activeTab, setActiveTab] = useState<TabType>("colors");

  const tabs = [
    { id: "colors" as TabType, label: "01. Palette Swatches", icon: Paintbrush },
    { id: "typography" as TabType, label: "02. Typography Spec", icon: Type },
    { id: "spacing" as TabType, label: "03. Layout & Spacing", icon: Grid },
    { id: "mockups" as TabType, label: "04. Blueprint Mockups", icon: Layout },
    { id: "portfolio" as TabType, label: "05. Portfolio Components", icon: Briefcase },
  ];

  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-12 md:py-16" id="swatch-test-section">
      {/* Intro Hero */}
      <div className="mb-12 border-l-4 border-ink-black pl-6 py-2" id="design-intro-hero">
        <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl tracking-tighter text-ink-black uppercase">
          Strict Monochrome Spec
        </h2>
        <p className="font-sans text-base text-slate-gray mt-2 max-w-2xl leading-relaxed">
          A high-contrast design foundation. Stripped of hue to amplify the primary virtues of visual design: layout pacing, proportion, typographic precision, and structural contrast.
        </p>
      </div>

      {/* Interactive Spec Navigation */}
      <div className="border-b border-light-gray mb-10 overflow-x-auto scrollbar-none" id="spec-tabs-nav">
        <div className="flex gap-1 md:gap-4 min-w-max pb-px">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3.5 border-b-2 text-xs md:text-sm font-mono font-bold uppercase transition-all duration-200 outline-none ${
                  isActive
                    ? "border-ink-black text-ink-black bg-off-white/50"
                    : "border-transparent text-slate-gray hover:text-ink-black hover:border-light-gray"
                }`}
                id={`tab-trigger-${tab.id}`}
              >
                <Icon size={14} className={isActive ? "text-ink-black" : "text-slate-gray"} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Render Active View with Fade Transition Container */}
      <div className="transition-all duration-300 min-h-[400px]" id="swatch-active-pane">
        {activeTab === "colors" && (
          <div className="space-y-8 animate-fade-in" id="colors-pane">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-light-gray pb-4">
              <div>
                <h3 className="font-display font-bold text-lg text-ink-black tracking-tight">Grayscale Swatches</h3>
                <p className="text-sm text-slate-gray mt-1">Six custom-defined shades formulating a complete light-and-dark baseline system.</p>
              </div>
              <div className="font-mono text-xs text-slate-gray bg-off-white px-3 py-1.5 border border-light-gray">
                COLOR_SCALE // MONO_DEFAULT
              </div>
            </div>
            <ColorSwatch />
          </div>
        )}

        {activeTab === "typography" && (
          <div className="animate-fade-in" id="typography-pane">
            <TypographySpec />
          </div>
        )}

        {activeTab === "spacing" && (
          <div className="animate-fade-in" id="spacing-pane">
            <SpacingGuide />
          </div>
        )}

        {activeTab === "mockups" && (
          <div className="space-y-12 animate-fade-in" id="mockups-pane">
            {/* Mockups Intro */}
            <div className="border-b border-light-gray pb-4">
              <h3 className="font-display font-bold text-lg text-ink-black tracking-tight">System Components Showcase</h3>
              <p className="text-sm text-slate-gray mt-1">Real-world component mockups implementing our custom colors, fonts, and borders to verify interactive contrasts.</p>
            </div>

            {/* 2x2 Bento Mockups Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="blueprint-mockups-grid">
              {/* Form Element Block */}
              <div className="border border-light-gray p-6 bg-pure-white flex flex-col justify-between" id="mockup-form">
                <div>
                  <span className="font-mono text-[10px] tracking-wider text-slate-gray uppercase">Mockup 01 / Elements</span>
                  <h4 className="font-display font-bold text-xl text-ink-black tracking-tight mt-1 mb-4">Input & Interactive Controls</h4>
                  
                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-bold text-ink-black uppercase">System Email</label>
                      <input
                        type="text"
                        placeholder="operator@monochrome.system"
                        defaultValue="caturzajr4@gmail.com"
                        className="w-full bg-off-white border border-light-gray px-3 py-2 text-sm font-sans text-ink-black placeholder-slate-gray focus:outline-none focus:border-ink-black focus:bg-pure-white transition-all rounded-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-bold text-ink-black uppercase">Operation Scope</label>
                      <select className="w-full bg-off-white border border-light-gray px-3 py-2 text-sm font-sans text-ink-black focus:outline-none focus:border-ink-black focus:bg-pure-white transition-all rounded-none">
                        <option>Full Grayscale Audit</option>
                        <option>System Configuration ONLY</option>
                        <option>Typography Swatch verification</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 mt-6 pt-6 border-t border-light-gray/60">
                  <button className="flex-grow bg-ink-black text-pure-white font-mono text-xs font-bold uppercase py-2.5 px-4 hover:bg-charcoal transition-colors border border-ink-black rounded-none flex items-center justify-center gap-1">
                    <span>Execute Task</span>
                    <ArrowRight size={12} />
                  </button>
                  <button className="bg-pure-white text-ink-black font-mono text-xs font-bold uppercase py-2.5 px-4 hover:bg-off-white transition-all border border-light-gray rounded-none">
                    Reset
                  </button>
                </div>
              </div>

              {/* Data Table / List Block */}
              <div className="border border-light-gray p-6 bg-pure-white flex flex-col justify-between" id="mockup-list">
                <div>
                  <span className="font-mono text-[10px] tracking-wider text-slate-gray uppercase">Mockup 02 / List Specs</span>
                  <h4 className="font-display font-bold text-xl text-ink-black tracking-tight mt-1 mb-4">Key Tokens Data Audit</h4>

                  <div className="divide-y divide-light-gray/60">
                    <div className="py-2.5 flex justify-between items-center text-xs">
                      <span className="font-mono font-semibold text-charcoal">@/styles/design-system.md</span>
                      <span className="font-mono text-slate-gray bg-off-white px-2 py-0.5 border border-light-gray/60">ESTABLISHED</span>
                    </div>
                    <div className="py-2.5 flex justify-between items-center text-xs">
                      <span className="font-mono font-semibold text-charcoal">@tailwindcss/vite theme</span>
                      <span className="font-mono text-slate-gray bg-off-white px-2 py-0.5 border border-light-gray/60">ACTIVE</span>
                    </div>
                    <div className="py-2.5 flex justify-between items-center text-xs">
                      <span className="font-mono font-semibold text-charcoal">src/components/ColorSwatch</span>
                      <span className="font-mono text-slate-gray bg-off-white px-2 py-0.5 border border-light-gray/60">COMPILED</span>
                    </div>
                    <div className="py-2.5 flex justify-between items-center text-xs">
                      <span className="font-mono font-semibold text-charcoal">src/sections/SwatchTest</span>
                      <span className="font-mono text-slate-gray bg-off-white px-2 py-0.5 border border-light-gray/60">MOUNTED</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-light-gray/60 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-slate-gray uppercase">4 Files Registered</span>
                  <button className="font-mono text-xs text-ink-black font-bold uppercase flex items-center gap-1 hover:text-slate-gray transition-colors">
                    <span>Export Logs</span>
                    <ExternalLink size={12} />
                  </button>
                </div>
              </div>

              {/* Bento Card Detail */}
              <div className="md:col-span-2 border border-light-gray bg-off-white p-8 flex flex-col md:flex-row md:items-center justify-between gap-6" id="mockup-bento">
                <div className="space-y-2 max-w-lg">
                  <span className="font-mono text-[10px] tracking-wider text-slate-gray uppercase">SYSTEM NOTICE // OFF-WHITE SURFACE</span>
                  <h4 className="font-display font-extrabold text-2xl text-ink-black tracking-tight leading-none uppercase">
                    Minimalism is structural, not ornamental.
                  </h4>
                  <p className="text-sm text-slate-gray leading-relaxed">
                    By enforcing an absolute grayscale design philosophy, user interfaces benefit from reduced cognitive load and crystal clear focal points. Color can be introduced later with absolute purpose, or omitted entirely for an architectural-grade product aesthetic.
                  </p>
                </div>
                <div className="flex-shrink-0 bg-ink-black text-pure-white p-6 border border-ink-black flex flex-col justify-between h-40 w-full md:w-56">
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-[9px] tracking-widest text-pure-white/40 uppercase">METRIC_01</span>
                    <span className="h-2 w-2 bg-pure-white rounded-full" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-pure-white/60">System Contrasts</span>
                    <h5 className="font-display font-black text-4xl mt-1 tracking-tighter">100%</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "portfolio" && (
          <div className="space-y-16 animate-fade-in" id="portfolio-showcase">
            {/* Portfolio Intro */}
            <div className="border-b border-light-gray pb-4">
              <h3 className="font-display font-bold text-lg text-ink-black tracking-tight">Portfolio Components Library</h3>
              <p className="text-sm text-slate-gray mt-1">Reusable, high-contrast, fully typed TypeScript components built specifically for Jayr's developer portfolio.</p>
            </div>

            {/* Component 1: Navbar Preview */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-light-gray pb-2">
                <h4 className="font-mono text-xs font-bold text-ink-black uppercase">01. Responsive Navigation (Navbar)</h4>
                <span className="font-mono text-[10px] text-slate-gray">sticky / border-b / hamburger support</span>
              </div>
              <p className="text-sm text-charcoal leading-relaxed">
                A clean, brand-forward navigation bar with absolute monochrome styling, and integrated mobile drawer trigger. No profile photo or avatar exists here.
              </p>
              <div className="border border-light-gray rounded-none overflow-hidden bg-off-white/45 p-1">
                <Navbar logo="Jayr" />
              </div>
            </div>

            {/* Component 2: Buttons Grid */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-light-gray pb-2">
                <h4 className="font-mono text-xs font-bold text-ink-black uppercase">02. Micro-Interactions & Controls (Button)</h4>
                <span className="font-mono text-[10px] text-slate-gray">solid primary / outlined secondary</span>
              </div>
              <p className="text-sm text-charcoal leading-relaxed">
                Solid and outline buttons supporting fully typed event handlers, transition triggers, and state loaders.
              </p>
              <div className="flex flex-wrap gap-4 bg-white border border-light-gray p-6">
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[9px] text-slate-gray uppercase">Primary (Solid Black)</span>
                  <Button variant="primary" onClick={() => alert("Primary button clicked!")}>
                    Execute Command
                  </Button>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[9px] text-slate-gray uppercase">Secondary (Outlined)</span>
                  <Button variant="secondary" onClick={() => alert("Secondary button clicked!")}>
                    Reset Options
                  </Button>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[9px] text-slate-gray uppercase">Disabled State</span>
                  <Button variant="primary" disabled className="opacity-40 cursor-not-allowed">
                    Access Revoked
                  </Button>
                </div>
              </div>
            </div>

            {/* Component 3: Skill Badges */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-light-gray pb-2">
                <h4 className="font-mono text-xs font-bold text-ink-black uppercase">03. System Metadata Tags (SkillBadge)</h4>
                <span className="font-mono text-[10px] text-slate-gray">text-based tags / hover borders</span>
              </div>
              <p className="text-sm text-charcoal leading-relaxed">
                Clean text-based tags to represent tech stack layers. Styled strictly to eliminate colorful icons.
              </p>
              <div className="flex flex-wrap gap-2.5 bg-white border border-light-gray p-6">
                <SkillBadge name="React 19" />
                <SkillBadge name="TypeScript 5.8" />
                <SkillBadge name="Vite 6" />
                <SkillBadge name="Tailwind CSS v4" />
                <SkillBadge name="Node.js" />
                <SkillBadge name="Express API" />
                <SkillBadge name="D3.js" />
                <SkillBadge name="PostgreSQL" />
              </div>
            </div>

            {/* Component 4: Project Cards */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-light-gray pb-2">
                <h4 className="font-mono text-xs font-bold text-ink-black uppercase">04. Detail Grid Modules (ProjectCard)</h4>
                <span className="font-mono text-[10px] text-slate-gray">specification, contribution & outcome layout</span>
              </div>
              <p className="text-sm text-charcoal leading-relaxed">
                Project layout showcasing explicit engineering roles, measurable metrics, and support for an optional screenshot block.
              </p>

              <div className="space-y-6">
                {/* Variant A: With Screenshot Slot */}
                <div className="space-y-2">
                  <span className="font-mono text-[9px] text-slate-gray block uppercase">Variant A: With Screenshot/Mockup Slot</span>
                  <ProjectCard
                    title="Unified Workspace Broker"
                    description="Designed and deployed a server-side client gateway syncing user credentials, authenticating external services, and managing active tokens in near-instant durations."
                    tags={["TypeScript", "Node.js", "Express", "OAuth"]}
                    contribution="Designed fully typed security gateways, drafted ESM module bundling scripts using esbuild, and integrated scalable Express route handlers."
                    outcome="Eliminated security compliance latency, improved token refresh cycles by 40%, and achieved 100% build reliability under high loads."
                    screenshotSlot={
                      <div className="text-center font-mono space-y-2">
                        <div className="text-2xl font-bold tracking-tighter text-ink-black">BROKER.V1</div>
                        <div className="text-[10px] text-slate-gray uppercase bg-light-gray/60 px-2 py-0.5 border border-light-gray">
                          MONO_SCREENSHOT_SLOT
                        </div>
                      </div>
                    }
                  />
                </div>

                {/* Variant B: Text-only */}
                <div className="space-y-2">
                  <span className="font-mono text-[9px] text-slate-gray block uppercase">Variant B: Text-only (No screenshot required)</span>
                  <ProjectCard
                    title="Continuous Integration Engine"
                    description="Configured low-overhead developer builds leveraging customized Node.js environments and Vite bundlers. Restructured standard layouts to optimize pipeline visual delivery."
                    tags={["Vite 6", "Tailwind CSS", "GitHub Actions", "Docker"]}
                    contribution="Wrote custom configuration adapters, established automated container builds, and streamlined the linter workflow structure."
                    outcome="Decreased continuous integration build execution from 120s down to 22s while strictly preventing formatting drift."
                  />
                </div>
              </div>
            </div>

            {/* Component 5: SectionWrapper Example */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-light-gray pb-2">
                <h4 className="font-mono text-xs font-bold text-ink-black uppercase">05. Content Boundaries (SectionWrapper)</h4>
                <span className="font-mono text-[10px] text-slate-gray">max-width bounds / border borders</span>
              </div>
              <p className="text-sm text-charcoal leading-relaxed">
                Standard section wrapper implementing vertical padding rhythm and structured border breaks.
              </p>
              <div className="border border-dashed border-slate-gray/60 p-1 bg-off-white/40">
                <SectionWrapper
                  id="example-wrapper-demo"
                  title="01. Abstract Architecture"
                  subtitle="A clean container enforcing rigorous geometric proportions and absolute whitespace discipline."
                >
                  <div className="bg-white border border-light-gray p-6 text-sm text-charcoal">
                    This block exists nested inside the <code className="bg-off-white px-1 font-mono text-xs">SectionWrapper</code> component.
                  </div>
                </SectionWrapper>
              </div>
            </div>

            {/* Component 6: Footer Preview */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-light-gray pb-2">
                <h4 className="font-mono text-xs font-bold text-ink-black uppercase">06. Social Connects Strip (Footer)</h4>
                <span className="font-mono text-[10px] text-slate-gray">minimal / no photo / action buttons</span>
              </div>
              <p className="text-sm text-charcoal leading-relaxed">
                Highly readable footer listing links for email, GitHub, and LinkedIn. Free of redundant user visuals.
              </p>
              <div className="border border-light-gray bg-off-white">
                <Footer
                  email="jayr@operator.net"
                  github="https://github.com"
                  linkedin="https://linkedin.com"
                  onBackToTop={() => alert("Back to top button clicked!")}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>

  );
}
