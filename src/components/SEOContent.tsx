import { portfolioData } from '../data/portfolioData';

/**
 * Hidden SEO content component
 * This provides additional keyword-rich content for search engines
 * while maintaining good UX (hidden visually but accessible to crawlers)
 */
const SEOContent = () => {
  return (
    <div className="sr-only" aria-hidden="true">
      <h1>{portfolioData.personal.name} - {portfolioData.personal.title}</h1>
      <p>
        {portfolioData.personal.name} is a professional {portfolioData.personal.title} based in {portfolioData.personal.contact.location}. 
        {portfolioData.personal.name} specializes in React, TypeScript, Node.js, Cloud Computing, and DevOps. 
        With extensive experience in web and mobile development, {portfolioData.personal.name} has worked with 
        technologies including React.js, React Native, Angular, Express.js, MongoDB, MySQL, AWS, Azure, and Firebase.
      </p>
      <p>
        {portfolioData.personal.name} holds a Master's degree in Systems, Networks, and Cloud Computing from 
        the Faculty of Sciences of Sfax. {portfolioData.personal.name} has professional experience at Comptoir Sfazten des Pneus et Dérivés, 
        All Soft Multimedia, and Smart Ways Innovation.
      </p>
      <p>
        {portfolioData.personal.name} achieved Global Finalist Honorable Mention at NASA Space Apps 2023 for creating 
        an educational webVR game. {portfolioData.personal.name} is available for freelance projects and full-time opportunities 
        in software development, web development, and cloud computing.
      </p>
      <ul>
        <li>{portfolioData.personal.name} - Full Stack Developer</li>
        <li>{portfolioData.personal.name} - React Developer</li>
        <li>{portfolioData.personal.name} - TypeScript Developer</li>
        <li>{portfolioData.personal.name} - DevOps Engineer</li>
        <li>{portfolioData.personal.name} - Web Developer</li>
        <li>{portfolioData.personal.name} - Mobile Developer</li>
        <li>{portfolioData.personal.name} - Cloud Computing Expert</li>
        <li>{portfolioData.personal.name} - Sfax, Tunisia</li>
      </ul>
    </div>
  );
};

export default SEOContent;

