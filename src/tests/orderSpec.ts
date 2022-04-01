import { OrderModels } from '../models/order';

const orderModel = new OrderModels();

describe('Order Model', () => {
  it('should have an index method', () => {
    expect(orderModel.index).toBeDefined;
  });

  it('should have an status method', () => {
    expect(orderModel.status).toBeDefined;
  });

  it('should have an create method', () => {
    expect(orderModel.create).toBeDefined;
  });

  it('index method should return the correct order list by user id', async () => {
    try {
      const result = await orderModel.index('1');
      expect(result).toEqual([
        {
          id: 1,
          user_id: 1,
          order_status: 'active'
        }
      ]);
    } catch (e) {
      console.log(e);
    }
  });

  it(`index method should return the order with the correct status, in this test i am using 'active'`, async () => {
    try {
      const result = await orderModel.status('1', 'active');
      expect(result).toEqual([
        {
          id: 1,
          user_id: 1,
          order_status: 'active'
        }
      ]);
    } catch (e) {
      console.log(e);
    }
  });
});
