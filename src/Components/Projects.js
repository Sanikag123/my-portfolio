import React from "react"
import projectsData from "./Data/projects.json"

export default function Projects() {

    const [isVisibleProject, setisVisibleProject] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('Experience');
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
        <section id="Projects" className={`container mx-auto flex px-10 py-10 flex-col ${isVisibleProject ? 'fade-in' : 'opacity-0'}`}>
         <div>
        <h2 className="mb-4 flex title-font sm:text-5xl text-5xl mb-4 font-medium text-white">Projects</h2>
            <div className="flex flex-wrap -mx-4">
           
                {projectsData.map(project => (
                    <div key={project.id} className=" w-full sm:w-1/2 md:w-1/2 lg:w-1/2 p-4">
                        <div className="h-96 bg-gray-400 shadow-md rounded-lg px-10 py-10 cursor-pointer transition-transform transform hover:text-white hover:-translate-y-5" onClick={() => openPopup(project.id)} >
                            <h2 className="text-2xl font-bold mb-2 text-black p-2">{project.title}</h2>
                            <p className="text-xl text-gray-600 mb-2 p-4">{project.description}</p>
                            <ul className="mb-2 list-none p-auto flex items-center text-xl text-xl">
                            {project.technologies.map((skill, index) => (
                                <li className="bg-gray-700 rounded-full px-2 py-1 mx-auto" key={index}>{skill}</li>
                            ))}
                        </ul>
                        </div>
                    </div>
                ))}
            </div>
            {selectedProject && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
                    <div className="bg-gray-400 rounded-lg p-8 max-w-lg">
                        <button className="absolute top-0 right-0 p-3" onClick={closePopup}>
                            <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
                        <p className="text-gray-800 mb-4">{selectedProject.description}</p>
                        <p className="text-gray-800">{`Technologies: ${selectedProject.technologies}`}</p>
                    </div>
                </div>
            )}
        </div>
        </section>
    );
};