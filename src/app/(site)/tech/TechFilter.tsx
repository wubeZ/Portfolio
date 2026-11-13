"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useSyncExternalStore,
} from "react";

const PARAM = "tech";
const CHANGE_EVENT = "techfilterchange";

interface TechFilterValue {
  selected: string | null;
  select: (key: string | null, options?: { scroll?: boolean }) => void;
}

const TechFilterContext = createContext<TechFilterValue | null>(null);

// The ?tech= query parameter is the source of truth, so a filtered view can be
// shared as a link and survives a reload.
function readSelected(): string | null {
  return (
    new URLSearchParams(window.location.search).get(PARAM)?.toLowerCase() ??
    null
  );
}

function subscribe(onChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener("popstate", onChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("popstate", onChange);
  };
}

// Shares the selected technology between the hero stack and the project list.
export function TechFilterProvider({ children }: { children: ReactNode }) {
  // The page is prerendered without a selection, so the server snapshot is null.
  const selected = useSyncExternalStore(subscribe, readSelected, () => null);

  const select = useCallback<TechFilterValue["select"]>((key, options) => {
    const url = new URL(window.location.href);
    if (key) url.searchParams.set(PARAM, key);
    else url.searchParams.delete(PARAM);
    window.history.replaceState(window.history.state, "", url);
    window.dispatchEvent(new Event(CHANGE_EVENT));
    if (options?.scroll) {
      document.getElementById("projects")?.scrollIntoView();
    }
  }, []);

  return (
    <TechFilterContext.Provider value={{ selected, select }}>
      {children}
    </TechFilterContext.Provider>
  );
}

export function useTechFilter(): TechFilterValue {
  const value = useContext(TechFilterContext);
  if (!value) throw new Error("useTechFilter needs a TechFilterProvider");
  return value;
}
