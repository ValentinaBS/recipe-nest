import { pool } from './db';
import { ResultSetHeader, RowDataPacket, FieldPacket } from 'mysql2/promise';


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
