import React from 'react';
import './App.css';
import About from './components/About';
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
function App() {
  return (
      <div className="App">
        <header>
          <Navbar />
        </header>
        <main>
          <About />
          <Projects />
          <Contact />
        </main>
      </div>
  );
}

export default App;