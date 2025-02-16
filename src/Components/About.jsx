const About = () => {
    return (
        <div className="about w-[80%] mx-auto grid gap-2">
            <h1 className="title text-3xl text-center font-medium" id="about">
                About Me
            </h1>
            <p>
                Saya sekarang duduk di kelas 12 SMA, belajar{" "}
                <span className="bg-black text-white px-2">
                    Front End Develoment
                </span>{" "}
                sejak kelas 10. Berpengalaman dengan HTML, CSS, JavaScript,
                React.js, dan Tailwind CSS. Saya telah mengerjakan beberapa
                proyek pribadi yang mengasah keterampilan saya dalam
                pengembangan web. Saya selalu berusaha meningkatkan kemampuan
                dan terbuka untuk peluang baru di dunia front-end development.
            </p>
        </div>
    );
};

export default About;
