const sql = require("./db.js");

// constructor
const Recipe = function(recipe) {
  this.recipe_title = recipe.recipe_title;
  this.recipe_instructions = recipe.recipe_instructions;
  this.recipe_ingredients = recipe.recipe_ingredients;
  this.recipe_likes = recipe.recipe_likes;
  this.recipe_comments = recipe.recipe_comments;
  this.recipe_cooktime = recipe.recipe_cooktime ;
  this.recipe_portions = recipe.recipe_portions ;
  this.recipe_published = recipe.recipe_published ;
  this.recipe_image = recipe.recipe_image ;
  this.recipe_category_type = recipe.recipe_category_type ;
  this.user_id = recipe.user_id ;
  this.recipe_active = recipe.recipe_active ;
  this.recipe_category_flavor = recipe.recipe_category_flavor ;
};

Recipe.create = (newRecipe, result) => {
  sql.query("INSERT INTO recipe SET ?", newRecipe, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created recipe: ", { id: res.insertId, ...newRecipe });
    result(null, { id: res.insertId, ...newRecipe });
  });
};

Recipe.findById = (id, result) => {
    sql.query(`SELECT * FROM recipe WHERE id = ${id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found recipe: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // not found Recipe with the id
      result({ kind: "not_found" }, null);
    });
  };

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

  Recipe.remove = (id, result) => {
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
  };

  Recipe.addComment = (recipeId, comment, userId, result) => {
    const newComment = {
      comment_text: comment,
      recipe_id: recipeId,
      user_Id: userId,
      comment_active: true
    };
    sql.query("INSERT INTO comment SET ?", newComment, (err, res) => {
      if (err) {
        console.log("Error al insertar comentario: ", err);
        result(err, null);
        return;
  }
  console.log("Comentario guardado con éxito en la receta con ID: " + recipeId);
    result(null, res);
  });
};
module.exports = Recipe;