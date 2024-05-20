/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ppBlue: "#13143C",
        ppLightGray: "#DFDFDF",
        ppLight: "#FFFFFF",
        ppOrange: "#F17A37",
        ppLight_2: "#FFFAF2",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
