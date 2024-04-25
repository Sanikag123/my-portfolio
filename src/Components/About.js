import React from "react"
import { ArrowRightIcon } from "@heroicons/react/solid";
export default function About() {
    return (
        <section id="about">
        <div className="container mx-auto flex px-20 py-40 md:flex-row flex-col items-center">
            
          <div className="lg:flex-grow md:w-3/4 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-2xl text-2xl mb-4 font-medium text-gray-400">
              Hi, I'm 
              <br/>
              <p className="sm:text-6xl text-6xl text-green-300">
              Sanika Gandhe.
              </p>
              <p className="text-white mt-5 sm:text-2xl text-xl">Software Engineer | MS in Software Engineering | BTech in Computer Engineering </p>
              <br/>
              <p className="title-font sm:text-xl text-xl mb-4 font-medium text-gray-400 text-justify">
              <br className="hidden lg:inline-block " />
              I am driven by an insatiable hunger to explore every facet of Software Development, 
              constantly seeking new challenges and opportunities to expand my knowledge. 
              As a dedicated Tech enthusiast, I thrive on innovation and am fueled by the endless possibilities of 
              technology.
              <br/>
              <br/>
            Whether it's tackling the complexities of full-stack development, 
              crafting seamless frontend experiences, architecting robust backend systems, mining insights from data,
              or ensuring the quality of software through rigorous testing, 
              I am actively seeking dynamic roles in software, spanning full-stack, backend, frontend, data, 
              and test engineering.
              <br/>
              <br/>
              Let's excel together, one line of code at a time!
              </p>
             
            </h1>
            <a href="https://drive.google.com/file/d/1XFs0XF-Az7We-eP_rU1LzexLHAeqky7u/view?usp=sharing" 
             className="inline-flex items-center bg-gray-700 border-0 py-2 px-3 focus:outline-none hover:bg-gray-600 rounded text-base mt-4 md:mt-0  text-xl">
             
            View full resume
            <div style={{ transform: 'rotate(-45deg)' }}>
                <ArrowRightIcon className="h-5 w-5" />
                </div>
            </a>
            </div>
        <img src="./IMG_5624.png"  alt="image" className="md:w-90 md:h-90 sm:w-2/5 xs:w-20 xs:h-20 ml-200"/>
            
    
        
            </div>
            </section>
    );
}