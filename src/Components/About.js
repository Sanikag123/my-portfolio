import React from "react"
import { ArrowRightIcon } from "@heroicons/react/solid";
export default function About() {
    return (
        <section id="about">
        <div className="container mx-auto flex px-20 py-40 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-5xl text-5xl mb-4 font-medium text-white">
              Hi, I'm Sanika Gandhe.

              <p className="mt-5 sm:text-3xl text-3xl">Software Engineer </p>
              <br/>
              <p className="title-font sm:text-3xl text-3xl mb-4 font-medium text-gray-400">
              <br className="hidden lg:inline-block " />Tech enthusiast with a knack for innovation, poised to excel and 
              actively seeking dynamic roles in software full-stack, backend, frontend, data, or test engineering.
              </p>
             
            </h1>
            <a href="https://drive.google.com/file/d/1XFs0XF-Az7We-eP_rU1LzexLHAeqky7u/view?usp=sharing" 
             className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0  text-xl">
             
            View full resume
            <div style={{ transform: 'rotate(-45deg)' }}>
                <ArrowRightIcon className="h-5 w-5" />
                </div>
            </a>
            </div>
        <img src="./IMG_5624.png" width="30%" alt="image" className="ml-200"/>
            
          
            {/* <p className="mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
            Laborum, voluptas natus?
          
            </p> */}
        
            </div>
            </section>
    );
}