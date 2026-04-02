# Customization Checklist

Complete this checklist to personalize your portfolio!

## 🔧 Essential Configuration

### Personal Information

- [ ] Change your name from "Gacem Nassim" to your name
  - `src/components/sections/HeroSection.tsx` - Update hero.name
  - `src/components/layout/Navbar.tsx` - Update "GN" logo to your initials
  - `src/i18n/translations/en.json` - Update hero.name
  - `src/i18n/translations/fr.json` - Update hero.name

- [ ] Update email address
  - `src/data/constants.ts` - Update email in socialLinks
  - `src/components/sections/HeroSection.tsx` - Update hero CTA email
  - `src/i18n/translations/en.json` - Update contact.email
  - `src/i18n/translations/fr.json` - Update contact.email

### Contact Links

- [ ] Update GitHub URL in `src/data/constants.ts`
- [ ] Update LinkedIn URL in `src/data/constants.ts`
- [ ] Update LinkedIn in email if needed

## 📚 Portfolio Content

### Projects

- [ ] Add your projects to `src/data/projects.ts`
- [ ] Each project needs:
  - Unique `id`
  - `title` (your project name)
  - `description` (short summary)
  - `technologies` (array of tech used)
  - `github` (GitHub repository URL)
  - `demo` (live demo URL) - optional
  - `featured` (true/false) - shows up first

### Skills & Technologies

- [ ] Update skills in `src/data/constants.ts`
- [ ] Edit the `skills` array
- [ ] Categories: 'frontend', 'backend', 'tools'
- [ ] Add/remove based on your expertise

### About Section

- [ ] Edit highlights in `src/components/sections/AboutSection.tsx`
- [ ] Replace default highlights with your strengths
- [ ] About section text uses translations

## 🌍 Translations

### English (`src/i18n/translations/en.json`)

- [ ] Update `hero.name` - Your name
- [ ] Update `hero.subtitle` - Your title
- [ ] Update `hero.description` - Your description
- [ ] Update `about.description` - About you
- [ ] Review all other text
- [ ] Update contact section text

### French (`src/i18n/translations/fr.json`)

- [ ] Translate all English values to French
- [ ] Use professional tone
- [ ] Keep consistency with English version

## 🎨 Design Customization (Optional)

### Colors

Edit `tailwind.config.js` if you want different colors:

```javascript
extend: {
  colors: {
    dark: {
      900: '#0a0a0a',    // Background
      800: '#1a1a1a',
      700: '#2d2d2d',
    },
    neon: {
      green: '#10b981',       // Primary color
      'green-dark': '#059669', // Hover state
    },
  },
}
```

### Fonts

Update in `index.html`:

```html
<link
  href="https://fonts.googleapis.com/css2?family=YOUR-FONT:wght@400;500;600;700;800"
  rel="stylesheet"
/>
```

## 🚀 Setup & Deployment

### Local Development

- [ ] Run `npm install`
- [ ] Run `npm run dev`
- [ ] Test all sections
- [ ] Test language switcher
- [ ] Check responsive design on mobile

### Pre-Deployment Checklist

- [ ] Run `npm run type-check` - No TypeScript errors
- [ ] Run `npm run build` - Build succeeds
- [ ] Test production build: `npm run preview`
- [ ] All links work correctly
- [ ] Email link is correct
- [ ] Social links are correct
- [ ] Mobile menu works on small screens

### Deployment

Choose your platform:

#### Option 1: Netlify (Recommended - Easiest)

- [ ] Push code to GitHub
- [ ] Connect GitHub repo to Netlify
- [ ] Auto-deploys on each push

#### Option 2: Vercel

- [ ] Push code to GitHub
- [ ] Import project to Vercel
- [ ] Vercel detects Vite automatically

#### Option 3: GitHub Pages

- [ ] Run `npm run deploy`
- [ ] Site available at `yourusername.github.io`

#### Option 4: Any Static Host

- [ ] Run `npm run build`
- [ ] Upload contents of `dist/` folder
- [ ] Point domain to your hosting

## 📱 Testing

### Desktop

- [ ] Navbar appears on scroll
- [ ] Language switcher works
- [ ] Smooth scrolling works
- [ ] All sections visible
- [ ] Hover effects work

### Tablet

- [ ] Mobile menu works
- [ ] Text is readable
- [ ] Images scale properly
- [ ] Buttons are tap-friendly

### Mobile

- [ ] Hamburger menu works
- [ ] Menu can be closed
- [ ] All text is readable
- [ ] Touch interactions work
- [ ] No horizontal scroll

## 🎯 Meta Information

### SEO (Optional)

Edit `index.html`:

- [ ] Update `<title>` tag
- [ ] Update `<meta name="description">`
- [ ] Update `<meta name="keywords">`
- [ ] Update Open Graph meta tags

### Favicon

- [ ] Replace `/vite.svg` or provide your own favicon

## 📈 Analytics (Optional)

If you want to track visitors:

- [ ] Add Google Analytics ID to `.env`
- [ ] OR add Plausible/Vercel Analytics
- [ ] Update environment variables

## ✅ Final Review

Before sharing your portfolio:

- [ ] All personal info updated
- [ ] All projects added
- [ ] All skills listed
- [ ] All translations correct
- [ ] All links work
- [ ] Mobile responsive
- [ ] No console errors
- [ ] Fast page load
- [ ] Professional appearance

## 🎉 You're Done!

Your portfolio is ready to share! Email the link to:

- Recruiters
- Potential clients
- Network contacts
- Add to your resume/CV

---

**Need help?** Check the documentation:

- `QUICK_START.md` - Get started quickly
- `README.md` - Full documentation
- `ARCHITECTURE.md` - How the code is organized
