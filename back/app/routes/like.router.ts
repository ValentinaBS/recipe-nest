import express, {Request, Response } from 'express';
import { Like} from '../models/like.model';

const router = express.Router();

router.get('/likes', (req: Request, res: Response) =>{

});

router.post('/likes', (req: Request, res: Response) => {
    const nuevoLike: Like = req.body;
});

router.delete('/likes/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
});


export default router;