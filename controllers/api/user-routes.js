const router = require('express').Router();
const { Users, Posts, Stories, Likes } = require('../../models');

// get all users
router.get('/', (req, res) => {
  Users.findAll({
    attributes: { exclude: ['password'] },
    include: [
      {
        model: Stories,
        attributes: ['id', 'title']
      },
      {
        model: Posts,
        attributes: ['id', 'content', 'story_id'],
        include: {
          model: Stories,
          attributes: ['title']
        }
      }
    ]
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get one user by ID
router.get('/:id', (req, res) => {
  Users.findOne({
    attributes: { exclude: ['password'] },
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Stories,
        attributes: ['id', 'title']
      },
      {
        model: Posts,
        attributes: ['id', 'content', 'story_id'],
        include: {
          model: Stories,
          attributes: ['title']
        }
      }
    ]
  })
  .then(dbUserData => {
    if (!dbUserData) {
      res.status(404).json({ message: 'No user found with this id' });
      return;
    }
    res.json(dbUserData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// creating a Users
router.post('/', (req, res) => {
  Users.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    pen_name: req.body.pen_name,
    email: req.body.email,
    password: req.body.password
  })
  .then(dbUserData => {
    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.pen_name = dbUserData.pen_name;
      req.session.loggedIn = true;

      res.json(dbUserData);
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// user login
router.post('/login', (req, res) => {
  Users.findOne({
    where: {
      email: req.body.email
    }
  })
  .then(dbUserData => {
    if (!dbUserData) {
      res.status(400).json({ message: 'No user with that email address' });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.pen_name = dbUserData.pen_name;
      req.session.loggedIn = true;

      res.json({ user: dbUserData, message: 'You are now logged in.' });
    });
  });
});

// logout user
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
});

// update user
router.put('/:id', (req, res) => {
  // possibly only pass req.body.email below?
  Users.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  })
  .then(dbUserData => {
    if (!dbUserData[0]) {
      res.status(404).json({ message: 'No user found with this id' });
      return;
    }
    res.json(dbUserData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// delete users
router.delete('/:id', (req, res) => {
  Users.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbUserData => {
    if (!dbUserData) {
      res.status(404).json({ message: 'No user found with this id' });
      return;
    }
    res.json(dbUserData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;