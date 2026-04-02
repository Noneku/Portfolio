import { Project } from '../types';

/**
 * Project portfolio data
 * Each project contains essential information displayed in the project section
 */
export const projects: Project[] = [
  {
    id: 'hdm-network',
    title: 'HDM Network - Web & Mobile Platform',
    description:
      'Full-stack web development internship - Database creation, APIs, and web applications',
    longDescription:
      'Completed a 3-month internship at HDM Network ASBL working on real-world projects including database design, RESTful API development, data scraping, and building responsive web and mobile applications. Demonstrated proficiency with modern full-stack technologies and agile methodologies.',
    technologies: [
      'React',
      'React Native',
      'NestJS',
      'GraphQL',
      'Prisma',
      'Docker',
      'TypeScript',
    ],
    github: 'https://github.com/Noneku',
    featured: true,
  },
  {
    id: 'roubaix-municipality',
    title: 'Activity Report Management System',
    description:
      'Municipal application for activity report registration and administration',
    longDescription:
      'Developed a web application for Roubaix city municipality enabling municipal agents to register and manage activity reports via a user-friendly form interface. Implemented using Symfony framework with Bootstrap UI.',
    technologies: ['Symfony', 'Twig', 'PHP', 'Bootstrap', 'Doctrine', 'MySQL'],
    github: 'https://github.com/Noneku',
    featured: true,
  },
  {
    id: 'portfolio-app',
    title: 'Modern Developer Portfolio',
    description:
      'Professional portfolio website showcasing skills and projects',
    longDescription:
      'Built this responsive, modern portfolio using the latest web technologies. Features multi-language support (EN/FR), dark theme with smooth animations, and clean architecture following SOLID principles.',
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'TailwindCSS',
      'Framer Motion',
      'i18next',
    ],
    github: 'https://github.com/Noneku/Portfolio-Nassim',
    featured: true,
  },
  {
    id: 'learning-projects',
    title: 'Learning & Practice Projects',
    description:
      'Various educational projects built during training and self-learning',
    longDescription:
      'Multiple projects developed during formation at ISCOD and personal learning journey. Includes exercises with Angular, Spring, various frontend and backend technologies. All projects follow best practices and design patterns.',
    technologies: [
      'Angular',
      'Spring',
      'React',
      'Node.js',
      'JavaScript',
      'Design Patterns',
    ],
    github: 'https://github.com/Noneku',
  },
];

/**
 * Get a project by its ID
 */
export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};

/**
 * Get featured projects only
 */
export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured);
};
