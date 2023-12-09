import express, { Express, Request, Response } from 'express';
import * as recipes from '../controllers/recipe.controller';

const router = express.Router();

// Actualizar una receta por su ID
router.put("/:id", recipes.updateRecipe);

// Desactivar una receta por su ID
router.patch("/delete/:id", recipes.deactivateRecipe);

// Obtener una receta por su id
router.get("/search/:id", recipes.findOne);

// Obtener todas las recetas 
router.get("/all", recipes.getAll);

// Create a new recipe
router.post("/", recipes.create);

//Añadir like
router.get('/', recipes.addLike);

//eliminar like
router.delete ('/', recipes.removeLike);

const recipeRoutes = (app: Express): void => {
  app.use('/api/recipes', router);
};


export default recipeRoutes;


