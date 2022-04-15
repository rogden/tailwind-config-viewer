const fs = require('fs-extra')
const path = require('path')
const crypto = require('crypto')
const replace = require('replace-in-file')
const { resolveConfigToJson, resolveCSS } = require('../lib/tailwindConfigUtils')

module.exports = function (outputDir, configPath) {
  outputDir = path.resolve(process.cwd(), outputDir)

  fs.removeSync(outputDir)
  fs.mkdirSync(outputDir)

  const configJson = resolveConfigToJson(configPath)
  const configCSS = resolveCSS(configJson)

  const configFileName = generateFileNameFromJson(configJson)
  const cssFileName = generateFileNameFromJson(configCSS, 'css')

  fs.writeFileSync(path.resolve(outputDir, configFileName), configJson)
  fs.writeFileSync(path.resolve(outputDir, cssFileName), configCSS)

  fs.copySync(path.resolve(__dirname, '../dist'), outputDir)

  replace.sync({
    files: `${outputDir}/index.html`,
    from: 'config.json',
    to: configFileName
  })

  replace.sync({
    files: `${outputDir}/index.html`,
    from: 'config.css',
    to: cssFileName
  })
}

function generateFileNameFromJson (configJson, ext = 'json') {
  const configFileHash = crypto
    .createHash('md5')
    .update(configJson)
    .digest('hex')

  return `config.${configFileHash.substr(0, 8)}.${ext}`
}
