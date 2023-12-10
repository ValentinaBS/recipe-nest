import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Recipe } from '../../types/recipe';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import "./Home.css";

const Home: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get<Recipe[]>('http://localhost:3000/api/recipes/all');
        setRecipes(response.data.slice(0, 3));
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <>
      <Card>
        <Card.Img className='home-banner' src="https://i.imgur.com/kDI5nCr.jpg" alt="Imagen de tarjeta" />
        <Card.ImgOverlay className="d-flex flex-column gap-3 gap-md-5 justify-content-center align-items-start home-banner-overlay">
          <Card.Title className="home-title mb-3 text-center text-lg-start">
            Welcome to Green Plates!
          </Card.Title>
          <Card.Text className="mb-4 fs-2 text-center text-lg-start">
            Our platform is a vibrant community of like-minded individuals who share a passion for sustainable living and healthy eating.
          </Card.Text>
          <NavLink
            to="/login"
            className="btn btn-lg primary-btn mb-3 align-self-center"
          >
            Join Our Community!
          </NavLink>
        </Card.ImgOverlay>
      </Card>

      <Container fluid className="home-img text-center mt-5">
        <Row className="justify-content-center column-gap-5">
          <Col xs={12} sm={6} lg={3} className="mb-5">
            <Image src="https://i.imgur.com/qV4ANgc.png" rounded className="home-square-img shadow-sm" />
          </Col>
          <Col xs={12} sm={6} lg={3} className="mb-5">
            <Image src="https://i.imgur.com/xDygvQP.png" rounded className="home-square-img shadow-sm" />
          </Col>
          <Col xs={12} sm={6} lg={3} className="mb-5">
            <Image src="https://i.imgur.com/EwciW7d.png" rounded className="home-square-img shadow-sm" />
          </Col>
        </Row>
      </Container>

      <div className="mx-auto home-recipes">
        <h2 className='text-center mb-5'>
          Our Comunnity's Recipes!
        </h2>
        <div className='row mx-3 d-flex flex-wrap column-gap-5 row-gap-5 align-items-center justify-content-center'>
          {recipes.map((recipe, index) => (
            <RecipeCard
              key={index}
              recipe={recipe}
            />
          ))}
        </div>
      </div>

      <div className="my-5">
        <h2 className='text-center mb-4'>Our Articles</h2>
        <div className="home-articles-container mx-auto">
          <div className="article-container d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mx-auto mb-4 ">
            <Image src="https://i.imgur.com/AaNB7ma.png" rounded className="img-fluid1" />
            <div className='mx-5'>
              <h3 className="mb-2" >
                The Benefits of Flax Seeds
              </h3>
              <p className="mb-3"> What is flax seed used for and how to consume it? Discover all the properties of flax seeds.</p>
            </div>
          </div>

          <div className="article-container d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mx-auto mb-4">
            <Image src="https://i.imgur.com/qMrhtXS.png" rounded className="img-fluid1" />
            <div className='mx-5'>
              <h3 className="mb-2">
                Don’t Know How to Use That Leftover Avocado?
              </h3>
              <p className="mb-3"> Here you have 10 recipe ideas with avocado!We show you how versatile this food can be.</p>
            </div>
          </div>

          <div className="article-container d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mx-auto mb-4">
            <Image src="https://i.imgur.com/BU9U5Ka.png" rounded className="img-fluid1" />
            <div className='mx-5'>
              <h3 className="mb-2">
                Is Zucchini Complicated For You?
              </h3>
              <p className="mb-3">Learn how to cook with zucchini! Find out more about zucchini and add it to all your dishes.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
