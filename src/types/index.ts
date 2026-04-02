/**
 * Core type definitions for the portfolio application
 */

/**
 * Represents a single project in the portfolio
 */
export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  technologies: string[]
  github: string
  demo?: string
  image?: string
  featured?: boolean
}

/**
 * Navigation link structure
 */
export interface NavLink {
  label: string
  href: string
  id: string
}

/**
 * Skill category
 */
export interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'tools' | 'other'
  icon?: string
}

/**
 * Social media link
 */
export interface SocialLink {
  name: string
  url: string
  icon: string
}

/**
 * Component props type for sections
 */
export interface SectionProps {
  id: string
  className?: string
}
