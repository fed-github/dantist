/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./layouts/**/*.html",
    "./content/**/*.md",
    "./content/**/*.html",
  ],
  // theme: {
  //   extend: {
  //     borderRadius: {
  //       "custom-50px": "50px",
  //     },
  //   },
  // },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-filters'),
  ],
  safelist: [
    "w-64",
    "w-1/2",
    "rounded-l-lg",
    "rounded-r-lg",
    "bg-gray-200",
    "grid-cols-4",
    "grid-cols-7",
    "h-6",
    "leading-6",
    "h-9",
    "leading-9",
    "shadow-lg",
  ],
  darkMode: "class",
};
