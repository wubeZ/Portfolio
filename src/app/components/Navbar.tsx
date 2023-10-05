"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineClose, AiOutlineArrowUp } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import icon from "../../../public/wz-icon.png"
import { useClickOutside } from "../hooks/useClickOutside";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [backToTopState, setbackToTopState] = useState<boolean>(false);
  const wrapperRef = useRef(null);

  useClickOutside(wrapperRef, () => {
    setOpenMenu(false);
  });

  const BackToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setbackToTopState(true);
    } else {
      setbackToTopState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
    return () => window.removeEventListener("scroll", handleScroll, true);
  });

  return (
    <main className="sticky z-50 top-0 text-white h-20 w-full flex shadow-lg">
      <div className="flex justify-between items-center px-4 w-full glass-effect">
        <Link href="#home">
          <h1 className="text-xl font-third font-bold cursor-pointer hover:text-teal-300 hover:scale-105 w-8 md:w-10 h-8 md:h-10 ml-0 sm:ml-8">
            <Image src={icon} width={50} height={50} alt="Wubshet Zeleke" className="object-cover"/>
          </h1>
        </Link>
        <p
          onClick={() => setOpenMenu(!openMenu)}
          className="sm:hidden text-3xl"
        >
          {openMenu ? <AiOutlineClose /> : <BiMenuAltRight />}
        </p>
        <ul className="hidden sm:flex items-center gap-14 pr-12 md:pr-16 text-xs md:text-sm lg:text-base font-primary font-light">
          <Link href="#home">
            <li className="hover:font-medium hover:outline-offset-8 hover:text-teal-200 hover:border-b-2 border-slate-300">
              HOME
            </li>
          </Link>
          <Link href="#about">
            <li className="hover:font-medium hover:outline-offset-8 hover:text-teal-200  hover:border-b-2 border-slate-300">
              ABOUT
            </li>
          </Link>
          <Link href="#project">
            <li className="hover:font-medium hover:outline-offset-8 hover:text-teal-200 hover:border-b-2 border-slate-300">
              PROJECT
            </li>
          </Link>
          <Link href="#contact">
            <li className="hover:font-medium hover:outline-offset-8 hover:text-teal-200 hover:border-b-2 border-slate-300">
              CONTACT
            </li>
          </Link>
        </ul>
      </div>
      {openMenu && (
        <nav className="flex sm:hidden absolute right-0 top-16 mr-4 bg-slate-900 py-2 w-40" ref={wrapperRef}>
          <ul className="flex flex-col gap-8 py-4 px-6 font-light font-third">
            <Link href="#home">
              <li className="hover:font-medium hover:outline-offset-8 hover:text-teal-200 hover:border-b-2 border-slate-300">
                HOME
              </li>
            </Link>
            <Link href="#about">
              <li className="hover:font-medium hover:outline-offset-8 hover:text-teal-200 hover:border-b-2 border-slate-300">
                ABOUT
              </li>
            </Link>
            <Link href="#project">
              <li className="hover:font-medium hover:outline-offset-8 hover:text-teal-200 hover:border-b-2 border-slate-300">
                PROJECT
              </li>
            </Link>
            <Link href="#contact">
              <li className="hover:font-medium hover:outline-offset-8 hover:text-teal-200 hover:border-b-2 border-slate-300">
                CONTACT
              </li>
            </Link>
          </ul>
        </nav>
      )}

      <div
        onClick={BackToTop}
        className={`z-40 transition-all delay-50 ${
          backToTopState ? "scale-1" : "scale-0"
        } fixed bottom-10 right-10 rounded-full text-white bg-[#2b2b54] text-2xl p-4 font-bold cursor-pointer hover:scale-110 shadow-lg shadow-black/30`}
      >
        <AiOutlineArrowUp />
      </div>
    </main>
  );
};

export default Navbar;
