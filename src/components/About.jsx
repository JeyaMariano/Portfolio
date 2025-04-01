import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section id="about" className="bg-black py-12 px-6 md:px-12 lg:px-24 text-center p-20"
    style={{
      backgroundImage: "url('https://gifdb.com/images/high/black-background-tuning-tecdf32yo7hfezz8.gif')", // Ensure it's inside `public/`
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}>
      <motion.div 
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* About Me Section */}
        <h3 className="text-5xl font-bold text-white mb-4">About Me</h3>
        <p className="text-lg text-white font-bold">
        Hey there! I’m Justine Ann Mariano, a frontend developer who really enjoys transforming complex problems into clean, efficient code.
        My main focus is on React and JavaScript, and I love working in team settings where ideas come to life.
        When I’m not at work, you can usually find me contributing to open-source projects or trying out the latest tech stacks. 
        I also dabble in networking as a side gig; it really helps me expand my knowledge beyond just development and design.
        </p>

        {/* Profile Image */}
        <motion.div 
          className="mt-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="/jey.svg" 
            alt="Your Photo" 
            className="w-40 h-40 rounded-full mx-auto shadow-lg"
          />
        </motion.div>
        

      </motion.div>
    </section>
  );
};

const educationData = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "XYZ University",
    year: "2019 - 2023",
    description: "Focused on software development, data structures, and web technologies.",
  },
  {
    degree: "High School Diploma",
    school: "ABC High School",
    year: "2015 - 2019",
    description: "Excelled in mathematics and computer science-related subjects.",
  },
];

const Education = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Education</h2>
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-left">
              <h3 className="text-xl font-semibold text-indigo-600">{edu.degree}</h3>
              <p className="text-gray-700">{edu.school}</p>
              <p className="text-gray-500 text-sm">{edu.year}</p>
              <p className="text-gray-600 mt-2">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;


