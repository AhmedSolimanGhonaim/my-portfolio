
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        'default': '0 2px 4px rgba(0, 0, 0, 0.45)',
        'purple': '0 2px 4px rgba(168, 85, 247, 0.5)',
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
}
