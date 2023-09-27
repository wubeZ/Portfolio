"use client";

import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
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
    link: "https://www.linkedin.com/in/wubshet-zeleke-1a6aa71a8",
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
    icon: <FaTwitter />,
  },
  {
    title: "Leetcode",
    link: "https://www.leetcode.com/wubshet",
    icon: <SiLeetcode />,
  },
];

const HomeSection = () => {
  return (
    <main id="home" className="relative  pb-12">
      <div className="flex flex-col items-center gap-8 md:gap-16 pt-24 mb-16 sm:pt-36 md:pt-44 md:ml-12 text-center">
        <h1 className="font-secondary font-bold text-4xl md:text-6xl px-8">
          HEY, I&apos;M WUBSHET ZELEKE
        </h1>
        <p className="font-third font-light max-w-3xl text-sm sm:text-base px-12 text-secondary">
          I am a skilled{" "}
          <span className="font-bold text-slate-300">Full Stack Developer</span>{" "}
          with 2 years of experience, specializing in robust web applications. I
          am dedicated to delivering high-quality solutions tailored to client
          needs, ensuring satisfaction through timely project delivery and
          exceeding expectations.
        </p>
        <Link target="blank" href={`https://drive.google.com/file/d/18cS7JgXS9-RLsurExSxZty2R3SkxKDne/view?usp=sharing`} className="bg-[#3652f14d] hover:bg-[#3652f16f] w-48 rounded-lg text-lg px-3 py-3 text-center text-white font-secondary">
          Resume
        </Link>
        <div className="hidden md:block 2xl:hidden absolute left-0">
          <ul className="w-14 flex flex-col gap-8 py-4 rounded-r-md shadow-black bg-[#5949e81a] text-[#45c7fbac] shadow-md items-center text-3xl ">
            {socials.map(({ title, link, icon }: Social, index: number) => {
              return (
                <Link target="blank" href={link} key={index}>
                  <li className="relative hover:scale-125 hover:text-[#FFFFFF] cursor-pointer">
                    <span>{icon}</span>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
        <p className="hidden sm:flex justify-center items-center mt-32 md:mt-16 border-2 border-slate-500 rounded-full h-12 w-8 ">
          <span className="text-sm animate-bounce"><HiOutlineChevronDoubleDown /></span>
        </p>
      </div>
    </main>
  );
};

export default HomeSection;
