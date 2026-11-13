"use client";

import { techKey, techLabel } from "@/lib/tech";
import { useTechFilter } from "../tech/TechFilter";

interface Props {
  items: string[];
  className?: string;
}

// A project's technologies, in the mono face since they are code identifiers.
// The one matching the active filter is highlighted, to show why the project matched.
export default function TechList({ items, className = "" }: Props) {
  const { selected } = useTechFilter();

  return (
    <ul
      className={`flex flex-wrap gap-x-4 gap-y-1 font-mono text-[0.8125rem] text-muted ${className}`}
    >
      {items.map((item) => {
        const match = selected !== null && techKey(item) === selected;
        return (
          <li
            key={item}
            className={match ? "font-medium text-accent" : undefined}
          >
            {techLabel(item)}
          </li>
        );
      })}
    </ul>
  );
}
