import { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { MdOutlineAddCircle } from 'react-icons/md';
import { BiSearchAlt, BiLogOut, BiSolidUser } from 'react-icons/bi';
import './navbar.css'

const NavBar: React.FC = () => {
    const navigate = useNavigate();
    const { logout, currentUser } = useContext(AuthContext);
    const [expanded, setExpanded] = useState(false);

    const handleNavLinkClick = (path: string) => {
        setExpanded(false);
        navigate(path);
    };
    console.log('Current user: ', currentUser);

    return (
        <Navbar expanded={expanded} expand='md' sticky='top' className='nav-general shadow' style={{ zIndex: 3 }}>
            <Container fluid className='px-4 mx-0'>
                <NavLink to='/home' className='navbar-brand'>
                    <img className='nav-logo my-1' src='https://i.imgur.com/bBi1u4w.png' alt='Green Plates logo' />
                </NavLink>
                <Navbar.Toggle onClick={() => setExpanded(!expanded)} className='border-0' aria-controls='navbar-nav' />
                <Navbar.Collapse className='justify-content-end' id='navbar-nav'>
                    {currentUser ? (
                        <Nav className='gap-4 my-3 my-md-0'>
                            <Nav.Link
                                onClick={() => handleNavLinkClick('/create-recipe')}
                                className='nav-link d-flex align-items-center justify-content-center column-gap-1'
                            >
                                <MdOutlineAddCircle className='fs-4' />
                                Create
                            </Nav.Link>
                            <Nav.Link
                                onClick={() => handleNavLinkClick('/search')}
                                className='nav-link d-flex align-items-center justify-content-center column-gap-1'
                            >
                                <BiSearchAlt className='fs-4' />
                                Search
                            </Nav.Link>
                            <Nav.Link
                                onClick={() => handleNavLinkClick(`/profile/${currentUser.user_id}`)}
                                className='nav-link d-flex align-items-center justify-content-center column-gap-1'
                            >
                                <BiSolidUser className='fs-4' />
                                Profile
                            </Nav.Link>
                            <Button
                                className='nav-link d-flex align-items-center justify-content-center column-gap-1 btn-nav-link'
                                onClick={() => {
                                    logout()
                                    navigate('/login')
                                }}
                            >
                                <BiLogOut className='fs-4' />
                                Log Out
                            </Button>
                        </Nav>
                    ) : (
                        <Nav className='gap-4 my-3 my-md-0'>
                            <Nav.Link
                                onClick={() => handleNavLinkClick('/search')}
                                className='nav-link d-flex align-items-center justify-content-center column-gap-1'
                            >
                                <BiSearchAlt className='fs-4' />
                                Search
                            </Nav.Link>
                            <Nav.Link
                                onClick={() => handleNavLinkClick('/login')}
                                className='btn primary-btn px-3'>
                                Log In
                            </Nav.Link>
                        </Nav>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar