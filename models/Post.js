const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

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
                'post_id',
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
      }
    },
    story_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'story',
        key: 'id'
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







module.exports = Post;