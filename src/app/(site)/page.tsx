import HomeSection from "./home/HomeSection";
import ContactSection from "./home/ContactSection";
import AboutSection from "./home/AboutSection";
import ProjectSection from "./home/ProjectSection";

export default function Home() {
  return (
    <div className="transition-all ease-linear bg-gradient-to-r from-[#122d4d] to-[#040227] text-white">
      <HomeSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
}
