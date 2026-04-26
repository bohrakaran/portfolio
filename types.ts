
export interface Project {
  title: string;
  description: string;
  skills: string[];
  points: string[];
  demoUrl?: string;
  sourceUrl?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  points: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  certificateUrl?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period?: string;
  score?: string;
}
