import Client from "../database";

export type Order = {
  id?: number;
  user_id: number;
  product_id: number;
  product_quantity: number;
  order_status: string;
};

export class OrderModels {
    async create(o: Order): Promise<Order> {
    try {
        const conn = await Client.connect();
        const sql = `INSERT INTO orders (firstname, lastname, password) VALUES('', '', '') RETURNING *`;
        const result = await conn.query(sql);
        conn.release();
        return result.rows[0];
        } catch (e) {
        throw new Error(`Cannot create the order ${o.id}. Error: ${e}`);
    }
    }
}
