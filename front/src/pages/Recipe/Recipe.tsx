import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Comments from '../../components/Comments/Comments'
import { BiLike, BiSolidUser, BiSolidTimeFive, BiRightArrowAlt } from 'react-icons/bi';
import { FaRegBookmark } from 'react-icons/fa6';
import './recipe.css'

const Recipe: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [recipeData, setRecipeData] = useState<any>(null);

    useEffect(() => {
        const getRecipeData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/recipes/${id}`);
                setRecipeData(response.data);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching recipe:', error);
            }
        };

        getRecipeData();
    }, [id]);

    return (
        <div className='d-flex flex-column align-items-center mx-auto my-5 recipe-container'>
            <img className='rounded recipe-img' src={recipeData.recipe_image} alt={recipeData.recipe_title} />

            <div className='my-4 py-4 card-background w-100'>
                <h1 className='fs-2'>
                    {recipeData.recipe_title}
                </h1>
                <p className='mb-0'>
                    {recipeData.recipe_category_type} - {recipeData.recipe_category_occasion}
                </p>
                <div className='d-flex justify-content-between align-items-center mt-3'>
                    <NavLink className='d-flex align-items-center gap-2' to='/profile'>
                        <img className='rounded-circle p-1 recipe-profile-img shadow-sm' src="https://i.imgur.com/3PnQ2EZ.png" alt="Profile picture" />
                        <p className='mb-0 fw-bold'>JamesCook</p>
                    </NavLink>

                    <div className='d-flex align-items-center gap-4'>
                        <button className='btn d-flex p-0 border-0'>
                            <FaRegBookmark className='fs-4' />
                        </button>
                        <button className='btn d-flex gap-2 p-0 border-0'>
                            <BiLike className='fs-3' />
                            <span className='fw-bold fs-5'>{recipeData.recipe_likes}</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className='mb-4 py-4 card-background w-100'>
                <div className='d-flex flex-wrap gap-2 justify-content-between align-items-center'>
                    <h2 className='fs-3 '>
                        Ingredients
                    </h2>
                    <div className='d-flex align-items-center'>
                        <BiSolidTimeFive className='fs-4' />
                        <span className='ms-2 me-4'>
                            {recipeData.recipe_cooktime}
                        </span>
                        <BiSolidUser className='fs-4' />
                        <span className='ms-2'>
                            {recipeData.recipe_portions} people
                        </span>
                    </div>
                </div>
                <ul className='p-0 recipe-list list-group'>
                    <li className='mt-3'>
                        1 3/4 cups cooked brown rice
                    </li>
                    <li className='mt-3'>
                        1 3/4 cups cooked brown rice
                    </li>
                    <li className='mt-3'>
                        1 3/4 cups cooked brown rice
                    </li>
                    <li className='mt-3'>
                        1 3/4 cups cooked brown rice
                    </li>
                </ul>
            </div>

            <div className='mb-4 py-4 card-background w-100'>
                <h2 className='fs-3 mb-0'>
                    Instructions
                </h2>

                <p className='my-3'>
                    {recipeData.recipe_instructions}
                </p>
            </div>

            <div className='mb-4 py-4 card-background w-100'>
                <div className='mb-4 d-flex gap-2 justify-content-between align-items-center'>
                    <h2 className='fs-3 mb-0'>
                        More Recipes By JamesCook
                    </h2>
                    <NavLink to='/profile'>
                        <BiRightArrowAlt className='fs-2' />
                    </NavLink>
                </div>

                <div className='d-flex flex-wrap justify-content-md-between justify-content-center'>
                    <Card className='border-0 more-recipes-card bg-transparent'>
                        <Card.Img className='rounded' variant="top" src="https://i.imgur.com/xIkRscC.jpg" />
                        <Card.Body className='p-0 pt-3'>
                            <Card.Title className='fw-bold line-clamp'>
                                Poke Salad with Avocado and Lemon
                            </Card.Title>
                            <a href="#" className="stretched-link"></a>
                        </Card.Body>
                    </Card>
                    <Card className='border-0 more-recipes-card bg-transparent'>
                        <Card.Img className='rounded' variant="top" src="https://i.imgur.com/xIkRscC.jpg" />
                        <Card.Body className='p-0 pt-3'>
                            <Card.Title className='fw-bold line-clamp'>
                                Poke Salad with Avocado and Lemon
                            </Card.Title>
                            <a href="#" className="stretched-link"></a>
                        </Card.Body>
                    </Card>
                    <Card className='border-0 more-recipes-card bg-transparent'>
                        <Card.Img className='rounded' variant="top" src="https://i.imgur.com/xIkRscC.jpg" />
                        <Card.Body className='p-0 pt-3'>
                            <Card.Title className='fw-bold line-clamp'>
                                Poke Salad with Avocado and Lemon
                            </Card.Title>
                            <a href="#" className="stretched-link"></a>
                        </Card.Body>
                    </Card>
                </div>
            </div>

            <Comments />
        </div>

    )
}

export default Recipe