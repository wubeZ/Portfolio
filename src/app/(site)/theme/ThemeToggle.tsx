"use client";

import { useSyncExternalStore } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { getTheme, setTheme, subscribeToTheme, Theme } from "./theme";

export default function ThemeToggle() {
  // null on the server and during hydration, since the theme is only known in the browser.
  const theme = useSyncExternalStore<Theme | null>(
    subscribeToTheme,
    getTheme,
    () => null,
  );
  const next: Theme = theme === "light" ? "dark" : "light";

  return (
    <button
      type="button"
      onClick={() => setTheme(getTheme() === "light" ? "dark" : "light")}
      aria-label={theme ? `Switch to ${next} theme` : "Switch color theme"}
      className="rounded-md p-2 text-xl text-muted transition-colors hover:text-ink"
    >
      {/* CSS picks the icon, so it's right before React knows the theme. */}
      <FiSun aria-hidden className="light:hidden" />
      <FiMoon aria-hidden className="hidden light:block" />
    </button>
  );
}
