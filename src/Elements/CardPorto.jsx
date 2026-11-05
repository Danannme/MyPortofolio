import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function CardPorto({
  imgSrc,
  imgAlt,
  title,
  desc,
  techs = [],
  meta,
  linkTo,
  ctaLabel = "Kunjungi",
}) {
  const visibleTechs = techs.slice(0, 4);
  const overflow = techs.length - visibleTechs.length;

  return (
    <a
      href={linkTo}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col border border-hairline bg-surface transition-colors duration-200 hover:border-fg/40"
    >
      <div className="overflow-hidden bg-bg">
        <img
          src={imgSrc}
          alt={imgAlt}
          loading="lazy"
          decoding="async"
          className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold text-fg transition-colors duration-200 group-hover:text-accent">
          {title}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
          {desc}
        </p>

        {meta ? <p className="label mt-4">{meta}</p> : null}

        <div className="mt-auto flex items-end justify-between gap-4 pt-5">
          <ul className="flex flex-wrap gap-x-2 gap-y-1">
            {visibleTechs.map((tech) => (
              <li key={tech} className="label text-fg/70">
                {tech}
              </li>
            ))}
            {overflow > 0 && <li className="label text-fg/70">+{overflow}</li>}
          </ul>
          <span className="label flex shrink-0 items-center gap-1.5 self-end text-fg transition-colors duration-200 group-hover:text-accent">
            {ctaLabel}
            <FaArrowUpRightFromSquare size={10} aria-hidden="true" />
          </span>
        </div>
      </div>
    </a>
  );
}
