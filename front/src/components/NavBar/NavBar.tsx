import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { MdOutlineAddCircle } from 'react-icons/md';
import { BiSearchAlt, BiLogOut, BiSolidUser } from 'react-icons/bi';

const NavBar: React.FC = () => {
    const isLoggedIn = false;

    return (
        <Navbar expand='md' sticky='top' className='nav-general shadow'>
            <Container fluid className='px-4 mx-0'>
                <NavLink to='/home' className='navbar-brand'>
                    <img className='nav-logo my-1' src='https://i.imgur.com/bBi1u4w.png' alt='Green Plates logo' />
                </NavLink>
                <Navbar.Toggle className='border-0' />
                <Navbar.Collapse className='justify-content-end'>
                    {isLoggedIn ? (
                        <Nav className="gap-4 my-3 my-md-0">
                            <NavLink to='/create-recipe' className='nav-link d-flex align-items-center justify-content-center column-gap-1'>
                                <MdOutlineAddCircle className='fs-4' />
                                Create
                            </NavLink>
                            <NavLink to='/search' className='nav-link d-flex align-items-center justify-content-center column-gap-1'>
                                <BiSearchAlt className='fs-4' />
                                Search
                            </NavLink>
                            <NavLink to='/profile' className='nav-link d-flex align-items-center justify-content-center column-gap-1'>
                                <BiSolidUser className='fs-4' />
                                Profile
                            </NavLink>
                            <NavLink to='/logout' className='nav-link d-flex align-items-center justify-content-center column-gap-1'>
                                <BiLogOut className='fs-4' />
                                Log Out
                            </NavLink>
                        </Nav>
                    ) : (
                        <Nav className="gap-4 my-3 my-md-0">
                            <NavLink to='/search' className='nav-link d-flex align-items-center justify-content-center column-gap-1'>
                                <BiSearchAlt className='fs-4' />
                                Search
                            </NavLink>
                            <NavLink to='/login' className='btn primary-btn px-3'>
                                Log In
                            </NavLink>
                        </Nav>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar