import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Education</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {portfolioData.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-8 bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <FaGraduationCap className="text-primary-600 text-xl" />
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                  <p className="text-primary-600 font-semibold mb-2">{edu.institution}</p>
                  <div className="flex items-center text-gray-600">
                    <FaCalendarAlt className="mr-2" />
                    <span>{edu.startDate} - {edu.endDate}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

