import React from 'react';
import { Nav, Navbar, Form, FormControl, Button} from 'react-bootstrap';


export const SpanishNavigationBar = (props) => {
    return (
        <Navbar collapseOnSelect bg="dark" bg="light" sticky="top" variant="light">
        <Navbar.Brand href="/sp-pagina-principal">Pagina Principal</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/sp-eventos">Eventos</Nav.Link>
          <Nav.Link href="/sp-galería">Galería</Nav.Link>
          <Nav.Link href="/sp-donaciónes">Donaciónes</Nav.Link>
          <Nav.Link href="/sp-sobre-nosotros">Sobre Nosotros</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Buscar en SFA..." className="mr-sm-2" />
          <Button variant="outline-primary">Buscar</Button>
        </Form>
      </Navbar>
    );
};
export default (SpanishNavigationBar)