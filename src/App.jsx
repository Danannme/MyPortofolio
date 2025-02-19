import { useEffect, useState } from "react";

import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Skills from "./Components/Skills.jsx";
import Portofolio from "./Components/Portofolio.jsx";

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        window.addEventListener("load", () => setIsLoading(false));
        return window.removeEventListener("load", () => setIsLoading(false));
    }, []);

    return (
        <>
            {isLoading == true ? (
                <h1>ini loading page</h1>
            ) : (
                <>
                    <Navbar />

                    <div className="body grid gap-12">
                        <Home />
                        <About />
                        <Skills />
                        <Portofolio />
                    </div>
                </>
            )}
        </>
    );
}

export default App;
