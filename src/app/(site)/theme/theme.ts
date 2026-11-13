export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme";
const THEME_CHANGE_EVENT = "themechange";
const LIGHT_QUERY = "(prefers-color-scheme: light)";

// Runs in <head> before the page paints, so a saved choice never flashes the
// other theme. Without a saved choice, CSS follows the system setting.
export const themeInitScript = `try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

export function getTheme(): Theme {
  const chosen = document.documentElement.dataset.theme;
  if (chosen === "light" || chosen === "dark") return chosen;
  return window.matchMedia(LIGHT_QUERY).matches ? "light" : "dark";
}

export function setTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Storage can be blocked (private mode). The choice then lasts for this page view.
  }
  window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
}

export function subscribeToTheme(onChange: () => void) {
  const media = window.matchMedia(LIGHT_QUERY);
  media.addEventListener("change", onChange);
  window.addEventListener(THEME_CHANGE_EVENT, onChange);
  return () => {
    media.removeEventListener("change", onChange);
    window.removeEventListener(THEME_CHANGE_EVENT, onChange);
  };
}
