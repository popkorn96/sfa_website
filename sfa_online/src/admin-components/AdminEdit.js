import React from 'react';
import {Nav, Navbar, Button, ButtonGroup} from 'react-bootstrap';
import AdminFooter from './AdminFooter';
import * as Icon from 'react-feather';

export default function AdminEdit() {
    return (
        <div>
            <Navbar bg="light" variant="light">
            <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="#home"><Icon.PlusCircle/>Announcement</Nav.Link>
            <Nav.Link href="#features"><Icon.PlusCircle/>Event</Nav.Link>
            <Nav.Link href="#pricing"><Icon.PlusCircle/>Photo to Gallery</Nav.Link>
            </Nav>
                <Nav className="mr-auto">
                </Nav>
                <Nav>

                <Nav.Link inline href="#pricing"><Icon.PlusCircle/>Anuncio</Nav.Link>
                <Nav.Link inline href="#pricing"><Icon.PlusCircle/>Evento</Nav.Link>
                <Nav.Link inline href="#pricing"><Icon.PlusCircle/>Foto a Galería</Nav.Link>
                </Nav>
            </Navbar>
            <br/><h1>Admin Page</h1><br/>
            <h4>English Pages</h4>
            <ButtonGroup aria-label="Basic example">
            <Button variant="secondary">Left</Button>
            <Button variant="secondary">Middle</Button>
            <Button variant="secondary">Right</Button>
            </ButtonGroup>
            <Nav defaultActiveKey="/home" fill variant="tabs">
                <Nav.Link href="/home">Edit Home Page</Nav.Link>
                <Nav.Link eventKey="link-1">Edit Donations Page</Nav.Link>
                <Nav.Link eventKey="link-2">Edit About Us Page</Nav.Link>
            </Nav><br/>
            <h4>Spanish Pages</h4>
            <Nav defaultActiveKey="/home" fill variant="tabs">
                <Nav.Link href="/home">Edit Página Principal</Nav.Link>
                <Nav.Link eventKey="link-1">Edit Donaciónes</Nav.Link>
                <Nav.Link eventKey="link-2">Edit Sobre Nosotros</Nav.Link>
            </Nav>
            <AdminFooter />

        </div>
    )
}

// Only allow access to this page when admin user is logged in
// To create admin user, user authentication through sms, email or google auth is required
// 