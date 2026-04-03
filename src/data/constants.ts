import {
  NavLink,
  SocialLink,
  Skill,
  SoftSkill,
  Language,
  Experience,
} from '../types';

/**
 * Navigation links for the portfolio
 * Each link corresponds to a section in the page
 */
export const navLinks: NavLink[] = [
  { id: 'hero', label: 'nav.home', href: '#hero' },
  { id: 'projects', label: 'nav.projects', href: '#projects' },
  { id: 'experience', label: 'nav.experience', href: '#experience' },
  { id: 'about', label: 'nav.about', href: '#about' },
  { id: 'skills', label: 'nav.skills', href: '#skills' },
  { id: 'contact', label: 'nav.contact', href: '#contact' },
];

/**
 * Social media links and contact information
 */
export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/Noneku',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/nassim-gacem',
    icon: 'linkedin',
  },
  {
    name: 'Email',
    url: 'mailto:dev.nassim.pro@gmail.com',
    icon: 'mail',
  },
];

/**
 * Technical skills organized by category
 */
export const skills: Skill[] = [
  // Frontend Frameworks
  { name: 'React', category: 'frontend' },
  { name: 'Angular', category: 'frontend' },
  { name: 'React Native', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'TailwindCSS', category: 'frontend' },
  { name: 'HTML5', category: 'frontend' },
  { name: 'CSS3 / SASS / LESS', category: 'frontend' },

  // Backend Frameworks
  { name: 'Node.js', category: 'backend' },
  { name: 'NestJS', category: 'backend' },
  { name: 'Symfony', category: 'backend' },
  { name: 'Spring', category: 'backend' },
  { name: 'GraphQL', category: 'backend' },
  { name: 'Prisma ORM', category: 'backend' },
  { name: 'MongoDB', category: 'backend' },
  { name: 'PostgreSQL', category: 'backend' },
  { name: 'Doctrine', category: 'backend' },

  // Tools & DevOps
  { name: 'Docker', category: 'tools' },
  { name: 'Git / GitHub', category: 'tools' },
  { name: 'Vite', category: 'tools' },
  { name: 'Webpack', category: 'tools' },
  { name: 'VS Code', category: 'tools' },
  { name: 'Jira', category: 'tools' },
  { name: 'Scrum / Kanban', category: 'tools' },
  { name: 'Jmerise (MCD / MLD)', category: 'tools' },

  // Competences Specific
  { name: 'REST API', category: 'other' },
  { name: 'GraphQL API', category: 'other' },
  { name: 'Responsive Design', category: 'other' },
  { name: 'Web Security', category: 'other' },
  { name: 'Unit Testing', category: 'other' },
  { name: 'Design Patterns', category: 'other' },
  { name: 'MVC / POO', category: 'other' },
  { name: 'Agile Methodology', category: 'other' },
];

/**
 * Soft skills and professional qualities
 */
export const softSkills: SoftSkill[] = [
  { name: 'Team Spirit' },
  { name: 'Adaptability' },
  { name: 'Problem Solving' },
  { name: 'Autonomy' },
  { name: 'Communication' },
  { name: 'Attention to Detail' },
];

/**
 * Languages spoken
 */
export const languages: Language[] = [
  { name: 'French', level: 'Native' },
  { name: 'English', level: 'Intermediate' },
];

/**
 * Professional experiences
 */
export const experiences: Experience[] = [
  {
    id: 'hdm-network',
    title: 'Full-Stack Developer Intern',
    company: 'HDM Network',
    location: 'Belgium',
    period: 'Sep - Dec 2024',
    startDate: '2024-09-01',
    endDate: '2024-12-31',
    description:
      'Contributed to multiple full-stack projects including database design, API development, web scraping, and both front-end and back-end application development in a dynamic and fast-paced environment.',
    responsibilities: [
      'Designed and implemented scalable PostgreSQL databases',
      'Developed RESTful and GraphQL APIs using NestJS',
      'Built responsive web applications with React and React Native',
      'Implemented web scraping solutions for data collection and analysis',
      'Containerized applications using Docker for consistent deployments',
      'Collaborated with team using Agile methodologies and Git version control',
    ],
    technologies: [
      'React',
      'React Native',
      'NestJS',
      'GraphQL',
      'Prisma',
      'Docker',
      'PostgreSQL',
    ],
    type: 'internship',
  },
  {
    id: 'mairie-roubaix',
    title: 'Full-Stack Developer Intern',
    company: 'Mairie de Roubaix',
    location: 'France',
    period: 'Oct - Nov 2023',
    startDate: '2023-10-01',
    endDate: '2023-11-30',
    description:
      'Developed a comprehensive web application for managing and administering activity reports submitted by city employees. Focused on backend development with attention to data integrity and user experience.',
    responsibilities: [
      'Built activity report management system using Symfony framework',
      'Designed and optimized database schema with Doctrine ORM',
      'Created responsive forms with Twig templating engine',
      'Implemented user authentication and authorization',
      'Integrated Bootstrap for consistent UI/UX design',
      'Tested application using XAMPP local development environment',
    ],
    technologies: [
      'Symfony',
      'Twig',
      'Doctrine',
      'Bootstrap',
      'MySQL',
      'XAMPP',
    ],
    type: 'internship',
  },
];
