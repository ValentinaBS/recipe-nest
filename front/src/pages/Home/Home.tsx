import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { NavLink } from 'react-router-dom';
import "./Home.css"

const Home: React.FC = () => {
  return (
    <Card className="home-img-tarj">
      <Card.Img src=" https://i.imgur.com/kDI5nCr.jpg" alt="Imagen de tarjeta " />
      <Card.ImgOverlay>
        <div className="d-flex flex-column align-items-start mx-4 my-4 ">
          <Card.Title className="home-title mx-4">Welcome to</Card.Title >
          <Card.Title className="home-title mx-4">Green Plantes</Card.Title>
          <Card.Text className='home-text'>
            Our platform is a vibrant community of like-minded individuals who share a passion for sustainable living and healthy eating.
          </Card.Text>
          <NavLink to="/recipes" className="home-bottom btn btn-secondary " >
            Explore All Recipes!
          </NavLink>
          
        </div>
      </Card.ImgOverlay>
      <Container className='aboutus-conteiner'>
        <Row>
          <Col xs={6} md={4}>
            <Image src="https://i.imgur.com/dHk3emF.png" rounded className="img-fluid" />
          </Col>
          <Col xs={6} md={4}>
            <Image src="https://i.imgur.com/XQXXve7.png" rounded className="img-fluid" />
          </Col>
          <Col xs={6} md={4}>
            <Image src="https://i.imgur.com/54ozN2k.png" rounded className="img-fluid mt-md-0 mt-4" />
          </Col>
        </Row>
<Card.Title className="about-boldtitle text-center"> las recetas populares van aca</Card.Title>
<h3 className="about-boldtitle text-center">Our Articles</h3>
<div className="home-articles">
<Row >
    <Col xs={6} md={3}>
      <Image src="https://i.imgur.com/AaNB7ma.png" rounded className="img-fluid " />
      <p  className="home-parrafo">The Benefits of Flax Seeds.What is flax seed used for and how to consume it?Discover all the properties of flax seeds.</p>
    </Col>
  </Row>
  <Row>
    <Col xs={6} md={3}>
      <Image src="https://i.imgur.com/qMrhtXS.png" rounded className="img-fluid " />
      <p>Don’t Know How to Use That Leftover Avocado? Here you have 10 recipe ideas with avocado!We show you how versatile this food can be.</p>
    </Col>
  </Row>
  <Row>
    <Col xs={6} md={3}>
      <Image src="https://i.imgur.com/BU9U5Ka.png" rounded className="img-fluid " />
      <p>Is Zucchini Complicated For You? Learn how to cook with zucchini!Find out more about zucchini and add it to all your dishes.</p>
    </Col>
  </Row>
      </div>
        
      </Container>
    </Card>
  );
};

export default Home;