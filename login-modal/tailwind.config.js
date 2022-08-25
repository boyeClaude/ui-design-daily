/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Mulish", "sans-serif"],
        mono: ["Rokkitt", "monospace"],
      },
    },
  },
  plugins: [],
};
