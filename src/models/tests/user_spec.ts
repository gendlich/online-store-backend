import { OnlineStore} from "../user";


const store = new OnlineStore;


describe("User Model", () => {
    it('should have an index methor', () => {
        expect(store.index).toBeDefined;
    })
    it('should have an show method', () => {
        expect(store.show).toBeDefined;
    })
    it('should have an create method', () => {
        expect(store.create).toBeDefined;
    })


    it('create methor should add a user', async () => {
        const result = await store.create({
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
        const result = await store.show(1);
        expect(result).toEqual({
            id: 1,
            firstname: 'John',
            lastname: 'Doe',
            password: '1234'
          });
      });

    it('index method should return a list of products', async () => {
        const result = await store.index();
        expect(result).toEqual([{
            id: 1,
            firstname: 'John',
            lastname: 'Doe',
            password: '1234'
          }]);
    })
})