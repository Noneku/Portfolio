import { ReactNode } from 'react'

interface SectionProps {
  id: string
  title: string
  subtitle?: string
  children: ReactNode
  className?: string
}

/**
 * Reusable Section wrapper component
 * Provides consistent spacing, heading structure, and scroll targets
 */
export const Section = ({
  id,
  title,
  subtitle,
  children,
  className = '',
}: SectionProps) => {
  return (
    <section
      id={id}
      className={`scroll-mt-20 py-20 sm:py-32 ${className}`}
    >
      <div className="mb-12 text-center md:mb-16">
        <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
          {title}
        </h2>
        {subtitle && <p className="text-lg text-gray-400">{subtitle}</p>}
      </div>
      {children}
    </section>
  )
}
