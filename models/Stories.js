const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Stories extends Model {}

<<<<<<< HEAD:models/Story.js
Story.init(
=======


Stories.init(
>>>>>>> develop:models/Stories.js
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'stories'
    }
  );

  module.exports = Stories;