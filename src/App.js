import React from "react";
import Navbar from "./Components/Navbar.js"
import About from "./Components/About"
import Projects from "./Components/Projects"
import Skills from "./Components/Skills"
import Contact from "./Components/Contact"
import Experience from "./Components/Experience.js";


export default function App() {
  return (
    <main className="text-white bg-gray-900 body-font">
      <Navbar />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />

    </main>
  );
}
