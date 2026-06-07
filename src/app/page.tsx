import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { ScrollProgress } from "@/components/ui/scroll-progress";

export const metadata: Metadata = {
  title: "Looped | Full-Stack Developer & Digital Artist",
  description:
    "Looped ships full-stack TypeScript products: live games, productivity apps, SDKs, and interfaces with performance and craft built in.",
};

export default function Home() {
  return (
    <main id="main-content" className="relative">
      <ScrollProgress />
      <HeroSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
