export const removeDefaultSuffix = str => str.replace(/-(default|DEFAULT)/, '')

export const remToPx = rem => parseFloat(rem) * parseFloat(getComputedStyle(document.documentElement).fontSize)
