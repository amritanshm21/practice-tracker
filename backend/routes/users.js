const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    // return res.status(200).json('hello sir')
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;

  const newUser = new User({username});

  newUser.save()
    .then(() => res.json('Good, User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;