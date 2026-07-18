import SectionWrapper from "../components/SectionWrapper";
import ProjectCard from "../components/ProjectCard";
import { Landmark, Sparkles } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Talibon LGU Website - Municipal E-Services Platform",
      description: "A production-grade government portal engineered for the Local Government Unit of Talibon. Designed to digitize civic services and streamline citizen registration and municipal transactions.",
      tags: ["React", "TypeScript", "Tailwind CSS", "REST APIs", "Node.js"],
      contribution: "Spearheaded the development of the high-security E-Cedula Module and other municipal service application forms. Designed secure user session wrappers and state handlers to strictly satisfy local government accessibility and compliance parameters.",
      outcome: "Successfully transitioned the municipality from manual physical queues to secure, reliable online filings, driving administrative processing efficiency and ensuring absolute data integrity.",
      screenshotSlot: (
        <div className="text-center font-mono space-y-2 p-4">
          <Landmark size={32} className="mx-auto text-ink-black animate-pulse" />
          <div className="text-sm font-bold tracking-tighter text-ink-black uppercase">LGU_TALIBON_PORTAL</div>
          <span className="text-[8px] text-slate-gray uppercase bg-light-gray/60 px-1.5 py-0.5 border border-light-gray">
            COMPLIANCE_PASS
          </span>
        </div>
      ),
    },
    {
      title: "[ Incoming Project Spec - Placeholder ]",
      description: "Reserved space for upcoming full-stack systems engineering implementations. Built with standard modular layouts to enable clean configuration overrides when new specifications are registered.",
      tags: ["TypeScript", "NestJS", "PostgreSQL", "Next.js"],
      contribution: "Pending next-level pipeline requirements. Full contribution matrix, database schema definitions, and automated testing setups will be established at initial project genesis.",
      outcome: "Engineered with strict types and predictable outcomes to sustain continuous deployment standards.",
      screenshotSlot: (
        <div className="text-center font-mono space-y-2 p-4">
          <Sparkles size={32} className="mx-auto text-ink-black/40" />
          <div className="text-sm font-bold tracking-tighter text-ink-black/40 uppercase">RESERVED_SLOT</div>
          <span className="text-[8px] text-slate-gray uppercase bg-light-gray/60 px-1.5 py-0.5 border border-light-gray">
            AWAITING_SPEC
          </span>
        </div>
      ),
    },
  ];

  return (
    <SectionWrapper
      id="projects"
      title="03. Selected Works"
      subtitle="Exhibiting precise software engineering efforts, real contribution details, and measurable outcomes."
    >
      <div className="space-y-12" id="projects-grid-container">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tags={project.tags}
            contribution={project.contribution}
            outcome={project.outcome}
            screenshotSlot={project.screenshotSlot}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
