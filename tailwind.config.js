/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    fontFamily: {
      display: ["Cinzel", "serif"],
      style: ["PT Sans","sans-serif"],
    },

  },
  plugins: [],
}

