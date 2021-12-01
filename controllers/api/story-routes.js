const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Stories, Posts, Users } = require('../../models');

// get all posts on a Stories
router.get('/:id', (req, res) => {
    Stories.findOne({
        attributes: [
            'id',
            'title',
            'user_id',
            [sequelize.literal('(SELECT COUNT(*) FROM likes INNER JOIN posts ON posts.story_id = stories.id WHERE posts.id = likes.post_id)'), 'like_count']
        ],
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Posts,
                attributes: [
                    'id',
                    'content',
                    'user_id',
                    [sequelize.literal('(SELECT COUNT(*) FROM likes INNER JOIN posts ON posts.id = likes.post_id INNER JOIN stories ON stories.id = posts.story_id WHERE posts.id = likes.post_id)'), 'like_count']
                ],
                include: {
                    model: Users,
                    attributes: ['pen_name']
                }
            },
            {
                model: Users,
                attributes: ['pen_name']
            }
        ]
    })
    .then(dbStoriesData => res.json(dbStoriesData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// create a Stories
router.post('/', (req, res) => {
    Stories.create({
        id: req.body.id,
        title: req.body.title,
        user_id: req.body.user_id
    })
    .then(dbStoriesData => res.json(dbStoriesData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});

module.exports = router;