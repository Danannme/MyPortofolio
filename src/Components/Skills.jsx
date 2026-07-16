import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiRedux, SiReactquery, SiVitest } from "react-icons/si";

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
  {
    icon: <SiReactquery size={24} />,
    label: "Vitest",
  },
];

const Skills = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8 relative overflow-hidden">
      {/* Background watermark text */}
      <div className="absolute -right-6 -bottom-10 font-serif text-[14rem] font-black text-black/[0.015] select-none pointer-events-none leading-none">
        DEV
      </div>
      <div className="max-w-5xl mx-auto relative z-1">
        <h1
          className="title text-4xl text-center font-serif font-black tracking-wide scroll-mt-60 lg:scroll-mt-14"
          id="skills"
        >
          Skills
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {items.map((skill) => (
            <div
              key={skill.label}
              className="group rounded-none border border-black/80 p-5 bg-white hover:bg-beige/40 hover:border-winered transition-all duration-500 cursor-pointer relative"
            >
              {/* Top gold line indicator on hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <div className="text-3xl mb-3 text-winered group-hover:scale-110 transition-transform duration-500">{skill.icon}</div>
              <h3 className="text-sm font-sans font-bold tracking-widest uppercase text-black group-hover:text-winered transition-colors duration-500">{skill.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
