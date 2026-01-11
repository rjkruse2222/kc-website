# Kruse & Crawford CPAs Website

A [Next.js](https://nextjs.org) website for Kruse & Crawford CPAs, a Cincinnati-based CPA firm serving small to lower middle market businesses ($1M-$50M revenue).

## Live Site

**Production:** [kc-website-alpha.vercel.app](https://kc-website-alpha.vercel.app)

## Deployment

This project uses continuous deployment via Vercel. All changes are pushed to GitHub, which triggers automatic builds and deployment. There is no local development server - all testing and review happens on the live Vercel deployment.

**Workflow:**
1. Make code changes
2. Commit and push to GitHub
3. Vercel automatically builds and deploys
4. Review changes on the live site

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Fonts:** Montserrat (headings), Open Sans (body)
- **Deployment:** Vercel
- **Repository:** GitHub

---

## Site Architecture

### Core Pages (Live)

| Route | Description | Status |
|-------|-------------|--------|
| `/` | Homepage | Complete |
| `/services` | Services overview | In Progress (v4 design) |
| `/services/tax-strategy` | Tax strategy service detail | Complete |
| `/services/client-accounting` | Client accounting tiers | Complete |

### Homepage Components

```
app/
├── page.tsx                 # Homepage (assembles components below)
├── layout.tsx               # Root layout with Header/Footer + skip link
├── globals.css              # Global styles + accessibility CSS
└── components/
    ├── Header.tsx           # Navigation (desktop + mobile menu)
    ├── Hero.tsx             # Hero section with parallax
    ├── About.tsx            # Philosophy/Mission section
    ├── WhatWeDo.tsx         # Two core services intro
    ├── Insights.tsx         # Blog article cards
    ├── Connect.tsx          # Social links + newsletter signup
    └── Footer.tsx           # Site footer (white bg, updated Jan 2025)
```

### Service Pages

```
app/services/
├── page.tsx                 # Main services overview
├── v4/page.tsx              # Services v4 design (lifecycle image + white hero)
├── tax-strategy/page.tsx    # Tax Strategy (split hero + case studies)
└── client-accounting/page.tsx # 3-tier pricing page
```

### Experimental/Archive Pages

Design explorations kept for reference:

```
app/
├── home1/ through home14/   # Homepage design variations
├── home99/                  # Another homepage variant
├── vsl1/ through vsl4/      # Video sales letter pages (legacy)
├── router1/ through router3/ # Router experiments
├── services/v1/             # Services page - Editorial style
├── services/v2/             # Services page - Geometric style
├── services/v3/             # Services page - Warm style
└── services/compare/        # Comparison page for service designs
```

### Brand Colors

```css
--primary-blue: #003067    /* Navy - primary brand color */
--light-blue: #9bd9e4      /* Teal - accent color */
--dark-blue: #0a1628       /* Deep blue - used in tax strategy hero */
--text-dark: #333333
--text-gray: #666666
```

---

## Project Status

### Completed
- [x] Homepage design and implementation
- [x] Header with mobile navigation
- [x] Footer with social links (white background, Jan 2025)
- [x] Tax Strategy service page
  - Split hero layout with starry night image
  - "Your Tax Strategy As Unique As You" messaging
  - 300% ROI metric
  - 3 case study cards (Manufacturing, Prof Services, Construction)
  - FAQ accordion
  - Year-round planning timeline
- [x] Client Accounting service page (3-tier pricing)
- [x] WCAG 2.1 AA accessibility compliance (Jan 2025)
  - Skip navigation link
  - Keyboard navigation with focus indicators
  - Screen reader support (ARIA labels, semantic HTML)
  - Color contrast fixes
  - Reduced motion support

### In Progress
- [ ] **Services page v4** - White hero with lifecycle diagram, needs finalization

### Not Started
- [ ] About page
- [ ] Team page
- [ ] Industries pages (multiple)
- [ ] Careers page
- [ ] Insights/Blog listing page
- [ ] Contact page
- [ ] Individual blog post pages
- [ ] VSL/Landing pages for ebooks (2 planned)

---

## Key Images

| Image | Location | Usage |
|-------|----------|-------|
| `home-hero-tall.jpg` | Homepage hero | Parallax background |
| `tax-strategy-hero.jpg` | Tax Strategy page | Split hero (starry night) |
| `services-lifecycle.svg` | Services v4 | Lifecycle diagram |
| `logo-kruse-and-crawford.svg` | Header/Footer | Main logo |

---

## Working with Claude

### Key Context
- No local development - everything goes through GitHub/Vercel
- Brand voice: Professional but approachable, Cincinnati-focused
- Target audience: Small business owners ($1M-$50M revenue)
- Two core services: Tax Strategy + Client Accounting (3 tiers)

### Design Direction
- Clean, professional aesthetic
- White and navy color scheme
- Split hero layouts with imagery work well
- Case studies and concrete metrics resonate

### Services Page Evolution
- v1: Editorial/magazine style (rejected)
- v2: Geometric/angular style (rejected)
- v3: Warm/approachable style (base for v4)
- v4: White hero with lifecycle diagram (current)

---

## Related Documentation

- [SETUP.md](./SETUP.md) - Initial project setup notes
- [IMAGES-NEEDED.md](./IMAGES-NEEDED.md) - Required images checklist
- [WEBSITE-PLAN.md](./WEBSITE-PLAN.md) - Comprehensive completion plan
