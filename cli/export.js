const fs = require('fs-extra')
const path = require('path')
const crypto = require('crypto')
const replace = require('replace-in-file')
const { resolveConfigToJson } = require('../lib/tailwindConfigUtils')

module.exports = function (outputDir, configPath) {
  outputDir = path.resolve(process.cwd(), outputDir)

  fs.removeSync(outputDir)
  fs.mkdirSync(outputDir)

  const configJson = resolveConfigToJson(configPath)
  const configFileName = generateConfigFileNameFromJson(configJson)

  fs.writeFileSync(path.resolve(outputDir, configFileName), configJson)

  fs.copySync(path.resolve(__dirname, '../dist'), outputDir)

  replace.sync({
    files: `${outputDir}/index.html`,
    from: 'config.json',
    to: configFileName
  })
}

function generateConfigFileNameFromJson (configJson) {
  const configFileHash = crypto.createHash('md5').update(configJson).digest('hex')

  return `config.${configFileHash.substr(0, 8)}.json`
}
