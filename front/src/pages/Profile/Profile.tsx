import React, { useState } from 'react';
import useRecipeFilter from '../../hooks/UseRecipeFilter';
import './profile.css';
import { BiEdit, BiEnvelope, BiHeart, BiSolidHeart } from 'react-icons/bi';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa6';
import Filters from '../../components/Filters/Filters';
import RecipeCardContainer from '../../components/RecipeCard/RecipeCardContainer';

const Profile: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'bookmarked' | 'own'>('own');

    const handleTabChange = (tab: 'bookmarked' | 'own') => {
        setActiveTab(tab);
    };

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
                <img className='profile-img rounded-circle shadow-sm p-3' src="https://i.imgur.com/3PnQ2EZ.png" alt="Profile picture" />
                <div>
                    <div className='d-flex justify-content-between mb-4'>
                        <h1 className='mb-0'>JaneD123</h1>
                        <button className='btn d-flex align-items-center gap-2'>
                            <BiEdit className='fs-5' />
                            <span>Edit profile</span>
                        </button>
                    </div>
                    <div className='d-flex align-items-center gap-2 mb-4'>
                        <BiEnvelope className='fs-5' />
                        <span>Email: jane@gmail.com</span>
                    </div>
                    <p>
                        Hello there! I'm Jane, and I'm on a delicious journey through the world of plant-based cuisine. As a proud vegan, my passion for cruelty-free, earth-friendly, and mouthwatering food knows no bounds.
                    </p>
                    <div className='d-flex flex-column flex-md-row justify-content-between mt-4 gap-4'>
                        <button 
                            className={`btn py-2 w-100 ${activeTab === 'bookmarked' ? 'primary-btn' : 'secondary-btn'}`}
                            onClick={() => handleTabChange('bookmarked')}
                        >
                            {activeTab === 'bookmarked' ? <FaBookmark className='me-3' /> : <FaRegBookmark className='me-3' />}
                            Bookmarked Recipes
                        </button>
                        <button 
                            className={`btn py-2 w-100 ${activeTab === 'own' ? 'primary-btn' : 'secondary-btn'}`}
                            onClick={() => handleTabChange('own')}
                        >
                            {activeTab === 'own' ? <BiSolidHeart className='fs-5 me-3' /> : <BiHeart className='fs-5 me-3' />}
                            Your Recipes
                        </button>
                    </div>
                </div>
            </section>
            
            <section className="mb-5 mt-3 pt-4 pt-md-5 mx-2 mx-md-4 d-flex column-gap-3">
                <Filters                     searchInput={searchInput}
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
                    title={activeTab === 'bookmarked' ? 'Your Bookmarked Recipes' : 'Your Recipes'} 
                    recipesList={filteredRecipes}
                />
            </section>
        </>
    )
}

export default Profile