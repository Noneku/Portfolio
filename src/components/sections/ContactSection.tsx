import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Container, Section } from '../ui';
import { useState, useRef } from 'react';
import DOMPurify from 'dompurify';
import { validateForm } from '../../utils/validation';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  submit?: string;
}

/**
 * Contact section
 * Contact form with comprehensive security measures
 */
export const ContactSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const lastSubmitTimeRef = useRef<number>(0);
  const RATE_LIMIT_MS = 60000; // 60 seconds cooldown

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  /**
   * Sanitize user input using DOMPurify
   */
  const sanitizeInput = (input: string): string => {
    // Allow plain text only, strip all HTML/script tags
    const config = {
      ALLOWED_TAGS: [], // No HTML tags allowed
      ALLOWED_ATTR: [],
      KEEP_CONTENT: true,
    };
    return DOMPurify.sanitize(input, config);
  };

  /**
   * Handle form field changes with sanitization
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Sanitize input value
    const sanitizedValue = sanitizeInput(value);

    setFormData({
      ...formData,
      [name]: sanitizedValue,
    });

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  /**
   * Handle form submission with validation and rate limiting
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    // Check rate limiting
    const now = Date.now();
    const timeSinceLastSubmit = now - lastSubmitTimeRef.current;

    if (timeSinceLastSubmit < RATE_LIMIT_MS) {
      const remainingSeconds = Math.ceil(
        (RATE_LIMIT_MS - timeSinceLastSubmit) / 1000
      );
      setErrors({
        submit: `Please wait ${remainingSeconds} seconds before submitting again`,
      });
      return;
    }

    // Validate form data
    const validation = validateForm(formData);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    lastSubmitTimeRef.current = now;

    try {
      // In a real application, you would send this to your backend
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     name: sanitizeInput(formData.name),
      //     email: formData.email.toLowerCase(),
      //     message: sanitizeInput(formData.message),
      //   }),
      // });
      //
      // if (!response.ok) {
      //   throw new Error('Failed to send message');
      // }

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });

      // Reset success message after 3 seconds
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (error) {
      setErrors({
        submit:
          error instanceof Error
            ? error.message
            : 'Failed to send message. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Name Field */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('contact.form.name')}
                  maxLength={100}
                  required
                  className={`w-full rounded border bg-dark-900 px-4 py-3 text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 ${
                    errors.name
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                      : 'border-dark-700 focus:border-neon-green focus:ring-neon-green/20'
                  }`}
                  aria-invalid={!!errors.name}
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('contact.form.email')}
                  maxLength={254}
                  required
                  className={`w-full rounded border bg-dark-900 px-4 py-3 text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 ${
                    errors.email
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                      : 'border-dark-700 focus:border-neon-green focus:ring-neon-green/20'
                  }`}
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('contact.form.message')}
                  maxLength={5000}
                  required
                  rows={5}
                  className={`w-full rounded border bg-dark-900 px-4 py-3 text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 ${
                    errors.message
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                      : 'border-dark-700 focus:border-neon-green focus:ring-neon-green/20'
                  }`}
                  aria-invalid={!!errors.message}
                />
                <div className="mt-1 flex justify-between text-sm text-gray-400">
                  <span />
                  <span>{formData.message.length}/5000</span>
                </div>
                {errors.message && (
                  <p className="mt-2 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              {/* Submit Error */}
              {errors.submit && (
                <div className="rounded bg-red-500/20 p-4 text-center text-red-400 border border-red-500">
                  ⚠️ {errors.submit}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded bg-neon-green px-6 py-3 font-semibold text-dark-900 transition-all duration-300 hover:bg-neon-green-dark disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Envoi...' : t('contact.form.submit')}
              </button>

              {/* Success Message */}
              {submitSuccess && (
                <div className="rounded bg-neon-green/20 p-4 text-center text-neon-green border border-neon-green">
                  ✓ Message envoyé avec succès!
                </div>
              )}
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex justify-center gap-8"
          >
            <a
              href="https://github.com/Noneku"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative transition-transform duration-300 hover:scale-110"
              title="Visitez GitHub"
            >
              <div className="text-gray-400 transition-all duration-300 group-hover:text-neon-green">
                <svg
                  className="h-12 w-12 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <p className="mt-2 text-center text-sm text-gray-400 group-hover:text-neon-green transition-colors">
                GitHub
              </p>
            </a>
            <a
              href="https://linkedin.com/in/nassim-gacem"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative transition-transform duration-300 hover:scale-110"
              title="Visitez LinkedIn"
            >
              <div className="text-gray-400 transition-all duration-300 group-hover:text-neon-green">
                <svg
                  className="h-12 w-12 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.42-.103.249-.129.597-.129.946v5.439h-3.554s.05-8.836 0-9.754h3.554v1.391c.436-.671 1.217-1.627 2.966-1.627 2.164 0 3.787 1.413 3.787 4.453v5.537zM5.337 9.433c-1.144 0-1.915-.759-1.915-1.71 0-.956.77-1.71 1.951-1.71 1.18 0 1.914.754 1.939 1.71 0 .951-.759 1.71-1.975 1.71zm1.582 11.019h-3.154v-9.754h3.154v9.754zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </div>
              <p className="mt-2 text-center text-sm text-gray-400 group-hover:text-neon-green transition-colors">
                LinkedIn
              </p>
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};
