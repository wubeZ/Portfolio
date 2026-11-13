import Link from "next/link";
import { FiGithub } from "react-icons/fi";

import Section from "../components/Section";
import ProjectExplorer from "../tech/ProjectExplorer";

import { countProjectsByTech } from "@/lib/tech";
import { getProjects } from "@/sanity/sanity.query";

const ProjectSection = async () => {
  const projects = [...(await getProjects())].reverse();

  return (
    <Section
      id="projects"
      title="Projects"
      intro="Personal and client projects I've built. Filter them by the technology you care about."
    >
      <ProjectExplorer
        projects={projects}
        techs={countProjectsByTech(projects)}
      />
      <Link
        href="https://github.com/wubeZ"
        target="_blank"
        className="mt-12 inline-flex items-center gap-2 font-semibold text-accent underline-offset-4 hover:underline"
      >
        <FiGithub aria-hidden />
        More on GitHub
      </Link>
    </Section>
  );
};

export default ProjectSection;
