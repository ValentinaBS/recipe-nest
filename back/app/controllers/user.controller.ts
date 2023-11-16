import { Request, Response } from 'express';
import { User } from '../models/user.model';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';


// Crear y guardar un nuevo usuario
export const create = (req: Request, res: Response): void => {
    // Validar la solicitud
    if (!req.body) {
        res.status(400).send({
            message: "¡El contenido no puede estar vacío!"
        });
    }

    // Crear un usuario
    const user: User = {
        user_id:req.body.user_id,
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
};

// Buscar un usuario por ID
export const findOne = (req: Request, res: Response): void => {
    const userId: number = Number(req.params.id);

    User.findById(userId, (err: Error | null, data?: User) => {
        if (err) {
            if (err.message === "not_found") {
                res.status(404).send({
                    message: `No se encontró el Usuario con el ID ${userId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error al recuperar el usuario con el ID " + userId
                });
            }
        } else {
            res.send(data);
        }
    });
};

// Actualizar un usuario por ID
export const update = (req: Request, res: Response): void => {
    const userId: number = Number(req.params.id);

    // Obtén los datos actualizados del usuario desde la solicitud
    const updatedUserData = {
        user_id: req.body.user_id,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        user_image: req.body.user_image,
        user_description: req.body.user_description
    };

    User.update(userId, updatedUserData, (err: Error | null, result?: { message: string }) => {
        if (err) {
            if (err.message === "not_found") {
                res.status(404).send({
                    message: `No se encontró el Usuario con el ID ${userId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error al actualizar el usuario con el ID " + userId
                });
            }
        } else {
            res.send(result); // Devuelve un mensaje de éxito
        }
    });
};

export const login = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;

    try {
        const user = await User.findByEmail(email);

        if (!user) {
            res.status(404).send({ message: "Usuario no encontrado" });
            return;
        }

        const passwordMatches = await bcrypt.compare(password, user.password);

        if (passwordMatches) {
            // El usuario existe y la contraseña coincide
            const token = jwt.sign({ userId: user.user_id }, 'secret_key', { expiresIn: '1h' });
            res.send({ token });
        } else {
            res.status(401).send({ message: "Credenciales inválidas" });
        }
    } catch (err) {
        res.status(500).send({ message: "Error al buscar el usuario" });
    }
};



