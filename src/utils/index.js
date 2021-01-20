export const removeDefaultSuffix = str => str.replace(/-(default|DEFAULT)/, '')

export const remToPx = (rem, config) => {
  return parseFloat(rem) * config.theme.configViewer.baseFontSize
}

export const appendPxToRems = (rem, config) => {
  if (rem.search('rem') === -1) return rem

  return `${rem} (${remToPx(rem, config)}px)`
}
