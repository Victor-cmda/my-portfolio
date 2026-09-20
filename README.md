# Victor Somavilla — Backend .NET Portfolio

A backend-focused personal portfolio built with React, Vite, and Framer Motion. Inspired by the visual storytelling of product launch pages: expressive typography, a scroll-linked product scene, editorial project cards, and restrained motion.

## Local development

Use Node.js 22 or later and npm.

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite (the project uses the `/my-portfolio/` base path for GitHub Pages).

## Validation and production

```sh
npm run lint
npm run build
npm run preview
```

`npm run deploy` builds and publishes `dist` to the `gh-pages` branch. Deployment is a separate, explicit step.

## Editing content

- `src/constants/index.js`: projects, work history, verified brand assets, and contact details.
- `src/components/Impact.jsx`: the dashboard performance case study.
- `src/assets/brands/SOURCES.md`: official logo sources and content provenance.
- `src/components/`: overview, project gallery, expertise, about, experience, and contact sections.
- `src/index.css`: responsive layout, visual design, and motion fallbacks.

All visible content and metadata are in English. Project illustrations are original CSS interface concepts, not screenshots of client products. Professional experience, role progression, and education are updated from the owner’s supplied LinkedIn profile. The dashboard case study highlights its documented 46-minute to 26-second loading-time improvement. Frontend experience is presented as complementary to backend engineering.

## Interactions and accessibility

- Scroll-linked perspective and scale in the hero, plus section reveals.
- Native horizontal scrolling, keyboard-focusable project gallery, and previous/next controls.
- Native project dialogs with Escape dismissal and focus restoration.
- Expandable experience entries, mobile navigation, and a skip link.
- System reduced-motion support and a manual animation pause control in the footer.
- Responsive layouts for mobile, tablet, and desktop.

## Contact

[GitHub](https://github.com/Victor-cmda) · [LinkedIn](https://www.linkedin.com/in/victorhugosomavilla) · victor.somavilla@aol.com
