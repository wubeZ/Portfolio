"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { AiOutlineArrowUp, AiOutlineClose } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import icon from "../../../../public/wz-icon.png";
import { useClickOutside } from "../hooks/useClickOutside";

const menuItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback(() => setOpenMenu(false), []);
  useClickOutside(wrapperRef, closeMenu);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 600);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line bg-night/85 backdrop-blur-md">
        <div
          ref={wrapperRef}
          className="container-page flex h-16 items-center justify-between"
        >
          <Link href="#main" aria-label="Wubshet Zeleke, back to top">
            <Image
              src={icon}
              width={36}
              height={36}
              alt=""
              className="rounded"
            />
          </Link>

          <nav aria-label="Main">
            <ul className="hidden items-center gap-10 text-[0.9375rem] text-mist sm:flex">
              {menuItems.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="transition-colors hover:text-paper"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => setOpenMenu((open) => !open)}
              aria-expanded={openMenu}
              aria-controls="mobile-menu"
              aria-label={openMenu ? "Close menu" : "Open menu"}
              className="-mr-2 p-2 text-2xl text-paper sm:hidden"
            >
              {openMenu ? <AiOutlineClose /> : <BiMenuAltRight />}
            </button>

            {openMenu && (
              <ul
                id="mobile-menu"
                className="absolute inset-x-0 top-16 flex flex-col border-b border-line bg-night px-6 py-2 sm:hidden"
              >
                {menuItems.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={closeMenu}
                      className="block py-3 text-lg text-paper"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </nav>
        </div>
      </header>

      {/* Outside the header: its backdrop blur would make it the containing block for fixed children. */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0 })}
        aria-label="Back to top"
        tabIndex={showBackToTop ? 0 : -1}
        className={`fixed bottom-6 right-6 rounded-full border border-line bg-harbor p-3 text-xl text-paper transition-opacity hover:text-signal ${
          showBackToTop ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <AiOutlineArrowUp />
      </button>
    </>
  );
};

export default Navbar;
