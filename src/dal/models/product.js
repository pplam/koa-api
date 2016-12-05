/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product', {
    code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    barcode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    englishName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    keyword: {
      type: DataTypes.STRING,
      allowNull: true
    },
    spec: {
      type: DataTypes.STRING,
      allowNull: true
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true
    },
    province: {
      type: DataTypes.STRING,
      allowNull: true
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: true
    },
    expired: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    expiredUnit: {
      type: DataTypes.STRING,
      allowNull: true
    },
    unit: {
      type: DataTypes.STRING,
      allowNull: true
    },
    salePrice: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    buyPrice: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    minBuyAmount: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    online: {
      type: DataTypes.STRING,
      allowNull: true
    },
    maxStore: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    minStore: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true
    },
    image1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    image2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    image3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    amountRelation: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    intro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    amount: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    avaliableDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    minSaleAmount: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    category: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    parentProduct: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'product'
  });
};
