const Koa = require('koa')
const serve = require('koa-static')
const Router = require('@koa/router')
const portfinder = require('portfinder')
const open = require('open')
const { resolveConfig } = require('../lib/tailwindConfigUtils')

function createServer ({
  port = 3000,
  tailwindConfigProvider,
  shouldOpen
}) {
  const app = new Koa()
  const router = new Router()

  router.get('/config.json', (ctx) => {
    ctx.body = resolveConfig(tailwindConfigProvider())
  })

  app
    .use(serve(`${__dirname}/../dist`))
    .use(router.routes())
    .use(router.allowedMethods())

  return {
    app,
    asMiddleware: () => {
      return app.callback()
    },
    start: () => {
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
  }
}

module.exports = createServer
