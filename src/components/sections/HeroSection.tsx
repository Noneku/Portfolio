import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Container, Button } from '../ui'

/**
 * Hero section - Full screen introduction
 * First section visible to users with main CTA
 */
export const HeroSection = () => {
  const { t } = useTranslation()

  const handleScrollToProjects = () => {
    const projectsSection = document.querySelector('#projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-900 pt-20"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-neon-green opacity-10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-neon-green opacity-5 blur-3xl" />
      </div>

      <Container className="relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-3xl"
        >
          {/* Title */}
          <motion.div variants={itemVariants}>
            <p className="mb-4 text-lg text-neon-green md:text-xl">
              {t('hero.title')}
            </p>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="mb-6 text-5xl font-bold text-white md:text-7xl"
          >
            {t('hero.name')}
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            variants={itemVariants}
            className="mb-6 text-3xl font-semibold text-gray-300 md:text-4xl"
          >
            {t('hero.subtitle')}
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mb-8 text-lg text-gray-400 md:text-xl"
          >
            {t('hero.description')}
          </motion.p>

          {/* Technologies */}
          <motion.div
            variants={itemVariants}
            className="mb-12 inline-block rounded-lg bg-dark-800 px-6 py-3"
          >
            <p className="font-mono text-sm text-neon-green md:text-base">
              {t('hero.technologies')}
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants}>
            <Button
              onClick={handleScrollToProjects}
              size="lg"
              className="hover:shadow-lg hover:shadow-neon-green/50"
            >
              {t('hero.cta')}
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs text-gray-500">Scroll</p>
          <svg
            className="h-6 w-6 text-neon-green"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}
