import { NavLink, SocialLink, Skill } from '../types'

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
]

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
    url: 'https://linkedin.com/in/gacem-nassim',
    icon: 'linkedin',
  },
  {
    name: 'Email',
    url: 'mailto:nassim@example.com',
    icon: 'mail',
  },
]

/**
 * Technical skills organized by category
 */
export const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'TailwindCSS', category: 'frontend' },
  { name: 'HTML5', category: 'frontend' },
  { name: 'CSS3', category: 'frontend' },

  // Backend
  { name: 'Node.js', category: 'backend' },
  { name: 'Express.js', category: 'backend' },
  { name: 'MongoDB', category: 'backend' },
  { name: 'PostgreSQL', category: 'backend' },

  // Tools
  { name: 'Git', category: 'tools' },
  { name: 'Vite', category: 'tools' },
  { name: 'Webpack', category: 'tools' },
  { name: 'Docker', category: 'tools' },
  { name: 'VS Code', category: 'tools' },

  // Other
  { name: 'REST API', category: 'other' },
  { name: 'GraphQL', category: 'other' },
  { name: 'Responsive Design', category: 'other' },
]
