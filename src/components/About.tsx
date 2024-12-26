



// // // export default function About() {
// // //   return (
// // //     <section className="py-20 bg-gray-50" id="about">
// // //       <div className="container mx-auto px-4">
// // //         <div className="max-w-3xl mx-auto text-center mb-16">
// // //           <h2 className="text-4xl font-bold text-gray-800 mb-4">Who I am</h2>
// // //           <p className="text-xl text-gray-600">
// // //               My name is Keerthana J K. I'm a Frontend Developer based in Krishnagiri,TamilNadu.

// // //             {/* I'm a full-stack developer passionate about creating innovative digital solutions
// // //             that make a difference. With expertise in both frontend and backend technologies,
// // //             I bring ideas to life through clean, efficient code. */}
// // //           </p>
// // //           <p>I am a professional and passionate programmer in my daily life. A quick learner with a self-learning attitude.I love to learn and explorre new technologies.My current stack includes HTML, CSS, Javascript, ReactJs, Bootstrap, Tailwind CSS, MYSQL, GIT</p>
// // //         </div>
        
        
// // //       </div>
// // //     </section>
// // //   );
// // // }
// // // export default function About() {
// // //   return (
// // //     <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100" id="about">
// // //       <img src="https://www.freepik.com/premium-ai-image/woman-with-glasses-is-using-laptop-front-window_335920015.htm#fromView=search&page=1&position=7&uuid=f62904b5-b938-4b7c-a0ff-00c56a673c9c" alt="logo"/>
// // //       <div className="container mx-auto px-6 sm:px-12 lg:px-20">
// // //         <div className="max-w-4xl mx-auto text-center mb-12">
// // //           <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
// // //             Who I Am
// // //           </h2>
// // //           <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-4">
// // //             My name is <span className="font-bold text-gray-800">Keerthana J K</span>. 
// // //             I'm a <span className="text-primary font-semibold">Frontend Developer</span> 
// // //              based in <span className="font-semibold text-gray-800">Krishnagiri, TamilNadu</span>.
// // //           </p>
// // //           <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
// // //             I am a professional and passionate programmer in my daily life, with a quick 
// // //             learning and self-driven attitude. I love exploring new technologies and honing 
// // //             my skills. My current stack includes:
// // //           </p>
// // //         </div>

// // //         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center mt-8">
// // //           {["HTML", "CSS", "JavaScript", "React.js", "Bootstrap", "Tailwind CSS", "MySQL", "Git"].map((skill) => (
// // //             <div
// // //               key={skill}
// // //               className="p-4 bg-white shadow-md rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300"
// // //             >
// // //               <span className="text-xl font-medium text-gray-900">{skill}</span>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }
// // export default function About() {
// //   return (
// //     <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100" id="about">
// //       <div className="container mx-auto px-6 sm:px-12 lg:px-20 flex flex-col lg:flex-row items-center lg:items-start">
        
// //         {/* Animated Image on the Left */}
// //         <div className="lg:w-1/2 mb-8 lg:mb-0">
// //           <div className="relative">
// //             <img
// //               src="https://img.freepik.com/premium-photo/woman-with-glasses-is-using-laptop-front-window_1092063-9067.jpg?w=1060"
// //               alt="Working Woman"
// //               className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
// //             />
// //             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
// //           </div>
// //         </div>
        
// //         {/* About Section on the Right */}
// //         <div className="lg:w-1/2 lg:pl-12 text-center lg:text-left">
// //           <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
// //             Who I Am
// //           </h2>
// //           <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-4">
// //             My name is <span className="font-bold text-gray-800">Keerthana J K</span>. 
// //             I'm a <span className="text-primary font-semibold">Frontend Developer</span> 
// //             based in <span className="font-semibold text-gray-800">Krishnagiri, TamilNadu</span>.
// //           </p>
// //           <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
// //             I am a professional and passionate programmer with a quick learning and 
// //             self-driven attitude. I enjoy exploring new technologies and bringing ideas 
// //             to life through clean and efficient code. My current expertise includes:
// //             HTML, CSS, JavaScript, React.js, Bootstrap, Tailwind CSS, MySQL, and Git. 
// //             I love creating innovative solutions that make a difference.
// //           </p>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// import { motion } from "framer-motion";

// export default function About() {
//   return (
//     <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100" id="about">
//       <div className="container mx-auto px-6 sm:px-12 lg:px-20 flex flex-col lg:flex-row items-center lg:items-start">
        
//         {/* Animated Image on the Left */}
//         <motion.div
//           className="lg:w-1/2 mb-8 lg:mb-0"
//           initial={{ opacity: 0, x: -100 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1.2, ease: "easeInOut" }}
//         >
//           <div className="relative">
//             <motion.img
//               src="https://img.freepik.com/premium-photo/woman-with-glasses-is-using-laptop-front-window_1092063-9067.jpg?w=1060"
//               alt="Working Woman"
//               className="rounded-lg shadow-lg"
//               whileHover={{ scale: 1.1 }}
//               transition={{ duration: 0.4 }}
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
//           </div>
//         </motion.div>
        
//         {/* About Section on the Right */}
//         <motion.div
//           className="lg:w-1/2 lg:pl-12 text-center lg:text-left"
//           initial={{ opacity: 0, x: 100 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1.2, ease: "easeInOut" }}
//         >
//           <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
//             Who I Am
//           </h2>
//           <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-4">
//             My name is <span className="font-bold text-gray-800">Keerthana J K</span>. 
//             I'm a <span className="text-primary font-semibold">Frontend Developer</span> 
//             based in <span className="font-semibold text-gray-800">Bangalore</span>.
//           </p>
//           <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
//             I am a professional and passionate programmer with a quick learning and 
//             self-driven attitude. I enjoy exploring new technologies and bringing ideas 
//             to life through clean and efficient code. My current expertise includes:
//             HTML, CSS, JavaScript, React.js, Bootstrap, Tailwind CSS, MySQL, and Git. 
//             I love creating innovative solutions that make a difference.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
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
