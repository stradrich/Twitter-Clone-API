const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');
const User = require('./user');

class Follow extends Model {}

Follow.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  follower_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  following_id: {
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
  modelName: 'Follow',
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
User.hasMany(Follow, { as: 'Followers', foreignKey: 'follower_id' });
User.hasMany(Follow, { as: 'Following', foreignKey: 'following_id' });

Follow.belongsTo(User, { as: 'Follower', foreignKey: 'follower_id' });
Follow.belongsTo(User, { as: 'Following', foreignKey: 'following_id' });

module.exports = Follow;
