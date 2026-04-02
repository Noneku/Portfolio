# Contributing Guidelines

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/yourusername/Portfolio.git`
3. Create a feature branch: `git checkout -b feature/your-feature`
4. Install dependencies: `npm install`
5. Start dev server: `npm run dev`

## Making Changes

### Code Style

Follow the project's code style:

- Use TypeScript for all new code
- Use functional components (no class components)
- Follow SOLID principles
- Add JSDoc comments for complex logic
- Use PascalCase for components, camelCase for everything else

### Running Tests

```bash
npm run type-check  # Run TypeScript type checking
```

### Before Committing

1. Ensure TypeScript has no errors: `npm run type-check`
2. Follow the code style
3. Add comments where needed
4. Test your changes in the dev server

## Submitting Changes

1. Push to your fork
2. Create a Pull Request with a descriptive title
3. Describe what your changes do
4. Wait for review

## Coding Standards

### TypeScript

- Always use strict mode types
- Never use `any`
- Use `interface` for objects, `type` for unions
- Properly type all props

### React

- Use functional components only
- Hooks over class methods
- Extract complex logic to custom hooks
- Use composition over inheritance

### Components

- One component per file (unless closely related)
- Export as default if single export
- Add prop types with TypeScript
- Include JSDoc comments

Example:

```typescript
/**
 * Reusable Button component with multiple variants
 * Follows single responsibility principle
 */
export const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  ...props
}: ButtonProps) => {
  // Implementation
};
```

## Project Structure Conventions

- `src/components/ui/` - Reusable UI components
- `src/components/layout/` - Layout wrapper components
- `src/components/sections/` - Page sections
- `src/data/` - Static data and constants
- `src/hooks/` - Custom hooks
- `src/types/` - TypeScript types
- `src/utils/` - Utility functions
- `src/i18n/` - Internationalization

## Adding New Features

### Adding a New Section

1. Create component in `src/components/sections/`
2. Add to exports in `src/components/sections/index.ts`
3. Import and add to `App.tsx`
4. Add navigation link to `src/data/constants.ts`
5. Add translations to `src/i18n/translations/{en,fr}.json`

### Adding a New Project

Edit `src/data/projects.ts`:

```typescript
{
  id: 'unique-id',
  title: 'Project Title',
  description: 'Brief description',
  technologies: ['React', 'TypeScript'],
  github: 'https://github.com/...',
  demo: 'https://demo.com',
  featured: true,
}
```

### Adding a New Skill

Edit `src/data/constants.ts` - `skills` array:

```typescript
{ name: 'Skill Name', category: 'frontend' | 'backend' | 'tools' }
```

## Questions?

If you have questions, create an issue in the repository.

---

Thank you for contributing! 🚀
