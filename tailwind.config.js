/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home": "url('/bg1.jpg')",
        "home1": "url('/bg2.jpg')",
        "home2": "url('/bg8.jpg')",
        "home3": "url('/bg3.jpg')",
        "home4": "url('/bg6.jpg')"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}