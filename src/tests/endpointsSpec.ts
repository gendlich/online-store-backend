import supertest from 'supertest';
import app from '../server';

const request = supertest(app);
let token = '';

beforeAll((done) => {
  request
    .post('/user/')
    .send({
      firstname: 'John',
      lastname: 'Doe',
      password: '1234'
    })
    .end((e, response) => {
      token = response.body.token;
      done();
    });
});

describe('User endpoint routes testing:', () => {
  it('should test if the user index is working', async () => {
    const res = await request.get('/user/').auth(token, { type: 'bearer' });
    expect(res.status).toBe(200);
  });
  it('should test if the user show is working', async () => {
    const res = await request.get('/user/1').auth(token, { type: 'bearer' });
    expect(res.status).toBe(200);
  });
});

describe('Product endpoint routes testing:', () => {
  it('should test if the product index is working', async () => {
    const res = await request.get('/product/');
    expect(res.status).toBe(200);
  });

  it('should test if the product show is working', async () => {
    const res = await request.get('/product/1');
    expect(res.status).toBe(200);
  });

  it('should test if the product create is working', async () => {
    const res = await request
      .post('/product/')
      .auth(token, { type: 'bearer' })
      .send({
        name: 'Smartphone',
        price: 600,
        category: 'Phone'
      });
    expect(res.status).toBe(200);
  });

  it('should test if the product popular list is working', async () => {
    const res = await request.get('/popular/');
    expect(res.status).toBe(200);
  });

  it('should test if the product category filter is working', async () => {
    const res = await request.get('/category/phone');
    expect(res.status).toBe(200);
  });
});

describe('Order endpoint routes testing:', () => {
  it('should test if the order create is working', async () => {
    const res = await request
      .post('/order/')
      .auth(token, { type: 'bearer' })
      .send({
        user_id: 1,
        product_id: 1,
        product_quantity: 1,
        order_status: 'active'
      });
    expect(res.status).toBe(200);
  });

  it('should test if the order list by user id is working', async () => {
    const res = await request.get('/order/1').auth(token, { type: 'bearer' });
    expect(res.status).toBe(200);
  });

  it('should test if the order list by status is working', async () => {
    const res = await request
      .get('/order/1/active')
      .auth(token, { type: 'bearer' });
    expect(res.status).toBe(200);
  });
});
