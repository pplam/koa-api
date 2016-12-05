/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('productcategory', {
    categoryName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    level: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    showOrder: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    PID: {
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
    tableName: 'productcategory'
  });
};
