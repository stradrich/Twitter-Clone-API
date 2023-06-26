const {DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

Replies.define(
  "Replies",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field:'id'
    },
    tweet_reply: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field:'tweet_reply'
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: 'id'
      },
     field: 'created_by'
    },
    tweet_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tweets',
        key: 'id'
      },
      onDelete: 'CASCADE',
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
    field: 'created_at'
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'updated_at'
    },
  },
  {
    tableName: 'replies',
    timestamps:false
  }
)

Reply.init({
 
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