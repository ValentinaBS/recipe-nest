import { useState } from 'react';
import Filters from '../../components/Filters/Filters';
import RecipeCardContainer from '../../components/RecipeCard/RecipeCardContainer';

const Search: React.FC = () => {
    const [searchInput, setSearchInput] = useState('');
    const [occasionFilters, setOccasionFilters] = useState<string[]>([]);
    const [typeFilters, setTypeFilters] = useState<string[]>([]);

    
/*     const [filters, setFilters] = useState({
        searchInput: '',
        occasionFilters: [] as string[],
        typeFilters: [] as string[],
    });
    const [filteredRecipes, setFilteredRecipes] = useState(props.recipesList);

    const handleFilterChange = (type: string, value: string) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [type]: value,
        }));
    };

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const filteredResults = recipesList.filter((recipe) => {
            return (
                recipe.recipe_title.toLowerCase().includes(filters.searchInput.toLowerCase()) &&
                (filters.occasionFilters.length === 0 || filters.occasionFilters.includes(recipe.recipe_category_occasion)) &&
                (filters.typeFilters.length === 0 || filters.typeFilters.includes(recipe.recipe_category_type))
            );
        });

        setFilteredRecipes(filteredResults);
    }; */

    const recipes = [
        {
            recipe_id: 1,
            recipe_image: 'https://i.imgur.com/xIkRscC.jpg',
            recipe_title: 'Tomato Salad With Lemon, Avocado, Sesame Seeds and more',
            recipe_published_time: '10/12/2023',
            recipe_instructions: 'Pasta for everyone! Gluten-free and vegan gnocchi with pesto, a perfect recipe for the most demanding palates.',
            recipe_category_type: 'Vegan',
            recipe_category_occasion: 'Lunch',
        },
        {
            recipe_id: 2,
            recipe_image: 'https://i.imgur.com/xIkRscC.jpg',
            recipe_title: 'Grilled Avocado with Rosemary and Garlic',
            recipe_published_time: '11/01/2023',
            recipe_instructions: 'Juicy grilled avocado seasoned with fresh rosemary and garlic, a delightful dish for your next barbecue.',
            recipe_category_type: 'Vegan',
            recipe_category_occasion: 'Dinner',
        },
        {
            recipe_id: 3,
            recipe_image: 'https://i.imgur.com/xIkRscC.jpg',
            recipe_title: 'Chocolate Chip Cookies with',
            recipe_published_time: '11/15/2023',
            recipe_instructions: 'Classic chocolate chip cookies with a twist of added cinnamon and nutmeg, perfect for satisfying your sweet tooth.',
            recipe_category_type: 'Vegetarian',
            recipe_category_occasion: 'Tea Time',
        },
        {
            recipe_id: 4,
            recipe_image: 'https://i.imgur.com/xIkRscC.jpg',
            recipe_title: 'Vegetarian Stuffed Bell Peppers',
            recipe_published_time: '11/28/2023',
            recipe_instructions: 'Colorful bell peppers stuffed with a delicious mix of quinoa, black beans, corn, and spices, a healthy and flavorful option for dinner.',
            recipe_category_type: 'Vegetarian',
            recipe_category_occasion: 'Dinner',
        }
    ];

    return (
        <>
            <section className="mb-5 mt-3 pt-4 pt-md-5 mx-2 mx-md-4 d-flex column-gap-3">
                {/*             <Offcanvas className='h-75' placement='bottom' show={show} onHide={() => setShow(false)}>
                <Offcanvas.Header className='my-2' closeButton />
                    <Offcanvas.Body>
                        <Filters />
                    </Offcanvas.Body>
                </Offcanvas> */}
                <Filters
                    display=' d-none d-lg-block'
                    onFilterChange={handleFilterChange}
                    searchInput={searchInput}
                    occasionFilters={occasionFilters}
                    typeFilters={typeFilters}
                />
                <RecipeCardContainer title='Search your ideal recipe!' recipesList={recipes} />
            </section>
        </>
    )
}

export default Search