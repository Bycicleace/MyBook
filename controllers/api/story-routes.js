const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Stories, Posts, Users } = require('../../models');

// get all posts on a story
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
        title: req.body.title,
        user_id: req.session.user_id
    })
    .then(dbStoriesData => {
        const storyData = dbStoriesData.get({ plain: true });
        console.log(storyData);
        res.json(storyData);
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});

// delete a story
router.delete('/:id', (req, res) => {
    Stories.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbStoriesData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No story found with this id' });
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;