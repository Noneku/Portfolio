/**
 * Form validation utilities
 * Provides comprehensive validation for form fields
 */

/**
 * Validates email format using RFC 5322 simplified regex
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
};

/**
 * Validates name field
 * - Required and non-empty
 * - Min 2 characters, Max 100 characters
 * - No leading/trailing whitespace
 * - Only alphanumeric, spaces, and common name characters
 */
export const validateName = (
  name: string
): { valid: boolean; error?: string } => {
  const trimmed = name.trim();

  if (!trimmed) {
    return { valid: false, error: 'Name is required' };
  }

  if (trimmed.length < 2) {
    return { valid: false, error: 'Name must be at least 2 characters' };
  }

  if (trimmed.length > 100) {
    return { valid: false, error: 'Name must not exceed 100 characters' };
  }

  // Allow letters, numbers, spaces, hyphens, and apostrophes
  const nameRegex = /^[a-zA-Z0-9\s\-']+$/;
  if (!nameRegex.test(trimmed)) {
    return { valid: false, error: 'Name contains invalid characters' };
  }

  return { valid: true };
};

/**
 * Validates email field
 */
export const validateEmailField = (
  email: string
): { valid: boolean; error?: string } => {
  const trimmed = email.trim();

  if (!trimmed) {
    return { valid: false, error: 'Email is required' };
  }

  if (!validateEmail(trimmed)) {
    return { valid: false, error: 'Please enter a valid email address' };
  }

  return { valid: true };
};

/**
 * Validates message field
 * - Required and non-empty
 * - Min 10 characters, Max 5000 characters
 */
export const validateMessage = (
  message: string
): { valid: boolean; error?: string } => {
  const trimmed = message.trim();

  if (!trimmed) {
    return { valid: false, error: 'Message is required' };
  }

  if (trimmed.length < 10) {
    return { valid: false, error: 'Message must be at least 10 characters' };
  }

  if (trimmed.length > 5000) {
    return { valid: false, error: 'Message must not exceed 5000 characters' };
  }

  return { valid: true };
};

/**
 * Validates entire form
 */
export const validateForm = (data: {
  name: string;
  email: string;
  message: string;
}): {
  valid: boolean;
  errors: { name?: string; email?: string; message?: string };
} => {
  const errors: { name?: string; email?: string; message?: string } = {};

  const nameValidation = validateName(data.name);
  if (!nameValidation.valid) {
    errors.name = nameValidation.error;
  }

  const emailValidation = validateEmailField(data.email);
  if (!emailValidation.valid) {
    errors.email = emailValidation.error;
  }

  const messageValidation = validateMessage(data.message);
  if (!messageValidation.valid) {
    errors.message = messageValidation.error;
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
};
