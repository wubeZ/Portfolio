import { Project } from "./types";

// Projects and skills spell some tools differently. Map variants to one key.
const ALIASES: Record<string, string> = {
  "react.js": "react",
  reactjs: "react",
  "planetscale (mysql)": "mysql",
  "github action": "github actions",
};

// Preferred display names for keys whose stored spelling varies.
const LABELS: Record<string, string> = {
  react: "React",
  typescript: "TypeScript",
  javascript: "JavaScript",
  mysql: "MySQL",
  "github actions": "GitHub Actions",
};

export function techKey(name: string): string {
  const key = name.trim().toLowerCase();
  return ALIASES[key] ?? key;
}

export function techLabel(name: string): string {
  return LABELS[techKey(name)] ?? name.trim();
}

export function projectUsesTech(project: Project, key: string): boolean {
  return project.techUsed.some((tech) => techKey(tech) === key);
}

export interface TechCount {
  key: string;
  label: string;
  count: number;
}

// Number of projects per technology, most used first.
export function countProjectsByTech(projects: Project[]): TechCount[] {
  const counts = new Map<string, TechCount>();
  for (const project of projects) {
    for (const key of new Set(project.techUsed.map(techKey))) {
      const name = project.techUsed.find((tech) => techKey(tech) === key)!;
      const entry = counts.get(key) ?? {
        key,
        label: techLabel(name),
        count: 0,
      };
      entry.count += 1;
      counts.set(key, entry);
    }
  }
  return [...counts.values()].sort(
    (a, b) => b.count - a.count || a.label.localeCompare(b.label),
  );
}
