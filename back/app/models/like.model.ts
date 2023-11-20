import { pool } from "./db";


/*export interface Like{
    recipe_id: Number;
    recipe_like: Number;
    user_id: Number;}*/

export class Like {

    recipe_id: Number;
    recipe_like: Number;
    user_id: Number;

    constructor(like: any){
        this.recipe_id = like.recipe_id;
        this.recipe_like = like.recipe_like;
        this.user_id = like.user_id;
    }
    

}