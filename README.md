# Colormxr Home Page

A React + Tailwind CSS implementation of the Colormxr home page, generated from Figma design.

## Project Structure

```
test-site/
├── public/
│   └── assets/           # Image assets exported from Figma
├── src/
│   ├── pages/
│   │   └── Home.jsx      # Main home page component
│   ├── index.css         # Tailwind directives and global styles
│   └── main.jsx          # React entry point
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Assets

All images are stored in `public/assets/`:
- `screenshot-video.png` - Video preview thumbnail
- `logo-bg.png` - Logo background image
- `logo-quadrant.png` - Logo quadrant elements
- `colormxr-desktop.png` - Main desktop application screenshot

## Getting Started

### Install Dependencies

```bash
cd test-site
npm install
```

### Run Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Design Fidelity

This implementation preserves:
- ✅ Exact layout and positioning from Figma
- ✅ All spacing and sizing values
- ✅ Component structure and hierarchy
- ✅ Typography (Open Sans and Inter fonts)
- ✅ Color palette
- ✅ Gradients and backgrounds
- ✅ All interactive elements (links, video preview)

## Fonts

The project uses Google Fonts:
- **Inter** - Headers and navigation (Semi Bold, 600 weight)
- **Open Sans** - Body text and content (Light 300, Regular 400, SemiBold 600, Italic)

## Color Palette

Custom colors defined in `tailwind.config.js`:
- `hilight-orange`: #F18F02
- `callout`: #5771FF
- `subhead-color`: #2C55D2

## Technologies

- **React 18** - UI framework
- **Tailwind CSS 3** - Utility-first styling
- **Vite 5** - Build tool and dev server
- **PostCSS** - CSS processing
