import FormContact from "./FormContact";
import SosmedContact from "./SosmedContact";

export default function Contact() {
    return (
        <div className="w-full py-16 relative overflow-hidden">
            {/* Background watermark text */}
            <div className="absolute -right-6 -bottom-10 font-serif text-[14rem] font-black text-black/[0.015] select-none pointer-events-none leading-none">
                TALK
            </div>
            <div className="contact grid gap-6 max-w-5xl mx-auto relative z-1">
                <h1
                    className="title text-4xl text-center font-serif font-black tracking-wide scroll-mt-60 lg:scroll-mt-14"
                    id="contact"
                >
                    Contact Me
                </h1>
                <div className="all-contact flex flex-wrap justify-center gap-12 mt-6">
                    <FormContact />
                    <SosmedContact />
                </div>
            </div>
        </div>
    );
}
