module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: '400px',
      },
    },
  },
  variants: {
    extend: {
      flexDirection: ['even'],
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
