/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'blackRa': '#3C3C3B',
        'richWhiteRa': '#F6F6F6',
        'whiteRa': '#FFFFFF',
      },
      fontFamily: {
          'cocomat': ['comantLight'],
          'cocomatUL': ['comanUltraLight'],
      }
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
}
