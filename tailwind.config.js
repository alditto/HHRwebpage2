/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"#3f97c0",
        footer:"#3f98c1",
      }
    },
  },
  plugins: [],
}

