#!/usr/bin/env node
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
      tailwindConfigProvider: () => {
        const configPath = resolveConfigPath(program.config)
        delete require.cache[configPath]
        return require(configPath)
      },
      shouldOpen: args.open
    }).start()
  })

program
  .command('export [outputDir]')
  .description('Create a static export of the viewer')
  .action((outputDir = './tcv-build') => {
    require('./export')(outputDir, resolveConfigPath(program.config))
  })

program.parse(process.argv)
