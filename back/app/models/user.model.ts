import { pool } from './db'; // Asegúrate de que la importación sea correcta

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

    static async create(newRecipe: any, result: Function): Promise<void> {
        const connection = await pool.getConnection();
        try {
          const [rows] = await connection.query("INSERT INTO recipe SET ?", newRecipe);
          const queryResult = rows as RowDataPacket[];
          if (queryResult[0] && queryResult[0][0]) {
            const insertId = queryResult[0][0].insertId;
          console.log("created recipe: ", { id: insertId, ...newRecipe });
          result(null, { id: insertId, ...newRecipe });
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
}




