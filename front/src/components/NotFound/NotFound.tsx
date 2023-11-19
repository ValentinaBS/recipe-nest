import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { FaArrowRight } from 'react-icons/fa';
import "./NotFound.css";

const NotFound: React.FC = () => {
  return (
    <Container className="text-center" style={{ padding: '10% 6% 10% 6%' }}>
      <Row className="alin-items-center mb-3">
        <Col xs={12} md={6} className="mb-2">
          <Image className="imagen" src="public/Green (1) 4 (1).png" rounded />
        </Col>
        <Col xs={12} md={6}>
          <Card.Body>
            <Card.Title className="text-font"> oh no! </Card.Title>
            <Card.Text>
              <p>We can't find the page you're looking for, but don't worry!</p>
              <p>You can still go to our recipe catalog and browse them all!</p>
            </Card.Text>
            <Button variant="secondary">Go to recipes <FaArrowRight /></Button>
          </Card.Body>
        </Col>
      </Row>
    </Container>
  );
};
export default NotFound;
