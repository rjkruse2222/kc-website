# Blog Post Workflow

This document explains how to get your content from idea to published blog post.

## The Process

1. You provide the content (notes, draft, bullet points, or full article)
2. Claude formats it according to the blog commandments
3. Claude creates the file, commits, and pushes to GitHub

## Creating a New Blog Post

### What You Provide

Give Claude any of the following:

- A rough draft
- Bullet points and ideas
- Notes from a client meeting
- A document or file to convert
- Key points you want covered

### What to Tell Claude

```
Post this as a blog article:

[Your content here]

Title: [Your title]
Category: Tax Strategy / Accounting / Business Advisory
```

### Example

```
Post this as a blog article:

Qualified Improvement Property (QIP) lets you depreciate interior improvements
to nonresidential buildings over 15 years. With bonus depreciation back at 100%,
you can write off the entire cost in year one.

Qualifying improvements:
- Interior walls and ceilings
- HVAC systems
- Fire protection and security
- Lighting
- Flooring

Does NOT qualify:
- Building enlargement
- Elevators/escalators
- Internal structural framework
- Anything outside the building

Best for restaurants, retail, offices doing renovations.

Title: Qualified Improvement Property: The 100% Write-Off for Interior Renovations
Category: Tax Strategy
```

Claude will format this with proper headers, lists, frontmatter, SEO keywords, and push to GitHub.

## Editing an Existing Blog Post

### Changing Content

Tell Claude what to change:

```
In the S-Corp article, change the income threshold from $50,000 to $60,000
```

```
Add this paragraph to the cash flow article after the "Warning Signs" section:

[Your new content]
```

```
Replace the example in the cost segregation article with this:

[Your new example]
```

### Rewriting Sections

```
Rewrite the conclusion of the year-end tax article to emphasize
working with a CPA early in Q4
```

### Fixing Errors

```
The R&D article says the form is 6755. It should be 6765. Fix it.
```

## Quick Commands

| What You Want | What to Say |
|---------------|-------------|
| New post from your content | "Post this as a blog article: [content]" |
| New post from a file | "Convert this file to a blog post: [path]" |
| Change specific text | "In [article], change [old text] to [new text]" |
| Add content | "Add this to [article] after [section]: [content]" |
| Remove content | "Remove the section about [topic] from [article]" |
| Update facts/figures | "Update [article]: [what changed]" |
| Full rewrite of section | "Rewrite [section] in [article] to say [idea]" |

## Blog Post Requirements

Claude will automatically handle these, but for reference:

### Formatting
- Only `##` headers (no smaller)
- Bullets use `-`
- Numbered lists use `1. 2. 3.`
- Text displays justified, headers centered

### Required Info
- **Title**: You provide or Claude suggests
- **Category**: Tax Strategy, Accounting, or Business Advisory
- **Image**: 660x440px JPG in `public/images/`

### SEO (Claude handles)
- Keywords in frontmatter
- Cincinnati references in excerpt
- Meta description under 160 characters

## File Locations

- Blog articles: `content/articles/*.md`
- Blog images: `public/images/blog-*.jpg`

## After Posting

Claude will always commit and push to GitHub. The site rebuilds automatically.
