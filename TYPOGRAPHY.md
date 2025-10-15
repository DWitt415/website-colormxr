# Colormxr Typography System

This document outlines the typography system used across the Colormxr website.

## Font Families

The website uses two primary typefaces:

### Inter
- **Usage**: Headings, navigation, section titles
- **Weights**: 400 (Regular), 600 (Semibold), 700 (Bold)
- **Character**: Modern, clean, technical
- **Google Fonts**: `Inter:wght@400;600;700`

### Open Sans
- **Usage**: Body text, subheadings, general content
- **Weights**: 300 (Light), 400 (Regular), 600 (Semibold), 700 (Bold)
- **Styles**: Normal and Italic
- **Character**: Friendly, readable, approachable
- **Google Fonts**: `Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,400`

---

## Color Palette

The typography uses a consistent color scheme:

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Highlight Orange | `#F18F02` | Hero headings, section titles, CTAs |
| Subhead Blue | `#2C55D2` | Subheadings, callouts, emphasis |
| Callout Blue | `#5771FF` | Footer text, links |
| Body Text | `#2B2B2B` | Main body content |
| Light Blue | `#A7D8F7` | Light text on dark backgrounds |
| Navigation Gray | `#939393` | Navigation links |
| White | `#FFFFFF` | Subhero headings, light text |

---

## Custom Utility Classes

### Font Family Utilities

```css
.font-inter          /* Apply Inter font family */
.font-open-sans      /* Apply Open Sans font family */
```

### Heading Styles

#### `.heading-hero`
- **Font**: Inter, 48px, Semibold (600)
- **Line Height**: 52px
- **Letter Spacing**: -2px
- **Color**: Highlight Orange (#F18F02)
- **Usage**: Main page hero titles

#### `.heading-subhero`
- **Font**: Open Sans, 36px, Semibold (600)
- **Line Height**: 52px
- **Letter Spacing**: -2px
- **Color**: White (#FFFFFF)
- **Usage**: Secondary hero text below main title

#### `.heading-section`
- **Font**: Inter, 30px, Bold (700)
- **Letter Spacing**: -0.6px
- **Color**: Highlight Orange (#F18F02)
- **Usage**: Section headings, card titles

### Body Text Styles

#### `.body-text`
- **Font**: Open Sans, 16px, Regular (400)
- **Line Height**: 23px
- **Color**: Body Text (#2B2B2B)
- **Usage**: Main body content, paragraphs

#### `.body-text-large`
- **Font**: Open Sans, 18px, Regular (400)
- **Line Height**: 1.45
- **Letter Spacing**: -0.09px
- **Usage**: Larger body text, introductions

### Subheadings & Callouts

#### `.subheading-blue`
- **Font**: Open Sans, 20px, Regular (400), Italic
- **Color**: Subhead Blue (#2C55D2)
- **Usage**: Callout quotes, emphasized subheadings

#### `.subheading-bold`
- **Font**: Open Sans, 16px, Bold (700)
- **Color**: Subhead Blue (#2C55D2)
- **Usage**: Bold section labels, list headings

#### `.subheading-orange`
- **Font**: Open Sans, 20px, Semibold (600)
- **Color**: Highlight Orange (#F18F02)
- **Usage**: Orange callouts, special emphasis

### Navigation & UI

#### `.nav-link`
- **Font**: Inter, 16px, Semibold (600)
- **Line Height**: 24px
- **Letter Spacing**: -0.32px
- **Text Align**: Center
- **Color**: Navigation Gray (#939393)
- **Usage**: Navigation menu items

#### `.nav-logo`
- **Font**: Open Sans, 18px, Semibold (600)
- **Line Height**: 24px
- **Color**: White (#FFFFFF)
- **Usage**: Logo text in navigation

#### `.footer-text`
- **Font**: Open Sans, 16px, Light (300)
- **Line Height**: 24px
- **Letter Spacing**: 0.2px
- **Color**: Callout Blue (#5771FF)
- **Usage**: Footer copyright text

### Color Utilities

#### `.text-light-blue`
- **Color**: Light Blue (#A7D8F7)
- **Usage**: Light text on dark backgrounds

---

## Usage Examples

### Hero Section
```jsx
<p className="heading-hero">
  Create with Colormxr
</p>
<p className="heading-subhero">
  A digital color tool—and a creative toy
</p>
```

### Body Content
```jsx
<div className="body-text">
  <p>Colormxr is a more satisfying and intuitive way to work with digital color...</p>
</div>
```

### Callout/Subheading
```jsx
<p className="subheading-blue">
  A revolutionary, hands-on approach to mixing, exploring, and creating colors...
</p>
```

### Navigation
```jsx
<p className="nav-link">Gallery</p>
```

### Footer
```jsx
<p className="footer-text">
  © 2025 David Witt. All rights reserved. Colormxr™
</p>
```

---

## Migration Guide

### Old vs New

**Before:**
```jsx
<p className="font-['Open_Sans'] font-light leading-[24px] text-[#5771ff] text-[16px] tracking-[0.2px]">
  © 2025 David Witt
</p>
```

**After:**
```jsx
<p className="footer-text">
  © 2025 David Witt
</p>
```

---

## Tailwind Config

The fonts are also available as Tailwind utilities in `tailwind.config.js`:

```javascript
fontFamily: {
  'inter': ['Inter', 'sans-serif'],
  'open-sans': ['Open Sans', 'sans-serif'],
}
```

You can use these with Tailwind's standard utility classes:
- `font-inter` for Inter
- `font-open-sans` for Open Sans

---

## Best Practices

1. **Consistency**: Use the predefined utility classes rather than inline styles
2. **Hierarchy**: Maintain clear visual hierarchy with appropriate heading levels
3. **Readability**: Ensure sufficient contrast and line height for body text
4. **Responsiveness**: Consider adjusting font sizes for mobile viewports
5. **Performance**: Font files are loaded via Google Fonts CDN with `display=swap`

---

## File Locations

- **Main CSS**: `src/index.css`
- **Tailwind Config**: `tailwind.config.js`
- **Font Import**: Line 1 of `src/index.css`
- **Custom Utilities**: Lines 26-136 of `src/index.css`
