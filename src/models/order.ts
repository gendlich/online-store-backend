import Client from '../database';

export type Order = {
  id?: number;
  user_id: number;
  order_status: string;
};

export class OrderModels {
  async index(id: string): Promise<Order[]> {
    try {
      const conn = await Client.connect();
      const sql = `SELECT * FROM orders WHERE user_id=${id}`;
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (e) {
      throw new Error(`Cannot get orders. Error: ${e}`);
    }
  }

  async create(o: Order): Promise<Order> {
    try {
      const conn = await Client.connect();
      const sql = `INSERT INTO orders (user_id, order_status) VALUES(${o.user_id},'${o.order_status}') RETURNING *`;
      const result = await conn.query(sql);
      conn.release();
      return result.rows[0];
    } catch (e) {
      throw new Error(`Cannot create the order ${o.id}. Error: ${e}`);
    }
  }

  async status(id: string, status: string) {
    try {
      const conn = await Client.connect();
      const sql = `SELECT * FROM orders WHERE order_status='${status}' AND user_id=${id}`;
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (e) {
      throw new Error(`Error: ${e}`);
    }
  }
}
