const path = require('path')
const resolveTailwindConfig = require('tailwindcss/resolveConfig')

const resolveConfigPath = configPath => path.resolve(process.cwd(), configPath)

const resolveConfig = configPath => {
  const config = require(resolveConfigPath(configPath))
  return resolveTailwindConfig(config)
}

const resolveConfigToJson = configPath => JSON.stringify(resolveConfig(configPath))

module.exports = {
  resolveConfig,
  resolveConfigPath,
  resolveConfigToJson
}
