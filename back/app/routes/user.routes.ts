import express, { Express, Request, Response } from 'express';
import * as user from '../controllers/user.controller';

const router = express.Router();

router.post("/register", user.create);

router.post("/login", user.login);

router.post('/logout', user.logout);

router.get("/current", user.current);

router.get("/:username", user.findByUsername);

const userRoutes = (app: Express): void => {
    app.use('/api/user', router);
  };
export default userRoutes;