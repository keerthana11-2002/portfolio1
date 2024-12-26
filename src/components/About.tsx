import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="py-20">
    <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-700 md:mb-4 text-center     ">
            Who I Am
          </h2>
    <section className="py-32 bg-gradient-to-b from-gray-50 to-gray-100" id="about">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20 flex flex-col lg:flex-row items-center lg:items-start">
      
        {/* Animated and Dynamic Image */}
        <motion.div
          className="lg:w-1/2 mb-8 lg:mb-0 relative"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <div className="relative">
            <motion.img
              src="https://miro.medium.com/v2/resize:fit:1280/1*uYkZXXw-QL-N_1gVndPH9A.gif"
              alt="Working Woman"
              className="rounded-lg shadow-lg lg:w-8/12 md:-mt-5 md:ml-32"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            />
            {/* Glow Effect on Laptop */}
            <div className="absolute bottom-0 left-0 w-full h-1/3  rounded-b-lg animate-pulse"></div>
          </div>
        </motion.div>
        
        {/* About Section */}
        <motion.div
          className="lg:w-1/2 lg:pl-12 text-center lg:text-left -ml-20"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-4 ml-20 md:ml-2 md:mt-20">
            My name is <span className="font-bold text-blue-700">Keerthana J K</span>. 
            I'm a <span className="text-primary font-semibold">Frontend Developer </span> 
            based in <span className="font-semibold text-gray-800">Bangalore</span>.
          </p>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed ml-16 md:ml-2">
            I am a professional and passionate programmer with a quick learning and 
            self-driven attitude. I enjoy exploring new technologies and bringing ideas 
            to life through clean and efficient code. My current expertise includes: <span className="text-blue-700 font-medium">  
            
            HTML, CSS, JavaScript, React.js, Bootstrap, Tailwind CSS, MySQL, and Git. </span> 
            I love creating innovative solutions that make a difference.
          </p>
        </motion.div>
      </div>
    </section>
    </div>
  );
}
