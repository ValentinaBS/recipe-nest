import { useState } from 'react';
import { Recipe } from '../types/recipe';
import { UseRecipeFilterProps, UseRecipeFilterResult } from '../types/useRecipeFilter';

const useRecipeFilter = ({ recipes }: UseRecipeFilterProps): UseRecipeFilterResult => {
    const [searchInput, setSearchInput] = useState('');
    const [occasionFilters, setOccasionFilters] = useState<string[]>([]);
    const [typeFilters, setTypeFilters] = useState<string[]>([]);
    const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(recipes);

    const allOccasions = [...new Set(recipes.map((recipe) => recipe.recipe_category_occasion))];
    const allTypes = [...new Set(recipes.map((recipe) => recipe.recipe_category_type))];

    const handleOccasionChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const occasion = e.target.value;
        setOccasionFilters((prevFilters) =>
            prevFilters.includes(occasion)
                ? prevFilters.filter((filter) => filter !== occasion)
                : [...prevFilters, occasion]
        );
    };

    const handleTypeChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const type = e.target.value;
        setTypeFilters((prevFilters) =>
            prevFilters.includes(type)
                ? prevFilters.filter((filter) => filter !== type)
                : [...prevFilters, type]
        );
    };

    const handleSearchInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setSearchInput(e.target.value);
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newFilteredRecipes = recipes.filter((recipe) => {
            const matchesSearch =
                recipe.recipe_title.toLowerCase().includes(searchInput.toLowerCase()) ||
                recipe.recipe_instructions.toLowerCase().includes(searchInput.toLowerCase());

            const matchesOccasion = occasionFilters.length === 0 || occasionFilters.includes(recipe.recipe_category_occasion);
            const matchesType = typeFilters.length === 0 || typeFilters.includes(recipe.recipe_category_type);

            return matchesSearch && matchesOccasion && matchesType;
        });

        setFilteredRecipes(newFilteredRecipes);
    };

    const clearFilters = () => {
        setSearchInput('');
        setOccasionFilters([]);
        setTypeFilters([]);
        setFilteredRecipes(recipes);
    };

    return {
        searchInput,
        occasionFilters,
        typeFilters,
        filteredRecipes,
        allOccasions,
        allTypes,
        handleOccasionChange,
        handleTypeChange,
        handleSearchInputChange,
        onSubmit,
        clearFilters,
    };
};

export default useRecipeFilter;
