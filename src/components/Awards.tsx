import { motion } from 'framer-motion';
import { FaTrophy, FaExternalLinkAlt } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Awards = () => {
  return (
    <section id="awards" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Awards & Recognition</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {portfolioData.awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow mb-6"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center">
                    <FaTrophy className="text-white text-2xl" />
                  </div>
                </div>
                <div className="ml-6 flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{award.title}</h3>
                  <p className="text-primary-600 font-semibold mb-2">{award.organization}</p>
                  <p className="text-gray-600 mb-3">{award.date}</p>
                  <p className="text-gray-700 leading-relaxed mb-4">{award.description}</p>
                  {award.link && (
                    <a
                      href={award.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors"
                    >
                      Learn More <FaExternalLinkAlt className="ml-2" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;

