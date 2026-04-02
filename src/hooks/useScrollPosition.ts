import { useEffect, useState } from 'react'

/**
 * Hook to handle navbar visibility based on scroll position
 * Navbar appears when user scrolls down, disappears at top
 */
export const useScrollPosition = (): boolean => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Show navbar when scrolled down more than 100px
      if (currentScrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      setLastScrollY(currentScrollY)
    }

    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return isScrolled
}
