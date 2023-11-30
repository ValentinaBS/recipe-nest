import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './NotFound.css';

const NotFound: React.FC = () => {
  return (
    <Container className='text-center mx-auto' style={{ padding: '10% 0' }}>
      <Row className='align-items-center mb-3 mx-0'>
        <Col xs={12} lg={6} className='my-4 my-lg-0'>
          <Image className='notfound-img' src='/Green (1) 4 (1).png' rounded />
        </Col>
        <Col xs={12} lg={6}>
          <Card.Body>
            <Card.Title className='notfound-title'> Oh no! </Card.Title>
            <Card.Text className='my-3 px-3'>
              <p className='mb-0'>We can't find the page you're looking for, but don't worry!</p>
              <p>You can still go to our recipe catalog and browse them all!</p>
            </Card.Text>
            <NavLink to='/search' className='btn primary-btn mt-3 py-2 px-4'>
              Go to recipes <FaArrowRight className='ms-2' />
            </NavLink>
          </Card.Body>
        </Col>
      </Row>
    </Container>
  );
};
export default NotFound;




