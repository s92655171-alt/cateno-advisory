# CATENO Cloud CMS

The Next.js app includes `/admin`, Supabase Auth email/password sign-in, and a
Supabase Postgres JSONB store for editable website content.

## Setup
1. Create a Supabase project.
2. Run `../supabase/schema.sql` in Supabase SQL Editor.
3. Enable Email auth and create an admin user in Authentication → Users.
4. Copy `.env.example` to `.env.local` and set:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY` (server only; never expose to browser)
   - `CATENO_ADMIN_EMAILS` (comma-separated admin email allowlist)

## Run
```bash
npm install
npm run dev
```
Open `http://localhost:3000/admin`.

## Deploy
Deploy the `nextjs` folder as the Vercel project root. Add all four environment
variables in Vercel project settings and redeploy.

## How it works
The admin panel verifies the Supabase Auth access token on the server and checks
the email against `CATENO_ADMIN_EMAILS`. Only then does the server use its
service-role key to read/write `site_content`. The public site reads content
through `/api/site-content`; if Supabase is not configured it falls back to
`public/content.json`.

## Scope
The visual editor currently covers homepage text, industries and contact email.
Advanced JSON mode allows editing the full content object. The current legacy
renderer still hardcodes some service-card copy and page layout; those should be
moved into the content schema in a later CMS expansion. This is a deployable
integration scaffold, not a live hosted CMS until Supabase is configured and
the project is deployed. Use a unique strong admin password and enable MFA.
