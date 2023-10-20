/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        principal: "#5AC5FE",
        primary: "#EDEDEE",
        secondary: "#d0026a",
        darkcolor: "#020010",
      },
    },
    fontFamily: {
      principalText: ['Cormorant Garamond', 'serif']
    }
  },
  plugins: [],
};