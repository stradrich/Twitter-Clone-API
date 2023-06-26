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
    tweet_text: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field:'tweet_text'
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      },
      field: 'created_by'

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
    tableName: 'tweets',
    timestamps: false,
  }
)




module.exports = Tweets;
