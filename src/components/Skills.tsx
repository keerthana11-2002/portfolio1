 
// import {  Database, Layout, Terminal } from 'lucide-react';
// import { motion } from 'framer-motion';

// const skillsData = [
//   {
//     category: 'Frontend',
//     skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap'],
//     icon: <Layout className="w-6 h-6" />
//   },
//   {
//     category: 'Backend',
//     skills: ['SQL'],
//     icon: <Database className="w-6 h-6" />
//   },
//   {
//     category: 'Tools & Others',
//     skills: ['Git'],
//     icon: <Terminal className="w-6 h-6" />
//   }
// ];

// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2
//     }
//   }
// };

// const item = {
//   hidden: { opacity: 0, y: 20 },
//   show: { opacity: 1, y: 0 }
// };

// export default function Skills() {
//   return (
//     <section className="py-20 bg-white" id="skills">
//       <div className="container mx-auto px-4">
//         <motion.h2 
//           className="text-4xl font-bold text-center mb-16 text-gray-800"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           Skills & Expertise
//         </motion.h2>
//         <motion.div 
//           className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//         >
//           {skillsData.map((category, index) => (
//             <motion.div
//               key={index}
//               className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition"
//               variants={item}
//               whileHover={{ scale: 1.02 }}
//             >
//               <div className="text-blue-500 mb-4 flex items-center gap-2">
//                 {category.icon}
//                 <h3 className="text-xl font-bold text-gray-800">{category.category}</h3>
//               </div>
//               <div className="flex flex-wrap gap-2">
//                 {category.skills.map((skill, skillIndex) => (
//                   <motion.span
//                     key={skillIndex}
//                     className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
//                     whileHover={{ scale: 1.05 }}
//                   >
//                     {skill}
//                   </motion.span>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }
 
// import { motion } from "framer-motion"
// const SkillsSection = () => {
//   const skills = [
//     { name: 'HTML', icon: 'public/html.png' },
//     { name: 'CSS', icon: 'public/css.png ' },
//     { name: 'JavaScript', icon: 'public/javascript.png' },
//     { name: 'ReactJS', icon: 'public/react.png' },
//     { name: 'Tailwind CSS', icon: 'public/tailwind.png' },
//     { name: 'Bootstrap', icon: 'public/bootstrap.png' },
//     { name: 'SASS', icon: 'https://static-00.iconduck.com/assets.00/sass-icon-2048x2048-js3fulee.png' },
//     { name: 'Material UI', icon: 'public/material.png' },
//     { name: 'SQL', icon: 'public/sql.png' },
//     { name: 'Git', icon: 'public/git.png' }
//   ];

//   return (
//     <div className="flex flex-col md:flex-row justify-center items-center py-12 px-6 rounded-lg shadow-lg">
//       {/* Skills List */}
//       <div className="w-full md:w-1/2 space-y-6">
//         <h2 className="text-4xl font-bold text-blue-700  text-center mb-20">My Skills</h2>
//         <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {skills.map((skill, index) => (
//             <motion.li
//               key={index}
//               className="flex flex-col items-center text-lg text-blue-700 transition-all duration-300 transform hover:scale-110 hover:rotate-3 cursor-pointer"
//               initial={{ opacity: 0, y: 50 }} // Initial state for animation
//               animate={{ opacity: 1, y: 0 }} // Final state for animation
//               transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation
//             >
//               <motion.img
//                 src={skill.icon}
//                 alt={skill.name}
//                 className="w-16 h-16 mb-4 rounded-full shadow-md transform transition-all duration-300"
//                 initial={{ scale: 0.8 }}
//                 animate={{ scale: 1 }}
//                 whileHover={{ scale: 1.2 }} // Hover effect for images
//               />
//               <span className="font-medium">{skill.name}</span>
//             </motion.li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default SkillsSection;
// import { motion } from 'framer-motion';

// // import { motion } from 'framer-motion';

// const SkillsSection = () => {
//   const skills = [
//     { name: 'HTML', icon: '/html.png' },
//     { name: 'CSS', icon: '/css.png' },
//     { name: 'JavaScript', icon: '/javascript.png' },
//     { name: 'ReactJS', icon: '/react.png' },
//     { name: 'Tailwind CSS', icon: '/tailwind.png' },
//     { name: 'Bootstrap', icon: '/bootstrap.png' },
//     { name: 'SASS', icon: 'https://static-00.iconduck.com/assets.00/sass-icon-2048x2048-js3fulee.png' },
//     { name: 'Material UI', icon: '/material.png' },
//     { name: 'SQL', icon: '/sql.png' },
//     { name: 'Git', icon: '/git.png' }
//   ];

