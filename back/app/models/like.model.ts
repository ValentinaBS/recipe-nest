import { pool } from './db';
import { RowDataPacket,  FieldPacket} from 'mysql2';

/*export interface Like{
    recipe_id: Number;
    recipe_like: Number;
    user_id: Number;}*/

export class Likemodel {

    recipe_id: Number;
    recipe_like: Number;
    user_id: Number;

    constructor(like: any){
        this.recipe_id = like.recipe_id;
        this.recipe_like = like.recipe_like;
        this.user_id = like.user_id;
    }
    
//Añadir like
    static async addLike(recipeId: Number, userId: Number): Promise<void> {
      const connection = await pool.getConnection();
      try {
        const [existingLikes] = await connection.query('SELECT * FROM likes WHERE recipe_id = ? AND user_id = ?', [recipeId, userId]);

        if ((existingLikes as any[]).length === 0) {
            await connection.query('INSERT INTO likes (recipe_id, user_id) VALUES (?, ?)', [recipeId, userId]);
            console.log('Like added successfully.');
        } else {
            console.log('The user has already "Liked" this recipe.');
        }
    } catch (error) {
        console.error('Error adding "Like":', error);
        throw error;
    }
}   
   
//Eliminar like
    static async removeLike(recipeId: Number, userId: Number): Promise<void> {
      const connection = await pool.getConnection();
        try {
          //  const [existingLikes]: [RowDataPacket[]] = await connection.query('SELECT * FROM likes WHERE recipe_id = ? AND user_id = ?',[recipeId, userId]);
            const [existingLikes, _]: [RowDataPacket[], FieldPacket[]] = await connection.query('SELECT * FROM likes WHERE recipe_id = ? AND user_id = ?', [recipeId, userId]); 
            if (existingLikes.length > 0) {
                await connection.query('DELETE FROM likes WHERE recipe_id = ? AND user_id = ?',[recipeId, userId]);
                console.log('Like successfully removed.');
         } else {
            console.log('The user has not "Liked" this recipe.');
        } 
        }catch (error){
            console.error('Error deleting likes:', error);
            throw error;
        }
    }

    //Recuento de Like
    static async getLikesCount(recipeId: Number): Promise<Number>{
        const connection = await pool.getConnection();
        try{
           const [rows]: [RowDataPacket[], FieldPacket[]] = await connection.query(
            'SELECT COUNT(*) as count FROM likes WHERE recipe_id = ?',
            [recipeId]);
           
          const likesCount: number = rows[0].count;

          console.log(`Recipe with ID ${recipeId} is liked by ${likesCount}.`);

        return likesCount;
        } catch (error) {
        console.error('Error getting number of likes:', error);
        throw error;
        }
    }
}

export default Likemodel;