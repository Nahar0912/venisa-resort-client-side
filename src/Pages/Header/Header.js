import React from 'react';
import './Header.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <nav>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><h2 className='navbrand fw-bold'>Venisa Resort</h2></Navbar.Brand>
                    <Nav className="me-auto ms-5">
                        <Nav.Link>
                            <NavLink className="nav" to="/home">Home</NavLink>
                        </Nav.Link>
                        <Nav.Link to="/courses">
                            <NavLink className="nav ms-4" to="/service">Service</NavLink>
                        </Nav.Link>
                        <Nav.Link to="/courses">
                            <NavLink className="nav ms-4" to="/gallery">Gallery</NavLink>
                        </Nav.Link>
                        <Nav.Link as={HashLink} to="/home#packages" className='nav ms-4'>Special Packages</Nav.Link>
                        <Nav.Link to="/about">
                            <NavLink className="nav ms-4" to="/about">About Us</NavLink>
                        </Nav.Link>
                        {user?.email ?
                        <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login">
                                <NavLink className="nav ms-5" to="/login">Login</NavLink>
                            </Nav.Link>}
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>         
                    </Nav>        
                </Container>
            </Navbar>
        </nav>
    );
};

export default Header;