#!/usr/bin/env node
const { pathToFileURL } = require('url')
const { resolveConfigPath } = require('../lib/tailwindConfigUtils')
const { readFile, access, constants } = require('fs/promises')
const program = require('commander')

program
  .option('-c, --config <path>', 'Path to your Tailwind config file', './tailwind.config.js')
  .option('--css <path>', 'Path to your CSS style file', './style.css')

program
  .command('serve', { isDefault: true })
  .description('Serve the viewer')
  .option('-p, --port <port>', 'Port to run the viewer on', 3000)
  .option('-o, --open', 'Open the viewer in default browser')
  .action(args => {
    require('../server')({
      port: args.port,
      tailwindConfigProvider: async () => {
        const configPath = resolveConfigPath(program.config)
        const configHref = pathToFileURL(configPath).href
        delete require.cache[configHref]
        const config = await import(configHref)
        return config.default || config
      },
      cssProvider: async () => {
        const filePath = program.css

        try {
          await access(filePath, constants.F_OK)
          const styles = await readFile(filePath, 'utf-8')
          return styles
        } catch (err) {}
      },
      shouldOpen: args.open
    }).start()
  })

program
  .command('export [outputDir]')
  .description('Create a static export of the viewer')
  .action((outputDir = './tcv-build') => {
    const configPath = resolveConfigPath(program.config)
    const configHref = pathToFileURL(configPath).href
    require('./export')(outputDir, configHref)
  })

program.parse(process.argv)
