import { pool } from './db';
import { RowDataPacket, FieldPacket } from 'mysql2/promise';

export class Recipe {

  recipe_title: string;
  recipe_instructions: string;
  recipe_likes: number;
  recipe_cooktime: string;
  recipe_portions: number;
  recipe_published_time: string;//localtime
  recipe_image: string;//blob
  recipe_category_type: string;
  user_id: number;
  recipe_active: boolean;
  recipe_category_occasion: string;

  constructor(recipe: any) {
    this.recipe_title = recipe.recipe_title;
    this.recipe_instructions = recipe.recipe_instructions;
    this.recipe_likes = recipe.recipe_likes;
    this.recipe_cooktime = recipe.recipe_cooktime;
    this.recipe_portions = recipe.recipe_portions;
    this.recipe_published_time = recipe.recipe_published_time;
    this.recipe_image = recipe.recipe_image;
    this.recipe_category_type = recipe.recipe_category_type;
    this.user_id = recipe.user_id;
    this.recipe_active = recipe.recipe_active;
    this.recipe_category_occasion = recipe.recipe_category_occasion;
  }
  //Crear una receta 
  static async create(newRecipe: any, result: Function): Promise<void> {
    const connection = await pool.getConnection();
    try {
      await connection.query("INSERT INTO recipe SET ?", newRecipe);
      console.log("Created new recipe:", newRecipe);
      result(null, { status: "created" });
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
      const [rows] = await connection.query("SELECT * FROM recipe WHERE recipe_id = ?", id);
      if (Array.isArray(rows)) {
        if (rows.length > 0) {
          console.log("found recipe: ", rows[0]);
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


  static async getAll(title: string | null): Promise<Recipe[]> {
    const connection = await pool.getConnection();
    let query = "SELEC * FROM recipe";
    if (title) {
      query += ` WHERE title LIKE '%${title}%' `;
    }
    try {
      const [rows] = await connection.query(query);
      const recipes: Recipe[] = rows as Recipe[];
      return recipes;
    } catch (err) {
      throw err;
    } finally {
      connection.release();
    }
  }
}

export class Likemodel {

  recipe_id: Number;
  recipe_likes: Number;
  user_id: Number;

  constructor(like: any) {
    this.recipe_id = like.recipe_id;
    this.recipe_likes = like.recipe_likes;
    this.user_id = like.user_id;
  }
  //añadir like
  static async addLike(recipeId: Number, userId: Number, recipe_likes: Number, result: Function): Promise<void> {
    const connection = await pool.getConnection();
    try {
      const [existingLikes] = await connection.query('SELECT * FROM likes WHERE recipe_id = ? AND user_id = ? AND recipe_likes = ?', [recipeId, userId, recipe_likes]);

      if ((existingLikes as any[]).length === 0) {
        await connection.query('INSERT INTO likes (recipe_id, user_id, recipe_likes) VALUES (?, ?, ?)', [recipeId, userId, recipe_likes]);
        console.log('Like added successfully.');
        result(null, { receta_id: recipeId, user_id: userId, recipe_likes: recipe_likes });
      } else {
        console.log('The user has already "Liked" this recipe.');
        result(null);
      }
    } catch (error) {
      console.error('Error adding "Like":', error);
      throw error;
    }
  }
  //eliminar like
  static async removeLike(recipeId: Number, userId: Number, recipe_likes: Number, result: Function): Promise<void> {
    const connection = await pool.getConnection();
    try {
      const [existingLikes, _]: [RowDataPacket[], FieldPacket[]] = await connection.query('SELECT * FROM likes WHERE recipe_id = ? AND user_id = ? AND recipe_likes = ?', [recipeId, userId, recipe_likes]);
      if (existingLikes.length > 0) {
        await connection.query('DELETE FROM likes WHERE recipe_id = ? AND user_id = ? AND recipe_likes = ?', [recipeId, userId, recipe_likes]);
        console.log('Like successfully removed.');
      } else {
        console.log('The user has not "Liked" this recipe.');
      }
    } catch (error) {
      console.error('Error deleting likes:', error);
      throw error;
    }
  }

}
