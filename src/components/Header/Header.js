import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                <Navbar.Brand>Education Care Coaching Center</Navbar.Brand>
                <Nav className="ms-auto">
                <Nav.Link>
                    <Link to="/home" className="menu">
                        Home
                    </Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="/services" className="menu">
                        Services
                    </Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="/about" className="menu">
                        About Us
                    </Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="/contact" className="menu">
                        Contact Us
                    </Link>
                </Nav.Link>
               
                </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;