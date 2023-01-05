/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: [
        'Noto Sans',
      ],
      Deca: [
        'Lexend Deca',
      ],
    },
  },
  plugins: [],
}
