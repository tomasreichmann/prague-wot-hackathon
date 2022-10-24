/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#FFDD99",
      },
      fontFamily: {
        display: ['"Roboto Condensed"', "sans-serif"],
        body: ['"Roboto Condensed"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
