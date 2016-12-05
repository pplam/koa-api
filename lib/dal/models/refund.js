'use strict';

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('refund', {
    code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    totalPrice: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    amount: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true
    },
    refundType: {
      type: DataTypes.STRING,
      allowNull: true
    },
    customer: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    order: {
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
    tableName: 'refund'
  });
};