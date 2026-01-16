# Industries & Services Page Redesign Plan

## Overview
Redesign industry pages to follow V2 photography style, create 3 Services page redesign options, and add newsletter component site-wide.

---

## Phase 1: Create Reusable Newsletter Component
Create `components/NewsletterSection.tsx` - a standalone component that can be imported on any page.

**Features:**
- Email input with validation
- Subscribe button with hover effects
- Success state after subscription
- Consistent styling matching V2 design (clean, photography-driven aesthetic)
- Props for customization (background style, heading text)

---

## Phase 2: Services Page Redesign (3 Versions)

### Hero Update (all versions)
- Add Ken Burns faded photo background behind the existing hero content
- Use professional office/business imagery
- Gradient overlay to maintain text readability

### Version A: Magazine Editorial
- Clean full-width sections
- Large typography with photography accents
- Service descriptions in two-column layouts
- Photo breaks between sections
- Elegant, editorial feel like a high-end magazine

### Version B: Card-Based Grid
- Service cards with background photos
- Hover effects revealing more details
- Organized 2x3 or 3x2 grid layout
- Each card links to individual service pages
- Modern, interactive feel

### Version C: Full-Width Dramatic Sections
- Each service gets its own full-width section
- Alternating photo backgrounds with content overlays
- Parallax-style effects
- Bold, impactful presentation
- One service per viewport height

---

## Phase 3: Update 8 Individual Industry Pages

Transform each industry subpage to follow V2 photography style:

| Industry | Photo Theme |
|----------|-------------|
| Real Estate & Construction | Construction sites, buildings, blueprints |
| Manufacturing | Factory floors, machinery, production lines |
| Food & Beverage | Restaurants, kitchens, food preparation |
| Technology | Tech offices, servers, coding screens |
| Healthcare | Medical facilities, healthcare professionals |
| B2B Services | Business meetings, professional settings |
| Life Sciences | Laboratories, research equipment, scientists |
| High-Income Individuals | Luxury settings, financial planning, portfolios |

**Each page will have:**
- Ken Burns hero with industry-specific photo
- Magazine-style content sections with photos
- Photo collage or gallery section
- Stats section with photo background
- Newsletter section at bottom
- CTA section with photo background

---

## Phase 4: Update Other Pages with Ken Burns Heroes

Pages to update (solid color heroes → faded photo Ken Burns):
- About page
- Contact page
- Team page
- Any other pages with solid hero backgrounds

---

## Phase 5: Add Newsletter to All Pages

Import and add NewsletterSection component to:
- All industry pages (8 subpages)
- Services page
- About page
- Contact page
- Insights page
- Careers page
- Any other content pages

---

## Execution Order
1. Create NewsletterSection component first (dependency for other pages)
2. Create 3 Services page versions for user selection
3. Commit and push for user review
4. After user selects Services version, proceed with industry pages
5. Update remaining pages with Ken Burns heroes and newsletters

---

## Image Sources
Will use Unsplash URLs for high-quality, royalty-free photos relevant to each industry/section.
