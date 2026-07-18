import SectionWrapper from "../components/SectionWrapper";
import { GitBranch, Compass, Code, Terminal } from "lucide-react";

export default function About() {
  const workflowHabits = [
    {
      icon: GitBranch,
      title: "Workflow Habits",
      description: "Rigorous Git branching models, detailed Pull Requests, and strategic conflict resolution to maintain stable, clean mainlines.",
    },
    {
      icon: Code,
      title: "Fundamental Mastery",
      description: "Prioritizing deep understanding of runtime execution, rendering cycles, and design systems over copy-pasting memorized syntax.",
    },
    {
      icon: Compass,
      title: "Career Trajectory",
      description: "Currently a 3rd-year BS Information Systems student laying the groundwork to start as a Frontend Engineer and evolve into a full-scale Full-Stack Developer.",
    },
  ];

  return (
    <SectionWrapper
      id="about"
      title="01. About Me"
      subtitle="Jayr // Synthesizing structured architecture and user experience into deterministic frontend experiences."
      sectionIndex={1}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start" id="about-content-grid">
        {/* Core Profile Narrative */}
        <div className="md:col-span-7 space-y-8">
          <div className="space-y-6">
            <h3 className="font-display font-bold text-2xl text-ink-black tracking-tight uppercase">
              3rd-Year BS Information Systems Student & Engineering Operator
            </h3>
            <p className="font-sans text-sm md:text-base text-charcoal leading-relaxed">
              I believe that software engineering is not about memorizing framework syntax, but about understanding systems, layout rules, state trees, and professional collaborative delivery pipelines. As an Information Systems major, I bridge the gap between structured business data requirements and pixel-perfect customer-facing interfaces.
            </p>
            <p className="font-sans text-sm text-slate-gray leading-relaxed">
              My current objective is to secure a Frontend Engineering role where I can apply strict component encapsulation, TypeScript compliance, and clean Git management workflows while continuously building the technical muscle to transition into modular Full-Stack Development.
            </p>
          </div>

          {/* Reference visual pagination motif beneath the narrative */}
          <div className="flex items-center gap-1.5 pt-4 select-none">
            {[1, 2, 3, 4, 5].map((idx) => (
              <span
                key={idx}
                className={`h-1.5 w-1.5 rounded-full ${
                  idx === 1 ? "bg-ink-black" : "bg-light-gray"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Workflow Specs Panel */}
        <div className="md:col-span-5 space-y-6 bg-off-white border border-light-gray p-6 md:p-8">
          <div className="flex items-center gap-2 border-b border-light-gray pb-3 mb-4">
            <Terminal size={16} className="text-ink-black" />
            <span className="font-mono text-xs font-bold text-ink-black uppercase tracking-wider">
              OPERATIONAL_PRINCIPLES
            </span>
          </div>

          <div className="space-y-6">
            {workflowHabits.map((habit) => {
              const Icon = habit.icon;
              return (
                <div key={habit.title} className="space-y-1.5" id={`about-habit-${habit.title.toLowerCase().replace(/\s+/g, "-")}`}>
                  <div className="flex items-center gap-2">
                    <Icon size={14} className="text-ink-black" />
                    <h4 className="font-display font-semibold text-sm text-ink-black uppercase">
                      {habit.title}
                    </h4>
                  </div>
                  <p className="font-sans text-xs text-slate-gray leading-relaxed">
                    {habit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
