const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config.js');

const User = sequelize.define(
  "User", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "id"
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "name"
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      field: "email"
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "password"
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: "created_at"
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: "updated_at"
    },
  },
  {
    tableName: "users",
    timestamps: false
  }
)

module.exports = User;
