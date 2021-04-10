import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap/';

const EnglishNavigationBar = (props) => {
    return (
        <Navbar collapseOnSelect bg="light" sticky="top" variant="light">
        <Navbar.Brand href="/en-home">Home</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/en-events">Events </Nav.Link>
          <Nav.Link href="/en-gallery">Gallery </Nav.Link>
          <Nav.Link href="/en-don">Donations </Nav.Link>
          <Nav.Link href="/en-about-us">About Us </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search in SFA..." className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar>
    );
};
export default (EnglishNavigationBar);