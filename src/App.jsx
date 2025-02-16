import { useState } from "react";

import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";

function App() {
    return (
        <>
            <Navbar />

            <div className="body grid gap-12">
                <Home />
                <About />
            </div>
        </>
    );
}

export default App;
