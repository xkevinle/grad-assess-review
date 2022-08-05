const { User, Message } = require('./model');


const userController = {
  createUser: async (req, res, next) => {
    try {
      const { userName, password } = req.body;
      const newUser = await User.create({userName, password});
      res.locals.user = newUser;
      return next();
    } catch (err) {
      return next({err})
    }
  },

  verifyUser: () => {
    
  }
}

const messageController = {

}

module.exports = { userController, messageController };