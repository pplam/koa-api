/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('refundpayment', {
    paidPrice: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    payType: {
      type: DataTypes.STRING,
      allowNull: true
    },
    refund: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    user: {
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
    tableName: 'refundpayment'
  });
};
