'use strict';

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('exstore', {
    code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    storType: {
      type: DataTypes.STRING,
      allowNull: true
    },
    amount: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: true
    },
    relationID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    destinationID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    recieverAddress: {
      type: DataTypes.STRING,
      allowNull: true
    },
    reciever: {
      type: DataTypes.STRING,
      allowNull: true
    },
    recieverPhone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    warehouse: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    operator: {
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
    tableName: 'exstore'
  });
};