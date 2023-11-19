import React, { useState } from 'react';
import { Row, Col, Button, Form, Offcanvas } from 'react-bootstrap';
import { BiSolidFilterAlt } from 'react-icons/bi';
import Filters from '../Filters/Filters';
import RecipeCard from './RecipeCard';
import './recipeCard.css';

type Recipe = {
    recipe_id: number;
    recipe_image: string;
    recipe_title: string;
    recipe_published_time: string;
    recipe_instructions: string;
    recipe_category_type: string;
    recipe_category_occasion: string;
};

type RecipeCardContainerProps = {
    title: string;
    recipesList: Recipe[];
};

const RecipeCardContainer: React.FC<RecipeCardContainerProps> = (props) => {
    const [show, setShow] = useState(false);

    const {
        title,
        recipesList
    } = props;

    return (
        <>
            <section className="recipes-section">
                <Row className="mb-4 mx-3 mx-md-3">
                    <Col className='px-0' md={9}>
                        <h2 className="fw-bold text-center text-md-start">
                            {title}
                        </h2>
                    </Col>
                    <Col className='px-0' md={3}>
                        <div className="d-flex align-items-center column-gap-2 my-2 my-md-0 mx-2 mx-md-0">
                            <Form.Select
                                onChange={(e) => console.log(e.target.value)}
                                className="rounded p-1"
                                aria-label="Sort filters"
                            >
                                <option disabled value="">- Sort by -</option>
                                <option value="A-Z">A-Z</option>
                                <option value="Z-A">Z-A</option>
                                <option value="most-liked">Most Liked</option>
                                <option value="most-commented">Most Commented</option>
                            </Form.Select>
                            <Button
                                onClick={() => setShow(true)}
                                className="btn primary-btn d-lg-none"
                            >
                                <BiSolidFilterAlt />
                            </Button>
                        </div>
                    </Col>
                </Row>

                <div className="row mx-3 d-flex flex-wrap column-gap-5 row-gap-5 align-items-center justify-content-center">
                    {recipesList.map((recipe) => (
                        <RecipeCard key={recipe.recipe_id} recipe={recipe} />
                    ))}
                </div>

            </section>
        </>
    );
};

export default RecipeCardContainer;