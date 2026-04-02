import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Container, Section } from '../ui'
import { skills } from '../../data/constants'
import { useInView } from '../../hooks'
import { useRef } from 'react'

/**
 * SkillCard internal component
 * Individual skill display card with improved styling
 */
const SkillCard = ({ skill, index, isFeatured }: { skill: typeof skills[0]; index: number; isFeatured?: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      whileHover={{ scale: 1.08, y: -5 }}
      className={`rounded-lg border transition-all duration-300 ${
        isFeatured
          ? 'border-neon-green bg-gradient-to-br from-neon-green/10 to-dark-800 px-6 py-5 hover:shadow-lg hover:shadow-neon-green/30'
          : 'border-dark-700 bg-dark-800 px-4 py-3 hover:border-neon-green hover:shadow-lg hover:shadow-neon-green/20'
      }`}
    >
      <p className={`text-center font-medium ${isFeatured ? 'text-base text-white' : 'text-sm text-gray-300'}`}>
        {skill.name}
      </p>
    </motion.div>
  )
}

/**
 * Skills section
 * Display all technical skills organized by category with featured frameworks
 */
export const SkillsSection = () => {
  const { t } = useTranslation()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref)

  // Define featured/main frameworks
  const featuredFrameworks = ['⚛️ React', '🅰️ Angular', '🟢 Node.js', '🏗️ NestJS', '🐘 Symfony', '🌿 Spring', '🐳 Docker']

  // Organize skills by category
  const skillsByCategory = {
    frontend: skills.filter((s) => s.category === 'frontend'),
    backend: skills.filter((s) => s.category === 'backend'),
    tools: skills.filter((s) => s.category === 'tools'),
    other: skills.filter((s) => s.category === 'other'),
  }

  const categories = [
    { key: 'frontend', label: '⚛️ ' + t('skills.frontend'), icon: '🎨' },
    { key: 'backend', label: '🔧 ' + t('skills.backend'), icon: '⚙️' },
    { key: 'tools', label: '🛠️ Tools & DevOps', icon: '🔨' },
  ] as const

  return (
    <Section
      id="skills"
      title={t('skills.title')}
      subtitle={t('skills.subtitle')}
      className="bg-dark-900"
    >
      <Container>
        {/* Featured Frameworks Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : 'hidden'}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="mb-8 text-center">
            <h3 className="inline-block rounded-lg bg-neon-green/10 px-4 py-2 text-lg font-bold text-neon-green">
              ⭐ Main Frameworks & Technologies
            </h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skills
              .filter((s) => featuredFrameworks.includes(s.name))
              .map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  index={index}
                  isFeatured={true}
                />
              ))}
          </div>
        </motion.div>

        {/* Categories Section */}
        <div className="space-y-16">
          {categories.map(({ key, label }) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : 'hidden'}
              transition={{ duration: 0.6 }}
            >
              {/* Category Header */}
              <div className="mb-8 flex items-center gap-3 border-b-2 border-neon-green border-opacity-30 pb-4">
                <div className="text-3xl">{label.charAt(0)}</div>
                <h3 className="text-2xl font-bold text-white">
                  {label.substring(2)}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {skillsByCategory[key].map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    index={index}
                    isFeatured={false}
                  />
                ))}
              </div>
            </motion.div>
          ))}

          {/* Other Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : 'hidden'}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8 flex items-center gap-3 border-b-2 border-neon-green border-opacity-30 pb-4">
              <div className="text-3xl">🎯</div>
              <h3 className="text-2xl font-bold text-white">
                Competencies & Methodologies
              </h3>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {skillsByCategory.other.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  index={index}
                  isFeatured={false}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
