import express, { Express, Request, Response } from 'express';
import * as comments from '../controllers/comment.controller';

const router = express.Router();

router.post("/", comments.createComment);

router.get("/search/:recipe_id", comments.findByRecipeId);

const CommentRoutes = (app: Express): void => {
  app.use('/api/comments', router);
};
export default CommentRoutes;