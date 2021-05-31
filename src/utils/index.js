export const removeDefaultSuffix = str => str.replace(/-(default|DEFAULT)/, '')

export const remToPx = (rem, config) => {
  // if non rem value passed in return value as is
  if (typeof rem === 'string' && rem.search('rem') === -1) {
    return parseFloat(rem)
  }

  return parseFloat(rem) * config.theme.configViewer.baseFontSize
}

export const appendPxToRems = (rem, config) => {
  if (rem.search('rem') === -1) return rem

  return `${rem} (${remToPx(rem, config)}px)`
}
