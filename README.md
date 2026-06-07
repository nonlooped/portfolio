# My Portfolio

Personal portfolio for [Looped](https://thelooped.tech/) — full-stack developer and digital artist. Built with Next.js and Tailwind CSS.

## Live Demo

<https://thelooped.tech/>

## Tech Stack

- Next.js 16 (App Router, Turbopack dev)
- React 19 & TypeScript
- Tailwind CSS 4
- Framer Motion
- next-themes (light / dark / system)

## Features

- Hero with experience stats, scroll parallax, and animated tech marquee
- Featured projects gallery loaded from `src/data/projects.json`
- Contact section with copy-to-clipboard email and Discord, plus social links
- Sticky navbar with section-aware active state and theme toggle
- Scroll progress indicator
- SEO: sitemap, robots.txt, Open Graph image, web manifest, and JSON-LD

## Project Structure

```
src/
├── app/              # Routes, metadata, and global styles
├── components/       # Page sections and UI primitives
├── data/             # Projects and tech stack content
├── lib/              # Site config and shared utilities
└── types/            # TypeScript definitions
```

## Getting Started

```bash
git clone https://github.com/nonlooped/portfolio.git
cd portfolio
npm install
npm run dev
```

Open <http://localhost:3000> in your browser.

### Environment Variables

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (defaults to `https://thelooped.tech`) |

## Build & Deploy

```bash
npm run build
npm start
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server with Turbopack |
| `npm run build` | Create a production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |
