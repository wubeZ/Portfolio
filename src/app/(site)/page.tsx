import HomeSection from "./home/HomeSection";
import AboutSection from "./home/AboutSection";
import ProjectSection from "./home/ProjectSection";
import ContactSection from "./home/ContactSection";
import CommandMenu, { MenuProject } from "./components/CommandMenu";
import { TechFilterProvider } from "./tech/TechFilter";
import { countProjectsByTech } from "@/lib/tech";
import { Project } from "@/lib/types";
import { getProjects } from "@/sanity/sanity.query";

function toMenuProject(project: Project): MenuProject[] {
  if (project.siteLink) {
    return [{ title: project.title, href: project.siteLink, kind: "Live site" }];
  }
  if (project.githubLink) {
    return [{ title: project.title, href: project.githubLink, kind: "Code" }];
  }
  return [];
}

export default async function Home() {
  const projects: Project[] = await getProjects();

  return (
    <TechFilterProvider>
      <HomeSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
      <CommandMenu
        projects={projects
          .flatMap(toMenuProject)
          .sort((a, b) => a.title.localeCompare(b.title))}
        techs={countProjectsByTech(projects)}
      />
    </TechFilterProvider>
  );
}
