import { useEffect, useState } from 'react';
import axios from 'axios';
import Filters from '../../components/Filters/Filters';
import RecipeCardContainer from '../../components/RecipeCard/RecipeCardContainer';
import useRecipeFilter from '../../hooks/UseRecipeFilter';
import { Recipe } from '../../types/recipe';

const Search: React.FC = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get<Recipe[]>('http://localhost:3000/api/recipes/all');
                setRecipes(response.data.filter(recipe => recipe.recipe_active == 1));
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };

        fetchRecipes();
    }, []);

    const {
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
    } = useRecipeFilter({ recipes });

    return (
        <>
            <section className="mb-5 mt-3 pt-4 pt-md-5 mx-2 mx-md-4 d-flex column-gap-3">
                <Filters
                    searchInput={searchInput}
                    occasionFilters={occasionFilters}
                    typeFilters={typeFilters}
                    allOccasions={allOccasions}
                    allTypes={allTypes}
                    handleOccasionChange={handleOccasionChange}
                    handleTypeChange={handleTypeChange}
                    handleSearchInputChange={handleSearchInputChange}
                    onSubmit={onSubmit}
                    clearFilters={clearFilters}
                />

                <RecipeCardContainer
                    title='Search your ideal recipe!'
                    recipesList={filteredRecipes}
                />
            </section>
        </>
    )
}

export default Search