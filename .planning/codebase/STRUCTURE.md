# Codebase Structure

**Analysis Date:** 2026-01-25

## Directory Layout

```
stem-connect/
├── public/                 # Static assets served by server
│   ├── css/               # Third-party stylesheets (Bootstrap, etc.)
│   ├── js/                # Third-party JavaScript libraries
│   ├── fonts/             # Font files
│   ├── img/               # Images and portfolio screenshots
│   ├── index.html         # HTML entry point
│   └── robots.txt         # SEO robots configuration
├── src/                   # React source code
│   ├── components/        # Reusable React components
│   ├── data/              # JSON data files
│   ├── App.jsx            # Root app component
│   ├── App.css            # Root component styles
│   ├── index.js           # React DOM entry point
│   ├── index.css          # Global styles
│   ├── emailkey.js        # Email service credentials config
│   ├── serviceWorker.js   # PWA service worker (disabled)
│   ├── setupTests.js      # Test configuration
│   └── logo.svg           # React logo asset
├── .planning/             # GSD planning documents
├── package.json           # npm dependencies and scripts
├── package-lock.json      # Locked npm versions
├── yarn.lock              # Yarn lock file (alternative package manager)
├── README.md              # Project documentation
└── LICENSE                # MIT License
```

## Directory Purposes

**public/:**
- Purpose: Static files served directly by web server without processing
- Contains: HTML, CSS libraries, JavaScript assets, images, fonts
- Key files: `index.html` (HTML template), `css/` (Bootstrap and custom stylesheets)

**src/:**
- Purpose: React application source code
- Contains: Components, entry points, styling, configuration
- Key files: `App.jsx` (root component), `index.js` (React entry point)

**src/components/:**
- Purpose: Page section components for landing page
- Contains: 11 React functional components (navigation, header, services, etc.)
- Key files: `navigation.jsx`, `header.jsx`, `contact.jsx`

**src/data/:**
- Purpose: Static JSON configuration for page content
- Contains: Content text, service descriptions, industry categories
- Key files: `data.json` (8.8 KB JSON file with all page data)

**.planning/:**
- Purpose: GSD codebase mapping and planning documents
- Contains: ARCHITECTURE.md, STRUCTURE.md, CONVENTIONS.md, TESTING.md, CONCERNS.md

## Key File Locations

**Entry Points:**
- `public/index.html`: HTML root with id="root" div for React mount
- `src/index.js`: React DOM render call, mounts App to root element
- `src/App.jsx`: Root React component, loads data and composes page sections

**Configuration:**
- `package.json`: Dependencies (React 17, react-scripts, emailjs, testing libraries)
- `src/emailkey.js`: Stores EmailJS credentials from environment variables
- `.gitignore`: Excludes node_modules, build artifacts, .env files

**Core Logic:**
- `src/App.jsx`: App-level state, data loading, component composition, smooth scroll setup
- `src/components/contact.jsx`: Form state management, email submission via emailjs
- `src/data/data.json`: All content for Header, About, Services, Industries sections

**Testing:**
- `src/setupTests.js`: Jest configuration for test environment
- No test files present (testing not yet implemented)

## Naming Conventions

**Files:**
- Components: PascalCase with .jsx extension (Navigation.jsx, Header.jsx) - NOTE: Some files use lowercase (about.jsx, contact.jsx) inconsistently
- Utilities/Config: camelCase with .js extension (emailkey.js, serviceWorker.js)
- Styles: Component name + .css (App.css)
- Data: Descriptive camelCase (data.json)

**Directories:**
- Feature directories: lowercase plural (components, data)
- Subdirectories in public: lowercase plural (css, js, fonts, img)

**Exports:**
- Named exports: PascalCase for component functions (`export const Navigation = ...`)
- Default exports: Used sparingly (App component, emailkey object)

**Variables & Functions:**
- Functions: camelCase (handleChange, clearState, handleSubmit)
- State variables: camelCase (landingPageData, name, email)
- Constants: lowercase/camelCase (SERVICE_ID, TEMPLATE_ID from environment)

## Where to Add New Code

**New Feature (Page Section):**
- Primary code: `src/components/[SectionName].jsx` - Create functional component accepting props.data
- Add to App.jsx: Import component and add to JSX tree
- Add to data.json: Add corresponding data object under section key
- Tests: `src/components/[SectionName].test.jsx` (when testing is implemented)

**New Component/Module:**
- Reusable UI components: `src/components/[ComponentName].jsx`
- Utilities: `src/utils/[utility].js` (directory doesn't exist yet, create if needed)
- Styling: Component-level CSS in `src/[ComponentName].css` or use existing public/css/

**Utilities:**
- Shared helpers: Create `src/utils/` directory for reusable functions
- API/Service integrations: `src/services/[serviceName].js` (for non-component logic)
- Constants: `src/constants.js` or environment variables in .env

## Special Directories

**public/:**
- Purpose: Web server root - all files accessible via HTTP directly
- Generated: No (manually maintained)
- Committed: Yes (git tracked)
- Note: Includes Bootstrap, FontAwesome, and custom CSS/JS libraries

**public/img/:**
- Purpose: Portfolio/gallery images and page background images
- Generated: No (asset directory)
- Committed: Yes (images committed to repo)
- Subdirectories: portfolio/ (project screenshots), hero images, about/team images

**node_modules/:**
- Purpose: Installed npm packages
- Generated: Yes (created by npm install)
- Committed: No (.gitignored)

**build/:**
- Purpose: Production build output (generated by npm run build)
- Generated: Yes (by react-scripts build)
- Committed: No (.gitignored)

## Import Patterns

**Component Imports:**
```javascript
// ES6 named imports
import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Contact } from './components/contact'

// Default imports
import App from './App'
import JsonData from './data/data.json'
import keys from '../emailkey'

// Third-party libraries
import emailjs from 'emailjs-com'
import SmoothScroll from 'smooth-scroll'
```

**Export Patterns:**
- Named exports for components: `export const ComponentName = (props) => {...}`
- Default export for App: `export default App`
- No barrel files (index.js exports) in use

## Asset Organization

**Images:**
- Portfolio: `public/img/portfolio/[01-large.jpg, 01-small.jpg, ...]`
- Page images: `public/img/about.jpg`, `public/img/hero.jpg`, etc.
- Logo: `src/logo.svg`

**Stylesheets:**
- Global: `src/index.css`, `src/App.css`
- Third-party: `public/css/style.css`, `public/css/bootstrap.css`, etc.
- FontAwesome icons: CDN link in index.html

**Fonts:**
- Location: `public/fonts/`
- Referenced in: `public/css/style.css`
