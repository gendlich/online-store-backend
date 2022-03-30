import Client from '../database';

export type Product = {
  id?: number;
  name: string;
  price: number;
  category: string;
};

export class ProductModels {
  async index(): Promise<Product[]> {
    try {
      const conn = await Client.connect();
      const sql = 'SELECT * FROM product';
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (e) {
      throw new Error(`Cannot get products. Error: ${e}`);
    }
  }

  async show(id: string): Promise<Product> {
    try {
      const conn = await Client.connect();
      const sql = `SELECT * FROM product WHERE id=${id}`;
      const result = await conn.query(sql);
      conn.release();
      return result.rows[0];
    } catch (e) {
      throw new Error(`Cannot get the product from '${id}' id. Error: ${e}`);
    }
  }

  async create(p: Product): Promise<Product> {
    try {
      const conn = await Client.connect();
      const sql = `INSERT INTO product (name, price, category) VALUES('${p.name}', '${p.price}', '${p.category}') RETURNING *`;
      const result = await conn.query(sql);
      conn.release();
      return result.rows[0];
    } catch (e) {
      throw new Error(`Cannot create the product ${p.name}. Error: ${e}`);
    }
  }

  async popularProducts(): Promise<unknown[]> {
    try {
      const conn = await Client.connect();
      const sql = `SELECT product_id, product.name, SUM(product_quantity) AS total_orders FROM orders LEFT JOIN product ON product.id = orders.product_id GROUP BY product_id, name ORDER BY total_orders DESC`
      const result = await conn.query(sql);
      const top5 = [result.rows[0],
                    result.rows[1],
                    result.rows[2],
                    result.rows[3],
                    result.rows[4]]
      return top5;
      
    } catch (e) {
      throw new Error(`Cannot get. Error: ${e}`)
    }
 }

 async filterByCategory(category: string): Promise<Product[]> {
  try {
    const conn = await Client.connect();
    const sql = `SELECT * FROM product WHERE category='${category}'`
    const result = await conn.query(sql);
    return result.rows;
    
  } catch (e) {
    throw new Error(`Cannot get. Error: ${e}`)
  }
}
}
