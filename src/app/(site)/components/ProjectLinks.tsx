import Link from "next/link";
import { FiExternalLink, FiGithub } from "react-icons/fi";

interface Props {
  title: string;
  githubLink?: string;
  siteLink?: string;
  className?: string;
}

export default function ProjectLinks({ title, githubLink, siteLink, className = "" }: Props) {
  if (!githubLink && !siteLink) return null;
  return (
    <div className={`flex gap-5 text-sm font-medium ${className}`}>
      {siteLink && (
        <Link
          href={siteLink}
          target="_blank"
          aria-label={`${title} live site`}
          className="inline-flex items-center gap-1.5 text-paper transition-colors hover:text-signal"
        >
          <FiExternalLink aria-hidden />
          Live site
        </Link>
      )}
      {githubLink && (
        <Link
          href={githubLink}
          target="_blank"
          aria-label={`${title} source code on GitHub`}
          className="inline-flex items-center gap-1.5 text-paper transition-colors hover:text-signal"
        >
          <FiGithub aria-hidden />
          Code
        </Link>
      )}
    </div>
  );
}
