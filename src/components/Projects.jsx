import React from "react";

const projects = [
  {
    id: 1,
    title: "mapaWIT",
    description: "A navigation web-app that hepls student navigate the school campus with ease.",
    image: "/mapawit.png", // Change this to your actual image path
    github: "https://github.com/your-project1",
    
  },
  {
    id: 2,
    title: "Hook Stud",
    description: "Mobile-responsive app that is built for students who want to track their schedule",
    image: "/hookstud.png",
    github: "https://github.com/your-project2",

  },
  {
    id: 3,
    title: "AwesomeToDos",
    description: "A feedback web app built using MERN stack                                      .",
    image: "/awesome.png",
    github: "https://github.com/your-project3",
    
  },
];

const Projects = () => {
  return (
    <section id="projects" 
    className="min-h-screen bg-black text-white p-20"
    style={{
      backgroundImage: "url('https://gifdb.com/images/high/black-background-tuning-tecdf32yo7hfezz8.gif')", // Ensure it's inside `public/`
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}>
      <h2 className="text-5xl font-bold text-center mb-12">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-gradient-to-b from-red-300 to-orange-300 rounded-lg overflow-hidden shadow-lg text-gray-900 text-xl text-bold">
            <img src={project.image} alt={project.title} className="w-full h-50 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-900 mt-2">{project.description}</p>
              <div className="mt-4 flex space-x-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:underline text-center">
                  GITHUB
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
