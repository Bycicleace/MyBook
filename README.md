# MyBook 
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
[![npm](https://badge.fury.io/js/inquirer.svg)](http://badge.fury.io/js/inquirer)


## Table of Contents
* [Description](#description)
* [User Story](#user-story)
* [Acceptance Criteria](#acceptance-criteria)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Tests](#tests)
* [Contributing](#contributers-and-contact-info)

## Description 
MyBook is an interactive web application where users collaborate to produce a written work as a group and where all members are allowed to contribute to the content. This application follows the MVC paradigm in it's structure and uses Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication. 

## User Story
```
AS A writer
I WANT to be able to start my own story or add to an exisiting story with a dashboard that gives me editing options
SO THAT I can submit my own creations and view/edit my contributions
```
## Acceptance Criteria
```
GIVEN the MyBook site
WHEN I click Login
THEN I am able to supply a username/password and get to my dashboard
WHEN I click Logout
THEN I am no longer able to see the dashboard
WHEN I click the Site name in upper right hand corner
THEN I am taken to the homepage
WHEN I am taken to my dashboard 
THEN I am given several options for editing my contributions
```

## Installation 
The user should clone the repository from GitHub. This application requires Node.js, Express.js, Sequelize, mysql2, connection-session/express-session, bcrypt, express-handlebars and  Jest. If cloning the repo, run npm i to run all modules. To connect to the database run mysql -u root -p and enter password from .env file. Then source the schema.sql. To connect to the server run npm start.

## Usage 
This application will allow users to sign up if they are not a member, then once they are logged in they are able to view their dashboard. Here users can view their stories, likes, and posts with options to view, add, edit, or delete their stories. <br>
Please view deployed live Heroku

## License 
This project is license under MIT

## Tests
![GitHub license](https://img.shields.io/badge/test-100%25-success)


## Contributers and Contact Info

* <strong>Elliot Kvamme</strong>
    * Email: elliott.kvamme@gmail.com
    * Github: [Bycicleace](https://github.com/Bycicleace)
* <strong>Ian Holmes</strong>
    * Email: Concord511@gmail.com
    * Github: [Concord511](https://github.com/Concord511)
* <strong>Ahmed Sajjad</strong>
    * Email: uasajjad11198@outlook.com
    * Github: [Ahmed-Sajjad111](https://github.com/Ahmed-Sajjad111)
* <strong>Raymond Cerney</strong>
    * Email: cerne004@gmail.com
    * Github: [RaymondCerneyTech](https://github.com/RaymondCerneyTech)
* <strong>Manny Melendez</strong>
    * Email: mele0019@gmail.com
    * Github: [mmelendez3](https://github.com/mmelendez3)