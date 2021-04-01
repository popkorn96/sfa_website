import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';



export const MainNavigationBar = (props) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">
        <img
        src="/logo1.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt=""
        />{' '}San Francisco de Asis</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav>
            <Nav.Link href="/en-home">English</Nav.Link>
            <Nav.Link eventKey={2} href="/sp-pagína-principal">Español</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
};
export default (MainNavigationBar)