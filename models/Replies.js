const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Replies = sequelize.define(
  "Replies",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field:'id'
    },
    tweetReply: {
      type: DataTypes.STRING,
      allowNull: false,
      field:'tweet_reply'
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: 'id'
      },
     field: 'created_by'
    },
    tweetId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tweets',
        key: 'id'
      },
      field: "tweet_id"
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'created_at'
    },
    updatedAt: {
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

module.exports = Replies;