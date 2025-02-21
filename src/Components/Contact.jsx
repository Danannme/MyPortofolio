import FormContact from "./FormContact";
import SosmedContact from "./SosmedContact";

export default function Contact() {
    return (
        <div className="contact grid gap-4">
            <h1
                className="title text-3xl text-center font-medium before:left-[68px] before:w-[165px] scroll-mt-60"
                id="contact"
            >
                Contact Me
            </h1>
            <div className="all-contact flex flex-wrap justify-center gap-12">
                <FormContact />
                <SosmedContact />
            </div>
        </div>
    );
}
