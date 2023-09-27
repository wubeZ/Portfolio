import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
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

const Footer = () => {
  return (
    <main className="bg-black text-white">
      <div className="mx-auto px-8 pt-12 max-w-7xl">
        <div className="flex flex-col-reverse justify-between gap-8 md:flex-row">
          <div className="space-y-4">
            <h2 className="font-semibold text-lg">Wubshet Zeleke</h2>
            <p className="text-xs sm:text-sm font-light max-w-lg">
              A <span className="font-medium">Full Stack Developer</span> dedicated to delivering high-quality
              solutions tailored to client needs, ensuring satisfaction through
              timely project delivery and exceeding expectations.
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">Socials</h2>
            <ul className="flex gap-8 py-4 items-center text-2xl ">
              {socials.map(({ title, link, icon }: Social, index: number) => {
              return (
                <Link target="blank" href={link} key={index}>
                  <li className="hover:scale-125 cursor-pointer">
                    <span>{icon}</span>
                  </li>
                </Link>
              );
            })}
            </ul>
          </div>
        </div>
        <div className="mt-12 py-6 text-center border-t-2 border-slate-600">
          <h3 className="text-xs">
            &copy;Copyright 2023. Made by <span className="underline-offset-2 underline">Wubshet Zeleke</span>
          </h3>
        </div>
      </div>
    </main>
  );
};

export default Footer;
