# Environment Variables Guide

Environment variables allow you to configure your application without changing code.

## Setup

1. Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

2. Edit `.env.local` with your values (this file is not committed to Git)

## Available Variables

### Site Configuration

**VITE_SITE_TITLE**

- Default: `DevFolio - Gacem Nassim`
- Used in: HTML title, meta tags
- Example: `VITE_SITE_TITLE=John Doe - Frontend Developer`

**VITE_SITE_DESCRIPTION**

- Default: `A modern frontend developer portfolio`
- Used in: Meta description tag for SEO
- Example: `VITE_SITE_DESCRIPTION=John Doe's crafted web development portfolio`

**VITE_DEFAULT_LANGUAGE**

- Default: `en` (English)
- Options: `en` or `fr`
- Used in: Initial language selection
- Example: `VITE_DEFAULT_LANGUAGE=fr`

## Optional Variables

### Analytics

If you want to track visitors, add:

**Google Analytics**

```
VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

**Vercel Analytics** (automatic if deployed on Vercel)

## Usage in Code

Access variables in your code:

```typescript
// Anywhere in your app
const siteTitle = import.meta.env.VITE_SITE_TITLE
const sitDescription = import.meta.env.VITE_SITE_DESCRIPTION

// In components
<title>{import.meta.env.VITE_SITE_TITLE}</title>
```

## Production Deployment

Create environment variables on your hosting platform:

### Netlify

1. Go to Site settings → Build & deploy → Environment
2. Add variables under "Build environment variables"

### Vercel

1. Go to Settings → Environment Variables
2. Add variables for Production, Preview, Development

### GitHub Pages

Use `.env.local` on your local machine, values are built into the application

## Security Notes

⚠️ **Important**: Any variables prefixed with `VITE_` are exposed in the browser bundle.

**Do NOT store secrets** like API keys, tokens, or passwords in Vite environment variables.

For sensitive data:

- Keep them server-side only
- Use environment variables on your server/backend
- Call APIs from your backend, not directly from frontend

## Example `.env.local` File

```env
# Site Configuration
VITE_SITE_TITLE=Jane Doe - Frontend Developer
VITE_SITE_DESCRIPTION=A modern developer portfolio showcasing web development expertise
VITE_DEFAULT_LANGUAGE=en

# Analytics (optional)
VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

## Changing Environment Variables

After updating `.env.local`:

1. Restart the dev server (`npm run dev`)
2. Changes take effect immediately

## More Information

- [Vite Environment Variables Docs](https://vitejs.dev/guide/env-and-modes.html)
- See `vite-env.d.ts` for TypeScript definitions
