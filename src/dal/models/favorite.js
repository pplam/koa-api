/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('favorite', {
    frequency: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    customer: {
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
    tableName: 'favorite'
  });
};
