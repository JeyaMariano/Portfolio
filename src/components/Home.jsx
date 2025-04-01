import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="h-screen w-full flex flex-col md:flex-row items-center justify-center text-center md:text-left px-12 md:px-30  text-white "
    style={{
      backgroundImage: "url('https://gifdb.com/images/high/black-background-tuning-tecdf32yo7hfezz8.gif')", // Ensure it's inside `public/`
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}>
      <div className="md:w-1/2 space-y-8">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-6xl font-bold"
        >
          Hey it's <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-red-400 ">JEYA!</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg font-semibold"
        >
          A passionate Frontend Developer who loves to create amazing web experiences.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex space-x-4"
        >
          <button className="px-6 py-3 text-lg font-medium border-2 bg-gradient-to-b from-red-400 to-blue-400 text-black rounded-full transition-all duration-300">Contact Me</button>
          <button className="px-6 py-3 text-lg font-medium border-2 bg-gradient-to-b from-red-400 to-blue-400 text-black rounded-full transition-all duration-300">See Projects</button>
        </motion.div>
      </div>

      {/* Image Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="md:w-1/2 flex justify-center mt-10 md:mt-0 "
      >
        <img src="/jey.svg" alt="Profile" className="w-50 h-50 md:w-97 md:h-103 rounded-full border-4 border--400 shadow-lg" />
      </motion.div>
    </section>
  );
};

export default Hero;
