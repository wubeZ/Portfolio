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
      className="w-40 h-40 rounded-full bg-gradient-to-br from-[#701b1b] via-transparent to-[#701b1b] opacity-70 absolute pointer-events-none mix-blend-screen z-50 shadow-glow transition-all ease-linear border-2 border-[#6c6a73] border-opacity-50 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 2xl:w-72 2xl:h-72 3xl:w-80 3xl:h-80"
    ></div>
  );
};

export default GlowingCursor;
