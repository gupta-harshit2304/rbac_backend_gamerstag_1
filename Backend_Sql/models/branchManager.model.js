const DataTypes = require('sequelize');
const databaseConnection = require('../connection');

const branchManagerModel = databaseConnection.define('branchManager', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contactNo: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
});

  module.exports=branchManagerModel;