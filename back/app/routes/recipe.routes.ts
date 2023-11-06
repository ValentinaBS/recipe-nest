import express from 'express';
import { Request, Response } from 'express';
import * as recipes from '../controllers/recipe.controller';

const router = express.Router();

// Create a new recipe
router.post("/", recipes.create);

// Retrieve a single recipe with id
router.get("/:id", recipes.findOne);

/*// Update a recipe with id
router.put("/:id", recipes.update);

// Delete a recipe with id
router.delete("/:id", recipes.delete);*/

// Add comment to a recipe
router.post("/:id/comments", recipes.addComment);

const attachRoutes = (app: express.Application) => {
  app.use('/api/recipes', router);
};

export default attachRoutes;


