const Likes = require('../../models/Likes');

const likeData = [
    {
        user_id: 1,
        post_id: 5
    },
    {
        user_id: 2,
        post_id: 5
    },
    {
        user_id: 3,
        post_id: 3
    },
    {
        user_id: 1,
        post_id: 12
    },
    {
        user_id: 3,
        post_id: 15
    },
    {
        user_id: 1,
        post_id: 15
    },
    {
        user_id: 2,
        post_id: 1
    },
    {
        user_id: 1,
        post_id: 1
    },
    {
        user_id: 3,
        post_id: 1
    },
    {
        user_id: 1,
        post_id: 7
    },
    {
        user_id: 2,
        post_id: 6
    },
    {
        user_id: 3,
        post_id: 8
    },
    {
        user_id: 2,
        post_id: 8
    }
];

const seedLikes = () => Likes.bulkCreate(likeData).catch(err => {console.log(err)});

module.exports = seedLikes;