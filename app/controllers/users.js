const userService = require('../services/users');

const signUp = async (req, res, next) => {
  try {
    const user = await userService.signUp(req.body);
    res.status(201).send(user);
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const user = await userService.login(req.body.email, req.body.password);
    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const users = await userService.getAll(req.query);
    res.status(200).send(users);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  signUp,
  login,
  getAll
};
