"use client";

import { Project } from "@/lib/types";
import { projectUsesTech, TechCount } from "@/lib/tech";
import ProjectCard from "../components/ProjectCard";
import OtherProjectCard from "../components/OtherProjectCard";
import { useTechFilter } from "./TechFilter";

interface Props {
  projects: Project[];
  // Every technology with its project count, most used first.
  techs: TechCount[];
}

// Technologies used in fewer projects stay out of the filter bar unless selected.
const MIN_COUNT_IN_BAR = 2;

function FilterButton({
  label,
  count,
  pressed,
  onClick,
}: {
  label: string;
  count: number;
  pressed: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
        pressed
          ? "border-accent bg-accent text-canvas"
          : "border-line text-ink hover:border-accent hover:text-accent"
      }`}
    >
      {label}
      <span className={pressed ? "text-canvas/75" : "text-muted"}>{count}</span>
    </button>
  );
}

export default function ProjectExplorer({ projects, techs }: Props) {
  const { selected, select } = useTechFilter();
  const selectedTech = techs.find((tech) => tech.key === selected);
  // An unknown ?tech= value shows everything.
  const active = selectedTech ? selectedTech.key : null;

  const visible = active
    ? projects.filter((project) => projectUsesTech(project, active))
    : projects;
  const featured = visible.filter((project) => project.featured);
  const others = visible.filter((project) => !project.featured);

  const barTechs = techs.filter(
    (tech) => tech.count >= MIN_COUNT_IN_BAR || tech.key === active,
  );

  return (
    <div>
      <div
        role="group"
        aria-label="Filter projects by technology"
        className="flex flex-wrap gap-2"
      >
        <FilterButton
          label="All"
          count={projects.length}
          pressed={active === null}
          onClick={() => select(null)}
        />
        {barTechs.map((tech) => (
          <FilterButton
            key={tech.key}
            label={tech.label}
            count={tech.count}
            pressed={tech.key === active}
            onClick={() => select(tech.key === active ? null : tech.key)}
          />
        ))}
      </div>
      <p role="status" className="mt-4 min-h-6 text-sm text-muted">
        {selectedTech &&
          `${visible.length} project${visible.length === 1 ? "" : "s"} built with ${selectedTech.label}.`}
      </p>

      {featured.length > 0 && (
        <div className="mt-10 space-y-20 sm:space-y-28">
          {featured.map((project, index) => (
            <ProjectCard key={project.title} index={index} {...project} />
          ))}
        </div>
      )}

      {others.length > 0 && (
        <div className={featured.length > 0 ? "mt-24 sm:mt-32" : "mt-10"}>
          {featured.length > 0 && (
            <h3 className="text-xl font-semibold">More projects</h3>
          )}
          <ul
            className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ${featured.length > 0 ? "mt-8" : ""}`}
          >
            {others.map((project) => (
              <li key={project.title} className="flex">
                <OtherProjectCard {...project} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
