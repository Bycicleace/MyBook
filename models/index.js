const User = require('./User');
const Dislike = require('./Dislike');
const Like = require('./Like');
const Story = require('./Story');
const Post = require('./Post');
const Comment = require('./Comment');


// create associations

  //User
  User.hasMany(Post, {
    foreignKey: 'user_id'
  });

  //Post
  Post.belongsTo(User, {
    foreignKey: 'user_id',
  });




  module.exports = { User, Dislike, Like, Story, Post, Comment };