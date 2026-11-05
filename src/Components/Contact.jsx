import FormContact from "./FormContact";
import SosmedContact from "./SosmedContact";
import Reveal from "../Elements/Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="shell py-20 lg:py-28"
    >
      <div className="rule pt-8">
        <div className="grid-12">
          <Reveal className="col-span-12 md:col-span-3">
            <p className="label label-accent mb-2">04 / Contact</p>
            <h2 id="contact-title" className="section-title text-fg">
              Hubungi
            </h2>
            <p className="mt-4 max-w-[30ch] text-sm leading-relaxed text-muted">
              Terbuka untuk kerja sama project, magang, atau sekadar berdiskusi
              soal front-end.
            </p>
          </Reveal>

          <Reveal delay={0.06} className="col-span-12 md:col-span-5">
            <FormContact />
          </Reveal>

          <Reveal delay={0.12} className="col-span-12 md:col-span-4">
            <p className="label mb-4">Lainnya</p>
            <SosmedContact />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
