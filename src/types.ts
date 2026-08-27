export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  skills: string[];
  type: 'Internship' | 'Full-time' | 'Freelance';
  featured?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack' | 'AI & Desktop' | 'Web Solutions';
  description: string;
  highlights: string[];
  techStack: string[];
  date: string;
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  gradient: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level: string;
    tag?: string;
  }[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
