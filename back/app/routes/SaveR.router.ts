import express, { Express, Request, Response } from 'express';
import { saveRecipe, getSavedRecipes } from '../controllers/saveRecipe.controller';

const router = express.Router();

router.post("/", saveRecipe);

router.get("/:id", getSavedRecipes);

const SavedRecipeRoutes = (app: Express): void => {
  app.use('/api/bookmark', router);
};
export default SavedRecipeRoutes; 