const express = require('express');

const { userController, messageController } = require('./controllers');

const router = express.Router();

//route handler for creating a new user
router.post('/users', userController.createUser, (req, res, next) => {
  res.status(200).json(res.locals.user)
})

module.exports = router;