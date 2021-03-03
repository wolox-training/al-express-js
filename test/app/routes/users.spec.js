jest.mock('../../../app/middlewares/session', () => ({
  verifyToken: jest.fn((_req, _res, next) => next())
}));
const request = require('supertest');

const app = require('../../../app');
const {
  userMockReq,
  passwordErrorByAllResponse,
  passwordErrorByAlphaNumRes,
  passwordErrorByMinLengthRes,
  signUpMandatoryParamsErrorRes,
  userMockRes,
  userLoginResponseMock,
  userLoginMockReq,
  loginMandatoryParamsErrorRes,
  usersListResMock,
  tokenMock,
  tokenMissingErrorMock
} = require('../../mocks/users');
const userService = require('../../../app/services/users');

describe('Users Routes', () => {
  const basePath = '/users';

  describe('GET /users (Get All)', () => {
    const getAllPath = basePath;

    beforeAll(() => {
      userService.getAll = jest.fn().mockResolvedValue(usersListResMock);
    });

    afterAll(() => {
      jest.clearAllMocks();
    });

    it('should be successfully', async () => {
      const res = await request(app)
        .get(getAllPath)
        .send({})
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${tokenMock}`)
        .expect('Content-Type', /json/);

      expect(res.statusCode).toEqual(200);
      expect(res.body).toBeDefined();
      expect(res.body).toMatchObject(usersListResMock);
    });

    it('should fail when is not given authorization header', async () => {
      const res = await request(app)
        .get(getAllPath)
        .send({})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/);
      expect(res.body).toEqual(tokenMissingErrorMock);
    });
  });

  describe('POST /users (Sign Up)', () => {
    const signUpPath = basePath;

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
      expect(res.body).toEqual(signUpMandatoryParamsErrorRes);
    });
  });

  describe('POST /users/sessions (Login)', () => {
    const loginPath = `${basePath}/sessions`;

    beforeAll(() => {
      userService.login = jest.fn().mockResolvedValue(userLoginResponseMock());
    });

    afterAll(() => {
      jest.clearAllMocks();
    });

    it('should be successfully', async () => {
      const res = await request(app)
        .post(loginPath)
        .send(userLoginMockReq)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/);

      expect(res.statusCode).toEqual(200);
      expect(res.body).toBeDefined();
      expect(res.body).toMatchObject(userLoginResponseMock());
    });

    it('should fail with an invalid password given', async () => {
      let res = undefined;

      const wrongPassword = 'aPass';
      res = await request(app)
        .post(loginPath)
        .send({ ...userMockReq, password: wrongPassword })
        .set('Accept', 'application/json');

      expect(res.body).toEqual(passwordErrorByAllResponse(wrongPassword));

      const wrongPasswordAlphaNumerical = 'aPassword';
      res = await request(app)
        .post(loginPath)
        .send({ ...userMockReq, password: wrongPasswordAlphaNumerical })
        .set('Accept', 'application/json');

      expect(res.body).toEqual(passwordErrorByAlphaNumRes(wrongPasswordAlphaNumerical));

      const wrongPasswordMinLength = 'aPass12';
      res = await request(app)
        .post(loginPath)
        .send({ ...userMockReq, password: wrongPasswordMinLength })
        .set('Accept', 'application/json');

      expect(res.body).toEqual(passwordErrorByMinLengthRes(wrongPasswordMinLength));
    });

    it('should fail when is not given any mandatory params', async () => {
      const res = await request(app)
        .post(loginPath)
        .send({ firstName: 'Andrés', lastName: 'López' })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/);
      expect(res.body).toEqual(loginMandatoryParamsErrorRes);
    });
  });
});
