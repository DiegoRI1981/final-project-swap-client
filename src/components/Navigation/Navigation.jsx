import { useContext } from 'react';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.context';



const Navigation = () => {

    const { user, logout } = useContext(AuthContext)

    return (

        <Navbar fixed="top" expand="lg" bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand className='ms-4' href="/">SWAP</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link to="/">
                            <Nav.Link as="span">Home</Nav.Link>
                        </Link>

                        <Link to="/products">
                            <Nav.Link as="span">Products galery</Nav.Link>
                        </Link>
                        {
                            user
                                ?
                                <>
                                    <Link to="/create">
                                        <Nav.Link as="span">Create new product</Nav.Link>
                                    </Link>

                                    <Link to="/profile">
                                        <Nav.Link as="span">Profile</Nav.Link>
                                    </Link>
                                    {/* <Link to="/chatlist">
                                        <Nav.Link as="span">Open chats</Nav.Link>
                                    </Link> */}
                                    {user.role === 'ADMIN' &&
                                        <Link to="/allprofiles">
                                            <Nav.Link as="span">Users profiles</Nav.Link>
                                        </Link>
                                    }
                                    <Link to="/">
                                        <Nav.Link as="span" onClick={logout}>Logout</Nav.Link>
                                    </Link>

                                </>
                                :
                                <>
                                    <Link to="/signup">
                                        <Nav.Link as="span">Signup</Nav.Link>
                                    </Link>

                                    <Link to="/login">
                                        <Nav.Link as="span">Login</Nav.Link>
                                    </Link>
                                </>
                        }


                    </Nav>
                    {user && <Navbar.Text className='me-5'>Bienvenid@, {user.firstname}  </Navbar.Text>}
                    <Navbar.Text>

                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;

