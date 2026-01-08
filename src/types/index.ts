export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  portfolio: string;
  linkedin: string;
  github: string;
}

export interface Skill {
  name: string;
  category: 'language' | 'framework' | 'database' | 'tool' | 'cloud';
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
}

export interface Award {
  title: string;
  organization: string;
  date: string;
  description: string;
  link?: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    contact: ContactInfo;
    profile: string;
  };
  skills: Skill[];
  experience: Experience[];
  education: Education[];
  awards: Award[];
}

