import React from "react";
import skills from "./Data/skills.json"

export default function Skills() {
    const [isVisibleSkill, setisVisibleSkill] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('Projects');
            if (section) {
                const { top } = section.getBoundingClientRect();
                setisVisibleSkill(top < window.innerHeight / 2);
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

    var c = isVisibleSkill ? 'fade-in' : 'opacity-0'
    return (
       
        <section id="skills" className="container mx-auto flex px-10 py-60 flex-col" >

   
            <h2 className="mb-4 flex title-font sm:text-5xl text-5xl mb-4 font-medium text-green-300">Skills</h2>
            <div class="border-b border-gray-400 w-full"></div>
            {skills.map(skill => (
                <div key={skill.id} className=" w-full  p-4 flex title-font items-center sm:text-xl text-3xl mb-4 font-medium text-gray-400">
                    <div className="w-60 p-4 mr-4  sm:text-2xl text-2xl mb-4">
                        <p>{skill.title}</p>
                    </div>
                    <div class=" flex items-start flex-col fade-in">
                    
                        {/* <ul className=" p-4  mr-20 list-none flex justify-center text-xl "> */}
                        <ul className="mb-2 list-none p-auto flex flex-wrap items-center text-xl text-xl">    
                            {skill.tech.map((skill, index) => (
                                <li className="p-4 bg-gray-700 text-white rounded-xl  mr-4 mb-2 hover:bg-gray-300 hover:text-black" key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
            
        </section>
        
    );
}