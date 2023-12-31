import { pool } from './db';
import { ResultSetHeader, RowDataPacket } from 'mysql2';
import bcrypt from 'bcryptjs';
import jwt, { JwtPayload } from 'jsonwebtoken';

interface CustomJwtPayload extends JwtPayload {
  email: string;
}

export class User {
  user_id: number | undefined;
  username: string;
  email: string;
  password: string;
  user_image: string;
  user_description: string;

  constructor(user: any) {
    this.user_id = user.user_id;
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
    this.user_image = user.user_image;
    this.user_description = user.user_description;
  }

  static async create(newUser: any, result: Function): Promise<void> {
    const connection = await pool.getConnection();
    try {
      const [rows] = await connection.query("SELECT * FROM user WHERE email = ? OR username = ?", [newUser.email, newUser.username]);

      if (Array.isArray(rows) && rows.length > 0) {
        result({ message: "User already exists" }, null);
        return;
      }

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
        console.log("Logged in: ", { email });
        result(null, { email });
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

  static async current(token: string, result: Function): Promise<void> {
    let connection;

    try {
      connection = await pool.getConnection();

      const secretKey = process.env.SECRET_KEY;

      if (!secretKey) {
        result("Secret key is missing or undefined", null);
        return;
      }

      let decodedToken;
      try {
        decodedToken = jwt.verify(token, secretKey) as CustomJwtPayload;
      } catch (error) {
        result("Invalid token", null);
        return;
      }

      const userEmail = decodedToken.email;

      const [rows] = await connection.query("SELECT username, email, user_image, user_description FROM user WHERE email = ?", userEmail);

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
      if (connection) {
        connection.release();
      }
    }
  }

  static async update(id: number, updatedUser: Partial<User>, result: Function): Promise<void> {
    const connection = await pool.getConnection();
    try {
      const [resultObj] = await connection.query<ResultSetHeader>("UPDATE user SET ? WHERE user_id = ?", [updatedUser, id]);
      
      if (resultObj.affectedRows > 0) {
        console.log(`Updated user with ID: ${id}`);
  
        const [updatedUserData] = await connection.query<RowDataPacket[]>("SELECT * FROM user WHERE user_id = ?", id);
        const { password, ...newUser } = updatedUserData[0];
        
        result(null, newUser);
      } else {
        result({ kind: "not_found" }, null);
      }

    } catch (err) {
      console.log("Error: ", err);
      result(err, null);
    } finally {
      connection.release();
    }
  }

  static async findByEmail(email: string): Promise<User | null> {
    const connection = await pool.getConnection();

    try {
      const [rows] = await connection.query("SELECT user_id, username, email, user_image, user_description FROM user WHERE email = ?", [email]);

      if (Array.isArray(rows)) {
        if (rows.length > 0) {
          const userData = rows[0] as RowDataPacket;
          const user: User = new User(userData);
          return user;
        }
      }
      return null;
    } catch (err) {
      throw err;
    } finally {
      connection.release();
    }
  }

  static async findByUsername(username: string, result: Function): Promise<void> {
    const connection = await pool.getConnection();

    try {
      const [rows] = await connection.query("SELECT user_id, username, email, user_image, user_description FROM user WHERE username = ?", username);

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

  static async findById(id: number, result: Function): Promise<void> {
    const connection = await pool.getConnection();
    try {
      const [rows] = await connection.query("SELECT user_id, username, email, user_image, user_description FROM user WHERE user_id = ?", id);
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

}


