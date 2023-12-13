import { Request, Response } from 'express';
import { Recipe } from '../models/recipe.model';

export const create = (req: Request, res: Response): void => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can't be empty"
    });
  }

  const recipe: Recipe = {
    recipe_title: req.body.recipe_title,
    recipe_instructions: req.body.recipe_instructions,
    recipe_likes: req.body.recipe_likes,
    recipe_cooktime: req.body.recipe_cooktime,
    recipe_portions: req.body.recipe_portions,
    recipe_published_time: req.body.recipe_published_time,
    recipe_image: req.body.recipe_image,
    recipe_category_type: req.body.recipe_category_type,
    user_id: req.body.user_id,
    recipe_active: req.body.recipe_active || true,
    recipe_category_occasion: req.body.recipe_category_occasion,
    recipe_ingredients: req.body.recipe_ingredients
  };

  Recipe.create(recipe, (err: Error | null, data?: Recipe) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Se produjo un error al crear la Receta."
      });
    } else {
      res.send(data);
    }
  });
};

export const updateRecipe = async (req: Request, res: Response): Promise<void> => {

  const recipeId: number = Number(req.params.id);
  if (isNaN(recipeId) || recipeId <= 0) {
    res.status(400).send({
      message: "Recipe ID is not valid."
    });
    return;
  }

  const updateRecipe: Recipe = {
    recipe_title: req.body.recipe_title,
    recipe_instructions: req.body.recipe_instructions,
    recipe_likes: req.body.recipe_likes,
    recipe_cooktime: req.body.recipe_cooktime,
    recipe_portions: req.body.recipe_portions,
    recipe_published_time: req.body.recipe_published_time,
    recipe_image: req.body.recipe_image,
    recipe_category_type: req.body.recipe_category_type,
    user_id: req.body.user_id,
    recipe_active: req.body.recipe_active || true,
    recipe_category_occasion: req.body.recipe_category_occasion,
    recipe_ingredients: req.body.recipe_ingredients
  };
  try {
    await Recipe.updateById(recipeId, updateRecipe, (err: Error | null, data?: Recipe) => {
      if (err) {
        if (err.message === "not_found") {
          res.status(400).send({
            message: `Can't fin recipe with ID: ${recipeId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating recipe."
          });
        }
      } else {
        res.send(data);
      }
    });
  } catch (Error) {
    console.log("Error in the contrtroller updating recipe:", Error);
    res.status(500).json({
      message: "Error updating recipe."
    });
  }
};

//Desactivar una receta 

export const deactivateRecipe = async (req: Request, res: Response): Promise<void> => {
  const recipeId: number = Number(req.params.id);

  try {
    console.log('recipe_id:', recipeId);
    await Recipe.deactivateRecipe(recipeId, (err: Error | null, data?: Recipe) => {
      if (err) {
        if (err.message === "not_found") {
          res.status(404).send({
            message: `Can't fin recipe with ID: ${recipeId}.`
          });
        } else {
          res.status(500).send({
            message: "Error deactivating recipe with ID: " + recipeId
          });
        }
      } else {
        res.send(data);
      }
    });
  } catch (error) {
    console.error("Error in the contrtroller deactivating recipe:", error);
    res.status(500).json({
      message: "Error deactivating recipe."
    });
  }
};

export const findOne = (req: Request, res: Response): void => {
  const recipeId: number = Number(req.params.id);

  Recipe.findById(recipeId, (err: Error | null, data?: Recipe) => {
    if (err) {
      if (err.message === "not_found") {
        res.status(404).send({
          message: `Can't fin recipe with ID: ${recipeId}.`
        });
      } else {
        res.status(500).send({
          message: "Error getting recipe with ID: " + recipeId
        });
      }
    } else {
      res.send(data);
    }
  });
};

export const findByUserId = (req: Request, res: Response): void => {
  const userId: number = Number(req.params.user_id);

  Recipe.findByUserId(userId, (err: Error | null, data?: any[]) => {
    if (err) {
      if (err.message === "not_found") {
        res.status(404).send({
          message: `No recipes found for the user with ID ${userId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving recipes for the user with ID " + userId
        });
      }
    } else {
      res.send(data);
    }
  });
};

//encontrar todas las recetas por titulo
export const getAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const title: string | null = req.query.title ? String(req.query.title) : null;
    const recipes = await Recipe.getAll(title);
    res.json(recipes);
  } catch (err) {
    console.log("Error retrieving all recipes: ", err);
    res.status(500).json({
      massage: "Error retrieving recipes"
    })
  }
}