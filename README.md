# 🚀 Farrukh Ali – Premium Developer Portfolio

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.38-ff69b4?logo=framer)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-latest-000000?logo=shadcnui)

**Live Demo:** [farrukhali.dev](https://farrukhali.dev)  
**GitHub Repo:** [github.com/itsfarrukhali/portfolio](https://github.com/itsfarrukhali/portfolio)

---

## ✨ The "Vercel" Look

A world‑class, dark‑themed portfolio built with **Next.js 16 App Router**, **Tailwind CSS**, and **shadcn/ui**. Every pixel is crafted to feel like a high‑end SaaS landing page — but it's 100% personal.

- Deep dark background (`#09090b`) with a subtle grid pattern that fades toward the top
- Glass‑morphism cards (`backdrop‑blur`, translucent borders)
- Cinematic motion powered by **Framer Motion**
- Smooth scroll, hiding navbar, and a custom cursor for that extra polish
- Fully responsive, SEO‑optimised, and performance‑tuned

---

## 🧠 Tech Stack

| Category      | Tools & Libraries                                             |
| ------------- | ------------------------------------------------------------- |
| Framework     | Next.js 16 (App Router)                                       |
| Language      | TypeScript                                                    |
| Styling       | Tailwind CSS, shadcn/ui, CSS custom properties (OKLCH colors) |
| Animations    | Framer Motion, AnimatePresence, spring physics                |
| Icons         | Lucide React, react‑simple‑icons (custom `TechIcon` system)   |
| Smooth Scroll | Lenis (optional, ready to drop in)                            |
| Data          | Static data files (`/data`) – no external CMS                 |
| Deployment    | Vercel (zero‑config)                                          |

---

## 📂 Folder Structure (simplified)

```
├── app/
│   ├── layout.tsx          # Root layout (Lenis, fonts, metadata)
│   ├── page.tsx            # Single‑page home (Hero + sections)
│   ├── globals.css         # Tailwind, shadcn, custom
├── components/
│   ├── ui/                 # Shadcn components (button, etc.)
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── Contact.tsx
│   ├── pages/              # Full page content for separate routes
│   └── shared/
│       ├── Navbar.tsx      # Floating glass nav, hide on scroll
│       ├── Footer.tsx      # Minimal futuristic footer
│       └── TechIcon.tsx    # Centralised icon renderer (brands + Lucide fallback)
├── data/
│   ├── experience.ts       # Career timeline entries
│   ├── projects.ts         # Portfolio projects
│   └── skills.ts           # Skill categories & simple‑icon slugs
└── public/
    ├── avatar.jpg
    └── og-image.png
```

---

## 🔥 Features

### 🖥️ Cinematic Hero

- Terminal badge ("System Ready: v2.0.4")
- Animated gradient text for your name
- Typewriter effect cycling through roles (`react‑type‑animation`)
- Floating background glow

### 📖 About – "The Story"

- Large photo with blur glow
- Personal bio, stats grid (2+ years, 10+ projects, etc.)
- Direct resume download button

### ⏳ Experience Timeline

- Vertical animated line (spring scale)
- Alternating glass cards with tech stack badges
- Smooth scroll‑triggered reveal

### 💼 Projects – "Selected Works"

- Bento‑style grid with category filter
- Hover gradient overlays and lift effect
- GitHub & live demo buttons using `<TechIcon>`
- GitHub Readme Stats badge (dynamic, unoptimised)

### 🧰 Skills – "Tech Arsenal"

- Magnetic 3D tilt cards (Framer Motion spring)
- Real brand icons from Simple Icons (inline SVGs)
- Fallback icons for missing brands (custom React components)

### ✉️ Contact – "Let's Build"

- Glassmorphism form with floating labels
- Contact info (email, location)
- Social links (GitHub, LinkedIn, X) – all via `TechIcon`

### 🌐 Navigation & Footer

- Floating navbar becomes glassy on scroll
- **Hides on scroll down, reappears on scroll up** (smart behaviour)
- Minimal footer with back‑to‑top button and social icons

### 🎨 Bonus Details

- Custom cursor (hidden on mobile)
- Terminal‑style loading screen (optional)
- Smooth scroll (Lenis ready)
- SEO metadata for every page
- Scrollbar styling and noise texture (removed, but easy to add)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/itsfarrukhali/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
npm install
# or
yarn
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 4. Customise data

Edit the files inside `/data`:

- `experience.ts` – your work history
- `projects.ts` – portfolio projects (add screenshots to `/public/projects/`)
- `skills.ts` – skill categories and Simple Icon slugs

### 5. Deploy to Vercel

```bash
vercel
```

No environment variables required. Everything is static / SSG‑ready.

---

## 🎨 Customisation Guide

### Icons

All brand icons are rendered by `TechIcon.tsx` using `react‑simple‑icons`.  
Missing icons (Zustand, Formik, etc.) have custom fallback SVGs – you can improve them anytime.

### Theme

The colour system is based on shadcn/ui's CSS variables (`--background`, `--foreground`, etc.) and forced to dark mode via the `dark` class on `<html>`.  
You can tweak the dark palette in `globals.css` (`:root` and `.dark` blocks).

### Animations

All animations use Framer Motion with `whileInView`, `useSpring`, and magnetic effects.  
You can easily adjust spring stiffness, damping, or delays.

---

## 📄 License

MIT – feel free to use this design as a template, but please credit if you publish something similar.

---

## 🤝 Credits

- [shadcn/ui](https://ui.shadcn.com) – component primitives
- [Tailwind CSS](https://tailwindcss.com) – utility‑first styling
- [Framer Motion](https://www.framer.com/motion/) – animations
- [Lucide](https://lucide.dev) – crisp icon set
- [Simple Icons](https://simpleicons.org) – brand SVGs
- [Vercel](https://vercel.com) – hosting & deployment

---

<div align="center">

Built with ❤️ by **Farrukh Ali** – always open to ambitious collaborations.

</div>
