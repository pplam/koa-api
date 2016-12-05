export default class {
  constructor(Model) {
    this.Cart = Model
  }

  async create(values) {
    // return new Promise((resolve, reject) => {
    //   if ()
    // })
    if (values instanceof Array) {
      return this.Cart.bulkCreate(values)
    } else {
      this.Cart.create(values)
    }
  }
}
