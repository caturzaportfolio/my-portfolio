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
        <div className="text-center font-sans space-y-2 p-4">
          <Landmark size={32} className="mx-auto text-ink-black animate-pulse" />
          <div className="text-sm font-bold tracking-tight text-ink-black uppercase">Talibon LGU Portal</div>
          <span className="text-[9px] font-semibold text-slate-gray uppercase bg-light-gray/60 px-2 py-0.5 border border-light-gray">
            Municipal Portal
          </span>
        </div>
      ),
    },
    {
      title: "Upcoming Project (Placeholder)",
      description: "Reserved space for future web applications and full-stack systems. Built with clean, maintainable architecture for seamless scalability.",
      tags: ["TypeScript", "NestJS", "PostgreSQL", "Next.js"],
      contribution: "Planned integrations will include modern relational databases, strict TypeScript validation, and comprehensive automated test suites.",
      outcome: "Designed for seamless user experiences with solid architecture and stable performance.",
      screenshotSlot: (
        <div className="text-center font-sans space-y-2 p-4">
          <Sparkles size={32} className="mx-auto text-ink-black/40" />
          <div className="text-sm font-bold tracking-tight text-ink-black/40 uppercase">Reserved Slot</div>
          <span className="text-[9px] font-semibold text-slate-gray uppercase bg-light-gray/60 px-2 py-0.5 border border-light-gray">
            Upcoming
          </span>
        </div>
      ),
    },
  ];

  return (
    <SectionWrapper
      id="projects"
      title="03. Selected Works"
      subtitle="A collection of real-world development efforts, technical contributions, and clean UI implementations."
      sectionIndex={3}
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
