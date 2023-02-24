import React from 'react';
import './App.css';
import About from './components/About';
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Socials from "./components/Socials";
function App() {
  return (
      <div className="App">
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

export default App;