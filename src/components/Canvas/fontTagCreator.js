export default function fontTagCreator (theme) {
  let fonts = theme.configViewer.fonts

  if (!fonts) return

  if (typeof fonts === 'string') {
    fonts = [fonts]
  }

  fonts.forEach(font => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = font
    document.head.append(link)
  })
}
