const { Users } = require('../../models');
const bcrypt = require('bcrypt');

const userData = [
    {
        first_name: 'Albert',
        last_name: 'Anderson',
        pen_name: 'Alband',
        email: 'albert.anderson@gmail.com',
        password: '$2b$08$h6kF5vf23Tz3WFgZpvE/7eRAnnx6v5rSTDjjZyPFo95Seu8fpZ2Mi', // AlbertIsCool!
    },
    {
        first_name: 'Brian',
        last_name: 'Beecham',
        pen_name: 'BB_Cool',
        email: 'brian.beecham@yahoo.com',
        password: '$2b$08$etB23Kr.fyopxQLFSuDNV.j7mMjcdAguwZPH7riWw9WyBlPEHwyIS', // BrianIsCool!
    },
    {
        first_name: 'Charles',
        last_name: 'Cornell',
        pen_name: 'Corny_Charles',
        email: 'charles.cornell@hotmail.com',
        password: '$2b$08$u3C53Q1VnqQNoq5lKRHUNOFNM9OhNAya8Dpm1DUqUZF2nHdBTdr8m', // CharlesIsCool!
    }
];

const seedUsers = () => Users.bulkCreate(userData);

module.exports = seedUsers;