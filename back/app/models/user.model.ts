import { pool } from './db';
import { ResultSetHeader, RowDataPacket } from 'mysql2';


export class User {
    user_id: number;
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
          const [rows] = await connection.query("INSERT INTO user SET ?", newUser);
          const queryResult = rows as RowDataPacket[];
          if (queryResult[0] && queryResult[0][0]) {
            const insertId = queryResult[0][0].insertId;
          console.log("created user: ", { id: insertId, ...newUser });
          result(null, { id: insertId, ...newUser });
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
          const [rows] = await connection.query("SELECT * FROM user WHERE id = ?", id);
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

    static async create(newUser: any, result: Function): Promise<void> {
        const connection = await pool.getConnection();
        try {
          const [rows] = await connection.query("INSERT INTO user SET ?", newUser);
          const queryResult = rows as RowDataPacket[];
          if (queryResult[0] && queryResult[0][0]) {
            const insertId = queryResult[0][0].insertId;
          console.log("created user: ", { id: insertId, ...newUser });
          result(null, { id: insertId, ...newUser });
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
          const [rows] = await connection.query("SELECT * FROM user WHERE id = ?", id);
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
          const [rows] = await connection.query("UPDATE user SET ? WHERE id = ?", [updatedUser, id]);
          if (rows.affectedRows > 0) {
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
     
    
}


