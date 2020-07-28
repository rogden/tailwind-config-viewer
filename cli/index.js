#!/usr/bin/env node
const program = require('commander')

program
  .option('-c, --config <path>', 'Path to your Tailwind config file', 'tailwind.config.js')

program
  .command('serve', { isDefault: true })
  .description('Serve the viewer')
  .option('-p, --port <port>', 'Port to run the viewer on', 3000)
  .option('-o, --open', 'Open the viewer in default browser')
  .action(args => {
    require('../server')({
      port: args.port,
      tailwindConfigPath: program.config,
      shouldOpen: args.open
    })
  })

program
  .command('export [outputDir]')
  .description('Create a static export of the viewer')
  .action((outputDir = './tcv-build') => {
    require('./export')(outputDir, program.config)
  })

program.parse(process.argv)
