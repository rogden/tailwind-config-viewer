const path = require('path')
const resolveTailwindConfig = require('tailwindcss/resolveConfig')
const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette').default

const resolveConfigPath = configPath => path.resolve(process.cwd(), configPath)

const resolveConfig = configPath => {
  const config = require(resolveConfigPath(configPath))
  return transformConfig(resolveTailwindConfig(config))
}

const resolveConfigToJson = configPath => JSON.stringify(resolveConfig(configPath))

const transformConfig = config => {
  config.theme = replaceWithOverrides(config.theme)
  config.theme.colors = flattenColorPalette(config.theme.colors)

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
  resolveConfigToJson
}
