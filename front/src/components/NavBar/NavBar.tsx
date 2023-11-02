import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { MdOutlineAddCircle } from 'react-icons/md';
import { BiSearchAlt, BiLogOut, BiSolidUser } from 'react-icons/bi';

const NavBar: React.FC = () => {
    return (
        <Navbar expand='md' sticky='top' className='nav-general shadow'>
            <Container fluid className='px-4 mx-0'>
                <Navbar.Brand href="#">
                    <img className='nav-logo my-1' src='https://i.imgur.com/bBi1u4w.png' alt='Green Plates logo' />
                </Navbar.Brand>
                <Navbar.Toggle className='border-0'/>
                <Navbar.Collapse className='justify-content-end'>
                    <Nav className="gap-4 my-3 my-md-0">
                        <Nav.Link className='d-flex align-items-center justify-content-center column-gap-1' href="#">
                            <MdOutlineAddCircle className='fs-4'/>
                            Create
                        </Nav.Link>
                        <Nav.Link className='d-flex align-items-center justify-content-center column-gap-1' href="#">
                            <BiSearchAlt className='fs-4'/>
                            Search
                        </Nav.Link>
                        <Nav.Link className='d-flex align-items-center justify-content-center column-gap-1' href="#">
                            <BiSolidUser className='fs-4'/>
                            Profile
                        </Nav.Link>
                        <Nav.Link className='d-flex align-items-center justify-content-center column-gap-1' href="#">
                            <BiLogOut className='fs-4'/>
                            Log Out
                        </Nav.Link>
                        <Nav.Link className='primary-btn px-5' as={Button} href="#">
                            Log In
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar