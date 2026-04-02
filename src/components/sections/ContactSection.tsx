import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Container, Section, Button } from '../ui'
import { socialLinks } from '../../data/constants'

/**
 * Contact section
 * Call-to-action section with social links and contact information
 */
export const ContactSection = () => {
  const { t } = useTranslation()

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <Section
      id="contact"
      title={t('contact.title')}
      subtitle={t('contact.subtitle')}
      className="bg-dark-800"
    >
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-2xl"
        >
          {/* Social Links Grid */}
          <div className="grid gap-6 sm:grid-cols-3">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="group rounded-lg border border-dark-700 bg-dark-900 px-6 py-8 text-center transition-all duration-300 hover:border-neon-green hover:shadow-lg hover:shadow-neon-green/20"
              >
                <div className="mb-3 text-3xl text-neon-green group-hover:scale-110 transition-transform">
                  {link.icon === 'github' && '🐙'}
                  {link.icon === 'linkedin' && '💼'}
                  {link.icon === 'mail' && '📧'}
                </div>
                <h3 className="font-bold text-white">{link.name}</h3>
                <p className="mt-2 text-sm text-gray-400 break-all">{link.url}</p>
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <p className="mb-6 text-lg text-gray-300">
              Let's build something amazing together
            </p>
            <a
              href="mailto:nassim@example.com"
              className="inline-block"
            >
              <Button size="lg">Get In Touch</Button>
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}
