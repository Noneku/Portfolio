import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Container, Section } from '../ui';
import { experiences } from '../../data/constants';
import { useRef } from 'react';
import { useInView } from '../../hooks';

/**
 * Experience section
 * Timeline of professional experiences and internships
 */
export const ExperienceSection = () => {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <Section
      id="experience"
      title={t('experience.title')}
      subtitle={t('experience.subtitle')}
      className="bg-dark-800"
    >
      <Container>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mx-auto max-w-4xl"
        >
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 hidden h-full w-1 bg-gradient-to-b from-neon-green to-neon-green/30 lg:block md:left-1/2 md:ml-[-2px]" />

            {/* Experience items */}
            <div className="space-y-12 lg:space-y-16">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className={`relative grid gap-6 lg:grid-cols-2 ${
                    index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-6 -ml-3 hidden h-6 w-6 rounded-full border-4 border-dark-800 bg-neon-green lg:block md:left-1/2" />

                  {/* Content container */}
                  <div className={index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12 lg:col-start-2'}>
                    {/* Header */}
                    <div className="mb-4">
                      <div className="mb-2 flex items-start gap-3 lg:justify-end">
                        <div>
                          <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                          <p className="text-neon-green font-semibold">{exp.company}</p>
                        </div>
                        {exp.location && (
                          <span className="mt-1 whitespace-nowrap text-xs text-gray-400">
                            📍 {exp.location}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-400 font-medium">{exp.period}</p>
                    </div>

                    {/* Description */}
                    <p className="mb-4 text-gray-300 leading-relaxed">{exp.description}</p>

                    {/* Responsibilities */}
                    <div className="mb-6">
                      <h4 className="mb-3 text-sm font-semibold text-neon-green">
                        {t('experience.responsibilities')}
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <motion.li
                            key={idx}
                            variants={badgeVariants}
                            transition={{ delay: idx * 0.05 }}
                            className="flex items-start gap-2 text-sm text-gray-400"
                          >
                            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-neon-green flex-shrink-0" />
                            {responsibility}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies used */}
                    {exp.technologies && exp.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <motion.span
                            key={tech}
                            variants={badgeVariants}
                            className="rounded-full border border-neon-green/50 bg-neon-green/10 px-3 py-1 text-xs text-neon-green hover:border-neon-green hover:bg-neon-green/20 transition-all"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};
