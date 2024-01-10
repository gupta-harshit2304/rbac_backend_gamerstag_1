const DataTypes = require('sequelize');

const databaseConnection = require('../connection');

const salesPersonModel = databaseConnection.define('salesPerson', {
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
    branchManagerAssociated: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
});

  module.exports=salesPersonModel;