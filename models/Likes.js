const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');
const User = require('./user');
const Tweet = require('./tweet');

class Like extends Model {}

Like.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  tweet_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Tweet,
      key: 'id'
    },
    onDelete: 'CASCADE',
  },
  liked_by: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    },
    onDelete: 'CASCADE',
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
  modelName: 'Like',
  // Enable timestamps
  timestamps: true,
  // Don't automatically add createdAt and updatedAt timestamps
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  // Don't use camelcase for automatically added attributes but underscore style
  // so `updatedAt` will be `updated_at`
  underscored: true,
});

User.hasMany(Like, { foreignKey: 'liked_by' });
Tweet.hasMany(Like, { foreignKey: 'tweet_id' });

Like.belongsTo(User, { foreignKey: 'liked_by' });
Like.belongsTo(Tweet, { foreignKey: 'tweet_id' });


module.exports = Like;
