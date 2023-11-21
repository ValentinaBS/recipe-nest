import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import "./AboutUs.css";

const AboutUs: React.FC = () => {
  return (
    <Card className="aboutus-img">
      <Card.Img src="https://i.imgur.com/TWNlpMH.png" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Know More About Us </Card.Title>
      </Card.ImgOverlay>

      <Container className='aboutus-conteiner'>
        <div className='content'>
          <h1>About us</h1>
          <p>
            At Green Plates, we are dedicated to promoting a healthy and
            sustainable lifestyle through the magic of food. Our passion for plant-based
            cooking and respect for the environment combine to offer fresh and delicious recipes.
            Our mission is clear: inspire people to embrace plant-based eating as a path to personal
            well-being and global sustainability.
          </p>
        </div>
        <Card.Img src="https://i.imgur.com/y1mUbI6.png" alt="Rectangle 26" />
        <div className='content'>
          <h1>Our Green Recipes</h1>
          <p>
            We offer a wide range of recipes, from vegetarian and vegan dishes to gluten-free delights and fresh seasonal options. Our recipes are designed to satisfy all tastes and dietary needs. At Green Plates, we are dedicated to promoting a healthy and sustainable lifestyle through the magic of food. Our passion for plant-based cooking and respect for the environment combine to offer fresh and delicious recipes. Our mission is clear: inspire people to embrace plant-based eating as a path to personal well-being and global sustainability.
          </p>
        </div>

        <h1 className="about-boldtitle">Our Community of Food Lovers!</h1>
        <Row className="justify-content-center" style={{ marginTop: '3%' }}>
          <Col xs={6} md={4}>
            <Image src="https://i.imgur.com/6CIcNuv.png" alt="Image 1" className="img-fluid" />
          </Col>
          <Col xs={6} md={4}>
            <Image src="https://i.imgur.com/xJ0RQfO.png" alt="Image 2" className="img-fluid" />
          </Col>
        </Row>
        <div className='mb-4 py-4 w-100'>
    <h2 className='fs-3 mb-0'>
    Our Commitment
    </h2>

    <ol className='p-0 list-group recipe-list'>
        <li className='mt-4'>
        Culinary Excellence: We're passionate about crafting delectable plant-based recipes that leave you craving more. Our team of chefs and food enthusiasts work tirelessly to create dishes that redefine what's possible in vegetarian and vegan cuisine.
        </li>
        <li className='mt-4'>
        Sustainability: We're deeply committed to the environment. With every meal, we aim to reduce our ecological footprint, support sustainable agriculture, and inspire others to make Eco-conscious choices.
        </li>
        <li className='mt-4'>
            SCommunity: Food brings people together. We're here to foster a community where individuals can share, learn, and grow together. Whether you're a seasoned plant-based pro or just starting your journey, we're here to support you.
        </li>
        <li className='mt-4'>
        Education: We believe that knowledge empowers change. We provide resources, tips, and information to help you make informed food choices and live a healthier, more sustainable life.
        </li>
        
    </ol>
</div>
<Card.Title className='fs-3 mb-4'> Our Community of Food Lovers!</Card.Title>
<Row>
        <Col xs={6} md={4}>
          <Image src="https://i.imgur.com/dHk3emF.png" rounded className="img-fluid"/>
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://i.imgur.com/XQXXve7.png" rounded className="img-fluid"/>
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://i.imgur.com/54ozN2k.png" rounded className="img-fluid"/>
        </Col>
</Row>   
      </Container>
    </Card>
  );
};

export default AboutUs;


