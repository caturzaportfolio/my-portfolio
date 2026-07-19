import SectionWrapper from "../components/SectionWrapper";
import { GitPullRequest, ShieldCheck, FileCode2, BookOpen } from "lucide-react";

export default function Reliability() {
  const practices = [
    {
      icon: GitPullRequest,
      title: "Structured Git Workflow",
      subtitle: "Stable Version Control",
      description: "Strict isolation of features inside distinct branches, rigorous peer reviews, comprehensive pull request write-ups, and programmatic conflict resolution.",
    },
    {
      icon: FileCode2,
      title: "Maintainable Codebases",
      subtitle: "Clean & Modular Layouts",
      description: "Writing self-documenting code, enforcing modular file separation, strict typing models, and prioritizing readable systems layout over clever shortcuts.",
    },
    {
      icon: ShieldCheck,
      title: "Engineering Standards",
      subtitle: "Real-world Compliance",
      description: "Adhering to strict linting rules, automated build checks, accessibility parameters (WCAG compliance), and optimized rendering performance targets.",
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      subtitle: "Classwork & Core Expansion",
      description: "Actively expanding competence frontiers into mobile-first frameworks like React Native and modular backends like NestJS via systematic university coursework.",
    },
  ];

  return (
    <SectionWrapper
      id="reliability"
      title="04. Engineering Discipline"
      subtitle="Focusing on maintainability, readability, and structured processes throughout every stage of development."
      sectionIndex={4}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="reliability-practices-grid">
        {practices.map((practice) => {
          const Icon = practice.icon;
          return (
            <div
              key={practice.title}
              className="group border border-light-gray bg-pure-white p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:border-ink-black"
              id={`reliability-practice-${practice.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="space-y-4">
                {/* Visual Icon Header */}
                <div className="flex items-center gap-3">
                  <div className="bg-ink-black text-pure-white p-2.5 border border-ink-black flex items-center justify-center transition-transform group-hover:scale-105">
                    <Icon size={16} />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-base text-ink-black uppercase tracking-tight leading-none">
                      {practice.title}
                    </h3>
                    <span className="font-sans text-[10px] font-semibold text-slate-gray uppercase tracking-wider mt-1 block">
                      {practice.subtitle}
                    </span>
                  </div>
                </div>

                <p className="font-sans text-sm text-charcoal leading-relaxed pt-2">
                  {practice.description}
                </p>
              </div>

              {/* Little visual accent on bottom representing a clean pipeline step */}
              <div className="mt-6 pt-4 border-t border-light-gray/60 flex items-center justify-between text-[10px] font-sans text-slate-gray">
                <span className="uppercase font-medium tracking-wide">Verified standard</span>
                <span className="h-1.5 w-1.5 bg-ink-black rounded-full" />
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
