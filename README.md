# Ride Norfolk 🚲

The go-to source for all things bicycling in Norfolk, Nebraska. Built with [Astro](https://astro.build) as a fast, mostly-static site, ready to deploy on Cloudflare Pages.

**Live domain (planned):** [ridenorfolk.bike](https://ridenorfolk.bike)
**Brand & voice:** see [`BRAND_GUIDE.md`](./BRAND_GUIDE.md)

---

## Run it locally

You'll need [Node.js](https://nodejs.org) 18+ (tested on 22).

```bash
npm install       # first time only
npm run dev        # start the dev server → http://localhost:4321
```

Other commands:

```bash
npm run build      # production build → ./dist
npm run preview    # preview the production build locally
```

## Project structure

```
src/
  data/            ← EDIT THESE to update content
    site.js        ← contact info, Strava URL, Kit form action, nav
    rides.js       ← the three regular rides (Chipotle, Full Moon, Weekend)
    events.js      ← upcoming events / calendar (update weekly)
  components/       ← reusable pieces (Header, Footer, Logo, cards, forms)
  layouts/Base.astro
  pages/            ← one file per page (index, rides, events, about, safety, contact, 404)
  styles/global.css ← design tokens (brand colors, fonts) + base styles
public/             ← favicon, robots.txt, _redirects
```

**Updating content:** most edits happen in `src/data/`. To change the weekly ride details, edit `rides.js`. To refresh the calendar, edit `events.js` (dates are `YYYY-MM-DD`; past events drop off automatically). Site-wide links and contact info live in `site.js`.

## Deploying to Cloudflare Pages

1. Push this folder to a Git repo (GitHub/GitLab).
2. In Cloudflare Pages → **Create project** → connect the repo.
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Add the custom domain `ridenorfolk.bike` in the Pages project settings.

`public/_redirects` is included for any future redirect rules.

## Newsletter (Kit)

The signup form lives in `src/components/NewsletterSignup.astro`. To connect it:

1. In Kit (ConvertKit), create a form and copy its **form action URL**.
2. Paste it into `kitFormAction` in `src/data/site.js`.

Until that's set, the form shows a friendly "email us to join" fallback — nothing breaks.

## Data & registration (Supabase) — future phase

The events calendar currently reads from `src/data/events.js`. When you're ready for
live event registration and stored newsletter content, point the events page at a
Supabase table and add a serverless function (Cloudflare Pages Functions) to handle
RSVP form posts. The `register` field on each event is already wired to render a
Register/RSVP button when a link is present.

## Notes

- Fonts (Barlow Semi Condensed + Inter) are self-hosted via `@fontsource`, so there are
  no external font requests — good for privacy and Cloudflare.
- The logo mark is inline SVG in `src/components/Logo.astro`; the favicon is `public/favicon.svg`.
