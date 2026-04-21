export interface Skill {
  name: string;
  category: 'Technical' | 'Tools' | 'Soft Skills';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
  impact: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  tags: string[];
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  about: string;
  email: string;
  github?: string;
  linkedin?: string;
}

// Data Transfer Object representing the entire portfolio
export interface PortfolioData {
  profile: Profile;
  skills: Skill[];
  experiences: Experience[];
  projects: Project[];
}
