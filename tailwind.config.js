/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {colors: {
    "dark": "var(--dark)",
  "darkLighter": "var(--darkLighter)",
  "light": "var(--light)",
  "lightDarker": "var(--lightDarker)",
  "accentRgb": "var(--accentRgb)",
  "accent": "var(--accent)",
  "lightRgb": "var(--lightRgb)",
  "darkRgb": "var(--darkRgb)",
  "shadowColor": "var(--shadowColor)",
  "shadow": "var(--shadow)",
  "shadowLifted": "var(--shadowLifted)",
  },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
})
