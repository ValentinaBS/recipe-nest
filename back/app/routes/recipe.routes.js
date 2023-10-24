module.exports = app => {
    const recipes = require("../controllers/recipe.controller.js");
  
    var router = require("express").Router();
  
    // Create a new recipe
    router.post("/", recipes.create);
    
   // Retrieve a single Tutorial with id
   router.get("/:id", recipes.findOne);

   // Update a recipe with id
   router.put("/:id", recipes.update);
 
   // Delete a recipe with id
   router.delete("/:id", recipes.delete);

   app.use('/api/recipes', router);
}; 