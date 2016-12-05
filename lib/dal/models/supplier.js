'use strict';

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('supplier', {
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    contractNo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    contractStartDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    contractEndDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    intro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    campanyContactName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    campanyContactMobile: {
      type: DataTypes.STRING,
      allowNull: true
    },
    campanyContactQQ: {
      type: DataTypes.STRING,
      allowNull: true
    },
    campanyContactEmail: {
      type: DataTypes.STRING,
      allowNull: true
    },
    campanyContactPhone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    businessContactName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    businessContactMobile: {
      type: DataTypes.STRING,
      allowNull: true
    },
    businessContactQQ: {
      type: DataTypes.STRING,
      allowNull: true
    },
    businessContactEmail: {
      type: DataTypes.STRING,
      allowNull: true
    },
    businessContactPhone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    warehouseContactName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    warehouseContactMobile: {
      type: DataTypes.STRING,
      allowNull: true
    },
    warehouseContactQQ: {
      type: DataTypes.STRING,
      allowNull: true
    },
    warehouseContactEmail: {
      type: DataTypes.STRING,
      allowNull: true
    },
    warehouseContactPhone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    website: {
      type: DataTypes.STRING,
      allowNull: true
    },
    companyType: {
      type: DataTypes.STRING,
      allowNull: true
    },
    businessType: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mainProduct: {
      type: DataTypes.STRING,
      allowNull: true
    },
    isLocal: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    nation: {
      type: DataTypes.STRING,
      allowNull: true
    },
    province: {
      type: DataTypes.STRING,
      allowNull: true
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: true
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: true
    },
    legalPerson: {
      type: DataTypes.STRING,
      allowNull: true
    },
    socialCreditCode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    operatingExpire: {
      type: DataTypes.DATE,
      allowNull: true
    },
    bankAccount: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bank: {
      type: DataTypes.STRING,
      allowNull: true
    },
    payee: {
      type: DataTypes.STRING,
      allowNull: true
    },
    payType: {
      type: DataTypes.STRING,
      allowNull: true
    },
    payCycle: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    payDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    warehouseAddress: {
      type: DataTypes.STRING,
      allowNull: true
    },
    discountInfo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    refundPeriod: {
      type: DataTypes.STRING,
      allowNull: true
    },
    deliverCycle: {
      type: DataTypes.STRING,
      allowNull: true
    },
    businessLicenseDoc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    status: {
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
    tableName: 'supplier'
  });
};