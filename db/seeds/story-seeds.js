const Stories = require('../../models/Stories');

const storyData = [
    {
        title: 'A Walk in the Park',
        user_id: 1,
    },
    {
        title: 'Murderous Intentions',
        user_id: 2,
    },
    {
        title: 'The Ice Cube',
        user_id: 1,
    },
    {
        title: 'Frank',
        user_id: 3,
    },
    {
        title: 'I am Me',
        user_id: 3,
    }
];

const seedStories = () => Stories.bulkCreate(storyData).catch(err => {console.log(err)});

module.exports = seedStories;