"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { DotPattern } from "@/components/ui/dot-pattern";
import { ShineBorder } from "@/components/ui/shine-border";
import { TechMarquee } from "@/components/TechMarquee";

const stats = [
  {
    value: "50M+",
    label: "Game visits",
    source: "Roblox · 2018-2026",
  },
  {
    value: "200+",
    label: "Clients shipped for",
    source: "Freelance · direct",
  },
  {
    value: "8 yrs",
    label: "In the craft",
    source: "Since 2018",
  },
];

function HeroStat({
  value,
  label,
  source,
}: {
  value: string;
  label: string;
  source: string;
}) {
  return (
    <li className="hero-stat group">
      <div className="hero-stat-value">
        <span>{value}</span>
      </div>
      <p className="hero-stat-label">{label}</p>
      <p className="hero-stat-source">{source}</p>
    </li>
  );
}

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, prefersReducedMotion ? 0 : 60]
  );

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-[100dvh] flex flex-col overflow-hidden px-6 text-center"
      aria-labelledby="hero-heading"
    >
      <DotPattern
        className="text-primary/25 dark:text-primary/30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_68%)]"
        width={18}
        height={18}
        cr={1}
      />

      {!prefersReducedMotion && (
        <>
          <div
            className="pointer-events-none absolute top-[18%] left-1/2 -translate-x-1/2 w-[min(95vw,700px)] h-[min(95vw,700px)] rounded-full bg-primary/25 blur-[130px] animate-float-slow"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute bottom-[10%] right-[-10%] w-[min(50vw,360px)] h-[min(50vw,360px)] rounded-full bg-accent/20 blur-[100px]"
            aria-hidden
          />
        </>
      )}

      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
        aria-hidden
      >
        <span className="text-display text-[clamp(5rem,20vw,14rem)] font-black uppercase text-primary/[0.06] dark:text-primary/[0.09] leading-none select-none">
          Design
        </span>
      </div>

      <motion.div
        style={prefersReducedMotion ? undefined : { y: contentY }}
        className="relative z-10 section-wrap flex flex-col items-center justify-center flex-1 w-full pt-[5.5rem] pb-8 gap-8 md:gap-10"
      >
        <h1
          id="hero-heading"
          className="flex flex-col items-center leading-[0.88] max-w-5xl"
        >
          <span className="text-display text-[clamp(3.25rem,11vw,6rem)] font-black uppercase text-foreground hover:-translate-y-1 transition-transform duration-300 cursor-default">
            Designer
          </span>
          <span className="font-sans italic font-medium lowercase text-[clamp(2rem,6.5vw,4.25rem)] text-primary tracking-tight py-2 md:py-3">
            with imagination
          </span>
          <span className="text-display text-[clamp(3.25rem,11vw,6rem)] font-black uppercase text-foreground hover:-translate-y-1 transition-transform duration-300 cursor-default">
            For years.
          </span>
        </h1>

        <p className="text-base md:text-lg text-muted-foreground max-w-xl text-prose leading-relaxed -mt-2">
          Full-stack builds from Roblox worlds to live web apps. I ship the
          whole thing.
        </p>

        <ul className="hero-stats" aria-label="Experience highlights">
          {stats.map((stat) => (
            <HeroStat key={stat.label} {...stat} />
          ))}
        </ul>

        <div className="w-full max-w-5xl [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] py-1">
          <TechMarquee />
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <ShineBorder>
            <a href="#projects" className="focus-ring btn-primary">
              View work
            </a>
          </ShineBorder>
          <a
            href="mailto:cored.developments@gmail.com"
            className="focus-ring btn-secondary"
          >
            Email me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
