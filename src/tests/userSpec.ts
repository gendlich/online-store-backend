import { UserModels } from '../models/user';
import supertest from 'supertest';
import app from '../server';

const request = supertest(app);
const userModel = new UserModels();
let hashedPassword = '';
let token = '';

beforeAll(async (done) => {
  request
    .post('/user/')
    .send({
      firstname: 'John',
      lastname: 'Doe',
      password: '1234'
    })
    .end((e, response) => {
      token = response.body.token;
      hashedPassword = response.body.createUser.password;
      done();
    });
});

describe('User delete endpoint test:', () => {
  it('should work', async () => {
    const res = await request.delete('/user/1').auth(token, { type: 'bearer' });
    expect(res.status).toBe(200);
  });
});

describe('User Model', () => {
  it('should have an index methor', () => {
    expect(userModel.index).toBeDefined;
  });
  it('should have an show method', () => {
    expect(userModel.show).toBeDefined;
  });
  it('should have an create method', () => {
    expect(userModel.create).toBeDefined;
  });

  it('show method should return the correct user', async () => {
    const result = await userModel.show('2');
    expect(result).toEqual({
      id: 2,
      firstname: 'John',
      lastname: 'Doe',
      password: hashedPassword
    });
  });

  it('index method should return a list of users', async () => {
    const result = await userModel.index();
    expect(result).toEqual([
      {
        id: 2,
        firstname: 'John',
        lastname: 'Doe',
        password: hashedPassword
      }
    ]);
  });
});
