import { useState } from 'react';
import Filters from '../../components/Filters/Filters';
import RecipeCardContainer from '../../components/RecipeCard/RecipeCardContainer';

interface Recipe {
    recipe_id: number;
    recipe_image: string;
    recipe_title: string;
    recipe_published_time: string;
    recipe_instructions: string;
    recipe_category_type: string;
    recipe_category_occasion: string;
    recipe_likes: number;
}

const Search: React.FC = () => {
    const [searchInput, setSearchInput] = useState('');
    const [occasionFilters, setOccasionFilters] = useState<string[]>([]);
    const [typeFilters, setTypeFilters] = useState<string[]>([]);

    const recipes = [
        {
            recipe_id: 1,
            recipe_image: 'https://i.imgur.com/xIkRscC.jpg',
            recipe_title: 'Tomato Salad With Lemon, Avocado, Sesame Seeds and more',
            recipe_published_time: '10/12/2023',
            recipe_instructions: 'Pasta for everyone! Gluten-free and vegan gnocchi with pesto, a perfect recipe for the most demanding palates.',
            recipe_category_type: 'Vegan',
            recipe_category_occasion: 'Lunch',
            recipe_likes: 15,
        },
        {
            recipe_id: 2,
            recipe_image: 'https://i.imgur.com/xIkRscC.jpg',
            recipe_title: 'Grilled Avocado with Rosemary and Garlic',
            recipe_published_time: '11/01/2023',
            recipe_instructions: 'Juicy grilled avocado seasoned with fresh rosemary and garlic, a delightful dish for your next barbecue.',
            recipe_category_type: 'Vegan',
            recipe_category_occasion: 'Dinner',
            recipe_likes: 23,
        },
        {
            recipe_id: 3,
            recipe_image: 'https://i.imgur.com/xIkRscC.jpg',
            recipe_title: 'Chocolate Chip Cookies with',
            recipe_published_time: '11/15/2023',
            recipe_instructions: 'Classic chocolate chip cookies with a twist of added cinnamon and nutmeg, perfect for satisfying your sweet tooth.',
            recipe_category_type: 'Vegetarian',
            recipe_category_occasion: 'Tea Time',
            recipe_likes: 10,
        },
        {
            recipe_id: 4,
            recipe_image: 'https://i.imgur.com/xIkRscC.jpg',
            recipe_title: 'Vegetarian Stuffed Bell Peppers',
            recipe_published_time: '11/28/2023',
            recipe_instructions: 'Colorful bell peppers stuffed with a delicious mix of quinoa, black beans, corn, and spices, a healthy and flavorful option for dinner.',
            recipe_category_type: 'Vegetarian',
            recipe_category_occasion: 'Dinner',
            recipe_likes: 30,
        },
    
    ];

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