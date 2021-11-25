const User = require('./User');
const Like = require('./Like');
const Story = require('./Story');
const Post = require('./Post');



// create associations

  //User
  User.hasMany(Post, {
    foreignKey: 'user_id'
  });

  //Post
  Post.belongsTo(User, {
    foreignKey: 'user_id',
  });
  
  Post.belongsTo(Story, {
    foreignKey: 'user_id',
  });
  
  
  //Story
  User.hasMany(Story, {
    foreignKey: 'user_id'
  });
  
  Story.belongsTo(User, {
    foreignKey: 'user_id',
  });

  Story.hasMany(Post, {
    foreignKey: 'user_id'
  });

  //Likes
    User.belongsToMany(Post, {
    through: Like,
    as: 'liked_posts',
    foreignKey: 'user_id'
    });
  
    Post.belongsToMany(User, {
    through: Like,
    as: 'liked_posts',
    foreignKey: 'post_id'
    });
  
    Like.belongsTo(User, {
    foreignKey: 'user_id'
    });
  
    Like.belongsTo(Post, {
    foreignKey: 'post_id'
    });
  
    User.hasMany(Like, {
    foreignKey: 'user_id'
    });
  
    Post.hasMany(Like, {
    foreignKey: 'post_id'
    });





  module.exports = { User, Like, Story, Post, };
