const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

<<<<<<< HEAD:models/Like.js
class Like extends Model { }

Like.init(
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
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
=======
class Likes extends Model {}

Likes.init(
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
          model: 'users',
          key: 'id'
        }
      },
    
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'posts',
          key: 'id'
        }
>>>>>>> develop:models/Likes.js
      }
    },
<<<<<<< HEAD:models/Like.js
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'post',
        key: 'id'
=======
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'likes'
>>>>>>> develop:models/Likes.js
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'like'
  }
);

<<<<<<< HEAD:models/Like.js
module.exports = Like;
=======
    module.exports = Likes;
>>>>>>> develop:models/Likes.js
