# Kruse & Crawford Website - Next.js

This is a Next.js recreation of the Kruse & Crawford CPA firm website, designed to replicate the appearance of the WordPress/Divi site.

## Project Structure

```
kc-website/
├── app/
│   ├── components/
│   │   ├── Hero.tsx          # Main hero section with headline
│   │   ├── About.tsx          # About/intro section
│   │   └── Services.tsx       # Services cards section
│   ├── globals.css            # Global styles with K&C branding
│   ├── layout.tsx             # Root layout with metadata
│   └── page.tsx               # Homepage
├── public/
│   └── images/                # Place your images here
└── package.json
```

## Important: OneDrive and npm Installation Issue

**There's a known issue with npm installations in OneDrive-synced folders.** If you encountered errors during setup, follow these steps:

### Option 1: Exclude from OneDrive (Recommended)
1. Right-click the `kc-website` folder in File Explorer
2. Select "Always keep on this device" or "Free up space"
3. Go to OneDrive settings and exclude the `node_modules` folder from sync
4. Run: `npm install`

### Option 2: Install Outside OneDrive
1. Copy the `kc-website` folder to a non-OneDrive location (e.g., `C:\Projects\kc-website`)
2. Navigate to that folder in your terminal
3. Run: `npm install`

### Option 3: Use Yarn Instead
```bash
npm install -g yarn
yarn install
```

## Getting Started

Once dependencies are installed successfully:

```bash
# Development server
npm run dev

# Open http://localhost:3000 in your browser
```

## Customizing Content

All content is easily editable in the component files:

### Hero Section (`app/components/Hero.tsx`)
- Update the main headline
- Change the CTA button text and link
- Modify colors and styling

### About Section (`app/components/About.tsx`)
- Update the heading and description
- Add your current business model information

### Services Section (`app/components/Services.tsx`)
- Modify the `services` array to match your current offerings
- Update service titles and descriptions
- Change service items/bullet points

## Adding Images

1. Copy your images to: `kc-website/public/images/`
2. Reference them in components as: `/images/your-image.jpg`

From your WordPress backup, copy these images:
- `home-consulting.jpg`
- `home-finacial-reporting.jpg`
- `home-tax-preparation.jpg`

Or replace with your own updated images.

## Styling & Branding

All brand colors are defined in `app/globals.css`:

```css
:root {
  --primary-blue: #2ea3f2;    /* Links, buttons */
  --dark-blue: #05346a;       /* Headers, dark backgrounds */
  --light-blue: #9bd9e4;      /* Accents */
  --text-dark: #333333;       /* Headings */
  --text-gray: #666666;       /* Body text */
}
```

**Fonts:**
- Headings: Montserrat (Google Fonts)
- Body: Open Sans (Google Fonts)

## Deploying to Vercel

This site is ready to deploy to Vercel:

1. Push your code to GitHub (see below)
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect Next.js and deploy

## Setting Up GitHub

```bash
cd kc-website

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: K&C website Next.js recreation"

# Create a new repository on GitHub first, then:
git remote add origin https://github.com/YOUR-USERNAME/kc-website.git
git branch -M main
git push -u origin main
```

## Next Steps

1. **Fix npm installation** using one of the options above
2. **Update content** in component files to match your current business model
3. **Add your images** to the public/images folder
4. **Test locally** with `npm run dev`
5. **Push to GitHub**
6. **Deploy to Vercel**

## Technology Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS 4 + Custom CSS
- **TypeScript:** For type safety
- **Fonts:** Google Fonts (Montserrat & Open Sans)

## Support

If you need to make changes or add features:
- Update component files in `app/components/`
- Modify global styles in `app/globals.css`
- Add new pages by creating files in the `app/` directory

---

**Note:** This is a replica of the homepage structure. You mentioned you'll update the content to match your current business model, so feel free to modify any text, images, or sections as needed.
