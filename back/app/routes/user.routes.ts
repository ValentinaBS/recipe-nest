import express, { Express, Request, Response } from 'express';
import * as user from '../controllers/user.controller';

const router = express.Router();

router.post("/register", user.create);

router.post("/login", user.login);

// Retrieve a single user with id
router.get("/:id", user.findOne);

const userRoutes = (app: Express): void => {
    app.use('/api/user', router);
  };
export default userRoutes;