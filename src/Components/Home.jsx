// 4 import di bawah ini saya gunakan agar terdapat animasi dan interaksi kecil untuk clietn, dan library ini saya dapatkan dari website reactbitz
import TiltedCard from "../Elements/TiltedCard"; // agar gambar utama dapat bergerak menyesuaian mouse
import CircularText from "../Elements/CircularText"; // teks yang dapat berputar untuk hiasan di gambar utama
import BlurText from "../Elements/BlurText"; // untu teks nama saya yang akan ngeblur saat awal loasd
import DecryptedText from "../Elements/DecryptedText"; // description singkat saya yang akan muncul dengan animasi karakter yang berubah-ubah

import { Typography, Button } from "@material-tailwind/react";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { useEffect, useState } from "react";

const Home = () => {
    const [mobileScreen, setMobileScreen] = useState(window.innerWidth < 960);

    useEffect(() => {
        const handleResize = () => {
            setMobileScreen(window.innerWidth < 960);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div
            className={`home w-[95%] max-w-[1200px] mx-auto grid gap-16 lg:flex flex-row-reverse items-center ${
                mobileScreen ? "" : "mx-18"
            }`}
        >
            <div className="relative w-fit mx-auto mt-8">
                <TiltedCard
                    imageSrc="/img/IMG-20250125-WA0074.webp"
                    containerHeight={mobileScreen ? "300px" : "460px"}
                    containerWidth={mobileScreen ? "300px" : "460px"}
                    imageHeight={mobileScreen ? "300px" : "460px"}
                    imageWidth={mobileScreen ? "300px" : "460px"}
                    rotateAmplitude={12}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={false}
                    displayOverlayContent={true}
                />
                <div
                    className={`absolute ${mobileScreen ? "top-45" : "top-75"}`}
                >
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
