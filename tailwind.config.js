/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        secondary: "#20456C",
        "secondary-dark": "#1A394C",
        "secondary-darkest": "#06192E",
        primary: "#C15D47",
        "primary-light": "#C15D47",
        "primary-dark": "#963342",
        "text-secondary": "#CEC7B1",
        text: "#ECD7B7",
      },
      spacing: {
        1: "5px",
        2: "10px",
      },
      fontFamily: {
        display: ['"Roboto Condensed"', "sans-serif"],
        body: ['"Roboto Condensed"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
