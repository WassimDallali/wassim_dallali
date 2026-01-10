import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const { contact } = portfolioData.personal;

  const contactItems = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      label: 'Email',
      value: contact.email,
      link: `mailto:${contact.email}`,
    },
    {
      icon: <FaPhone className="text-2xl" />,
      label: 'Phone',
      value: contact.phone,
      link: `tel:${contact.phone}`,
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      label: 'Location',
      value: contact.location,
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin className="text-2xl" />,
      label: 'LinkedIn',
      link: contact.linkedin,
    },
    {
      icon: <FaGithub className="text-2xl" />,
      label: 'GitHub',
      link: contact.github,
    },

  ];

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact {portfolioData.personal.name}</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with <strong>{portfolioData.personal.name}</strong>. {portfolioData.personal.name.split(' ')[0]} is always open to discussing new opportunities, 
            interesting projects, or just having a chat about technology and software development.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-primary-600 mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.label}</h3>
                {item.link ? (
                  <a
                    href={item.link}
                    className="text-gray-600 hover:text-primary-600 transition-colors break-all"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-gray-600">{item.value}</p>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-lg shadow-md p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Connect With Me</h3>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


