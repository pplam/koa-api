/* jshint indent: 2 */

export default (sequelize, DataTypes) => {
  return sequelize.define('Cart', {
    amount: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    product: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    user: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  }, {
    tableName: 'cart',
  })
}
