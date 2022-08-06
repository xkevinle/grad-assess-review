const express = require('express');

const { userController, messageController, cookieController } = require('./controllers');

const router = express.Router();

//route handler for creating a new user
router.post('/users', userController.createUser, cookieController.setCookie, (req, res) => {
  res.redirect('/chatroom')
})

router.post('/login', userController.verifyUser,
  //userController.setCookie
  (req, res) => {
  // res.redirect(200, '/chatroom')
    console.log('please go')
    res.redirect('/chatroom')
  //send the chat room page
})

module.exports = router;