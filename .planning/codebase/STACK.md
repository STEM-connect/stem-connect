# Technology Stack

**Analysis Date:** 2026-01-25

## Languages

**Primary:**
- JavaScript (ES6+) - Used throughout React application and components

**Secondary:**
- JSX - React component syntax for `src/components/*.jsx` and `src/App.jsx`
- CSS - Styling in `public/css/` and inline styles

## Runtime

**Environment:**
- Node.js - Runtime for package management and development server (via react-scripts)

**Package Manager:**
- npm - Primary package manager (lockfile present: `package-lock.json`)
- Yarn - Alternative package manager available (`yarn.lock` present)

## Frameworks

**Core:**
- React 17.0.1 - Frontend framework for UI components in `src/`
- react-dom 17.0.1 - DOM rendering for React in `src/index.js`

**Build/Dev:**
- react-scripts 4.0.2 - Create React App build tooling
  - Includes webpack, Babel, ESLint, and Jest configuration

**Testing:**
- @testing-library/react 9.3.2 - React component testing utilities
- @testing-library/jest-dom 4.2.4 - Custom Jest matchers for DOM
- @testing-library/user-event 7.1.2 - User interaction simulation

**UI & Animation:**
- smooth-scroll 16.1.3 - Smooth scrolling navigation (initialized in `src/App.jsx`)

## Key Dependencies

**Critical:**
- emailjs-com 2.6.4 - Email service integration for contact form
  - Used in `src/components/contact.jsx` for sending contact form submissions
  - Configuration via environment variables in `src/emailkey.js`

**Infrastructure:**
- nodemailer 6.6.3 - Node.js email client (included but not actively used in codebase)

## Configuration

**Environment:**
- Environment variables via `process.env.REACT_APP_*` pattern
- `.env` files supported (listed in `.gitignore` but not currently used)
- Required env vars:
  - `REACT_APP_USER_ID` - EmailJS user ID
  - `REACT_APP_TEMPLATE_ID` - EmailJS template ID
  - `REACT_APP_SERVICE_ID` - EmailJS service ID

**Build:**
- Create React App default configuration (no custom webpack config)
- ESLint configuration extends "react-app" preset in `package.json`
- Browser support configured in `package.json` browserslist:
  - Production: >0.2% market share, not dead, not op_mini
  - Development: Latest Chrome, Firefox, Safari versions

**Scripts:**
- `npm start` or `yarn start` - Development server with hot reload
- `npm run build` or `yarn build` - Production optimized build
- `npm test` or `yarn test` - Jest test runner in watch mode
- `npm run eject` - Exposes Create React App configuration (irreversible)

## Platform Requirements

**Development:**
- Node.js runtime (version not explicitly specified)
- npm or Yarn package manager
- Modern browser supporting ES6+ and React 17

**Production:**
- Static hosting (GitHub Pages via `_config.yml` Jekyll theme configuration)
- Web server serving built assets from `build/` directory
- HTTPS recommended for EmailJS integration (third-party API calls)

---

*Stack analysis: 2026-01-25*
