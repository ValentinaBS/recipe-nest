import { Request, Response } from 'express';
import { Likemodel } from '../models/like.model'; 

/*Likemodel.query(sql, (err: Error | null, result: any) =>

interface Likemodel {
    query: (sql: string, callback:(err: Error | null, result: any) => void) => void;
}

export const getLikes = (req: Request, res: Response) => {
    const sql = 'SELECT * FROM recipe_like';
    
    Likemodel.query(sql, (err: Error | null, result: any) =>{
        if (err) {
            console.error('Error getting "likes" from database:', err);
            return res.status(500).json({error: 'Internal Server Error' });
        }
        const like: Like[] = result;
        res.json(like);
    });
};

export const addLike = (req: Request, res: Response) => {
    const newLike: Like = req.body;
    if (!newLike || !newLike.recipe_id || !newLike.user_id || !newLike.recipe_like){
        return res.status(400).json({error: 'Invalid input data'});
    }
    const sql = 'INSERT INTO like SET?';
    Likemodel.query(sql, newLike, (err: Error) =>{
        if (err) {
            console.error('Error adding the like to the database:', err);
            return res.status(500).json({ Error: 'Internal Server Error'});
        }
        res.status(201).json({ message: 'Likes successfully added' });
    });
};

export const removeLike = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    if (isNaN(id) || id <= 0) {
        return res.status(400).json({ Error: 'Invalid like ID'});
    }
    const sql = 'DELETE FROM like WHERE id = ?';
    Likemodel.query(sql, [id], (err: Error | null, result: any)=>{
        if (err) {
            console.error('Error deleting like from database:', err);
            return res.status(500).json({ Error:'Internal Server Error'});
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ Error: 'Like not found' });
        }
        res.json({ message: 'Like successfully removed' });
    });
};
*/




    
    
    
        
        
