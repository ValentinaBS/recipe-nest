import { error } from 'console';
import { pool } from './db'; // Asegúrate de que la importación sea correcta
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

  static async addComment(recipeId: number, comment: string, userId: number, result: Function): Promise<void> {
    const newComment = {
      comment_text: comment,
      recipe_id: recipeId,
      user_Id: userId,
      comment_active: true,
      comment_likes: 0,
    };
    const connection = await pool.getConnection();
    try {
      const [rows] = await connection.query("INSERT INTO comment SET ?", newComment);
      console.log("Comentario guardado con éxito en la receta con ID: " + recipeId);
      result(null, rows);
    } catch (err) {
      console.log("Error al insertar comentario: ", err);
       result(err, null);
    } finally {
      connection.release();
    }
  }
}

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

export class Likemodel {  

    recipe_id: Number;
    recipe_likes: Number;
    user_id: Number;

    constructor(like: any){
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
                  await connection.query('DELETE FROM likes WHERE recipe_id = ? AND user_id = ? AND recipe_likes = ?',[recipeId, userId,  recipe_likes]);
                  console.log('Like successfully removed.');
           } else {
              console.log('The user has not "Liked" this recipe.');
          } 
          }catch (error){
              console.error('Error deleting likes:', error);
              throw error;
          }
      }

    }




  /*Recipe.updateById = (id, recipe, result) => {
    sql.query(
      "UPDATE trecipe SET title = ?, description = ?, published = ? WHERE id = ?",
      [recipe.title, recipe.description, recipe.published, id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // not found Recipe with the id
          result({ kind: "not_found" }, null);
          return;
        }
  
        console.log("updated recipe: ", { id: id, ...recipe });
        result(null, { id: id, ...recipe });
      }
    );
  };*/

  /*Recipe.remove = (id, result) => {
    sql.query("DELETE FROM recipe WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        // not found Recipe with the id
        result({ kind: "not_found" }, null);
        return;
      }
  
      console.log("deleted recipe with id: ", id);
      result(null, res);
    });
  };*/

//constructor
/*const User = function(user) {
  this.user_id = recipe.user_id;
  this.username = recipe.username;
  this.email = recipe.email;
  this.password = recipe.password;
  this.user_image = recipe.user_image;
  this.user_description = recipe.user_description ;
};

User.create = (newUser, result) => {
  sql.query("INSERT INTO user SET ?", newUser, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created user: ", { id: res.insertId, ...newUser });
    result(null, { id: res.insertId, ...newUser });
  });
};

User.findById = (id, result) => {
  sql.query(`SELECT * FROM user WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found user: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Recipe with the id
    result({ kind: "not_found" }, null);
  });
};
*/
