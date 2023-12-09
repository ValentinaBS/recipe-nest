import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import axios from 'axios';
import { NavLink, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Comments from '../../components/Comments/Comments'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { BiLike, BiSolidUser, BiSolidTimeFive, BiRightArrowAlt, BiEdit } from 'react-icons/bi';
import { FaRegBookmark } from 'react-icons/fa6';
import './recipe.css'

const Recipe: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { currentUser } = useContext(AuthContext);
    const [isCurrentUser, setIsCurrentUser] = useState(true)
    const [recipeUser, setRecipeUser] = useState(currentUser);
    const [recipeData, setRecipeData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            
            setIsLoading(true)
            
            try {
                const recipeResponse = await axios.get(`http://localhost:3000/api/recipes/search/${id}`);
                const fetchedRecipeData = recipeResponse.data;

                const userId = fetchedRecipeData.user_id;

                const userResponse = await axios.get(`http://localhost:3000/api/user/${userId}`);
                const fetchedUserData = userResponse.data;

                setRecipeData(fetchedRecipeData);
                setRecipeUser(fetchedUserData);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            }
        };

        setIsCurrentUser(id === currentUser?.user_id);
        fetchData();
    }, [id]);

    return (
        <>
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <div className='d-flex flex-column align-items-center mx-auto my-5 recipe-container'>
                    <div className='position-relative d-flex justify-content-center'>
                        <img
                            className='rounded recipe-img'
                            src={recipeData.recipe_image}
                            alt={recipeData.recipe_title}
                        />
                        {isCurrentUser &&
                            <button
                                className='btn primary-btn d-flex align-items-center gap-2 position-absolute bottom-0 end-0 my-4 mx-5 mx-md-4'
                                style={{ zIndex: 1 }}
                            >
                                <BiEdit className='fs-5' />
                                Edit Recipe
                            </button>
                        }
                    </div>

                    <div className='my-4 py-4 card-background w-100'>
                        <h1 className='fs-2'>
                            {recipeData.recipe_title}
                        </h1>
                        <p className='mb-0'>
                            {recipeData.recipe_category_type} - {recipeData.recipe_category_occasion}
                        </p>
                        <div className='d-flex justify-content-between align-items-center mt-3'>
                            <NavLink className='d-flex align-items-center gap-2' to='/profile'>
                                <img className='rounded-circle p-1 recipe-profile-img shadow-sm' src={recipeUser?.user_image} alt={`Profile picture from ${recipeUser?.username}`} />
                                <p className='mb-0 fw-bold'>{recipeUser?.username}</p>
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
                            {recipeData.recipe_ingredients.map((ingredient: string, index: number) => (
                                <li key={index} className='mt-3'>
                                    {ingredient}
                                </li>
                            ))}
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
                                More Recipes By {recipeUser?.username}
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
            )}
        </>
    )
}

export default Recipe