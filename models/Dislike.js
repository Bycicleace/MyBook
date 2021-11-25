const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Dislike extends Model {}

Dislike.init(
    {
      // define an id column
      id: {
        // use the special Sequelize DataTypes object provide what type of data it is
        type: DataTypes.INTEGER,
        // this is the equivalent of SQL's `NOT NULL` option
        allowNull: false,
        // instruct that this is the Primary Key
        primaryKey: true,
        // turn on auto increment
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      },
    
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'post',
          key: 'id'
        }
      }
      
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'dislike'
      }
    );

    module.exports = Dislike;