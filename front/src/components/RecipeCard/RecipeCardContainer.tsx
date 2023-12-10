import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';
import './recipeCard.css';
import { RecipeCardContainerProps, Recipe } from '../../types/recipe';

const RecipeCardContainer: React.FC<RecipeCardContainerProps> = (props) => {

    const { title, recipesList } = props;

    const [sortedRecipes, setSortedRecipes] = useState(recipesList);
    const [sortOrder, setSortOrder] = useState('');

    useEffect(() => {
        sortRecipes();
        console.log(recipesList)
    }, [recipesList, sortOrder]);

    const sortOptions: Record<string, (a: Recipe, b: Recipe) => number> = {
        'A-Z': (a, b) => a.recipe_title.localeCompare(b.recipe_title),
        'Z-A': (a, b) => b.recipe_title.localeCompare(a.recipe_title),
        'most-liked': (a, b) => b.recipe_likes - a.recipe_likes,
        'recent': (a, b) => b.recipe_published_time.localeCompare(a.recipe_published_time),
    };

    const sortRecipes = () => {
        const sortingFunction = sortOptions[sortOrder];
        const sorted = sortingFunction ? [...recipesList].sort(sortingFunction) : [...recipesList];
        setSortedRecipes(sorted);
    };

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortOrder(e.target.value);
    };

    return (
        <>
            <section className='recipes-section'>
                <div className='row mb-4 mx-3 mx-md-3'>
                    <div className='px-0 col-md-8'>
                        <h2 className='fw-bold text-center text-md-start'>
                            {title}
                        </h2>
                    </div>
                    <div className='px-0 col-md-4'>
                        <div className='d-flex align-items-center justify-content-md-end justify-content-center column-gap-2 my-2 my-md-0 mx-2 mx-md-0'>
                            <span>Sort by:</span>
                            <select
                                onChange={handleSortChange}
                                className='rounded p-1 w-50'
                                aria-label='Sort filters'
                                defaultValue=''
                            >
                                <option disabled value=''>- Sort by -</option>
                                <option value='A-Z'>A-Z</option>
                                <option value='Z-A'>Z-A</option>
                                <option value='most-liked'>Most Liked</option>
                                <option value='recent'>Recent</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className='row mx-3 d-flex flex-wrap column-gap-5 row-gap-5 align-items-center justify-content-center'>
                    {sortedRecipes.length === 0 ? (
                        <p className='text-center m-5 fs-4'>
                            No recipes match the selected filters.
                        </p>
                    ) : (
                        <>
                            {sortedRecipes.map((recipe) => (
                                <RecipeCard key={recipe.recipe_id} recipe={recipe} />
                            ))}
                        </>
                    )}
                </div>

            </section>
        </>
    );
};

export default RecipeCardContainer;