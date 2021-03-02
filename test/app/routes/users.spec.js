const request = require('supertest');

const app = require('../../../app');
const {
  userMockReq,
  passwordErrorByAllResponse,
  passwordErrorByAlphaNumRes,
  passwordErrorByMinLengthRes,
  mandatoryParamsErrorResponse,
  userMockRes
} = require('../../mocks/users');
const userService = require('../../../app/services/users');

describe('Users Routes', () => {
  const apiPath = '/users';
  describe('POST /users (Sign Up)', () => {
    const signUpPath = apiPath;

    beforeAll(() => {
      userService.signUp = jest.fn().mockResolvedValue(userMockRes);
    });

    afterAll(() => {
      jest.clearAllMocks();
    });

    it('should be successfully', async () => {
      const res = await request(app)
        .post(signUpPath)
        .send(userMockReq)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/);

      expect(res.statusCode).toEqual(201);
      expect(res.body).toBeDefined();
      expect(res.body.id).toBeTruthy();
      expect(res.body.createdAt).toBeTruthy();
      expect(res.body.updatedAt).toBeTruthy();
      expect(res.body).toMatchObject(userMockRes);
    });

    it('should fail with an invalid password given', async () => {
      let res = undefined;

      const wrongPassword = 'aPass';
      res = await request(app)
        .post(signUpPath)
        .send({ ...userMockReq, password: wrongPassword })
        .set('Accept', 'application/json');

      expect(res.body).toEqual(passwordErrorByAllResponse(wrongPassword));

      const wrongPasswordAlphaNumerical = 'aPassword';
      res = await request(app)
        .post(signUpPath)
        .send({ ...userMockReq, password: wrongPasswordAlphaNumerical })
        .set('Accept', 'application/json');

      expect(res.body).toEqual(passwordErrorByAlphaNumRes(wrongPasswordAlphaNumerical));

      const wrongPasswordMinLength = 'aPass12';
      res = await request(app)
        .post(signUpPath)
        .send({ ...userMockReq, password: wrongPasswordMinLength })
        .set('Accept', 'application/json');

      expect(res.body).toEqual(passwordErrorByMinLengthRes(wrongPasswordMinLength));
    });

    it('should fail when is not given any mandatory params', async () => {
      const res = await request(app)
        .post(signUpPath)
        .send({ firstName: 'Andrés', lastName: 'López' })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/);
      expect(res.body).toEqual(mandatoryParamsErrorResponse);
    });
  });
});
