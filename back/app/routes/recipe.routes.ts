import express, { Express, Request, Response } from 'express';
import * as recipes from '../controllers/recipe.controller';

const router = express.Router();

// Create a new recipe
router.post("/", recipes.create);

// Retrieve a single recipe with id
router.get("/:id", recipes.findOne);

// Add comment to a recipe
router.post("/:id/comments", recipes.addComment);

const recipeRoutes = (app: Express): void => {
  app.use('/api/recipes', router);
};
export default recipeRoutes;


