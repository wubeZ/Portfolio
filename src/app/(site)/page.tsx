import HomeSection from "./home/HomeSection";
import AboutSection from "./home/AboutSection";
import ProjectSection from "./home/ProjectSection";
import ContactSection from "./home/ContactSection";
import { TechFilterProvider } from "./tech/TechFilter";

export default function Home() {
  return (
    <TechFilterProvider>
      <HomeSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </TechFilterProvider>
  );
}
