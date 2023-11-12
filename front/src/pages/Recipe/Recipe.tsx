import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Card from 'react-bootstrap/Card';
import Comments from '../../components/Comments/Comments'
import { BiLike, BiSolidUser, BiSolidTimeFive, BiRightArrowAlt } from 'react-icons/bi';
import { FaRegBookmark } from 'react-icons/fa6';
import './recipe.css'

const Recipe: React.FC = () => {
    return (
        <>
            <Breadcrumb className='m-4 m-md-5 mb-md-4 border-bottom pb-2'>
                <Breadcrumb.Item href="#">
                    Home
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    Search
                </Breadcrumb.Item>
                <Breadcrumb.Item active>
                    Poke Salad
                </Breadcrumb.Item>
            </Breadcrumb>
            <div className='d-flex flex-column align-items-center mx-auto my-5 recipe-container'>
                <img className='rounded recipe-img' src="https://i.imgur.com/xIkRscC.jpg" alt="Recipe image" />

                <div className='my-4 py-4 card-background w-100'>
                    <h1 className='fs-2'>
                        Poke Salad
                    </h1>
                    <p className='mb-0'>
                        Vegan - Lunch
                    </p>
                    <div className='d-flex justify-content-between align-items-center mt-3'>
                        <a className='d-flex align-items-center gap-2' href='#'>
                            <img className='rounded-circle p-1 profile-img shadow-sm' src="https://i.imgur.com/3PnQ2EZ.png" alt="Profile picture" />
                            <p className='mb-0 fw-bold'>JamesCook</p>
                        </a>

                        <div className='d-flex align-items-center gap-4'>
                            <button className='btn d-flex p-0 border-0'>
                                <FaRegBookmark className='fs-4' />
                            </button>
                            <button className='btn d-flex gap-2 p-0 border-0'>
                                <BiLike className='fs-3' />
                                <span className='fw-bold fs-5'>43</span>
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
                            <span className='ms-2 me-4'>30 minutes</span>
                            <BiSolidUser className='fs-4' />
                            <span className='ms-2'>2 people</span>
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

                    <ol className='p-0 list-group recipe-list'>
                        <li className='mt-4'>
                            Prepare the Tuna: Begin by cutting the sushi-grade ahi tuna into bite-sized cubes. Make sure your knife is sharp to ensure clean cuts. Place the cubed tuna in a large mixing bowl.
                        </li>
                        <li className='mt-4'>
                            Prepare the Base: While the tuna is marinating, you can prepare your base. You can use sushi rice, brown rice, quinoa, or even mixed greens as a base. If you're using rice, be sure it's cooled to room temperature.
                        </li>
                        <li className='mt-4'>
                            Serve: Serve your Poke Salad immediately. If desired, you can also add a side of seaweed salad for an extra touch of authenticity.
                        </li>
                    </ol>
                </div>

                <div className='mb-4 py-4 card-background w-100'>
                    <div className='mb-4 d-flex flex-wrap gap-2 justify-content-between align-items-center'>
                        <h2 className='fs-3 mb-0'>
                            More Recipes By JamesCook
                        </h2>
                        <a href='#'>
                            <BiRightArrowAlt className='fs-2' />
                        </a>
                    </div>

                    <div className='d-flex flex-wrap justify-content-between'>
                        <Card className='border-0 more-recipes-card bg-transparent'>
                            <Card.Img className='rounded' variant="top" src="https://i.imgur.com/xIkRscC.jpg" />
                            <Card.Body className='p-0 pt-3'>
                                <Card.Title className='fw-bold recipe-line-clamp'>
                                    Poke Salad with Avocado and Lemon
                                </Card.Title>
                                <a href="#" className="stretched-link"></a>
                            </Card.Body>
                        </Card>
                        <Card className='border-0 more-recipes-card bg-transparent'>
                            <Card.Img className='rounded' variant="top" src="https://i.imgur.com/xIkRscC.jpg" />
                            <Card.Body className='p-0 pt-3'>
                                <Card.Title className='fw-bold recipe-line-clamp'>
                                    Poke Salad with Avocado and Lemon
                                </Card.Title>
                                <a href="#" className="stretched-link"></a>
                            </Card.Body>
                        </Card>
                        <Card className='border-0 more-recipes-card bg-transparent'>
                            <Card.Img className='rounded' variant="top" src="https://i.imgur.com/xIkRscC.jpg" />
                            <Card.Body className='p-0 pt-3'>
                                <Card.Title className='fw-bold recipe-line-clamp'>
                                    Poke Salad with Avocado and Lemon
                                </Card.Title>
                                <a href="#" className="stretched-link"></a>
                            </Card.Body>
                        </Card>
                    </div>
                </div>

                <Comments />
            </div>
        </>
    )
}

export default Recipe