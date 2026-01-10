import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Wassim Dallali',
    title: 'Full Stack Developer',
    contact: {
      email: 'wassimdallali7@gmail.com',
      phone: '+216 53 788 671',
      location: 'Sfax, Tunisia',
      portfolio: 'https://wassim-dallali.netlify.app',
      linkedin: 'https://linkedin.com/in/wassim-dallali',
      github: 'https://github.com/WassimDallali',
    },
    profile: 'Full Stack Developer with skills in web and mobile development. Experience in Cloud Computing, DevOps, and network design.',
  },
  skills: [
    // Languages
    { name: 'JAVA', category: 'language' },
    { name: 'TypeScript', category: 'language' },
    { name: 'JavaScript', category: 'language' },
    { name: 'PHP', category: 'language' },
    
    // Frameworks & Libraries
    { name: 'Angular', category: 'framework' },
    { name: 'React Native', category: 'framework' },
    { name: 'Node.js', category: 'framework' },
    { name: 'Spring Boot', category: 'framework' },
    { name: 'React.js', category: 'framework' },
    { name: 'Express.js', category: 'framework' },
    { name: 'typeORM', category: 'framework' },
    { name: 'Hibernate', category: 'framework' },
    
    // Databases
    { name: 'MongoDB', category: 'database' },
    { name: 'Redis', category: 'database' },
    { name: 'MySQL', category: 'database' },
    
    // Tools and IDEs
    { name: 'VMware Workstation', category: 'tool' },
    { name: 'Android Studio', category: 'tool' },
    { name: 'IntelliJ', category: 'tool' },
    { name: 'Anaconda', category: 'tool' },
    
    // Cloud
    { name: 'Azure', category: 'cloud' },
    { name: 'Firebase', category: 'cloud' },
    { name: 'AWS', category: 'cloud' },
  ],
  experience: [
    {
      title: 'Development Department Manager',
      company: 'Comptoir Sfazten des Pneus et Dérivés',
      location: 'Sfax, TN',
      startDate: 'January 2025',
      endDate: 'Present',
      responsibilities: [
        'Refactored and modernized CRM systems using React and TypeScript for the frontend, and migrated backend APIs from PHP to Express.js with TypeORM.',
        'Refactored a mobile app with React Native to improve accessibility and user experience.',
      ],
      technologies: ['React', 'TypeScript', 'React Native', 'Express.js', 'TypeORM', 'PHP'],
    },
    {
      title: 'DevOps Internship',
      company: 'All Soft Multimedia',
      location: 'Sfax, TN',
      startDate: 'February 2024',
      endDate: 'June 2024',
      responsibilities: [
        'Designed and developed a workflow management platform with dynamic forms, optimized GitLab, Jenkins, and Terraform for efficient development processes, and improved Azure cloud Infrastructure for optimized resource management.',
      ],
      technologies: ['Angular', 'Node.js', 'Spring Boot', 'MySQL', 'Azure', 'Jenkins', 'Terraform', 'GitLab'],
    },
    {
      title: 'Development Internship',
      company: 'Smart Ways Innovation',
      location: 'Sfax, TN',
      startDate: 'January 2022',
      endDate: 'June 2022',
      responsibilities: [
        'Designed and developed an e-learning platform "Smart Learning", optimized cloud infrastructure for development, and created a video conferencing and chat solution for each course.',
      ],
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'WebRTC', 'Redis SUB/PUB', 'Firebase'],
    },
  ],
  education: [
    {
      degree: "Master's in Systems, Networks, and Cloud Computing",
      institution: 'Faculty of Sciences of Sfax',
      startDate: '2022',
      endDate: '2024',
    },
    {
      degree: "Bachelor's in Software Engineering and Information Systems",
      institution: 'Faculty of Sciences of Sfax',
      startDate: '2019',
      endDate: '2022',
    },
  ],
  awards: [
    {
      title: 'Global Finalist Honorable Mention',
      organization: 'NASA Space Apps 2023',
      date: 'October 2023',
      description: 'Created an educational webVR game titled "Space Neighbor"',
      link: 'https://www.spaceappschallenge.org/',
    },
  ],
};


