import { UserModels } from "../user";


const userTest = new UserModels 


describe("User Model", () => {
    it('should have an index methor', () => {
        expect(userTest.index).toBeDefined;
    })
    it('should have an show method', () => {
        expect(userTest.show).toBeDefined;
    })
    it('should have an create method', () => {
        expect(userTest.create).toBeDefined;
    })


    it('create methor should add a user', async () => {
        const result = await userTest.create({
            firstname: 'John',
            lastname: 'Doe',
            password: '1234'
          });
          expect(result).toEqual({
            id: 1,
            firstname: 'John',
            lastname: 'Doe',
            password: '1234'
          });
    });

    it('show method should return the correct user', async () => {
        const result = await userTest.show(1);
        expect(result).toEqual({
            id: 1,
            firstname: 'John',
            lastname: 'Doe',
            password: '1234'
          });
      });

    it('index method should return a list of products', async () => {
        const result = await userTest.index();
        expect(result).toEqual([{
            id: 1,
            firstname: 'John',
            lastname: 'Doe',
            password: '1234'
          }]);
    })
})