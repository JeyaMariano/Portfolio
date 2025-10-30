import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen w-full flex flex-col md:flex-row items-center justify-center text-center md:text-left px-12 md:px-24 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white"
    >
      {/* Text Section */}
      <div className="md:w-1/2 space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-bold"
        >
          Hey, it's{" "}
          <span className=" bg-clip-text bg-color: to-blue-300">
            JEYA!
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg md:text-xl font-medium text-gray-300"
        >
          A passionate Frontend Developer who loves to create amazing web
          experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center md:justify-start space-x-4"
        >
          <button className="px-6 py-3 text-lg font-medium bg-gradient-to-r from-blue-400 to-red-400 text-black rounded-lg shadow-md hover:opacity-90 transition-all duration-300">
            Contact Me
          </button>
          <button className="px-6 py-3 text-lg font-medium border-2 border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-300">
            See Projects
          </button>
        </motion.div>
      </div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="md:w-1/2 flex justify-center mt-10 md:mt-0"
      >
        <img
          src="jaja.jpeg"
          alt="Profile"
          className="w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-blue-400 shadow-xl rounded-lg"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
