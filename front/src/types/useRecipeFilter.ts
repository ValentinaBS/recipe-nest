import { Recipe } from "./recipe";

export interface UseRecipeFilterProps {
    recipes: Recipe[];
}

export interface UseRecipeFilterResult {
    searchInput: string;
    occasionFilters: string[];
    typeFilters: string[];
    filteredRecipes: Recipe[];
    allOccasions: string[];
    allTypes: string[];
    handleOccasionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleTypeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSearchInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: React.FormEvent) => void;
    clearFilters: () => void;
}