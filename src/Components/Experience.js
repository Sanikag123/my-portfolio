import React, { useState, useEffect } from "react";
import experienceData from './Data/experience.json';
import { ArrowRightIcon } from "@heroicons/react/solid";

export default function Experience() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('Experience');
            if (section) {
                const { top } = section.getBoundingClientRect();
                setIsVisible(top < window.innerHeight / 2);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial visibility
        scrollToTop(); // Scroll to top when the component mounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <section id="Experience" className={`container mx-auto flex px-10 py-40 flex-col ${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <h2 className="mb-4 flex title-font sm:text-5xl text-5xl mb-4 font-medium text-green-300">Experience</h2>
            <div class="border-b border-gray-400 w-full"></div>
            {experienceData.map(experience => (
                <div key={experience.id} className="py-10 mb-4 flex title-font sm:text-xl text-3xl mb-4 font-medium text-gray-400 hover:bg-gray-800">
                    <div className="w-1/4 sm:text-xl text-xl mb-4">
                        <p>{experience.duration}</p>
                    </div>
                    <div className="w-3/4 mr-5 px-20 flex items-start flex-col">
                        <div className="sm:text-3xl text-2xl flex items-center">
                            <p className=" text-white">{experience.title},  {experience.company}</p>
                            <div className="px-2 rotate-arrow">
                                <ArrowRightIcon className="h-5 w-5" />
                            </div>
                        </div>
                        {/* <p className="text-xl text-xl">{experience.description}</p> */}

                        <ul className="list-disc list-outside pt-4 flex flex-col text-justify text-xl text-xl">
                            {experience.description.map((des, index) => (
                                <li className="p-2" key={index}>{des}</li>
                            ))}
                        </ul>

                        <ul className="list-none pt-4 flex text-xl text-xl">
                            {experience.skills.map((skill, index) => (
                                <li className="bg-gray-700 rounded-full px-3 py-1 mr-2 mb-2" key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </section>
    );
}
