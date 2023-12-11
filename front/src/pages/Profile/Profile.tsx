import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/authContext';
import { useParams } from 'react-router-dom';
import useRecipeFilter from '../../hooks/UseRecipeFilter';
import './profile.css';
import { BiEdit, BiEnvelope, BiHeart, BiSolidHeart } from 'react-icons/bi';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa6';
import { Recipe } from '../../types/recipe';
import Filters from '../../components/Filters/Filters';
import RecipeCardContainer from '../../components/RecipeCard/RecipeCardContainer';
import UpdateModal from '../../components/UpdateModal/UpdateUserModal';

const Profile: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { currentUser, updateCurrentUser } = useContext(AuthContext);
    const [profileUser, setProfileUser] = useState(currentUser);
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [isCurrentUser, setIsCurrentUser] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [activeTab, setActiveTab] = useState<'bookmarked' | 'own'>('own');

    useEffect(() => {

        const getUserById = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/user/${id}`);
                setProfileUser(response.data);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        const getBookmarkedRecipes = async () => {
            try {

                const response = await axios.get<Recipe[]>(`http://localhost:3000/api/bookmark/${currentUser?.user_id}`);
                console.log(response)
                const bookmarkedRecipes = response.data.filter(recipe => recipe.recipe_active == 1);

                console.log(bookmarkedRecipes)

                if (activeTab === 'bookmarked') {
                    setRecipes(bookmarkedRecipes);
                }
            } catch (error) {
                console.error('Error fetching bookmarked recipes:', error);
            }
        };
    
        const getOwnRecipes = async () => {
            try {
                const recipesResponse = await axios.get<Recipe[]>(`http://localhost:3000/api/recipes/user/${id}`);
                const userRecipes = recipesResponse.data.filter(recipe => recipe.recipe_active == 1);

                if (activeTab === 'own') {
                    setRecipes(userRecipes);
                }
            } catch (error) {
                console.error('Error fetching own recipes:', error);
            }
        };
    
        setIsCurrentUser(id == currentUser?.user_id);
        getUserById();

        if (activeTab === 'bookmarked') {
            getBookmarkedRecipes();
        } else if (activeTab === 'own') {
            getOwnRecipes();
        }
    }, [id, activeTab]);

    const handleSaveChanges = async (updatedData: any) => {
        try {
            const response = await axios.patch(`http://localhost:3000/api/user/${id}`, updatedData);

            updateCurrentUser(response.data)
            location.reload()
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    };


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
            <section className='profile-container d-flex flex-column flex-md-row gap-5 align-items-center mx-4 mx-md-auto my-5'>
                <img className='profile-img rounded-circle shadow-sm p-3' src={profileUser?.user_image} alt={`Profile picture from ${profileUser?.username}`} />
                <div>
                    <div className='d-flex justify-content-between mb-4'>
                        <h1 className='mb-0'>{profileUser?.username}</h1>
                        {isCurrentUser &&
                            <button
                                className='btn d-flex align-items-center gap-2'
                                onClick={() => setShowModal(true)}
                            >
                                <BiEdit className='fs-5' />
                                <span>Edit profile</span>
                            </button>
                        }
                        <UpdateModal
                            show={showModal}
                            onHide={() => setShowModal(false)}
                            onSave={handleSaveChanges}
                            title='Edit Your Profile'
                            fields={profileUser}
                        />
                    </div>
                    {isCurrentUser &&
                        <div className='d-flex align-items-center gap-2 mb-4'>
                            <BiEnvelope className='fs-5' />
                            <span>Email: {profileUser?.email}</span>
                        </div>
                    }
                    <p>
                        {profileUser?.user_description}
                    </p>
                    {isCurrentUser &&
                        <div className='d-flex flex-column flex-md-row justify-content-between mt-4 gap-4'>
                            <button
                                className={`btn py-2 w-100 ${activeTab === 'bookmarked' ? 'secondary-btn' : 'primary-btn'}`}
                                onClick={() => setActiveTab('bookmarked')}
                            >
                                {activeTab === 'bookmarked' ? <FaBookmark className='me-3' /> : <FaRegBookmark className='me-3' />}
                                Bookmarked Recipes
                            </button>
                            <button
                                className={`btn py-2 w-100 ${activeTab === 'own' ? 'secondary-btn' : 'primary-btn'}`}
                                onClick={() => setActiveTab('own')}
                            >
                                {activeTab === 'own' ? <BiSolidHeart className='fs-5 me-3' /> : <BiHeart className='fs-5 me-3' />}
                                Your Recipes
                            </button>
                        </div>
                    }
                </div>
            </section>

            <section className="mb-5 mt-3 pt-4 pt-md-5 mx-2 mx-md-4 d-flex column-gap-3">
                <Filters searchInput={searchInput}
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
                    title={isCurrentUser ?
                        (activeTab === 'bookmarked' ? 'Your Bookmarked Recipes' : 'Your Recipes')
                        : `${profileUser?.username}'s Recipes`
                    }
                    recipesList={filteredRecipes}
                />
            </section>
        </>
    )
}

export default Profile