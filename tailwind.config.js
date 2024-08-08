/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./<custom directory>/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      red: "#dc2626",
      white: "#ffffff",
      main: "#6078B8",
      secondary: "#FBB110",
      gray: {
        300: "#454545",
        200: "#6A6A6A",
        100: "#B6B6B6",
        50: "#F9F9F9",
      },
    },
    extend: {},
  },
  plugins: [],
};
