import { Request, Response } from 'express';
import { SavedRecipe } from '../models/saveRecipe.model'; 

export const saveRecipe = async (req: Request, res: Response): Promise<void> => {
    try {
      const user_Id = req.body.user_Id;
      const recipe_Id = req.body.recipe_Id; 
  
      // Llama al método estático para guardar la receta en el perfil del usuario
      SavedRecipe.savedRecipe(user_Id, recipe_Id, (err: any, result: any) => {
        if (err) {
          res.status(500).json({ error: 'Error al guardar la receta en el perfil' });
        } else {
          res.status(201).json(result);
        }
      });
    } catch (error) {
      console.error("Error en el controlador de guardar receta en el perfil: ", error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  };
  
  export const getSavedRecipes = async (req: Request, res: Response): Promise<void> => {
    try {
      const user_Id = req.body.user_Id;
  
      // Llama al método estático para obtener las recetas guardadas del perfil del usuario
      SavedRecipe.getSavedRecipes(user_Id, (err: any, result: any) => {
        if (err) {
          res.status(500).json({ error: 'Error al obtener las recetas guardadas' });
        } else {
          res.status(200).json(result);
        }
      });
    } catch (error) {
      console.error("Error en el controlador de obtener recetas guardadas: ", error);
      res.
     
  status(500).json({ error: 'Error interno del servidor' });
    }
  };