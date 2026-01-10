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
| `/services` | Services overview (2 services) | Needs redesign |
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
    └── Footer.tsx           # Site footer
```

### Experimental/Archive Pages

These are design explorations kept for reference:

```
app/
├── home1/ through home14/   # Homepage design variations
├── home99/                  # Another homepage variant
├── vsl1/ through vsl4/      # Video sales letter pages
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
--text-dark: #333333
--text-gray: #666666
```

---

## Project Status

### Completed
- [x] Homepage design and implementation
- [x] Header with mobile navigation
- [x] Footer with social links
- [x] Tax Strategy service page
- [x] Client Accounting service page (3-tier pricing)
- [x] WCAG 2.1 AA accessibility compliance (Jan 2025)
  - Skip navigation link
  - Keyboard navigation with focus indicators
  - Screen reader support (ARIA labels, semantic HTML)
  - Color contrast fixes
  - Reduced motion support

### In Progress
- [ ] **Services page redesign** - Current design feels generic, needs fresh approach

### Not Started
- [ ] About page
- [ ] Industries pages
- [ ] Careers page
- [ ] Insights/Blog listing page
- [ ] Contact page
- [ ] Individual blog post pages
- [ ] Team page

### Known Issues
- Services page (`/services`) needs complete redesign - 3 alternative versions created but none approved
- Some experimental pages (home1-14, vsl1-4) could be cleaned up

---

## Working with Claude

### Key Context
- No local development - everything goes through GitHub/Vercel
- Brand voice: Professional but approachable, Cincinnati-focused
- Target audience: Small business owners ($1M-$50M revenue)
- Two core services: Tax Strategy + Client Accounting (3 tiers)

### Services Page Status
Three alternative designs were created and rejected:
- `/services/v1` - Editorial/magazine style
- `/services/v2` - Geometric/angular style
- `/services/v3` - Warm/approachable style
- `/services/compare` - Side-by-side comparison

Need to discuss what direction to take for services page redesign.

---

## Related Documentation

- [SETUP.md](./SETUP.md) - Initial project setup notes
- [IMAGES-NEEDED.md](./IMAGES-NEEDED.md) - Required images checklist
