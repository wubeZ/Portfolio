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
    <section className="w-80 xs:w-96 h-72 hover:sm:scale-105">
      <div className="p-4 rounded-md bg-[#266e8a25] shadow-md flex flex-col gap-4 h-full">
        <div className="flex justify-between">
          <span className="text-2xl">
            <BsFolder />
          </span>
          <p className="flex gap-2 text-white text-2xl">
            {githubLink && (
              <Link target="blank" href={githubLink}>
                <span>
                  <FiGithub />
                </span>
              </Link>
            )}
            {siteLink && (
              <Link target="blank" href={siteLink}>
                <span>
                  <FiExternalLink />
                </span>
              </Link>
            )}
          </p>
        </div>
        <h2 className="text-lg font-bold text-white">{title}</h2>
        <p className="text-sm text-secondary max-w-md h-24 line-clamp-5">
          {description}
        </p>
        <div className="flex flex-wrap text-teal-400 gap-2 max-w-md">
          {techUsed.map((tech: string, index: number) => {
            return (
              <p className="text-sm font-tech" key={index}>
                {tech}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OtherProjectCard;
