import HomeSection from "./home/HomeSection"
import ContactSection from "./home/ContactSection"
import AboutSection from "./home/AboutSection"
import ProjectSection from "./home/ProjectSection"

export default function Home() {
  return (
    <div className="transition-all ease-linear bg-gradient-to-r from-[#1f1e1e] to-[#1e044a] text-white">
      <HomeSection/>
      <AboutSection/>
      <ProjectSection/>
      <ContactSection/>
    </div>
  )
}
