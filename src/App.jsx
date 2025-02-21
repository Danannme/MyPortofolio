import { useEffect, useState } from "react";

import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Skills from "./Components/Skills.jsx";
import Portofolio from "./Components/Portofolio.jsx";
import Contact from "./Components/Contact.jsx";
import { Footer } from "./Components/Footer.jsx";
import "ldrs/lineWobble";

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
            {isLoading == true ? (
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
