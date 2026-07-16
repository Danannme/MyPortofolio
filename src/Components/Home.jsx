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
    <div className="w-full relative overflow-hidden my-4">
      {/* Background watermark text */}
      <div className="absolute right-10 top-10 font-serif text-[15rem] font-black text-black/[0.015] select-none pointer-events-none leading-none">
        RZA
      </div>
      <div
        className={`home w-[95%] max-w-[1200px] mx-auto grid gap-16 lg:flex flex-row-reverse items-center relative z-1 ${
          mobileScreen ? "" : "mx-18"
        }`}
      >
        <div className="relative w-fit mx-auto mt-8 p-4 decorative-frame page-turn-hover">
          <div className="absolute inset-2 border border-dashed border-gold/40 pointer-events-none"></div>
          <TiltedCard
            imageSrc="/img/IMG-20250125-WA0074.webp"
            containerHeight={mobileScreen ? "300px" : "440px"}
            containerWidth={mobileScreen ? "300px" : "440px"}
            imageHeight={mobileScreen ? "300px" : "440px"}
            imageWidth={mobileScreen ? "300px" : "440px"}
            rotateAmplitude={8}
            scaleOnHover={1.02}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={true}
          />
          <div
            className={`absolute z-10 ${mobileScreen ? "top-45 right-2" : "top-75 -right-6"} bg-white/90 backdrop-blur-sm p-2 rounded-full border border-black/10`}
          >
            <CircularText
              text="Front End Developer  "
              onHover="speedUp"
              spinDuration={20}
              className="font-sans text-xs tracking-widest uppercase font-bold"
            />
          </div>
        </div>
        <div className="home-sub-text max-w-[600px] w-[85%] mx-auto lg:mx-0 flex flex-col justify-center">
          <Typography
            variant="h6"
            className="flex gap-1 items-center font-serif text-sm italic text-winered tracking-wider mb-2"
          >
            <IoLocationOutline size={18} className="text-winered" />
            Jawa Timur, Indonesia
          </Typography>
          <div className="mb-4">
            <BlurText
              text="Hi, I’m Robbi Zaidan Ahmad"
              delay={100}
              animateBy="words"
              direction="top"
              className="text-4xl lg:text-6xl font-serif font-black text-black leading-none"
            />
          </div>
          <div className="editorial-lead font-sans text-base lg:text-lg text-darkgrey leading-relaxed mb-6 border-l-4 border-winered pl-4 py-1 italic bg-beige/10">
            {/* <DecryptedText */}
            {/*   text={``} */}
            {/*   animateOn="view" */}
            {/*   revealDirection="start" */}
            {/*   speed={25} */}
            {/*   maxIterations={10} */}
            {/*   sequential={true} */}
            {/* /> */}I am a Beginner Front End Developer. Coding is not
            difficult, it just requires precision.
          </div>
          <a href="#about" className="w-fit">
            <Button
              size="sm"
              className="flex items-center gap-2 cursor-pointer bg-winered hover:bg-black text-white hover:text-gold border border-transparent hover:border-gold px-6 py-3 rounded-none tracking-widest text-xs font-bold transition-all duration-500 uppercase shadow-none hover:shadow-lg"
            >
              Discover More <MdOutlineArrowRightAlt size={20} />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
