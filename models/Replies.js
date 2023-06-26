const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');
const User = require('./user');
const Tweet = require('./tweet');

class Reply extends Model {}

Reply.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  tweet_reply: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  created_by: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    },
    onDelete: 'CASCADE',
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
  modelName: 'Reply',
  // Enable timestamps
  timestamps: true,
  // Don't automatically add createdAt and updatedAt timestamps
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  // Don't use camelcase for automatically added attributes but underscore style
  // so `updatedAt` will be `updated_at`
  underscored: true,
});

// Here are the associations
User.hasMany(Reply, { foreignKey: 'created_by' });
Tweet.hasMany(Reply, { foreignKey: 'tweet_id' });

Reply.belongsTo(User, { foreignKey: 'created_by' });
Reply.belongsTo(Tweet, { foreignKey: 'tweet_id' });

module.exports = Reply;