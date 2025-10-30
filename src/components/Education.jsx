import React from "react";

const educationData = [
  {
    degree: "Bachelor of Science in Information Technology",
    school: "Western Institute of Technology",
    year: "2022 - 2025",
    description:
      "Focused on software development, data structures, and web technologies.",
  },
  {
    degree: "High School Diploma",
    school: "Iloilo National High School",
    year: "2017 - 2022",
    description: "Built a strong foundation in mathematics, logic, and computing concepts.",
  },
];

const Education = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-10">Education</h2>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-blue-950/40 p-8 rounded-xl shadow-2xl border border-blue-800 text-left backdrop-blur-sm transition-transform transform hover:scale-105"
            >
              <h3 className="text-2xl font-bold text-blue-300">{edu.degree}</h3>
              <p className="text-gray-200">{edu.school}</p>
              <p className="text-gray-400 text-sm">{edu.year}</p>
              <p className="text-gray-300 mt-3">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
