export interface SkillBadgeProps {
  name: string;
  className?: string;
  key?: string;
}

export default function SkillBadge({ name, className = "" }: SkillBadgeProps) {
  return (
    <span
      className={`inline-flex items-center justify-center px-3 py-1 bg-off-white border border-light-gray text-ink-black font-mono text-xs font-semibold tracking-wide transition-all duration-200 hover:border-ink-black hover:bg-pure-white select-none ${className}`}
    >
      {name}
    </span>
  );
}
