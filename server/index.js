const Koa = require('koa')
const serve = require('koa-static')
const Router = require('@koa/router')
const portfinder = require('portfinder')
const open = require('open')
const { resolveConfig, resolveConfigPath } = require('../lib/tailwindConfigUtils')

function createServer ({ port = 3000, tailwindConfigPath, shouldOpen }) {
  const app = new Koa()
  const router = new Router()

  router.get('/config.json', (ctx) => {
    // delete the require cache of tailwind config so we can pick up new changes
    delete require.cache[resolveConfigPath(tailwindConfigPath)]
    ctx.body = resolveConfig(tailwindConfigPath)
  })

  app
    .use(serve(`${__dirname}/../dist`))
    .use(router.routes())
    .use(router.allowedMethods())

  portfinder.getPort({
    port
  }, (err, port) => {
    if (err) {
      throw (err)
    }

    app.listen(port, async () => {
      console.log('Server Started ∹ http://localhost:' + port.toString())

      if (shouldOpen) {
        open('http://localhost:' + port.toString())
      }
    })
  })
}

module.exports = createServer
