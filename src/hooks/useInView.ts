import { useEffect, useState } from 'react'

/**
 * Hook to detect if element is in viewport (for scroll animations)
 * Triggers Intersection Observer for performance
 */
export const useInView = (
  ref: React.RefObject<HTMLDivElement>,
  options: IntersectionObserverInit = {}
): boolean => {
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true)
        // Stop observing once element is visible to avoid multiple triggers
        observer.unobserve(entry.target)
      }
    }, {
      threshold: 0.1,
      ...options,
    })

    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
  }, [ref, options])

  return isInView
}
