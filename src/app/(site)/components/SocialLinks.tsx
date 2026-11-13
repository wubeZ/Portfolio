import Link from "next/link";
import { Social } from "@/lib/types";

interface Props {
  socials: Social[];
  size?: "md" | "sm";
}

export default function SocialLinks({ socials, size = "md" }: Props) {
  return (
    <ul className={`flex ${size === "md" ? "gap-5 text-[1.375rem]" : "gap-4 text-lg"}`}>
      {socials.map(({ title, link, icon }) => (
        <li key={link}>
          <Link
            href={link}
            target={link.startsWith("mailto:") ? undefined : "_blank"}
            aria-label={title}
            className="block text-muted transition-colors hover:text-accent"
          >
            {icon}
          </Link>
        </li>
      ))}
    </ul>
  );
}
