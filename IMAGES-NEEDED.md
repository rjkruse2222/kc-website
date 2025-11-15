# Required Images for K&C Website

To complete the website, you need to add the following images to the `public/images/` folder:

## Required Images

### 1. Header/Navigation
- **kruse-crawford-logo.png** - Main logo for header
  - Location in WordPress: `/wp-content/uploads/` (may be in theme folder)
  - Standard header logo (dark version for light background)

### 2. Hero Section
- **home-hero-tall.jpg** - Hero background image
  - Location in WordPress: `/wp-content/uploads/2021/11/home-hero-tall.jpg`
  - Full width hero background image

### 3. Who We Are Section
- **graph-rising-loop.svg** - Decorative background graph
  - Location in WordPress: `/wp-content/uploads/2021/11/graph-rising-loop.svg`
  - SVG graphic showing rising line chart

- **super-text-bg.png** - Decorative background for "OUR SERVICES" label
  - Location in WordPress: `/wp-content/uploads/2021/11/super-text-bg.png`
  - Small decorative background element

### 4. Service Cards (Three Images)
- **home-consulting.jpg** - Consulting service card image
  - Location in WordPress: `/wp-content/uploads/2021/11/home-consulting.jpg`
  - Size: 660x660px

- **home-finacial-reporting.jpg** - Financial Reporting service card image (note: typo "finacial" in original)
  - Location in WordPress: `/wp-content/uploads/2021/11/home-finacial-reporting.jpg`
  - Size: 660x660px

- **home-tax-preparation.jpg** - Tax Preparation service card image
  - Location in WordPress: `/wp-content/uploads/2021/11/home-tax-preparation.jpg`
  - Size: 660x660px

### 5. What We Do Section
- **home-what-we-do.svg** - Floating graphic/illustration
  - Location in WordPress: `/wp-content/uploads/2021/11/home-what-we-do.svg`
  - Size: 908x780px
  - SVG graphic that floats in the right column

### 6. Insights Section
- **insights-graphic.svg** - Large decorative graphic (magnifying glass with buildings)
  - Location in WordPress: `/wp-content/uploads/2021/11/` (look for insights or magnifying glass graphic)
  - SVG graphic showing magnifying glass and 3D buildings

- **blog-corporate-acronyms.jpg** - Blog article image 1
  - Location in WordPress: `/wp-content/uploads/` (check various year/month folders)
  - Article thumbnail image

- **blog-owners-salary.jpg** - Blog article image 2
  - Location in WordPress: `/wp-content/uploads/`
  - Article thumbnail image

- **blog-renting-house.jpg** - Blog article image 3
  - Location in WordPress: `/wp-content/uploads/`
  - Article thumbnail image

### 7. Footer
- **kruse-crawford-logo-light.png** - Light version of logo for dark footer
  - Location in WordPress: `/wp-content/uploads/` (may be in theme folder)
  - Light colored logo for dark background

### 8. Bracket Button Decorations
- **bracket-left.svg** - Left bracket decoration for buttons
  - Location in WordPress: `/wp-content/uploads/2021/11/bracket-left.svg`
  - Small SVG bracket icon

- **bracket-right.svg** - Right bracket decoration for buttons
  - Location in WordPress: `/wp-content/uploads/2021/11/bracket-right.svg`
  - Small SVG bracket icon

## How to Extract Images from WordPress Backup

1. Navigate to your WordPress backup folder
2. Go to `wp-content/uploads/2021/11/`
3. Copy all the images listed above
4. Paste them into `kc-website/public/images/`

## Alternative: Create New Images

If you want to update the design with new images instead:
- Replace the service card images (660x660px recommended)
- Create or find new SVG graphics for decorative elements
- Update the hero background image (high resolution, wide aspect ratio)

## File Structure

After adding images, your structure should look like:

```
kc-website/
├── public/
│   └── images/
│       ├── kruse-crawford-logo.png
│       ├── kruse-crawford-logo-light.png
│       ├── home-hero-tall.jpg
│       ├── graph-rising-loop.svg
│       ├── super-text-bg.png
│       ├── home-consulting.jpg
│       ├── home-finacial-reporting.jpg
│       ├── home-tax-preparation.jpg
│       ├── home-what-we-do.svg
│       ├── insights-graphic.svg
│       ├── blog-corporate-acronyms.jpg
│       ├── blog-owners-salary.jpg
│       ├── blog-renting-house.jpg
│       ├── bracket-left.svg
│       └── bracket-right.svg
```

## Testing After Adding Images

Once images are added:
1. Run `npm run dev` (after fixing npm installation)
2. Open http://localhost:3000
3. Verify all images load correctly
4. Check hover effects on service cards
5. Test responsive layout on mobile devices
