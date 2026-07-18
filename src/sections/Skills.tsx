import SectionWrapper from "../components/SectionWrapper";
import SkillBadge from "../components/SkillBadge";
import { Monitor, Server, Database, Wrench } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      icon: Monitor,
      title: "Frontend Engineering",
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "React Native", "Tailwind CSS", "Vite"],
    },
    {
      icon: Server,
      title: "Backend Services",
      skills: ["Node.js", "NestJS", "REST APIs", "JWT Authentication"],
    },
    {
      icon: Database,
      title: "Database & Storage",
      skills: ["PostgreSQL", "Prisma ORM"],
    },
    {
      icon: Wrench,
      title: "Professional Tooling",
      skills: ["Git", "GitHub", "Branching Workflows", "Pull Request Reviews", "Conflict Resolution"],
    },
  ];

  return (
    <SectionWrapper
      id="skills"
      title="02. Core Capabilities"
      subtitle="Structured compilation of technical stacks and production-grade tools verified through robust local builds."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="skills-grid-container">
        {skillCategories.map((category) => {
          const Icon = category.icon;
          return (
            <div
              key={category.title}
              className="border border-light-gray bg-pure-white p-6 md:p-8 flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow"
              id={`skill-cat-${category.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="space-y-4">
                {/* Category Header */}
                <div className="flex items-center gap-3 border-b border-light-gray pb-3">
                  <div className="bg-ink-black text-pure-white p-1.5 border border-ink-black flex items-center justify-center">
                    <Icon size={14} />
                  </div>
                  <h3 className="font-display font-bold text-base text-ink-black uppercase tracking-wide">
                    {category.title}
                  </h3>
                </div>
                
                <p className="font-sans text-xs text-slate-gray leading-relaxed">
                  Proven proficiency, conceptual deep-dive integration, and compile-checked experience in active client architectures.
                </p>
              </div>

              {/* Badges Container */}
              <div className="flex flex-wrap gap-2 pt-2">
                {category.skills.map((skill) => (
                  <SkillBadge key={skill} name={skill} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
