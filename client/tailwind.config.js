const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or false
  theme: {
    extend: {
      fontFamily: {
        some_font: ["some_font", "sans-serif"],
      },
      colors: {
        main_bg: "#000014",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      const dappTypography = {
        ".name_of_typography": {
          fontFamily: theme("fontFamily.some_font"),
          fontStyle: "normal",
          fontWeight: "regular",
          fontSize: "10px",
          lineHeight: "24px",
        },
      };

      addUtilities(dappTypography, ["responsive"]);
    }),
  ],
};
