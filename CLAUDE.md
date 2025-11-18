# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 landing page for Legal Excelencia, a law firm website. The application is built with TypeScript, React, and styled with Tailwind CSS. It features a contact form integrated with Mailgun for email handling.

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Architecture

### App Router Structure
- **App Router**: Uses Next.js 14 App Router (`src/app/`)
- **Pages API**: Contains legacy Pages API routes in `src/pages/api/` for email handling

### Key Components
- `src/app/page.tsx` - Main landing page that orchestrates all sections
- `src/app/layout.tsx` - Root layout with metadata and global styles
- `src/components/ClientPage.tsx` - Client-focused content section with CTA
- `src/components/Emailer.tsx` - Contact form wrapper with embedded Google Maps
- `src/components/form.tsx` - Form component using Formik for state management
- `src/components/HeroSection.tsx` - Landing hero section
- `src/components/Services.tsx` - Services showcase
- `src/components/Team.tsx` - Team members display
- `src/components/About.tsx` - About section
- `src/components/Info.tsx` - Additional information section
- `src/components/Footer.tsx` - Site footer
- `src/components/Navbar.tsx` - Navigation bar
- `src/components/Disclaimer.tsx` - Legal disclaimer modal/component

### API Routes
- `src/pages/api/contact.ts` - Handles contact form submissions via Mailgun API

### Form Handling
- **Validation**: Uses Zod schemas (`src/utils/validations.tsx`) with zod-formik-adapter
- **State Management**: Formik for form state and validation
- **Notifications**: react-toastify for user feedback

### Constants
- `src/constants/index.tsx` - Contains:
  - Navigation items
  - Color scheme
  - Team member data
  - Testimonials data (currently unused)

## Environment Variables

Required environment variables (see `.env.template`):
- `MAILGUN_API_KEY` - Mailgun API key for sending emails
- `MAILGUN_DOMAIN` - Mailgun domain for email service

The contact form sends emails to: `legalexcelencia@gmail.com`

## Path Aliases

TypeScript path alias `@/*` maps to `./src/*` (configured in `tsconfig.json`)

## Styling

- **Framework**: Tailwind CSS
- **Global Styles**: `src/app/globals.css`
- **Toast Styles**: Imports `react-toastify/dist/ReactToastify.css` in layout

## Important Notes

- The application mixes App Router (newer) with Pages API routes (legacy) for the contact endpoint
- Google Maps iframe is embedded in the Emailer component (hidden on mobile)
- Team member LinkedIn and email links use placeholder URLs in constants
- Testimonials component exists but is commented out in the main page
- The app uses Google Fonts (Inter) loaded via Next.js font optimization
