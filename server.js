const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path'); //used this to connect middleware path.join below to get the CSS file
// const session = require('express-session');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

// //set up handlebars as template engine of choice
// const exphbs = require('express-handlebars');
// const hbs = exphbs.create({});

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); //used this to connect CSS file in public folder

// //session
// const sess = {
//   secret: process.env.SESS_SECRET,
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };

// app.use(session(sess));


// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
