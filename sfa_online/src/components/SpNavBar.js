import React from 'react';
import { Nav, Navbar, Form, FormControl, Button, Dropdown, NavItem, NavLink} from 'react-bootstrap';
import {Search} from 'react-feather';

export const SpanishNavigationBar = (props) => {
    return (
        <Navbar collapseOnSelect bg="light" sticky="top" variant="light">
        <Nav className="mr-auto">
          <Nav.Link href="/sp-pagina-principal">Pagina Principal</Nav.Link>
          <Nav.Link href="/sp-eventos">Eventos</Nav.Link>
          <Nav.Link href="/sp-galería">Galería</Nav.Link>
          <Dropdown as={NavItem}>
            <Dropdown.Toggle as={NavLink}>Ministerios</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Hello there!</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Nav.Link href="/sp-donaciónes">Donaciónes</Nav.Link>
          <Nav.Link href="/sp-sobre-nosotros">Quienes Somos</Nav.Link>
          <Nav.Link href="/sp-donaciónes">Donaciónes</Nav.Link>
          <Nav.Link href="/sp-sobre-nosotros">Quienes Somos</Nav.Link>
          
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Buscar en SFA..." className="mr-sm-2" />
          <Button variant="outline-light"><Search color="grey"/></Button>
        </Form>
      </Navbar>
    );
};
export default (SpanishNavigationBar)