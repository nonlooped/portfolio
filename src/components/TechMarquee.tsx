"use client";

import { Marquee } from "@/components/ui/marquee";
import { techStack } from "@/data/tech-stack";

export function TechMarquee() {
  return (
    <Marquee speed="slow" className="py-3">
      {techStack.map(({ name, Icon }) => (
        <span
          key={name}
          className="inline-flex items-center gap-3 px-2 text-muted-foreground whitespace-nowrap"
        >
          <Icon className="text-2xl md:text-3xl text-primary shrink-0" aria-hidden />
          <span className="font-mono text-sm md:text-base tracking-wide">{name}</span>
        </span>
      ))}
    </Marquee>
  );
}
