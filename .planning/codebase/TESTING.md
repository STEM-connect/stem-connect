# Testing Patterns

**Analysis Date:** 2026-01-25

## Test Framework

**Runner:**
- Jest (integrated via react-scripts)
- Version: Implicit via `@testing-library/react ^9.3.2`
- Config: No explicit Jest configuration file (`jest.config.js` not present)
- Create React App default Jest config applies

**Assertion Library:**
- @testing-library/jest-dom ^4.2.4 - DOM matchers for Jest
- @testing-library/react ^9.3.2 - React component testing utilities
- @testing-library/user-event ^7.1.2 - User interaction simulation

**Run Commands:**
```bash
npm test                   # Run tests in watch mode (via react-scripts)
npm run build              # Build production bundle (may run tests)
npm start                  # Start development server
npm run eject              # Eject from Create React App
```

## Test File Organization

**Current Status:** No test files present in codebase

**Location:**
- Would follow Create React App convention: test files co-located with source files
- File patterns: `*.test.js`, `*.test.jsx`, `*.spec.js`, `*.spec.jsx`
- Search performed: No `.test.*` or `.spec.*` files found in `/src` directory

**Naming:**
- Convention would be component filename + `.test.jsx` suffix
- Example: `Header.jsx` → `Header.test.jsx`

**Structure:**
```
src/
├── components/
│   ├── Header.jsx
│   ├── Header.test.jsx        (would be here)
│   ├── Contact.jsx
│   └── Contact.test.jsx        (would be here)
├── App.jsx
├── App.test.js                 (would be here)
└── setupTests.js
```

## Test Setup

**Setup File:** `src/setupTests.js`

Current contents:
```javascript
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
```

This is automatically loaded before tests run and extends Jest matchers with DOM assertions.

## Test Structure Pattern

**Recommended structure (inferred from testing libraries installed):**

```javascript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Header } from './Header';

describe('Header Component', () => {
  it('renders header with title from props', () => {
    const mockData = { title: 'Test Title', paragraph: 'Test Para' };
    render(<Header data={mockData} />);

    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('displays loading text when no data provided', () => {
    render(<Header data={null} />);

    expect(screen.getByText('Loading')).toBeInTheDocument();
  });
});
```

## Mocking

**Framework:** Jest (built-in mocking)

**Patterns would include:**
- Module mocking for third-party packages (e.g., `emailjs-com`)
- Mock API responses for testing components in isolation
- Jest auto-mocking for node_modules

**Example mock structure (not implemented but recommended):**
```javascript
jest.mock('emailjs-com');

import emailjs from 'emailjs-com';

describe('Contact Form', () => {
  it('sends email on form submission', async () => {
    emailjs.send.mockResolvedValue({ status: 200 });

    // test code
  });
});
```

**What to Mock:**
- External services: `emailjs-com` package in `contact.jsx`
- Environment variables: `REACT_APP_USER_ID`, `REACT_APP_TEMPLATE_ID`, `REACT_APP_SERVICE_ID`
- API calls and fetch requests

**What NOT to Mock:**
- React itself
- @testing-library utilities
- Component logic being tested
- User interactions (use userEvent for real simulation)

## Fixtures and Factories

**Test Data:**
No test fixtures detected in codebase. Would typically be organized as:

```javascript
// fixtures/mockData.js
export const mockLandingPageData = {
  Header: {
    title: 'Digital Solution Catalysts',
    paragraph: 'Technology is the key...'
  },
  About: {
    paragraph: 'Stem Connect is a Toronto-based company...',
    Why: ['Certified Experts', 'Attention to Details'],
    Why2: ['Meeting Deadlines', 'Pricing']
  },
  Services: [
    {
      icon: 'fa fa-code',
      name: 'Web & Mobile Development',
      text: '...'
    }
  ]
};
```

**Location:**
- Would be in `src/__tests__/fixtures/` directory
- Or co-located: `src/components/__fixtures__/mockData.js`

## Coverage

**Requirements:** None enforced

**Configuration:**
- No code coverage thresholds configured in package.json
- No coverage configuration in Jest setup

**View Coverage:**
```bash
npm test -- --coverage
```

This would generate coverage reports showing:
- Statement coverage
- Branch coverage
- Function coverage
- Line coverage

## Test Types

**Unit Tests:**
- **Scope:** Individual components and utilities
- **Approach:** Test component rendering with different props using React Testing Library
- **Framework:** Jest + @testing-library/react
- **Example areas:**
  - `Contact.jsx`: Form state management, change handlers, form submission
  - `Header.jsx`: Conditional rendering (data vs loading state)
  - `Navigation.jsx`: Navigation links and mobile toggle behavior
  - `Services.jsx`: List rendering with array mapping and keys

**Integration Tests:**
- **Scope:** Not explicitly configured
- **Approach:** Would test component interactions and data flow
- **Example:** Testing full contact form flow from input → state update → email submission

**E2E Tests:**
- **Framework:** Not implemented
- **Status:** Not configured in codebase
- **Would use:** Cypress or Playwright if added

## Component Testing Needs

**Critical Components Needing Tests:**

1. **`Contact.jsx`** - Complex state management and async behavior
   - Form input handling with destructuring pattern
   - Form reset after submission
   - Email service integration (emailjs)
   - Error handling for failed submissions

2. **`App.jsx`** - Data initialization
   - useEffect loading JSON data
   - Props passing to child components
   - Dependency array handling

3. **`About.jsx`** - Array rendering with keys
   - Conditional rendering of list data
   - Proper key usage in `.map()` calls

4. **`Services.jsx`** - Dynamic list rendering
   - List rendering from props
   - Fallback loading state

5. **`Gallery.jsx`** - External links and accessibility
   - Image alt text present
   - rel="noreferrer" attribute on external links
   - Link targets work correctly

## Common Testing Patterns (To Implement)

**Async Testing:**
```javascript
// Testing async form submission with waitFor
it('clears form after successful submission', async () => {
  emailjs.send.mockResolvedValue({ status: 200 });
  const { getByText } = render(<Contact data={mockContactData} />);

  userEvent.click(getByText('Send Message'));

  await waitFor(() => {
    expect(getByDisplayValue('')).toBeInTheDocument();
  });
});
```

**Error Testing:**
```javascript
// Testing error handling in email submission
it('logs error when email submission fails', async () => {
  const consoleSpy = jest.spyOn(console, 'log');
  emailjs.send.mockRejectedValue(new Error('Network failed'));

  const { getByText } = render(<Contact data={mockContactData} />);
  userEvent.click(getByText('Send Message'));

  await waitFor(() => {
    expect(consoleSpy).toHaveBeenCalledWith('FAILED...', expect.any(Error));
  });

  consoleSpy.mockRestore();
});
```

**Conditional Rendering:**
```javascript
// Testing loading and data states
it('shows loading text when data is null', () => {
  render(<Header data={null} />);
  expect(screen.getByText('Loading')).toBeInTheDocument();
});

it('shows title when data is provided', () => {
  const mockData = { title: 'Test Title', paragraph: 'Test' };
  render(<Header data={mockData} />);
  expect(screen.getByText('Test Title')).toBeInTheDocument();
});
```

## Test Environment

**Node Environment:** Jest defaults to jsdom (DOM simulation)

**Browser APIs:** jsdom simulates browser environment for:
- DOM manipulation
- Event listeners
- Service Worker APIs (in `serviceWorker.js`)

---

*Testing analysis: 2026-01-25*
