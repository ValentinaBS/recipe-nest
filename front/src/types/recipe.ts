export interface Recipe {
    recipe_id: number;
    recipe_image: string;
    recipe_title: string;
    recipe_published_time: string;
    recipe_instructions: string;
    recipe_category_type: string;
    recipe_category_occasion: string;
    recipe_likes: number;
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
    };
    //bookmarkRecipe: (recipeId: number) => void;
};