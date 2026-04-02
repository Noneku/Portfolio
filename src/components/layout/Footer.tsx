import { useTranslation } from 'react-i18next'
import { Container } from '../ui'
import { socialLinks } from '../../data/constants'

/**
 * Footer component
 * Contains social links and copyright information
 */
export const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-dark-700 bg-dark-900 py-12">
      <Container>
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Credits */}
          <p className="text-center text-sm text-gray-400 md:text-left">
            {t('footer.credits')}
          </p>

          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-neon-green"
                aria-label={link.name}
              >
                <span className="text-sm font-medium">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}
