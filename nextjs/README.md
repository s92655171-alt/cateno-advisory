# CATENO ADVISORY — Next.js starter

This is a migration-ready Next.js shell around the existing CATENO page renderer. It keeps the current premium visual system and routes contact-form submissions to a server-side API. The existing hash-based navigation is retained temporarily; a later pass should convert each section to a dedicated Next.js route.

## Setup

1. Install Node.js 20.9+ and npm.
2. Copy `.env.example` to `.env.local`.
3. Add a real Resend API key, a confirmed destination inbox, and a sender address on a domain verified in Resend.
4. Run `npm install`, then `npm run dev`.
5. Open http://localhost:3000.

The API route is `app/api/contact/route.ts`. It validates input and consent, checks a honeypot, and sends the enquiry through Resend. For production, add rate limiting (e.g. an edge/WAF rule), monitoring, and confirm the privacy notice matches the actual hosting and mail-provider setup.

No real company email or sender domain has been invented. The `.env.example` values are placeholders and must be replaced before the form can send.

## Content updates

The public site reads optional overrides from `public/content.json`. The local authoring utility is at the project root (`../admin.html`). Edit content there, export `content.json`, and replace `nextjs/public/content.json`. Rebuild/redeploy after updating. The local editor is not an authenticated online CMS and must not be exposed publicly.


## Cloud CMS
See [README-CMS.md](./README-CMS.md) for Supabase setup and `/admin` usage.
