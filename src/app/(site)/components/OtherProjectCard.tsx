import Link from "next/link";
import { Project } from "@/lib/types";
import ProjectLinks from "./ProjectLinks";
import TechList from "./TechList";

const OtherProjectCard = ({
  title,
  description,
  siteLink,
  githubLink,
  techUsed,
}: Project) => {
  const href = siteLink || githubLink;

  return (
    <article className="relative flex w-full flex-col rounded-lg border border-line bg-surface p-6 transition-colors hover:border-muted/60">
      <h4 className="text-lg font-semibold">
        {href ? (
          // The ::after overlay makes the whole card clickable without nesting links.
          <Link href={href} target="_blank" className="after:absolute after:inset-0">
            {title}
          </Link>
        ) : (
          title
        )}
      </h4>
      <p className="mt-3 line-clamp-4 text-[0.9375rem] leading-relaxed text-muted">
        {description}
      </p>
      <div className="mt-auto pt-6">
        <TechList items={techUsed} />
        <ProjectLinks
          title={title}
          githubLink={githubLink}
          siteLink={siteLink}
          className="relative z-10 mt-5 w-fit"
        />
      </div>
    </article>
  );
};

export default OtherProjectCard;
