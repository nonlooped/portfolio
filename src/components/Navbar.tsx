"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar() {
  const prefersReducedMotion = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const ratiosRef = useRef<Record<string, number>>({});

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = (resolvedTheme ?? theme) === "dark";

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        ratiosRef.current[entry.target.id] = entry.intersectionRatio;
      });

      const best = Object.entries(ratiosRef.current).sort(
        ([, a], [, b]) => b - a
      )[0];

      if (best && best[1] > 0.15) {
        setActiveSection(best[0]);
      }
    },
    []
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: [0, 0.15, 0.3, 0.5, 0.75],
      rootMargin: "-72px 0px -35% 0px",
    });

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [handleIntersection]);

  const navItems = ["home", "projects", "contact"];

  const themeLabel = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <>
      <a href="#main-content" className="skip-link focus-ring">
        Skip to content
      </a>
      <nav
        aria-label="Main navigation"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled
            ? "bg-background/90 border-border-theme"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="section-wrap px-6 py-4 flex justify-between items-center">
          <a
            href="#home"
            className="focus-ring flex items-center rounded-md"
            onClick={() => setActiveSection("home")}
          >
            <span className="text-display text-lg font-black tracking-tight text-foreground">
              Looped<span className="text-primary">.</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            <ul className="flex gap-1">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className={`focus-ring relative px-4 py-2 rounded-full text-sm font-medium transition-colors capitalize min-h-11 inline-flex items-center ${
                      activeSection === item
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {activeSection === item && (
                      <span className="absolute inset-0 bg-primary/10 rounded-full -z-10" />
                    )}
                    <span className="relative z-10">{item}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="w-px h-6 bg-border-theme" />

            <Link
              href="https://github.com/nonlooped"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring text-sm font-medium text-muted-foreground hover:text-primary transition-colors min-h-11 inline-flex items-center"
            >
              GitHub
            </Link>

            {mounted && (
              <button
                type="button"
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className="focus-ring p-2.5 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors min-w-11 min-h-11"
                aria-label={themeLabel}
                aria-pressed={isDark}
              >
                {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}
              </button>
            )}
          </div>

          <div className="flex items-center gap-3 md:hidden">
            {mounted && (
              <button
                type="button"
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className="focus-ring p-2.5 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors min-w-11 min-h-11"
                aria-label={themeLabel}
                aria-pressed={isDark}
              >
                {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}
              </button>
            )}

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus-ring relative w-11 h-11 flex flex-col justify-center items-center rounded-full"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span
                className={`w-6 h-0.5 bg-foreground absolute transition-all duration-300 ${
                  menuOpen ? "rotate-45" : "-translate-y-2"
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-foreground absolute transition-all duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-foreground absolute transition-all duration-300 ${
                  menuOpen ? "-rotate-45" : "translate-y-2"
                }`}
              />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={prefersReducedMotion ? undefined : { height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden bg-background border-t border-border-theme"
            >
              <div className="px-6 py-4">
                <ul className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <li key={item}>
                      <a
                        href={`#${item}`}
                        onClick={() => setMenuOpen(false)}
                        className={`focus-ring block py-3 px-4 rounded-xl text-sm font-medium capitalize min-h-11 ${
                          activeSection === item
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-border-theme flex gap-6 text-sm">
                  <Link
                    target="_blank"
                    href="https://github.com/nonlooped"
                    className="focus-ring text-muted-foreground hover:text-primary transition-colors font-medium min-h-11 inline-flex items-center"
                  >
                    GitHub
                  </Link>
                  <Link
                    href="https://x.com/nonlooped"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring text-muted-foreground hover:text-primary transition-colors font-medium min-h-11 inline-flex items-center"
                  >
                    X
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
