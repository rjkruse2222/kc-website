# CLAUDE.md - K&C Website Project

This file provides guidance to Claude Code when working with the Kruse & Crawford CPA website.

## Project Overview

Next.js website for Kruse & Crawford CPAs, a Cincinnati-based CPA firm. The site includes service pages, team information, case studies, and a blog (Insights section).

## Blog Post Commandments

**These rules are MANDATORY for all blog articles. No exceptions.**

### Formatting Rules

1. **Only Two Text Sizes**: Use only `##` headers for sections. Never use `###` or smaller headers.

2. **Lists**:
   - Unordered lists: Use bullets (`-`)
   - Ordered lists: Use numbers (`1. 2. 3.`)

3. **Final Paragraph**: Always include a passive call to action. Examples:
   - "Consult with your CPA before implementing to ensure compliance."
   - "A qualified advisor can help you evaluate whether this strategy fits your situation."
   - "Work with your tax professional to run the numbers for your specific circumstances."

3. **Text Styling** (handled by CSS):
   - Body text is justified
   - Headers are centered
   - Strong text displays in navy blue (#003067)

### Frontmatter Requirements

Every blog post must include this frontmatter structure:

```yaml
---
title: "Article Title Here"
category: "Tax Strategy" | "Accounting" | "Business Advisory"
date: "YYYY-MM-DD"
readTime: "X min read"
excerpt: "SEO-optimized description (include Cincinnati reference when relevant)"
image: "/images/blog-filename.jpg"
color: "from-color-500 to-color-600"
keywords: "keyword1, keyword2, keyword3, Cincinnati CPA, etc."
---
```

### SEO Requirements

- Include `keywords` field in frontmatter
- Mention "Cincinnati" in excerpt when appropriate
- Use relevant long-tail keywords naturally in content
- Keep excerpts under 160 characters for meta descriptions

### Content Style

- Professional tone appropriate for business owners
- Avoid AI-sounding language and jargon
- Use active voice
- Keep sentences concise
- No em dashes (use commas or periods instead)

### Automatic Page Elements

The blog page template automatically adds these after every article. Do NOT add to markdown:

1. **Newsletter Signup** - "Stay Informed" email subscription box
2. **CTA Section** - "Ready to Put This Into Action?" with "Schedule a Consultation" button (links to /contact)
3. **Related Articles** - Displays 3 other blog posts

## File Locations

- **Blog articles**: `content/articles/*.md`
- **Article page component**: `app/insights/[slug]/page.tsx`
- **Article styling**: `app/globals.css` (see `.article-content` class)
- **Article utilities**: `lib/articles.ts`
- **Blog images**: `public/images/blog-*.jpg`

## Common Commands

```bash
# Development server
npm run dev

# Build
npm run build

# Lint
npm run lint
```

## Image Specifications

Blog thumbnail images should be:
- Size: 660x440px (1.5:1 aspect ratio)
- Format: JPG
- Location: `public/images/`
- Naming: `blog-descriptive-name.jpg`

## Categories

Valid blog categories:
- Tax Strategy
- Accounting
- Business Advisory

## Related Files

When modifying blog functionality, these files may need updates:
- `lib/articles.ts` - Article fetching and parsing
- `app/insights/page.tsx` - Blog listing page
- `app/insights/[slug]/page.tsx` - Individual article page
- `app/globals.css` - Article content styling
