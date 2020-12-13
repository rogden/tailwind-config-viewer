const path = require('path')
const resolveTailwindConfig = require('tailwindcss/resolveConfig')
const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette').default

const resolveConfigPath = configPath => path.resolve(process.cwd(), configPath)

const resolveConfig = config => {
  return transformConfig(resolveTailwindConfig(config))
}

const resolveConfigToJson = configPath => {
  const tailwindConfig = require(configPath)
  return JSON.stringify(resolveConfig(tailwindConfig))
}

const transformConfig = config => {
  config.theme = replaceWithOverrides(config.theme)
  config.theme.colors = flattenColorPalette(config.theme.colors)
  config.theme.backgroundColor = flattenColorPalette(config.theme.backgroundColor)
  config.theme.textColor = flattenColorPalette(config.theme.textColor)
  config.theme.borderColor = flattenColorPalette(config.theme.borderColor)

  removeConfigProps(config, [
    'variants',
    'purge',
    'plugins',
    'corePlugins',
    'target'
  ])

  return config
}

const replaceWithOverrides = (theme) => {
  if (theme.configViewer && theme.configViewer.themeReplacements) {
    Object.keys(theme.configViewer.themeReplacements).forEach(key => {
      theme[key] = {
        ...theme[key],
        ...theme.configViewer.themeReplacements[key]
      }
    })
  }

  return theme
}

const removeConfigProps = (config, props) => {
  props.forEach(prop => delete config[prop])
}

module.exports = {
  resolveConfig,
  resolveConfigPath,
  resolveConfigToJson,
  transformConfig
}
