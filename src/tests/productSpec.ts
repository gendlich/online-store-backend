import { ProductModels } from '../models/product';

const productModel = new ProductModels();

describe('Product Model', () => {
  it('should have an index method', () => {
    expect(productModel.index).toBeDefined;
  });
  it('should have an show method', () => {
    expect(productModel.show).toBeDefined;
  });
  it('should have an create method', () => {
    expect(productModel.create).toBeDefined;
  });
  it('should have an most popular products method', () => {
    expect(productModel.popularProducts).toBeDefined;
  });
  it('should have an filter by category method', () => {
    expect(productModel.filterByCategory).toBeDefined;
  });

  it('show method should return the correct product', async () => {
    try {
      const result = await productModel.show('1');
      expect(result).toEqual({
        id: 1,
        name: 'Smartphone',
        price: 600,
        category: 'Phone'
      });
    } catch (e) {
      console.log(e);
    }
  });

  it('index method should return a list of products', async () => {
    try {
      const result = await productModel.index();
      expect(result).toEqual([
        {
          id: 1,
          name: 'Smartphone',
          price: 600,
          category: 'Phone'
        }
      ]);
    } catch (e) {
      console.log(e);
    }
  });
  it('filter by category method should return the correct product category', async () => {
    const result = await productModel.filterByCategory('Phone');
    try {
      expect(result).toEqual([
        {
          id: 1,
          name: 'Smartphone',
          price: 600,
          category: 'Phone'
        }
      ]);
    } catch (e) {
      console.log(e);
    }
  });

  it('popular product method should return a list of top5 most selled products', async () => {
    try {
      const result = await productModel.popularProducts();
      expect(result).toEqual([
        {
          product_id: 1,
          name: 'Smartphone',
          total_orders: '1'
        },
        undefined,
        undefined,
        undefined,
        undefined
      ]);
    } catch (e) {
      console.log(e);
    }
  });
});
