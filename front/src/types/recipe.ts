export interface Recipe {
    recipe_id: number;
    recipe_image: string;
    recipe_title: string;
    recipe_published_time: string;
    recipe_instructions: string;
    recipe_category_type: string;
    recipe_category_occasion: string;
    recipe_likes: number;
    recipe_cooktime: string;
    recipe_portions: number;
    recipe_active: number;
    recipe_ingredients: string[];
    user_id: number;
};

export interface RecipeCardContainerProps {
    title: string;
    recipesList: Recipe[];
};

export type RecipeCardProps = {
    recipe: {
        recipe_id: number;
        recipe_image: string;
        recipe_title: string;
        recipe_published_time: string;
        recipe_instructions: string;
        recipe_category_type: string;
        recipe_category_occasion: string;
        recipe_likes: number;
        recipe_cooktime: string;
        recipe_portions: number;
        recipe_active: number;
        recipe_ingredients: string[];
        user_id: number;
    };
};