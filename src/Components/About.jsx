const About = () => {
    return (
        <div className="about w-[80%] max-w-[1000px] mx-auto grid gap-2">
            <h1
                className="title text-3xl text-center font-medium before:left-[58px] before:w-[140px] scroll-mt-60 lg:scroll-mt-14"
                id="about"
            >
                About Me
            </h1>
            <p className="lg:text-lg">
                I just graduated from high school, studying{" "}
                <span className="about-special-text border-b-2 border-gray-400">
                    Front End Develoment
                </span>{" "}
                since 10th grade. Experienced with HTML, CSS, JavaScript,
                React.js, and Tailwind CSS. I have worked on several personal
                projects and collaborated with teams that honed my skills in web
                development. I always try to improve my skills and open to new
                opportunities in the world of front-end development.
            </p>
        </div>
    );
};

export default About;
