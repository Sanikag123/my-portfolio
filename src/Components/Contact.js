import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
    return (
        <section id="contact" className="container mx-auto flex flex-col items-center px-10 py-40 flex-col fade-in">
            <FontAwesomeIcon icon={faPaperPlane} className="p-4 text-green-300 p-2 text-5xl"></FontAwesomeIcon>
           
            <h2 className="mb-4 flex justify-center title-font sm:text-5xl text-5xl mb-4 font-medium text-green-300">GET IN TOUCH</h2>
            <div class="border-b border-gray-400 w-full"></div>
            <p className="m-5 p-4 w-3/4 flex justify-center text-center  sm:text-3xl text-3xl text-gray-300"> If you have an open position in your team or if you are hiring for a 
                entry or mid-level software engineer, feel free to reach out.
                <br/>
                <br/>
                I am available for an interview right away and ready to contribute from day one!
                </p>
            <button className="m-5 p-4 w-30   bg-green-500 transition-transform transform hover:text-white hover:-translate-y-5">
                <FontAwesomeIcon icon={faEnvelope} className="text-2xl"></FontAwesomeIcon>
                <a href="mailto:sgandhe1@asu.edu" className="p-2 text-2xl text-white">Send an Email</a>
            </button>

            <button className="m-5 p-4 w-30 bg-green-500 transition-transform transform hover:text-white hover:-translate-y-5">
            <FontAwesomeIcon icon={faLinkedinIn} className="text-2xl"></FontAwesomeIcon>
            <a href="https://www.linkedin.com/in/sanikagandhe28" className="p-2 text-2xl text-white" target="_blank">Send a message on LinkedIn</a>

            </button>
        </section>
    );
}