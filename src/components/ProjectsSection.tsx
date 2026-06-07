"use client";

import projectsData from "@/data/projects.json";
import type { Project } from "@/types/project";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = projectsData as Project[];
const featured = projects.filter((p) => p.featured);

const GITHUB_PROFILE = "https://github.com/nonlooped";

function ProjectShowcase({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      id={`project-${project.slug}`}
      className="grid gap-4 border-t border-border-theme py-10 md:grid-cols-[3.5rem_minmax(0,1fr)] md:gap-x-10 md:py-12"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <span
        className="font-mono text-xs font-semibold tabular-nums text-primary/70"
        aria-hidden
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="flex flex-col gap-3 md:gap-4">
        <h3 className="text-display text-2xl font-black uppercase leading-[0.95] text-foreground md:text-3xl">
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring hover:text-primary transition-colors"
          >
            {project.name}
          </Link>
        </h3>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground text-prose md:text-lg">
          {project.description}
        </p>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring group inline-flex w-fit items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary min-h-11"
        >
          Source on GitHub
          <span
            aria-hidden
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          >
            →
          </span>
        </a>
      </div>
    </motion.article>
  );
}

export default function ProjectsSection() {
  return (
    <section
      className="section-y px-6"
      id="projects"
      aria-labelledby="projects-heading"
    >
      <div className="section-wrap">
        <header className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
          <h2
            id="projects-heading"
            className="text-display mb-5 text-4xl font-black uppercase leading-[0.95] text-foreground md:text-6xl"
          >
            Shipped{" "}
            <span className="text-primary">work</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground text-prose">
            Four builds that show range: games, media pipelines, realtime systems,
            and developer tooling.
          </p>
        </header>

        <div className="mx-auto max-w-3xl border-b border-border-theme">
          {featured.map((project, index) => (
            <ProjectShowcase
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </div>

        <div className="mt-14 flex justify-center md:mt-20">
          <a
            href={GITHUB_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring btn-secondary inline-flex items-center gap-3"
          >
            <FaGithub className="h-4 w-4" aria-hidden />
            All repos on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
