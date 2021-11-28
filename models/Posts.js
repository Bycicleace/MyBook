const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

<<<<<<< HEAD:models/Post.js
class Post extends Model {
  static like(body, models) {
    return models.Like.create({
        user_id: body.user_id,
        post_id: body.post_id
    })
    .then(() => {
        return Post.findOne({
            where: {
                id: body.post_id
            },
            attributes: [
                'id',
                'created_at',
                [
                    sequelize.literal('(SELECT COUNT(*) FROM `like` WHERE post.id = like.post_id)'),
                    'like_count'
                ]
            ]
        });
    });
  }
}

Post.init(
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
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 800]
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
=======
class Posts extends Model {}

Posts.init(
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
      content: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [800]
        }
    },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
    
    story_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'stories',
          key: 'id'
        }
>>>>>>> develop:models/Posts.js
      }
    },
<<<<<<< HEAD:models/Post.js
    story_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'story',
        key: 'id'
=======
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'posts'
>>>>>>> develop:models/Posts.js
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post'
  }
);







module.exports = Posts;