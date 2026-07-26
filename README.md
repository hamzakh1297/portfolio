# Hamza Khalid — Portfolio

A Next.js (App Router) portfolio built from the CV, with a "dispatch manifest /
delivery route" visual theme, scroll animations, a projects slider, and full
mobile responsiveness. Styled with plain CSS (CSS Modules + global tokens) —
no Tailwind or UI library.

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
  Hero.jsx          — intro + photo
  About.jsx          — profile summary + impact stats
  Experience.jsx     — animated "route timeline" (signature element)
  Projects.jsx        — projects slider with left/right nav icons
  Skills.jsx          — skills & tools
  Education.jsx       — education + languages
  Footer.jsx           — contact (with icons)
  Reveal.jsx           — scroll-triggered fade-in wrapper (IntersectionObserver)
```

## Notes

- Photos/screenshots are loaded from external URLs (i.ibb.co and naxotop.com)
  via `next/image`, with both domains whitelisted in `next.config.mjs`.
  Project thumbnails use `unoptimized` for reliability across formats/hosts —
  swap in local files under `public/` any time if you'd rather self-host them.
- Colors, type and spacing are all CSS variables in `app/globals.css` —
  change the palette there and it cascades everywhere.
- Animations respect `prefers-reduced-motion`.
