import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const skills = [
  { name: 'HTML', icon: '/html.png' },
  { name: 'CSS', icon: '/css.png' },
  { name: 'JavaScript', icon: '/javascript.png' },
  { name: 'ReactJS', icon: '/react.png' },
  { name: 'Tailwind CSS', icon: '/tailwind.png' },
  { name: 'Bootstrap', icon: '/bootstrap.png' },
  { name: 'SASS', icon: 'https://static-00.iconduck.com/assets.00/sass-icon-2048x2048-js3fulee.png' },
  { name: 'Material UI', icon: '/material.png' },
  { name: 'SQL', icon: '/sql.png' },
  { name: 'Git', icon: '/git.png' }
]; 
const cardVariants = {
  hidden: { opacity: 0, x: 50 }, // Start hidden and to the right
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2, // Stagger animation
      duration: 0.5,
      type: "spring",
      stiffness: 80,
    },
  }),
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: { duration: 0.3, type: "spring", stiffness: 200 },
  },
  moving: {
    y: [0, -10, 0], // Up and down movement
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    },
  },
};

const Skills = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true); // Trigger animation when the component mounts
    return () => {
      setIsAnimating(false); // Reset animation when the component unmounts
    };
  }, []);

  return (
    <div id="skills" className="py-24">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">Skills</h2>
      <motion.div
        className="skills-carousel"
        initial="hidden"
        animate={isAnimating ? "visible" : "hidden"} // Reset animation on mount
        exit="hidden"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="skills-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 px-6"
          initial="hidden"
          animate={isAnimating ? "visible" : "hidden"} // Only animate when the page is visited
        >
          {skills.map((item, index) => (
            <motion.div
              key={item.name}
              className="skill-card flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              variants={cardVariants}
              custom={index}
              whileHover="hover" // Apply hover animation
              animate="moving" // Apply moving animation
            >
              <img
                src={item.icon}
                alt={item.name}
                className="w-16 h-16 object-contain mb-4 rounded-full transition-all duration-300"
              />
              <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
