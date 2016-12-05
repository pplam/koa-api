/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('campaign', {
    startDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    campaignType: {
      type: DataTypes.STRING,
      allowNull: true
    },
    discount: {
      type: DataTypes.STRING,
      allowNull: true
    },
    giftProductAmount: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    perLimit: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true
    },
    giftProduct: {
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
    tableName: 'campaign'
  });
};
