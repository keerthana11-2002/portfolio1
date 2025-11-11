import { Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-200 via-purple-100 to-pink-50">
      <div className="container mx-auto px-4 py-28 md:ml-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className=" text-4xl md:text-6xl font-bold text-gray-800 mb-4">
              Hi, I'm <span className="text-blue-700 ">Keerthana</span>
            </h1>
            <h2 className=" text-2xl md:text-4xl  mb-4 font-semibold">
               QA Automation Engineer
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              I'm passionate about ensuring software quality through thorough testing and automation. I focus on creating reliable, efficient test scripts using modern tools like Selenium, TestNG, Playwright and Java to deliver flawless user experiences.

            </p>
            <div className="flex gap-4">
              <motion.button
                className="px-6 py-3 border-blue-700  text-blue-700 font-semibold rounded-lg shadow-lg hover:shadow-xl hover:bg-blue-700 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <a href="https://drive.google.com/file/d/1btZfusWG9BJD6KnAbqd5ViBLmfBfr5Lm/view">Download CV</a>
              </motion.button>
              <motion.button
                className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:text-blue-700 hover:bg-purple-100 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
               <a href="#contact"> Let's Connect</a>
              </motion.button>
            </div>
            <motion.div
              className="flex gap-6 mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {[
                {
                  icon: <Github size={24} />,
                  link: "https://github.com/keerthana11-2002",
                  bg: 'bg-gray-800 hover:bg-gray-700',
                },
                {
                  icon: <Linkedin size={24} />,
                  link: "https://www.linkedin.com/in/keerthana-j-k-1ba370370/",
                  bg: 'bg-blue-600 hover:bg-blue-500',
                },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 ${item.bg} text-white rounded-full shadow-lg hover:shadow-xl transition`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        <motion.div
          className=" mb-8 lg:mb-0 relative"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <div className="relative">
            <motion.img
              src="https://img.freepik.com/premium-photo/woman-with-glasses-is-using-laptop-front-window_1092063-9067.jpg?w=1060"
              alt="Working Woman"
              className="rounded-lg shadow-lg"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            />
            
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-blue-500/70 to-transparent rounded-b-lg animate-pulse"></div>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
