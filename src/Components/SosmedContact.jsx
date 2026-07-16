import GlassIcons from "../Elements/GlassIcons";

import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";

export default function SosmedContact() {
    const items = [
        {
            icon: <FaGithub size={28} className="text-black group-hover:text-winered transition-colors duration-300" />,
            color: "white",
            label: "Github",
            url: "https://www.github.com/Danannme",
        },
        {
            icon: <FaInstagram size={28} className="text-black group-hover:text-winered transition-colors duration-300" />,
            color: "white",
            label: "Instagram",
            url: "https://www.instagram.com/danannme",
        },
        {
            icon: <BiLogoGmail size={28} className="text-black group-hover:text-winered transition-colors duration-300" />,
            color: "white",
            label: "Gmail",
            url: "mailto:noragamiaragotoyato92@gmail.com",
        },
        {
            icon: <FaWhatsapp size={28} className="text-black group-hover:text-winered transition-colors duration-300" />,
            color: "white",
            label: "Whatsapp",
            url: "https://wa.me/6285156795615",
        },
    ];

    return (
        <div className="relative flex flex-col border border-black/80 bg-white p-6 md:p-8 rounded-none w-80 sm:w-96 crop-marks print-proof-frame">
            {/* Top gold design line accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gold"></div>

            <h4 className="block self-center text-xl font-serif font-black uppercase tracking-widest text-black mb-4">
                Let's Connect!
            </h4>
            <div className="relative flex justify-center items-center h-full">
                <GlassIcons items={items} className="py-2 gap-8" />
            </div>
        </div>
    );
}
