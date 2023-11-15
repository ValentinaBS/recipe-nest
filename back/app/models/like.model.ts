import { pool } from './db'; 

export interface Like{
    id: Number;
    user_id: Number;
    recipe_like: Number;
}