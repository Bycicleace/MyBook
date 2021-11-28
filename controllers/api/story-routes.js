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
            [sequelize.literal('(SELECT COUNT(*) FROM `like` INNER JOIN post ON post.Stories_id = Stories.id WHERE post.id = like.post_id)'), 'like_count']
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
                    [sequelize.literal('(SELECT COUNT(*) FROM `like` INNER JOIN post ON post.id = `like`.post_id INNER JOIN Stories ON Stories.id = post.Stories_id WHERE posts.id = like.post_id)'), 'like_count']
                ],
                include: {
                    model: Users,
                    attributes: ['pen_name']
                }
            },
        ]
    })
    .then(dbPostData => {
        res.json(dbPostData);
        // const posts = dbPostData.map(post => post.get({ plain: true }));
        // res.render('Storiespage', { posts });
    })
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