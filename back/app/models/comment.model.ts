import { pool } from './db'; 

export class Comment {
    comment_text: string;
    recipe_id: number;
    user_Id: number;
    comment_published_time: string;
    comment_active: boolean;
    comment_likes: number;

    constructor(newComment: any) {
        this.comment_text = newComment.comment_text;
        this.recipe_id = newComment.receta_id;
        this.user_Id = newComment.user_Id;
        this.comment_published_time = newComment.comment_published_time;
        this.comment_active = newComment.comment_active;
        this.comment_likes = newComment.comment_likes;
    }

static async addComment(newComment: any, result: Function): Promise<void> {
    const connection = await pool.getConnection();
    try {
      const [rows] = await connection.query("INSERT INTO comment SET ?", newComment);
      console.log("Comentario guardado con éxito en la receta ");
      result(null, rows);
    } catch (err) {
      console.log("Error al insertar comentario: ", err);
       result(err, null);
    } finally {
      connection.release();
    }
  };
}