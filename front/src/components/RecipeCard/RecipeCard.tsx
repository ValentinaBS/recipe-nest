import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa6';
import { BiLike, BiSolidLike, BiEdit, BiSolidLeaf, BiTrash } from 'react-icons/bi';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';
import UpdateRecipeModal from '../UpdateModal/UpdateRecipeModal';
import { RecipeCardProps } from '../../types/recipe';
import ToastMessage from '../ToastMessage/ToastMessage';

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
    const { currentUser, toastMessage, setToastMessage } = useContext(AuthContext);
    const [isCurrentUser, setIsCurrentUser] = useState(true)
    const [recipeUser, setRecipeUser] = useState(currentUser);
    const [isLoading, setIsLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const userId = recipe.user_id;

                const userResponse = await axios.get(`http://localhost:3000/api/user/${userId}`);
                const fetchedUserData = userResponse.data;

                setRecipeUser(fetchedUserData);
                setIsLoading(false);
                setIsCurrentUser(userId === currentUser?.user_id);
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            }

            try {
                const response = await axios.get(`http://localhost:3000/api/bookmark/${currentUser?.user_id}`);
                const bookmarkedRecipes = response.data;

                const isRecipeBookmarked = bookmarkedRecipes.some((bookmark: any) => bookmark.recipe_id === recipe.recipe_id);

                setIsBookmarked(isRecipeBookmarked);
            } catch (error) {
                console.error('Error fetching bookmarked recipes:', error);
            }
        };

        fetchData();
    }, [recipe]);

    const handleDeleteRecipe = async () => {
        try {
            await axios.patch(`http://localhost:3000/api/recipes/delete/${recipe.recipe_id}`);
            location.reload()
        } catch (error) {
            console.error('Error deleting recipe:', error);
        }
    };

    const handleBookmark = async () => {
        if (!isBookmarked) {
            setIsBookmarked(true);

            try {
                await axios.post(`http://localhost:3000/api/bookmark`, { user_id: currentUser?.user_id, recipe_id: recipe.recipe_id });

                setToastMessage('The recipe has been bookmarked!')
            } catch (error) {
                console.error('Error bookmarking recipe:', error);
            }
        }
    };

    return (
        <>
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <div className='col px-0 d-flex justify-content-center'>
                    {toastMessage && (
                        <ToastMessage message={toastMessage} toggleToast={() => setToastMessage('')} />
                    )}
                    <div className='card recipe-card'>
                        <img
                            src={recipe.recipe_image}
                            alt={recipe.recipe_title}
                            className='card-img-top recipe-card-img object-fit-cover w-100 h-lg-100 rounded-bottom-0'
                        />
                        <div className='card-body mt-2 d-flex flex-column justify-content-between'>
                            <h5 className='card-title card-title-height fw-bold line-clamp'>{recipe.recipe_title}</h5>
                            <div className='d-flex justify-content-between  pt-3 green-border'>
                                <p className='mb-1'>
                                    {new Date(recipe.recipe_published_time).toISOString().split('T')[0]}
                                </p>
                                <p className='mb-1'>Made by: {recipeUser?.username}</p>
                            </div>
                            <span className='my-2 fw-bold'>
                                <BiSolidLeaf className='fs-5 me-2 leaf-color' />
                                {recipe.recipe_category_type} - {recipe.recipe_category_occasion}
                            </span>
                            <p className='mb-1 recipe-card-line-clamp'>{recipe.recipe_instructions}</p>
                            <div className='d-flex align-items-center justify-content-between gap-3 mt-3'>
                                <button
                                    type='button'
                                    className='btn secondary-btn border-0 pt-1 z-1'
                                    onClick={handleBookmark}
                                >
                                    {isBookmarked ? <FaBookmark className='fs-5' /> : <FaRegBookmark className='fs-5' />}
                                </button>
                                <button 
                                    type='button' 
                                    className='btn z-1 secondary-btn border-0 d-flex align-items-center gap-2'
                                    onClick={() => setIsLiked(prevLikes => !prevLikes)}
                                >
                                    {isLiked ? <BiSolidLike className='fs-4' /> : <BiLike className='fs-4' />}
                                    {isLiked ? recipe.recipe_likes + 1 : recipe.recipe_likes}
                                </button>
                                {isCurrentUser &&
                                    <div className='d-flex align-items-center gap-3'>
                                        <button
                                            type='button'
                                            className='btn z-1 secondary-btn border-0 d-flex align-items-center gap-2'
                                            onClick={() => setShowUpdateModal(true)}
                                        >
                                            <BiEdit className='fs-4' />
                                        </button>
                                        <button
                                            type='button'
                                            className='btn z-1 secondary-btn border-0 d-flex align-items-center gap-2'
                                            onClick={() => setShowModal(true)}
                                        >
                                            <BiTrash className='fs-4' />
                                        </button>
                                        <ConfirmationModal
                                            message='Are you sure you want to delete this recipe?'
                                            show={showModal}
                                            handleClose={() => setShowModal(false)}
                                            handleSave={() => {
                                                setShowModal(false);
                                                handleDeleteRecipe();
                                            }}
                                        />
                                        <UpdateRecipeModal
                                            show={showUpdateModal}
                                            onHide={() => setShowUpdateModal(false)}
                                            title='Update Recipe'
                                            fields={recipe}
                                        />
                                    </div>
                                }
                            </div>
                            <NavLink to={`/recipe/${recipe.recipe_id}`} data-testid='recipeNavLink' className='stretched-link z-0'></NavLink>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default RecipeCard;