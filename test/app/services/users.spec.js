const { omit } = require('lodash');
const { factoryByModel } = require('../../factory/factory_by_models');
const { userMock } = require('../../mocks/users');
const userService = require('../../../app/services/users');
const errors = require('../../../app/errors');

describe('Users Service', () => {
  let factory = null;
  beforeAll(() => {
    factory = factoryByModel('users');
  });

  it('should sign up an user successfully', async () => {
    jest.spyOn(userService, 'signUp');
    const response = await userService.signUp(userMock);

    expect(userService.signUp).toHaveBeenCalledWith(userMock);
    expect(response).toBeDefined();
    expect(response).toBeDefined();
    expect(response.id).toBeTruthy();
    expect(response.createdAt).toBeTruthy();
    expect(response.updatedAt).toBeTruthy();
    expect(response).toMatchObject(omit(userMock, ['password']));
  });

  it('should fail when is signing up an user with an existing email', async () => {
    const errorResponse = errors.schemaError('email already exists');
    factory.Model.count = jest.fn().mockResolvedValueOnce(1);
    try {
      await userService.signUp(userMock);
    } catch (error) {
      expect(error.message).toBe(errorResponse.message);
      expect(error.internalCode).toBe(errorResponse.internalCode);
    }
  });
});
