const Koa = require('koa')
const serve = require('koa-static')
const Router = require('@koa/router')
const portfinder = require('portfinder')
const program = require('commander')
const path = require('path')
const open = require('open')
const resolveConfig = require('tailwindcss/resolveConfig')

// Setup CLI options
program
  .option('-p, --port <port>', 'Port to run the viewer on', 3000)
  .option('-o, --open', 'Open the viewer in default browser')
  .option('-c, --config <path>', 'Path to your Tailwind config file', 'tailwind.config.js')
  .parse(process.argv)

const app = new Koa()
const router = new Router()

router.get('/config', (ctx) => {
  const tailwindConfigPath = path.resolve(process.cwd(), program.config)
  // delete the require cache of tailwind config so we can pick up new changes
  delete require.cache[tailwindConfigPath]
  const tailwindConfig = require(tailwindConfigPath)
  ctx.body = resolveConfig(tailwindConfig)
})

app
  .use(serve(`${__dirname}/../dist`))
  .use(router.routes())
  .use(router.allowedMethods())

portfinder.getPort({
  port: program.port
}, (err, port) => {
  if (err) {
    throw (err)
  }

  app.listen(port, async () => {
    console.log('Server Started ∹ http://localhost:' + program.port.toString())
    if (program.open) open('http://localhost:' + program.port.toString())
  })
})

module.exports = app
