"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    interface IntersectionHandler {
      (entries: IntersectionObserverEntry[]): void;
    }

    const handleIntersection: IntersectionHandler = (
      entries: IntersectionObserverEntry[]
    ): void => {
      const visibleEntry = entries.find((entry) => entry.isIntersecting);

      if (visibleEntry) {
        setActiveSection(visibleEntry.target.id);
      }
    };

    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.2,
      rootMargin: "-80px 0px -20% 0px",
    });

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navItems = ["about", "projects", "contact"];

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-border-theme"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#home"
          className="group flex items-center gap-2"
          onClick={() => setActiveSection("home")}
        >
          <span className="text-foreground text-xl font-bold tracking-tight">
            Looped<span className="text-muted-foreground">.</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-2">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeSection === item
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {activeSection === item && (
                    <motion.span
                      layoutId="activeNavDesktop"
                      className="absolute inset-0 bg-muted rounded-full -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                  <span className="relative z-10 capitalize">{item}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="w-px h-6 bg-border-theme" />

          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
          )}
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-4 md:hidden">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
          )}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-foreground focus:outline-none relative w-8 h-8 flex flex-col justify-center items-center"
            aria-label="Toggle menu"
          >
            <div
              className={`w-6 h-0.5 bg-foreground absolute transition-all duration-300 ${
                menuOpen ? "rotate-45" : "-translate-y-2"
              }`}
            />
            <div
              className={`w-6 h-0.5 bg-foreground absolute transition-all duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <div
              className={`w-6 h-0.5 bg-foreground absolute transition-all duration-300 ${
                menuOpen ? "-rotate-45" : "translate-y-2"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-background border-t border-border-theme"
          >
            <div className="px-6 py-4">
              <ul className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <motion.li
                    key={item}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.1 * navItems.indexOf(item),
                    }}
                  >
                    <a
                      href={`#${item}`}
                      onClick={() => setMenuOpen(false)}
                      className={`block py-3 px-4 rounded-xl text-sm font-medium capitalize ${
                        activeSection === item
                          ? "bg-muted text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-border-theme text-sm">
                <div className="flex gap-6">
                  <Link
                    target="_blank"
                    href="https://github.com/nonlooped"
                    className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                  >
                    GitHub
                  </Link>
                  <Link
                    href="https://x.com/nonlooped"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                  >
                    Twitter
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
