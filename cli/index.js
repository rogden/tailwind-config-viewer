#!/usr/bin/env node
const { resolveConfigPath } = require('../lib/tailwindConfigUtils')
const program = require('commander')
const { createServer } = require('vite')
const { resolve } = require('path')

program
  .option('-c, --config <path>', 'Path to your Tailwind config file', './tailwind.config.js')

program
  .command('serve', { isDefault: true })
  .description('Serve the viewer')
  .option('-p, --port <port>', 'Port to run the viewer on', 3000)
  .option('-o, --open', 'Open the viewer in default browser')
  .action(async args => {
    process.env = { ...process.env, VITE_TCV_CONFIG: program.config };

    const server = await createServer({
      root: resolve(__dirname, '../'),
      configFile: resolve(__dirname, '../vite.config.js'),
      server: {
        publicDir: resolve(__dirname, '../'),
        port: args.port,
        open: args.open
      }
    })

    await server.listen()
    server.printUrls()
  })

program
  .command('export [outputDir]')
  .description('Create a static export of the viewer')
  .action((outputDir = './tcv-build') => {
    require('./export')(outputDir, resolveConfigPath(program.config))
  })

program.parse(process.argv)
