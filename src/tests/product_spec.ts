import { ProductModels } from '../models/product';

const productTest = new ProductModels();

describe('Product Model', () => {
  beforeAll( async () => {
    await productTest.create({
      name: 'Smartphone',
      price: 600,
      category: 'Phone'
    });

  });

  it('should have an index methor', () => {
    expect(productTest.index).toBeDefined;
  });
  it('should have an show method', () => {
    expect(productTest.show).toBeDefined;
  });
  it('should have an create method', () => {
    expect(productTest.create).toBeDefined;
  });

  it('show method should return the correct product', async () => {
    const result = await productTest.show('1');
    expect(result).toEqual({
      id: 1,
      name: 'Smartphone',
      price: 600,
      category: 'Phone'
    });
  });

  it('index method should return a list of products', async () => {
    const result = await productTest.index();
    expect(result).toEqual([
      {
        id: 1,
        name: 'Smartphone',
        price: 600,
        category: 'Phone'
      }
    ]);
  });
});
