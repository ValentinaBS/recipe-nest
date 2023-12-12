import { pool } from './db';

export class Comment {
  comment_text: string;
  recipe_id: number;
  user_id: number;
  comment_published_time: string;
  comment_active: boolean;
  comment_likes: number;
  user_image: string;
  username: string;

  constructor(newComment: any) {
    this.comment_text = newComment.comment_text;
    this.recipe_id = newComment.receta_id;
    this.user_id = newComment.user_id;
    this.comment_published_time = newComment.comment_published_time;
    this.comment_active = newComment.comment_active;
    this.comment_likes = newComment.comment_likes;
    this.user_image = newComment.user_image;
    this.username = newComment.username;
  }

  static async addComment(newComment: any, result: Function): Promise<void> {
    const connection = await pool.getConnection();

    try {
      const [user] = await connection.query("SELECT username, user_image FROM user WHERE user_id = ?", newComment.user_id);

      if (Array.isArray(user) && user.length > 0) {
        const userData = user[0] as { username: string; user_image: string };
      
        const commentData = {
          ...newComment,
          username: userData.username,
          user_image: userData.user_image
        };
      
        const [rows] = await connection.query("INSERT INTO comment SET ?", commentData);
      
        console.log("Comment created successfully!");
        result(null, commentData);
      } else {
        result({ kind: "not_found" }, null);
      }

    } catch (err) {
      console.log("Error inserting comment: ", err);
      result(err, null);
    } finally {
      connection.release();
    }
  };

  static async findByRecipeId(recipeId: number, result: Function): Promise<void> {
    const connection = await pool.getConnection();
    try {
      const [rows] = await connection.query("SELECT * FROM comment WHERE recipe_id = ?", recipeId);

      if (Array.isArray(rows)) {
        if (rows.length > 0) {
          console.log("Found comments for recipe with recipe_id: ", recipeId);
          result(null, rows);
        } else {
          result({ kind: "not_found" }, null);
        }
      }
    } catch (err) {
      console.log("Error: ", err);
      result(err, null);
    } finally {
      connection.release();
    }
  }
}