/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./<custom directory>/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      white: "#FEFAF1",

      "main": "#6078B8",
      "secondary": "#FBB110",
      gray: {
        100: "#454545",
        50: "#6A6A6A",
        10: "#B6B6B6",
      },
    },
    extend: {},
  },
  plugins: [],
};
