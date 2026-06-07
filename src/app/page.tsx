import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { ScrollProgress } from "@/components/ui/scroll-progress";

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
