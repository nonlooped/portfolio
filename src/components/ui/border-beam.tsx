"use client";

import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  colorFrom?: string;
  colorTo?: string;
}

export function BorderBeam({
  className,
  size = 200,
  duration = 12,
  borderWidth = 2,
  colorFrom = "var(--primary)",
  colorTo = "oklch(0.65 0.2 18 / 0.4)",
}: BorderBeamProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) return null;

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden",
        className
      )}
      aria-hidden
    >
      <div
        className="absolute inset-0 rounded-[inherit] animate-border-beam"
        style={
          {
            "--beam-size": `${size}px`,
            "--beam-duration": `${duration}s`,
            padding: borderWidth,
            background: `conic-gradient(from 0deg, transparent 0deg, ${colorFrom} 60deg, ${colorTo} 120deg, transparent 180deg)`,
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          } as React.CSSProperties
        }
      />
    </div>
  );
}
