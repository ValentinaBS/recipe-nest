import { Request, Response } from 'express';
import { User } from '../models/user.model';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export const create = async (req: Request, res: Response): Promise<void> => {

    const newUser: User = {
        user_id: undefined,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        user_image: req.body.user_image,
        user_description: req.body.user_description
    }

    User.create(newUser, (err: Error | null, data?: User) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Error registering user"
            });
        } else {
            res.status(200).json(data);
        }
    });
};

export const login = async (req: Request, res: Response): Promise<void> => {

    try {
        const user = await User.findByEmail(req.body.email);
        console.log(user)

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

                const secretKey = process.env.SECRET_KEY;

                if (!secretKey) {
                    res.status(404).send("Secret key is missing or undefined");
                    return;
                }

                const token = jwt.sign({ email, username }, secretKey, { expiresIn: '1h' });

                const {password, ...others} = user; 
                res.cookie("accessToken", token, {
                    httpOnly: true,
                }).status(200).json(others);
            }
        })

    } catch (err) {
        res.status(500).send({ message: "Error looking for user." });
    }
};

export const logout = (req: Request, res: Response) => {
    res.clearCookie("accessToken", {
        secure:true,
        sameSite:"none"
    }).status(200).json({ message: "Logout successful" })
};

export const current = (req: Request, res: Response): void => {
    const token: string | undefined = req.headers.authorization?.split(' ')[1];

    if (!token) {
        res.status(400).send({ message: "Token is missing or invalid" });
        return;
    }

    User.current(token, (err: Error | null, data?: User) => {
        if (err) {
            if (err.message === "not_found") {
                res.status(404).send({
                    message: `Couldn't find user with token: ${token}.`
                });
            } else {
                res.status(500).send({
                    message: `Error recovering user with token ${token}: ${err.message}`
                });
            }
        } else {
            res.send(data);
        }
    });
};

export const update = (req: Request, res: Response): void => {
    const userId: number = Number(req.params.id);

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
            res.send(result);
        }
    });
};

export const findByUsername = (req: Request, res: Response): void => {
    const username: string = req.params.username;

    try {
        User.findByUsername(username, (err: Error | null, data?: User) => {
            if (err) {
                if (err.message === "not_found") {
                    res.status(404).send({
                        message: `User with username '${username}' not found`
                    });
                } else {
                    res.status(500).send({
                        message: `Internal server error`
                    });
                }
            } else {
                res.status(200).send(data);
            }
        })
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

