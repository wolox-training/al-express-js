const request = require('supertest');

const { omit } = require('lodash');
const app = require('../../../app');
const {
  userMock,
  passwordErrorByAllResponse,
  passwordErrorByAlphaNumRes,
  passwordErrorByMinLengthRes,
  mandatoryParamsErrorResponse
} = require('../../mocks/users');

describe('Users Routes', () => {
  const apiPath = '/users';
  describe('POST /users (Sign Up)', () => {
    const signUpPath = apiPath;

    it('should be successfully', async () => {
      const res = await request(app)
        .post(signUpPath)
        .send(userMock)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/);

      expect(res.statusCode).toEqual(201);
      expect(res.body).toBeDefined();
      expect(res.body.id).toBeTruthy();
      expect(res.body.createdAt).toBeTruthy();
      expect(res.body.updatedAt).toBeTruthy();
      expect(res.body).toMatchObject(omit(userMock, ['password']));
    });

    it('should fail with an invalid password given', async () => {
      let res = undefined;

      const wrongPassword = 'aPass';
      res = await request(app)
        .post(signUpPath)
        .send({ ...userMock, password: wrongPassword })
        .set('Accept', 'application/json');

      expect(res.body).toEqual(passwordErrorByAllResponse(wrongPassword));

      const wrongPasswordAlphaNumerical = 'aPassword';
      res = await request(app)
        .post(signUpPath)
        .send({ ...userMock, password: wrongPasswordAlphaNumerical })
        .set('Accept', 'application/json');

      expect(res.body).toEqual(passwordErrorByAlphaNumRes(wrongPasswordAlphaNumerical));

      const wrongPasswordMinLength = 'aPass12';
      res = await request(app)
        .post(signUpPath)
        .send({ ...userMock, password: wrongPasswordMinLength })
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
