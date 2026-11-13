"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { AiOutlineArrowUp, AiOutlineClose } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import icon from "../../../../public/wz-icon.png";
import { useActiveSection } from "../hooks/useActiveSection";
import { useClickOutside } from "../hooks/useClickOutside";
import ThemeToggle from "../theme/ThemeToggle";

const menuItems = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
const sectionIds = menuItems.map((item) => item.id);

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const activeSection = useActiveSection(sectionIds);

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
      <header className="sticky top-0 z-40 border-b border-line bg-canvas/85 backdrop-blur-md">
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

          <div className="flex items-center gap-1 sm:gap-3">
            <nav aria-label="Main" className="order-last sm:order-none sm:mr-5">
              <ul className="hidden items-center gap-10 text-[0.9375rem] text-muted sm:flex">
                {menuItems.map(({ id, label }) => {
                  const current = activeSection === id;
                  return (
                    <li key={id}>
                      <Link
                        href={`#${id}`}
                        aria-current={current ? "location" : undefined}
                        className={`relative py-2 transition-colors after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:origin-left after:rounded-full after:bg-accent after:transition-transform ${
                          current
                            ? "text-ink after:scale-x-100"
                            : "hover:text-ink after:scale-x-0"
                        }`}
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <button
                type="button"
                onClick={() => setOpenMenu((open) => !open)}
                aria-expanded={openMenu}
                aria-controls="mobile-menu"
                aria-label={openMenu ? "Close menu" : "Open menu"}
                className="-mr-2 p-2 text-2xl text-ink sm:hidden"
              >
                {openMenu ? <AiOutlineClose /> : <BiMenuAltRight />}
              </button>

              {openMenu && (
                <ul
                  id="mobile-menu"
                  className="absolute inset-x-0 top-16 flex flex-col border-b border-line bg-canvas px-6 py-2 sm:hidden"
                >
                  {menuItems.map(({ id, label }) => (
                    <li key={id}>
                      <Link
                        href={`#${id}`}
                        onClick={closeMenu}
                        aria-current={
                          activeSection === id ? "location" : undefined
                        }
                        className={`block py-3 text-lg ${
                          activeSection === id ? "text-accent" : "text-ink"
                        }`}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Outside the header: its backdrop blur would make it the containing block for fixed children. */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0 })}
        aria-label="Back to top"
        tabIndex={showBackToTop ? 0 : -1}
        className={`fixed bottom-6 right-6 rounded-full border border-line bg-surface p-3 text-xl text-ink transition-opacity hover:text-accent ${
          showBackToTop ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <AiOutlineArrowUp />
      </button>
    </>
  );
};

export default Navbar;
