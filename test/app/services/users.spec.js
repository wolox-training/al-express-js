jest.mock('jsonwebtoken', () => ({ sign: jest.fn(() => 'a token!') }));
const bcrypt = require('bcryptjs');

const {
  userMockReq,
  userMockRes,
  userGetByIdResponseMock,
  userLoginResponseMock,
  usersListResMock
} = require('../../mocks/users');

const userService = require('../../../app/services/users');
const errors = require('../../../app/errors');
const UserRepository = require('../../../app/repositories/users');

describe('Users Service', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should sign up an user successfully', async () => {
    UserRepository.prototype.existBy = jest.fn().mockResolvedValue(false);
    UserRepository.prototype.save = jest.fn().mockResolvedValue(userMockRes);

    jest.spyOn(userService, 'signUp');
    const response = await userService.signUp(userMockReq);

    expect(userService.signUp).toHaveBeenCalledWith(userMockReq);
    expect(response).toBeDefined();
    expect(response.id).toBeTruthy();
    expect(response.createdAt).toBeTruthy();
    expect(response.updatedAt).toBeTruthy();
    expect(response).toMatchObject(userMockRes);
  });

  it('should fail when is signing up an user with an existing email', async () => {
    const errorResponse = errors.schemaError('email already exists');
    UserRepository.prototype.existBy = jest.fn().mockRejectedValue(errorResponse);
    try {
      await userService.signUp(userMockReq);
    } catch (error) {
      expect(error.message).toBe(errorResponse.message);
      expect(error.internalCode).toBe(errorResponse.internalCode);
    }
  });

  it('should login succesfully an existing user', async () => {
    bcrypt.compareSync = jest.fn(() => true);
    const email = 'user1@wolox.co';
    const password = 'myPassword123';

    UserRepository.prototype.getBy = jest.fn().mockResolvedValue(userGetByIdResponseMock(email));
    const user = await userService.login(email, password);
    expect(user).toEqual(userLoginResponseMock(email));
  });

  it('should not login with a not existing username', async () => {
    UserRepository.prototype.getBy = jest.fn().mockResolvedValue(undefined);
    const error = errors.schemaError('Username or password are incorrect');
    const email = 'not.exist@wolox.co';
    const password = 'myPassword123';
    try {
      await userService.login({ email, password });
    } catch (err) {
      expect(err).toEqual(error);
    }
  });
  it('should not login with an incorrect password', async () => {
    bcrypt.compareSync = jest.fn(() => false);
    const email = 'user1@wolox.co';
    const password = 'wrongPassword123';
    const error = errors.schemaError('Username or password are incorrect');
    UserRepository.prototype.getBy = jest.fn().mockResolvedValue(userGetByIdResponseMock(email));

    try {
      await userService.login(email, password);
    } catch (err) {
      expect(err).toEqual(error);
    }
  });

  it('should get all exiting users', async () => {
    UserRepository.prototype.getAll = jest.fn().mockResolvedValue(usersListResMock);
    const users = await userService.getAll({});
    expect(users).toEqual(usersListResMock);
  });

  it('should throw an error when trying to fetch all users', async () => {
    const error = errors.databaseError('Unknown error when was trying to list the users');
    UserRepository.prototype.getAll = jest.fn().mockRejectedValue(error);

    try {
      await userService.getAll({});
    } catch (err) {
      expect(err).toEqual(error);
    }
  });
});
