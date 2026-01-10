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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About {portfolioData.personal.name}</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8" aria-hidden="true"></div>
          <p className="text-lg text-gray-700 leading-relaxed" itemProp="description">
            <strong>{portfolioData.personal.name}</strong> is a {portfolioData.personal.profile.toLowerCase()} based in {portfolioData.personal.contact.location}.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            {portfolioData.personal.name} is passionate about creating innovative solutions and continuously learning new technologies 
            to stay at the forefront of software development. With experience spanning from full-stack web 
            development to mobile applications and cloud infrastructure, {portfolioData.personal.name.split(' ')[0]} brings a comprehensive 
            skill set to every project.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            As a professional developer, <strong>{portfolioData.personal.name}</strong> has worked with leading companies in Sfax, Tunisia, 
            including Comptoir Sfazten des Pneus et Dérivés, All Soft Multimedia, and Smart Ways Innovation. 
            {portfolioData.personal.name.split(' ')[0]} holds a Master's degree in Systems, Networks, and Cloud Computing from the Faculty of Sciences of Sfax.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            {portfolioData.personal.name} is recognized for excellence in software development, having achieved Global Finalist Honorable Mention 
            at NASA Space Apps 2023 for creating an educational webVR game titled "Space Neighbor".
          </p>
        </motion.article>
      </div>
    </section>
  );
};

export default About;

