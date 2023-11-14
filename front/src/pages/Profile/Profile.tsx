import React from 'react';
import './profile.css';
import { BiEdit, BiEnvelope, BiHeart, BiSolidHeart } from 'react-icons/bi';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa6';
import Filters from '../../components/Filters/Filters';
import RecipeCardContainer from '../../components/RecipeCard/RecipeCardContainer';

const Profile: React.FC = () => {
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
                        <button className='btn secondary-btn py-2 w-100'>
                            <FaRegBookmark className='me-3' />
                            Bookmarked Recipes
                        </button>
                        <button className='btn primary-btn py-2 w-100'>
                            <BiSolidHeart className='fs-5 me-3' />
                            Your Recipes
                        </button>
                    </div>
                </div>
            </section>
            
            <section className="mb-5 mt-3 pt-4 pt-md-5 mx-2 mx-md-4 d-flex column-gap-3">
                <Filters display=' d-none d-lg-block' />
                <RecipeCardContainer title='Your Bookmarked Recipes' />
            </section>
        </>
    )
}

export default Profile