//   return (
//     <div className="flex flex-col md:flex-row justify-center items-center py-12 px-6 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg shadow-lg">
//       {/* Skills List */}
//       <div className="w-full md:w-1/2 space-y-6">
//         <h2 className="text-4xl font-bold text-white text-center mb-20">My Skills</h2>
        
//         {/* Scrollable and Animated Skills */}
//         <motion.div
//           className="flex overflow-hidden"
//           animate={{ x: ['0%', '-100%'] }} // Moves the icons horizontally
//           transition={{
//             x: {
//               repeat: Infinity, // Infinite looping
//               repeatType: 'loop', // Loops back and forth
//               duration: 15, // Time for one full cycle (adjust speed)
//               ease: 'linear' // Smooth, continuous movement
//             }
//           }}
//         >
//           {/* Skills List for Scrolling */}
//           <div className="flex"> {/* Wrapper for skills to ensure they all appear in a single line */}
//             {skills.map((skill, index) => (
//               <motion.div
//                 key={index}
//                 className="flex flex-col items-center text-lg text-white mx-4"
//                 initial={{ opacity: 0, y: 50 }} // Fade in effect
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{
//                   duration: 0.5,
//                   delay: index * 0.1
//                 }} // Staggered animation
//               >
//                 <motion.img
//                   src={skill.icon}
//                   alt={skill.name}
//                   className="w-16 h-16 mb-4 rounded-full shadow-md"
//                   initial={{ scale: 0.8 }}
//                   animate={{ scale: 1 }}
//                   transition={{ duration: 0.5 }}
//                   whileHover={{ scale: 1.2 }} // Hover zoom effect on images
//                 />
//                 <span className="font-medium">{skill.name}</span>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default SkillsSection;
// import { motion } from 'framer-motion';

// const SkillsSection = () => {
//   const skills = [
//     { name: 'HTML', icon: '/html.png' },
//     { name: 'CSS', icon: '/css.png' },
//     { name: 'JavaScript', icon: '/javascript.png' },
//     { name: 'ReactJS', icon: '/react.png' },
//     { name: 'Tailwind CSS', icon: '/tailwind.png' },
//     { name: 'Bootstrap', icon: '/bootstrap.png' },
//     { name: 'SASS', icon: 'https://static-00.iconduck.com/assets.00/sass-icon-2048x2048-js3fulee.png' },
//     { name: 'Material UI', icon: '/material.png' },
//     { name: 'SQL', icon: '/sql.png' },
//     { name: 'Git', icon: '/git.png' }
//   ];

//   return (
//     <div className="flex flex-col md:flex-row justify-center items-center py-12 px-6 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg shadow-lg">
//       {/* Skills List */}
//       <div className="w-full md:w-full space-y-6">
//         <h2 className="text-4xl font-bold text-white text-center mb-20">My Skills</h2>
        
//         {/* Scrollable and Animated Skills */}
//         <motion.div
//           className="flex overflow-hidden"
//           animate={{ x: ['0%', '-100%'] }} // Moves the icons horizontally
//           transition={{
//             x: {
//               repeat: Infinity, // Infinite looping
//               repeatType: 'loop', // Loops back and forth
//               duration: 2, // Time for one full cycle (adjust to ensure smooth scroll)
//               ease: 'linear' // Smooth, continuous movement
//             }
//           }}
//         >
//           {/* Skills List for Scrolling */}
//           <div className="flex"> {/* Wrapper for skills to ensure they all appear in a single line */}
//             {skills.map((skill, index) => (
//               <motion.div
//                 key={index}
//                 className="flex flex-col items-center text-lg text-white mx-8"
//                 initial={{ opacity: 0, y: 50 }} // Fade in effect
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{
//                   duration: 0.5,
//                   delay: index * 0.1
//                 }} // Staggered animation
//               >
//                 <motion.img
//                   src={skill.icon}
//                   alt={skill.name}
//                   className="w-16 h-16 mb-4 rounded-full shadow-md"
//                   initial={{ scale: 0.8 }}
//                   animate={{ scale: 1 }}
//                   transition={{ duration: 0.2 }}
//                   whileHover={{ scale: 1.2 }} // Hover zoom effect on images
//                 />
//                 <span className="font-medium">{skill.name}</span>
//               </motion.div>
//             ))}
//           </div>
//           {/* Repeat the skills to create a continuous scroll */}
//           <div className="flex"> {/* Wrapper for the second set of skills to create continuous scroll effect */}
//             {skills.map((skill, index) => (
//               <motion.div
//                 key={index + 100} // Unique key to avoid duplication in React
//                 className="flex flex-col items-center text-lg text-white mx-96"
//                 initial={{ opacity: 0, y: 50 }} // Fade in effect
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{
//                   duration: 0.5,
//                   delay: index * 0.1
//                 }} // Staggered animation
//               >
//                 <motion.img
//                   src={skill.icon}
//                   alt={skill.name}
//                   className="w-16 h-16 mb-4 rounded-full shadow-md"
//                   initial={{ scale: 0.8 }}
//                   animate={{ scale: 1 }}
//                   transition={{ duration: 0.5 }}
//                   whileHover={{ scale: 1.2 }} // Hover zoom effect on images
//                 />
//                 <span className="font-medium">{skill.name}</span>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// // export default SkillsSection;
// import { motion } from 'framer-motion';

// const SkillsSection = () => {
//   const skills = [
//     { name: 'HTML', icon: '/html.png' },
//     { name: 'CSS', icon: '/css.png' },
//     { name: 'JavaScript', icon: '/javascript.png' },
//     { name: 'ReactJS', icon: '/react.png' },
//     { name: 'Tailwind CSS', icon: '/tailwind.png' },
//     { name: 'Bootstrap', icon: '/bootstrap.png' },
//     { name: 'SASS', icon: 'https://static-00.iconduck.com/assets.00/sass-icon-2048x2048-js3fulee.png' },
//     { name: 'Material UI', icon: '/material.png' },
//     { name: 'SQL', icon: '/sql.png' },
//     { name: 'Git', icon: '/git.png' }
//   ];

//   // Width calculation for the container based on the number of skills
//   const containerWidth = skills.length * 150; // Assuming each skill takes 150px width including margin

//   return (
//     <div className="flex flex-col md:flex-row justify-center items-center py-12 px-6 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg shadow-lg">
//       {/* Skills List */}
//       <div className="w-full md:w- space-y-6">
//         <h2 className="text-4xl font-bold text-white text-center mb-20">My Skills</h2>
        
//         {/* Scrollable and Animated Skills */}
//         <motion.div
//           className="flex overflow-hidden"
//           animate={{ x: ['0%', `-${containerWidth}px`] }} // Moves the icons horizontally
//           transition={{
//             x: {
//               repeat: Infinity, // Infinite looping
//               repeatType: 'loop', // Loops back and forth
//               duration: 20, // Time for one full cycle (adjust to ensure smooth scroll)
//               ease: 'linear' // Smooth, continuous movement
//             }
//           }}
//         >
//           {/* Skills List for Scrolling */}
//           <div className="flex"> {/* Wrapper for skills to ensure they all appear in a single line */}
//             {skills.map((skill, index) => (
//               <motion.div
//                 key={index}
//                 className="flex flex-col items-center text-lg text-white mx-8"
//                 initial={{ opacity: 0, y: 50 }} // Fade in effect
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{
//                   duration: 0.5,
//                   delay: index * 0.1
//                 }} // Staggered animation
//               >
//                 <motion.img
//                   src={skill.icon}
//                   alt={skill.name}
//                   className="w-16 h-16 mb-4 rounded-full shadow-md"
//                   initial={{ scale: 0.8 }}
//                   animate={{ scale: 1 }}
//                   transition={{ duration: 0.5 }}
//                   whileHover={{ scale: 1.2 }} // Hover zoom effect on images
//                 />
//                 <span className="font-medium">{skill.name}</span>
//               </motion.div>
//             ))}
//           </div>
//           {/* Repeat the skills to create a continuous scroll */}
//           <div className="flex"> {/* Wrapper for the second set of skills to create continuous scroll effect */}
//             {skills.map((skill, index) => (
//               <motion.div
//                 key={index + 100} // Unique key to avoid duplication in React
//                 className="flex flex-col items-center text-lg text-white mx-8"
//                 initial={{ opacity: 0, y: 50 }} // Fade in effect
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{
//                   duration: 0.5,
//                   delay: index * 0.1
//                 }} // Staggered animation
//               >
//                 <motion.img
//                   src={skill.icon}
//                   alt={skill.name}
//                   className="w-16 h-16 mb-4 rounded-full shadow-md"
//                   initial={{ scale: 0.8 }}
//                   animate={{ scale: 1 }}
//                   transition={{ duration: 0.5 }}
//                   whileHover={{ scale: 1.2 }} // Hover zoom effect on images
//                 />
//                 <span className="font-medium">{skill.name}</span>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default SkillsSection;





 
// import  { useEffect, useState } from "react";
// import "./Skills.scss";
// import { motion } from "framer-motion";
// const skills = [
//   { name: 'HTML', icon: '/html.png' },
//   { name: 'CSS', icon: '/css.png' },
//   { name: 'JavaScript', icon: '/javascript.png' },
//   { name: 'ReactJS', icon: '/react.png' },
//   { name: 'Tailwind CSS', icon: '/tailwind.png' },
//   { name: 'Bootstrap', icon: '/bootstrap.png' },
//   { name: 'SASS', icon: 'https://static-00.iconduck.com/assets.00/sass-icon-2048x2048-js3fulee.png' },
//   { name: 'Material UI', icon: '/material.png' },
//   { name: 'SQL', icon: '/sql.png' },
//   { name: 'Git', icon: '/git.png' }
// ];

// // Define animation variants for each skill card
// const cardVariants = {
//   hidden: { opacity: 0, x: 50 }, // Start hidden and to the right
//   visible: (i) => ({
//     opacity: 1,
//     x: 0,
//     transition: {
//       delay: i * 0.2, // Stagger animation
//       duration: 0.5,
//       type: "spring",
//       stiffness: 80,
//     },
//   }),
// };

// const Skills = () => {
//   const [isAnimating, setIsAnimating] = useState(false);

//   useEffect(() => {
//     setIsAnimating(true); // Trigger animation when the component mounts
//     return () => {
//       setIsAnimating(false); // Reset animation when the component unmounts
//     };
//   }, []);

//   return (
//     <div className="skills">
//       <h2>Skills</h2>
//       <motion.div
//         className="skills-carousel"
//         initial="hidden"
//         animate={isAnimating ? "visible" : "hidden"} // Reset animation on mount
//         exit="hidden"
//         variants={{
//           hidden: { opacity: 0 },
//           visible: { opacity: 1 },
//         }}
//         transition={{ duration: 0.3 }}
//       >
//         <motion.div
//           className="skills-grid"
//           initial="hidden"
//           animate={isAnimating ? "visible" : "hidden"} // Only animate when the page is visited
//         >
//           {skills.map((item, index) => (
//             <motion.div
//               key={item.name}
//               className="skill-card"
//               variants={cardVariants}
//               custom={index}
//               whileHover={{ scale: 1.1, rotate: 5 }} // Hover effect
//             >
//               <img src={item.icon} alt={item.name} />
//               <h3>{item.name}</h3>
//             </motion.div>
//           ))}
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default Skills;
// import { useEffect, useState } from "react";
 
// import { motion } from "framer-motion";

// const skills = [
//   { name: 'HTML', icon: '/html.png' },
//   { name: 'CSS', icon: '/css.png' },
//   { name: 'JavaScript', icon: '/javascript.png' },
//   { name: 'ReactJS', icon: '/react.png' },
//   { name: 'Tailwind CSS', icon: '/tailwind.png' },
//   { name: 'Bootstrap', icon: '/bootstrap.png' },
//   { name: 'SASS', icon: 'https://static-00.iconduck.com/assets.00/sass-icon-2048x2048-js3fulee.png' },
//   { name: 'Material UI', icon: '/material.png' },
//   { name: 'SQL', icon: '/sql.png' },
//   { name: 'Git', icon: '/git.png' }
// ];

// // Define animation variants for each skill card
// const cardVariants = {
//   hidden: { opacity: 0, x: 50 }, // Start hidden and to the right
//   visible: (i: number) => ({ // Explicitly type 'i' as number
//     opacity: 1,
//     x: 0,
//     transition: {
//       delay: i * 0.2, // Stagger animation
//       duration: 0.5,
//       type: "spring",
//       stiffness: 80,
//     },
//   }),
// };

// const Skills = () => {
//   const [isAnimating, setIsAnimating] = useState(false);

//   useEffect(() => {
//     setIsAnimating(true); // Trigger animation when the component mounts
//     return () => {
//       setIsAnimating(false); // Reset animation when the component unmounts
//     };
//   }, []);

//   return (
//     <div className="skills">
//       <h2>Skills</h2>
//       <motion.div
//         className="skills-carousel"
//         initial="hidden"
//         animate={isAnimating ? "visible" : "hidden"} // Reset animation on mount
//         exit="hidden"
//         variants={{
//           hidden: { opacity: 0 },
//           visible: { opacity: 1 },
//         }}
//         transition={{ duration: 0.3 }}
//       >
//         <motion.div
//           className="skills-grid"
//           initial="hidden"
//           animate={isAnimating ? "visible" : "hidden"} // Only animate when the page is visited
//         >
//           {skills.map((item, index) => (
//             <motion.div
//               key={item.name}
//               className="skill-card"
//               variants={cardVariants}
//               custom={index}
//               whileHover={{ scale: 1.1, rotate: 5 }} // Hover effect
//             >
//               <img src={item.icon} alt={item.name} />
//               <h3>{item.name}</h3>
//             </motion.div>
//           ))}
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default Skills;
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

// Define animation variants for each skill card
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
    <div id="skills" className="py-32">
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
