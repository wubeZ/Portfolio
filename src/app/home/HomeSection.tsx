"use client";

import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaTelegram } from "react-icons/fa";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import { Social } from "@/lib/types";
import Link from "next/link";

const socials: Social[] = [
  {
    title: "Email",
    link: "mailto:wubezeleke@gmail.com",
    icon: <MdEmail />,
  },
  {
    title: "Linkedin",
    link: "https://www.linkedin.com/in/wubshet-zeleke",
    icon: <FaLinkedin />,
  },
  {
    title: "Github",
    link: "https://www.github.com/wubeZ",
    icon: <FaGithub />,
  },
  {
    title: "Twitter",
    link: "https://www.twitter.com/wube_Z",
    icon: <FaXTwitter />,
  },
];

const HomeSection = () => {
  return (
    <main
      id="home"
      className="relative text-white pb-28 pt-24 flex flex-col items-center justify-center"
    >
      <div className="rounded-full overflow-hidden w-32 h-32 mb-6">
        <img
          src="https://avatar.iran.liara.run/public/17"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Heading */}
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold font-primary text-center mb-4">
        Hi, I&apos;m <span className="text-cyan-400">Wubshet</span> 👋
      </h1>

      {/* Subheading */}
      <p className="text-base md:text-xl lg:text-2xl text-center font-primary font-extralight mb-8 px-4">
        Building digital products, brands, and experiences. <br />I specialize
        in{" "}
        <span className="">
          Full Stack Development
        </span>{" "}
        and robust web applications.
      </p>
      <Link
        href={`https://devon-git-dev-719-fix-white-label-solution.vercel.app/en/api/p2psniper/loans`}
        target="_blank"
        className="bg-white text-black hover:bg-cyan-400 transition-colors duration-200 px-6 py-3 rounded-lg text-lg font-medium mb-8"
      >
        Resume
      </Link>

      {/* Social Links */}
      <div className="flex gap-6 mt-8">
        {socials.map(({ title, link, icon }, index) => (
          <Link
            key={index}
            href={link}
            target="_blank"
            aria-label={`Link to ${title}`}
            className="text-2xl hover:text-cyan-400 transition-colors duration-200"
          >
            {icon}
          </Link>
        ))}
      </div>
      <Link
        href="#about"
        className=""
        aria-label="Scroll down to About Section"
      >
        <p className="hidden sm:flex justify-center items-center mt-32 md:mt-16 border-2 border-slate-500 rounded-full h-12 w-8 hover:text-cyan-500 hover:border-cyan-500 transition-colors duration-200">
          <span className="text-sm animate-bounce">
            <HiOutlineChevronDoubleDown />
          </span>
        </p>
      </Link>
    </main>
  );
};

export default HomeSection;
