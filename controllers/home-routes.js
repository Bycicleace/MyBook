const router = require('express').Router();
const sequelize = require('../config/connection');
const { Stories, Posts, Users } = require('../models');

// get all stories
router.get('/', (req, res) => {
    Stories.findAll({
        attributes: [
            'id',
            'title',
            'user_id',
            [sequelize.literal('(SELECT COUNT(*) FROM `like` INNER JOIN post ON post.story_id = story.id WHERE post.id = like.post_id)'), 'like_count']
        ],
        include: [
            {
                model: Posts,
                attributes: [
                    'id',
                    'content',
                    'user_id',
                    [sequelize.literal('(SELECT COUNT(*) FROM `like` WHERE posts.id = like.post_id)'), 'like_count']
                ],
                include: {
                    model: Users,
                    attributes: ['pen_name']
                }
            },
        ]
    })
    .then(dbPostData => {
        // res.json(dbPostData);
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('homepage', { posts });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;