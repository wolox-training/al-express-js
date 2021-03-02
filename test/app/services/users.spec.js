const { userMockReq, userMockRes } = require('../../mocks/users');
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
});
