import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="#home">About</Nav.Link>
                <Nav.Link href="#features">Services</Nav.Link>
                <Nav.Link href="#pricing">Contact Us</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;