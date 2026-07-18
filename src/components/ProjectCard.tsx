import { ReactNode } from "react";
import SkillBadge from "./SkillBadge";

export interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  contribution: string;
  outcome: string;
  screenshotSlot?: ReactNode; // Optional slot to render a mockup screenshot or placeholder
  className?: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  contribution,
  outcome,
  screenshotSlot,
  className = "",
}: ProjectCardProps) {
  return (
    <div
      className={`border border-light-gray bg-pure-white flex flex-col md:grid md:grid-cols-12 gap-0 overflow-hidden transition-all duration-300 hover:shadow-lg ${className}`}
    >
      {/* Visual Slot (Optional screenshot) */}
      {screenshotSlot && (
        <div className="md:col-span-4 bg-off-white border-b md:border-b-0 md:border-r border-light-gray flex items-center justify-center p-4 min-h-[160px]">
          {screenshotSlot}
        </div>
      )}

      {/* Main Metadata Content */}
      <div className={`${screenshotSlot ? "md:col-span-8" : "md:col-span-12"} p-6 md:p-8 flex flex-col justify-between space-y-6`}>
        <div className="space-y-4">
          {/* Header & Badges */}
          <div className="space-y-1">
            <span className="font-mono text-[9px] tracking-widest text-slate-gray uppercase">Project Specification</span>
            <h3 className="font-display font-extrabold text-2xl text-ink-black tracking-tight uppercase leading-none">
              {title}
            </h3>
          </div>

          <p className="font-sans text-sm text-charcoal leading-relaxed">
            {description}
          </p>

          {/* Key sections for contribution and outcome */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-light-gray/60">
            <div>
              <span className="font-mono text-[9px] text-slate-gray uppercase block font-bold tracking-wider">My Contribution</span>
              <p className="text-xs text-charcoal mt-1 leading-relaxed font-sans">{contribution}</p>
            </div>
            <div>
              <span className="font-mono text-[9px] text-slate-gray uppercase block font-bold tracking-wider">Project Outcome</span>
              <p className="text-xs text-charcoal mt-1 leading-relaxed font-sans">{outcome}</p>
            </div>
          </div>
        </div>

        {/* Tech Stack Footer */}
        <div className="pt-4 border-t border-light-gray/60 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <SkillBadge key={tag} name={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}
