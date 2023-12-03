import express, { Express, Request, Response } from 'express';
import { createComment } from '../controllers/comment.controller';

const router = express.Router();

// Add comment to a recipe
router.post("/", createComment);

const CommentRoutes = (app: Express): void => {
  app.use('/api/comments', router);
};
export default CommentRoutes;