import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Container, Section } from '../ui';
import { skills } from '../../data/constants';
import { useInView } from '../../hooks';
import { useRef } from 'react';

/**
 * SkillCard internal component
 * Individual skill display card with improved styling
 */
const SkillCard = ({
  skill,
  index,
  isFeatured,
}: {
  skill: (typeof skills)[0];
  index: number;
  isFeatured?: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      whileHover={{ scale: 1.08, y: -5 }}
      className={`rounded-xl border transition-all duration-300 ${
        isFeatured
          ? 'border-neon-green bg-gradient-to-br from-neon-green/10 to-dark-800 px-6 py-5 shadow-lg shadow-neon-green/10 hover:shadow-neon-green/30'
          : 'border-dark-700 bg-dark-800 px-4 py-3 hover:border-neon-green hover:shadow-lg hover:shadow-neon-green/20'
      }`}
    >
      <p
        className={`text-center font-semibold tracking-wide ${isFeatured ? 'text-base text-white' : 'text-sm text-gray-300'}`}
      >
        {skill.name}
      </p>
    </motion.div>
  );
};

/**
 * Skills section
 * Display featured frameworks and AI & Innovation section
 */
export const SkillsSection = () => {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  // Define featured/main frameworks
  const featuredFrameworks = [
    'React',
    'Angular',
    'Node.js',
    'NestJS',
    'Symfony',
    'Spring',
    'Docker',
  ];

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
          className="mb-20"
        >
          <div className="mb-10 text-center">
            <div className="inline-block">
              <h3 className="text-2xl font-bold text-white mb-2">
                Main Frameworks & Technologies
              </h3>
              <div className="h-1 bg-gradient-to-r from-transparent via-neon-green to-transparent rounded-full"></div>
            </div>
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
        <div className="space-y-18">
          {/* AI & Innovation Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : 'hidden'}
            transition={{ duration: 0.6 }}
            className="mt-20"
          >
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white uppercase tracking-wider">
                AI & Innovation
              </h3>
              <div className="mt-2 h-0.5 w-12 bg-neon-green rounded-full"></div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : 'hidden'}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-xl border-2 border-neon-green border-opacity-40 bg-gradient-to-br from-neon-green/5 to-dark-800 p-8 md:p-10"
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-3 h-3 rounded-full bg-neon-green animate-pulse"></div>
                <p className="text-lg font-semibold text-neon-green">
                  In Development
                </p>
                <div className="w-3 h-3 rounded-full bg-neon-green animate-pulse"></div>
              </div>
              <p className="text-center text-gray-300 text-lg leading-relaxed">
                I'm currently exploring and working with AI technologies and
                innovations.
                <br />
                <span className="text-neon-green font-medium">
                  This section is coming soon...
                </span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};
