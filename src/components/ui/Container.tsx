import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
}

/**
 * Container component for consistent spacing and max-width
 * Ensures responsive padding and width across all sections
 */
export const Container = ({ children, className = '' }: ContainerProps) => {
  return (
    <div className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  )
}
