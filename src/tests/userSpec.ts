import { UserModels } from '../models/user';
import hashedPassword from './endpointsSpec';

const userModel = new UserModels();

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
    const result = await userModel.show('1');
    expect(result).toBe({
      id: 1,
      firstname: 'John',
      lastname: 'Doe',
      password: hashedPassword
    });
  });

  it('index method should return a list of users', async () => {
    const result = await userModel.index();
    expect(result).toEqual([
      {
        id: 1,
        firstname: 'John',
        lastname: 'Doe',
        password: hashedPassword
      }
    ]);
  });
});
