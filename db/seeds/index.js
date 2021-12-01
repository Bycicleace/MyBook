const seedUsers = require('./user-seeds.js');
const seedStories = require('./story-seeds.js');
const seedPosts = require('./post-seeds.js');
const seedLikes = require('./like-seeds.js');

const sequelize = require('../../config/connection.js');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');

    await seedStories();
    console.log('\n----- STORIES SEEDED -----\n');

    await seedPosts();
    console.log('\n----- POSTS SEEDED -----\n');

    await seedLikes();
    console.log('\n----- LIKES SEEDED -----\n');

    process.exit(0);
};

seedAll()
    .catch(err => console.log(err));