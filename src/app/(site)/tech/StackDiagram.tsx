"use client";

import { CSSProperties } from "react";
import { useTechFilter } from "./TechFilter";

export interface StackItem {
  key: string;
  label: string;
  // Number of projects that use this technology.
  count: number;
}

export interface StackLayer {
  name: string;
  items: StackItem[];
}

interface Props {
  layers: StackLayer[];
  languages: StackItem[];
}

function TechChip({ item }: { item: StackItem }) {
  const { selected, select } = useTechFilter();
  const base =
    "rounded-md px-2.5 py-1 font-mono text-[0.8125rem] leading-5 transition-colors";

  if (item.count === 0) {
    return <span className={`${base} text-muted`}>{item.label}</span>;
  }
  const active = selected === item.key;
  return (
    <button
      type="button"
      onClick={() => select(item.key, { scroll: true })}
      aria-label={`${item.label}, show ${item.count} project${item.count === 1 ? "" : "s"}`}
      className={`${base} border ${
        active
          ? "border-accent bg-accent text-canvas"
          : "border-line bg-canvas text-ink hover:border-accent hover:text-accent"
      }`}
    >
      {item.label}
    </button>
  );
}

// The hero's picture of "full-stack": the layers worked in, top to bottom,
// drawn as stepped slabs. Technologies used in projects filter the project list.
export default function StackDiagram({ layers, languages }: Props) {
  return (
    <figure aria-labelledby="stack-caption" className="w-full">
      <ol className="space-y-5">
        {layers.map((layer, index) => (
          <li
            key={layer.name}
            style={
              {
                "--step": index,
                animationDelay: `${150 + index * 140}ms`,
              } as CSSProperties
            }
            className="relative ml-[calc(var(--step)*1.5rem)] rounded-xl border border-line bg-surface p-4 shadow-[0_6px_0_0_var(--line)] motion-safe:animate-slab-in sm:ml-[calc(var(--step)*2.25rem)] sm:p-5"
          >
            <p className="text-sm font-semibold">{layer.name}</p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {layer.items.map((item) => (
                <li key={item.key}>
                  <TechChip item={item} />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2">
        <p className="text-sm font-semibold">Languages</p>
        <ul className="flex flex-wrap gap-1.5">
          {languages.map((item) => (
            <li key={item.key}>
              <TechChip item={item} />
            </li>
          ))}
        </ul>
      </div>

      <figcaption id="stack-caption" className="mt-5 text-sm text-muted">
        The layers I build, top to bottom. Select a technology to see the
        projects that use it.
      </figcaption>
    </figure>
  );
}
