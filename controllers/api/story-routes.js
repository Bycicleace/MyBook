const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Story, Post, User } = require('../../models');

// get all posts on a story
router.get('/:id', (req, res) => {
    Story.findOne({
        attributes: [
            'id',
            'title',
            'user_id'
        ],
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Post,
                attributes: [
                    'id',
                    'content',
                    'user_id',
                    // [sequelize.literal('(SELECT COUNT(*) FROM `like` WHERE post.id = like.post_id)'), 'like_count']
                ],
                include: {
                    model: User,
                    attributes: ['pen_name']
                }
            },
        ]
    })
    .then(dbPostData => {
        res.json(dbPostData);
        // const posts = dbPostData.map(post => post.get({ plain: true }));
        // res.render('storypage', { posts });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// create a story
router.post('/', (req, res) => {
    Story.create({
        id: req.body.id,
        title: req.body.title,
        user_id: req.body.user_id
    })
    .then(dbStoryData => res.json(dbStoryData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});

module.exports = router;