import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { FaLeaf } from 'react-icons/fa';
import { BiLogoInstagramAlt, BiLogoFacebookCircle, BiLogoTiktok } from 'react-icons/bi';

const Footer: React.FC = () => {
    return (
        <footer className='footer text-center text-lg-start text-white py-4'>
            <Container className='px-4 pb-0'>
                <section>
                    <Row>
                        <div className='col-lg-3 col-xl-3 mx-auto my-3 mb-4'>
                            <div className='d-flex align-items-center column-gap-2 mb-3 justify-content-center justify-content-lg-start'>
                                <FaLeaf className='fs-4' />
                                <h3 className='fw-bold mb-0'>
                                    Green Plates
                                </h3>
                            </div>
                            <p>
                                Our mission is to connect like-minded individuals who are dedicated to a plant-based lifestyle and inspire them to create delicious, cruelty-free meals.
                            </p>
                            <Nav className='d-flex column-gap-2 mt-4 justify-content-center justify-content-lg-start'>
                                <Nav.Link className='text-white' href='https://www.facebook.com/' target='_blank'>
                                    <BiLogoFacebookCircle className='fs-2'/>
                                </Nav.Link>
                                <Nav.Link className='text-white' href='https://www.instagram.com/' target='_blank'>
                                    <BiLogoInstagramAlt className='fs-2'/>
                                </Nav.Link>
                                <Nav.Link className='text-white' href='https://www.tiktok.com/' target='_blank'>
                                    <BiLogoTiktok className='fs-2'/>
                                </Nav.Link>
                            </Nav>
                        </div>

                        <div className='py-4 py-lg-0 col-md-2 col-lg-2 col-xl-2 mx-auto mt-3'>
                            <h6 className='text-uppercase mb-4 font-weight-bold'>
                                Company
                            </h6>
                            <Nav className='d-flex flex-column row-gap-2'>
                                <Nav.Link className='text-white px-0' href='#'>
                                    About Us
                                </Nav.Link>
                                <Nav.Link className='text-white px-0' href='#'>
                                    Features
                                </Nav.Link>
                                <Nav.Link className='text-white px-0' href='#'>
                                    Works
                                </Nav.Link>
                                <Nav.Link className='text-white px-0' href='#'>
                                    Career
                                </Nav.Link>
                            </Nav>
                        </div>

                        <div className='footer-divider py-4 py-lg-0 col-md-3 col-lg-2 col-xl-2 mx-auto mt-3'>
                            <h6 className='text-uppercase mb-4 font-weight-bold'>
                                Help
                            </h6>
                            <Nav className='d-flex flex-column row-gap-2'>
                                <Nav.Link className='text-white px-0' href='#'>
                                    Customer Support
                                </Nav.Link>
                                <Nav.Link className='text-white px-0' href='#'>
                                    FAQ
                                </Nav.Link>
                                <Nav.Link className='text-white px-0' href='#'>
                                    T & C
                                </Nav.Link>
                                <Nav.Link className='text-white px-0' href='#'>
                                    Privacy Policy
                                </Nav.Link>
                            </Nav>
                        </div>

                        <div className='footer-divider py-4 py-lg-0 col-md-4 col-lg-3 col-xl-3 mx-auto mt-3'>
                            <h6 className='text-uppercase mb-4 font-weight-bold'>
                                Contact
                            </h6>
                            <Nav className='d-flex flex-column row-gap-2'>
                                <Nav.Link className='text-white px-0' href='#'>
                                    New York, NY 10012, US
                                </Nav.Link>
                                <Nav.Link className='text-white px-0' href='mailto:gpcontact@gmail.com'>
                                    gpcontact@gmail.com
                                </Nav.Link>
                                <Nav.Link className='text-white px-0' href='#'>
                                    +01 234 567 88
                                </Nav.Link>
                                <Nav.Link className='text-white px-0' href='#'>
                                    +01 234 542 89
                                </Nav.Link>
                            </Nav>
                        </div>
                    </Row>
                </section>

                <div className='border-top p-3 mt-3 pt-4'>
                    <Row className='d-flex align-items-center p-3'>
                        <div className='col-md-8 text-center text-md-start mb-3 mb-md-0'>
                            <p className='mb-0'>
                                Green Plates © 2000-2023, All Rights Reserved
                            </p>
                        </div>
                        <div className='col-md-4 ml-lg-0 text-center text-md-end'>
                            <img 
                                className='footer-img' 
                                src='https://i.imgur.com/aFkf7gZ.png'
                                alt='Hundred percent natural' 
                            />
                        </div>
                    </Row>
                </div>
            </Container>
        </footer>
    )
}

export default Footer