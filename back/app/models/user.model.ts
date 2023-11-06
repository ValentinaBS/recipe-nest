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

    static async create(newUser: any, result: Function): Promise<void> {
        const connection = await pool.getConnection();
        try {
            const [results] = await connection.query("INSERT INTO user SET ?", newUser);
            const insertId = results.insertId;
            console.log("created user: ", { id: insertId, ...newUser });
            result(null, { id: insertId, ...newUser });
        } catch (err) {
            console.log("error: ", err);
            result(err, null);
        } finally {
            connection.release();
        }
    }
}




