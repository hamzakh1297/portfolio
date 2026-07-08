# Hamza Khalid — Portfolio

A Next.js (App Router) portfolio built from the CV, with a "dispatch manifest /
delivery route" visual theme, scroll animations, and full mobile responsiveness.
Styled with plain CSS (CSS Modules + global tokens) — no Tailwind or UI library.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Structure

```
app/
  layout.js       — fonts + global metadata
  globals.css      — design tokens, base styles, reveal animation
  page.js          — composes all sections
components/
  Hero.jsx         — intro + photo
  About.jsx        — profile summary + impact stats
  Experience.jsx    — animated "route timeline" (signature element)
  Skills.jsx        — skills & tools
  Education.jsx     — education + languages
  Footer.jsx         — contact
  Reveal.jsx         — scroll-triggered fade-in wrapper (IntersectionObserver)
```

## Notes

- Hero photo is loaded from the external URL you provided via `next/image`
  (domain whitelisted in `next.config.mjs`). Swap it for a local file in
  `public/` any time by dropping the image there and updating the `src` in
  `components/Hero.jsx`.
- Colors, type and spacing are all CSS variables in `app/globals.css` —
  change the palette there and it cascades everywhere.
- Animations respect `prefers-reduced-motion`.
