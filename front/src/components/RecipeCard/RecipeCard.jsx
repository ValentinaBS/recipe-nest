import { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Offcanvas } from 'react-bootstrap';
import { BiSolidFilterAlt, BiLike, BiSolidLike, BiComment } from 'react-icons/bi';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa6';
import Filters from '../Filters/Filters';
import './recipeCard.css';

const RecipeCard = (props) => {
    const [show, setShow] = useState(false);

    const {
        title,
        sortBy,
        filteredRecipes,
        bookmarkRecipe,
    } = props;

    const recipe = {
        recipe_id: 1,
        recipe_image: 'https://i.imgur.com/xIkRscC.jpg',
        recipe_title: 'Tomato Salad With Stuff Inside',
        recipe_published_time: '10/12/2023',
        recipe_instructions: '¡Pasta para todos! Ñoquis sin gluten y veganos al pesto, una receta perfecta para los paladares más exigentes',
    };

    return (
        <>
            <section className="recipes-section animate__animated animate__slideInUp">
                {/* Remember to make the whole card a link             <Card.Link
                    href={'../pages/recipe.html?id=' + recipe.id}
                    className="w-25 btn primary-btn d-flex align-items-center justify-content-center column-gap-2 py-2"
                >
                    Details
                </Card.Link> */}
                <Container className='px-0'>
                    <Row className="mb-4 mx-3 mx-md-0">
                        <Col className='px-0' md={9}>
                            <h2 className="fw-bold text-center text-lg-start">
                                Search your ideal recipe!
                            </h2>
                        </Col>
                        <Col className='px-0' md={3}>
                            <div className="d-flex align-items-center column-gap-2 my-2 my-md-0">
                                <Form.Select
                                    value={sortBy}
                                    onChange={(e) => console.log(e.target.value)}
                                    className="rounded p-1"
                                    aria-label="Sort filters"
                                >
                                    <option disabled selected value="">- Sort by -</option>
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

                    <Row className="d-flex flex-wrap column-gap-5 row-gap-5 align-items-center justify-content-center">

                        <Col className='px-0' key={recipe.recipe_id}>
                            <Card className="recipe-card">
                                <Card.Img
                                    src={recipe.recipe_image}
                                    alt={recipe.recipe_title}
                                    className="recipe-img object-fit-cover w-100 h-lg-100"
                                />
                                <Card.Body className="mt-2 d-flex flex-column justify-content-between">
                                    <Card.Title className="fw-bold border-bottom pb-2">{recipe.recipe_title}</Card.Title>
                                    <div className="d-flex mt-3 mb-2">
                                        <Card.Text className="mb-1">{recipe.recipe_published_time}</Card.Text>
                                        <span className='mx-1'>-</span>
                                        <Card.Text className="mb-1">(Replace with user)</Card.Text>
                                    </div>
                                    <Card.Text className="mb-1">{recipe.recipe_instructions}</Card.Text>
                                    <div className="d-flex justify-content-between column-gap-4 mt-4">
                                        <Button
                                            onClick={() => bookmarkRecipe(recipe.id)}
                                            type="submit"
                                            className="secondary-btn"
                                        >
                                            <FaRegBookmark />
                                        </Button>
                                        <div className='d-flex align-items-center gap-3'>
                                            <div>
                                                <BiComment className='fs-5 me-2' />
                                                20
                                            </div>
                                            <Button
                                                type="submit"
                                                className="secondary-btn d-flex align-items-center gap-2"
                                            >
                                                <BiLike className='fs-5' />
                                                10
                                            </Button>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='px-0' key={recipe.recipe_id}>
                            <Card className="recipe-card">
                                <Card.Img
                                    src={recipe.recipe_image}
                                    alt={recipe.recipe_title}
                                    className="recipe-img object-fit-cover w-100 h-lg-100"
                                />
                                <Card.Body className="mt-2 d-flex flex-column justify-content-between">
                                    <Card.Title className="fw-bold border-bottom pb-2">{recipe.recipe_title}</Card.Title>
                                    <div className="d-flex mt-3 mb-2">
                                        <Card.Text className="mb-1">{recipe.recipe_published_time}</Card.Text>
                                        <span className='mx-1'>-</span>
                                        <Card.Text className="mb-1">(Replace with user)</Card.Text>
                                    </div>
                                    <Card.Text className="mb-1">{recipe.recipe_instructions}</Card.Text>
                                    <div className="d-flex justify-content-between column-gap-4 mt-4">
                                        <Button
                                            onClick={() => bookmarkRecipe(recipe.id)}
                                            type="submit"
                                            className="secondary-btn"
                                        >
                                            <FaRegBookmark />
                                        </Button>
                                        <div className='d-flex align-items-center gap-3'>
                                            <div>
                                                <BiComment className='fs-5 me-2' />
                                                20
                                            </div>
                                            <Button
                                                type="submit"
                                                className="secondary-btn d-flex align-items-center gap-2"
                                            >
                                                <BiLike className='fs-5' />
                                                10
                                            </Button>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='px-0' key={recipe.recipe_id}>
                            <Card className="recipe-card">
                                <Card.Img
                                    src={recipe.recipe_image}
                                    alt={recipe.recipe_title}
                                    className="recipe-img object-fit-cover w-100 h-lg-100"
                                />
                                <Card.Body className="mt-2 d-flex flex-column justify-content-between">
                                    <Card.Title className="fw-bold border-bottom pb-2">{recipe.recipe_title}</Card.Title>
                                    <div className="d-flex mt-3 mb-2">
                                        <Card.Text className="mb-1">{recipe.recipe_published_time}</Card.Text>
                                        <span className='mx-1'>-</span>
                                        <Card.Text className="mb-1">(Replace with user)</Card.Text>
                                    </div>
                                    <Card.Text className="mb-1">{recipe.recipe_instructions}</Card.Text>
                                    <div className="d-flex justify-content-between column-gap-4 mt-4">
                                        <Button
                                            onClick={() => bookmarkRecipe(recipe.id)}
                                            type="submit"
                                            className="secondary-btn"
                                        >
                                            <FaRegBookmark />
                                        </Button>
                                        <div className='d-flex align-items-center gap-3'>
                                            <div>
                                                <BiComment className='fs-5 me-2' />
                                                20
                                            </div>
                                            <Button
                                                type="submit"
                                                className="secondary-btn d-flex align-items-center gap-2"
                                            >
                                                <BiLike className='fs-5' />
                                                10
                                            </Button>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* (
                            <p className="mx-auto mt-5 fs-2">
                                No recipes match your search...
                            </p>
                        )} */}
                    </Row>
                </Container>
            </section>

            <Offcanvas className='h-75' placement='bottom' show={show} onHide={() => setShow(false)}>
                <Offcanvas.Header className='my-2' closeButton>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Filters />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default RecipeCard