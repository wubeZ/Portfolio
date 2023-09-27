import React from "react";
import Link from "next/link";

import ProjectCard from "../components/ProjectCard";
import OtherProjectCard from "../components/OtherProjectCard";

import { Project } from "@/lib/types";
import { getProjects } from "@/sanity/sanity.query";


const ProjectSection = async () => {
  const projects: Project[] = await getProjects();
  const newProject = projects.reverse();
  const featuredProjects = newProject.filter((proj) => proj.featured === true)
  const otherProjects = newProject.filter((proj)=> proj.featured !== true)

  return (
    <main id="project" className="min-h-screen mt-10">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-4xl font-semibold font-secondary">PROJECT</h1>
        <div className="border-b-4 border-blue-800 w-6"></div>
        <p className="text-base font-light text-secondary text-center px-4 max-w-2xl">
          Here you will find some of the personal and clients projects that I
          created.
        </p>
      </div>
      <div className="max-w-5xl flex flex-col gap-24 mx-auto mt-12 px-4 pb-8">
        {featuredProjects.map((item: Project, index: number) => [
            <ProjectCard key={index} index={index} {...item} />,
          ])}
      </div>
      <div className="flex flex-col items-center gap-4 pt-24">
        <h2 className="text-2xl font-semibold font-secondary">
          Other Noteworthy Projects
        </h2>
        <p className="font-secondary text-lg text-secondary font-light">
          view the archive
        </p>
        <div className="max-w-5xl gap-4 px-3 sm:px-2 flex flex-wrap justify-center my-8">
          {otherProjects.map((item: Project, index: number) => [
              <OtherProjectCard key={index} {...item} />,
            ])}
        </div>
        <Link href="https://github.com/wubeZ" target="blank" className="bg-[#3652f14d] hover:bg-[#3652f16f] text-center text-white w-28 px-2 py-4 cursor-pointer mt-4">
          Show More
        </Link>
      </div>
    </main>
  );
};

export default ProjectSection;
