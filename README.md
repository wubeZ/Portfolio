# Wubshet Zeleke portfolio

Source for [wubshetzeleke.vercel.app](https://wubshetzeleke.vercel.app). It's a single-page Next.js site. Projects and skills come from Sanity, and a contact form sends email through Gmail.

## Stack

- Next.js 13 (App Router), React 18 and TypeScript
- Tailwind CSS
- Sanity v3, with the Studio embedded at `/studio`
- Nodemailer for the contact form

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. The Sanity project ID and dataset live in `src/sanity/sanity.client.ts` and `sanity.config.ts`. Content reads are public, so the page renders without credentials.

The contact form needs these variables in `.env.local`:

| Variable | Value |
|---|---|
| `EMAIL` | The Gmail address that sends the message |
| `PASSWORD` | A [Gmail app password](https://support.google.com/accounts/answer/185833) for that address |

Without them, the form returns an error and the rest of the site still works.

## Editing content

Go to `/studio` and sign in with the Sanity account that owns project `vuhehstv`. There are two document types:

- `projects`: title, description, links, tech list, background image, and a `featured` flag. Featured projects show as large cards and the rest show under "Other Noteworthy Projects".
- `progLanguages`: the skill lists shown in the About section. Only the first document is used.

The site caches Sanity responses for 72 hours, so edits can take up to 72 hours to appear. Redeploy on Vercel to show them sooner.

## Project layout

```
src/app/page.tsx              Page that stacks the four sections
src/app/home/                 Home, About, Projects and Contact sections
src/app/components/           Navbar, Footer and project cards
src/app/api/emailSubmit/      POST endpoint for the contact form
src/app/studio/               Embedded Sanity Studio
src/sanity/                   Sanity client and GROQ queries
src/schemas/                  Sanity document schemas
src/lib/                      Shared types and social links
```

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
