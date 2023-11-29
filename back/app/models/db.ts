import {createPool, Pool, Connection} from "mysql2/promise";
import dotenv from 'dotenv';
dotenv.config();

export const pool: Pool = createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
}); 

async function testDatabaseConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('Connected to the database!');
    connection.release();
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

testDatabaseConnection();
