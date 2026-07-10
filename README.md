# Jaya's Portfolio — Mission Universe

Personal portfolio site. Built with **Vite + React + Tailwind CSS**.

Live at: _(add your Vercel/Netlify URL once deployed)_

## Stack

- Vite 5 · React 18
- Tailwind CSS 3
- Space Grotesk + Inter + JetBrains Mono
- Custom canvas star/orbit background · custom cursor · animated constellation SVG

## Sections

- Hero — animated terminal, rotating tech stack, live stats
- About — bio + focus grid (AI Agents · RAG · LLMs · Deep Learning)
- What I Orbit — focus areas mapped to shipped missions
- Missions — 3 shipped projects + 3 upcoming
- Trajectory — roles + achievements
- Skills — constellation map + category cards
- Contact — form + socials + availability

## Local dev

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
npm run preview  # preview production build
```

## Deploy

Any static host works. Easiest options:

- **Vercel**: `vercel` from the project root, or connect the repo
- **Netlify**: drop `dist/` after `npm run build`
- **GitHub Pages**: point at `dist/` after build

The resume PDF and project screenshots live in `public/` and are served as-is.
