import { Request, Response } from 'express';
import { Recipe, Likemodel } from '../models/recipe.model'; // Asegúrate de que la importación sea correcta

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

//Actualizar una receta 
export const updateRecipe = async (req: Request, res: Response): Promise<void> => {
  const recipeId: number = Number(req.params.id);
  if (isNaN(recipeId) || recipeId <= 0) {
    res.status(400).send({
      message: "El ID de la receta no es válido."
    });
  /*if (!req.body) {
    res.status(400).send({
      message: "¡El contenido no puede estar vacio!"
    });*/
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
    recipe_category_occasion: req.body.recipe_category_occasion
  };
  try {
    await Recipe.updateById(recipeId, updateRecipe, (err: Error | null, data?: Recipe) => {
      if (err) {
        if (err.message === "not_found") {
          res.status(400).send({
          message: `no se encontro la reseta con el id ${recipeId}.` 
          });
        } else {
          res.status(500).send({
           message: "Error al actualizar la receta." 
          });
        }
      } else {
        res.send(data);
      }
    });
  } catch (Error) {
    console.log("Error en el controlador de actualizar la receta:", Error);
     res.status(500).json({
    message: "Error al actualizar la receta."
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
            message: `No se encontró la Receta con el ID ${recipeId}.`
          });
        } else {
          res.status(500).send({
            message: "Error al desactivar la Receta con el ID " + recipeId
          });
        }
      } else {
        res.send(data);
      }
    });
  } catch (error) {
    console.error("Error en el controlador de desactivar la receta:", error);
    res.status(500).json({
      message: "Error al desactivar la receta."
    });
  }
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

//encontrar todas las recetas por titulo
export const getAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const title: string | null = req.query.title ? String(req.query.title): null;
    const recipes = await Recipe.getAll(title);
    res.json(recipes);
  } catch (err){
  console.log("Error al obtener todas las recetas:", err);
  res.status(500).json({
    massage: "Error al obtener las recetas."
  })
}
}

  //Funcion de like
export const addLike = async (req: Request, res: Response): Promise<void> => {
  try {
    const recipe_likes: number = Number(req.body.recipe_likes);
    const recipeId: number = Number(req.params.recipe_id);
    const userId: number = Number(req.body.user_id);
    //añadir like
    const result = await new Promise<Error | null | number>((resolve) => {
      Likemodel.addLike(recipeId, userId, recipe_likes, (err: Error | null, data?: number) => {
        if (err) {
          console.error('Error adding the like to the database:', err);
          return res.status(500).json({ Error: 'Internal Server Error'});
      }
      res.status(201).json({ message: 'Likes successfully added' });
        });
    });
  } catch (error){
    console.error("Error en el controlador de obtener el like", error);
    res.status(201).json({ error: 'Error interno del servidor' });
  }
}

  export const removeLike = (req: Request, res: Response) => {
      try{
        const recipeId = req.body.recipeId;
        const recipe_likes = req.body.recipe_likes;
        const userId = req.body.userId; 
        
        //eliminar like
          Likemodel.removeLike(recipe_likes, recipeId, userId, (err: Error | null, data?: number)=>{

            if (err) {
              console.error('Error deleting like from database:');
              return res.status(500).json({ Error:'Internal Server Error'});
            }
            if (recipe_likes.affectedRows === 0) {
              return res.status(404).json({ Error: 'Like not found' });
            }
          })
           res.json({ message: 'Like successfully removed' });
           } catch (error) {
            console.error("Error en el controlador de eliminar el like", error);
            res.status(500).json ({ error: 'Error interno del servidor' });
          }
        };
