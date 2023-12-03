import { pool } from './db'; 
import { RowDataPacket } from 'mysql2/promise';

export class SavedRecipe {
    receta_id: number;
    user_id: number;
    user_recipe_id: number;
  
  constructor(savedRecipe: any) {
      this.receta_id = savedRecipe.receta_id;
      this.user_id = savedRecipe.user_id;
      this.user_recipe_id = savedRecipe.user_recipe_id;
    }
  
  //Guardar una receta en tu perfil
  static async savedRecipe(userId: number, recipeId: number, result: Function): Promise<void> {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query("INSERT INTO userrecipe (receta_id, user_id) VALUES (?, ?)", [recipeId, userId]);
    const queryResult = rows as RowDataPacket[];
    if (queryResult[0] && queryResult[0].insertId) {
      const insertId = queryResult[0].insertId;
      console.log("Receta guardada en el perfil con éxito: ", { id: insertId, receta_id: recipeId, user_id: userId });
      result(null, { id: insertId, receta_id: recipeId, user_id: userId });
  }
  } catch (err) {
    console.log("Error al guardar la receta en el perfil", err);
    result(err, null); 
  } finally {
    connection.release();
  }
  }
  
  //Encuentra la receta guardada en tu perfil
  static async getSavedRecipes(userId: number, result: Function): Promise<void> {
    const connection = await pool.getConnection();
    try {
      const [rows] = await connection.query("SELECT * FROM userrecipe WHERE user_id = ?", userId);
      console.log(`Recetas guardadas para el usuario con ID ${userId}:`, rows);
      result(null, rows);
    } catch (err) {
      console.log("Error al obtener las recetas guardadas: ", err);
      result(err, null);
    } finally {
      connection.release();
    }
  }
  }