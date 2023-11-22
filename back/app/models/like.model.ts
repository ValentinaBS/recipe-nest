import { pool } from './db';
import { ResultSetHeader, RowDataPacket } from 'mysql2';

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
    
    static async addLike(recipeId: Number, userId: Number): Promise<void> {
        try{
            const [existingLikes] = await this.connection.query(
                'SELECT * FROM likes WHERE recipe_id = ? AND user_id = ?',
                [recipeId, userId]
            );

            if(existingLikes.length === 0) {
               await this.connection.query(
                'INSERT INTO likes (recipi_id, user_id) VALUES (?, ?)',
                [recipeId, userId]
               );
            console.log('Like added successfully.');
            } else {
                console.log('The user has already "Liked" this recipe.');
            } catch (error) {
                console.error('Error adding "Like":', error);
                throw error;
            }
        }
    }

    static async removeLike(recipeId: Number, userId: Number): Promise<void> {
        try {
            const [existingLikes] = await this.connection.query(
                'SELECT * FROM likes WHERE recipe_id = ? AND user_id = ?',
                [recipeId, userId]
            );
        if (existingLikes > 0){
            await this.connection.query(
                'DELETE FROM likes WHERE recipe_id = ? AND user_id = ?',
                [recipeId, userId]
            );
            console.log('Like successfully removed.');
        }else{
            console.log('The user has not "Liked" this recipe.');
        } catch (Error){
            console.error('Error deleting likes:', error);
            throw error;
        }
      }
    }

    static async getLikesCount(recipeId): Promise<Number>{
        try{
           const [rows] = await this.connection.query(
            'SELECT COUNT(*) as count FROM likes WHERE recipe_id = ?',
            [recipeId]
          );
           
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