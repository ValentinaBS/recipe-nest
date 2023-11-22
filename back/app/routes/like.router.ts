import  express, { Express, Request, Response } from 'express';
import * as likeController from '../controllers/like.controllers';
import db from '../models/db';

const router = express.Router();

router.get('/like', likeController.addLike);

router.post('/like', likeController.getLikes);

router.delete('/like', likeController.removeLike);

export default likeRouter;


