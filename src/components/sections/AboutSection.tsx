import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Container, Section } from '../ui'
import { useInView } from '../../hooks'
import { useRef } from 'react'

/**
 * About section
 * Brief introduction about the developer with highlights
 */
export const AboutSection = () => {
  const { t } = useTranslation()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref)

  const highlights = [
    'Clean code and best practices',
    'Responsive design',
    'Performance optimization',
    'Accessibility (a11y)',
    'Modern tooling',
    'Team collaboration',
  ]

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <Section
      id="about"
      title={t('about.title')}
      className="bg-dark-800"
    >
      <Container>
        <div className="mx-auto max-w-3xl">
          {/* Description */}
          <motion.p
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={itemVariants}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center text-lg text-gray-300 leading-relaxed"
          >
            {t('about.description')}
          </motion.p>

          {/* Highlights */}
          <div>
            <h3 className="mb-8 text-center text-2xl font-bold text-white">
              {t('about.highlights')}
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : 'hidden'}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="rounded-lg border border-neon-green border-opacity-30 bg-dark-900 px-6 py-4 text-center"
                >
                  <p className="text-gray-200">{highlight}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
