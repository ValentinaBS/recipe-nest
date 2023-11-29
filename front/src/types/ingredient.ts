export interface Ingredient {
    id: `${string}-${string}-${string}-${string}-${string}`; 
    text: string;
    quantity: number;
    unit: string;
}

export interface IngredientItemProps {
    ingredient: Ingredient;
    removeIngredient: (id: string) => void;
}