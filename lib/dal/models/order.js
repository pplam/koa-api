'use strict';

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('order', {
    code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    totalPrice: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    totalAmount: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true
    },
    deliveryDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    payType: {
      type: DataTypes.STRING,
      allowNull: true
    },
    receiverAddress: {
      type: DataTypes.STRING,
      allowNull: true
    },
    receiver: {
      type: DataTypes.STRING,
      allowNull: true
    },
    receiverPhone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    confirmTotalPrice: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    confirmTotalAmount: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    customer: {
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
    tableName: 'order'
  });
};