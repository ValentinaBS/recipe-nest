export interface Ingredient {
    id: `${string}-${string}-${string}-${string}-${string}`; 
    text: string;
}

export interface IngredientItemProps {
    ingredient: Ingredient;
    removeIngredient: (id: string) => void;
}