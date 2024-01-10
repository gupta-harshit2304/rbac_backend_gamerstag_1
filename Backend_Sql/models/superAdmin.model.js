const DataTypes = require('sequelize');
const { connect } = require('../routes/rbac.routes');
const databaseConnection = require('../connection')

const superAdminModel = databaseConnection.define('superadmin', {
    
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
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    
  });

  module.exports=superAdminModel;