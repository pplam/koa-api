import model from './models'
import Database from './db'
import Cart from './cart'

export default class {
  constructor(config = {}) {
    this.db = new Database(config)
    this.dbConnected = false

    this.Cart = null
  }

  async init() {
    if (!this.dbConnected) {
      await this._connect()
    }
    const models = model(this.db.sequelize)
    this.Cart = new Cart(models.Cart)
  }

  async destroy() {
    if (this.dbConnected) {
      this._disconnect()
    }
  }

  async _connect() {
    await this.db.connect()
    this.dbConnected = true
  }

  async _disconnect() {
    await this.db.disconnect()
    this.dbConnected = false
  }
}
