/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'azul-claro': '#243cff',
        'azul-oscuro': '#0d1b3e',
      },
      spacing: {
        '42': '170px'
      },
      width: {
        '43': '170px'
      }
    },
  },
  plugins: [],
}