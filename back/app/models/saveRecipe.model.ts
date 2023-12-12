import { pool } from './db';
import { RowDataPacket } from 'mysql2/promise';

export class SavedRecipe {
  recipe_id: number;
  user_id: number;
  user_recipe_id: number;

  constructor(savedRecipe: any) {
    this.recipe_id = savedRecipe.recipe_id;
    this.user_id = savedRecipe.user_id;
    this.user_recipe_id = savedRecipe.user_recipe_id;
  }

  static async savedRecipe(userId: number, recipeId: number, result: Function): Promise<void> {
    const connection = await pool.getConnection();
    try {
      const [rows] = await connection.query("INSERT INTO userrecipe (recipe_id, user_id) VALUES (?, ?)", [recipeId, userId]);
  
      console.log("Recipe successfully saved to profile: ", { recipe_id: recipeId, user_id: userId });
      result(null, { recipe_id: recipeId, user_id: userId });
    } catch (err) {
      console.log("Error saving recipe to profile", err);
      result(err, null);
    } finally {
      connection.release();
    }
  }

  static async getSavedRecipes(userId: number, result: Function): Promise<void> {
    const connection = await pool.getConnection();
    try {
      const [rows] = await connection.query("SELECT * FROM userrecipe WHERE user_id = ?", userId);

      const recipes = [];
      if (Array.isArray(rows)) {
        for (const row of rows) {
          if ('recipe_id' in row) {
            const recipeId = row.recipe_id;
            const [recipeRow] = await connection.query("SELECT * FROM recipe WHERE recipe_id = ?", recipeId);
            if (Array.isArray(recipeRow) && recipeRow.length > 0) {
              recipes.push(recipeRow[0]);
            }
          }
        }
      }

      console.log(`Saved recipes for user with ID ${userId}:`, recipes);
      result(null, recipes);
    } catch (err) {
      console.log("Error fetching saved recipes: ", err);
      result(err, null);
    } finally {
      connection.release();
    }
  }
}