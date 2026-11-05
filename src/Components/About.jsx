import Reveal from "../Elements/Reveal";

const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="shell py-20 lg:py-28"
    >
      <div className="rule pt-8">
        <div className="grid-12">
          <Reveal className="col-span-12 md:col-span-3">
            <p className="label label-accent mb-2">01 / About</p>
            <h2 id="about-title" className="section-title text-fg">
              About
            </h2>
          </Reveal>

          <Reveal delay={0.08} className="col-span-12 md:col-span-9">
            <p className="max-w-[62ch] text-[clamp(1.0625rem,1.6vw,1.375rem)] leading-relaxed text-fg">
              I started learning{" "}
              <span className="font-medium underline decoration-accent decoration-2 underline-offset-4">
                web development
              </span>{" "}
              in the 10th grade. Since then I have built a number of personal
              projects and worked with teams, from class profile sites to product
              landing pages.
            </p>

            <p className="mt-6 max-w-[62ch] text-base leading-relaxed text-muted">
              My day-to-day work revolves around HTML, CSS, JavaScript, React,
              and Tailwind CSS, with a focus on interfaces that stay consistent,
              accessible, and fast. I am still learning, and open to new
              opportunities in front-end development.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
