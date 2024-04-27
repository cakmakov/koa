const Koa = require('koa')
const Router = require('@koa/router')

const app = new Koa()
const router = new Router()

router.get('/', async (ctx) => {
  ctx.response.type = 'html'
  ctx.response.body = '<h1>INDEX SAYFASI</h1>'
})

router.get('/about', async (ctx) => {
  ctx.response.type = 'html'
  ctx.response.body = '<h1>ABOUT SAYFASI</h1>'
})

router.get('/contact', async (ctx) => {
  ctx.response.type = 'html'
  ctx.response.body = '<h1>CONTACT SAYFASI</h1>'
})

// If route not found, return 404
router.get('(.*)', async (ctx) => {
  ctx.response.status = 404
  ctx.response.type = 'html'
  ctx.response.body = '<h1>404 SAYFA BULUNAMADI</h1>'
})

app.use(router.routes())
app.use(router.allowedMethods())

const port = 3000
app.listen(port, () => {
  console.log(`sunucu ${port} de baslatildi.`)
})
