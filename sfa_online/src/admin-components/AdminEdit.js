import React from 'react';
import {Nav, Navbar, Button, ButtonGroup, ButtonToolbar} from 'react-bootstrap';
import AdminFooter from './AdminFooter';
import * as Icon from 'react-feather';

export default function AdminEdit() {
    return (
        <div>
            <ButtonToolbar className="justify-content-between">
                <ButtonGroup aria-label="Basic example">
                <Button variant="light" href="/admin-edit/add-new"><Icon.PlusCircle/>Add New</Button>
                <Button variant="light"><Icon.PlusCircle/>Event</Button>
                <Button variant="light"><Icon.PlusCircle/>Photo to Gallery</Button>
                </ButtonGroup>
                <ButtonGroup aria-label="Basic example">
                <Button variant="light"><Icon.PlusCircle/>Anuncio</Button>
                <Button variant="light"><Icon.PlusCircle/>Evento</Button>
                <Button variant="light"><Icon.PlusCircle/>Foto a Galería</Button>
                </ButtonGroup>
            </ButtonToolbar>
            <br/><h1>Admin Page</h1><br/>
            <h4>English Pages</h4>
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