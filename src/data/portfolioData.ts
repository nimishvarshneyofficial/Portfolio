export interface PersonalInfo {
  name: string;
  title: string;
  roles: string[];
  bio: string;
  email: string;
  location: string;
  github: string;
  linkedin: string;
  status: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  highlights: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: string; tag?: string }[];
}

export interface AchievementItem {
  id: string;
  title: string;
  description: string;
}

export const PERSONAL_INFO: PersonalInfo = {
  name: 'Nimish Varshney',
  title: 'Software Developer & AI Prompt Engineer',
  roles: [
    'AI Prompt Engineering Intern',
    'Full-Stack Developer',
    'Software Engineer',
    'UI/UX & Web Developer',
  ],
  bio: 'Software developer with experience building web applications and digital products using Python, JavaScript, TypeScript, React, and Node.js. Interested in AI, automation, and prompt engineering, with a focus on practical software development and helping businesses establish their high-performance online presence.',
  email: 'nimishvarshney7@gmail.com',
  location: 'Ghaziabad, India',
  github: 'https://github.com/nimishvarshneyofficial',
  linkedin: 'https://linkedin.com/in/nimishvarshneyofficial',
  status: 'Available for Software & AI Roles',
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'code-alpha',
    role: 'Full Stack Developer Intern',
    company: 'Code Alpha',
    location: 'India',
    duration: 'Sep 2026 - Oct 2026',
    description:
      'Contributed to full-stack project development by combining AI prompt workflows with robust coding practices across frontend and backend modules.',
    highlights: [
      'Engineered full-stack features, translating product requirements into maintainable, performant application modules.',
      'Leveraged advanced AI prompt engineering to design solutions, architect tasks, and debug complex challenges.',
      'Refined and tested components with Python, TypeScript, React, and Node.js to meet high engineering standards.',
    ],
    technologies: ['Python', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'AI Prompts', 'REST APIs'],
  },
  {
    id: 'inamigos',
    role: 'AI Prompt Engineering Intern',
    company: 'InAmigos Foundation',
    location: 'India',
    duration: 'Aug 2026 - Sep 2026',
    description:
      'Developed and refined structured AI prompts using generative AI models for automated problem-solving and digital efficiency.',
    highlights: [
      'Selected to design structured system prompts and contextual prompt chains for generative AI tools.',
      'Formulated few-shot templates and guardrail patterns to deliver high-accuracy generative outputs.',
      'Accelerated developer workflows and automated content processes with LLM-assisted pipelines.',
    ],
    technologies: ['Prompt Engineering', 'Generative AI', 'LLM Prompt Chaining', 'AI Automation', 'System Design'],
  },
  {
    id: 'freelance-web',
    role: 'Web Developer & Digital Solutions Specialist',
    company: 'Independent & Local Enterprise Solutions',
    location: 'Ghaziabad, India',
    duration: 'Jul 2025 - Present',
    description:
      'Built modern, responsive web applications for 3–5 commercial clients to establish high-converting online presences.',
    highlights: [
      'Engineered end-to-end responsive web applications with sub-second load times and accessible UI/UX.',
      'Implemented mobile-first layouts, contact dispatch pipelines, and high SEO score architectures.',
      'Provided ongoing feature enhancements, performance optimization, and technical guidance.',
    ],
    technologies: ['React', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'UI/UX Design', 'SEO'],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'freestyle-notepad',
    title: 'Freestyle Notepad [11 NOTES]',
    subtitle: 'Canvas-based Windows Workspace & Spatial Note-Taking Suite',
    description:
      'A powerful canvas-based desktop note-taking and workspace application designed for unrestricted ideation. Offers a spatial drawing canvas, modular note blocks, and offline persistence.',
    highlights: [
      'Infinite canvas for freeform diagramming, note sketching, and idea organization',
      'Modular note cards with rich formatting and instant state persistence',
      'Engineered for fluid interaction with responsive canvas rendering',
    ],
    tags: ['Python', 'Desktop Development', 'Canvas Architecture', 'UI/UX Design', 'Custom Workspace'],
    githubUrl: 'https://github.com/nimishvarshneyofficial',
    liveUrl: 'https://github.com/nimishvarshneyofficial',
    featured: true,
  },
  {
    id: 'starigo',
    title: 'Starigo',
    subtitle: 'Full-Stack Productivity & Gamified Study Platform',
    description:
      'A full-stack productivity hub featuring smart task management, interactive calendar synchronization, Pomodoro focus timers, and gamified XP progression rewards.',
    highlights: [
      'Task tracking with priority flags, deadlines, and calendar views',
      'Configurable Pomodoro focus timers with session analytics and history logs',
      'Gamified XP level progression system to boost daily consistency',
      'Secure authentication with JWT and RESTful API architecture',
    ],
    tags: ['React', 'Node.js', 'Express', 'JWT Auth', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com/nimishvarshneyofficial',
    liveUrl: 'https://github.com/nimishvarshneyofficial',
    featured: true,
  },
  {
    id: 'business-digital-suite',
    title: 'Local Business Web Suite',
    subtitle: 'High-Impact Brand Platforms & Inquiries Engine',
    description:
      'A suite of bespoke commercial web applications built for 3–5 local enterprises, optimizing customer acquisition and inquiries dispatch.',
    highlights: [
      'Bespoke modern UI designs tailored to client brand identity',
      'Lightning-fast page speeds with accessible semantic HTML5/CSS3 and React',
      'Automated contact dispatch and local search SEO integration',
    ],
    tags: ['React', 'JavaScript', 'HTML5/CSS3', 'UI/UX', 'SEO Optimization'],
    githubUrl: 'https://github.com/nimishvarshneyofficial',
    liveUrl: 'https://github.com/nimishvarshneyofficial',
    featured: true,
  },
  {
    id: 'ai-prompt-lab',
    title: 'AI Prompt Engineering Lab',
    subtitle: 'Prompt Testing, Chaining & Evaluation Studio',
    description:
      'A structured environment to compose, iterate, evaluate, and benchmark complex system prompts and multi-turn LLM chains.',
    highlights: [
      'Interactive prompt playground with few-shot variable injection',
      'Benchmark scoring for consistency, tone, and accuracy metrics',
      'Exportable JSON template presets for automation pipelines',
    ],
    tags: ['Prompt Engineering', 'Generative AI', 'TypeScript', 'AI Automation'],
    githubUrl: 'https://github.com/nimishvarshneyofficial',
    liveUrl: 'https://github.com/nimishvarshneyofficial',
    featured: false,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 'Advanced', tag: 'Core' },
      { name: 'JavaScript (ES6+)', level: 'Advanced', tag: 'Core' },
      { name: 'TypeScript', level: 'Intermediate', tag: 'Core' },
      { name: 'HTML5 & CSS3', level: 'Expert', tag: 'Web' },
      { name: 'Tailwind CSS', level: 'Advanced', tag: 'Styling' },
      { name: 'Motion', level: 'Advanced', tag: 'Animation' },
      { name: 'UI/UX Design', level: 'Intermediate', tag: 'Design' },
    ],
  },
  {
    title: 'Backend & DB',
    skills: [
      { name: 'Python', level: 'Advanced', tag: 'Core' },
      { name: 'Node.js', level: 'Intermediate', tag: 'Runtime' },
      { name: 'Express', level: 'Intermediate', tag: 'Framework' },
      { name: 'REST APIs & JWT', level: 'Intermediate', tag: 'Security' },
      { name: 'Full-Stack Architecture', level: 'Advanced', tag: 'Engineering' },
    ],
  },
  {
    title: 'Languages & CS',
    skills: [
      { name: 'Python', level: 'Advanced', tag: 'Language' },
      { name: 'JavaScript / TypeScript', level: 'Advanced', tag: 'Language' },
      { name: 'Data Structures & Algorithms', level: 'Intermediate', tag: 'CS' },
      { name: 'Object-Oriented Programming', level: 'Advanced', tag: 'CS' },
    ],
  },
  {
    title: 'Tools & Devops',
    skills: [
      { name: 'Prompt Engineering', level: 'Advanced', tag: 'AI' },
      { name: 'Generative AI Tools', level: 'Advanced', tag: 'AI' },
      { name: 'Git & GitHub', level: 'Advanced', tag: 'VCS' },
      { name: 'Vite & Build Tools', level: 'Advanced', tag: 'Build' },
      { name: 'Figma & Prototyping', level: 'Intermediate', tag: 'Design' },
    ],
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: '1',
    title: 'Selected AI Prompt Engineering Intern',
    description: 'Selected through competitive evaluation to craft and benchmark production prompts.',
  },
  {
    id: '2',
    title: 'Full-Stack Applications Shipped',
    description: 'Built and delivered 3+ web and desktop software solutions with positive client feedback.',
  },
  {
    id: '3',
    title: '250+ DSA & Programming Challenges',
    description: 'Solved hundreds of algorithmic problems across leading coding platforms.',
  },
];

export const portfolioData = {
  personal: PERSONAL_INFO,
  experience: EXPERIENCES,
  projects: PROJECTS,
  skillCategories: SKILL_CATEGORIES,
  achievements: ACHIEVEMENTS,
};
