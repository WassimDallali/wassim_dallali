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
  projects: [
    {
      title: 'netflix-bot-exemple',
      description:
        'Exploratory Python project experimenting with automation and bot logic inspired by Netflix-style content browsing.',
      technologies: ['Python', 'Automation'],
      sourceCode: 'https://github.com/WassimDallali/netflix-bot-exemple',
    },
    {
      title: 'wassim_dallali – Portfolio Source',
      description:
        'Source code for my personal portfolio website built with React, TypeScript, Vite and Tailwind CSS, showcasing my experience and projects.',
      technologies: ['TypeScript', 'React', 'Vite', 'Tailwind CSS'],
      sourceCode: 'https://github.com/WassimDallali/wassim_dallali',
      highlight: true,
    },
    {
      title: 'demo-properity-motion',
      description:
        'Animated property listing demo using React, TypeScript and motion libraries to showcase smooth UI interactions and transitions.',
      technologies: ['TypeScript', 'React', 'Framer Motion'],
      sourceCode: 'https://github.com/WassimDallali/demo-properity-motion',
    },
    {
      title: 'Si_chikh',
      description:
        'Static website built with HTML and CSS for a local business, focusing on clean layout and responsive design.',
      technologies: ['HTML', 'CSS'],
      sourceCode: 'https://github.com/WassimDallali/Si_chikh',
    },
    {
      title: 'GestionUtilisateur',
      description:
        'User management application implementing core CRUD operations and basic account management features.',
      technologies: ['Java', 'CRUD', 'Persistence'],
      sourceCode: 'https://github.com/WassimDallali/GestionUtilisateur',
    },
    {
      title: 'WassimDallali – Profile README',
      description:
        'GitHub profile repository containing my developer README, badges and links to highlight my skills and activity.',
      technologies: ['Markdown', 'GitHub'],
      sourceCode: 'https://github.com/WassimDallali/WassimDallali',
    },
    {
      title: 'Springboot-restful-reactjs',
      description:
        'Full-stack application using a Spring Boot RESTful backend with a modern React.js frontend, demonstrating clean API design and type-safe client integration.',
      technologies: ['Spring Boot', 'REST API', 'React.js', 'TypeScript'],
      sourceCode: 'https://github.com/WassimDallali/Springboot-restful-reactjs',
      highlight: true,
    },
    {
      title: 'Index_boolean – Boolean Search Engine',
      description:
        'A custom search engine implementing boolean indexing and retrieval, built to explore information retrieval concepts and efficient text search.',
      technologies: ['Java', 'Algorithms', 'Indexing', 'Data Structures'],
      sourceCode: 'https://github.com/WassimDallali/Index_boolean',
      highlight: true,
    },
    {
      title: 'Card-1 – UI Component',
      description:
        'A clean, modern card UI component built with HTML and CSS, focusing on layout, typography and responsive styling.',
      technologies: ['HTML', 'CSS', 'UI Design'],
      sourceCode: 'https://github.com/WassimDallali/Card-1',
    },
    {
      title: 'navbar_reactjs-',
      description:
        'Reusable responsive navigation bar component built with React.js, showcasing component-based design and modern UI patterns.',
      technologies: ['React.js', 'JavaScript', 'Responsive Design'],
      sourceCode: 'https://github.com/WassimDallali/navbar_reactjs-',
    },
    {
      title: 'AppCrudJee-',
      description:
        'A classic CRUD application built with JEE, focusing on clean architecture, data persistence and robust backend logic.',
      technologies: ['Java', 'JEE', 'CRUD', 'SQL'],
      sourceCode: 'https://github.com/WassimDallali/AppCrudJee-',
    },
    {
      title: 'decidim (fork)',
      description:
        'Fork of the Decidim participatory democracy framework, used to study large-scale Ruby on Rails applications and civic-tech architectures.',
      technologies: ['Ruby', 'Ruby on Rails'],
      sourceCode: 'https://github.com/WassimDallali/decidim',
    },
    {
      title: 'consul (fork)',
      description:
        'Fork of the Consul open government and e‑participation platform, explored for learning about complex civic engagement systems.',
      technologies: ['Ruby', 'Ruby on Rails'],
      sourceCode: 'https://github.com/WassimDallali/consul',
    },
    {
      title: 'Portfolio & Experiments',
      description:
        'A collection of experiments, demos and learning projects exploring React, Node.js, cloud and DevOps practices.',
      technologies: ['React', 'Node.js', 'Cloud', 'DevOps'],
      sourceCode: 'https://github.com/WassimDallali',
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


