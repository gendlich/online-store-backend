import Client from '../database';


export type User = {
  id: number;
  firstname: string;
  lastname: string;
  password: string;
}

export type createUser = {
  firstname: string;
  lastname: string;
  password: string;
}

export class OnlineStore {
  async index(): Promise<User[]> {
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

  async show(id :number): Promise<User> {
    try {
      const conn = await Client.connect();
      const sql = `SELECT * FROM users WHERE id=${id}`
      const result = await conn.query(sql)
      conn.release();
      return result.rows[0];

    } catch (e) {
      throw new Error(`Cannot get the user from ${id} id. Error: ${e}`);
          
    }
  }

  async create(u: createUser): Promise<User> {
    try {
        const conn = await Client.connect();
        const sql = `INSERT INTO users (firstName, lastName, password) VALUES('${u.firstname}', '${u.lastname}', '${u.password}') RETURNING *`
        const result = await conn.query(sql)
        conn.release();
        return result.rows[0];
    } catch (e) {
        throw new Error(`Cannot create the user ${u.firstname}. Error: ${e}`);
    }
  }
}
