import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/types";
import ProjectLinks from "./ProjectLinks";
import TechList from "./TechList";

interface Props extends Project {
  index: number;
}

// Featured project: screenshot beside the text, alternating sides on desktop.
// On mobile the screenshot sits above the text.
const ProjectCard = ({
  index,
  title,
  description,
  techUsed,
  githubLink,
  siteLink,
  backgroundImage,
}: Props) => {
  const href = siteLink || githubLink;
  const imageFirst = index % 2 === 0;

  return (
    <article className="grid items-center gap-8 md:grid-cols-[1.2fr_1fr] md:gap-12">
      {backgroundImage?.image && (
        <div className={imageFirst ? "" : "md:order-last"}>
          <Link
            href={href ?? "#projects"}
            target="_blank"
            tabIndex={-1}
            aria-hidden
            className="group relative block aspect-[16/10] overflow-hidden rounded-lg border border-line bg-harbor"
          >
            <Image
              src={backgroundImage.image}
              alt={backgroundImage.alt || ""}
              fill
              sizes="(min-width: 768px) 560px, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </Link>
        </div>
      )}

      <div>
        <h3 className="text-2xl font-semibold tracking-[-0.01em] sm:text-[1.75rem]">
          {href ? (
            <Link
              href={href}
              target="_blank"
              className="transition-colors hover:text-signal"
            >
              {title}
            </Link>
          ) : (
            title
          )}
        </h3>
        <p className="mt-4 max-w-[48ch] leading-relaxed text-mist">
          {description}
        </p>
        <TechList items={techUsed} className="mt-5" />
        <ProjectLinks
          title={title}
          githubLink={githubLink}
          siteLink={siteLink}
          className="mt-6"
        />
      </div>
    </article>
  );
};

export default ProjectCard;
