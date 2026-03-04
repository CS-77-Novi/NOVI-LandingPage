# NOVI — Attention-Aware Online Learning Platform

> AI-powered distraction detection for online classrooms. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

---

## 📁 Folder Structure

```
novi/
├── app/
│   ├── globals.css          ← Global styles, CSS variables, utility classes
│   ├── layout.tsx           ← Root layout (fonts, metadata)
│   └── page.tsx             ← Main page, assembles all sections
├── components/
│   ├── background/
│   │   ├── Starfield.tsx        ← Animated twinkling star background
│   │   └── ParticlesCanvas.tsx  ← Interactive floating particles (mouse-reactive)
│   ├── sections/
│   │   ├── Navbar.tsx           ← Fixed top nav, mobile menu
│   │   ├── Hero.tsx             ← Hero section with product mockup
│   │   ├── Impact.tsx           ← Stats/numbers section
│   │   ├── DashboardPreview.tsx ← Live engagement dashboard preview
│   │   ├── Features.tsx         ← Feature cards grid
│   │   ├── HowItWorks.tsx       ← Tabbed how-it-works
│   │   ├── UseCases.tsx         ← Use case chips/cards
│   │   ├── TeamOrbit.tsx        ← Team radial orbit layout + modals
│   │   ├── Testimonials.tsx     ← Teacher voice quotes
│   │   ├── FAQ.tsx              ← Accordion FAQ
│   │   ├── FinalCTA.tsx         ← Email signup CTA
│   │   └── Footer.tsx           ← Footer with links
│   └── ui/
│       ├── Button.tsx           ← Primary/ghost button (supports href)
│       ├── Loader.tsx           ← Page loading screen
│       ├── Modal.tsx            ← Accessible modal dialog
│       ├── Accordion.tsx        ← FAQ accordion
│       ├── Tabs.tsx             ← Animated tab switcher
│       ├── Toast.tsx            ← Success toast notification
│       ├── RevealOnScroll.tsx   ← Scroll-triggered reveal animation
│       └── SectionLabel.tsx     ← Section eyebrow label
├── lib/
│   ├── data.ts              ← All page data (features, team, FAQ, etc.)
│   └── utils.ts             ← cn() utility (clsx + tailwind-merge)
├── public/
│   └── team/                ← Add team member photos here
│       ├── priya-nair.jpg
│       ├── arjun-mehta.jpg
│       ├── sana-rashid.jpg
│       ├── rohan-das.jpg
│       ├── fatima-alkaabi.jpg
│       └── zain-malik.jpg
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🚀 Quick Start

### 1. Create or enter the project directory
```bash
cd novi
# OR scaffold fresh:
npx create-next-app@14 novi --typescript --tailwind --app --no-src-dir --import-alias "@/*"
# Then replace all files with the ones provided
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

Required packages (already in package.json):
```bash
npm install framer-motion lucide-react clsx tailwind-merge
```

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 4. Build for production
```bash
npm run build
npm run start
```

---

## 🖼️ Adding Team Photos

Place your team member photos in `/public/team/`:

| File | Person | Suggested alt |
|------|--------|---------------|
| `priya-nair.jpg` | Priya Nair | Professional headshot, neutral background |
| `arjun-mehta.jpg` | Arjun Mehta | Professional headshot, formal attire |
| `sana-rashid.jpg` | Sana Rashid | Professional headshot, studio background |
| `rohan-das.jpg` | Rohan Das | Professional headshot, neutral background |
| `fatima-alkaabi.jpg` | Fatima Al-Kaabi | Professional headshot, formal attire |
| `zain-malik.jpg` | Zain Malik | Professional headshot, neutral background |

If images are missing, the orbit nodes and cards will show initials (PN, AM, SR, etc.) as fallback.

---

## 🎨 Customization Guide

### Change Brand Colors
Edit `app/globals.css` — update these CSS variables:
```css
:root {
  /* Change accent colors here */
}
```
And update Tailwind `colors` in `tailwind.config.ts`:
```ts
colors: {
  purple: "#a855f7",   // ← your primary accent
  cyan: "#06b6d4",     // ← secondary accent
  blue: "#3b82f6",     // ← tertiary accent
  green: "#22c55e",    // ← success/focused color
  muted: "#64748b",    // ← muted text
}
```

### Update Text Content
All copy lives in `lib/data.ts`:
- `FEATURES` — feature card content
- `TEAM` — team member names, roles, bios
- `FAQS` — FAQ questions and answers
- `IMPACT_STATS` — impact numbers
- `TESTIMONIALS` — teacher quotes
- `USE_CASES` — use case chips
- `HOW_IT_WORKS` — how-it-works steps

### Update Team Info
In `lib/data.ts`, edit the `TEAM` array:
```ts
{ 
  initials: "PN",
  name: "Your Name",
  role: "Your Role",
  bio: "Your bio...",
  img: "/team/your-photo.jpg",
  socials: ["LinkedIn", "GitHub"],
  angle: 0,       // orbit angle (0-360)
  ring: "inner"   // "inner" or "outer"
}
```

### Change Fonts
Edit `app/layout.tsx` — swap out `Syne`, `DM_Mono`, `Inter` with any Google Font.
Then update CSS variable references in `globals.css` and `tailwind.config.ts`.

---

## ⚡ Performance Notes

- **Particles canvas**: Renders 55 particles. On low-end devices, reduce count in `ParticlesCanvas.tsx` (line ~`length: 55`).
- **Starfield**: 160 CSS-only star elements with `animation-delay`. Reduce to 80 for lower-end devices.
- **Framer Motion**: All animations use `useInView` with `once: true` — they only fire once per session.
- **Images**: Use Next.js `<Image>` with proper `width`/`height` for optimal LCP.
- **Fonts**: Loaded via `next/font/google` with `display: swap` — zero layout shift.

## ♿ Accessibility Notes

- All modals have `role="dialog"`, `aria-modal="true"`, focus trap via Escape key
- Accordion buttons have `aria-expanded` state
- Tabs have `role="tab"`, `aria-selected`, `role="tabpanel"`
- Team orbit nodes have `role="button"`, `aria-label`, keyboard `Enter` support
- Interactive backgrounds have `aria-hidden="true"`
- All `<Image>` components have descriptive `alt` text
- Semantic HTML: `<nav>`, `<main>`, `<footer>`, `<section>` with `id` anchors

---

## 📝 Environment

No `.env` file needed for the landing page. If you add a backend (form submissions, analytics), create `.env.local`:
```env
NEXT_PUBLIC_API_URL=https://your-api.com
```
