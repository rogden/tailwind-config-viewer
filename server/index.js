const Koa = require('koa')
const serve = require('koa-static')
const Router = require('@koa/router')
const portfinder = require('portfinder')
const path = require('path')
const open = require('open')
const resolveConfig = require('tailwindcss/resolveConfig')

const app = new Koa()
const router = new Router()
const port = 3000

router.get('/config', (ctx) => {
  const tailwindConfigPath = path.resolve(process.argv[2] || (process.cwd(), 'tailwind.config.js'))
  // delete the require cache of tailwind config so we can pick up new changes
  delete require.cache[tailwindConfigPath]
  const tailwindConfig = require(tailwindConfigPath)
  ctx.body = resolveConfig(tailwindConfig).theme
})

app
  .use(serve(`${__dirname}/../dist`))
  .use(router.routes())
  .use(router.allowedMethods())

portfinder.getPort({
  port: 3000
}, (err, port) => {
  if (err) {
    throw (err)
  }

  app.listen(port, async () => {
    console.log(__dirname)
    console.log('Server Started ∹ http://localhost:' + port.toString())
    open('http://localhost:' + port.toString())
  })
})

module.exports = app
