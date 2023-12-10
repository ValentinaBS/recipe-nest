import express, { Express, Request, Response } from 'express';
import * as recipes from '../controllers/recipe.controller';

const router = express.Router();

router.put("/:id", recipes.updateRecipe);

router.patch("/delete/:id", recipes.deactivateRecipe);

router.get("/search/:id", recipes.findOne);

router.get("/user/:user_id", recipes.findByUserId);

router.get("/all", recipes.getAll);

router.post("/", recipes.create);

router.get('/', recipes.addLike);

router.delete ('/', recipes.removeLike);

const recipeRoutes = (app: Express): void => {
  app.use('/api/recipes', router);
};


export default recipeRoutes;


