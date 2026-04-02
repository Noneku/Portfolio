import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { projects } from '../../data/projects'
import { Container, Section, Badge, Button } from '../ui'
import { useInView } from '../../hooks'
import { useRef } from 'react'

/**
 * ProjectCard internal component
 * Individual project card with animation
 */
const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const { t } = useTranslation()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref)

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
      },
    }),
  }

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      whileHover={{ y: -10 }}
      className="overflow-hidden rounded-lg border border-dark-700 bg-dark-800 transition-all duration-300 hover:border-neon-green hover:shadow-lg hover:shadow-neon-green/20"
    >
      {/* Image Placeholder */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-neon-green to-neon-green-dark opacity-20">
        <div className="flex h-full items-center justify-center">
          <svg
            className="h-16 w-16 text-neon-green opacity-40"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.3A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-white">{project.title}</h3>
        <p className="mb-4 text-gray-400">{project.description}</p>

        {/* Technologies */}
        <div className="mb-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button size="sm" variant="secondary" className="w-full">
              {t('projects.github')}
            </Button>
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button size="sm" className="w-full">
                {t('projects.demo')}
              </Button>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

/**
 * Projects section
 * Display all featured projects in a responsive grid
 */
export const ProjectsSection = () => {
  const { t } = useTranslation()

  return (
    <Section
      id="projects"
      title={t('projects.title')}
      subtitle={t('projects.subtitle')}
      className="bg-dark-900"
    >
      <Container>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
