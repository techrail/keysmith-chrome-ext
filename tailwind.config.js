/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(13 110 253 / <alpha-value>)',
        primaryBg: 'rgb(223 239 255 / <alpha-value>)',
        primaryBorder: 'rgb(158 197 254 / <alpha-value>)',
      }
    },
  },
  plugins: [],
}