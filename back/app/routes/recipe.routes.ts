import express, { Express, Request, Response } from 'express';
import * as recipes from '../controllers/recipe.controller';

const router = express.Router();

// Create a new recipe
router.post("/", recipes.create);

// Retrieve a single recipe with id
router.get("/:id", recipes.findOne);

//Añadir like
router.get('/', recipes.addLike);

//eliminar like
router.delete ('/', recipes.removeLike);

// Obtener todas las recetas 
router.get('/AllRecipe', recipes.getAll);

const recipeRoutes = (app: Express): void => {
  app.use('/api/recipes', router);

};
export default recipeRoutes;


