// I'm sure this would be simpler with postcss

const transformViewerCSS = ({ theme }) => {
  return getFonts(theme)
}

const getFonts = (theme) => {
  if (!theme?.configViewer?.fonts) return ''

  const { fonts } = theme.configViewer

  return fonts
    .map(font => kebabKeys(font))
    .map(font => `@font-face ${JSON.stringify(font, null, 2).replace(/,/g, ';')}`)
    .join('\n')
    .replace(/"/g, '')
}

const kebabKeys = (obj) => {
  return Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [kebabCase(key)]: obj[key] }
    }),
    {}
  )
}

const kebabCase = str => str.replace(/font[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? '-' : '') + $.toLowerCase())

module.exports = transformViewerCSS
