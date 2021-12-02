const router = require('express').Router();
const sequelize = require('../config/connection');
const { Stories, Posts, Users } = require('../models');
const withAuth = require('../utils/auth');
const { post } = require('./home-routes');

// get post by ID and render to edit page
// router.get('/', withAuth, (req, res) => {
//     Stories.findAll({
//         attributes: [
//             'id',
//             'title',
//             'user_id',
//             [sequelize.literal('(SELECT COUNT(*) FROM likes INNER JOIN posts ON posts.story_id = stories.id WHERE posts.id = likes.post_id)'), 'like_count']
//         ],
//         include: [
//             {
//                 model: Posts,
//                 attributes: [
//                     'id',
//                     'content',
//                     'user_id',
//                     [sequelize.literal('(SELECT COUNT(*) FROM likes WHERE posts.id = likes.post_id)'), 'like_count']
//                 ],
//                 include: {
//                     model: Users,
//                     attributes: ['pen_name']
//                 }
//             },
//             {
//                 model: Users,
//                 attributes: ['pen_name']
//             }
//         ]
//     })
//     .then(dbStoriesData => {
//         // res.json(dbStoriesData);
//         const stories = dbStoriesData.map(stories => stories.get({ plain: true }));
//         res.render('dashboard', { stories, loggedIn: true });
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

// get all posts by user
router.get('/', withAuth, (req, res) => {
    Posts.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'content',
            'user_id',
            [sequelize.literal('(SELECT COUNT(*) FROM likes INNER JOIN posts ON posts.id = likes.post_id INNER JOIN stories ON stories.id = posts.story_id WHERE posts.id = likes.post_id)'), 'like_count']
        ],
        include: [
            {
                model: Stories,
                attributes: [
                    'id',
                    'title',
                ],
                include: {
                    model: Users,
                    attributes: ['pen_name']
                }
            }
        ]
    })
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        console.log(posts)
        res.render('dashboard', { posts, loggedIn: true });
    }) 
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get a single story and render to edit page
router.get('/edit/:id', (req, res) => {
    Stories.findByPk(req.params.id, {
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
        if (dbStoriesData) {
            const story = dbStoriesData.get({ plain: true });
            res.render('edit-story', { story, loggedIn: true })
        }
        else {
            res.status(404).end();
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get a single story and render to edit page
router.get('/edit/:id', withAuth, (req, res) => {
    Stories.findByPk(req.params.id, {
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
        if (dbStoriesData) {
            const story = dbStoriesData.get({ plain: true });
            res.render('edit-story', { story, loggedIn: true })
        }
        else {
            res.status(404).end();
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get one post and render
router.get('/posts/edit/:id', withAuth, (req, res) => {
    // expects JSON:  { story_id: id }
    Posts.findByPk(req.params.id, {
        attributes: [
            'id',
            'content',
            'user_id',
            [sequelize.literal('(SELECT COUNT(*) FROM likes WHERE posts.id = likes.post_id)'), 'like_count']
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
        if (dbPostData) {
            const posts = dbPostData.get({ plain: true });
            res.render('edit-post', { posts, loggedIn: true });
        }
        else {
            res.status(404).end();
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;