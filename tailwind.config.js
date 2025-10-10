/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
