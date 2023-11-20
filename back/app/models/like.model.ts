import { pool } from './db';

export interface Like{
    recipe_id: Number;
    user_id: Number;
    recipe_like: Number;}