const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');


const Tweets = sequelize.define(
  "Tweets",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field:'id'
    },
    tweetText: {
      type: DataTypes.STRING,
      allowNull: false,
      field:'tweet_text'
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      },
      field: 'created_by'

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
    tableName: 'tweets',
    timestamps: false,
  }
)

module.exports = Tweets;
