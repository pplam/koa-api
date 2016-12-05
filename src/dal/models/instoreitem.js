/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('instoreitem', {
    amount: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    batchCode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    instore: {
      type: DataTypes.INTEGER(11),
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
    tableName: 'instoreitem'
  });
};
