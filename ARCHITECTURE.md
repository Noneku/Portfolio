# Architecture Documentation

## Project Structure Overview

This document describes the architectural decisions and structure of the portfolio application.

## Directory Organization

```
src/
├── components/        # React components (presentational and container)
├── data/             # Static data, constants, and configuration
├── hooks/            # Custom React hooks
├── i18n/             # Internationalization setup and translations
├── types/            # TypeScript type definitions and interfaces
├── utils/            # Utility functions and helpers
├── App.tsx           # Root component
├── main.tsx          # Entry point
└── index.css         # Global styles
```

## Design Principles

### SOLID Principles in Frontend

#### Single Responsibility Principle (SRP)

Each component has one reason to change:

- **UI Components** (`Button`, `Badge`, `Container`) - focused on visual presentation
- **Section Components** - focused on specific content sections
- **Hooks** - focused on specific behavioral logic
- **Utilities** - focused on reusable functions

Example:

```typescript
// ✅ Good: Button only handles button presentation
export const Button = ({ variant, size, children, ...props }: ButtonProps) => {
  // Only button styling logic
};
```

#### Open/Closed Principle (OCP)

Components are open for extension but closed for modification:

- Using `className` prop for additional styling
- Using `variant` prop for different button types
- Using composition for complex components

Example:

```typescript
// Component is extensible via props without modification
<Button variant="primary" size="lg" className="custom-class" />
```

#### Interface Segregation Principle (ISP)

Components accept only the props they need:

```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}
```

#### Dependency Inversion

High-level modules don't depend on low-level modules; both depend on abstractions:

- Using i18n for text (abstracts language logic)
- Using hooks for state concerns
- Using data constants instead of hardcoded values

### DRY (Don't Repeat Yourself)

- Reusable components (`Button`, `Container`, `Section`)
- Centralized data (`constants.ts`, `projects.ts`)
- Custom hooks for common logic (`useInView`, `useScrollPosition`)
- Shared utilities (`debounce`, `throttle`)

## Component Hierarchy

### UI Components (Reusable)

Located in `components/ui/`:

- **Button**: Primary, secondary, ghost variants with size options
- **Container**: Max-width wrapper with responsive padding
- **Badge**: Technology tag display
- **Section**: Section wrapper with consistent heading structure

### Layout Components

Located in `components/layout/`:

- **Navbar**: Sticky navigation with language switcher
- **Footer**: Copyright and social links

### Section Components

Located in `components/sections/`:

- **HeroSection**: Full-screen introduction
- **ProjectsSection**: Project grid with filtering
- **AboutSection**: Developer introduction
- **SkillsSection**: Technology stack organized by category
- **ContactSection**: Social links and CTA

## Data Structure

### Type System

All data structures are strictly typed in `types/index.ts`:

```typescript
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo?: string;
  featured?: boolean;
}
```

### Data Management

- `data/projects.ts`: Project list with helper functions
- `data/constants.ts`: Navigation links, skills, social links
- Configuration centralized for easy maintenance

## Styling Architecture

### TailwindCSS + Custom Theme

- **Custom colors**: Dark theme with neon green accent
- **Responsive utilities**: Mobile-first approach
- **Custom animations**: Fade-in, slide-up effects
- **Component variants**: Encapsulated within component files

## State Management

### Local State Only

This simple portfolio uses only React's `useState` and component state:

- Navbar mobile menu state
- Language selection from localStorage
- Scroll position detection

No complex state management library needed for this use case.

## Hooks Strategy

### Custom Hooks

- **useInView**: Detects when element enters viewport (for scroll animations)
- **useScrollPosition**: Detects scroll for navbar visibility

### Third-party Hooks

- **useTranslation**: From react-i18next for multilingual support

## Performance Optimizations

### Code Splitting

- Each section is a separate component (natural code splitting with Vite)

### Animation Performance

- Framer Motion with optimized animations
- `useReducedMotion` consideration for accessibility

### Rendering Optimization

- Functional components with proper dependency arrays
- Intersection Observer for lazy animation triggers

### Bundle Optimization

- Minimal dependencies
- Tree-shaking friendly structure
- CSS purging with Tailwind

## Internationalization (i18n)

### Structure

```
i18n/
├── config.ts              # i18next configuration
└── translations/
    ├── en.json           # English
    └── fr.json           # French
```

### Implementation

- i18next for configuration
- react-i18next for React integration
- LocalStorage for persistence
- Language switch in navbar

## Type Safety

### TypeScript Configuration

- Strict mode enabled
- No `any` types allowed
- Proper React component typing
- Interface-based prop definitions

Example:

```typescript
interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}
```

## Code Quality Standards

### Comments

- Explain _why_, not _what_
- Document complex logic
- JSDoc comments on exported items

```typescript
/**
 * Hook to detect if element is in viewport (for scroll animations)
 * Triggers Intersection Observer for performance
 */
export const useInView = (ref: React.RefObject<HTMLDivElement>): boolean => {
  // Implementation
};
```

### Naming Conventions

- Components: PascalCase
- Files: PascalCase for components, camelCase for utilities/hooks
- Functions: camelCase
- Constants: UPPER_SNAKE_CASE or camelCase
- Types/Interfaces: PascalCase

## Scalability Considerations

### Future Improvements

1. **State Management**: If complexity grows, consider Zustand or Context API
2. **Form Handling**: Add React Hook Form for contact forms
3. **API Integration**: Create `services/` directory for API calls
4. **Testing**: Add unit tests with Vitest and component tests with Vitest + React Testing Library
5. **E2E Testing**: Add Playwright for end-to-end tests

### Extension Points

- New sections: Create in `components/sections/`
- New UI components: Create in `components/ui/`
- New hooks: Create in `hooks/`
- New utilities: Add to `utils/`
- New translations: Add key-value pairs to JSON files

## Build & Deployment

### Production Build

```bash
npm run build
```

- TypeScript compilation
- Vite bundling
- Code minification
- CSS optimization

### Deployment

- Static file deployment to hosting (Netlify, Vercel, GitHub Pages)
- No backend required
- Fast initial load with Vite

## Summary

This architecture prioritizes:

- **Clarity**: Clear file structure and naming
- **Maintainability**: Modular, focused components
- **Scalability**: Easy to add new sections/features
- **Performance**: Optimized bundle and rendering
- **Type Safety**: Full TypeScript coverage
- **Code Quality**: Clean, well-documented code

The structure can evolve as requirements grow while maintaining these core principles.
