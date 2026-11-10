# CATENO ADVISORY — Premium European Prototype

A self-contained, multi-section corporate website prototype for CATENO ADVISORY GmbH.

## Run locally

Open `index.html` in a modern browser. The site uses classic JavaScript files and local CSS/assets; no package installation is required.

## Design direction

- Premium European consulting aesthetic
- Midnight navy and white alternating sections
- Architectural hero image stored locally in `assets/architecture-hero.jpg`
- Responsive service cards, approach timeline, global perspective and contact CTA
- English/German language toggle

## Important before publication

- Replace `info@example.com` in `js/config.js` with the company's confirmed public contact email.
- The contact form currently validates input and opens a prefilled email draft; it does not send messages to a server.
- Verify registered office and legal details in the current Handelsregister extract.
- Have Impressum and Datenschutzerklärung reviewed before publication.
- Add a real server-side form endpoint before collecting enquiries online.
- Confirm rights to the CATENO brand and logo before public commercial use.

## Project structure

- `index.html` — page shell and metadata
- `css/styles.css` — visual system and responsive styles
- `js/` — page content, translations, navigation and form behaviour
- `assets/` — favicon and local visual assets


## Premium European interior-page update (v4)

The About, service detail, Industries and Contact pages now use a consistent editorial layout:
- architectural image-led interior hero
- split-column introductions and section headers
- alternating white and midnight-navy content bands
- structured capability, service and industry grids
- redesigned contact layout with a two-column form on desktop
- responsive layouts for tablet and mobile

The existing EN/DE content model, hash navigation and no-dependency setup are preserved.

### Before public launch
- Replace `info@example.com` in `js/config.js` with the confirmed company email.
- Connect the contact form to a real mail endpoint or CRM; the current preview only prepares an email in the visitor's email app.
- Verify the registered business address and legal details before publishing Impressum.
- Review the privacy notice against the actual hosting, form and analytics setup.


## CATENO v5 — brand and deployment preparation

- Added a custom vector CATENO geometric-C logo and matching favicon. The logo is used in the header and footer.
- The static preview form now clearly falls back to a prefilled email draft; it no longer pretends that a message was sent.
- Added a Next.js migration starter in `nextjs/`, including an API route for real server-side form delivery through Resend.
- The Next.js starter reuses the existing page renderer and CSS as a transitional migration step.

### Run the static preview
Open `index.html` in a browser. For the local preview, the form opens a prefilled email draft.

### Run the Next.js version
1. Copy `.env.example` to `.env.local` and set `RESEND_API_KEY`, `CONTACT_TO`, and `CONTACT_FROM`.
2. Install dependencies with `npm install`.
3. Start with `npm run dev`.
4. The contact form posts to `/api/contact`; successful submission requires a verified sender domain in Resend.

The API route validates fields, checks consent and a honeypot field, and sends the enquiry server-side. Add production-grade rate limiting and monitoring before a high-traffic launch.

## Local content manager

Open `admin.html` in a browser to edit selected English/German homepage and About text, service names/descriptions, industry labels, and the public contact email. The editor stores draft changes in that browser's local storage. Click **Download content.json** to export them.

To apply the exported content to the site, replace both:
- `content.json`
- `nextjs/public/content.json`

with the downloaded file. The static preview and Next.js shell load these overrides at runtime. Then run and review the site locally before deploying. The admin editor is a local authoring utility, not a secured online CMS; do not publish `admin.html` or the `admin/` folder to the public website.

Some layout copy, legal wording, and page structure remain in source files and are not yet editable from this panel. Contact-form delivery also requires the email provider configuration described in `nextjs/README.md`.
