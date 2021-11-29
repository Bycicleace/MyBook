const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Stories, Posts, Users } = require('../../models');

// get all posts on a story
router.get('/:id', (req, res) => {
    Story.findOne({
        attributes: [
            'id',
            'title',
            'user_id',
            [sequelize.literal('(SELECT COUNT(*) FROM `like` INNER JOIN post ON post.story_id = story.id WHERE post.id = like.post_id)'), 'like_count']
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
                    [sequelize.literal('(SELECT COUNT(*) FROM `like` INNER JOIN post ON post.id = `like`.post_id INNER JOIN story ON story.id = post.story_id WHERE posts.id = like.post_id)'), 'like_count']
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