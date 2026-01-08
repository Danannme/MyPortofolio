import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiRedux, SiReactquery } from "react-icons/si";

const items = [
  {
    icon: <FaHtml5 size={24} />,
    label: "HTML",
  },
  {
    icon: <FaCss3 size={24} />,
    label: "CSS",
  },
  {
    icon: <IoLogoJavascript size={24} />,
    label: "Javascript",
  },
  {
    icon: <FaReact size={24} />,
    label: "React Js",
  },
  {
    icon: <RiTailwindCssFill size={24} />,
    label: "Tailwind CSS",
  },
  {
    icon: <SiTypescript size={24} />,
    label: "Typescript",
  },
  {
    icon: <SiRedux size={24} />,
    label: "Beginner Redux Tool Kit",
  },
  {
    icon: <SiReactquery size={24} />,
    label: "Tanstack Query",
  },
];

const Skills = () => {
  return (
    <section className="max-w-5xl mx-auto py-16">
      <h1
        className="title text-3xl text-center font-medium before:left-[24px] before:w-[70px] scroll-mt-60 lg:scroll-mt-14"
        id="skills"
      >
        Skills
      </h1>
      <div className="grid grid-cols-2 px-4 md:px-0 md:grid-cols-3 gap-2 mt-4">
        {items.map((skill) => (
          <div
            key={skill.label}
            className="group rounded-xl border border-gray-300 p-4 hover:border-black transition"
          >
            <div className="text-4xl mb-2">{skill.icon}</div>

            <h3 className="text-lg font-semibold">{skill.label}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
