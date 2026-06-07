import { techStack } from "@/data/tech-stack";

export function TechStack({ compact = false }: { compact?: boolean }) {
  return (
    <ul
      className={`flex flex-wrap justify-center gap-3 ${compact ? "gap-2" : "gap-4 md:gap-5"}`}
      aria-label="Technologies used"
    >
      {techStack.map(({ name, Icon }) => (
        <li key={name}>
          <span
            className={`inline-flex items-center gap-2 rounded-full border border-border-theme bg-card-bg text-muted-foreground ${
              compact ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm"
            }`}
            title={name}
          >
            <Icon className={compact ? "text-base" : "text-lg"} aria-hidden />
            <span className="font-mono tracking-wide">{name}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}
