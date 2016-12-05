'use strict';

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('productsupplier', {
    buyPrice: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    minBuyAmount: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    supplierProductNo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    isDefault: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    product: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    supplier: {
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
    tableName: 'productsupplier'
  });
};