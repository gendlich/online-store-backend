import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

let Client: Pool = new Pool();
const { 
  POSTGRES_HOST, 
  POSTGRES_DB, 
  POSTGRES_USER, 
  POSTGRES_PASSWORD, 
  ENV, 
  POSTGRES_TEST_DB 
} =  process.env;

if(ENV === 'test') {
  Client = new Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_TEST_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD
  })
}

if(ENV === 'dev') {
  Client = new Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD
  })
}

export default Client;
