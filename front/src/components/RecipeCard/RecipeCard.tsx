import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaRegBookmark } from 'react-icons/fa6';
import { BiLike, BiComment } from 'react-icons/bi';

interface RecipeCardProps {
    recipe: Record<string, any>;
    //bookmarkRecipe: (recipeId: number) => void;
}

const RecipeCard: React.FC<RecipeCardProps> = (props) => {

    const {
        recipe,
        //bookmarkRecipe,
    } = props;

    return (
        <>
            <div className='col px-0 d-flex justify-content-center'>
                <div className='card recipe-card'>
                    <img
                        src={recipe.recipe_image}
                        alt={recipe.recipe_title}
                        className='card-img-top recipe-card-img object-fit-cover w-100 h-lg-100 rounded-bottom-0'
                    />
                    <div className='card-body mt-2 d-flex flex-column justify-content-between'>
                        <h5 className='card-title fw-bold line-clamp'>{recipe.recipe_title}</h5>
                        <div className='d-flex pt-3 green-border'>
                            <p className='mb-1'>{recipe.recipe_published_time}</p>
                            <span className='mx-1'>-</span>
                            <p className='mb-1'>(Replace with user)</p>
                        </div>
                        <p className='mb-1 recipe-card-line-clamp'>{recipe.recipe_instructions}</p>
                        <div className='d-flex justify-content-between column-gap-4 mt-3'>
                            <button type='button' className='btn secondary-btn border-0 pt-1 z-1'>
                                <FaRegBookmark className='fs-5' />
                            </button>
                            <div className='d-flex align-items-center gap-3'>
                                <div className='fw-bold'>
                                    <BiComment className='fs-5 me-2' />
                                    20
                                </div>
                                <button type='button' className='btn z-1 secondary-btn border-0 d-flex align-items-center gap-2'>
                                    <BiLike className='fs-5' />
                                    10
                                </button>
                            </div>
                        </div>
                        <NavLink to='/recipe' className='stretched-link z-0'></NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RecipeCard;