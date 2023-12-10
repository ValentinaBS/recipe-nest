import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { NavLink } from 'react-router-dom';
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div>
      <Card className="home-img-tarj xs={12} sm={6} md={4} lg={3}">
        <Card.Img src="https://i.imgur.com/kDI5nCr.jpg" alt="Imagen de tarjeta" />
        <Card.ImgOverlay>
          <div className="d-flex flex-column align-items-start mx-4  text-sm-center text-md-start">
            <Card.Title className="home-title mb-3">Welcome to</Card.Title>
            <Card.Title className="home-title mb-3">Green Plantes</Card.Title>
            <Card.Text className="home-text mb-3 pb-2">
              Our platform is a vibrant community of like-minded individuals who share a passion for sustainable living and healthy eating.
            </Card.Text>
            <NavLink to="/recipes" className="home-bottom btn primary-btn d-block move-right mb-3">
              Explore All Recipes!</NavLink>
          </div>
        </Card.ImgOverlay>
      </Card>
      <Container fluid className="home-img text-center mt-4">
      <Row className="justify-content-center">
        <Col xs={12} sm={6} md={4} lg={3}className="mb-4">
          <Image src="https://i.imgur.com/dHk3emF.png" rounded className="img-fluid" />
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
          <Image src="https://i.imgur.com/XQXXve7.png" rounded className="img-fluid" />
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
          <Image src="https://i.imgur.com/54ozN2k.png" rounded className="img-fluid mt-md-0 mt-4" />
        </Col>
      </Row>
    </Container>



      <div className="text-center mt-4">
        <Card.Title className="about-boldtitle">Las recetas</Card.Title>
      </div>

      <div className="text-center mt-4">
        <h3 className="about-boldtitle">Our Articles</h3>
        <div className="home-articles-container mx-auto">
  <div className="article-container d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mx-auto mb-4 ">
    <Image src="https://i.imgur.com/AaNB7ma.png" rounded className="img-fluid1" />
      <div className="text-center text-md-left">
        <h3 className="mb-2 display-6 text-center text-md-start" >
          The Benefits of Flax Seeds.
        </h3>
        <p className="mb-3 fs-6"> What is flax seed used for and how to consume it? Discover all the properties of flax seeds.</p>
        </div>
  </div>

  <div className="article-container d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mx-auto mb-4">
    <Image src="https://i.imgur.com/qMrhtXS.png" rounded className="img-fluid1" />
    <div className="text-center text-md-left">
      <h3 className="mb-2 display-6 text-center text-md-start">
        Don’t Know How to Use That Leftover Avocado?
      </h3>
      <p className="mb-3 fs-6"> Here you have 10 recipe ideas with avocado!We show you how versatile this food can be.</p>
      </div>
  </div>

  <div className="article-container d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mx-auto mb-4">
    <Image src="https://i.imgur.com/BU9U5Ka.png" rounded className="img-fluid1" />
    <div className="text-center text-md-left">
      <h3 className="mb-2 display-6 text-center text-md-start">
        Is Zucchini Complicated For You? 
      </h3>
      <p className="mb-3 fs-6">Learn how to cook with zucchini! Find out more about zucchini and add it to all your dishes.</p>
      </div>
  </div>
</div>
</div>
</div>
  );
};
export default Home;
