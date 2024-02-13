import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { BsFolder } from "react-icons/bs";
import { Project } from "@/lib/types";
import Link from "next/link";

const OtherProjectCard = ({
  title,
  description,
  siteLink,
  githubLink,
  techUsed,
}: Project) => {
  return (
    <Link target="blank" href={siteLink || githubLink || ""} className="cursor-pointer hover:text-[#aef3bfda]" aria-label="link to site or github repo">
      <main className="w-80 xs:w-96 h-72 hover:sm:-translate-y-2 transition-all ease-linear">
        <div className="p-4 rounded-md bg-[#266e8a25] shadow-md flex flex-col gap-4 h-full">
          <div className="flex justify-between">
            <p className="text-4xl">
              <BsFolder />
            </p>
            <p className="flex gap-2 text-white text-2xl">
              {githubLink && (
                <Link target="blank" href={githubLink} aria-label="link to github repo">
                  <span className="hover:text-red-600">
                    <FiGithub />
                  </span>
                </Link>
              )}
              {siteLink && (
                <Link target="blank" href={siteLink} aria-label="link to site">
                  <span className="hover:text-red-600">
                    <FiExternalLink />
                  </span>
                </Link>
              )}
            </p>
          </div>
          <h2 className="text-lg font-bold">{title}</h2>
          <p className="text-sm text-secondary max-w-md h-24 line-clamp-5 hover:text-slate-300 transition-colors duration-200">
            {description}
          </p>
          <div className="flex flex-wrap text-teal-400 gap-2 max-w-md">
            {techUsed.map((tech: string, index: number) => {
              return (
                <p className="text-sm font-tech hover:text-red-300 transition-colors duration-200" key={index}>
                  {tech}
                </p>
              );
            })}
          </div>
        </div>
      </main>
    </Link>
  );
};

export default OtherProjectCard;
