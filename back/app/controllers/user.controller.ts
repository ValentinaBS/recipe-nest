import { Request, Response } from 'express';
import { User } from '../models/user.model';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export const create = async (req: Request, res: Response): Promise<void> => {

    const newUser: User = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        user_image: req.body.user_image,
        user_description: req.body.user_description
    }

    User.create(newUser, (err: Error | null, data?: User) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Error registering user"
            });
        } else {
            res.send(data);
            User.login(newUser.email, newUser.password, (err: Error | null, data?: User) => {
                if (err) {
                    res.status(500).send({
                        message:
                            err.message || "Error logging user."
                    });
                } else {
                    res.send(data);
                }
            })
        }
    });
};

export const login = async (req: Request, res: Response): Promise<void> => {

    try {
        const user = await User.findByEmail(req.body.email);

        if (!user) {
            res.status(404).send({ message: "User not found" });
            return;
        }

        User.login(req.body.email, req.body.password, async (err: Error | null, data?: User) => {
            
            if (err) {
                console.error("Error logging user:", err);
                res.status(500).send({
                    message:
                        err.message || "Error logging user."
                });
            } else {
                const { email, username } = user;
                res.status(200).send({ email, username });
            }
        })

    } catch (err) {
        res.status(500).send({ message: "Error looking for user." });
    }
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

