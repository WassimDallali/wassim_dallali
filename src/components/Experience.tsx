import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-white" aria-label="Work experience section">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Experience</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto" aria-hidden="true"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {portfolioData.experience.map((exp, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-12 relative pl-8 border-l-4 border-primary-600"
              itemScope
              itemType="https://schema.org/JobPosting"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-primary-600 rounded-full" aria-hidden="true"></div>
              
              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1" itemProp="title">{exp.title}</h3>
                    <div className="flex items-center text-primary-600 mb-2">
                      <FaBriefcase className="mr-2" aria-hidden="true" />
                      <span className="font-semibold" itemProp="hiringOrganization" itemScope itemType="https://schema.org/Organization">
                        <span itemProp="name">{exp.company}</span>
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <FaCalendarAlt className="mr-2" aria-hidden="true" />
                      <time itemProp="datePosted" dateTime={exp.startDate}>{exp.startDate}</time>
                      <span className="mx-2">-</span>
                      <time itemProp="validThrough" dateTime={exp.endDate === 'Present' ? new Date().toISOString() : exp.endDate}>{exp.endDate}</time>
                    </div>
                    <p className="text-gray-600 text-sm mt-1" itemProp="jobLocation" itemScope itemType="https://schema.org/Place">
                      <span itemProp="addressLocality">{exp.location}</span>
                    </p>
                  </div>
                </div>

                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="text-base leading-relaxed" itemProp="description">{responsibility}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

