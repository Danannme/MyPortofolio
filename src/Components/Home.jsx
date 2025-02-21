import TiltedCard from "../Elements/TiltedCard";
import CircularText from "../Elements/CircularText";
import BlurText from "../Elements/BlurText";
import DecryptedText from "../Elements/DecryptedText";

import { Typography, Button } from "@material-tailwind/react";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Home = () => {
    return (
        <div className="home grid gap-16">
            <div className="relative w-fit mx-auto mt-8">
                <TiltedCard
                    imageSrc="/img/IMG-20250125-WA0074.webp"
                    containerHeight="300px"
                    containerWidth="300px"
                    imageHeight="300px"
                    imageWidth="300px"
                    rotateAmplitude={12}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={false}
                    displayOverlayContent={true}
                />
                <div className="absolute top-45">
                    <CircularText
                        text="Front End Developer"
                        onHover="speedUp"
                        spinDuration={20}
                        className=""
                    />
                </div>
            </div>
            <div className="home-sub-text max-w-[600px] w-[80%] mx-auto">
                <Typography variant="h6" className="flex gap-1 items-center">
                    <IoLocationOutline size={20} />
                    Jawa Timur, Indonesia
                </Typography>
                <BlurText
                    text="Hi, I’m Robbi Zaidan Ahmad"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="text-3xl font-bold "
                />
                <DecryptedText
                    text={`Saya seorang Beginner Front End Developer. Coding itu tidak sulit, hanya butuh ketelitian.`}
                    animateOn="view"
                    revealDirection="start"
                    speed={25}
                    maxIterations={10}
                    sequential={true}
                />
                <a href="#about">
                    <Button
                        size="sm"
                        className="flex mt-2 items-center gap-2 cursor-pointer"
                    >
                        Discover More <MdOutlineArrowRightAlt size={20} />
                    </Button>
                </a>
            </div>
        </div>
    );
};

export default Home;
