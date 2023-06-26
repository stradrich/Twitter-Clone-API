const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');
const User = require('./user');

class Tweet extends Model {}

Tweet.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  tweet_text: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  created_by: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
    onUpdate: 'CASCADE',
  },
}, {
  sequelize,
  modelName: 'Tweet',
  // Enable timestamps
  timestamps: true,
  // Don't automatically add createdAt and updatedAt timestamps
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  // Don't use camelcase for automatically added attributes but underscore style
  // so `updatedAt` will be `updated_at`
  underscored: true,
});

module.exports = Tweet;
