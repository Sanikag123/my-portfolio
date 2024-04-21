import React from "react"
import { ArrowRightIcon } from "@heroicons/react/solid";
export default function Navbar() {
    return (
       
        <header className="bg-gray-800 md:sticky top-0 z-10">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="title-font font-medium text-white mb-4 md:mb-0">
              <a href="#about" className="ml-3 text-xl py-1 px-3 focus:outline-non hover:bg-gray-700 rounded">
                About Me
              </a>
            </a>
            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
              <a href="#Experience" className="ml-10 text-xl py-1 px-3 focus:outline-non hover:bg-gray-700 rounded">
                Experience
              </a>
              <a href="#Projects" className="ml-10 text-xl py-1 px-3 focus:outline-non hover:bg-gray-700 rounded">
                Projects
              </a>
              <a href="#skills" className="ml-10 text-xl  py-1 px-3 focus:outline-non hover:bg-gray-700 rounded  ">
                Skills
              </a>
            </nav>
            <a
              href="#contact"
              className="inline-flex items-center bg-gray-700 border-0 py-1 px-3 focus:outline-none hover:bg-gray-500 rounded text-base mt-4 md:mt-0  text-3xl">
               Hire Me
              <ArrowRightIcon className="w-4 h-4 ml-1" />
            </a>
          </div>
        </header>
      );
}