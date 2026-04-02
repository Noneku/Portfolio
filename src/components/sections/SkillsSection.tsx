import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Container, Section } from '../ui'
import { skills } from '../../data/constants'
import { useInView } from '../../hooks'
import { useRef } from 'react'

/**
 * SkillCard internal component
 * Individual skill display card
 */
const SkillCard = ({ skill, index }: { skill: typeof skills[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="rounded-lg border border-dark-700 bg-dark-800 px-4 py-3 text-center transition-all duration-300 hover:border-neon-green hover:shadow-lg hover:shadow-neon-green/20"
    >
      <p className="font-medium text-gray-300">{skill.name}</p>
    </motion.div>
  )
}

/**
 * Skills section
 * Display all technical skills organized by category
 */
export const SkillsSection = () => {
  const { t } = useTranslation()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref)

  // Organize skills by category
  const skillsByCategory = {
    frontend: skills.filter((s) => s.category === 'frontend'),
    backend: skills.filter((s) => s.category === 'backend'),
    tools: skills.filter((s) => s.category === 'tools'),
  }

  const categories = [
    { key: 'frontend', label: t('skills.frontend') },
    { key: 'backend', label: t('skills.backend') },
    { key: 'tools', label: t('skills.tools') },
  ] as const

  return (
    <Section
      id="skills"
      title={t('skills.title')}
      subtitle={t('skills.subtitle')}
      className="bg-dark-900"
    >
      <Container ref={ref}>
        <div className="space-y-12">
          {categories.map(({ key, label }) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : 'hidden'}
              transition={{ duration: 0.6 }}
            >
              <h3 className="mb-6 text-xl font-bold text-neon-green">
                {label}
              </h3>
              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {skillsByCategory[key].map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
