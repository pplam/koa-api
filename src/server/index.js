import Koa from 'koa'
// import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'
import logger from 'koa-logger'

import Dal from '../dal'
import setupCarts from './routes/cart'

export default class {
  constructor(config = {}) {
    this.host = config.host || 'localhost'
    this.port = config.port || '3000'
    this.app = new Koa()
    this.dal = new Dal(config.sequelize)

    this.app
      .use(logger)
      .use(bodyParser)
    setupCarts(this.app, this.dal)
  }

  async start() {
    try {
      await this.dal.init()
      this._server = this.app.listen(this.port)
    } catch (e) {
      console.warn('dal init error', e)
    }
  }

  async stop() {
    try {
      await this.dal.destroy()
    } catch (e) {
      console.warn('dal destroy error', e)
    }
    this._server.close()
  }
}
