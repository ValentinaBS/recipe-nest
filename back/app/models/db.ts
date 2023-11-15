import {createPool, Pool, Connection} from "mysql2/promise";
import {dbConfig} from "../config/db.config";

export const pool: Pool = createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
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
