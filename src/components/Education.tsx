import { GraduationCap, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const educationData = [
  {
    year: '2025',
    degree: 'QA Automation Engineer',
    school: 'Grow SkillIt Insitution',
    description: '',
    image: 'side1.png'
  },
  {
    year: '2020 - 2023',
    degree: 'Bachelor of Science in Computer Science',
    school: 'Gonzaga College of Arts And Science',
    description: '',
    image: 'side2.png'  
  },
  {
    year: '2018 - 2020',
    degree: 'Selva Matric Hr Sec School',
    school: 'Krishnagiri, Tamilnadu',
    description: '',
    image: 'side3.png' 
  }
];

export default function Education() {
  return (
    <section className="py-20 bg-white" id="education">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-700">Education Journey</h2>
        
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12">
          <motion.div
            className="max-w-2xl flex-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src="side1.png"
              alt="Education"
              className="rounded-lg shadow-lg w-full md:w-3/4 lg:w-full transform hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          <div className="max-w-3xl flex-1">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                className="relative pl-8 pb-12 last:pb-0"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 * index }}
              >
                <div className="absolute left-0 top-0 h-full w-0.5 bg-blue-200">
                  <div className="absolute -left-2 -top-2 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                    <GraduationCap size={14} className="text-white" />
                  </div>
                </div>
                <motion.div
                  className="bg-gray-50 rounded-lg p-6 ml-6 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="flex items-center gap-2 text-blue-600 mb-2">
                    <Calendar size={16} />
                    <span className="font-medium">{item.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{item.degree}</h3>
                  <p className="text-lg text-gray-600 mb-2">{item.school}</p>
                  <p className="text-gray-500">{item.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
