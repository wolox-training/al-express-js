const { omit } = require('lodash');
const { factoryByModel } = require('../../factory/factory_by_models');
const { userMock } = require('../../mocks/users');
const userService = require('../../../app/services/users');
const UserRepository = require('../../../app/repositories/users');
const errors = require('../../../app/errors');

describe('Users Service', () => {
  beforeAll(() => {
    factoryByModel('users');
  });

  it('should sign up an user successfully', async () => {
    jest.spyOn(userService, 'signUp');
    const response = await userService.signUp(userMock);

    expect(userService.signUp).toHaveBeenCalledWith(userMock);
    expect(response).toBeDefined();
    expect(response.dataValues).toBeDefined();
    expect(response.dataValues.id).toBeTruthy();
    expect(response.dataValues.createdAt).toBeTruthy();
    expect(response.dataValues.updatedAt).toBeTruthy();
    expect(response.dataValues).toMatchObject(omit(userMock, ['password']));
  });

  it('should fail when is signing up an user with an existing email', async () => {
    const errorResponse = errors.databaseError('email already exists');
    UserRepository.prototype.existBy = jest.fn().mockRejectedValueOnce(errorResponse);
    try {
      await userService.signUp(userMock);
    } catch (error) {
      expect(error.message).toBe(errorResponse.message);
      expect(error.internalCode).toBe(errorResponse.internalCode);
    }
  });
});
