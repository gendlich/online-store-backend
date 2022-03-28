import { UserModels } from '../models/user';

const userTest = new UserModels();

describe('User Model', () => {

beforeAll( async () => {
     await userTest.create({
      firstname: 'John',
      lastname: 'Doe',
      password: '1234'
    });
  });

  it('should have an index methor', () => {
    expect(userTest.index).toBeDefined;
  });
  it('should have an show method', () => {
    expect(userTest.show).toBeDefined;
  });
  it('should have an create method', () => {
    expect(userTest.create).toBeDefined;
  });


  it('show method should return the correct user', async () => {
    const result = await userTest.show('1');
    expect(result).toEqual({
      id: 1,
      firstname: 'John',
      lastname: 'Doe',
      password: '1234'
    });
  });

  it('index method should return a list of users', async () => {
    const result = await userTest.index();
    expect(result).toEqual([
      {
        id: 1,
        firstname: 'John',
        lastname: 'Doe',
        password: '1234'
      }
    ]);
  });
});
