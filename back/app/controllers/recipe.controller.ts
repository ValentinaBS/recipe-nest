import { Request, Response } from 'express';
import { Recipe } from '../models/recipe.model';
//import { error } from 'console';

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

//encontrar todas las recetas por titulo
export const getAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const title: string | null = req.query.recipe_title ? String(req.query.recipe_title): null;
    const recipes = await Recipe.getAll(title);
    res.json(recipes);
  } catch (err);
  console.log("Error al obtener todas las recetas:", err);
  res.status(500).json({
    massage: "Error al obtener las recetas."
  })
}

  //Funcion de like
/*  export const addLike = async (req: Request, res: Response): Promise<void> => {
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
*/