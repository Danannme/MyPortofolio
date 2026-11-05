import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import CardPorto from "../Elements/CardPorto";
import Reveal from "../Elements/Reveal";

const EASE = [0.22, 1, 0.36, 1];

const PROJECTS = [
  {
    imgSrc: "/img/project image/websiteKelas10.webp",
    imgAlt: "Homepage of the 10th grade class website showing a class photo",
    title: "Class Website — Grade 10",
    desc: "A class profile site I built in 10th grade to share information about my class.",
    techs: ["HTML", "CSS", "JavaScript"],
    meta: "2022 — Personal",
    linkTo: "https://profilex-gclass.pages.dev",
  },
  {
    imgSrc: "/img/project image/websiteKelas11.webp",
    imgAlt: "Homepage of the 11th grade class website with a teal navigation bar",
    title: "Class Website — Grade 11",
    desc: "A follow-up to the previous class site, with a tidier structure and a newer stack.",
    techs: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Bootstrap Icons"],
    meta: "2023 — Personal",
    linkTo: "https://thegrotesque.my.id",
  },
  {
    imgSrc: "/img/project image/noteAppRaect.webp",
    imgAlt: "React note-taking app showing a list of saved notes",
    title: "React Note App",
    desc: "A simple note-taking app built with React, including a search feature.",
    techs: ["React", "JavaScript", "CSS"],
    meta: "2024 — Personal",
    linkTo: "https://note-app-snowy-mu.vercel.app",
  },
  {
    imgSrc: "/img/project image/websiteTemplate-travelo.webp",
    imgAlt: "Travelo landing page with the headline Lifelong Memories Just A Few Days Away",
    title: "Travelo",
    desc: "A travel agency landing page template with a large hero and a destinations section.",
    techs: ["React", "Tailwind CSS", "DaisyUI"],
    meta: "2024 — Template",
    linkTo: "https://travelo-day.vercel.app",
  },
  {
    imgSrc: "/img/project image/websiteTemplate-wnc.webp",
    imgAlt: "WebNCraft landing page with the headline Where Vision Meets Digital Perfection",
    title: "WebNCraft",
    desc: "A landing page for a web agency, with entrance animations and shadcn components.",
    techs: ["React", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
    meta: "2025 — Template",
    linkTo: "https://webncraft-portfolio.vercel.app/",
  },
];

const CERTIFICATES = [
  {
    imgSrc: "/img/project image/sertifikatReact.webp",
    imgAlt: "React course completion certificate issued by Dicoding",
    title: "React Certificate",
    desc: "Course completion certificate issued by Dicoding on 11 December 2024.",
    techs: [],
    meta: "Dec 2024 — Dicoding",
    linkTo:
      "https://drive.google.com/file/d/1gDIzgi-vzk5jGHX8qwtxXY3s3LsSlsqT/view?usp=sharing",
    ctaLabel: "View",
  },
];

const TABS = [
  { id: "project", label: "Projects", items: PROJECTS },
  { id: "certificate", label: "Certificates", items: CERTIFICATES },
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
              Selected Work
            </h2>
          </Reveal>

          <Reveal
            delay={0.06}
            className="col-span-12 flex gap-8 md:col-span-6 md:justify-end"
          >
            <div role="tablist" aria-label="Work category" className="flex gap-8">
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
