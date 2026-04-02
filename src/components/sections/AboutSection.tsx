import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Container, Section } from '../ui';
import { useInView } from '../../hooks';
import { softSkills, languages } from '../../data/constants';
import { useRef } from 'react';

/**
 * About section
 * Brief introduction about the developer with highlights
 */
export const AboutSection = () => {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  const highlights = [
    'Full-Stack Development',
    'Team Collaboration',
    'Problem Solving',
    'Clean Code',
    'API Development',
    'DevOps & Docker',
  ];

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <Section id="about" title={t('about.title')} className="bg-dark-800">
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
                  className="rounded-xl border border-neon-green border-opacity-30 bg-dark-900 px-6 py-4 text-center hover:border-neon-green hover:shadow-lg hover:shadow-neon-green/20 transition-all"
                >
                  <p className="text-gray-200 font-medium">{highlight}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Soft Skills Section */}
          <div className="mt-16">
            <h3 className="mb-8 text-center text-2xl font-bold text-white">
              Soft Skills
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : 'hidden'}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="rounded-xl border border-neon-green border-opacity-30 bg-dark-900 px-4 py-3 text-center hover:border-neon-green hover:shadow-lg hover:shadow-neon-green/20 transition-all"
                >
                  <p className="text-gray-200 font-medium">{skill.emoji} {skill.name}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Languages Section */}
          <div className="mt-16">
            <h3 className="mb-8 text-center text-2xl font-bold text-white">
              Languages
            </h3>
            <div className="flex justify-center gap-6">
              {languages.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : 'hidden'}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="rounded-xl border border-neon-green border-opacity-30 bg-dark-900 px-6 py-4 text-center hover:border-neon-green hover:shadow-lg hover:shadow-neon-green/20 transition-all"
                >
                  <p className="text-lg font-semibold text-white">{lang.name}</p>
                  <p className="mt-1 text-sm text-neon-green">{lang.level}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
