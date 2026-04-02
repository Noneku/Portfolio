import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollPosition } from '../../hooks'
import { changeLanguage } from '../../i18n/config'
import { navLinks } from '../../data/constants'
import { Container, Button } from '../ui'

/**
 * Navbar component
 * Sticky navigation with smooth scroll links and language switcher
 * Appears when user scrolls down, has mobile menu burger
 */
export const Navbar = () => {
  const { i18n } = useTranslation()
  const isScrolled = useScrollPosition()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Handle smooth scrolling to sections
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  // Handle language change
  const handleLanguageChange = (lang: 'en' | 'fr') => {
    changeLanguage(lang)
  }

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-dark-700 bg-dark-900 bg-opacity-95 backdrop-blur-sm'
          : 'bg-transparent'
      }`}
    >
      <Container className="flex items-center justify-between py-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold text-neon-green"
        >
          GN
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-gray-400 transition-colors hover:text-neon-green"
            >
              {i18n.t(link.label)}
            </button>
          ))}
        </div>

        {/* Language Switcher & Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Language Toggle */}
          <div className="flex gap-2 rounded-lg bg-dark-800 p-1">
            <button
              onClick={() => handleLanguageChange('en')}
              className={`rounded px-3 py-1 text-sm font-medium transition-colors ${
                i18n.language === 'en'
                  ? 'bg-neon-green text-dark-900'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => handleLanguageChange('fr')}
              className={`rounded px-3 py-1 text-sm font-medium transition-colors ${
                i18n.language === 'fr'
                  ? 'bg-neon-green text-dark-900'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              FR
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1">
              <span
                className={`h-0.5 w-6 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? 'translate-y-2 rotate-45' : ''
                }`}
              />
              <span
                className={`h-0.5 w-6 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`h-0.5 w-6 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? '-translate-y-2 -rotate-45' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute left-0 right-0 top-full border-b border-dark-700 bg-dark-900 px-4 py-4 md:hidden"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left text-gray-400 transition-colors hover:text-neon-green"
                  >
                    {i18n.t(link.label)}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </nav>
  )
}
