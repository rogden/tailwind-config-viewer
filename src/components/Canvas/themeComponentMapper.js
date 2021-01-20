/**
 * Maps Canvas components to theme prop in TW config
 */
export default function themeComponentMapper (theme) {
  return [
    {
      component: 'Colors',
      title: 'Colors',
      data: {
        backgroundColor: theme.backgroundColor,
        borderColor: theme.borderColor,
        textColor: theme.textColor
      }
    },
    {
      component: 'Spacing',
      title: 'Spacing',
      data: theme.spacing
    },
    {
      component: 'FontSizes',
      title: 'Font Sizes',
      data: {
        fontSize: theme.fontSize,
        typographyExample: theme.configViewer.typographyExample
      }
    },
    {
      component: 'FontWeight',
      title: 'Font Weight',
      data: {
        fontWeight: theme.fontWeight,
        typographyExample: theme.configViewer.typographyExample
      }
    },
    {
      component: 'LetterSpacing',
      title: 'Letter Spacing',
      data: {
        letterSpacing: theme.letterSpacing,
        typographyExample: theme.configViewer.typographyExample
      }
    },
    {
      component: 'LineHeight',
      title: 'Line Height',
      data: {
        lineHeight: theme.lineHeight,
        typographyExample: theme.configViewer.typographyExample
      }
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
    addIfThemePropExists(theme.transitionTimingFunction, () => {
      return {
        component: 'Transitions',
        title: 'Transitions',
        data: {
          timing: theme.transitionTimingFunction,
          duration: theme.transitionDuration,
          delay: theme.transitionDelay
        }
      }
    }),
    {
      component: 'MinWidth',
      title: 'Min Width',
      data: theme.minWidth
    },
    {
      component: 'Width',
      title: 'Width',
      data: theme.width
    },
    {
      component: 'MaxWidth',
      title: 'Max Width',
      data: theme.maxWidth
    },
    {
      component: 'MinHeight',
      title: 'Min Height',
      data: theme.minHeight
    },
    {
      component: 'Height',
      title: 'Height',
      data: theme.height
    },
    {
      component: 'MaxHeight',
      title: 'Max Height',
      data: theme.maxHeight
    }
  ].filter(_ => _)
}

function addIfThemePropExists (themeProp, callback) {
  if (themeProp) return callback(themeProp)

  return false
}
