const defaultOptions = {
  theme: {
    configViewer: {
      baseFontSize: 16,
      typographyExample: 'The quick brown fox jumped over the lazy dog.',
      customSections: []
    }
  }
}

export const makeDefaultCustomSection = (theme) => ({
  component: 'CustomSection',

  data: {
    type: 'text',
    typographyExample: theme.configViewer.typographyExample
  }
})

export default defaultOptions
