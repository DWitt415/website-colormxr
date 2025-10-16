/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '375px',   // Mobile small (iPhone SE)
      'sm': '640px',   // Mobile large
      'md': '768px',   // Tablet portrait
      'lg': '1024px',  // Tablet landscape / Small laptop
      'xl': '1280px',  // Desktop
      '2xl': '1536px', // Large desktop
      '3xl': '1920px', // Extra large (current fixed design)
    },
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      colors: {
        'hilight-orange': '#F18F02',
        'callout': '#5771FF',
        'subhead-color': '#2C55D2',
      },
    },
  },
  plugins: [],
}
