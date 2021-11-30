const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const storyRoutes = require('./story-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/stories', storyRoutes);

module.exports = router;