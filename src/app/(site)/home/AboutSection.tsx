import Section from "../components/Section";

const AboutSection = () => {
  return (
    <Section id="about" title="About">
      <div className="max-w-[60ch] space-y-6 text-lg leading-relaxed text-muted sm:text-xl sm:leading-relaxed">
        <p>
          I am a dedicated{" "}
          <strong className="font-semibold text-ink">
            Full Stack Developer
          </strong>{" "}
          with expertise in using Node.js, Django, and FastAPI for backend
          development, and React, Next.js, Tailwind CSS, Svelte, and SvelteKit
          for frontend development. I am committed to client satisfaction,
          focusing on effective communication and collaboration to translate
          their vision into functional and visually appealing web applications.
        </p>
        <p>
          I take pride in writing clean, efficient, and maintainable code with
          attention to detail and a strong eye for design. What sets me apart is
          my ability to thrive in fast-paced environments, leveraging my
          problem-solving skills and creativity to overcome challenges. I stay
          up to date with industry trends, using cutting-edge technologies to
          create impactful web applications.
        </p>
        <p>
          I am excited about collaborating on new projects, bringing ideas to
          life, and creating exceptional web applications that make a
          difference. Let&apos;s discuss how we can work together to achieve
          your goals and create remarkable solutions. Feel free to reach out and
          start the conversation.
        </p>
      </div>
    </Section>
  );
};

export default AboutSection;
