const { resolve } = require('path')

module.exports = {
  plugins: {
    tailwindcss: {
      config: resolve(__dirname, './tailwind.config.js')
    },
    autoprefixer: {},
  }
}
