// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  theme: {
    fontFamily: {
      sans: ["Karla", "sans-serif"],
    },
    extend: {
      colors: {
        "primary-dark": "#0D1321",
        "secondary-dark": "#435058",
        "primary-light": "#F3F7F0",
        "secondary-light": "#C7CACB",
        accent: "#F72C25",
      },
    },
  },
  variants: {
    opacity: ["responsive", "hover"],
  },
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
};
