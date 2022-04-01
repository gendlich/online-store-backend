import Client from '../database';

export type ProductOrder = {
  id?: number;
  product_id: number;
  order_id: number;
  product_quantity: number;
};

export class ProductOrderModels {
  async create(po: ProductOrder): Promise<ProductOrder> {
    try {
      const conn = await Client.connect();
      const sql = `INSERT INTO product_orders (product_id, order_id, product_quantity) VALUES(${po.product_id},${po.order_id},${po.product_quantity}) RETURNING *`;
      const result = await conn.query(sql);
      conn.release();
      return result.rows[0];
    } catch (e) {
      throw new Error(`Cannot add. Error: ${e}`);
    }
  }
}
