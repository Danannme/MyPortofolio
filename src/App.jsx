import { useEffect, useState } from "react";

import Navbar from "./Components/Navbar.jsx"; // navbar section
import Home from "./Components/Home.jsx"; // Home / Hero section
import About from "./Components/About.jsx"; // About Me section
import Skills from "./Components/Skills.jsx"; // Skills sectoin
import Portofolio from "./Components/Portofolio.jsx"; // Project and certificate section
import Contact from "./Components/Contact.jsx"; // Contact / Social media sectoin
import { Footer } from "./Components/Footer.jsx"; // Footer section

import "ldrs/lineWobble"; // libary untuk animasi loading yang saya gunakan untuk membuat loading page

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [openNav, setOpenNav] = useState(false);

    function navIconClicked() {
        setOpenNav(false);
    }

    useEffect(() => {
        if (document.readyState === "complete") {
            setIsLoading(false);
        } else {
            window.addEventListener("load", () => setIsLoading(false));
        }
        return window.removeEventListener("load", () => setIsLoading(false));
    }, []);

    return (
        <>
            {isLoading == true ? ( // menampilkan loading page jika website belum selesai diload
                <div className="grid place-items-center h-screen">
                    <l-line-wobble
                        size="80"
                        stroke="5"
                        bg-opacity="0.1"
                        speed="1.75"
                        color="black"
                    ></l-line-wobble>
                </div>
            ) : (
                <>
                    <Navbar
                        openNav={openNav}
                        setOpenNav={setOpenNav}
                        navIconClicked={navIconClicked}
                    />

                    <div
                        className="body grid gap-12"
                        onClick={openNav == true ? navIconClicked : ""}
                    >
                        <Home />
                        <About />
                        <Skills />
                        <Portofolio />
                        <Contact />
                        <Footer />
                    </div>
                </>
            )}
        </>
    );
}

export default App;
