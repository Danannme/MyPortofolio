import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import CardPorto from "../Elements/CardPorto";
import Reveal from "../Elements/Reveal";

const EASE = [0.22, 1, 0.36, 1];

const PROJECTS = [
  {
    imgSrc: "/img/project image/websiteKelas10.webp",
    imgAlt: "Tampilan beranda Website Kelas 10 dengan foto kelas",
    title: "Website Kelas 10",
    desc: "Website profil kelas yang saya buat di kelas 10 SMA untuk membagikan informasi kelas.",
    techs: ["HTML", "CSS", "JavaScript"],
    meta: "2022 — Personal",
    linkTo: "https://profilex-gclass.pages.dev",
  },
  {
    imgSrc: "/img/project image/websiteKelas11.webp",
    imgAlt: "Tampilan beranda Website Kelas 11 dengan navigasi hijau tosca",
    title: "Website Kelas 11",
    desc: "Versi lanjutan dari website kelas sebelumnya, dengan struktur dan teknologi yang lebih rapi.",
    techs: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Bootstrap Icons"],
    meta: "2023 — Personal",
    linkTo: "https://thegrotesque.my.id",
  },
  {
    imgSrc: "/img/project image/noteAppRaect.webp",
    imgAlt: "Tampilan aplikasi catatan React dengan daftar note",
    title: "React Note App",
    desc: "Aplikasi catatan sederhana dengan React, dilengkapi fitur pencarian note.",
    techs: ["React", "JavaScript", "CSS"],
    meta: "2024 — Personal",
    linkTo: "https://note-app-snowy-mu.vercel.app",
  },
  {
    imgSrc: "/img/project image/websiteTemplate-travelo.webp",
    imgAlt: "Landing page Travelo dengan headline Lifelong Memories Just A Few Days Away",
    title: "Travelo",
    desc: "Template landing page agen travel dengan layout hero besar dan bagian destinasi.",
    techs: ["React", "Tailwind CSS", "DaisyUI"],
    meta: "2024 — Template",
    linkTo: "https://travelo-day.vercel.app",
  },
  {
    imgSrc: "/img/project image/websiteTemplate-wnc.webp",
    imgAlt: "Landing page WebNCraft dengan headline Where Vision Meets Digital Perfection",
    title: "WebNCraft",
    desc: "Landing page agensi pembuat website, lengkap dengan animasi masuk dan komponen shadcn.",
    techs: ["React", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
    meta: "2025 — Template",
    linkTo: "https://webncraft-portfolio.vercel.app/",
  },
];

const CERTIFICATES = [
  {
    imgSrc: "/img/project image/sertifikatReact.webp",
    imgAlt: "Sertifikat kelulusan kelas React dari Dicoding",
    title: "Sertifikat React",
    desc: "Sertifikat kelulusan kelas React yang diterbitkan Dicoding pada 11 Desember 2024.",
    techs: [],
    meta: "Des 2024 — Dicoding",
    linkTo:
      "https://drive.google.com/file/d/1gDIzgi-vzk5jGHX8qwtxXY3s3LsSlsqT/view?usp=sharing",
    ctaLabel: "Lihat",
  },
];

const TABS = [
  { id: "project", label: "Project", items: PROJECTS },
  { id: "certificate", label: "Certificate", items: CERTIFICATES },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("project");
  const reduceMotion = useReducedMotion();
  const active = TABS.find((tab) => tab.id === activeTab) ?? TABS[0];

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-title"
      className="shell py-20 lg:py-28"
    >
      <div className="rule pt-8">
        <div className="grid-12 items-end">
          <Reveal className="col-span-12 md:col-span-6">
            <p className="label label-accent mb-2">03 / Portfolio</p>
            <h2 id="portfolio-title" className="section-title text-fg">
              Karya Terpilih
            </h2>
          </Reveal>

          <Reveal
            delay={0.06}
            className="col-span-12 flex gap-8 md:col-span-6 md:justify-end"
          >
            <div role="tablist" aria-label="Kategori karya" className="flex gap-8">
              {TABS.map((tab) => {
                const isActive = tab.id === activeTab;
                return (
                  <button
                    key={tab.id}
                    role="tab"
                    id={`tab-${tab.id}`}
                    aria-selected={isActive}
                    aria-controls={`panel-${tab.id}`}
                    onClick={() => setActiveTab(tab.id)}
                    className={`label relative pb-2 transition-colors duration-200 ${
                      isActive ? "text-fg" : "text-muted hover:text-fg"
                    }`}
                  >
                    {tab.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-0 bottom-0 h-0.5 origin-left bg-accent transition-transform duration-200 ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        <div
          role="tabpanel"
          id={`panel-${active.id}`}
          aria-labelledby={`tab-${active.id}`}
          className="mt-10"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active.id}
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: EASE }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {active.items.map((item) => (
                <CardPorto key={item.title} {...item} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
