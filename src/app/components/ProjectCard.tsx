import React from "react";
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import { Project } from "@/lib/types";
import Link from "next/link";

export interface Props extends Project {
  index: number;
}

const ProjectCard = ({
  index,
  title,
  description,
  techUsed,
  githubLink,
  siteLink,
  backgroundImage,
}: Props) => {
  return (
    <section
      className={`rounded-md shadow-md relative flex ${
        index % 2 == 0 ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <div
        className={`${
          index % 2 == 0 ? "" : "text-right"
        } bg-[#266e8a25] z-10 h-[320px] w-full p-12 absolute md:relative top-0 left-0`}
      >
        <p className="text-sm text-secondary">Featured Project</p>
        <h2 className="text-lg font-bold text-white">{title}</h2>
        <p className="text-sm py-6 text-teal-400 max-w-lg h-20 line-clamp-3 hover:text-slate-300 transition-colors duration-200">
          {description}
        </p>
        <div
          className={`flex flex-wrap gap-2 pt-4 text-gray-300 ${
            index % 2 == 0 ? "" : "justify-end"
          }`}
        >
          {techUsed.map((tech: string, index: number) => {
            return (
              <p
                className="text-sm font-tech hover:text-red-300 transition-colors duration-200"
                key={index}
              >
                {tech}
              </p>
            );
          })}
        </div>
        <div
          className={`flex gap-2 text-2xl pt-4 ${
            index % 2 == 0 ? "" : "justify-end"
          } text-white`}
        >
          {githubLink && (
            <Link
              target="blank"
              href={githubLink}
              aria-label="link to github repo"
            >
              <span className="hover:text-cyan-500 transition-colors duration-200">
                <FiGithub />
              </span>
            </Link>
          )}
          {siteLink && (
            <Link target="blank" href={siteLink} aria-label="link to site">
              <span className="hover:text-cyan-500 transition-colors duration-200">
                <FiExternalLink />
              </span>
            </Link>
          )}
        </div>
      </div>
      <div
        className={`w-full h-[320px] cursor-pointer md:opacity-100 opacity-10`}
      >
        <Link
          target="blank"
          href={siteLink || githubLink || ""}
          aria-label="link to site or github repo"
        >
          <Image
            src={backgroundImage?.image || ""}
            width={200}
            height={200}
            alt={backgroundImage?.alt || "Background Image"}
            className="object-cover h-full w-full opacity-70 hover:opacity-100 transition-opacity ease-in-out delay-100"
          />
        </Link>
      </div>
    </section>
  );
};

export default ProjectCard;
