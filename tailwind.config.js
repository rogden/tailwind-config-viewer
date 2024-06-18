import darkMode from 'tailwindcss-dark-mode'

export default {
  purge: [
    './src/**/*.vue',
    './src/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#0f0f17'
      },
      spacing: {
        28: '7rem',
        36: '9rem'
      }
    }
  },
  variants: {
    backgroundColor: ['dark', 'dark-hover', 'hover'],
    backgroundOpacity: ['dark'],
    borderColor: ['dark', 'dark-hover', 'responsive', 'hover'],
    textColor: ['dark', 'dark-hover', 'hover']
  },
  plugins: [
    darkMode()
  ]
}
