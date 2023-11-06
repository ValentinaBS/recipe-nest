import { Request, Response } from 'express';
import { User } from '../models/user.model';

// Crear y guardar un nuevo usuario
export const create = (req: Request, res: Response): void => {
    // Validar la solicitud
    if (!req.body) {
      res.status(400).send({
        message: "¡El contenido no puede estar vacío!"
      });
    }

// Crear una Receta
  const user: User = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    user_image: req.body.user_image,
    user_description: req.body.user_description
  };

    // Guardar un Usuario en la base de datos
    User.create(user, (err: Error | null, data?: User) => {
        if (err) {
          res.status(500).send({
            message:
              err.message || "Se produjo un error al crear el usuario."
          });
        } else {
          res.send(data);
        }
      });

      export const findOne = (req: Request, res: Response): void => {
        const recipeId: number = Number(req.params.id);
      
      
        User.findById(recipeId, (err: Error | null, data?: User) => {
          if (err) {
            if (err.message === "not_found") {
              res.status(404).send({
                message: `No se encontró el Usuario con el ID ${recipeId}.`
              });
            } else {
              res.status(500).send({
                message: "Error al recuperar el usuario con el ID " + recipeId
              });
            }
          } else {
            res.send(data);
          }
        });
      };
    };

