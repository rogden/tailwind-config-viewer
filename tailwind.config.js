import { resolve } from 'path'

export default {
  darkMode: 'class',
  content: [
    `${resolve(__dirname)}/src/**/*.vue`,
    `${resolve(__dirname)}/src/**/*.js`,
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#0f0f17'
      },
      spacing: {
        '28': '7rem',
        '36': '9rem'
      }
    }
  },
}
