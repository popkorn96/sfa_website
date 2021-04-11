import React from 'react';
import {Navbar, Nav} from 'react-bootstrap/';



export const MainNavigationBar = (props) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand className="center-navbar"href="/">
            <img
            src="./logo1.png"
            width="60"
            height="60"
            className="d-inline-block align-top"
            alt="SFA logo"
            />{' '}San Francisco de Asís</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav>
            <Nav.Link href="/en-home">English</Nav.Link>
            <Nav.Link eventKey={2} href="/sp-pagina-principal">Español</Nav.Link>
            <Nav.Link className="border-md-left" eventKey={3} href="/admin-login">Admin Login</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
};
export default (MainNavigationBar)