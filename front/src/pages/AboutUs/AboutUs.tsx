import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import TeamSection from '../../components/TeamSection/TeamSection';
import "./AboutUs.css";

const AboutUs: React.FC = () => {
  return (
    <Card className="aboutus-img">
      <Card.Img src="https://i.imgur.com/TWNlpMH.png" alt="Imagen de tarjeta " />
      <Card.ImgOverlay>
        <div className="d-flex justify-content-between align-items-center w-100">
          <Card.Title className="aboutus-title">Know More</Card.Title >
          <Card.Title className="aboutus-title">About Us</Card.Title>
        </div>
      </Card.ImgOverlay>

      <Container className='aboutus-conteiner'>
        <div className='content mt-3'>
          <h2>We are <span className='green-text'>Green Plates</span></h2>
          <p className='my-4'>
            At Green Plates, we are dedicated to promoting a healthy and
            sustainable lifestyle through the magic of food. Our passion for plant-based
            cooking and respect for the environment combine to offer fresh and delicious recipes.
            Our mission is clear: inspire people to embrace plant-based eating as a path to personal
            well-being and global sustainability.
          </p>
        </div>
        <Card.Img src="https://i.imgur.com/y1mUbI6.png" alt="Rectangle 26" />
        <div className='content mt-5'>
          <h2>Our <span className='green-text'>Green Recipes</span></h2>
          <p className='my-4'>
            We offer a wide range of recipes, from vegetarian and vegan dishes to gluten-free delights and fresh seasonal options. Our recipes are designed to satisfy all tastes and dietary needs. At Green Plates, we are dedicated to promoting a healthy and sustainable lifestyle through the magic of food. Our passion for plant-based cooking and respect for the environment combine to offer fresh and delicious recipes. Our mission is clear: inspire people to embrace plant-based eating as a path to personal well-being and global sustainability.
          </p>
        </div>

        <h3 className="about-boldtitle text-center">Our Community of Food Lovers!</h3>
        <Row className="justify-content-center" style={{ marginTop: '3%' }}>
          <Col xs={6} md={4}>
            <Image src="https://i.imgur.com/6CIcNuv.png" alt="Image 1" className="img-fluid rounded" />
          </Col>
          <Col xs={6} md={4}>
            <Image src="https://i.imgur.com/xJ0RQfO.png" alt="Image 2" className="img-fluid rounded" />
          </Col>
        </Row>

        <div className='mb-4 py-4 w-100'>
          <h2 className='fs-3 mb-0 mt-5'>
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
              Community: Food brings people together. We're here to foster a community where individuals can share, learn, and grow together. Whether you're a seasoned plant-based pro or just starting your journey, we're here to support you.
            </li>
            <li className='mt-4'>
              Education: We believe that knowledge empowers change. We provide resources, tips, and information to help you make informed food choices and live a healthier, more sustainable life.
            </li>

          </ol>
        </div>

        <Card.Title className="about-boldtitle text-center"> Stay Green. Eat Well. Live Vibrantly.</Card.Title>
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
      </Container>
       <TeamSection />
    </Card>
  );
};

export default AboutUs;


