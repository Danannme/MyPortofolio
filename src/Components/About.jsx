const About = () => {
    return (
        <div className="w-full bg-[#FAF6F0] border-y border-black/10 py-16 my-4 relative overflow-hidden">
            {/* Background watermark text */}
            <div className="absolute -left-10 -bottom-8 font-serif text-[12rem] font-black text-black/[0.015] select-none pointer-events-none leading-none">
                ART
            </div>
            <div className="about w-[85%] max-w-[800px] mx-auto relative z-1 p-8 bg-white border border-black/10 print-proof-frame crop-marks shadow-sm">
                <h1
                    className="title text-4xl text-center font-serif font-black tracking-wide mb-8 scroll-mt-60 lg:scroll-mt-14"
                    id="about"
                >
                    About Me
                </h1>
                <p className="editorial-dropcap font-sans text-base lg:text-lg text-darkgrey leading-loose text-justify md:px-8">
                    I just graduated from high school, studying{" "}
                    <span className="about-special-text border-b-2 border-winered text-black font-semibold bg-gold/10 px-1">
                        Front End Develoment
                    </span>{" "}
                    since 10th grade. Experienced with HTML, CSS, JavaScript,
                    React.js, and Tailwind CSS. I have worked on several personal
                    projects and collaborated with teams that honed my skills in web
                    development. I always try to improve my skills and open to new
                    opportunities in the world of front-end development.
                </p>
            </div>
        </div>
    );
};

export default About;
