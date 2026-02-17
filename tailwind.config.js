/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FFF8F0",
        roseGold: "#B76E79",
        champagne: "#F7E7CE",

        royalBlack: "#0B0B0D",
        antiqueGold: "#D4AF37",
        luxeIvory: "#F8F5F0",
      },
    },
  },
  plugins: [],
};
