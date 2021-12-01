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
            [sequelize.literal('(SELECT COUNT(*) FROM likes INNER JOIN posts ON posts.story_id = stories.id WHERE posts.id = likes.post_id)'), 'like_count']
        ],
        include: [
            {
                model: Posts,
                attributes: [
                    'id',
                    'content',
                    'user_id',
                    [sequelize.literal('(SELECT COUNT(*) FROM likes WHERE posts.id = likes.post_id)'), 'like_count']
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
    .then(dbStoriesData => {
        // res.json(dbStoriesData);
        const stories = dbStoriesData.map(stories => stories.get({ plain: true }));
        res.render('homepage', { stories });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/stories/:id', (req, res) => {
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
    .then(dbStoriesData => {
        const story = dbStoriesData.get({ plain: true })

        res.render('singlestory', { story })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
});

module.exports = router;