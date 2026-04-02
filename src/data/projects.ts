import { Project } from '../types'

/**
 * Project portfolio data
 * Each project contains essential information displayed in the project section
 */
export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with React and TypeScript',
    longDescription:
      'Full-stack e-commerce solution with product catalog, shopping cart, and payment integration. Features include user authentication, product filtering, and order management.',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com/Noneku/ecommerce-platform',
    demo: 'https://ecommerce-demo.example.com',
    featured: true,
  },
  {
    id: 'project-2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates',
    longDescription:
      'Team collaboration tool with task creation, assignment, and progress tracking. Features WebSocket integration for real-time updates and team collaboration.',
    technologies: ['React', 'Firebase', 'TailwindCSS', 'Framer Motion'],
    github: 'https://github.com/Noneku/task-manager',
    demo: 'https://task-manager-demo.example.com',
    featured: true,
  },
  {
    id: 'project-3',
    title: 'Weather Dashboard',
    description: 'Real-time weather application with location-based forecasts',
    longDescription:
      'Weather application with real-time data, 5-day forecasts, and multiple location support. Beautiful UI with animated weather visualizations.',
    technologies: ['React', 'OpenWeatherMap API', 'TailwindCSS', 'Vite'],
    github: 'https://github.com/Noneku/weather-dashboard',
    demo: 'https://weather-dashboard-demo.example.com',
  },
  {
    id: 'project-4',
    title: 'Personal Blog',
    description: 'A performant blog platform with markdown support',
    longDescription:
      'Static site generator with markdown support for blog posts. Features include categories, tags, search functionality, and dark mode support.',
    technologies: ['React', 'Markdown', 'Vite', 'TailwindCSS'],
    github: 'https://github.com/Noneku/personal-blog',
    demo: 'https://blog-demo.example.com',
  },
]

/**
 * Get a project by its ID
 */
export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id)
}

/**
 * Get featured projects only
 */
export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured)
}
