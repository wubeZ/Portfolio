import React from "react";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
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
    icon: <FaXTwitter />,
  },
  {
    title: "Telegram",
    link: "https://t.me/wube_z",
    icon: <FaTelegram />,
  },
];

const Footer = () => {
  return (
    <main className="text-white">
      <div className="mx-auto px-8 max-w-7xl">
        <div className="flex flex-col-reverse justify-between gap-8 md:flex-row md:hidden">
          <ul className="flex justify-center gap-8 pb-4 items-center text-2xl sm:text-4xl">
            {socials.map(({ title, link, icon }: Social, index: number) => {
              return (
                <Link target="_blank" href={link} key={index}>
                  <li className="hover:scale-125 cursor-pointer">
                    <span>{icon}</span>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
        <div className="mt-12 py-6 text-center border-t-2 border-slate-600">
          <h3 className="text-xs">
            &copy;Copyright 2023. Made by{" "}
            <span className="underline-offset-2 underline">Wubshet Zeleke</span>
          </h3>
        </div>
      </div>
    </main>
  );
};

export default Footer;
