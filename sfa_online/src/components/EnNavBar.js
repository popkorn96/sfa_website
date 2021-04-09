import React from 'react';
import {Navbar, Nav} from 'react-bootstrap/';

const EnglishNavigationBar = (props) => {
    return (
        <Navbar collapseOnSelect bg="dark" bg="light" sticky="top" variant="light">
        <Navbar.Brand href="/en-home">Home</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/en-events">Events</Nav.Link>
          <Nav.Link href="/en-gallery">Gallery</Nav.Link>
          <Nav.Link href="/en-donations">Donations</Nav.Link>
          <Nav.Link href="/en-about-us">About Us</Nav.Link>
        </Nav>
      </Navbar>
    );
};
export default (EnglishNavigationBar);