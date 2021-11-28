const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Posts, Users, Likes } = require('../../models');

// get all posts on a story
router.get('/', (req, res) => {
    // expects JSON:  { story_id: id }
    Posts.findAll({
        attributes: [
            'id',
            'content',
            'story_id',
            [sequelize.literal('(SELECT COUNT(*) FROM `likes` WHERE post.id = like.post_id)'), 'like_count']
        ],
        where: {
            story_id: req.body.story_id
        },
        include: [
            {
                model: Users,
                attributes: ['id', 'pen_name']
            }
        ]
    })
    .then(dbPostData => {
        res.json(dbPostData);
        // const posts = dbPostData.map(post => post.get({ plain: true }));
        // res.render('storypage', { posts });
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});

// get one post (this will be used more when comments are implemented)
router.get('/:id', (req, res) => {
    // expects JSON:  { story_id: id }
    Posts.findAll({
        attributes: [
            'id',
            'content',
            'user_id',
            [sequelize.literal('(SELECT COUNT(*) FROM `likes` WHERE post.id = like.post_id)'), 'like_count']
        ],
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Users,
                attributes: ['pen_name']
            }
        ]
    })
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('storypage', { posts });
    });
});

// create a post
router.post('/', (req, res) => {
    Posts.create({
        content: req.body.content,
        user_id: req.body.user_id,
        story_id: req.body.story_id
    })
    .then(dbStoryData => res.json(dbStoryData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});

// create a like at /api/posts/like
router.put('/like', (req, res) => {
    // custom static method created in models/Posts.js
    Posts.like(req.body, { Likes })
        .then(updatedPostData => res.json(updatedPostData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});

module.exports = router;