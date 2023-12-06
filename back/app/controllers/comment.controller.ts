import { Request, Response } from 'express';
import { Comment } from '../models/comment.model';


export const createComment = (req: Request, res: Response): void => {

    Comment.addComment(req.body, (err: Error | null, data?: Comment) => {
      if (err) {
         res.status(500).json({
          message: "Error adding comment to recipe",
          error: err.message,
        });
      }
        });
    };