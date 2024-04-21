import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import {faGoogle} from "@fortawesome/free-brands-svg-icons"
import {faInstagram} from "@fortawesome/free-brands-svg-icons"




export default function Social() {
    return (
        <div class=" ml-20 text-4xl  md:flex flex-col justify-center h-screen fixed top-0 left-0 z-10  text-white">
        <div class="border-r-2 border-green-300 h-80 w-7"></div>
     <div>
        <a href="https://www.linkedin.com/in/sanikagandhe28/">
               <FontAwesomeIcon className="p-3 hover:text-blue-800 transition-transform transform hover:-translate-y-3" icon={faLinkedin}></FontAwesomeIcon>
               </a>   
       </div>

       <div>
        <a href="https://www.linkedin.com/in/sanikagandhe28/">
               <FontAwesomeIcon className="p-3 hover:text-gray-800 transition-transform transform hover:-translate-y-3 " icon={faGithub} ></FontAwesomeIcon>
               </a>   
       </div>

       <div>
        <a href="https://www.linkedin.com/in/sanikagandhe28/">
               <FontAwesomeIcon className="p-3 hover:text-blue-800 transition-transform transform hover:-translate-y-3" icon={faGoogle} ></FontAwesomeIcon>
               </a>   
       </div>

       <div>
        <a href="https://www.linkedin.com/in/sanikagandhe28/">
               <FontAwesomeIcon className="p-3 hover:text-pink-800 transition-transform transform hover:-translate-y-3" icon={faInstagram} ></FontAwesomeIcon>
               </a>   
       </div>
      
       <div class="border-r-2 border-green-300 h-80 w-7"></div>
        </div>
    )
}