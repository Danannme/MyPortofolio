import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { MdArrowOutward } from "react-icons/md";

const ITEMS = [
  {
    icon: FaGithub,
    label: "GitHub",
    value: "@Danannme",
    url: "https://www.github.com/Danannme",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "robbi-zaidan-ahmad",
    url: "https://www.linkedin.com/in/robbi-zaidan-ahmad-b0b593300/",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    value: "@danannme",
    url: "https://www.instagram.com/danannme",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "+62 851-5679-5615",
    url: "https://wa.me/6285156795615",
  },
  {
    icon: BiLogoGmail,
    label: "Email",
    value: "noragamiaragotoyato92@gmail.com",
    url: "mailto:noragamiaragotoyato92@gmail.com",
  },
];

export default function SosmedContact() {
  return (
    <ul className="flex flex-col">
      {ITEMS.map(({ icon: Icon, label, value, url }) => (
        <li key={label} className="border-b border-hairline first:border-t">
          <a
            href={url}
            target={url.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="group flex items-center gap-4 py-4 transition-colors duration-200"
          >
            <Icon
              size={18}
              aria-hidden="true"
              className="shrink-0 text-muted transition-colors duration-200 group-hover:text-accent"
            />
            <span className="flex min-w-0 flex-1 flex-col">
              <span className="text-sm font-medium text-fg">{label}</span>
              <span className="label truncate normal-case tracking-normal">
                {value}
              </span>
            </span>
            <MdArrowOutward
              size={16}
              aria-hidden="true"
              className="shrink-0 text-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
