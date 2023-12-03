import { Request, Response } from 'express';
import { Recipe, SavedRecipe } from '../models/recipe.model'; // Asegúrate de que la importación sea correcta
import { error } from 'console';

// Crear y guardar una nueva Receta
export const create = (req: Request, res: Response): void => {
  // Validar la solicitud
  if (!req.body) {
    res.status(400).send({
      message: "¡El contenido no puede estar vacío!"
    });
  }

  // Crear una Receta
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
    recipe_category_occasion: req.body.recipe_category_occasion
  };

  // Guardar la Receta en la base de datos
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

// Encontrar una sola receta por su ID
export const findOne = (req: Request, res: Response): void => {
  const recipeId: number = Number(req.params.id);


  Recipe.findById(recipeId, (err: Error | null, data?: Recipe) => {
    if (err) {
      if (err.message === "not_found") {
        res.status(404).send({
          message: `No se encontró la Receta con el ID ${recipeId}.`
        });
      } else {
        res.status(500).send({
          message: "Error al recuperar la Receta con el ID " + recipeId
        });
      }
    } else {
      res.send(data);
    }
  });
};

export const addComment = (req: Request, res: Response): void => {

  Recipe.addComment(req.body.recipeId, req.body.comment, req.body.userId, (err: Error | null, data?: any) => {
    if (err) {
      return res.status(500).send({
        message: "Error adding comment to recipe"
      });
    }
      });
  };

  export const saveRecipe = async (req: Request, res: Response): Promise<void> => {
    try {
      const userId = req.body.userId;
      const recipeId = req.body.recipeId; 
  
      // Llama al método estático para guardar la receta en el perfil del usuario
      SavedRecipe.savedRecipe(userId, recipeId, (err: any, result: any) => {
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
      const userId = req.body.userId;
  
      // Llama al método estático para obtener las recetas guardadas del perfil del usuario
      SavedRecipe.getSavedRecipes(userId, (err: any, result: any) => {
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

  //Funcion de like
  export const addLike = async (req: Request, res: Response): Promise<void> => {
    try {
      const recipe_likes: number = Number(req.params.id);
      //añadir like
     
      Recipe.addLike(recipe_likes, (err: Error | null, data?: any) =>{
      if (err) {
          return res.status(500).send({
            message: "Error adding like to recipe"
          });
        }
        res.status(200).send({
          message: "Like added to recipe successfully"
        });
      }
    });
};


export const removeLike = async (req: Request, res: Response) => {
  try {
    const recipe_likes: number = Number(req.params.id);
    //eliminar like
    
    if (isNaN(recipe_likes) || recipe_likes <= 0) {
    return res.status(400).json({ Error: 'Invalid like ID'});
    }
    if (error) {
    console.error('Error deleting like from database:', error);
    return res.status(500).json({ Error:'Internal Server Error'});
    }
    if (result.affectedRows === 0) {
    return res.status(404).json({ Error: 'Like not found' });
    }
    res.json({ message: 'Like successfully removed' });
    }
};

// Update a Recipe identified by the id in the request
/*exports.update = (req, res) => {
   // Validate Request
   if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Recipe.updateById(
    req.params.id,
    new Recipe(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Recipe with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Recipe with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Recipe with the specified id in the request
exports.delete = (req, res) => {
    Recipe.remove(req.params.id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Recipe with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete Recipe with id " + req.params.id
            });
          }
        } else res.send({ message: `Recipe was deleted successfully!` });
      });
    };*/

   
    