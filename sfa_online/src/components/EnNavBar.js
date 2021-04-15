import React from 'react';
import {Navbar, Nav, NavItem, NavLink, Form, FormControl, Button, Dropdown} from 'react-bootstrap/';
import {Search} from 'react-feather';

const EnglishNavigationBar = (props) => {
    return (
        <Navbar collapseOnSelect bg="light" sticky="top" variant="light">
        <Nav className="mr-auto">
          <Nav.Link href="/en-home">Home </Nav.Link>
          <Nav.Link href="/en-events">Events </Nav.Link>
          <Nav.Link href="/en-gallery">Gallery </Nav.Link>
          <Dropdown as={NavItem}>
            <Dropdown.Toggle as={NavLink}>Ministries</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Hello there!</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Nav.Link href="/en-don">Donations </Nav.Link>
          <Nav.Link href="/en-about-us">About Us </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light"><Search color="grey"/></Button>
        </Form>
      </Navbar>
    );
};
export default (EnglishNavigationBar);