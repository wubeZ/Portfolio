interface Props {
  items: string[];
  variant?: "tag" | "plain";
  className?: string;
}

// Technology names are code identifiers, so they use the mono face.
export default function TechList({ items, variant = "plain", className = "" }: Props) {
  return (
    <ul
      className={`flex flex-wrap font-mono ${
        variant === "tag"
          ? "gap-2 text-[0.8125rem]"
          : "gap-x-4 gap-y-1 text-[0.8125rem] text-muted"
      } ${className}`}
    >
      {items.map((item) => (
        <li
          key={item}
          className={
            variant === "tag"
              ? "rounded-md border border-line bg-surface px-2.5 py-1 text-ink"
              : undefined
          }
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
