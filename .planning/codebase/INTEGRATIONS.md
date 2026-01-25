# External Integrations

**Analysis Date:** 2026-01-25

## APIs & External Services

**Email Service:**
- EmailJS (emailjs-com) - Email delivery service for contact form
  - SDK/Client: `emailjs-com` v2.6.4
  - Implementation: Imported in `src/components/contact.jsx`
  - Auth: Three credentials required:
    - `REACT_APP_SERVICE_ID` - EmailJS service identifier
    - `REACT_APP_TEMPLATE_ID` - Email template identifier
    - `REACT_APP_USER_ID` - User account identifier
  - Usage: `emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)` called on form submit in `src/components/contact.jsx` line 24
  - Endpoint: Contact form data sent to configured EmailJS template
  - Response handling: Success/error logged to console

## Data Storage

**Databases:**
- None detected - Application is frontend-only

**File Storage:**
- Local filesystem only - Static assets served from `public/` directory
- Images: `public/img/`
- CSS: `public/css/`
- Fonts: `public/fonts/`
- JavaScript: `public/js/`

**Caching:**
- Service Worker support available (registered in `src/serviceWorker.js`)
- Currently unregistered (offline functionality not enabled)
- Service worker can be enabled by changing `serviceWorker.unregister()` to `register()` in `src/index.js`

## Authentication & Identity

**Auth Provider:**
- None - Application is public landing page with no user authentication
- EmailJS integration uses service credentials (not user authentication)

## Monitoring & Observability

**Error Tracking:**
- Not detected - No error tracking service integrated

**Logs:**
- Console logging only:
  - Email submission success logged to console in `src/components/contact.jsx` line 27
  - Email submission errors logged to console in `src/components/contact.jsx` line 29

## CI/CD & Deployment

**Hosting:**
- GitHub Pages (configured via `_config.yml` with Jekyll theme)
- Static site deployment from `build/` directory

**CI Pipeline:**
- Not detected - No GitHub Actions or other CI service configured

## Environment Configuration

**Required env vars:**
- `REACT_APP_USER_ID` - EmailJS user account ID
- `REACT_APP_TEMPLATE_ID` - EmailJS email template ID
- `REACT_APP_SERVICE_ID` - EmailJS email service ID

**Optional env vars:**
- None detected

**Secrets location:**
- Environment variables stored in `.env` file (template file should be created but not committed)
- `.env` listed in `.gitignore` - secrets should not be committed
- Development: Create `.env.local` for local development
- Production: Set environment variables in GitHub Pages build settings or hosting platform

**Important:** EmailJS credentials should not be committed to git repository. Store in `.env.local` during development and configure via hosting platform environment variables for production.

## Webhooks & Callbacks

**Incoming:**
- None detected

**Outgoing:**
- EmailJS email submission from contact form (`src/components/contact.jsx`)
  - Triggered on form submit
  - Payload: `{fullname, email, phone, message}`
  - Response: Success/error callback handled in-component

## External CDNs & Resources

**Fonts:**
- Google Fonts linked in `public/index.html`:
  - "Open Sans" (weights: 300, 400, 600, 700)
  - "Lato" (weights: 400, 700)
  - "Raleway" (weights: 300, 400, 500, 600, 700, 800, 900)

**Icon Library:**
- Font Awesome 4 - CSS framework loaded in `public/index.html` and `public/css/`
  - Used for service icons and social media links throughout components

**CSS Framework:**
- Bootstrap (custom CSS in `public/css/bootstrap.css`)
- Nivo Lightbox gallery plugin (`public/css/nivo-lightbox/`)

---

*Integration audit: 2026-01-25*
