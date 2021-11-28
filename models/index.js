const Users = require('./Users');
const Stories = require('./Stories');
const Posts = require('./Posts');
const Likes = require('./Likes');


// User has many likes
//   Like belongs to User
Users.hasMany(Likes, {
  foreignKey: 'user_id'
});

Likes.belongsTo(Users, {
  foreignKey: 'user_id'
});

// User has many posts
//   Post belongs to User
Users.hasMany(Posts, {
  foreignKey: 'user_id'
});

Posts.belongsTo(Users, {
  foreignKey: 'user_id'
});

// User has many stories
//   Story belongs to User
Users.hasMany(Stories, {
  foreignKey: 'user_id'
});

Stories.belongsTo(Users, {
  foreignKey: 'user_id'
});

// Story has many posts
//   Post belongs to Story
Stories.hasMany(Posts, {
  foreignKey: 'story_id'
});

Posts.belongsTo(Stories, {
  foreignKey: 'story_id'
});

// Post has many likes
//   Like belongs to Post
Posts.hasMany(Likes, {
  foreignKey: 'post_id'
});

Likes.belongsTo(Posts, {
  foreignKey: 'post_id'
});

// User belongs to many Post through Like
Users.belongsToMany(Posts, {
  through: Likes,
  as: 'liked_posts',
  foreignKey: 'user_id'
});

// Post belongs to many User through Like
Posts.belongsToMany(Users, {
  through: Likes,
  as: 'liked_posts',
  foreignKey: 'post_id'
});

<<<<<<< HEAD
module.exports = { User, Story, Post, Like };
=======
module.exports = { Users, Stories, Posts, Likes };
>>>>>>> develop
