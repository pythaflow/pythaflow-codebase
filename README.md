# Pythaflow
**Portfolio Website**

---

## Project Overview
Full website for Pythaflow, a creative agency. Includes homepage, services, portfolio, contact, and an AI-powered brand assessment tool.

---

## File Structure

```
pythaflow/
├── app/
│   ├── layout.js              ← Root layout (metadata, nav, footer)
│   ├── page.js                ← Homepage
│   ├── globals.css            ← Design system + global styles
│   ├── not-found.js           ← 404 page
│   ├── services/page.js       ← Services page (6 services)
│   ├── work/page.js           ← Portfolio page (filterable)
│   ├── contact/page.js        ← Contact form
│   ├── assessment/page.js     ← AI brand audit tool
│   └── api/assess/route.js    ← 🔒 Secure API route (AI assessment)
├── components/
│   ├── Navbar.js              ← Sticky nav + mobile hamburger
│   ├── Footer.js              ← Full footer with links
│   └── Cursor.js              ← Custom cursor (desktop only)
├── lib/
│   ├── rateLimit.js           ← In-memory rate limiter (10 req/hr/IP)
│   └── validate.js            ← Input validation + sanitisation
├── public/
│   ├── favicon.ico            ← Add your favicon here
│   ├── og-image.jpg           ← Add 1200x630 OG image here
│   └── apple-touch-icon.png   ← Add 180x180 icon here
├── .env.local.example         ← Copy → rename to .env.local → fill in
├── .gitignore                 ← .env.local excluded automatically
├── next.config.js             ← Security headers configured
└── package.json
```

---

## Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Set up environment variables
```bash
cp .env.local.example .env.local
```
Then open `.env.local` and fill in:
- `ANTHROPIC_API_KEY` — from console.anthropic.com
- `NEXT_PUBLIC_CALENDLY_URL` — your Calendly booking link
- `NEXT_PUBLIC_CONTACT_EMAIL` — your agency email

### 3. Run locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 4. Build for production
```bash
npm run build
npm start
```

---

## Pages

<!-- | Page | Route | Description |
|------|-------|-------------|
| Homepage | `/` | Hero, marquee, services overview, about, work preview, process, CTAs |
| Services | `/services` | Full breakdown of all 6 services with deliverables |
| Portfolio | `/work` | Filterable project grid — add real projects to replace placeholders |
| Contact | `/contact` | Contact form + location info |
| Assessment | `/assessment` | AI-powered brand audit tool |
| 404 | `*` | Custom not-found page | -->

---

## AI Assessment Tool

### How it works
1. Visitor fills in their website URL + social handles + 2 quick questions
2. Form submits to `/api/assess` (server-side — API key never exposed)
3. Server validates inputs, checks rate limit, calls Anthropic Claude API
4. Claude scores 6 dimensions (website, SEO, social, content, ads, strategy) each 1–5
5. One score is always 5/5 (the visitor's strength — psychological hook)
6. Results shown with animated bars, red flag, strength callout, and Calendly CTA

### Security
- API key stored in environment variables only — never in code or browser
- Rate limited: 10 assessments per IP per hour
- All inputs validated and sanitised server-side
- CORS locked to pythaflow.com
- Prompt injection protection in validate.js

---




## Monthly Cost Estimate

<!-- | Service | Cost |
|---------|------|
| Vercel Hosting | Free |
| GitHub | Free |
| Anthropic API (~200 assessments) | ~$5 |
| Calendly (free plan) | Free |
| **Total** | **~$5/month** | -->

---

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** CSS-in-JS (inline styles) + globals.css — no Tailwind dependency
- **Fonts:** Bebas Neue, Syne, DM Mono (Google Fonts)
- **AI:** Anthropic Claude API (server-side only)
- **Hosting:** Vercel or Firebase (your choice)

---

## Support
Built with ❤️ for Pythaflow. Questions? hello@pythaflow.com
