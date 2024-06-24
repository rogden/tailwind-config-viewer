#!/usr/bin/env node
const { pathToFileURL } = require('url')
const { resolveConfigPath } = require('../lib/tailwindConfigUtils')
const program = require('commander')
program
  .option('-c, --config <path>', 'Path to your Tailwind config file', './tailwind.config.js')

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
