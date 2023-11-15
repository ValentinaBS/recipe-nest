import { pool } from './db'; // Asegúrate de que la importación sea correcta
import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';

export class Recipe {

  recipe_title: string;
  recipe_instructions: string;
  recipe_ingredients: string[];
  recipe_likes: number;
  recipe_comments: string[];
  recipe_cooktime: string;
  recipe_portions: number;
  recipe_published: string;//localtime
  recipe_image: string;//blob
  recipe_category_type: string;
  user_id: number;
  recipe_active: boolean;
  recipe_category_occasion: string;

  constructor(recipe: any) {
    this.recipe_title = recipe.recipe_title;
    this.recipe_instructions = recipe.recipe_instructions;
    this.recipe_ingredients = recipe.recipe_ingredients;
    this.recipe_likes = recipe.recipe_likes;
    this.recipe_comments = recipe.recipe_comments;
    this.recipe_cooktime = recipe.recipe_cooktime;
    this.recipe_portions = recipe.recipe_portions;
    this.recipe_published = recipe.recipe_published;
    this.recipe_image = recipe.recipe_image;
    this.recipe_category_type = recipe.recipe_category_type;
    this.user_id = recipe.user_id;
    this.recipe_active = recipe.recipe_active;
    this.recipe_category_occasion = recipe.recipe_category_occasion;
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
      const [rows] = await connection.query("SELECT * FROM recipe WHERE id = ?", id);
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
    };
    const connection = await pool.getConnection();
    try {
      const [rows] = await connection.query("INSERT INTO comment SET ?", newComment);
      console.log("Comentario guardado con éxito en la receta con ID: " + recipeId);
      result(null, rows);
    } catch (err) {
      console.log("Error al insertar comentario: ", err);
      
      result
result(err, null);
    } finally {
      connection.release();
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
