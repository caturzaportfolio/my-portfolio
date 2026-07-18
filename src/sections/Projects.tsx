import SectionWrapper from "../components/SectionWrapper";
import ProjectCard from "../components/ProjectCard";
import { FolderGit2 } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "SyncFlow - Multi-Workspace Broker",
      description: "A highly resilient server-side gateway broker synchronizing file changes, team permissions, and credentials across distributed cloud storage environments.",
      tags: ["TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma ORM"],
      contribution: "Designed standard token rotation pipelines, orchestrated modular Express routers with strict JWT auth constraints, and refined PostgreSQL indexing structures.",
      outcome: "Eliminated synchronization deadlocks under heavy loads, decreased typical verification API latency by 35%, and established 100% type-safety metrics.",
      screenshotSlot: (
        <div className="text-center font-mono space-y-2 p-4">
          <FolderGit2 size={32} className="mx-auto text-ink-black animate-pulse" />
          <div className="text-sm font-bold tracking-tighter text-ink-black uppercase">SYNC_FLOW_SYS</div>
          <span className="text-[8px] text-slate-gray uppercase bg-light-gray/60 px-1.5 py-0.5 border border-light-gray">
            SERVER_STATUS_OK
          </span>
        </div>
      ),
    },
    {
      title: "OmniCore - Dynamic Interface Runtime",
      description: "A comprehensive design system playground and component compilation sandbox for complex UI blueprints, optimizing rendering pipelines with zero HMR overhead.",
      tags: ["React 19", "Vite", "Tailwind CSS v4", "Lucide React"],
      contribution: "Authored fully typed layouts, aligned color contrasts with precise accessibility standards, and established robust responsive boundaries.",
      outcome: "Enabled modular UI code reuse across 4 distinct micro-frontends, reducing downstream stylesheet sizes by 42% and simplifying developer onboardings.",
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
