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
    <main id="home" className="relative  pb-10 ">
      <div className="flex flex-col items-center gap-8 md:gap-16 pt-24 mb-16 sm:pt-36 md:pt-44 md:ml-12 text-center">
        <h1 className="font-secondary font-bold text-4xl md:text-6xl px-8  ">
          <span>Hey, </span>
          <span>I&apos;m</span>{" "}
          <span className="text-[#10d2ef] transition-colors duration-200">
            Wubshet
          </span>{" "}
          <span className="text-[#10d2ef] transition-colors duration-200">
            Zeleke
          </span>
        </h1>
        <p className="font-third font-light max-w-3xl text-sm sm:text-base px-12 text-secondary hover:text-slate-300 transition-colors duration-200">
          I am a skilled{" "}
          <span className="font-bold text-slate-300 hover:text-[#10d2ef] transition-colors duration-200">
            Full Stack Developer
          </span>{" "}
          with 3+ years of experience, specializing in robust web applications.
          I am dedicated to delivering high-quality solutions tailored to client
          needs, ensuring satisfaction through timely project delivery and
          exceeding expectations.
        </p>
        <Link
          target="blank"
          href={`https://drive.google.com/file/d/18cS7JgXS9-RLsurExSxZty2R3SkxKDne/view?usp=sharing`}
          className="bg-[#3652f14d] hover:bg-[#10d1ef55] transition-colors duration-200 w-48 rounded-lg text-lg px-3 py-3 text-center text-white font-secondary"
        >
          Resume
        </Link>
        <div className="hidden md:block 2xl:hidden absolute left-0">
          <ul className="w-14 flex flex-col gap-8 py-4 rounded-r-md shadow-black bg-[#5949e81a] text-[#45c7fbac] shadow-md items-center text-3xl ">
            {socials.map(({ title, link, icon }: Social, index: number) => {
              return (
                <Link
                  target="_blank"
                  className="cursor-pointer"
                  href={link}
                  key={index}
                  aria-label={`link to ${title}`}
                >
                  <li className="relative hover:scale-125 hover:text-[#FFFFFF]">
                    <span>{icon}</span>
                  </li>
                </Link>
              );
            })}
          </ul>
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
      </div>
    </main>
  );
};

export default HomeSection;
