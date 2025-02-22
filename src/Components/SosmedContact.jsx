import GlassIcons from "../Elements/GlassIcons";

import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";

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
            url: "mailto:noragamiaragotoyato92@gmail.com",
        },
        {
            icon: <FaWhatsapp size={50} />,
            color: "white",
            label: "Whatsapp",
            url: "https://wa.me/6285156795615",
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
