export const removeDefaultSuffix = str => str.replace('-default', '')

export const remToPx = rem => parseFloat(rem) * parseFloat(getComputedStyle(document.documentElement).fontSize)
