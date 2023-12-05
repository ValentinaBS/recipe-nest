import { pool } from './db';
import { ResultSetHeader, RowDataPacket } from 'mysql2';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

export class User {
  username: string;
  email: string;
  password: string;
  user_image: string;
  user_description: string;

  constructor(user: any) {
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
    this.user_image = user.user_image;
    this.user_description = user.user_description;
  }

  static async create(newUser: any, result: Function): Promise<void> {
    const connection = await pool.getConnection();
    try {
      const hashedPassword = await bcrypt.hash(newUser.password, 10);
      newUser.password = hashedPassword;

      await connection.query("INSERT INTO user SET ?", newUser);

      console.log("created user: ", newUser);
      result(null, { newUser });
    } catch (err) {
      console.log("error: ", err);
      result(err, null);
    } finally {
      connection.release();
    }
  }

  static async login(email: string, password: string, result: Function): Promise<void> {
    const connection = await pool.getConnection();
    try {
      const [rows] = await connection.query("SELECT * FROM user WHERE email = ?", [email]);

      if (!Array.isArray(rows) || rows.length === 0) {
        result("User not found", null);
        return;
      }

      const user: User = rows[0] as User;
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {

        const token = jwt.sign(
          { email: user.email },
          // Secret key random generation 
          crypto.randomBytes(32).toString('hex'), 
          { expiresIn: '1h' }
        );

        console.log("Logged in: ", { email, token });
        result(null, { email, token });
      } else {
        result("Invalid password", null);
      }
    } catch (err) {
      console.log("error: ", err);
      result(err, null);
    } finally {
      connection.release();
    }
  };

  static async findById(id: number, result: Function): Promise<void> {
    const connection = await pool.getConnection();
    try {
      const [rows] = await connection.query("SELECT * FROM user WHERE user_id = ?", id);
      if (Array.isArray(rows)) {
        if (rows.length > 0) {
          console.log("found user: ", rows[0]);
          result(null, rows[0]);
        } else {
          result({ kind: "not_found" }, null);
        }
      }
    } catch (err) {
      console.log("error: ", err);
      result(err, null);
    } finally {
      connection.release();
    }
  }

  static async update(id: number, updatedUser: any, result: Function): Promise<void> {
    const connection = await pool.getConnection();
    try {
      const [resultObj] = await connection.query<ResultSetHeader>("UPDATE user SET ? WHERE id = ?", [updatedUser, id]);
      if (resultObj.affectedRows > 0) {
        console.log(`Updated user with ID: ${id}`);
        result(null, { message: "Usuario actualizado con éxito" });
      } else {
        result({ kind: "not_found" }, null);
      }
    } catch (err) {
      console.log("error: ", err);
      result(err, null);
    } finally {
      connection.release();
    }
  }

  static async findByEmail(email: string): Promise<User | null> {
    const connection = await pool.getConnection();

    try {
      const [rows] = await connection.query("SELECT * FROM user WHERE email = ?", [email]);

      if (Array.isArray(rows)) {
        if (rows.length > 0) {
          const userData = rows[0] as RowDataPacket;
          const user: User = new User(userData); // Crear instancia de User con los datos obtenidos
          return user;
        }
      }
      return null; // No se encontró el usuario
    } catch (err) {
      throw err;
    } finally {
      connection.release();
    }
  }

}


