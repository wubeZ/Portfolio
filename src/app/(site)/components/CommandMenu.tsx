"use client";

import {
  KeyboardEvent,
  ReactNode,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import {
  FiCopy,
  FiCornerDownLeft,
  FiExternalLink,
  FiFileText,
  FiFilter,
  FiHash,
  FiMoon,
  FiSearch,
  FiSun,
  FiX,
} from "react-icons/fi";
import { TechCount } from "@/lib/tech";
import { email, github, linkedin, RESUME_URL, twitter } from "@/lib/socials";
import { useTechFilter } from "../tech/TechFilter";
import { getTheme, setTheme, subscribeToTheme, Theme } from "../theme/theme";

const OPEN_EVENT = "commandmenu:open";
const EMAIL_ADDRESS = email.link.replace("mailto:", "");

export interface MenuProject {
  title: string;
  href: string;
  // "Live site" or "Code", whichever the link opens.
  kind: string;
}

interface Command {
  id: string;
  group: string;
  label: string;
  hint?: string;
  icon: ReactNode;
  run: () => void;
  // Keep the menu open after running, for commands that report back in place.
  stayOpen?: boolean;
}

function openInNewTab(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView();
}

// Each word of the query has to appear in the label.
function matches(command: Command, query: string) {
  const text = command.label.toLowerCase();
  return query
    .toLowerCase()
    .split(/\s+/)
    .every((word) => text.includes(word));
}

function subscribeToPlatform() {
  return () => {};
}

function isMac() {
  return /Mac|iPhone|iPad/.test(navigator.platform);
}

// The navbar button. It opens the menu through an event, since the menu lives
// in the page, next to the project data.
export function CommandMenuButton() {
  // null on the server, so the shortcut hint only renders once the platform is known.
  const mac = useSyncExternalStore(subscribeToPlatform, isMac, () => null);

  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}
      aria-label="Search the site"
      aria-keyshortcuts="Meta+K Control+K"
      className="flex items-center gap-2 rounded-md p-2 text-xl text-muted transition-colors hover:text-ink sm:border sm:border-line sm:px-2.5 sm:py-1.5 sm:text-sm sm:hover:border-ink"
    >
      <FiSearch aria-hidden />
      <span className="hidden sm:inline">Search</span>
      {mac !== null && (
        <kbd className="hidden rounded border border-line px-1.5 font-mono text-xs sm:inline">
          {mac ? "⌘K" : "Ctrl K"}
        </kbd>
      )}
    </button>
  );
}

interface Props {
  projects: MenuProject[];
  techs: TechCount[];
}

