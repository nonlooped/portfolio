"use client";

import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ShineBorderProps {
  children: React.ReactNode;
  className?: string;
  borderRadius?: string;
}

export function ShineBorder({
  children,
  className,
  borderRadius = "9999px",
}: ShineBorderProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className={cn("relative inline-flex", className)}
      style={{ borderRadius }}
    >
      {!prefersReducedMotion && (
        <div
          className="absolute -inset-[1px] rounded-[inherit] animate-shine-border opacity-80"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--primary), oklch(0.7 0.18 18), transparent)",
            backgroundSize: "200% 100%",
            borderRadius,
          }}
          aria-hidden
        />
      )}
      <div className="relative rounded-[inherit]">{children}</div>
    </div>
  );
}
