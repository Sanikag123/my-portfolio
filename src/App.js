import React from "react";
import Navbar from "./Components/Navbar.js"
import About from "./Components/About"
import Projects from "./Components/Projects"
import Skills from "./Components/Skills"
import Contact from "./Components/Contact"
import Experience from "./Components/Experience.js"
import Social from "./Components/Social.js"
import CreatedBy from "./Components/CreatedBy.js"




export default function App() {
  return (
    <div className="flex flex-wrap">
      <div className="sm:w-1/12  bg-gray-900">
       
       <Social/>
      </div>
    
    <main className=" w-full text-white bg-gray-900 body-font ">
      
      <Navbar />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <CreatedBy />

    </main>
    </div>
  );
}