// A keyboard-first way around the site: jump to a section, open a project,
// filter by technology, copy the email address or switch the theme.
export default function CommandMenu({ projects, techs }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [notice, setNotice] = useState("");
  const { selected, select } = useTechFilter();
  const theme = useSyncExternalStore<Theme | null>(
    subscribeToTheme,
    getTheme,
    () => null,
  );
  const listId = useId();

  const commands = useMemo<Command[]>(() => {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";
    return [
      ...[
        ["home", "Top"],
        ["about", "About"],
        ["projects", "Projects"],
        ["contact", "Contact"],
      ].map(([id, label]) => ({
        id: `go-${id}`,
        group: "Go to",
        label,
        icon: <FiHash />,
        run: () => scrollToSection(id),
      })),
      ...(selected
        ? [
            {
              id: "filter-clear",
              group: "Filter projects",
              label: "Show all projects",
              icon: <FiX />,
              run: () => select(null, { scroll: true }),
            },
          ]
        : []),
      ...techs.map((tech) => ({
        id: `filter-${tech.key.replace(/[^a-z0-9]+/g, "-")}`,
        group: "Filter projects",
        label: tech.label,
        hint: `${tech.count} project${tech.count === 1 ? "" : "s"}`,
        icon: <FiFilter />,
        run: () => select(tech.key, { scroll: true }),
      })),
      ...projects.map((project) => ({
        id: `project-${project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
        group: "Projects",
        label: project.title,
        hint: project.kind,
        icon: <FiExternalLink />,
        run: () => openInNewTab(project.href),
      })),
      {
        id: "copy-email",
        group: "Contact",
        label: "Copy email address",
        hint: EMAIL_ADDRESS,
        icon: <FiCopy />,
        stayOpen: true,
        run: () => {
          navigator.clipboard.writeText(EMAIL_ADDRESS).then(
            () => setNotice(`Copied ${EMAIL_ADDRESS}`),
            () => setNotice(`Couldn't copy. The address is ${EMAIL_ADDRESS}`),
          );
        },
      },
      ...[email, linkedin, github, twitter].map((social) => ({
        id: `social-${social.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
        group: "Contact",
        label: social.title === "Email" ? "Send an email" : social.title,
        icon: social.icon,
        run: () => {
          if (social.title === "Email") window.location.href = social.link;
          else openInNewTab(social.link);
        },
      })),
      {
        id: "resume",
        group: "Contact",
        label: "Open resume",
        icon: <FiFileText />,
        run: () => openInNewTab(RESUME_URL),
      },
      {
        id: "theme",
        group: "Settings",
        label: theme ? `Switch to ${nextTheme} theme` : "Switch theme",
        icon: nextTheme === "light" ? <FiSun /> : <FiMoon />,
        run: () => setTheme(getTheme() === "light" ? "dark" : "light"),
      },
    ];
  }, [projects, techs, selected, select, theme]);

  const results = useMemo(
    () => commands.filter((command) => matches(command, query.trim())),
    [commands, query],
  );
  const active = results[Math.min(activeIndex, results.length - 1)];
  const groups = useMemo(() => {
    const byName = new Map<string, Command[]>();
    for (const command of results) {
      byName.set(command.group, [...(byName.get(command.group) ?? []), command]);
    }
    return [...byName];
  }, [results]);

  useEffect(() => {
    const open = () => {
      const dialog = dialogRef.current;
      if (dialog && !dialog.open) {
        dialog.showModal();
        inputRef.current?.focus();
      }
    };
    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key.toLowerCase() === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        if (dialogRef.current?.open) dialogRef.current.close();
        else open();
      }
    };
    window.addEventListener(OPEN_EVENT, open);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener(OPEN_EVENT, open);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  // Keep the highlighted result in view while moving through the list.
  useEffect(() => {
    if (!active) return;
    document
      .getElementById(`${listId}-${active.id}`)
      ?.scrollIntoView({ block: "nearest" });
  }, [active, listId]);

  const run = (command: Command) => {
    if (!command.stayOpen) dialogRef.current?.close();
    command.run();
  };

  const onInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const last = results.length - 1;
    const current = Math.min(activeIndex, last);
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex(current >= last ? 0 : current + 1);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex(current <= 0 ? last : current - 1);
    } else if (event.key === "Enter" && active) {
      event.preventDefault();
      run(active);
    }
  };

  return (
    <dialog
      ref={dialogRef}
      aria-label="Search the site"
      onClose={() => {
        setQuery("");
        setActiveIndex(0);
        setNotice("");
      }}
      // A click on the dialog element itself is a click on the backdrop.
      onClick={(event) => {
        if (event.target === dialogRef.current) dialogRef.current.close();
      }}
      className="m-auto mt-[12vh] w-[min(38rem,calc(100%-2rem))] overflow-hidden rounded-xl border border-line bg-surface p-0 text-ink shadow-2xl backdrop:bg-canvas/70 backdrop:backdrop-blur-sm open:motion-safe:animate-menu-in"
    >
      <div className="flex items-center gap-3 border-b border-line px-4">
        <FiSearch aria-hidden className="shrink-0 text-lg text-muted" />
        <input
          ref={inputRef}
          type="text"
          role="combobox"
          aria-expanded="true"
          aria-controls={listId}
          aria-activedescendant={active ? `${listId}-${active.id}` : undefined}
          aria-autocomplete="list"
          aria-label="Search sections, projects and technologies"
          placeholder="Search the site..."
          autoComplete="off"
          spellCheck={false}
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setActiveIndex(0);
            setNotice("");
          }}
          onKeyDown={onInputKeyDown}
          className="h-14 w-full bg-transparent text-base outline-none"
        />
        <kbd className="hidden shrink-0 rounded border border-line px-1.5 font-mono text-xs text-muted sm:inline">
          Esc
        </kbd>
      </div>

      <div
        id={listId}
        role="listbox"
        aria-label="Results"
        className="max-h-[min(28rem,60vh)] overflow-y-auto p-2"
      >
        {groups.map(([group, commands]) => (
          <div
            key={group}
            role="group"
            aria-labelledby={`${listId}-group-${group.replace(/\s+/g, "-")}`}
          >
            <p
              id={`${listId}-group-${group.replace(/\s+/g, "-")}`}
              className="px-3 pb-1 pt-3 font-mono text-xs uppercase tracking-wider text-muted"
            >
              {group}
            </p>
            {commands.map((command) => {
              const isActive = command === active;
              return (
                <div
                  key={command.id}
                  id={`${listId}-${command.id}`}
                  role="option"
                  aria-selected={isActive}
                  onClick={() => run(command)}
                  onMouseMove={() => setActiveIndex(results.indexOf(command))}
                  className={`flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 ${
                    isActive ? "bg-accent/12" : ""
                  }`}
                >
                  <span
                    aria-hidden
                    className={isActive ? "text-accent" : "text-muted"}
                  >
                    {command.icon}
                  </span>
                  <span className="min-w-0 flex-1 truncate">
                    {command.label}
                  </span>
                  {command.hint && (
                    <span className="shrink-0 font-mono text-xs text-muted">
                      {command.hint}
                    </span>
                  )}
                  {isActive && (
                    <FiCornerDownLeft
                      aria-hidden
                      className="shrink-0 text-muted"
                    />
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      {results.length === 0 && (
        <p className="px-3 pb-10 pt-8 text-center text-muted">
          {`Nothing matches "${query.trim()}".`}
        </p>
      )}

      <p role="status" className="sr-only">
        {notice}
      </p>
      {/* Keyboard hints, or the last notice. Touch screens only show notices. */}
      <div
        aria-hidden
        className={`min-h-11 items-center gap-4 border-t border-line px-4 py-2 font-mono text-xs text-muted ${
          notice ? "flex" : "hidden pointer-fine:flex"
        }`}
      >
        {notice ? (
          <span className="text-accent">{notice}</span>
        ) : (
          <>
            <span>↑↓ to move</span>
            <span>Enter to select</span>
          </>
        )}
      </div>
    </dialog>
  );
}
