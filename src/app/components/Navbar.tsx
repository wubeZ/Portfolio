"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [backToTopState, setbackToTopState] = useState<boolean>(false);

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
    <main className="sticky z-50 top-0 bg-[#0c081c] text-white h-20 w-full flex items-center shadow-lg">
      <div className="flex justify-between items-center mx-4 w-full">
        <Link href='#home'><h1 className="text-xl font-third font-bold cursor-pointer hover:text-teal-300">Wubshet Zeleke</h1></Link>
        <p
          onClick={() => setOpenMenu(!openMenu)}
          className="sm:hidden text-3xl"
        >
          {openMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
        </p>
        <ul className="hidden sm:flex items-center gap-14 pr-12 md:pr-16 text-xs md:text-sm lg:text-base font-primary font-light">
          <Link href="#home">
            <li className="hover:font-medium hover:outline-offset-8 hover:text-teal-200 hover:border-b-2 border-slate-300">HOME</li>
          </Link>
          <Link href="#about">
            <li className="hover:font-medium hover:outline-offset-8 hover:text-teal-200  hover:border-b-2 border-slate-300">ABOUT</li>
          </Link>
          <Link href="#project">
            <li className="hover:font-medium hover:outline-offset-8 hover:text-teal-200 hover:border-b-2 border-slate-300">PROJECT</li>
          </Link>
          <Link href="#contact">
            <li className="hover:font-medium hover:outline-offset-8 hover:text-teal-200 hover:border-b-2 border-slate-300">CONTACT</li>
          </Link>
        </ul>
      </div>
      {openMenu && (
        <div className="flex sm:hidden absolute right-0 top-16 mr-4 bg-slate-900 py-2 w-32">
          <ul className="flex flex-col gap-4 py-2 px-4 font-light font-third">
          <Link href="#home">
            <li className="hover:font-medium hover:outline-offset-8 hover:text-teal-200 hover:border-b-2 border-slate-300">HOME</li>
          </Link>
          <Link href="#about">
            <li className="hover:font-medium hover:outline-offset-8 hover:text-teal-200 hover:border-b-2 border-slate-300">ABOUT</li>
          </Link>
          <Link href="#project">
            <li className="hover:font-medium hover:outline-offset-8 hover:text-teal-200 hover:border-b-2 border-slate-300">PROJECT</li>
          </Link>
          <Link href="#contact">
            <li className="hover:font-medium hover:outline-offset-8 hover:text-teal-200 hover:border-b-2 border-slate-300">CONTACT</li>
          </Link>
          </ul>
        </div>
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
