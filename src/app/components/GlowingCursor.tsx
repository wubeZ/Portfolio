"use client";

import React, { useEffect, useRef } from "react";

const GlowingCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const cursor = cursorRef.current;
      if (!cursor) return;

      const mouseX = e.pageX;
      const mouseY = e.pageY;
      const cursorWidth = cursor.offsetWidth;
      const cursorHeight = cursor.offsetHeight;

      cursor.style.left = mouseX - cursorWidth / 2 + "px";
      cursor.style.top = mouseY - cursorHeight / 2 + "px";
    };

    document.addEventListener("mousemove", handleMove);

    return () => {
      document.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="hidden lg:block w-12 h-12 rounded-full bg-gradient-to-br from-[#d8d8d8] via-transparent to-[#d8d8d8] opacity-50 absolute pointer-events-none mix-blend-screen z-50 shadow-glow transition-all ease-linear border-2 border-[#d8d8d8] border-opacity-50 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 3xl:w-32 3xl:h-32"
    ></div>
  );
};

export default GlowingCursor;
