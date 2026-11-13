import { ReactNode } from "react";

interface Props {
  id: string;
  title: string;
  intro?: string;
  children: ReactNode;
}

// Shared frame for the page sections: same spacing, heading and intro style.
export default function Section({ id, title, intro, children }: Props) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="container-page border-t border-line py-20 sm:py-28"
    >
      <h2
        id={`${id}-title`}
        className="text-[1.75rem] font-semibold tracking-[-0.01em] sm:text-4xl"
      >
        {title}
      </h2>
      {intro && <p className="mt-3 max-w-[60ch] text-muted">{intro}</p>}
      <div className="mt-12">{children}</div>
    </section>
  );
}
