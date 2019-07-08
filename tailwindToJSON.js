const resolveConfig = require('tailwindcss/resolveConfig')
const fs = require('fs')

fs.writeFileSync('tailwind.theme.json', JSON.stringify(resolveConfig(require('./tailwind.config'))))
