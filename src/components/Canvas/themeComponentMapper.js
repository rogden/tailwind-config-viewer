/**
 * Maps Canvas components to theme prop in TW config
 */

import BorderRadius from "./Sections/BorderRadius.vue";
import BorderWidth from "./Sections/BorderWidth.vue";
import Colors from "./Sections/Colors.vue";
import FontFamilies from "./Sections/FontFamilies.vue";
import FontSizes from "./Sections/FontSizes.vue";
import FontWeight from "./Sections/FontWeight.vue";
import Height from "./Sections/Height.vue";
import LetterSpacing from "./Sections/LetterSpacing.vue";
import LineHeight from "./Sections/LineHeight.vue";
import MaxHeight from "./Sections/MaxHeight.vue";
import MaxWidth from "./Sections/MaxWidth.vue";
import MinHeight from "./Sections/MinHeight.vue";
import MinWidth from "./Sections/MinWidth.vue";
import Opacity from "./Sections/Opacity.vue";
import Screens from "./Sections/Screens.vue";
import Shadows from "./Sections/Shadows.vue";
import Spacing from "./Sections/Spacing.vue";
import Transitions from "./Sections/Transitions.vue";
import Width from "./Sections/Width.vue";

export default function themeComponentMapper (theme) {
  return [
    {
      themeKey: 'backgroundColor',
      component: Colors,
      title: 'Colors',
      data: {
        backgroundColor: theme.backgroundColor,
        borderColor: theme.borderColor,
        textColor: theme.textColor
      }
    },
    {
      themeKey: 'spacing',
      component: Spacing,
      title: 'Spacing',
      data: theme.spacing
    },
    {
      themeKey: 'fontSize',
      component: FontSizes,
      title: 'Font Sizes',
      data: {
        fontSize: theme.fontSize,
        typographyExample: theme.configViewer.typographyExample
      }
    },
    {
      themeKey: 'fontFamily',
      component: FontFamilies,
      title: 'Font Families',
      data: {
        fontFamily: theme.fontFamily,
        typographyExample: theme.configViewer.typographyExample
      }
    },
    {
      themeKey: 'fontWeight',
      component: FontWeight,
      title: 'Font Weight',
      data: {
        fontWeight: theme.fontWeight,
        typographyExample: theme.configViewer.typographyExample
      }
    },
    {
      themeKey: 'letterSpacing',
      component: LetterSpacing,
      title: 'Letter Spacing',
      data: {
        letterSpacing: theme.letterSpacing,
        typographyExample: theme.configViewer.typographyExample
      }
    },
    {
      themeKey: 'lineHeight',
      component: LineHeight,
      title: 'Line Height',
      data: {
        lineHeight: theme.lineHeight,
        typographyExample: theme.configViewer.typographyExample
      }
    },
    {
      themeKey: 'screens',
      component: Screens,
      title: 'Screens',
      data: theme.screens
    },
    {
      themeKey: 'boxShadow',
      component: Shadows,
      title: 'Shadows',
      data: theme.boxShadow
    },
    {
      themeKey: 'opacity',
      component: Opacity,
      title: 'Opacity',
      data: theme.opacity
    },
    {
      themeKey: 'borderRadius',
      component: BorderRadius,
      title: 'Border Radius',
      data: theme.borderRadius
    },
    {
      themeKey: 'borderWidth',
      component: BorderWidth,
      title: 'Border Width',
      data: theme.borderWidth
    },
    {
      themeKey: 'transitionTimingFunction',
      component: Transitions,
      title: 'Transitions',
      data: {
        timing: theme.transitionTimingFunction,
        duration: theme.transitionDuration,
        delay: theme.transitionDelay
      }
    },
    {
      themeKey: 'minWidth',
      component: MinWidth,
      title: 'Min Width',
      data: theme.minWidth
    },
    {
      themeKey: 'width',
      component: Width,
      title: 'Width',
      data: theme.width
    },
    {
      themeKey: 'maxWidth',
      component: MaxWidth,
      title: 'Max Width',
      data: theme.maxWidth
    },
    {
      themeKey: 'minHeight',
      component: MinHeight,
      title: 'Min Height',
      data: theme.minHeight
    },
    {
      themeKey: 'height',
      component: Height,
      title: 'Height',
      data: theme.height
    },
    {
      themeKey: 'maxHeight',
      component: MaxHeight,
      title: 'Max Height',
      data: theme.maxHeight
    }
  ].filter(({ themeKey }) => theme[themeKey])
}
