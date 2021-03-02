const userService = require('../services/users');

const signUp = async (req, res, next) => {
  try {
    const user = await userService.signUp(req.body);
    res.status(201).send(user);
  } catch (e) {
    next(e);
  }
};

const login = async (req, res, next) => {
  try {
    const user = await userService.login(req.body.email, req.body.password);
    res.status(200).send(user);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  signUp,
  login
};
