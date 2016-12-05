import Sequelize from 'sequelize'

export default class {
  constructor(config = {}) {
    this.username = config.username || 'root'
    this.password = config.password || ''
    this.database = config.database || 'mfw'
    this.options = {
      dialect: config.dialect || 'mysql',
      host: config.host || '127.0.0.1',
      port: config.port || '3306',
    }
    // const opt
    this.sequelize = null
  }

  connect() {
    try {
      this.sequelize = new Sequelize(this.database, this.username, this.password, this.options)
    } catch (err) {
      throw err
    }
  }

  disconnect() {
    try {
      this.sequelize.close()
    } catch (err) {
      throw err
    }
  }
}
