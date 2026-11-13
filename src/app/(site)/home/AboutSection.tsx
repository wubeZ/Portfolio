import { getProgLanguages } from "@/sanity/sanity.query";
import { ProgLanguages } from "@/lib/types";
import Section from "../components/Section";
import TechList from "../components/TechList";

const SkillGroup = ({ title, skills }: { title: string; skills: string[] }) => (
  <div>
    <h4 className="text-sm font-medium text-muted">{title}</h4>
    <TechList items={skills} variant="tag" className="mt-3" />
  </div>
);

const AboutSection = async () => {
  const { programmingLanguages, frontend, backend, database }: ProgLanguages =
    await getProgLanguages();

  return (
    <Section id="about" title="About">
      <div className="grid gap-16 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
        <div className="max-w-[62ch] space-y-5 text-[1.0625rem] leading-relaxed text-muted">
          <p>
            I am a dedicated{" "}
            <strong className="font-semibold text-ink">
              Full Stack Developer
            </strong>{" "}
            with expertise in using Node.js, Django, and FastAPI for backend
            development, and React, Next.js, Tailwind CSS, Svelte, and SvelteKit
            for frontend development. I am committed to client satisfaction,
            focusing on effective communication and collaboration to translate
            their vision into functional and visually appealing web
            applications.
          </p>
          <p>
            I take pride in writing clean, efficient, and maintainable code with
            attention to detail and a strong eye for design. What sets me apart
            is my ability to thrive in fast-paced environments, leveraging my
            problem-solving skills and creativity to overcome challenges. I stay
            up to date with industry trends, using cutting-edge technologies to
            create impactful web applications.
          </p>
          <p>
            I am excited about collaborating on new projects, bringing ideas to
            life, and creating exceptional web applications that make a
            difference. Let&apos;s discuss how we can work together to achieve
            your goals and create remarkable solutions. Feel free to reach out
            and start the conversation.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Skills</h3>
          <div className="mt-6 space-y-7">
            <SkillGroup title="Languages" skills={programmingLanguages} />
            <SkillGroup
              title="Frontend"
              skills={[...frontend, "Svelte", "SvelteKit"]}
            />
            <SkillGroup title="Backend" skills={backend} />
            <SkillGroup title="Databases" skills={database} />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
