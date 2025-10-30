import React from "react";

const projects = [
  {
    id: 1,
    title: "mapaWIT",
    description:
      "A navigation web app that helps students navigate the school campus with ease.",
    image: "/mapawit.png", // Replace with your actual image path in public/
    github: "https://github.com/your-project1",
  },
  {
    id: 2,
    title: "Hook Stud",
    description:
      "A mobile-responsive app built for students who want to track their schedule efficiently.",
    image: "/hookstud.png",
    github: "https://github.com/your-project2",
  },
  {
    id: 3,
    title: "AwesomeToDos",
    description:
      "A feedback web app built using the MERN stack for seamless productivity.",
    image: "/awesome.png",
    github: "https://github.com/your-project3",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white py-20 px-10"
    >
      <h2 className="text-5xl font-bold text-center mb-12">Projects</h2>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-blue-800 transform transition duration-300 hover:scale-105 hover:shadow-blue-500/30"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-blue-400">
                {project.title}
              </h3>
              <p className="text-gray-300 mt-3 text-sm">{project.description}</p>
              <div className="mt-5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-400 border border-blue-400 px-4 py-2 rounded-full font-medium hover:bg-blue-500 hover:text-white transition-all"
                >
                  View on GitHub
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
