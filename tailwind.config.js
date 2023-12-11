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
  darkMode: ["class"],
  theme: {colors: {
    "dark": "var(--dark)",
  "darkLighter": "var(--darkLighter)",
  "light": "var(--light)",
  "lightDarker": "var(--lightDarker)",
  "accentRgb": "var(--accentRgb)",
  "accent": "var(--accent)",
  "shadowColor": "var(--shadowColor)",
  },
    extend: {
      boxShadow: {
        "customShadow": "0 0px 10px rgba(0,0,0,.75)",
        "shadowLifted": "0 5px 20px rgba(0,0,0,.75)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
})
