import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white" aria-label="About section">
      <div className="container-max">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
          itemScope
          itemType="https://schema.org/Person"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8" aria-hidden="true"></div>
          <p className="text-lg text-gray-700 leading-relaxed" itemProp="description">
            {portfolioData.personal.profile}
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            I'm passionate about creating innovative solutions and continuously learning new technologies 
            to stay at the forefront of software development. My experience spans from full-stack web 
            development to mobile applications and cloud infrastructure.
          </p>
        </motion.article>
      </div>
    </section>
  );
};

export default About;

