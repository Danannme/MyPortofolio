import { motion, useReducedMotion } from "framer-motion";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const EASE = [0.22, 1, 0.36, 1];

const Home = () => {
  const reduceMotion = useReducedMotion();

  const fade = (delay) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: EASE },
        };

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="shell pt-28 pb-12 lg:pt-36 lg:pb-16"
    >
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <motion.p
            {...fade(0)}
            className="label label-accent mb-6 flex items-center gap-2"
          >
            <IoLocationOutline size={14} aria-hidden="true" />
            Front-End Developer — Jawa Timur, ID
          </motion.p>

          <motion.h1
            {...fade(0.06)}
            id="hero-title"
            className="max-w-[16ch] text-[clamp(2.5rem,6vw,5.5rem)] font-semibold text-fg"
          >
            Robbi Zaidan Ahmad
          </motion.h1>

          <motion.p
            {...fade(0.12)}
            className="mt-6 max-w-[48ch] text-[clamp(1rem,1.4vw,1.125rem)] leading-relaxed text-muted"
          >
            Saya membangun antarmuka web yang rapi dan cepat dengan React,
            JavaScript, dan Tailwind CSS. Menulis kode bukan soal sulit — soal
            presisi.
          </motion.p>

          <motion.div
            {...fade(0.18)}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            <a
              href="#portfolio"
              className="group inline-flex min-h-[48px] items-center gap-2 bg-fg px-6 text-sm font-medium text-white transition-colors duration-200 hover:bg-accent"
            >
              Lihat Karya
              <MdOutlineArrowRightAlt
                size={20}
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
            <a
              href="#contact"
              className="link-underline border-b border-fg/30 pb-0.5 text-sm font-medium text-fg"
            >
              Hubungi Saya
            </a>
          </motion.div>
        </div>

        <motion.div
          {...(reduceMotion
            ? {}
            : {
                initial: { opacity: 0, scale: 0.97 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.7, delay: 0.1, ease: EASE },
              })}
          className="mx-auto w-full max-w-md lg:col-span-5 lg:mx-0 lg:max-w-none"
        >
          <div className="group relative border border-hairline bg-surface p-2">
            <div className="overflow-hidden">
              <img
                src="/img/IMG-20250125-WA0074.webp"
                alt="Robbi Zaidan Ahmad duduk di depan dinding bata"
                width="880"
                height="880"
                className="aspect-square w-full object-cover grayscale transition-all duration-500 ease-out group-hover:grayscale-0 group-focus-within:grayscale-0"
              />
            </div>
            <p className="label absolute -bottom-3 left-4 bg-bg px-2">
              Foto — 2025
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
