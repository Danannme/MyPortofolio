import Reveal from "../Elements/Reveal";

const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="shell py-20 lg:py-28"
    >
      <div className="rule pt-8">
        <div className="grid-12">
          <Reveal className="col-span-12 md:col-span-3">
            <p className="label label-accent mb-2">01 / About</p>
            <h2 id="about-title" className="section-title text-fg">
              Tentang
            </h2>
          </Reveal>

          <Reveal delay={0.08} className="col-span-12 md:col-span-9">
            <p className="max-w-[62ch] text-[clamp(1.0625rem,1.6vw,1.375rem)] leading-relaxed text-fg">
              Saya mulai belajar{" "}
              <span className="font-medium underline decoration-accent decoration-2 underline-offset-4">
                pengembangan website
              </span>{" "}
              sejak kelas 10 SMA. Sejak itu saya mengerjakan beberapa project
              pribadi dan ikut berkolaborasi dalam tim, mulai dari website
              profil kelas sampai landing page produk.
            </p>

            <p className="mt-6 max-w-[62ch] text-base leading-relaxed text-muted">
              Keseharian saya sekarang berputar di HTML, CSS, JavaScript,
              React, dan Tailwind CSS — dengan fokus pada tampilan yang
              konsisten, aksesibel, dan cepat. Saya masih terus belajar, dan
              terbuka untuk kesempatan baru di dunia front-end development.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
