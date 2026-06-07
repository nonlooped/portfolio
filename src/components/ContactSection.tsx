"use client";

import { FaGithub } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { CopyButton } from "@/components/CopyButton";

const EMAIL = "cored.developments@gmail.com";
const DISCORD = "@nonlooped";

const socials = [
  {
    href: "https://github.com/nonlooped",
    label: "GitHub",
    icon: FaGithub,
  },
  {
    href: "https://x.com/nonlooped",
    label: "@nonlooped",
    icon: SiX,
  },
] as const;

export function ContactSection() {
  return (
    <section
      className="section-y px-6 border-t border-border-theme"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="section-wrap grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] gap-12 lg:gap-20 items-start">
        <div>
          <h2
            id="contact-heading"
            className="text-display text-4xl md:text-5xl lg:text-6xl font-black text-foreground uppercase leading-[0.95] max-w-lg"
          >
            Let&apos;s build{" "}
            <span className="text-primary">something</span>
          </h2>

          <p className="mt-6 text-lg text-muted-foreground text-prose leading-relaxed max-w-md">
            Contracts, collabs, or a technical question. Clear scope, small
            releases, frontend through API.
          </p>

          <a
            href={`mailto:${EMAIL}`}
            className="focus-ring btn-primary mt-10 inline-flex"
          >
            Email me
          </a>
        </div>

        <div className="flex flex-col gap-8 lg:pt-2">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-2">
              Email
            </p>
            <CopyButton
              value={EMAIL}
              label="email address"
              className="text-base md:text-lg"
            />
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-2">
              Discord
            </p>
            <CopyButton
              value={DISCORD}
              label="Discord handle"
              className="text-base md:text-lg"
            />
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-6 border-t border-border-theme">
            {socials.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors min-h-11"
              >
                <Icon aria-hidden className="text-base" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
