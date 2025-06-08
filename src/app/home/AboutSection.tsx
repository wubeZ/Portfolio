import React from "react";
import Link from "next/link";
import { getProgLanguages } from "@/sanity/sanity.query";

interface Props {
  programmingLanguages: string[];
  frontend: string[];
  backend: string[];
  database: string[];
}

const SkillSection = ({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) => (
  <div>
    <h3 className="font-secondary text-secondary">{title}</h3>
    <div className="flex flex-wrap gap-4 max-w-xl">
      {skills.map((skill: string, index: number) => (
        <div
          key={index}
          className="bg-[#3f80d428] text-blue-300 text-center text-xs sm:text-sm font-tech px-3 py-2 rounded-sm shadow-sm transition-colors duration-200 hover:text-cyan-400 hover:shadow-md hover:font-bold hover:outline hover:outline-cyan-500"
        >
          {skill}
        </div>
      ))}
    </div>
  </div>
);

const AboutSection = async () => {
  const { programmingLanguages, frontend, backend, database }: Props =
    await getProgLanguages();

  return (
    <main id="about" className="pb-28 pt-24">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-4xl font-semibold font-secondary text-center">
          ABOUT ME
        </h1>
        <div className="border-b-4 border-blue-800 w-6"></div>
        <p className="text-secondary font-light text-center px-4 text-sm sm:text-base max-w-2xl">
          Here you will find more information about me, what I do, and my
          current skills
        </p>
      </div>
      <div className="grid place-content-center lg:flex lg:flex-row lg:justify-center gap-24 mt-12 px-6 md:pl-12 lg:pl-28">
        <div className="flex flex-col gap-6">
          <h2 className="font-secondary font-semibold text-2xl">
            Get to know me!
          </h2>
          <div className="text-secondary space-y-3">
            <p className="max-w-lg font-light text-sm sm:text-base hover:text-slate-300 transition-colors duration-200">
              I am a dedicated{" "}
              <span className="font-bold hover:text-cyan-500 transition-colors duration-200">
                Full Stack Developer
              </span>{" "}
              with expertise in using Node.js, Django, and FastAPI for backend development, and React, Next.js, Tailwind CSS, Svelte, and SvelteKit for frontend development. I am committed to client satisfaction, focusing on effective communication and collaboration to translate their vision into functional and visually appealing web applications.
            </p>
            <p className="max-w-lg font-light text-sm sm:text-base hover:text-slate-300 transition-colors duration-200">
              I take pride in writing clean, efficient, and maintainable code with attention to detail and a strong eye for design. What sets me apart is my ability to thrive in fast-paced environments, leveraging my problem-solving skills and creativity to overcome challenges. I stay up to date with industry trends, using cutting-edge technologies to create impactful web applications.
            </p>
            <p className="max-w-lg font-light text-sm sm:text-base hover:text-slate-300 transition-colors duration-200">
              I am excited about collaborating on new projects, bringing ideas to life, and creating exceptional web applications that make a difference. Let&apos;s discuss how we can work together to achieve your goals and create remarkable solutions. Feel free to reach out and start the conversation.
            </p>
          </div>
          <Link
            href="#contact"
            className="w-32 bg-[#3652f14d] hover:bg-[#10d1ef55] transition-colors duration-200 text-center text-white font-secondary rounded-md px-4 py-2"
          >
            CONTACT
          </Link>
        </div>
        <div className="space-y-2">
          <h2 className="font-secondary font-bold text-2xl pb-3">My Skills</h2>
          <SkillSection
            title="Programming Languages"
            skills={programmingLanguages}
          />
          <SkillSection
            title="Frontend Development"
            skills={[...frontend, "Svelte", "SvelteKit"]}
          />
          <SkillSection title="Backend Development" skills={backend} />
          <SkillSection title="Databases" skills={database} />
        </div>
      </div>
    </main>
  );
};

export default AboutSection;
