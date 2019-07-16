import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette'
import resolveConfig from 'tailwindcss/resolveConfig'

export default (configStr) => {
  const config = eval(configStr)
  return resolveConfig(config)
}

export const transformThemeForCanvas = ({ theme }) => {
  return [
    {
      component: 'Colors',
      title: 'Colors',
      data: flattenColorPalette(theme.colors)
    },
    {
      component: 'Spacing',
      title: 'Spacing',
      data: theme.spacing
    },
    {
      component: 'FontSizes',
      title: 'Font Sizes',
      data: theme.fontSize
    },
    {
      component: 'LetterSpacing',
      title: 'Letter Spacing',
      data: theme.letterSpacing
    },
    {
      component: 'LineHeight',
      title: 'Line Height',
      data: theme.lineHeight
    },
    {
      component: 'Screens',
      title: 'Screens',
      data: theme.screens
    },
    {
      component: 'Shadows',
      title: 'Shadows',
      data: theme.boxShadow
    },
    {
      component: 'Opacity',
      title: 'Opacity',
      data: theme.opacity
    },
    {
      component: 'BorderRadius',
      title: 'Border Radius',
      data: theme.borderRadius
    },
    {
      component: 'BorderWidth',
      title: 'Border Width',
      data: theme.borderWidth
    },
    {
      component: 'Height',
      title: 'Height',
      data: theme.height
    },
    {
      component: 'Width',
      title: 'Width',
      data: theme.width
    }
  ]
}
