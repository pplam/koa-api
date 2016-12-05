/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('delivery', {
    unit: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sourceAddress: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sourceName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sourcePhone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sourceContact: {
      type: DataTypes.STRING,
      allowNull: true
    },
    deliveryNo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    deliveryName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    deliveryPhone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    deliveryContact: {
      type: DataTypes.STRING,
      allowNull: true
    },
    amount: {
      type: DataTypes.INTEGER(11),
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
    tableName: 'delivery'
  });
};
