'use strict';

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('customer', {
    code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    contactNo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    contactStartDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    contactEndDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    contactName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    contactMobile: {
      type: DataTypes.STRING,
      allowNull: true
    },
    contactEmail: {
      type: DataTypes.STRING,
      allowNull: true
    },
    contactQQ: {
      type: DataTypes.STRING,
      allowNull: true
    },
    contactPhone: {
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
    alipay: {
      type: DataTypes.STRING,
      allowNull: true
    },
    wechat: {
      type: DataTypes.STRING,
      allowNull: true
    },
    creditCard: {
      type: DataTypes.STRING,
      allowNull: true
    },
    IDCard: {
      type: DataTypes.STRING,
      allowNull: true
    },
    IDCardImage: {
      type: DataTypes.STRING,
      allowNull: true
    },
    otherCard: {
      type: DataTypes.STRING,
      allowNull: true
    },
    otherCardImage: {
      type: DataTypes.STRING,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING,
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
    tableName: 'customer'
  });
};