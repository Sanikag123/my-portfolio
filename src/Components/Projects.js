import React from "react"
import projectsData from "./Data/projects.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose } from "@fortawesome/free-solid-svg-icons"
import { faExternalLink } from "@fortawesome/free-solid-svg-icons"

export default function Projects() {

    const [isVisibleProject, setisVisibleProject] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('Projects');
            if (section) {
                const { top } = section.getBoundingClientRect();
                setisVisibleProject(top < window.innerHeight / 2);
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

    const [selectedProject, setSelectedProject] = React.useState(null);


    const openPopup = (projectId) => {
        setSelectedProject(projectsData.find(project => project.id === projectId));
    };

    const closePopup = () => {
        setSelectedProject(null);
    };


    var css = isVisibleProject ? 'fade-in' : 'opacity-0'
    console.log("css" + css)
    return (
        <section id="Projects" className={`container mx-auto flex px-10 py-40 flex-col ${isVisibleProject ? 'fade-in' : 'opacity-0'}`}>
            <div>
                <h2 className="mb-4 flex title-font sm:text-5xl text-5xl mb-4 font-medium text-green-300">Projects</h2>
                <div class="border-b border-gray-400 w-full"></div>
                <div className="flex flex-wrap -mx-4">

                    {projectsData.map(project => (
                        <div key={project.id} className=" w-full sm:w-1/2 md:w-1/2 lg:w-1/2 p-4">
                            <div className=" h-full bg-gray-300 shadow-md rounded-lg px-10 py-10 cursor-pointer transition-transform transform hover:text-white hover:-translate-y-5 " >
                            <a href={project.link}>
                                <img
                                    alt="gallery"
                                    className="border-8 border-green-300  absolute inset-0 object-cover h-full w-full object-top hover:opacity-0"
                                    src={project.image}
                                />
                                </a>
                                <div className="h-full w-full bg-white cursor-pointer "  >

                                    <div className="flex flex-col">

                                        <h2 className="text-3xl font-bold mb-2 text-black p-2">{project.title}</h2>
                                        {project.link != null ?  <a href={project.link} className="border border-gray-300 text-xl text-blue-600 mb-2 p-4">Github Link </a> : 'None'}
                                       
                                    </div>
                                    <p className="text-xl text-gray-600 mb-2 p-4">{project.description}</p>
                                    <ul className="mb-2 list-none p-auto flex flex-wrap items-center text-xl text-xl">
                                        {project.technologies.map((skill, index) => (
                                            <li className="bg-gray-700 rounded-full p-2 mr-2 mb-2" key={index}>{skill}</li>
                                        ))}

                                    </ul>
                                    <div>

                                        {/* <a href={project.link} className="border border-gray-300 text-xl text-blue-600 mb-2 p-4">Github Link </a> */}
                                    </div>



                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};