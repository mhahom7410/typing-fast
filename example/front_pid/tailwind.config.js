const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: defaultTheme.fontFamily.sans,
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}