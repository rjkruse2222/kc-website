# Kruse & Crawford Website Completion Plan

## Overview
Complete implementation plan for the K&C CPAs website, covering all remaining pages: About, Contact, Industries (8), Ebooks (2), Careers, Insights, and Legal pages.

**Tech Stack:** Next.js 15, Tailwind CSS, Vercel
**Brand Colors:** Navy #003067, Teal #9bd9e4, Dark Blue #0a1628

---

## Phase 1: Core Pages (First Priority)

### 1.1 About Page (`/about`)
**Purpose:** Firm story, founder tribute, managing partner intro

**Structure:**
- Hero: "Our Story" narrative-focused (not split layout)
- Founder Section: Richard Kruse Sr. (RIP) - memorial/tribute with photo
- Managing Partner: Richard Kruse - current leadership, bio, credentials
- Philosophy: Year-round partnership approach, not just tax season
- Timeline: Key milestones since 2005

**Pattern Reference:** `app/services/tax-strategy/page.tsx` for section styling

**Content Needed:**
- Founder tribute copy
- Managing partner bio
- Firm philosophy/values
- Timeline milestones

**Images Needed:**
- Richard Kruse Sr. photo
- Richard Kruse photo
- Office/Cincinnati imagery

---

### 1.2 Contact Page (`/contact`)
**Purpose:** Multi-step inquiry form that qualifies leads

**Structure:**
- Multi-step wizard (3 steps):
  - Step 1: Service Interest (Tax Strategy, Client Accounting, Both, Other)
  - Step 2: Business Details (Revenue range, Industry, Employee count)
  - Step 3: Contact Info (Name, Email, Phone, Preferred method)
- Sidebar: Address, phone, email, map embed
- Progress indicator with completion percentage

**Pattern Reference:** `app/vsl4/page.tsx` quiz flow (lines 233-281)

**Contact Info:**
```
105 E 4th St, Suite 1200
Cincinnati, OH 45202
(513) 272-2200
info@kruseandcrawford.com
```

---

### 1.3 Legal Pages
**Files:** `/privacy-policy`, `/terms-conditions`

**Structure:**
- Simple legal text layout
- Table of contents with anchor links
- Last updated date
- Standard CPA firm legal templates

---

## Phase 2: Industries (8 Pages + Hub)

### 2.1 Industries Hub (`/industries`)
**Purpose:** Gateway to all industry pages

**Structure:**
- Intro section: "Industries We Serve"
- Grid of 8 industry cards with icons/imagery
- Each card links to individual page

**Existing Component:** `app/components/alternate/IndustryTile.tsx`

---

### 2.2 Individual Industry Pages

| Route | Industry | Focus Areas |
|-------|----------|-------------|
| `/industries/real-estate-construction` | Real Estate & Construction | Cost segregation, 1031 exchanges, REPS status |
| `/industries/manufacturing` | Manufacturing | R&D credits, equipment depreciation, inventory |
| `/industries/food-beverage` | Food & Beverage | Inventory management, tip credits, multi-location |
| `/industries/technology` | Technology | R&D credits, stock options, SaaS revenue recognition |
| `/industries/healthcare` | Healthcare | Practice valuations, compliance, retirement plans |
| `/industries/b2b-services` | B2B Services | Professional services, consulting, agency structures |
| `/industries/life-sciences` | Life Sciences | R&D credits, grant accounting, IP strategies |
| `/industries/high-income-individuals` | High-Income Individuals | Personal tax strategy, estate planning, investments |

**Template Structure (each page):**
1. Hero: Industry-specific headline + image (split layout)
2. Challenges: 3-4 pain points with icons
3. Solutions: How K&C addresses these challenges
4. Case Study: Industry-specific example with savings
5. FAQ: 3-5 industry-specific questions
6. CTA: Schedule consultation

**Pattern Reference:** `app/services/tax-strategy/page.tsx`

---

## Phase 3: Ebook Landing Pages (VSL Style)

### 3.1 Ebook 1: "The 8-Week Financial Clarity Blueprint"
**Route:** `/ebooks/financial-clarity-blueprint`
**Target:** Business owners struggling with financial visibility

**Structure:**
1. Hero: Ebook cover mockup + bold headline
2. Problem: 5-6 pain points of unclear financials
3. What's Inside: 8 chapters with descriptions
4. Author: Richard Kruse credentials
5. Lead Form: Name, Email, Business Size
6. Trust Signals: CPA credentials, years experience
7. FAQ: 3-4 questions about the ebook

**Design:** Light theme, professional, clarity-focused

**Pattern Reference:** `app/vsl1/page.tsx` structure adapted

---

