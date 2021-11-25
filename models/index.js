const User = require('./User');
const Story = require('./Story');
const Post = require('./Post');
const Like = require('./Like');


// User has many likes
//   Like belongs to User
User.hasMany(Like, {
  foreignKey: 'user_id'
});

Like.belongsTo(User, {
  foreignKey: 'user_id'
});

// User has many posts
//   Post belongs to User
User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

// User has many stories
//   Story belongs to User
User.hasMany(Story, {
  foreignKey: 'user_id'
});

Story.belongsTo(User, {
  foreignKey: 'user_id'
});

// Story has many posts
//   Post belongs to Story
Story.hasMany(Post, {
  foreignKey: 'story_id'
});

Post.belongsTo(Story, {
  foreignKey: 'story_id'
});

// Post has many likes
//   Like belongs to Post
Post.hasMany(Like, {
  foreignKey: 'post_id'
});

Like.belongsTo(Post, {
  foreignKey: 'post_id'
});

// User belongs to many Post through Like
User.belongsToMany(Post, {
  through: Like,
  as: 'liked_posts',
  foreignKey: 'user_id'
});

// Post belongs to many User through Like
Post.belongsToMany(User, {
  through: Like,
  as: 'liked_posts',
  foreignKey: 'post_id'
});

module.exports = { User, Story, Post, Like };