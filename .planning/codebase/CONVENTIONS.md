# Coding Conventions

**Analysis Date:** 2026-01-25

## Naming Patterns

**Files:**
- React components: PascalCase for filenames (e.g., `Header.jsx`, `Contact.jsx`, `Team.jsx`)
- Exception: Some components use camelCase (e.g., `header.jsx`, `navigation.jsx`, `about.jsx`, `contact.jsx`, `gallery.jsx`, `industries.jsx`, `services.jsx`, `testimonials.jsx`)
- Utilities: camelCase (e.g., `emailkey.js`, `serviceWorker.js`, `setupTests.js`)
- Entry points: Lowercase (e.g., `index.js`, `index.css`)

**Functions:**
- Component functions: PascalCase (e.g., `const Header = (props) => {}`)
- Exported arrow functions: Named exports with PascalCase (e.g., `export const Navigation = (props) => {}`)
- Utility functions: camelCase (e.g., `handleChange`, `handleSubmit`, `clearState`)
- Event handlers: camelCase prefixed with `handle` (e.g., `handleChange`, `handleSubmit`)

**Variables:**
- State variables: camelCase (e.g., `landingPageData`, `initialState`)
- Constants: camelCase (e.g., `SERVICE_ID`, `TEMPLATE_ID`, `USER_ID` - uppercase when destructured from env)
- Object destructuring: camelCase with same naming (e.g., `const { name, value } = e.target`)
- Array/props drilling: camelCase (e.g., `props.data`)

**Types:**
- No TypeScript usage detected. JSDoc comments minimal.
- Props accepted as `props` parameter in functional components

## Code Style

**Formatting:**
- No `.prettierrc` or formatting config detected
- Indentation: 2 spaces observed in components
- Line length: No strict enforcement detected
- Semicolons: Used inconsistently (present in some files, absent in others)

**Linting:**
- ESLint configuration: `"extends": "react-app"` in `package.json`
- No `.eslintrc` file present - using Create React App defaults
- Default CRA eslint rules apply

## Import Organization

**Order:**
1. React imports (hooks like `useState`, `useEffect`)
2. Third-party packages (e.g., `emailjs-com`, `smooth-scroll`)
3. Local components (relative imports from `./components/`)
4. Data/config files (e.g., `./data/data.json`, `./emailkey`)
5. CSS/stylesheets (e.g., `./index.css`)

**Path Aliases:**
- No path aliases configured
- Uses relative paths consistently (e.g., `'./components/header'`, `'../emailkey'`)

**Example from `App.jsx`:**
```javascript
import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { Industries } from './components/industries'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'
```

## Error Handling

**Patterns:**
- Minimal error handling observed
- Callback chains with `.then()/.catch()` for promises (e.g., in `emailjs.send()`)
- Errors logged to console without structured error handling
- No try-catch blocks in components
- Basic error callbacks with generic messages

**Example from `contact.jsx`:**
```javascript
emailjs.send(SERVICE_ID, TEMPLATE_ID, {...}, USER_ID)
  .then((response) => {
    clearState();
    console.log('SUCCESS!', response.status, response.text);
  }, (err) => {
    console.log('FAILED...', err);
  });
```

**Error handling in service worker (`serviceWorker.js`):**
```javascript
.catch(error => {
  console.error('Error during service worker registration:', error);
})
```

## Logging

**Framework:** `console` object (no logging library)

**Patterns:**
- `console.log()` for informational messages (e.g., in `contact.jsx`)
- `console.error()` for error conditions (e.g., in `serviceWorker.js`)
- Basic logging without structured formatting
- No log levels or log severity management

**Observed calls:**
- `console.log('SUCCESS!', response.status, response.text)`
- `console.log('FAILED...', err)`
- `console.error('Error during service worker registration:', error)`

## Comments

**When to Comment:**
- Block comments for explaining PWA behavior in `serviceWorker.js`
- Inline comments for clarifying intent (sparse)
- Commented-out sections for disabled features (e.g., Testimonials, Team components in `App.jsx`)

**JSDoc/TSDoc:**
- No JSDoc/TSDoc usage detected
- No type documentation in code
- Comments are informational only (not type-annotated)

**Example of commented code:**
```javascript
// import { Testimonials } from './components/testimonials'
// import { Team } from './components/Team'
```

## Function Design

**Size:**
- Mostly small, single-responsibility functions
- Component functions 10-50 lines typical
- Utility functions under 20 lines

**Parameters:**
- Components receive single `props` parameter
- Destructuring from props inline: `const { name, value } = e.target`
- Object spread for state updates: `setState((prevState) => ({ ...prevState, [name]: value }))`

**Return Values:**
- Components return JSX
- Event handlers return void (side effects)
- No explicit return values from event handlers
- State setters called for side effects

**Example from `contact.jsx`:**
```javascript
const handleChange = (e) => {
  const { name, value } = e.target
  setState((prevState) => ({ ...prevState, [name]: value }))
}
```

## Module Design

**Exports:**
- Named exports for all components: `export const Navigation = (props) => {}`
- Default export for App: `export default App`
- Default export for utilities: `export default { USER_ID, TEMPLATE_ID, SERVICE_ID }`

**Barrel Files:**
- No barrel files observed
- Direct imports from component files (e.g., `from './components/header'`)

## Component Structure

**Pattern:** Functional components with React hooks (useState, useEffect)

**Example structure from `App.jsx`:**
```javascript
const App = () => {
  const [landingPageData, setLandingPageData] = useState({})

  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      {/* component tree */}
    </div>
  )
}
```

**Props drilling:** Data passed via props through component tree

**Conditional rendering:** Ternary operator for loading states
```javascript
{props.data ? props.data.title : 'Loading'}
```

---

*Convention analysis: 2026-01-25*
