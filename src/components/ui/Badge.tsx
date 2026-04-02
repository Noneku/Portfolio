interface BadgeProps {
  children: string
  variant?: 'primary' | 'secondary'
}

/**
 * Badge component for displaying technology tags
 * Used in project cards and skill sections
 */
export const Badge = ({ children, variant = 'primary' }: BadgeProps) => {
  const variants = {
    primary: 'bg-neon-green bg-opacity-20 text-neon-green',
    secondary: 'bg-dark-700 text-gray-300 border border-dark-700',
  }

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  )
}
