import React from "react";

const educationData = [
  {
    degree: "Bachelor of Science in Information Technology",
    school: "Western Institue of Technology",
    year: "2022-2025",
    description: "Focused on software development, data structures, and web technologies.",
  },
  {
    degree: "High School Diploma",
    school: "Iloilo National High School",
    year: "2017-2022",
    description: "ok",
  },
];

const Education = () => {
  return (
    <section className="py-12 bg-black">
      <div className="max-w-4xl mx-auto text-center"
      style={{
        backgroundImage: "url('https://gifdb.com/images/high/black-background-tuning-tecdf32yo7hfezz8.gif')", // Ensure it's inside `public/`
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}>
        <h2 className="text-3xl font-bold text-white mb-8">Education</h2>
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-gradient-to-b from-red-300 to-orange-300 p-6 rounded-lg shadow-md text-left">
              <h3 className="text-2xl font-bold text-gray-900">{edu.degree}</h3>
              <p className="text-gray-900">{edu.school}</p>
              <p className="text-gray-900 text-sm">{edu.year}</p>
              <p className="text-gray-900 mt-2">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
