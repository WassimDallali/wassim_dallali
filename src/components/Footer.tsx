import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const { contact } = portfolioData.personal;

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-primary-400" />
                <a href={`mailto:${contact.email}`} className="hover:text-primary-400 transition-colors">
                  {contact.email}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone className="text-primary-400" />
                <a href={`tel:${contact.phone}`} className="hover:text-primary-400 transition-colors">
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-primary-400" />
                <span>{contact.location}</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-primary-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-primary-400 transition-colors">Skills</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-primary-400 transition-colors">Experience</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href={contact.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-primary-400 transition-colors"
                aria-label="Portfolio"
              >
                <FaGlobe />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            {portfolioData.personal.name} - {portfolioData.personal.title} | {portfolioData.personal.contact.location}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

