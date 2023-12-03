import { Request, Response } from 'express';
import { Comment } from '../models/comment.model';


export const createComment = (req: Request, res: Response): void => {

    Comment.addComment(req.body, (err: Error | null, data?: any) => {
      if (err) {
        return res.status(500).send({
          message: "Error adding comment to recipe"
        });
      }
      res.status(201).json(data);
        });
    };