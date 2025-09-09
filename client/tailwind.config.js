/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#21d0fb', // Using your secondary color as primary
        secondary: '#21d0fb',
      },
      invert: {
        '50': '0.9',
      }
    },
  },
  plugins: [],
}

