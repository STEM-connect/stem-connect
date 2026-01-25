# Architecture

**Analysis Date:** 2026-01-25

## Pattern Overview

**Overall:** Single-Page Application (SPA) with Client-Side Rendering

**Key Characteristics:**
- React-based component composition pattern
- Prop-driven data flow from JSON configuration
- Client-side state management using React hooks
- No backend API (static data via JSON file)
- Third-party integration for email service

## Layers

**Presentation Layer:**
- Purpose: Render UI components and handle user interactions
- Location: `src/components/`
- Contains: React functional components (Navigation, Header, Services, etc.)
- Depends on: React, CSS frameworks, props data
- Used by: App root component

**State & Data Layer:**
- Purpose: Manage application state and provide data to components
- Location: `src/App.jsx`, `src/data/data.json`
- Contains: App-level state, JSON configuration file
- Depends on: React hooks (useState, useEffect)
- Used by: All presentation components via props

**Configuration Layer:**
- Purpose: Store API keys and external service credentials
- Location: `src/emailkey.js`
- Contains: EmailJS credentials from environment variables
- Depends on: Environment variables (REACT_APP_*)
- Used by: Contact component for form submission

**Styling Layer:**
- Purpose: Provide visual styling and layout
- Location: `src/App.css`, `src/index.css`, `public/css/`
- Contains: Global styles, component-specific styles
- Depends on: Bootstrap framework (via public assets)
- Used by: All components

**Service Worker Layer:**
- Purpose: Cache assets and enable offline functionality
- Location: `src/serviceWorker.js`
- Contains: PWA registration and lifecycle management
- Currently: Disabled (serviceWorker.unregister() in index.js)

## Data Flow

**Page Load Flow:**

1. `src/index.js` renders App component into DOM root
2. `src/App.jsx` initializes with useState, creates empty landingPageData object
3. useEffect hook triggers on component mount
4. JSON data from `src/data/data.json` is imported and loaded
5. setLandingPageData updates component state with full JSON
6. All child components receive data via props (Header, About, Services, etc.)
7. Components render conditionally: props.data ? data : 'loading'

**Scroll Navigation Flow:**

1. Smooth-scroll library initialized in App.jsx as module export
2. Navigation component renders hash-based anchor links (#header, #about, etc.)
3. Clicking link triggers smooth scroll to target section via data-id matching
4. Page-scroll class on links enables smooth-scroll behavior

**Contact Form Flow:**

1. Contact component manages form state with useState (name, email, phone, message)
2. handleChange updates state as user types
3. handleSubmit prevents default and calls emailjs.send()
4. EmailJS sends form via REACT_APP_SERVICE_ID template
5. Success response clears form state with clearState()
6. Response logged to console (no user feedback UI)

**State Management:**

- App-level state: landingPageData (single source of truth)
- Component-level state: Form fields in Contact component only
- No context providers, redux, or global state management
- Data immutability via JSON import (read-only data source)

## Key Abstractions

**Page Section Components:**
- Purpose: Represent logical page sections with consistent structure
- Examples: `src/components/header.jsx`, `src/components/about.jsx`, `src/components/services.jsx`, `src/components/gallery.jsx`
- Pattern: Functional components accepting props.data, returning JSX with Bootstrap grid layout

**Navigation Component:**
- Purpose: Unified nav bar with smooth scroll links
- Location: `src/components/navigation.jsx`
- Pattern: Fixed navbar with collapse toggle for mobile (Bootstrap navbar-collapse)
- Exports: Named export Navigation function component

**Contact Component:**
- Purpose: Contact form with email integration
- Location: `src/components/contact.jsx`
- Pattern: Local state for form fields, emailjs API for submission
- Dependencies: emailjs-com SDK, environment variables for credentials

**Data Schema:**
- Purpose: Define content structure for all page sections
- Location: `src/data/data.json`
- Pattern: Flat JSON object with section keys (Header, About, Services, etc.)
- Usage: Props passed to components for rendering dynamic content

## Entry Points

**Application Entry:**
- Location: `src/index.js`
- Triggers: Browser load of HTML file
- Responsibilities: Mount React app to DOM, register service worker

**Root Component:**
- Location: `src/App.jsx`
- Triggers: React rendering after index.js mount
- Responsibilities: Load JSON data, manage landingPageData state, compose all page sections, initialize smooth scroll

**HTML Entry:**
- Location: `public/index.html`
- Triggers: Initial page load
- Responsibilities: Provide root div, load external CSS/JS libraries (Bootstrap, FontAwesome)

## Error Handling

**Strategy:** Minimal error handling, graceful degradation

**Patterns:**
- Conditional rendering with fallback: `props.data ? content : 'loading'`
- Form submission error: Console logging only (`console.log('FAILED...', err)`)
- No try-catch blocks in components
- EmailJS errors not communicated to user

## Cross-Cutting Concerns

**Logging:** Console.log only in Contact component for email submission results (no structured logging)

**Validation:** HTML5 form validation attributes (required) on contact form inputs; no client-side validation logic

**Authentication:** None - public landing page with no auth layer

**Styling:** Bootstrap framework for layout/grid via public/css/, FontAwesome for icons via CDN, component-level CSS in src/App.css
