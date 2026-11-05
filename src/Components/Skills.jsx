import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiRedux, SiReactquery, SiVitest } from "react-icons/si";
import Reveal from "../Elements/Reveal";

const GROUPS = [
  {
    title: "Languages",
    items: [
      { icon: FaHtml5, label: "HTML", level: "Menengah" },
      { icon: FaCss3Alt, label: "CSS", level: "Menengah" },
      { icon: IoLogoJavascript, label: "JavaScript", level: "Menengah" },
      { icon: SiTypescript, label: "TypeScript", level: "Dasar" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      { icon: FaReact, label: "React", level: "Menengah" },
      { icon: RiTailwindCssFill, label: "Tailwind CSS", level: "Menengah" },
      { icon: SiRedux, label: "Redux Toolkit", level: "Dasar" },
      { icon: SiReactquery, label: "TanStack Query", level: "Dasar" },
    ],
  },
  {
    title: "Tools & Testing",
    items: [{ icon: SiVitest, label: "Vitest", level: "Dasar" }],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="shell py-20 lg:py-28"
    >
      <div className="rule pt-8">
        <div className="grid-12">
          <Reveal className="col-span-12 md:col-span-3">
            <p className="label label-accent mb-2">02 / Skills</p>
            <h2 id="skills-title" className="section-title text-fg">
              Keahlian
            </h2>
          </Reveal>

          <div className="col-span-12 md:col-span-9">
            {GROUPS.map((group, groupIndex) => (
              <Reveal
                key={group.title}
                delay={groupIndex * 0.06}
                className="grid gap-4 border-t border-hairline py-6 first:border-t-0 first:pt-0 md:grid-cols-12"
              >
                <p className="label md:col-span-4">{group.title}</p>

                <ul className="flex flex-col md:col-span-8">
                  {group.items.map(({ icon: Icon, label, level }) => (
                    <li
                      key={label}
                      className="group flex items-center gap-4 border-b border-hairline py-3 last:border-0"
                    >
                      <Icon
                        size={20}
                        aria-hidden="true"
                        className="shrink-0 text-muted transition-colors duration-200 group-hover:text-accent"
                      />
                      <span className="flex-1 text-base font-medium text-fg">
                        {label}
                      </span>
                      <span className="label">{level}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
