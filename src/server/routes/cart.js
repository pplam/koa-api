import Router from 'koa-router'

export default (app, dal) => {
  const router = new Router()

  router.post('/carts', async (ctx) => {
    const created = await dal.Cart.create(ctx.request.body)
    ctx.body = created
  })

  app.use(router.routes())
  app.use(router.allowedMethods())
}
