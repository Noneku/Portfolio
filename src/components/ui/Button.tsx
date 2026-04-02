import { ReactNode } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

/**
 * Reusable Button component with multiple variants
 * Follows single responsibility principle
 */
export const Button = ({
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) => {
  const baseStyles =
    'font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variants = {
    primary:
      'bg-neon-green text-dark-900 hover:bg-neon-green-dark focus:ring-neon-green',
    secondary:
      'border-2 border-neon-green text-neon-green hover:bg-neon-green hover:text-dark-900 focus:ring-neon-green',
    ghost: 'text-white hover:text-neon-green focus:ring-neon-green',
  }

  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  )
}
