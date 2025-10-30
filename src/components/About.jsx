import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="bg-black py-20 px-6 md:px-12 lg:px-24 text-center text-white"
    >
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* About Me Section */}
        <h3 className="text-5xl font-bold mb-6">About Me</h3>
        <p className="text-lg md:text-xl font-medium leading-relaxed text-gray-200">
          Hey there! I’m{" "}
          <span className="text-blue-400 font-semibold">
            Justine Ann Mariano
          </span>
          , a frontend developer who enjoys transforming complex problems into
          clean, efficient code. My main focus is on React and JavaScript, and I
          love collaborating with teams where creative ideas come to life. When
          I’m not coding, you’ll find me exploring open-source projects, testing
          new tech stacks, or dabbling in networking to broaden my technical
          horizons.
        </p>

        {/* Profile Image */}
        <motion.div
          className="mt-10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/jyn.jpeg"
            alt="Justine Ann Mariano"
            className="w-40 h-40 md:w-48 md:h-48 rounded-xl mx-auto shadow-lg border-4 border-blue-400 object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

// Education Data
const educationData = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "XYZ University",
    year: "2019 - 2023",
    description:
      "Focused on software development, data structures, and web technologies.",
  },
  {
    degree: "High School Diploma",
    school: "ABC High School",
    year: "2015 - 2019",
    description:
      "Excelled in mathematics and computer science-related subjects.",
  },
];

export const Education = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">Education</h2>
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 md:p-8 rounded-lg shadow-lg text-left hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-blue-700">
                {edu.degree}
              </h3>
              <p className="text-gray-800">{edu.school}</p>
              <p className="text-gray-500 text-sm">{edu.year}</p>
              <p className="text-gray-600 mt-3">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
