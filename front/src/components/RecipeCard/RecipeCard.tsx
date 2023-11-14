import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { BiSolidFilterAlt, BiLike, BiSolidLike, BiComment } from 'react-icons/bi';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

interface RecipeCardProps {
    filteredRecipes: any[]; // Adjust the type as needed
    //bookmarkRecipe: (recipeId: number) => void;
}

const RecipeCard: React.FC<RecipeCardProps> = (props) => {

    const {
        filteredRecipes,
        //bookmarkRecipe,
    } = props;

    return (
        <>
            {filteredRecipes.map((recipe) => (
                <Col className='px-0 d-flex justify-content-center' key={recipe.recipe_id}>
                    <Card className="recipe-card">
                        <Card.Img
                            src={recipe.recipe_image}
                            alt={recipe.recipe_title}
                            className="recipe-card-img object-fit-cover w-100 h-lg-100 rounded-bottom-0"
                        />
                        <Card.Body className="mt-2 d-flex flex-column justify-content-between">
                            <Card.Title className="fw-bold line-clamp">{recipe.recipe_title}</Card.Title>
                            <div className="d-flex pt-3 green-border">
                                <Card.Text className="mb-1">{recipe.recipe_published_time}</Card.Text>
                                <span className='mx-1'>-</span>
                                <Card.Text className="mb-1">(Replace with user)</Card.Text>
                            </div>
                            <Card.Text className="mb-1 recipe-card-line-clamp">{recipe.recipe_instructions}</Card.Text>
                            <div className="d-flex justify-content-between column-gap-4 mt-3">
                                <Button
                                    /* onClick={() => bookmarkRecipe(recipe.recipe_id)} */
                                    type="submit"
                                    className="secondary-btn border-0 pt-1 z-1"
                                >
                                    <FaRegBookmark className='fs-5' />
                                </Button>
                                <div className='d-flex align-items-center gap-3'>
                                    <div className='fw-bold'>
                                        <BiComment className='fs-5 me-2' />
                                        20
                                    </div>
                                    <Button
                                        type="submit"
                                        className="z-1 secondary-btn border-0 d-flex align-items-center gap-2"
                                    >
                                        <BiLike className='fs-5' />
                                        10
                                    </Button>
                                </div>
                            </div>
                            <NavLink to='/recipe' className="stretched-link z-0"></NavLink>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </>
    );
};

export default RecipeCard;