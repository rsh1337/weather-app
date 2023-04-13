/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: { "raw": "(min-width: 1025px)" },
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
    }
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}