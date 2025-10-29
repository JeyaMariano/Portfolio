import React from "react";

const skills = [
  "HTML",
  "NODE.JS",
  "TAILWIND",
  "CSS",
  "UI/UX",
  "REACT.JS",
  "JAVASCRIPT",
];

const Explore = () => {
  return (
    <section
      id="explore"
      className="min-h-screen bg-[#0a0b18] text-white flex flex-col items-center justify-center px-6 py-20"
    >
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-[0.3em] mb-12">
        Explore Skills
      </h2>

      {/* Skills Container */}
      <div className="flex flex-wrap gap-6 justify-center max-w-3xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#056680] text-white font-semibold px-8 py-3 rounded-full text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 cursor-pointer"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Explore;
