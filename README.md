# Kruse & Crawford CPAs Website

A [Next.js](https://nextjs.org) website for Kruse & Crawford CPAs, a **national CPA firm headquartered in Cincinnati** with remote team members across the country, serving small to lower middle market businesses ($1M-$50M revenue) in all 50 states.

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
| `/about` | Firm story, founder tribute, managing partner | Complete |
| `/contact` | 3-step inquiry wizard | Complete |
| `/services` | Services overview | In Progress (v4) |
| `/services/tax-strategy` | Tax strategy service detail | Complete |
| `/services/client-accounting` | Client accounting tiers | Complete |
| `/industries` | Industries hub (8 cards) | Complete |
| `/industries/[slug]` | 8 individual industry pages | Complete |
| `/ebooks/financial-clarity-blueprint` | Ebook 1 landing page | Complete |
| `/ebooks/tax-saving-secrets` | Ebook 2 landing page | Complete |
| `/careers` | Careers and culture | Complete |
| `/insights` | Blog/insights hub | Complete |
| `/privacy-policy` | Privacy policy | Complete |
| `/terms-conditions` | Terms of service | Complete |

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

### Completed (January 2025)
- [x] Homepage design and implementation
- [x] Header with mobile navigation
- [x] Footer with social links (white background)
- [x] Tax Strategy service page (split hero, case studies, FAQ)
- [x] Client Accounting service page (3-tier pricing)
- [x] WCAG 2.1 AA accessibility compliance
- [x] **About page** - Founder tribute, managing partner, firm philosophy, timeline
- [x] **Contact page** - 3-step wizard form (service, business details, contact info)
- [x] **Privacy Policy** - Standard CPA firm privacy policy
- [x] **Terms & Conditions** - Standard terms of service
- [x] **Industries hub** (`/industries`) - Grid of 8 industry cards
- [x] **8 Industry pages:**
  - Real Estate & Construction (cost segregation, 1031, REPS)
  - Manufacturing (R&D credits, equipment, IC-DISC)
  - Food & Beverage (tip credits, multi-location, WOTC)
  - Technology (R&D, stock options, QSBS, SaaS)
  - Healthcare (valuations, cash balance plans, retirement)
  - B2B Services (entity structuring, partner compensation)
  - Life Sciences (R&D, grant accounting, NOL planning)
  - High-Income Individuals (estate planning, charitable giving)
- [x] **Ebook landing pages:**
  - Financial Clarity Blueprint (light theme, accounting focus)
  - Tax Saving Secrets of the 1% (dark theme, aggressive conversion)
- [x] **Careers page** - Remote-first culture, benefits, open positions
- [x] **Insights hub** - Blog listing with categories, newsletter signup

### In Progress
- [ ] **Services page v4** - White hero with lifecycle diagram, needs finalization

### Pending Content (Awaiting Client Input)
All pages have placeholder content. See **[CONTENT-QUESTIONS.md](./CONTENT-QUESTIONS.md)** for the 77 questions that need answers to finalize content:
- Real photos (founder, managing partner, ebook covers)
- Actual case study numbers and client results
- Industry-specific expertise details
- Form integrations (where submissions should go)
- Metrics and testimonials

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
- Brand voice: Professional but approachable
- **National firm** headquartered in Cincinnati, serving all 50 states
- Target audience: Small business owners ($1M-$50M revenue)
- Two core services: Tax Strategy + Client Accounting (3 tiers)

### Content Questions Workflow
When returning to work on this project:
1. **Check [CONTENT-QUESTIONS.md](./CONTENT-QUESTIONS.md)** for any new answers from the client
2. **Use answers to update pages** - Replace placeholder content with real information:
   - Photos → Update image placeholders in About, Ebooks pages
   - Case studies → Update numbers in industry pages and service pages
   - Metrics → Update stats throughout the site
   - Integrations → Configure form submissions, newsletter signups
3. **Mark questions as answered** in CONTENT-QUESTIONS.md by adding ✅ or striking through

### Design Direction
- Clean, professional aesthetic
- White and navy color scheme (#003067 navy, #9bd9e4 teal)
- Split hero layouts with imagery work well
- Case studies and concrete metrics resonate
- Dark theme for aggressive conversion pages (Tax Secrets ebook)

### Services Page Evolution
- v1: Editorial/magazine style (rejected)
- v2: Geometric/angular style (rejected)
- v3: Warm/approachable style (base for v4)
- v4: White hero with lifecycle diagram (current)

---

## Related Documentation

- [CONTENT-QUESTIONS.md](./CONTENT-QUESTIONS.md) - **77 questions for client to answer** (YOUR HOMEWORK!)
- [WEBSITE-PLAN.md](./WEBSITE-PLAN.md) - Comprehensive completion plan
- [SETUP.md](./SETUP.md) - Initial project setup notes
- [IMAGES-NEEDED.md](./IMAGES-NEEDED.md) - Required images checklist
