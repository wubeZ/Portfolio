import Link from "next/link";
import { email, github, linkedin, twitter } from "@/lib/socials";
import SocialLinks from "../components/SocialLinks";

const RESUME_URL =
  "https://drive.google.com/file/d/18cS7JgXS9-RLsurExSxZty2R3SkxKDne/view?usp=sharing";

const HomeSection = () => {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="container-page pb-20 pt-20 sm:pb-32 sm:pt-36"
    >
      <h1 className="text-[clamp(3.25rem,10vw,5.75rem)] font-bold leading-[0.92] tracking-[-0.035em]">
        Wubshet
        <br />
        Zeleke
      </h1>
      <p className="mt-8 text-xl font-medium sm:text-2xl">
        Full-stack developer based in Ethiopia
      </p>
      <p className="mt-3 max-w-[52ch] text-lg leading-relaxed text-mist">
        I build digital products, brands and experiences, with a focus on
        robust web applications.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-6">
        <div className="flex gap-3">
          <Link
            href="#projects"
            className="rounded-md bg-signal px-5 py-3 font-semibold text-night transition-colors hover:bg-paper"
          >
            View projects
          </Link>
          <Link
            href={RESUME_URL}
            target="_blank"
            className="rounded-md border border-line px-5 py-3 font-semibold transition-colors hover:border-paper"
          >
            Resume
          </Link>
        </div>
        <SocialLinks socials={[email, linkedin, github, twitter]} />
      </div>
    </section>
  );
};

export default HomeSection;
