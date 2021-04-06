import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


export const SpanishNavigationBar = (props) => {
    return (
        <Navbar collapseOnSelect bg="dark" bg="light" sticky="top" variant="light">
        <Navbar.Brand href="/sp-pagina-principal">Home</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/sp-eventos">Eventos</Nav.Link>
          <Nav.Link href="/sp-galería">Galería</Nav.Link>
          <Nav.Link href="/sp-donaciónes">Donaciónes</Nav.Link>
          <Nav.Link href="/sp-sobre-nosotros">Sobre Nosotros</Nav.Link>
        </Nav>
      </Navbar>
    );
};
export default (SpanishNavigationBar)