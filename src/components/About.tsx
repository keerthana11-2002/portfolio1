import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="py-20">
    <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-700 md:mb-4 text-center     ">
            Who I Am
          </h2>
    <section className="py-32 bg-gradient-to-b from-gray-50 to-gray-100" id="about">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20 flex flex-col lg:flex-row items-center lg:items-start">
    
        <motion.div
          className="lg:w-1/2 mb-8 lg:mb-0 relative"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <div className="relative">
            <motion.img
              src="https://drive.google.com/file/d/1pjJObNT7V6qqrxM0OXsQtSQQ20yE5W9b/view?usp=sharing"
              alt="certificate"
              className="rounded-lg shadow-lg lg:w-8/12 md:-mt-5 md:ml-32"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            />
            <div className="absolute bottom-0 left-0 w-full h-1/3  rounded-b-lg animate-pulse"></div>
          </div>
        </motion.div>
        
        <motion.div
          className="lg:w-1/2 lg:pl-12 text-center lg:text-left -ml-20"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-4 ml-20 md:ml-2 md:mt-20">
            My name is <span className="font-bold text-blue-700">Keerthana J K</span>. 
            I'm a <span className="text-primary font-semibold">ISTQB CTFL certified QA Tester </span> 
            based in <span className="font-semibold text-gray-800">Bangalore</span>.
          </p>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed ml-16 md:ml-2">
           I have hands-on experience in manual and automation testing of web applications and APIs. I specialize in designing test cases, identifying defects, and ensuring software quality through effective testing practices. 
           My expertise includes <span className="text-blue-700 font-medium">  {" "}Selenium WebDriver with Java, TestNG, Playwright, and API testing using Postman.
           </span>
            I am particularly intersted in building reliable automation scripts and improving test efficiency.
            
          </p>
          {/* ✅ Certification placed here */}
<div className="mt-6 ml-16 md:ml-2">
  <p className="text-md font-semibold text-gray-800">
    Certification:
  </p>
  <p className="text-sm text-gray-700">
    ISTQB Certified Tester – Foundation Level (CTFL) | 2026
  </p>
</div>
        </motion.div>
      </div>
    </section>
    </div>
  );
}
