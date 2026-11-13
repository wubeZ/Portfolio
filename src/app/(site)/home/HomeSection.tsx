import Link from "next/link";
import { email, github, linkedin, twitter } from "@/lib/socials";
import { countProjectsByTech, techKey, techLabel } from "@/lib/tech";
import { getProgLanguages, getProjects } from "@/sanity/sanity.query";
import SocialLinks from "../components/SocialLinks";
import StackDiagram, { StackItem } from "../tech/StackDiagram";

const RESUME_URL =
  "https://drive.google.com/file/d/18cS7JgXS9-RLsurExSxZty2R3SkxKDne/view?usp=sharing";

const HomeSection = async () => {
  const [skills, projects] = await Promise.all([
    getProgLanguages(),
    getProjects(),
  ]);
  const counts = new Map(
    countProjectsByTech(projects).map((tech) => [tech.key, tech.count]),
  );
  const toItems = (names: string[]): StackItem[] =>
    names.map((name) => ({
      key: techKey(name),
      label: techLabel(name),
      count: counts.get(techKey(name)) ?? 0,
    }));

  const layers = [
    {
      name: "Interface",
      items: toItems([...skills.frontend, "Svelte", "SvelteKit"]),
    },
    { name: "Server", items: toItems(skills.backend) },
    { name: "Data", items: toItems(skills.database) },
  ];

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="container-page grid items-center gap-16 pb-20 pt-16 sm:pb-28 sm:pt-24 lg:grid-cols-[1fr_minmax(0,30rem)] lg:gap-12"
    >
      <div>
        <h1 className="text-[clamp(3.25rem,9vw,5.5rem)] font-bold leading-[0.92] tracking-[-0.035em]">
          Wubshet
          <br />
          Zeleke
        </h1>
        <p className="mt-8 text-xl font-medium sm:text-2xl">
          Full-stack developer based in Ethiopia
        </p>
        <p className="mt-3 max-w-[44ch] text-lg leading-relaxed text-muted">
          I build digital products, brands and experiences, with a focus on
          robust web applications.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-6">
          <div className="flex gap-3">
            <Link
              href="#projects"
              className="rounded-md bg-accent px-5 py-3 font-semibold text-canvas transition-colors hover:bg-ink"
            >
              View projects
            </Link>
            <Link
              href={RESUME_URL}
              target="_blank"
              className="rounded-md border border-line px-5 py-3 font-semibold transition-colors hover:border-ink"
            >
              Resume
            </Link>
          </div>
          <SocialLinks socials={[email, linkedin, github, twitter]} />
        </div>
      </div>

      <StackDiagram
        layers={layers}
        languages={toItems(skills.programmingLanguages)}
      />
    </section>
  );
};

export default HomeSection;
