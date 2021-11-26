const User = require('./User');
const Story = require('./Story');
const Post = require('./Post');
const Like = require('./Like');


// User has many likes
//   Like belongs to User
User.hasMany(Like, {
  foreignKey: 'user_id'
});

<<<<<<< HEAD
Like.belongsTo(User, {
  foreignKey: 'user_id'
});

// User has many posts
//   Post belongs to User
=======
// create associations
//User
>>>>>>> 58499ca (created user routes)
User.hasMany(Post, {
  foreignKey: 'user_id'
});

<<<<<<< HEAD
Post.belongsTo(User, {
  foreignKey: 'user_id'
});

// User has many stories
//   Story belongs to User
=======
//Post
Post.belongsTo(User, {
  foreignKey: 'user_id',
});

Post.belongsTo(Story, {
  foreignKey: 'user_id',
});

//Story
>>>>>>> 58499ca (created user routes)
User.hasMany(Story, {
  foreignKey: 'user_id'
});

Story.belongsTo(User, {
<<<<<<< HEAD
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

=======
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

>>>>>>> 58499ca (created user routes)
Like.belongsTo(Post, {
  foreignKey: 'post_id'
});

<<<<<<< HEAD
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
=======
User.hasMany(Like, {
  foreignKey: 'user_id'
});

Post.hasMany(Like, {
  foreignKey: 'post_id'
});

module.exports = { User, Like, Story, Post, };
>>>>>>> 58499ca (created user routes)
