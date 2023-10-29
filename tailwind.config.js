/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{vue,html,js}"],
  theme: {
    fontFamily: {
      arimo: ["Arimo", ...defaultTheme.fontFamily.sans],
      roboto: ["Roboto Condensed", ...defaultTheme.fontFamily.sans],
      sans: ["Arimo", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        primary: {
          900: "#02267A",
          550: "#1F1F1F",
        },
        danger: {
          900: "#D10001",
        },
        dark: {
          200: "#E1E1E6",
          300: "#B4B4B4",
          700: "#545454",
          900: "#323238",
        },
        orange: {
          150: "#EFEEE9",
        },
      },
    },
  },
  plugins: [],
};
