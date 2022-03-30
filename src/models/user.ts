import Client from '../database';
import bcrypt from 'bcrypt';

export type User = {
  id?: number;
  firstname: string;
  lastname: string;
  password: string;
};

export class UserModels {
  async index(): Promise<User[] | void> {
    try {
      const conn = await Client.connect();
      const sql = 'SELECT * FROM users';
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (e) {
      throw new Error(`Cannot get users. Error: ${e}`);
    }
  }

  async show(id: string): Promise<User> {
    try {
      const conn = await Client.connect();
      const sql = `SELECT * FROM users WHERE id=${id}`;
      const result = await conn.query(sql);
      conn.release();
      return result.rows[0];
    } catch (e) {
      throw new Error(`Cannot get the user from ${id} id. Error: ${e}`);
    }
  }

  async create(u: User): Promise<User> {
    try {
      const conn = await Client.connect();

      const hashedPassword = bcrypt.hashSync(
        u.password + process.env.BCRYPT_SECRET,
        parseInt(process.env.SALT_ROUNDS as string)
      );

      const sql = `INSERT INTO users (firstname, lastname, password) VALUES('${u.firstname}', '${u.lastname}', '${hashedPassword}') RETURNING *`;
      const result = await conn.query(sql);
      conn.release();
      return result.rows[0];
    } catch (e) {
      throw new Error(`Cannot create the user ${u.firstname}. Error: ${e}`);
    }
  }

  async delete(id: string) {
    try {
      const conn = await Client.connect();
      const sql1 = `DELETE FROM orders WHERE user_id=${id}`
      const sql2 = `DELETE FROM users WHERE id=${id}`;
      await conn.query(sql1);
      const result = await conn.query(sql2);
      conn.release();
      return result.rows[0]
    } catch (e) {
      throw new Error(`Cannot create delete. Error: ${e}`);
    }
  }
}
