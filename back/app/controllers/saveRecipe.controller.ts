import { Request, Response } from 'express';
import { SavedRecipe } from '../models/saveRecipe.model';

export const saveRecipe = async (req: Request, res: Response): Promise<void> => {
  try {
    const user_id = req.body.user_id;
    const recipe_id = req.body.recipe_id; 

    SavedRecipe.savedRecipe(user_id, recipe_id, (err: any, result: any) => {
      if (err) {
        res.status(500).json({ error: 'Error saving the recipe to the profile' });
      } else {
        res.status(201).json(result);
      }
    });
  } catch (error) {
    console.error("Error in the save recipe controller: ", error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getSavedRecipes = async (req: Request, res: Response): Promise<void> => {
  try {
    const user_id: number = Number(req.params.id);

    SavedRecipe.getSavedRecipes(user_id, (err: any, result: any) => {
      if (err) {
        res.status(500).json({ error: 'Error retrieving saved recipes' });
      } else {
        res.status(200).json(result);
      }
    });
  } catch (error) {
    console.error("Error in the get saved recipes controller: ", error);
    res.status(500).json({ error: 'Internal server error' });
  }
};