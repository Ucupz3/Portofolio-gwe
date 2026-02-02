/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ice: "#D6E6F3",
        powder: "#ffbe18",
        sapphire: "#0F52BA",
        navy: "#020066",
      },
    },
  },
  plugins: [],
}