/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
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
      },
      screens: {
        'talet': '900px'
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    }
  },
  plugins: [],
}