# Quick Start Guide

Get your portfolio running in 3 simple steps!

## 1. Install Dependencies

```bash
npm install
```

This installs all required packages: React, TypeScript, Vite, TailwindCSS, Framer Motion, and i18next.

## 2. Start Development Server

```bash
npm run dev
```

Your portfolio will automatically open at `http://localhost:5173`

## 3. Customize Your Portfolio

### Update Basic Information

Edit `src/data/constants.ts`:

- Change social media links
- Update skill list

### Add Your Projects

Edit `src/data/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Your Project Title',
    description: 'What this project does',
    technologies: ['React', 'TypeScript', 'TailwindCSS'],
    github: 'https://github.com/yourname/repo',
    demo: 'https://your-demo.com',
    featured: true,
  },
  // Add more projects...
];
```

### Update Translations

**English** - `src/i18n/translations/en.json`:

```json
{
  "hero": {
    "name": "Your Name",
    "subtitle": "Your Title",
    "description": "Your description"
  }
}
```

**French** - `src/i18n/translations/fr.json`:

```json
{
  "hero": {
    "name": "Votre Nom",
    "subtitle": "Votre Titre",
    "description": "Votre description"
  }
}
```

### Update About Section

In `src/components/sections/AboutSection.tsx`, update the `highlights` array with your strengths.

## Available Commands

| Command              | Purpose                          |
| -------------------- | -------------------------------- |
| `npm run dev`        | Start development server         |
| `npm run build`      | Build for production             |
| `npm run preview`    | Preview production build locally |
| `npm run type-check` | Check TypeScript types           |
| `npm run lint`       | Run ESLint                       |

## File Organization Quick Reference

```
src/
├── components/         # All React components
│   ├── ui/            # Reusable components (Button, Badge, etc.)
│   ├── layout/        # Navbar, Footer
│   └── sections/      # Page sections (Hero, Projects, etc.)
├── data/              # Projects, skills, navigation
├── hooks/             # Custom React hooks
├── i18n/              # Language files (English & French)
├── types/             # TypeScript type definitions
└── utils/             # Utility functions
```

## Customization Checklist

- [ ] Update email in `Hero` section and `Contact` section
- [ ] Add your GitHub username to links
- [ ] Add your LinkedIn profile URL
- [ ] Add/remove projects in `projects.ts`
- [ ] Update skills in `constants.ts`
- [ ] Customize colors in `tailwind.config.js` (optional)
- [ ] Update translations in both `en.json` and `fr.json`
- [ ] Change "Gacem Nassim" to your name throughout
- [ ] Update navbar "GN" logo to your initials
- [ ] Add/remove highlight points in `AboutSection`

## Deployment

### Deploy to Netlify

1. Push to GitHub
2. Connect repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Deploy to Vercel

1. Push to GitHub
2. Import project to Vercel
3. Vercel auto-detects Vite setup
4. Deploy!

### Deploy to GitHub Pages

1. Update `package.json`:

```json
"homepage": "https://yourusername.github.io",
```

2. Install: `npm install gh-pages --save-dev`

3. Add deploy scripts:

```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

4. Run: `npm run deploy`

## Next Steps

1. ✅ Customize your information
2. ✅ Add your projects
3. ✅ Test locally with `npm run dev`
4. ✅ Build with `npm run build`
5. ✅ Deploy to your hosting platform

## Need Help?

- Check [Architecture Documentation](./ARCHITECTURE.md)
- See [Contributing Guidelines](./CONTRIBUTING.md)
- Read [Full README](./README.md)

---

**Happy building! 🚀**

Built with React, TypeScript, and TailwindCSS
