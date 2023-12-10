import { Request, Response } from 'express';
import { Comment } from '../models/comment.model';


export const createComment = (req: Request, res: Response): void => {
  Comment.addComment(req.body, (err: Error | null, data?: Comment) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "There was an error creating the comment"
      });
    } else {
      res.send(data);
    }
  });
};

export const findByRecipeId = (req: Request, res: Response): void => {
  const recipeId: number = Number(req.params.recipe_id);

  Comment.findByRecipeId(recipeId, (err: Error | null, data?: any[]) => {
    if (err) {
      if (err.message === "not_found") {
        res.status(404).send({
          message: `No comments found for the recipe with ID ${recipeId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving comments for the recipe with ID " + recipeId
        });
      }
    } else {
      res.send(data);
    }
  });
};