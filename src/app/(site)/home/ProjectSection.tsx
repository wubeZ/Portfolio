import Link from "next/link";
import { FiGithub } from "react-icons/fi";

import ProjectCard from "../components/ProjectCard";
import OtherProjectCard from "../components/OtherProjectCard";
import Section from "../components/Section";

import { Project } from "@/lib/types";
import { getProjects } from "@/sanity/sanity.query";

const ProjectSection = async () => {
  const projects: Project[] = (await getProjects()).reverse();
  const featuredProjects = projects.filter((proj) => proj.featured === true);
  const otherProjects = projects.filter((proj) => proj.featured !== true);

  return (
    <Section
      id="projects"
      title="Projects"
      intro="Personal and client projects I've built."
    >
      <div className="space-y-20 sm:space-y-28">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.title} index={index} {...project} />
        ))}
      </div>

      <div className="mt-24 sm:mt-32">
        <h3 className="text-xl font-semibold">More projects</h3>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project) => (
            <li key={project.title} className="flex">
              <OtherProjectCard {...project} />
            </li>
          ))}
        </ul>
        <Link
          href="https://github.com/wubeZ"
          target="_blank"
          className="mt-10 inline-flex items-center gap-2 font-semibold text-accent underline-offset-4 hover:underline"
        >
          <FiGithub aria-hidden />
          More on GitHub
        </Link>
      </div>
    </Section>
  );
};

export default ProjectSection;
