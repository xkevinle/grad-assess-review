const { User, Message } = require("./model");

const userController = {
  createUser: async (req, res, next) => {
    try {
      const { userName, password } = req.body;
      const newUser = await User.create({ userName, password });
      res.locals.user = newUser;
      return next();
    } catch (err) {
      return next({ err });
    }
  },

  verifyUser: async (req, res, next) => {
    try {
      const { userName, password } = req.body;
      const verified = await User.findOne({ userName, password });
      //if didnt find it, send back false
      console.log(verified)
      // res.redirect(200, '/chatRoom')
      verified ? res.locals.verified = verified : next({
        log: 'no username/password',
        status: 400,
        message: { err: 'wrong username/password' },
      });
      return next();
    } catch (err) {
      return next({ err });
    }
  },
};

const cookieController = {
  setCookie: (req, res, next) => {
    res.cookie('chatroom', res.locals.user.id)
    return next();
  }
}

const messageController = {};

module.exports = { userController, messageController, cookieController };
