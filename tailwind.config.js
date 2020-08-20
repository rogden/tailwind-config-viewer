module.exports = {
  purge: [
    './src/**/*.vue',
    './src/**/*.js'
  ],
  theme: {
    extend: {
      spacing: {
        '28': '7rem',
        '36': '9rem'
      }
    }
  },
  variants: {
    borderColor: ['responsive', 'hover']
  },
  plugins: []
}
