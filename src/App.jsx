import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Skills from "./Components/Skills.jsx";
import Portfolio from "./Components/Portfolio.jsx";
import Contact from "./Components/Contact.jsx";
import { Footer } from "./Components/Footer.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onLoad = () => setIsLoading(false);

    if (document.readyState === "complete") {
      setIsLoading(false);
      return undefined;
    }

    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-4">
        <span className="font-display text-lg font-bold tracking-[0.3em] text-fg">
          RZA
        </span>
        <span className="h-px w-16 overflow-hidden bg-hairline">
          <motion.span
            className="block h-px w-16 bg-accent"
            initial={reduceMotion ? false : { x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