### 3.2 Ebook 2: "Tax Saving Secrets of the 1%"
**Route:** `/ebooks/tax-saving-secrets`
**Target:** High-income individuals and business owners

**Structure:**
1. Hero: "Secret" framing + ebook mockup
2. Teaser: "What the wealthy know"
3. What's Inside: Chapter reveals
4. Qualifier: Who this is for
5. Author: Richard Kruse + $50M+ saved stat
6. Lead Form: With urgency messaging
7. Risk Reversal: Guarantee messaging

**Design:** Dark theme (#0a0a0a), aggressive conversion copy, urgency elements

**Pattern Reference:** `app/vsl4/page.tsx` dark styling

---

## Phase 4: Secondary Pages

### 4.1 Careers Page (`/careers`)
**Structure:**
- Hero: Culture-focused messaging
- Why K&C: Benefits grid (flexibility, growth, etc.)
- Values: Company values section
- Positions: Expandable cards (placeholder for future openings)
- Apply: CTA with instructions

---

### 4.2 Insights Hub (`/insights`)
**Structure:**
- Featured article section
- Blog card grid with categories
- Categories: Tax, Accounting, Business Advisory, Industry News
- Pagination structure

**Files:**
```
app/insights/
  page.tsx          # Blog listing
  [slug]/page.tsx   # Individual post template
```

---

## File Structure

```
app/
  about/page.tsx
  contact/page.tsx
  careers/page.tsx
  insights/
    page.tsx
    [slug]/page.tsx
  industries/
    page.tsx
    real-estate-construction/page.tsx
    manufacturing/page.tsx
    food-beverage/page.tsx
    technology/page.tsx
    healthcare/page.tsx
    b2b-services/page.tsx
    life-sciences/page.tsx
    high-income-individuals/page.tsx
  ebooks/
    financial-clarity-blueprint/page.tsx
    tax-saving-secrets/page.tsx
  privacy-policy/page.tsx
  terms-conditions/page.tsx
```

---

## Navigation Updates Required

**Header.tsx:**
- Add Industries dropdown
- Add Resources dropdown (Insights, Ebooks)
- Verify all links work

**Footer.tsx:**
- Add new page links
- Ensure all existing links work

---

## Images Checklist

| Image | Usage | Status |
|-------|-------|--------|
| Richard Kruse Sr. photo | About page founder tribute | Needed |
| Richard Kruse photo | About page, ebook pages | Needed |
| Office/Cincinnati photos | About, Contact | Needed |
| 8 industry hero images | Industry pages | Needed |
| Financial Clarity ebook cover | Ebook 1 landing | Needed |
| Tax Secrets ebook cover | Ebook 2 landing | Needed |
| Team/culture photos | Careers page | Needed |

---

## Content Checklist

- [ ] About page: Founder tribute, partner bio, philosophy, timeline
- [ ] Contact page: Form labels, step descriptions
- [ ] 8 industry pages: Full content per industry
- [ ] Ebook 1: Landing page copy, chapter breakdown
- [ ] Ebook 2: Landing page copy, chapter breakdown
- [ ] Careers: Culture copy, benefits, values
- [ ] Legal: Privacy policy, terms text
- [ ] Initial blog posts: 2-3 articles for launch

---

## Implementation Order

1. **Week 1:** About page, Contact page, Legal pages
2. **Week 2:** Industries hub + 4 industry pages
3. **Week 3:** Remaining 4 industry pages
4. **Week 4:** Both ebook landing pages
5. **Week 5:** Careers, Insights hub, navigation updates
6. **Week 6:** Polish, SEO, form integrations, testing

---

## Critical Reference Files

| File | Pattern Used For |
|------|------------------|
| `app/services/tax-strategy/page.tsx` | Split hero, case studies, FAQ, process steps |
| `app/vsl4/page.tsx` | Multi-step forms, quiz flow, dark theme |
| `app/vsl1/page.tsx` | Lead capture, testimonials, trust signals |
| `app/components/alternate/IndustryTile.tsx` | Industry cards |
| `app/components/Header.tsx` | Navigation updates |
| `app/components/Footer.tsx` | Footer links |

---

## Verification

After implementation:
1. Test all navigation links from Header and Footer
2. Test contact form submission flow
3. Test ebook form submissions
4. Verify responsive design on mobile
5. Run accessibility check (WCAG 2.1 AA)
6. Test all CTA buttons link correctly
7. Verify images load and are optimized
8. Check SEO metadata on all new pages

---

## Summary

**Total New Pages: 16**
- About (1)
- Contact (1)
- Industries (9 - hub + 8 individual)
- Ebooks (2)
- Careers (1)
- Insights (1 + template)
- Legal (2)
