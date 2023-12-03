import  express, { Express, Request, Response }  from "express";
import * as likeController from '../controllers/like.controllers';

const router = express.Router();

router.get('/like', likeController.addLike);

router.post('/like', likeController.getLikes);

router.delete('/like', likeController.removeLike);

const LikeRoutes = (app: Express): void => {
    app.use('/api/likes', router);
  };
export default LikeRoutes;


