import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import "./Home.css"

function ImgOverlayExample() {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src=" https://i.imgur.com/kDI5nCr.jpg" alt="Card image" />
      <Card.ImgOverlay className="d-flex flex-column align-items-start mx-4 my-4 ">
        <Card.Title className="home-title mx-4">Welcome to</Card.Title>
        <Card.Title className="home-title mx-4">Green plates!</Card.Title>
        <Card.Text className='home-text'>
        Our platform is a vibrant community of like-minded individuals who share a passion for sustainable living and healthy eating.
        </Card.Text>
        <NavLink to="/recipes" className="home-bottom btn btn-secondary" >
          Explore All Recipes!
        </NavLink>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ImgOverlayExample;




/*<Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="https://i.imgur.com/qV4ANgc.png" rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://i.imgur.com/xDygvQP.png" rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://i.imgur.com/EwciW7d.png" rounded />
        </Col>
      </Row>
      </Container>
    </Card/* */