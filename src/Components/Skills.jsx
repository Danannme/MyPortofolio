import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

import Dock from "../Elements/Dock";

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
];

const Skills = () => {
    return (
        <div className="skills grid gap-4">
            <h1
                className="title text-3xl text-center font-medium before:left-[24px] before:w-[70px] scroll-mt-60"
                id="skills"
            >
                Skills
            </h1>
            <div className="skills-list relative">
                <Dock
                    items={items}
                    panelHeight={70}
                    baseItemSize={50}
                    magnification={70}
                />
            </div>
        </div>
    );
};

export default Skills;
