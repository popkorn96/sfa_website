import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap/';



export const MainNavigationBar = (props) => {
    return (
        <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">
        <img
        src="./logo1.png"
        width="40"
        height="40"
        className="d-inline-block align-top"
        alt=""
        />{' '}San Francisco de Asís</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav>
            <Nav.Link href="/en-home">English</Nav.Link>
            <Nav.Link eventKey={2} href="/sp-pagina-principal">Español</Nav.Link>
            <Nav.Link eventKey={3} href="/admin-login">Admin Login</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
};
export default (MainNavigationBar)