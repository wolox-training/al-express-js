const userService = require('../services/users');
const { ROLE_ID_REGULAR, ROLE_ID_ADMIN } = require('../utils/constants');

const signUp = async (req, res, next) => {
  try {
    req.body.roleId = ROLE_ID_REGULAR;
    const user = await userService.signUp(req.body);
    res.status(201).send(user);
  } catch (error) {
    next(error);
  }
};

const signUpAdmin = async (req, res, next) => {
  try {
    req.body.roleId = ROLE_ID_ADMIN;
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
  signUpAdmin,
  login,
  getAll
};
