import { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: 'Factorial Web App – Automation Testing',
    description: 'Automated testing of a Factorial Calculator Web Application to ensure accurate calculation results and validate input scenarios',
    image: "https://factorialhr.com/images/factorial-open-graph.png",
    longDescription: 'A meeting scheduling application that simplifies the process of organizing and managing meetings. Includes features for time zone management and integration with popular calendar services.',
    technologies: ['Selenium', 'POM', 'TestNG', 'Maven','Data driven','Chrome Driver'],
    liveLink: 'https://qainterview.pythonanywhere.com/',
    features: [
      'Created test scripts to validate factorial calculations for different input values',
      'Implemented TestNG framework for test case organization, execution,',
      'Executed tests on multiple browsers to ensure cross-browser compatibility.',
      'Maintained test data and test results efficiently.'
    ]
  },
  {
    title: 'Automation Course Web App – Playwright Automation',
    description:'Automated testing of an Automation Course Web Application using Playwright and Java to validate end-to-end workflows, user interactions, and form submissions.',
    image: "https://www.testim.io/wp-content/uploads/2019/11/Automated-Testing.jpg",
    longDescription:'Automated testing of an Automation Course Web Application using Playwright and Java to validate end-to-end workflows, user interactions, and form submissions. Focused on ensuring the application functions correctly across different scenarios without using a full Page Object Model (POM).',
    technologies: ['Playwright', 'Java', 'Maven','Chrome','Edge','Eclipse'],
    liveLink: 'https://freelance-learn-automation.vercel.app/login',
    features: [
      'Developed automated test scripts for key workflows such as course registration, login',
      'Implemented Playwright locators and commands for UI element interaction and validation.',
      'Maintained test data for different user scenarios and handled dynamic elements.',
      'Ensured test reliability by handling synchronization and wait conditions effectively.'
    ]
  },
   {
    title: 'Make My Trip - Manual Testing',
    description: 'Performed regression testing on the MakeMyTrip web application to ensure that recent updates and bug fixes did not impact existing features.',
    image: "https://media.telanganatoday.com/wp-content/uploads/2025/08/Makemytrip.jpg",
    longDescription: 'Identified and re-executed test cases from previous test cycles to confirm stable functionality after code changes and Verified core modules — flight booking, login, and payment — to ensure no new defects were introduced.',
    technologies: ['Excel','JIRA','Browser Developer tool'],
    liveLink: 'https://qainterview.pythonanywhere.com/',
     Scenario: [
      'Verify the train icon',
      'Verify the regression test',
      'Verify the explore world link',
      'Verify the browser title'
    ]
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="py-20 bg-gray-50" id="projects">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-blue-700"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-300 ease-in-out cursor-pointer"
              variants={item}
              whileHover={{ y: -10, scale: 1.05 }}
              onClick={() => setSelectedProject(project)}
            >
              <motion.div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover "
                />
                <div className="absolute inset-0"></div>
              </motion.div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition"
                  >
                    <X size={24} />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{selectedProject.title}</h3>
                  <p className="text-gray-600 mb-6">{selectedProject.longDescription}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2">Key Features</h4>
                    <ul className="list-disc list-inside space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="text-gray-600">{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                    >
                      <ExternalLink size={18} />
                      View Live
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
