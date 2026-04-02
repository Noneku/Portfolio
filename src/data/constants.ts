import { NavLink, SocialLink, Skill, SoftSkill, Language } from '../types';

/**
 * Navigation links for the portfolio
 * Each link corresponds to a section in the page
 */
export const navLinks: NavLink[] = [
  { id: 'hero', label: 'nav.home', href: '#hero' },
  { id: 'projects', label: 'nav.projects', href: '#projects' },
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
  { name: '⚛️ React', category: 'frontend' },
  { name: '🅰️ Angular', category: 'frontend' },
  { name: '📱 React Native', category: 'frontend' },
  { name: '💙 TypeScript', category: 'frontend' },
  { name: '🟨 JavaScript', category: 'frontend' },
  { name: '🎨 TailwindCSS', category: 'frontend' },
  { name: '🏗️ HTML5', category: 'frontend' },
  { name: '🎨 CSS3/SASS/LESS', category: 'frontend' },

  // Backend Frameworks
  { name: '🟢 Node.js', category: 'backend' },
  { name: '🏗️ NestJS', category: 'backend' },
  { name: '🐘 Symfony', category: 'backend' },
  { name: '🌿 Spring', category: 'backend' },
  { name: '🔗 GraphQL', category: 'backend' },
  { name: '💾 Prisma ORM', category: 'backend' },
  { name: '🗄️ MongoDB', category: 'backend' },
  { name: '🐘 PostgreSQL', category: 'backend' },
  { name: '🐝 Doctrine', category: 'backend' },

  // Tools & DevOps
  { name: '🐳 Docker', category: 'tools' },
  { name: '🌳 Git/GitHub', category: 'tools' },
  { name: '⚡ Vite', category: 'tools' },
  { name: '📦 Webpack', category: 'tools' },
  { name: '💻 VS Code', category: 'tools' },
  { name: '🔄 Jira', category: 'tools' },
  { name: '📋 Scrum/Kanban', category: 'tools' },
  { name: '🔨 Jmerise (MCD/MLD)', category: 'tools' },

  // Competences Specific
  { name: '🔌 REST API', category: 'other' },
  { name: '🏗️ API GraphQL', category: 'other' },
  { name: '📱 Responsive Design', category: 'other' },
  { name: '🔐 Web Security', category: 'other' },
  { name: '🧪 Unit Testing', category: 'other' },
  { name: '🎯 Design Patterns', category: 'other' },
  { name: '📐 MVC/POO', category: 'other' },
  { name: '🌐 Agile Method', category: 'other' },
];

/**
 * Soft skills and professional qualities
 */
export const softSkills: SoftSkill[] = [
  { name: '👥 Team Spirit', emoji: '👥' },
  { name: '🔄 Adaptability', emoji: '🔄' },
  { name: '🧩 Problem Solving', emoji: '🧩' },
  { name: '⚡ Autonomy', emoji: '⚡' },
  { name: '💬 Communication', emoji: '💬' },
  { name: '🎯 Attention to Detail', emoji: '🎯' },
];

/**
 * Languages spoken
 */
export const languages: Language[] = [
  { name: '🇫🇷 French', level: 'Native' },
  { name: '🇬🇧 English', level: 'Advanced' },
];
