/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orderitem', {
    amount: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    confirmAmount: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    confirmPrice: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    order: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    product: {
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
    tableName: 'orderitem'
  });
};
