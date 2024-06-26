/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#023047",
        secondary: "#219ebc",
        customWhite: "#F1FAEE",
        customBlack: "#212529",
        customGreen: "#00BD13",
        customRed: "#BD0000",
      },

      fontFamily: {
        primary: ["Jost"],
      },

      fontSize: {
        title: ["3rem", "1.5"],
        subTitle: ["1.8rem", "1.2"],
        paragraph: ["1.2rem", "1.5"],
      },

      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
