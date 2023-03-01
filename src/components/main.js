import React from 'react';
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Socials from "./Socials";
import Navbar from "./Navbar";

function Main() {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main>
                <About />
                <Projects />
                <Skills />
                <Contact />
                <Socials />
            </main>

        </div>
    );
}
export default Main;