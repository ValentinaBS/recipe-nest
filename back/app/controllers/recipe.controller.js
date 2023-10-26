const Recipe = require("../models/recipe.model.js");

// Create and Save a new Recipe
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Recipe
  const recipe = new Recipe({
    recipe_title: req.body.recipe_title,
    recipe_instructions : req.body.recipe_instructions ,
    recipe_ingredients: req.body.recipe_ingredients,
    recipe_likes: req.body.recipe_likes,
    recipe_comments: req.body.recipe_comments,
    recipe_cooktime: req.body.recipe_cooktime,
    recipe_portions: req.body.recipe_portions,
    recipe_published: req.body.recipe_published,
    recipe_image: req.body.recipe_image,
    recipe_category_type: req.body.recipe_category_type,
    user_id: req.body.user_id,
    recipe_active: req.body.recipe_active|| true,
    recipe_category_flavor: req.body.recipe_category_flavor
  });

  // Save Recipe in the database
  Recipe.create(recipe, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Recipe."
      });
    else res.send(data);
  });
};

// Find a single recipe with a id
exports.findOne = (req, res) => {
    Recipe.findById(req.params.id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Recipe with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Recipe with id " + req.params.id
            });
          }
        } else res.send(data);
      });
};

// Update a Recipe identified by the id in the request
exports.update = (req, res) => {
   // Validate Request
   if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Recipe.updateById(
    req.params.id,
    new Recipe(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Recipe with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Recipe with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Recipe with the specified id in the request
exports.delete = (req, res) => {
    Recipe.remove(req.params.id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Recipe with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete Recipe with id " + req.params.id
            });
          }
        } else res.send({ message: `Recipe was deleted successfully!` });
      });
    };

    exports.addComment = (req, res) => {
        if (!req.body.comment || !req.body.recipeId){
            return res.estatus(400).send({message: "comment and recipeId are required"});
        }

Recipe.addComment(req.body.recipeId, req.body.comment, (err, data) =>{
    if (err) {
        return res.status(500).send({
            message: "Error adding comment to recipe"
        });
    }
    res.send({ message: "Comment added successfully"});
});
    };