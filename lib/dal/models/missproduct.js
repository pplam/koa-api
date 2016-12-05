'use strict';

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('missproduct', {
    barcode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    companyName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    user: {
      type: DataTypes.STRING,
      allowNull: true
    },
    userMobile: {
      type: DataTypes.STRING,
      allowNull: true
    },
    spec: {
      type: DataTypes.STRING,
      allowNull: true
    },
    salePrice: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    image: {
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
    tableName: 'missproduct'
  });
};