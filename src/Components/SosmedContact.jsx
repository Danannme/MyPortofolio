import GlassIcons from "../Elements/GlassIcons";

import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

export default function SosmedContact() {
    const items = [
        {
            icon: <FaGithub size={50} />,
            color: "white",
            label: "Github",
            url: "https://www.github.com/Danannme",
        },
        {
            icon: <FaInstagram size={50} />,
            color: "white",
            label: "Instagram",
            url: "https://www.instagram.com/danannme",
        },
        {
            icon: <BiLogoGmail size={50} />,
            color: "white",
            label: "Gmail",
            // url: "https://mail.google.com/mail/?view=cm&fs=1&to=noragamiaragotoyato92@gmail.com",
            url: "mailto:noragamiaragotoyato92@gmail.com",
        },
    ];

    return (
        <div className="relative flex flex-col rounded-xl bg-transparent">
            <h4 className="block self-center text-xl font-medium text-slate-800">
                Let's Connect!
            </h4>
            <div className="relative">
                <GlassIcons items={items} className="" />
            </div>
        </div>
    );
}
